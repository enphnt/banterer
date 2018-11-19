const banter = require("./banter.json");
const sample = require("lodash.sample");

const list = tag => {
  let filtered;

  if (tag) {
    filtered = banter.filter(banterItem => {
      const tagMatches = banterItem.tags.includes(tag);
      const textMatches = banterItem.text.includes(tag);

      return tagMatches + textMatches;
    });
  } else {
    filtered = banter;
  }

  return filtered.map(filteredItem => {
    return `${filteredItem.text}\n\n --${filteredItem.author}`
  });
};

exports.list = list;

exports.random = tag => {
  const filtered = list(tag);

  if (filtered.length <= 0) {
    return "\nSorry, no banter quite like that.\n"
  } else {
    return sample(filtered);
  }
};
