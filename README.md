# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js applications using Express.js: unhandled promise rejections in asynchronous routes.  The server continues to run, but errors are silently swallowed, making debugging difficult.

## The Bug

The `bug.js` file contains an Express.js route that performs an asynchronous operation.  If the operation fails, the error is logged to the console but not handled properly, resulting in an unhandled promise rejection.  The client receives no indication of the error.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections in Express.js routes.  It uses a `try...catch` block to catch the error and sends an appropriate error response to the client.