import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Define routes
app.get('/', (req, res) => {
  // Send the index.html file when the root URL is
  // accessed
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// import express from 'express'
// import * as dotenv from 'dotenv'
// dotenv.config()

// const app = express()
// const port = process.env.PORT || 3000
// import path from 'path'

// __dirname = path.resolve();

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'client/build')));

// // Define routes
// app.get('/', (req, res) => {
//   // Send the index.html file when the root URL is accessed
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
//     });





