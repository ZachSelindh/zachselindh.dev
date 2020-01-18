const projectDataToInsert = [
  // title, gifLocation, description, date_completed,
  // technologies, github_link, deployed_link,
  [
    "Wild West Hangman",
    "https://media.giphy.com/media/khkTyxl3MOGwczgoJt/giphy.gif",
    "My first functional web application! This app uses vanilla Javascript \
    and the Bootstrap HTML/CSS library for styling, albeit at the level of a \
    true beginner! A basic hangman game, Wild West Hangman uses a native array \
    of possible words to populate the scoreboard. Once a word is chosen, it is \
    kicked out of the array, so it is possible to win the game is you \
    successfully guess all the words! Extra credit if you don't use the \
    console/developer tools to see the words!",
    Date.now(),
    ["html", "css", "javascript", "bootstrap"],
    "https://github.com/ZachSelindh/Hangman-Game",
    "https://zachselindh.github.io/Hangman-Game/"
  ],
  [
    "Crystal Witch Game",
    "https://media.giphy.com/media/XIFgMl6nMtOiKe3F7J/giphy.gif",
    "One of my early apps. This game uses Jquery and timers to create a \
  guessing/memory game in which the player must correctly learn the \
  values of the displayed crystals and use on-the-fly arithmetic to \
  get to the randomly generated target number. \
  \n \
  My app has a twist: In 'Hardcore Mode,' a ten-second timer is \
  constantly counting down. When it reaches zero, the values of \
  the crystals reset, but the current score and target stay the same!",
    Date.now(),
    ["html", "css", "javascript", "bootstrap", "jquery"],
    "https://github.com/ZachSelindh/Crystal-Witch-Game",
    "https://zachselindh.github.io/Crystal-Witch-Game/"
  ],
  [
    "Pop Culture Trivia Game",
    "https://media.giphy.com/media/3s6KDjzmlTQH1iNpoQ/giphy.gif",
    "This application uses JQuery and Javascript timers to create a timed quiz, \
    pulling questions from all sorts of cultural phenomena, from Avengers to \
    Zoolander. \n \
    When the game begins, an RNG chooses one of the in-built questions from \
    a native array, and starts a timer. Whether the user answers correctly \
    or incorrectly, appropriate reaction GIFs and statements are randomly \
    selected for the popup window. \n \
    This app was styled using Bootstrap and a whole lot of nostalgia.",
    Date.now(),
    ["html", "css", "javascript", "bootstrap", "jquery"],
    "https://github.com/ZachSelindh/Crystal-Witch-Game",
    "https://zachselindh.github.io/Crystal-Witch-Game/"
  ],
  [
    "Giphy API: A Night At the Movies",
    "https://media.giphy.com/media/B1E2oPGVhWbx6MPkNh/giphy.gif",
    "One of my first applications using APIs. This app features \
    a row of buttons which query the Giphy API with their keyword \
    to return 10 GIFs that match the search criteria. Actually, \
    they're just still images; mousing over the thumbnails will \
    turn them into animated GIFs. \
    \n\
    Users can also add their own search buttons, \
    as well as clear the GIFs that have been previously populated.",
    Date.now(),
    ["html", "css", "javascript", "bootstrap", "api"],
    "https://github.com/ZachSelindh/GIPHY-API-project",
    "https://zachselindh.github.io/GIPHY-API-project/"
  ],
  [
    "Node Retail Command Line App",
    "https://media.giphy.com/media/dBadldsatjh2W3nmLN/giphy.gif",
    "This is a CLI application that uses Node.js to query MySQL to administer \
stock, price, and availability information for a fake electronics store. \
On the manager side of the application, additional stock and new items can \
be added using the same command line interface. \
\n\
As a CLI, it's not deployed, so my deployment links refer to a youtube\
 video showing the functionality.",
    Date.now(),
    ["javascript", "nodejs", "mysql"],
    "https://github.com/ZachSelindh/BAmazon",
    "https://www.youtube.com/watch?v=-A4jBu9tmHI"
  ]
];

module.exports = projectDataToInsert;
