const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/activity', (req, res) => {
    const activity = {
        activity: "Jouer au ping pong",
        price: 0.2,
        type: "recreational",
        participants: 2
    };
    res.send(JSON.stringify(activity));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
