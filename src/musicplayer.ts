//__Eigencode__
// Music Player
var songs: Array<any> = ["A_brilliant_idea.mp3", "Morning_Mood.mp3", "A_beautiful_memory.mp3"];
var songTitle = document.getElementById("song");
var song = new Audio();
var currentSong = 0; //current Song
var playbtn = document.getElementById("play");

export function clickMusic() {
playbtn!.addEventListener("click", playPause);
}
function playPause() {
  if(song.paused){
    playSong();
  } else {
    song.pause();
  }
}

function playSong () {
  song.src = songs[currentSong];
  songTitle!.textContent = songs[currentSong]; //set Title of Song
  song.play();
}

document.getElementById("nextbtn")!.addEventListener("click", function(){
    currentSong++;
    if(currentSong > 2){
      currentSong = 0;
    }
    playSong();
})

document.getElementById("pre")!.addEventListener("click", function(){
  currentSong--;
  if(currentSong < 0){
    currentSong = 2;
  }
  playSong();
})