setTimeout(() => {
  const heart = document.getElementById("main-heart");
  heart.remove();

  for (let i = 0; i < 30; i++) {
    const mini = document.createElement("div");
    mini.className = "mini-heart";
    mini.style.left = "50%";
    mini.style.top = "50%";
    mini.style.setProperty('--x', `${Math.random() * 1000 - 500}px`);
    mini.style.setProperty('--y', `${Math.random() * 800 - 400}px`);
    document.body.appendChild(mini);
  }
}, 3000);
