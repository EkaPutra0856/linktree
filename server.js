const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Serve static files (like video) from /public
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to serve HTML from /views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
