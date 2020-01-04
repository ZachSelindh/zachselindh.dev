const projectDataToInsert = [
  // title, gifLocation, description, date_completed,
  //  technologies, github_link, deployed_link
  [
    "Wild West Hangman",
    "../../assets/gifs/wildwesthangman.gif",
    "My first functional web application! This app uses vanilla Javascript \
    and the Bootstrap HTML/CSS library for styling, albeit at the level of a \
    true beginner! A basic hangman game, Wild West Hangman uses a native array \
    of possible words to populate the scoreboard. Once a word is chosen, it is \
    kicked out of the array, so it is possible to win the game is you \
    successfully guess all the words! Extra credit if you don't use the \
    console/developer tools to see the words!",
    Date.now(),
    ["HTML", "CSS", "Javascript", "Bootstrap"],
    "https://github.com/ZachSelindh/Hangman-Game",
    "https://zachselindh.github.io/Hangman-Game/"
  ],
  [
    "Crystal Witch Game",
    "../../assets/gifs/crystalwitch.gif",
    "One of my early apps. This game uses Jquery and timers to create a \
  guessing/memory game in which the player must correctly learn the \
  values of the displayed crystals and use on-the-fly arithmetic to \
  get to the randomly generated target number. \
  \n \
  My app has a twist: In 'Hardcore Mode,' a ten-second timer is \
  constantly counting down. When it reaches zero, the values of \
  the crystals reset, but the current score and target stay the same!",
    Date.now(),
    ["HTML", "CSS", "Javascript", "Bootstrap", "JQuery"],
    "https://github.com/ZachSelindh/Crystal-Witch-Game",
    "https://zachselindh.github.io/Crystal-Witch-Game/"
  ]
];

module.exports = projectDataToInsert;
