
const message = "Hello, CI/CD!";

// Check whether the message matches the expected output
if (message === "Hello, CI/CD!") {
    console.log("Test passed!");
} else {
    console.log("Test failed!");
    process.exit(1);
}
