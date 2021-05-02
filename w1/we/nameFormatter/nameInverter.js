const nameInverter = function(name) {
  console.log(name.charAt(-1));
  if (name === "") {
    return "";
  } else if (!name.includes(" ")) {
    return name;
  } else if (name.charAt(0) === " " && name.charAt(-1) === " ") {
    return name.slice(0, -1);
  }
}


console.log(`Name Inverter Returns: ${nameInverter("")}`);


module.exports = nameInverter;
