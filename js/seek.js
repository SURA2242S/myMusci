let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let bar2 = document.getElementById("bar2");
let seek = document.getElementById("seek");
let dot = document.getElementById("dot");

music.addEventListener("timeupdate", () => {
  let music_current = music.currentTime;
  let music_duration = music.duration;
  //   console.log(music_duration);
  let min1 = Math.floor(music_duration / 60);
  let sec1 = Math.floor(music_duration % 60);
  //   console.log(min1, sec1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentEnd.innerText = `${min1}: ${sec1}`;

  let min2 = Math.floor(music_current / 60);
  let sec2 = Math.floor(music_current % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}: ${sec2}`;

  let progressBar = parseInt((music_current / music_duration) * 100);
  seek.value = progressBar;
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol-bar")[0];
let vol_dot = document.getElementById("vol-dot");
vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
let back = document.getElementById("back");
let next = document.getElementById("next");
// console.log(index);
back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `Audio/${index}.mp3`;
  poster_master_play.src = `Img/${index}.jpg`;
  music.play();

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((es) => {
    let { songName } = es;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, 0.3)";

  makeAllPlay();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

next.addEventListener("click", () => {
  index++;
  if (index > 22) {
    index = 1;
  }
  music.src = `Audio/${index}.mp3`;
  poster_master_play.src = `Img/${index}.jpg`;
  music.play();

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((es) => {
    let { songName } = es;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, 0.3)";

  makeAllPlay();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});
