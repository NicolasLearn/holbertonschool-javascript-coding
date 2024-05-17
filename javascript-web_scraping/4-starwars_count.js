#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
let count = 0;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const results = JSON.parse(body).results;
  for (const filmId in results) {
    const filmChar = results[filmId].characters;
    for (const index in filmChar) {
      if (filmChar[index].includes('18')) {
        count += 1;
      }
    }
  }
  console.log(count);
});
