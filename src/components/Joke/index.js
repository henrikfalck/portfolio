import React from "react"

function Joke() {
  const jokeArray = [
    "Why does UX designers like forks? They're great stakeholders.",
    "And then the client said, 'Don't use that tone with me'!",
    "What is a video game art designer's favorite soft drink? Sprite.",
    "How many graphic designers does it take to change a light bulb? Does it have to be a light bulb? Because I had this other idea.",
    "What is a UX designers favorite exercise? Sprints.",
    "Website is done! False. A website is never done.",
    "Photoshop summer body goals: lose 50 layers.",
    "Your x-ray showed a broken rib, but we fixed it with Photoshop.",
    "Practice safe design: Use a concept.",
  ]

  const randomJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)]

  return <h1>{randomJoke}</h1>
}

export default Joke
