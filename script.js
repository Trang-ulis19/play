function createParticles(x, y) {
  const count = 30;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Tạo hướng bay ngẫu nhiên
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200 + 50;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    particle.style.setProperty('--x', `${dx}px`);
    particle.style.setProperty('--y', `${dy}px`);

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

document.addEventListener("click", (e) => {
  createParticles(e.clientX, e.clientY);
});
