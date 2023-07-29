document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audio-player');
  const songListItems = document.querySelectorAll('.song-list li');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const backwardBtn = document.getElementById('backward-btn');
  const forwardBtn = document.getElementById('forward-btn');

  let isPlaying = false;
  let currentSongIndex = 0;

  function playSong(songUrl) {
    audioPlayer.src = songUrl;
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.textContent = 'Pause';
  }

  function playPause() {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseBtn.textContent = 'Play';
    } else {
      audioPlayer.play();
      playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  }

  function selectSong(songIndex) {
    const songListItem = songListItems[songIndex];
    const songUrl = songListItem.getAttribute('data-src');
    playSong(songUrl);
  }

  function switchToPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songListItems.length) % songListItems.length;
    selectSong(currentSongIndex);
  }

  function switchToNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songListItems.length;
    selectSong(currentSongIndex);
  }

  playPauseBtn.addEventListener('click', playPause);
  backwardBtn.addEventListener('click', switchToPreviousSong);
  forwardBtn.addEventListener('click', switchToNextSong);

  // For touch-based devices
  backwardBtn.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevent unwanted scrolling
    switchToPreviousSong();
  });

  forwardBtn.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevent unwanted scrolling
    switchToNextSong();
  });

  songListItems.forEach(function(songListItem, index) {
    songListItem.addEventListener('click', function() {
      currentSongIndex = index;
      selectSong(currentSongIndex);
    });

    // For touch-based devices
    songListItem.addEventListener('touchstart', function(event) {
      event.preventDefault(); // Prevent unwanted scrolling
      currentSongIndex = index;
      selectSong(currentSongIndex);
    });

    // Hover effect
    songListItem.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f2f2f2';
    });

    songListItem.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
    });
  });



const volumeUpBtn = document.getElementById('volume-up-btn');
const volumeDownBtn = document.getElementById('volume-down-btn');

// Function to increase the volume
function increaseVolume() {
  if (audioPlayer.volume < 1) {
    audioPlayer.volume += 0.1;
  }
}

// Function to decrease the volume
function decreaseVolume() {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume -= 0.1;
  }
}

// Event listener for the volume up button
volumeUpBtn.addEventListener('click', increaseVolume);

// Event listener for the volume down button
volumeDownBtn.addEventListener('click', decreaseVolume);

// ... (rest of the existing JavaScript code)



// ... (existing JavaScript code)

const repeatBtn = document.getElementById('repeat-btn');
let repeatMode = 'none'; // Possible values: 'none', 'all', 'one'

// Function to toggle the repeat mode
function toggleRepeat() {
  if (repeatMode === 'none') {
    repeatMode = 'all';
    audioPlayer.loop = false; // Disable single song repeat if enabled
    repeatBtn.textContent = 'Repeat: All';
  } else if (repeatMode === 'all') {
    repeatMode = 'one';
    audioPlayer.loop = true; // Enable single song repeat
    repeatBtn.textContent = 'Repeat: One';
  } else {
    repeatMode = 'none';
    audioPlayer.loop = false; // Disable repeat
    repeatBtn.textContent = 'Repeat: Off';
  }
}

// Event listener for the repeat button
repeatBtn.addEventListener('click', toggleRepeat);

// ... (rest of the existing JavaScript code)




// ... (existing JavaScript code)

const setTimerBtn = document.getElementById('set-timer-btn');
const sleepTimeInput = document.getElementById('sleep-time');
let sleepTimer;

// Function to set the sleep timer
function setSleepTimer() {
  const sleepTimeInSeconds = parseInt(sleepTimeInput.value);
  if (sleepTimeInSeconds > 0) {
    clearInterval(sleepTimer); // Clear any existing sleep timer
    sleepTimer = setTimeout(() => {
      audioPlayer.pause();
      playPauseBtn.textContent = 'Play';
      isPlaying = false;
    }, sleepTimeInSeconds * 1000); // Convert seconds to milliseconds
  }
}

// Event listener for the set timer button
setTimerBtn.addEventListener('click', setSleepTimer);

// ... (rest of the existing JavaScript code)




  

});


