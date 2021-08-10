const app = require('./app.js');
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})