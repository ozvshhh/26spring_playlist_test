console.log("하이!");

// 데이터 저장 배열
data = [
    {
        title : "새들처럼",
        artist: "변진섭",
        mp3_src : "./mp3/변진섭 - 새들처럼.mp3",
        img_src : "./source/cassete1.png",
    },
    {
        title : "Happy Day",
        artist: "cherry filter",
        mp3_src : "./mp3/체리필터 - Happy Day.mp3",
        img_src : "./source/cassete2.png",

    },
    {
        title : "Room Temperature",
        artist: "Faye Webster",
        mp3_src : "./mp3/Faye Webster - Room Temperature.mp3",
        img_src : "./source/cassete3.png",

    },
    {
        title : "work, shit, sleep",
        artist: "jisokuryClub",
        mp3_src : "./mp3/jisokuryClub - work, shit, sleep.mp3",
        img_src : "./source/cassete4.png",

    },
    {
        title : "Creep",
        artist: "Radiohead",
        mp3_src : "./mp3/Radiohead - Creep.mp3",
        img_src : "./source/cassete5.png",
    },
    {
        title : "Let me go!",
        artist: "The Volunteers",
        mp3_src : "./mp3/The Volunteers - Let me go!.mp3",
        img_src : "./source/cassete6.png",
    }
]



//조작할 객체 불러오기
const track_cassette_img = document.querySelector(".track-cassette img");
const track_card_title = document.querySelector(".track-card .text-box .song");
const track_card_artist = document.querySelector(".track-card .text-box .artist");
const items_img = document.querySelectorAll(".cassette-item img");
const items = document.querySelectorAll(".cassette-item");

//audio 가져오기
const music = document.querySelector(".music");
console.log(music);

//클릭할만한 요소 가져오기
const tape = document.querySelector(".track-cassette");
console.log(tape);

//클릭할만한 요소에 노래재생 이벤트 추가하기.
tape.addEventListener("click", ()=>{
    music.src = "내 노래가 있는 경로";
    music.autoplay = true;
    music.controls = true;
})


//로직 구현을 위한 기능 구현


cassette_list = [1,2,3,4,5];
let playing_index = 0;
let sound_mute = false;




track_cassette_img.addEventListener("click",(e)=>{
    console.log("재생중이 클릭됨.");
    muteSoundToggle();
    renderPage();
})

function muteSoundToggle(){
    sound_mute = sound_mute ? false : true;
}

function switchCassette(origin_index, new_index){
    playing_index = cassette_list[new_index];
    cassette_list[new_index] = origin_index;
    console.log(`newthing: ${new_index}`);
    console.log(`playing_index: ${playing_index}`)
}

items.forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        switchCassette(playing_index,index);
        renderPage();
    })
})

function renderPage(){
    track_cassette_img.src = data[playing_index].img_src;
    for(let i=0; i<5; i++){
        items_img[i].src = data[cassette_list[i]].img_src;
    }
    track_card_title.innerText = data[playing_index].title;
    track_card_artist.innerText = data[playing_index].artist;
    music.src = data[playing_index].mp3_src;
    music.muted = sound_mute;
    console.log(`plyaing_index: ${playing_index}`);
    console.log(`cassette_list: ${cassette_list}`);
}

renderPage();