// const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
function parseURL(url) {
  const [protocol, ...rest] = url.split("://");
  const value = rest.join("").split("/");
  return [url, protocol, value[0], value.slice(1, value.length).join("/")];
}

console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"));
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript
