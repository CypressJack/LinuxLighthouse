const nameInverter = function(name) {
  let indexOfSpace = name.indexOf(" ");
  let lastIndexOfSpace = name.lastIndexOf(" ");
  let length = name.length;
  let nameStart = name.slice(0, 3);
  console.log(`String is: "${name}`);
  console.log(`first word is: "${name.slice(0, indexOfSpace)}"`);
  console.log(`second word is: "${name.slice(indexOfSpace + 1, length)}"`);
  console.log(`third word is: "${name.slice(lastIndexOfSpace, name.length)}"`);
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
  } else if (name === "Dr. " || name === "Mr. " || name === "Mrs. " || name === "Ms. ") {
    return "";
  } else if ((nameStart === "Dr. " || nameStart === "Mr. " || nameStart === "Mrs. " || nameStart === "Ms. ") && indexOfSpace === lastIndexOfSpace) {
    return name;
  }
}


console.log(`Name Inverter Returns: ${nameInverter("Dr.first last")}`);


module.exports = nameInverter;
