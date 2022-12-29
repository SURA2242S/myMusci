let index = 0;
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (element) => {
    index = element.target.id;
    console.log(index);
  });
});
