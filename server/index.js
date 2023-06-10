

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

const goalsData = {}

app.put(`/api/goal`, (req, res) => {
    const { goal } = req.body
    updateProgress(goal)
    res.status(200).send(`Progress updated successfully.`)
})

const updateProgress = (goal) => {
    if (!goalsData[goal]) {
        goalsData[goal] = 0
    }
    goalsData[goal]++
}

app.delete(`/api/goal`, (req, res) => {
    const { goal } = req.body
    deleteGoal(goal)
    res.status(200).send(`Goal deleted successfully`)
})

const deleteGoal = (goal) => {
    delete goalsData[goal]
}
app.listen(4000, () => console.log("Server running on 4000"));
