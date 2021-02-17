module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {
      arr[j] = bracketsConfig[j][0] + bracketsConfig[j][1];
    }

    for (let k = 0; k < arr.length; k++) {
      if (str.includes(arr[k])) {
        str = str.replace(arr[k], "");
        k = -1;
      }
    }
  }

  if (str === "") {
    return true;
  }
  return false;
}
