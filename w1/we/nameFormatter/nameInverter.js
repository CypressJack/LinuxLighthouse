const nameInverter = function(name) {
  let indexOfSpace = name.indexOf(" ");
  let lastIndexOfSpace = name.lastIndexOf(" ");
  let length = name.length;
  console.log(`String is: "${name}`);
  console.log(`first name is: "${name.slice(0, indexOfSpace)}"`);
  console.log(`last name is: "${name.slice(indexOfSpace + 1, length)}"`);
  if (name === "") {
    return "";
  } else if (!name.includes(" ")) {
    return name;
  } else if (name.charAt(0) === " " && name.charAt(name.length - 1) === " ") {
    return name.slice(1, name.length - 1);
  } else if (indexOfSpace !== 0 && lastIndexOfSpace !== name.length - 1) {
    let firstName = name.slice(0, indexOfSpace);
    let lastName = name.slice(indexOfSpace + 1, length);
    console.log(`${firstName}, ${lastName}`);
    return `${lastName}, ${firstName}`;
  }
}


console.log(`Name Inverter Returns: ${nameInverter("first last")}`);


module.exports = nameInverter;
