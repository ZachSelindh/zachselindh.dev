const projectDataToInsert = [
  // title, gifLocation, description, date_completed, technologies
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
    ["HTML", "CSS", "Javascript", "Bootstrap"]
  ],
  ["Test title 2", "Test Location 2", "Description 2", Date.now(), "Tech 2"]
];

module.exports = projectDataToInsert;
