import Url from '../util/url'

import {
  CNODE_API_URL,
  DRIBBBLE_USER,
  DRIBBBLE_API_URL,
  DRIBBBLE_ACCESS_TOKEN
} from '../../config'

const defaultDribbbleOptions = {
  headers: {
    "Authorization": DRIBBBLE_USER + " " + DRIBBBLE_ACCESS_TOKEN
  }
}

function _fetchData (url, defaultParams = {}, defaultOptions = {}) {
  return {
    get: function (params = {}, options = {}) {
      const _options = Object.assign(defaultOptions, options, {method: 'GET'})
      const _params = Url.params(Object.assign(defaultParams, params))
      return fetch(url + '?' + _params, _options).then(res => res.json())
    },
    save: function (params = {}, options = {}) {
      const _options = Object.assign(defaultOptions, options, {method: 'POST'})
      _options.body = JSON.stringify(Object.assign(defaultParams, params))
      return fetch(url, _options).then(res => res.json())
    }
  }
}

export default {
  getDribbbleShots: _fetchData(DRIBBBLE_API_URL + 'shots', {per_page: 10, page: 1}, defaultDribbbleOptions),
  getCNodeAllTopics: _fetchData(CNODE_API_URL),
  getDribbbleResources: function (url) {
    return fetch(url, defaultDribbbleOptions).then(res => res.json())
  }
}
