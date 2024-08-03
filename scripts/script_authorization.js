document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom filly loaded!");

  const btn_scrapio = document.querySelector(".btn-logo-scrapio");
  btn_scrapio.addEventListener("click", () => {
    event.preventDefault();
    console.log("logo clicked");
    window.location.href = "../index.html";
  });
});
