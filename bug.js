const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that doesn't properly handle the error and doesn't send an error response
    console.error(err); // Log the error to the console
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject(new Error('Something went wrong'));
    }, 100);
  });
}