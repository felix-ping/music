import { LYRICS_URL, SEARCH_URL } from './constants.js'

export function songUrl(mid) {
  return new Promise((res, rej) => {
    function getGuid() {
      let t = (new Date).getUTCMilliseconds();
      return Math.round(2147483647 * Math.random()) * t % 1e10;
    }
    // let guid = getGuid()
    let guid = 9962061892
    window.callback = function(e) {
      let vkey = e.data.items[0].vkey
      let src = `http://dl.stream.qqmusic.qq.com/C400${mid}.m4a?guid=${guid}&vkey=${vkey}&uin=0&fromtag=38`
      res(src)
    }
    let script = document.createElement('script')
    script.src = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=jsonp&callback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid=' + mid + '&filename=C400' + mid + '.m4a&guid=' + guid
    document.body.appendChild(script)
  })
}
export function lyricsUrl(songid) {
  return `${LYRICS_URL}?id=${songid}`
}

export function albumCoverUrl(id) {
  return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${id}.jpg`
}

export function searchUrl(keyword, page = 1) {
  return `${SEARCH_URL}?keyword=${keyword}&page=${page}`
}


