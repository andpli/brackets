module.exports = function check(str, bracketsConfig) {
  // your solution
  let strNew = '';
  while (strNew != str && str != '') {
     strNew = str;
     bracketsConfig.forEach(element => {
     str = str.replace(element[0] + element[1],"");
    });
  }

  return str == "";
}
