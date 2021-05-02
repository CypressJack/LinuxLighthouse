const nameInverter = function(name) {
  console.log(`String is: "${name.slice(1, -1)}"`);
  console.log(`0th character is: "${name.charAt(0)}"`);
  console.log(`last character is: "${name.charAt(name.length - 1)}"`);
  if (name === "") {
    return "";
  } else if (!name.includes(" ")) {
    return name;
  } else if (name.charAt(0) === " " && name.charAt(name.length - 1) === " ") {
    console.log(`Return name without spaces "${name.slice(1, name.length - 1)}"`);
    return name.slice(1, name.length - 1);
  }
}


console.log(`Name Inverter Returns: ${nameInverter(" name ")}`);


module.exports = nameInverter;
