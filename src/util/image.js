export function shotImage (shot) {
  const uri = shot.images.normal ? shot.images.normal : shot.images.teaser
  return { uri }
}

export function authorAvatar (player) {
  var uri;
  if (player) {
    uri = player.avatar_url
    return { uri }
  } else {
    uri = require('../styles/AuthorAvatar.png')
    return uri
  }
}

