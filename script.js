function createMiniHeart(x, y) {
  const mini = document.createElement("div");
  mini.className = "mini-heart";
  mini.style.left = `${x}px`;
  mini.style.top = `${y}px`;
  mini.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
  mini.style.setProperty('--y', `${Math.random() * -200}px`);
  document.body.appendChild(mini);

  setTimeout(() => mini.remove(), 3000);
}

// Khi trái tim lớn xoay xong thì biến mất và tạo các trái tim nhỏ
setTimeout(() => {
  const heart = document.getElementById("main-heart");
  if (heart) {
    heart.remove();
  }

  for (let i = 0; i < 30; i++) {
    createMiniHeart(window.innerWidth / 2, window.innerHeight / 2);
  }
}, 2000);

// Click tạo tim nhỏ
document.addEventListener("click", (e) => {
  for (let i = 0; i < 3; i++) {
    createMiniHeart(e.clientX, e.clientY);
  }
});
