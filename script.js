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
