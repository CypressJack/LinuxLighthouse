const nameInverter = function(name) {
  let indexOfSpace = name.indexOf(" ");
  let lastIndexOfSpace = name.lastIndexOf(" ");
  let length = name.length;
  let nameStart = name.slice(0, 4);
  let trimFirstName = name.slice(name.slice(1).indexOf(" ") + 2);
  let trimLastName = name.slice(name.slice(1).indexOf(" ") + 2);
  let trimmedFirstName = trimFirstName.slice(0, trimFirstName.indexOf(" "));
  let trimmedLastName = trimLastName.slice(trimLastName.indexOf(" ") + 1, trimLastName.length -1);
  if (name === "") {
    return "";
  } else if (!name.includes(" ")) {
    return name;
  } else if ((name.charAt(0) === " " && name.charAt(name.length - 1) === " ") && nameStart !== " Dr." && nameStart !== " Mr." && nameStart !== " Mrs" && nameStart !== " Ms.") {
    return name.slice(1, name.length - 1);
  } else if ((indexOfSpace !== 0 && lastIndexOfSpace !== name.length - 1) && nameStart !== "Dr. " && nameStart !== "Mr. " && nameStart !== "Mrs." && nameStart !== "Ms. ") {
    let firstName = name.slice(0, indexOfSpace);
    let lastName = name.slice(indexOfSpace + 1, length);
    return `${lastName}, ${firstName}`;
  } else if (name === "Dr. " || name === "Mr. " || name === "Mrs. " || name === "Ms. ") {
    return "";
  } else if ((nameStart === "Dr. " || nameStart === "Mr. " || nameStart === "Mrs." || nameStart === "Ms. ") && indexOfSpace === lastIndexOfSpace) {
    return name;
  } else if ((nameStart === "Dr. " || nameStart === "Mr. " || nameStart === "Mrs." || nameStart === "Ms. ") && name.slice(lastIndexOfSpace + 1, name.length) !== "" && name.slice(indexOfSpace + 1, lastIndexOfSpace) !== "") {
    return `${name.slice(0, indexOfSpace)} ${name.slice(lastIndexOfSpace + 1, name.length)}, ${name.slice(indexOfSpace + 1, lastIndexOfSpace)}`;
  } else if ((name.charAt(0) === " " && name.charAt(name.length - 1) === " ") && (nameStart === " Dr." || nameStart === " Mr." || nameStart === " Mrs" || nameStart === " Ms.")) {
    return `${name.slice(1, name.slice(1).indexOf(" ") + 2)}${trimmedLastName}, ${trimmedFirstName}`;
  } else {
  }
}



module.exports = nameInverter;
