/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map();

var encode = function (longUrl) {
  const shortUrl = 'http://tinyurl.com/' + map.size;
  map.set(shortUrl, longUrl);
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
