const nameInverter = function(name) {
  let indexOfSpace = name.indexOf(" ");
  let lastIndexOfSpace = name.lastIndexOf(" ");
  let length = name.length;
  let nameStart = name.slice(0, 4);
  let trimFirstName = name.slice(name.slice(1).indexOf(" ") + 2);
  let trimLastName = name.slice(name.slice(1).indexOf(" ") + 2);
  let trimmedFirstName = trimFirstName.slice(0, trimFirstName.indexOf(" "));
  let trimmedLastName = trimLastName.slice(trimLastName.indexOf(" ") + 1, trimLastName.length -1);
  console.log(`Index of first space is '${indexOfSpace}'`);
  console.log(`Index of last space is '${lastIndexOfSpace}'`)
  console.log(`nameStart equals: "${nameStart}"`);
  console.log(`String is: "${name}"`);
  console.log(`first word is: "${name.slice(1, name.slice(1).indexOf(" ") + 2)}"`);
  console.log(`second word is: "${trimFirstName.slice(0, trimFirstName.indexOf(" "))}"`);
  console.log(`third word is: "${trimLastName.slice(trimLastName.indexOf(" ") + 1, trimLastName.length -1)}"`);
  if (name === "") {
    console.log("Return condition 1");
    return "";
  } else if (!name.includes(" ")) {
    console.log("Return condition 2");
    return name;
  } else if ((name.charAt(0) === " " && name.charAt(name.length - 1) === " ") && nameStart !== " Dr." && nameStart !== " Mr." && nameStart !== " Mrs" && nameStart !== " Ms.") {
    console.log("Return condition 3");
    return name.slice(1, name.length - 1);
  } else if ((indexOfSpace !== 0 && lastIndexOfSpace !== name.length - 1) && nameStart !== "Dr. " && nameStart !== "Mr. " && nameStart !== "Mrs." && nameStart !== "Ms. ") {
    console.log("Return condition 4");
    let firstName = name.slice(0, indexOfSpace);
    let lastName = name.slice(indexOfSpace + 1, length);
    console.log(`${firstName}, ${lastName}`);
    return `${lastName}, ${firstName}`;
  } else if (name === "Dr. " || name === "Mr. " || name === "Mrs. " || name === "Ms. ") {
    console.log("Return condition 5");
    return "";
  } else if ((nameStart === "Dr. " || nameStart === "Mr. " || nameStart === "Mrs." || nameStart === "Ms. ") && indexOfSpace === lastIndexOfSpace) {
    console.log("Return condition 6");
    return name;
  } else if ((nameStart === "Dr. " || nameStart === "Mr. " || nameStart === "Mrs." || nameStart === "Ms. ") && name.slice(lastIndexOfSpace + 1, name.length) !== "" && name.slice(indexOfSpace + 1, lastIndexOfSpace) !== "") {
    console.log("Return condition 7");
    return `${name.slice(0, indexOfSpace)} ${name.slice(lastIndexOfSpace + 1, name.length)}, ${name.slice(indexOfSpace + 1, lastIndexOfSpace)}`;
  } else if ((name.charAt(0) === " " && name.charAt(name.length - 1) === " ") && (nameStart === " Dr." || nameStart === " Mr." || nameStart === " Mrs" || nameStart === " Ms.")) {
    console.log("Returned the right one");
    console.log(`${name.slice(1, name.slice(1).indexOf(" ") + 2)}${trimmedLastName}, ${trimmedFirstName}`);
    return `${name.slice(1, name.slice(1).indexOf(" ") + 2)}${trimmedLastName}, ${trimmedFirstName}`;
  } else {
    console.log("Did not return anything");
  }
}



console.log(`Name Inverter Returns: ${nameInverter("Dr. first-name last-name")}`);


module.exports = nameInverter;
