// Hiệu ứng trái tim nhỏ ngẫu nhiên
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

// Sau khi trái tim lớn xoay xong, tạo hiệu ứng trái tim nhỏ
setTimeout(() => {
  const heart = document.getElementById("main-heart");
  heart.remove();

  for (let i = 0; i < 30; i++) {
    createMiniHeart(window.innerWidth / 2, window.innerHeight / 2);
  }
}, 3000);

// Thêm hiệu ứng click trái tim nhỏ
document.addEventListener("click", (e) => {
  for (let i = 0; i < 3; i++) {
    createMiniHeart(e.clientX, e.clientY);
  }
});
