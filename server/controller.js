module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    getFortune: (req, res) => {
        const fortunes = [ "This cookie probably fell on the ground.",
            "Here are the winning lotto numbers for September 16th 2017: 4, 8, 15, 18, 23, 46.",
            "Help, Im being held prisoner in a Chinese bakery.",
            "The fortune you seek is in another cookie.",
            "To truly find yourself, yuo should play hide and seek alone.",
            "It would probably be best to maintain a low profile for now.",
            "I see money in your future... although its not yours.",
            "Live your life... while you can.",
            "When you squeeze an orange, orange juice comes out-  because that is what is inside."]

            let randomIndex = Math.floor(Math.random() * fortunes.length)
            let randomFortune = fortunes[randomindex]

            res.status(200).send(randomFortune)

    }
    
}




