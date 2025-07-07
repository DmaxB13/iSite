// List of text items
const texts = [
    "Ett härligt gäng - DmaxB",
    "Man är aldrig ensam - william81601",
    "Sketna skämt - johannis2010",
    "W community - ezzzzzrufus",
    "Snälla spelare - MollyDB",
    "Vontyloria, en fin stad - GaucheLace01040",
  ];

  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  // Shuffle the texts array
  shuffleArray(texts);

  // Get the shuffled text and display it
  const shuffledText = texts[0];  // Take the first shuffled text

  // Insert the shuffled text into the HTML
  document.getElementById('shuffled-text').innerText = shuffledText;