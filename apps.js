const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

const BASE_DIR = path.join(__dirname, 'views'); // Fixed the reference here
const PORT = 8080;

router.get('/', (req, res) => {
    res.sendFile(path.join(BASE_DIR, 'index.html'));
});

router.get('/sharks', (req, res) => {
    res.sendFile(path.join(BASE_DIR, 'sharks.html'));
});

app.use(express.static(BASE_DIR));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});