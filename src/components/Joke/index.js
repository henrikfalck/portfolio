import React from "react"

function Joke() {
  const jokeArray = [
    "And then the client said, 'Don't use that tone with me'!",
    "What is a video game art designer's favorite soft drink? Sprite.",
    "How many graphic designers does it take to change a light bulb? Does it have to be a light bulb? Because I had this other idea.",
    "What is a UX designers favorite exercise? Sprints.",
    "The website is done! False. A website is never done.",
    "Summer goals: lose 50 layers.",
    "Your x-ray showed a broken rib, but we fixed it with Photoshop.",
    "What type of attack can kill the most typographers? Arial attacks.",
    "Here's a list of changes for your design. You can find them in the attached .txt file",
    "Get with the times, new roman",
    "Oh, crop",
    "Make the logo bigger.",
  ]

  const randomJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)]

  return <h2 data-sal="fade">{randomJoke}</h2>
}

export default Joke
