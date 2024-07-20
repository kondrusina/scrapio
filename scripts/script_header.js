document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom filly loaded!");

  const botton_start_now = document.querySelector(".botton-start-now");
  botton_start_now.addEventListener("click", () => {
    console.log("start now clicked");
  });

  const btn_english = document.querySelector(".btn-english");
  btn_english.addEventListener("click", () => {
    console.log("english cliced!");
  });

  const btn_lonIin = document.querySelector(".botton-lon-in");
  btn_lonIin.addEventListener("click", () => {
    console.log("login clicked");
  });
});

function replaceImg() {
  const imgEnglish = document.querySelector(".btn-english img");

  if (window.innerWidth <= 460) {
    imgEnglish.src = "../public/img_header/english_sing.svg";
  } else {
    imgEnglish.src = "../public/img_header/english.png";
  }
}
replaceImg();

window.addEventListener("resize", replaceImg);
