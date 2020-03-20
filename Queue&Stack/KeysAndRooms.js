/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {

  if (rooms.length === 1) return true;
  if (!rooms[0].length && rooms.length > 1) return false;

  const queue = [0];
  const visited = new Set();

  while (queue.length) {

    const key = queue.shift();

    for (let i = 0; i < rooms[key].length; i++) {
      if (!visited.has(rooms[key][i])) {
        queue.push(rooms[key][i]);
      }
    }

    visited.add(key);

  }

  return rooms.length === visited.size;

}

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));
