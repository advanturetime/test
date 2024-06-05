// 스크롤에 따른 화면 효과
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElement = (selector, delay) => {
    setTimeout(() => {document.querySelector(selector).classList.add("fade_in");}, delay);
  };

  fadeInElement(".skillSet", 400);
  fadeInElement(".experience", 600);
});