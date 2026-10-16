
const { add } = require("./calculator");

if (add(10, 20) === 30) {
    console.log("Test passed!");
} else {
    console.log("Test failed!");
    process.exit(1);
}
