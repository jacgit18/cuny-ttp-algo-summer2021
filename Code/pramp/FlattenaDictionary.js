const dict = require("./dict");
// import dict from './dict'; ??

function RecflattenDictionary(dict, emptyString, map) {
  let itersection = ".";

  for (prop in dict) {
    if (typeof dict[prop] == "object") {
      RecflattenDictionary(dict[prop], emptyString, map);
    } else {
      if (typeof dict[prop] == "string") {
        console.log(prop, dict[prop]);
      }
    }
  }
  //   map[key] = dict[key]

  //   return map
}

function flattenDictionary(dict) {
  let emptyString = "";
  let map = {};

  return RecflattenDictionary(dict, emptyString, map);
}

flattenDictionary(dict);

//   output: {
//     "Key1" : "1",
//     "Key2.a" : "2",
//     "Key2.b" : "3",
//     "Key2.c.d" : "3",
//     "Key2.c.e" : "1"
// }
