


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