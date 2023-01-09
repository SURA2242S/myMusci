const music = new Audio("Audio/1.mp3");
// music.play();
const songs = [
  {
    id: 1,
    songName: `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster: "Img/1.jpg",
  },
  {
    id: 2,
    songName: `Mann meri jaan<br>
        <div class="subtitle">King</div>`,
    poster: "Img/2.jpg",
  },
  {
    id: 3,
    songName: `Grind<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster: "Img/3.jpg",
  },
  {
    id: 4,
    songName: `Firse Machayenge<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster: "Img/4.jpg",
  },
  {
    id: 5,
    songName: `KR L$DA SIGN<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster: "Img/5.jpg",
  },
  {
    id: 6,
    songName: `Lil Bunty<br>
        <div class="subtitle">KR$NA</div>`,
    poster: "Img/6.jpg",
  },
  {
    id: 7,
    songName: `Opps<br>
        <div class="subtitle">King</div>`,
    poster: "Img/7.jpg",
  },
  {
    id: 8,
    songName: `Khatam hua wande<br>
        <div class="subtitle">Emiway Bantai</div>`,
    poster: "Img/8.jpg",
  },

  {
    id: 9,
    songName: `Tauba<br>
        <div class="subtitle">Badsha</div>`,
    poster: "Img/9.jpg",
  },
  {
    id: 10,
    songName: `Ring Ring<br>
        <div class="subtitle">Emiway and Mimax</div>`,
    poster: "Img/10.jpg",
  },
  {
    id: 11,
    songName: `Besharam Rang
     Caralisa Monteiro, Shilpa Rao, and Vishal–Shekhar
    <br>
            <div class="subtitle">Caralisa Monteiro, Shilpa Rao, and Vishal–Shekhar</div>`,
    poster: "Img/11.jpg",
  },
  {
    id: 12,
    songName: `Dilbar<br>
            <div class="subtitle"> Asees Kaur, Dhvani Bhanushali, Neha Kakkar, Ikka Singh</div>`,
    poster: "Img/12.jpg",
  },
  {
    id: 13,
    songName: `Pasoori<br>
            <div class="subtitle">Ali Sethi and Shae Gill</div>`,
    poster: "Img/13.jpg",
  },
  {
    id: 14,
    songName: `On and On<br>
            <div class="subtitle">
            Stephen Bishop
            </div>`,
    poster: "Img/14.jpg",
  },
  {
    id: 15,
    songName: `Suna Hai<br>
            <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "Img/15.jpg",
  },
  {
    id: 16,
    songName: `Vaste<br>
            <div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "Img/16.jpg",
  },
  {
    id: 17,
    songName: `Meri jindegi<br>
                <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "Img/17.jpg",
  },
  {
    id: 18,
    songName: `Lut gaya<br>
                    <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "Img/18.jpg",
  },

  {
    id: 19,
    songName: `Agar tum sath ho<br>
            <div class="subtitle">Arijit Singh and Alka yagnik</div>`,
    poster: "Img/19.jpg",
  },
  {
    id: 20,
    songName: `Baris hain<br>
            <div class="subtitle">Atif Aslam</div>`,
    poster: "Img/20.jpg",
  },
  {
    id: 21,
    songName: `Zarori tha<br>
            <div class="subtitle"Rahat Fateh Ali Khan
            ></div>`,
    poster: "Img/21.jpg",
  },
  {
    id: 22,
    songName: `Lagdi Lahore di<br>
            <div class="subtitle">Guru Randhawa</div>`,
    poster: "Img/22.jpg",
  },
];
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h6")[0].innerHTML = songs[i].songName;
});
