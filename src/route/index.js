export default {
  original: {
    initialRoute: true,

    title: '原生组件',
    icon: 'pizza',
    view: require('../views/Original').default
  },
  community: {
    title: '社区组件',
    icon: 'coffee',
    view: require('../views/Community').default
  },
  dribbble: {
    title: 'Dribble',
    icon: 'social-dribbble-outline',
    name: 'dribbble',
    view: require('../views/Dribbble').default
  },
  cnodejs: {
    title: 'CNode',
    icon: 'social-nodejs',
    name: 'cnodejs',
    view: require('../views/CNode').default
  }
}
