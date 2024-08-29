import url from "url";
// https://nodejs.org/docs/latest/api/url.html

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.port = '3003';
console.log(myURL)
console.log(myURL.href)