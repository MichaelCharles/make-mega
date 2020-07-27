const fs = require("fs"),
  oneMega = require('./one-mega'),
  size = process.argv[2] || 100;

function main() {
  try {
    console.log(`Attempting to write...`);
    // eslint-disable-next-line node/prefer-promises/fs
    const stream = fs.createWriteStream(size + "-mb.txt", { flags: 'a'});
    [...Array(parseInt(size))].forEach(function(item, index) {
      stream.write(oneMega);
    })
    stream.end();
    console.log(`${size}mb file successfully created.`);
  } catch ({ message }) {
    console.log(message);
  }
}

module.exports = main;
