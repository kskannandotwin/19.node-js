// you can use the built in file system module in node.js to manage files and folders: read, write etc.
const fs = require("fs");
const mars = "mars.txt";
const venus = "venus.txt";
const jupiter = "jupiter.txt";

// synchronous way: the following code is blocking, JS does not move to the next line until the current line is executed.
// check if mars exists
console.log(fs.existsSync(mars));

// read mars
try {
  let data = fs.readFileSync(mars, "utf-8");
  console.log(`
${mars} content:
${data}
`);
} catch (error) {
  console.log(`
   error:
   ${error}
   `);
}

// create jupiter or override content:
// read jupiter
try {
  fs.writeFileSync(jupiter, "Jupiter has the shortest day of all planets.");
  data = fs.readFileSync(jupiter, "utf-8");
  console.log(`
${jupiter} content:
${data}
`);
} catch (error) {
  console.log(`
     error:
     ${error}
     `);
}

// override content of venus:
fs.writeFileSync(venus, "this is some text.");

// read venus
try {
  data = fs.readFileSync(venus, "utf-8");
  console.log(`
${venus} content:
${data}
`);
} catch (error) {
  console.log(`
     error:
     ${error}
     `);
}

// append content to jupiter
fs.appendFileSync(jupiter, "\nsome text.");

// read jupiter
try {
  data = fs.readFileSync(jupiter, "utf-8");
  console.log(`
${jupiter} content:
${data}
`);
} catch (error) {
  console.log(`
     error:
     ${error}
     `);
}

console.log("hello");
