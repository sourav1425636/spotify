console.log("Welcome to spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let song=[
    {songName:"Warriyo - Mortals (feat. laura brehm) ", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Cielo - Huma-Huma", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Deav Kev - Invincible", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Different Heaven & Ehide - my heart", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-Feat-Johnning", filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Rabba - Salam-e-Ishq", filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
    {songName:" Sakhiyaan - Salam-e-Ishq", filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Bhula Dena - Salam-e-Ishq", filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
]

songItem.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
// let audioElement=new Audio('1.mp3');
// audioElement.play();

//Handle  Play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   
    //Update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        // mastersongName.innerText = song[songIndex].songName;
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        mastersongName.innerText = song[songIndex].songName;
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    mastersongName.innerText = song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    mastersongName.innerText = song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})