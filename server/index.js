

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');

app.get("/api/compliment", getCompliment);

const { getFortune } = require(`./controller`);

app.get("/api/fortune", getFortune);

app.post(`/api/affirmation`, (req, res) => {
    const { topic } = req.body
    const affirmation = generateCustomAffirmation(topic)
    res.status(200).send(affirmation)
})
const generateCustomAffirmation = (topic) => {
    return `You are capable of achieving great things in ${topic}!`
}
app.listen(4000, () => console.log("Server running on 4000"));
