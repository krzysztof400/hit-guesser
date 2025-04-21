// DOM elements
const songLink = document.getElementById('songLink');
const randomizeBtn = document.getElementById('randomizeBtn');
const songInfo = document.getElementById('songInfo');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songYear = document.getElementById('songYear');

// Current song index
let currentSongIndex = -1;

// Function to get a random song
function getRandomSong() {
  let newIndex;
  // Make sure we don't get the same song twice in a row
  do {
    newIndex = Math.floor(Math.random() * musicHits.length);
  } while (newIndex === currentSongIndex && musicHits.length > 1);
  
  currentSongIndex = newIndex;
  return musicHits[currentSongIndex];
}

// Function to update the UI with a new song
function updateSong() {
  const song = getRandomSong();
  
  // Update the link
  songLink.href = song.link;
  songLink.textContent = "Click to listen to a popular music hit";
  
  // Update the song info
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  songYear.textContent = song.year;

  // Show the song info section
  songInfo.style.display = 'block';
  
  // Update button text for next action
  randomizeBtn.textContent = "Randomize Another Song";
}

// Initialize with a random song
const initialSong = getRandomSong();
songLink.href = initialSong.link;

// Event listener for the button
randomizeBtn.addEventListener('click', updateSong);