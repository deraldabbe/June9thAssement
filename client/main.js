



const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
const fortuneBtn = document.getElementById(`fortuneButton`)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)

})
}
fortuneBtn.addEventListener(`click`, getFortune)

const generateBtn = document.getElementById(`generateButton`)
const generateAffirmation = () => {
    const inputTopic = document.getElementById(`inputTopic`).value

    axios.post("http://localhost:4000/api/affirmation", { topic: inputTopic})
    .then(res => {
        const affirmation = res.data
        displayAffirmation(affirmation)
    })
    .catch(error => {
        console.log(error)
    })
}
const displayAffirmation = (affirmation => {
    const affirmationText = document.getElementById(`affirmationText`)
    affirmationText.textContent = affirmation
})
generateBtn.addEventListener(`click`, generateAffirmation)

const goals = ["Exercise for 30 minutes a day.",
    "Read a book for 25 pages.",
    "Meditate for 10 minutes a day.",
    "Learn a new program concept.",
    "Write a journal entry."]

    const selectGoal = document.getElementById(`selectGoal`)
    const trackProgressBtn = document.getElementById(`trackProgressButton`)

    goals.forEach((goal,index) => {
        const option = document.createElement(`option`)
        option.value = index
        option.text = goal
        selectGoal.appendChild(option)
    })

    const trackProgresss = () => {
        const selectedGoalIndex = selectGoal.value
        const selectedGoal = goals[selectedGoalIndex]

        axios.put("http://localhost:4000/api/goal", { goal: selectedGoal})
        .then(res => {
            const message = res.data
            displayProgressUpdate(message)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const displayProgressUpdate = (message) => {
        const progressUpdateText = document.getElementById(`progressUpdateText`)
        progressUpdateText.textContent = message
    }

    trackProgressBtn.addEventListener(`click`, trackProgresss)

    const deleteGoalBtn = document.getElementById(`deleteGoalButton`)

    const deleteGoal = () => {
        const selectedGoalIndex = selectGoal.value
        const selectedGoal = goals[selectedGoalIndex]

        axios.delete("http://localhost:4000/api/goal", { data: { goal: selectedGoal } })
        .then(res => {
            const message = res.data
            displayDeleteMessage(message)
            selectGoal.options[selectedGoalIndex].remove()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const displayDeleteMessage = (message) => {
        const deleteMessage = document.getElementById(`deleteMessage`)
        deleteMessage.textContent = message
    }

    deleteGoalBtn.addEventListener(`click`, deleteGoal)


    