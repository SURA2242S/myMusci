const music = new Audio("audio/Dilber.mp3");
// music.play();
const songs = [
  {
    id: 1,
    songName: `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
  {
    id: 2,
    songName: `Mann meri jaan<br>
        <div class="subtitle">King</div>`,
    poster: "https://i.ytimg.com/vi/VuG7ge_8I2Y/hqdefault.jpg",
  },
  {
    id: 3,
    songName: `Grind<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster: "https://i.ytimg.com/vi/_JXQ2Z4XB2U/hqdefault.jpg",
  },
  {
    id: 4,
    songName: `Firse Machayenge<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster: "https://i.ytimg.com/vi/zaCbuB3w0kg/maxresdefault.jpg",
  },
  {
    id: 5,
    songName: `KR L$DA SIGN<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster:
      "https://www.lyricsbell.com/wp-content/uploads/2022/06/kr-lsda-sign-emiway.jpg",
  },
  {
    id: 6,
    songName: `Lil Bunty<br>
        <div class="subtitle">KR$NA</div>`,
    poster: "https://i.ytimg.com/vi/SenClIIneMI/maxresdefault.jpg",
  },
  {
    id: 7,
    songName: `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
  {
    id: 8,
    songName: `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },

  {
    id: 9,
    songName: `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
  {
    id: 10,
    songName: `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
  {
    id: 11,
    songName: `Dilber<br>
            <div class="subtitle">Neha kakkar</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 12,
    songName: `On and on<br>
            <div class="subtitle">Alen walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 13,
    songName: `Lut gaya<br>
            <div class="subtitle">jubin Nautiyal</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 14,
    songName: `Pasoori<br>
            <div class="subtitle">Ali Sethi and Shae Gill
            </div>`,
    poster: "img/18.jpg",
  },
  {
    id: 15,
    songName: `Meri jindegi<br>
            <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 16,
    songName: `Suna hai<br>
            <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 17,
    songName: `vaste<br>
                <div class="subtitle">Dhvani Bhanushali</div>`,
    poster:
      "https://www.lyricsstop.com/wp-content/uploads/2020/03/Vaaste-Lyrics.jpg",
  },
  {
    id: 18,
    songName: `Barishain<br>
                    <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },

  {
    id: 19,
    songName: `kesariya<br>
            <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
  {
    id: 20,
    songName: `kesariya<br>
            <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
  {
    id: 21,
    songName: `kesariya<br>
            <div class="subtitle">Arijit Singh</div>`,
    poster:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
  },
];
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h6")[0].innerHTML = songs[i].songName;
});
