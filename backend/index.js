const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/api', (req, res) => {
    res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
