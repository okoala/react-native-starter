import {
  BackAndroid
} from 'react-native'

let routes = null

try {
  routes = require('../route')
} catch (e) {}

export default class Navigate {
  static getInitialRoute (path, customRoutes) {
    if (customRoutes) {
      routes = customRoutes
    }
    if (!routes) {
      return null
    }
    if (path) {
      return {
        path,
        ...routes[path]
      }
    } else {
      let initial
      for (const route in routes) {
        if (routes[route].initialRoute) {
          initial = {path: route, ...routes[route]}
          break
        }
      }
      return initial || {
        path,
        ...routes[Object.keys(routes)[0]]
      }
    }
  };

  constructor (navigator) {
    this.navigator = navigator
    this.savedInstanceStates = new Map()
    this.currentRoute = null
    this.isChild = false

    BackAndroid.addEventListener('hardwareBackPress', this._hardwareBackPress)
  }

  _getPathPrettyName (path) {
    path = path.split('.')
    if (path.length === 1) {
      path = path[0]
    } else {
      path = path[path.length - 1]
    }
    return path.charAt(0).toUpperCase() + path.slice(1)
  }

  _hardwareBackPress () {
    if (!this.isChild) {
      BackAndroid.exitApp()
      return false
    } else {
      this.back()
      return true
    }
  }

  _getRouteObject (path) {
    let obj = routes
    const properties = path.replace(/\./g, '.children.').split('.')
    if (properties.length === 1) {
      return obj[path]
    }
    properties.forEach((key) => {
      if (!obj || !hasOwnProperty.call(obj, key)) {
        obj = undefined
        return
      }
      obj = obj[key]
    })
    return obj
  };

  _saveInstanceState (path, instanceState) {
    if (instanceState) {
      this.savedInstanceStates.set(path, instanceState)
    }
  }

  _recoverInstanceState (path) {
    const instanceState = this.savedInstanceStates.get(path)
    if (instanceState) {
      this.savedInstanceStates.delete(path)
    }
    return instanceState || null
  }

  to (path, title, props) {
    if (!path) {
      console.warn('[Navigate.to(undefined)] A route path is required to navigate to')
      return
    }

    const obj = this._getRouteObject(path)
    if (!obj || !obj.component) {
      console.warn(`[Navigate.to(${path})] No component exists at this path`)
      return
    }

    this.isChild = path.split('.').length > 1
    const route = {
      title: title || (obj.title ? obj.title : path),
      path,
      component: obj.component,
      props
    }
    this.currentRoute = route
    this.navigator.replace(route)
  }

  back (title, props) {
    const current = this.navigator.getCurrentRoutes()[0].path
    const path = current.substr(0, current.lastIndexOf('.'))
    const obj = this._getRouteObject(path)

    // const savedInstance = this._recoverInstanceState(path)

    if (!obj) {
      console.warn(`[Navigate.back()] No component exists for the parent of ${current}`)
      return
    }

    this.isChild = path.split('.').length > 1
    const route = {
      title: title || obj.title || this._getPathPrettyName(path),
      path,
      component: obj.component,
      props
    }
    this.currentRoute = route
    this.navigator.replace(route)
  }

  forward (child, title, props, savedInstanceState) {
    const current = this.navigator.getCurrentRoutes()[0].path
    const currentObject = this._getRouteObject(current)

    if (!currentObject.children || !Object.keys(currentObject.children).length) {
      console.warn(`[Navigate.forward()] No child components exists for ${current}`)
      return
    }

    this.isChild = true
    if (child) {
      const path = `${current}.${child}`
      const obj = this._getRouteObject(path)
      if (!obj) {
        console.warn(`[Navigate.forward(${child})] Child component ${child} does not exist on ${current}`)
      } else {
        const route = {
          title: title || obj.title || this._getPathPrettyName(path),
          path,
          component: obj.component,
          props
        }
        this.currentRoute = route
        this.navigator.replace(route)
      }
    } else {
      const path = `${current}.${Object.keys(currentObject.children)[0]}`
      const obj = this._getRouteObject(path)
      const route = {
        title: title || obj.title || this._getPathPrettyName(path),
        path,
        component: obj.component,
        props
      }
      this.currentRoute = route
      this.navigator.replace(route)
    }
  }

  getRoutes () {
    return routes
  }

  setRoutes (newRoutes) {
    routes = newRoutes
  }
}
