/**
 * Service for URL templating.
 */
import UrlTemplate from './url-template'
import * as _ from './lang'

function Url(url, params) {
  const urlParams = Object.keys(Url.options.params)
  let queryParams = {}
  let options = url
  let query

  if (!_.isPlainObject(options)) {
    options = {url: url, params: params}
  }

  options = _.extend(true, {},
    Url.options, this.options, options
  )

  url = UrlTemplate.expand(options.url, options.params, urlParams)

  url = url.replace(/(\/?):([a-z]\w*)/gi, (match, slash, name) => {
    if (options.params[name]) {
      urlParams.push(name)
      return slash + encodeUriSegment(options.params[name])
    }
    return ''
  })

  if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
      url = options.root + '/' + url;
  }

  Object.keys(options.params).forEach((name, index) => {
    const value = options.params[name]
    if (urlParams.indexOf(key) === -1) {
      queryParams[key] = value
    }
  })

  query = Url.params(queryParams)

  if (query) {
    url += (url.indexOf('?') == -1 ? '?' : '&') + query
  }

  return url
}

/**
 * Url options.
 */

Url.options = {
  url: '',
  root: null,
  params: {}
}

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {
  const params = []

  params.add = function (key, value) {
    if (typeof value === 'function') {
      value = value()
    }

    if (value === null) {
      value = ''
    }

    this.push(encodeUriSegment(key) + '=' + encodeUriSegment(value))
  }

  serialize(params, obj)

  return params.join('&')
}

function serialize(params, obj, scope) {
  _.each(obj, function (value, key) {
    const hash = _.isObject(value) || Array.isArray(value)

    if (scope) {
      key = scope + '[' + (_.isPlainObject(obj) || hash ? key : '') + ']'
    }

    if (!scope && Array.isArray(obj)) {
      params.add(value.name, value.value)
    } else if (hash) {
      serialize(params, value, key)
    } else {
      params.add(key, value)
    }
  })
}

function encodeUriSegment(value) {
  return encodeUriQuery(value, true)
    .replace(/%26/gi, '&')
    .replace(/%3D/gi, '=')
    .replace(/%2B/gi, '+')
}

function encodeUriQuery(value, spaces) {
  return encodeURIComponent(value)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, (spaces ? '%20' : '+'))
}

export default Url
