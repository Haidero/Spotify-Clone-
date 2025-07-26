console.log("wellcome to spotify");
let songIndex = 0
let audioElement = new Audio('songs/1.mp3')  // audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif')
let songName = document.getElementsByClassName('songName');
let songs = [
    {songName: "salam", filePath: "songs/1.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/2.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/3.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/4.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/5.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/6.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/7.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/8.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/9.mp3", coverPath: ""},
    {songName: "salam", filePath: "songs/10.mp3", coverPath: ""},
]  

songName.foreach(Element)=>{
    Element.get
}

// handle play, pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.curentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

// Listen event
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate'); 
    // seek bar update
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress);
    myprogressBar.value = progress;
    
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100
} )
