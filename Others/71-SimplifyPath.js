/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const commands = path
    .split('/')
    .filter(str => str !== '' && str !== '.');
  const stack = [];

  for (const command of commands) {
    if (command === '..')
      stack.pop();
    else
      stack.push(command);
  }

  let str = '';

  for (const el of stack) {
    str += `/${el}`;
  }

  return stack.length === 0 ? '/' : str;
}

console.log(simplifyPath('/home/')); // '/home'
console.log(simplifyPath('/../')); // '/'
console.log(simplifyPath('/home//foo/')); // '/home/foo'
console.log(simplifyPath('/a/./b/../../c/')); // '/c'
console.log(simplifyPath('/a/../../b/../c//.//')); // '/c'
console.log(simplifyPath('/a//b////c/d//././/..')); // '/a/b/c'
