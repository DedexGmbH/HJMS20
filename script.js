// Falling Hearts Animation
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  document.querySelector('.hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// Image Animations
const imageItems = document.querySelectorAll('.image-item');
window.addEventListener('scroll', () => {
  imageItems.forEach(item => {
    const triggerPoint = window.innerHeight / 1.5;
    if (item.getBoundingClientRect().top < triggerPoint) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// Scroll-Based Name Animation
const names = document.querySelectorAll('.name');
window.addEventListener('scroll', () => {
  const nameSection = document.querySelector('.name-section');
  const triggerPoint = window.innerHeight / 1.5;

  if (nameSection.getBoundingClientRect().top < triggerPoint) {
    names.forEach(name => name.classList.add('active'));
  } else {
    names.forEach(name => name.classList.remove('active'));
  }
});
