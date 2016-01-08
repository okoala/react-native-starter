import {
  DRIBBBLE_API_URL,
  DRIBBBLE_ACCESS_TOKEN
} from '../config'

function _fetchDribbleData (url) {
  return fetch(DRIBBBLE_API_URL + url, {
    headers: {
      "Authorization": "Bearer " + DRIBBBLE_ACCESS_TOKEN
    }
  }).then(res => res.json())
}

export default {
  getShotsByType: function (type, pageNumber) {
    var URL = API_URL + "shots/?list=" + type
    if (pageNumber) {
      URL += "&per_page=10&page=" + pageNumber
    }

    return _fetchDribbleData(URL)
  }
}
