/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = (names) => {

  const map = {};

  for (const name of names) {
    if (!map[name]) {
      map[name] = 1;
    } else {
      let index = map[name];
      while (map[`${name}(${index})`]) {
        index++;
      }
      map[`${name}(${index})`] = 1;
      map[name] = index;
    }
  }

  return Object.keys(map);

}

console.log(getFolderNames(["pes","fifa","gta","pes(2019)"])); // ["pes","fifa","gta","pes(2019)"]
console.log(getFolderNames(["gta","gta(1)","gta","avalon"])); // ["gta","gta(1)","gta(2)","avalon"]
console.log(getFolderNames(["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"])); // ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
console.log(getFolderNames(["wano","wano","wano","wano"])); // ["wano","wano(1)","wano(2)","wano(3)"]
console.log(getFolderNames(["kaido","kaido(1)","kaido","kaido(1)"])); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
