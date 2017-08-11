// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/andrw/code/datalegreya-react/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/andrw/code/datalegreya-react/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/andrw/code/datalegreya-react/.cache/json/dev-404-page.json"),
  "index.json": require("/home/andrw/code/datalegreya-react/.cache/json/index.json")
}

exports.layouts = {

}