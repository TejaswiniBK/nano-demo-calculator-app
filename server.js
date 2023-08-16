const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator';

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).send('Greetings');
});

baseRouter.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Missing parameters' });
    }
    const result = num1 + num2;
    res.status(200).json({ result });
});

baseRouter.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Missing parameters' });
    }
    const result = num1 - num2;
    res.status(200).json({ result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
