const banter = require("./banter.json");
const sample = require("lodash.sample");

const list = tag => {
  const filtered = tag ? banter.filter(j => j.tags.includes(tag)) : banter;
  return filtered.map(j => j.text);
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
