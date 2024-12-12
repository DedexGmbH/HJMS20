// Name Animations: Sliding In and Out on Scroll
window.addEventListener('scroll', () => {
  const names = document.querySelectorAll('.name');
  const nameSection = document.querySelector('.name-section');
  const triggerPoint = window.innerHeight / 1.5; // Trigger point similar to images

  const sectionTop = nameSection.getBoundingClientRect().top;

  if (sectionTop < triggerPoint && sectionTop > -triggerPoint) {
    // Section is visible; slide in the names
    names.forEach(name => name.classList.add('active'));
  } else {
    // Section is out of view; slide out the names
    names.forEach(name => name.classList.remove('active'));
  }
});

// Immediate Name Slide-In on Page Load
window.addEventListener('load', () => {
  document.querySelectorAll('.name').forEach(name => name.classList.add('active'));
});

// Image Animations: Slide In as They Scroll Into View
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

// Falling Hearts Animation
setInterval(() => createItem('heart', '❤️', '.hearts-container', 5000, 3000), 300);

// Function to Create Falling Items
function createItem(className, content, containerSelector, lifetime, duration) {
  const item = document.createElement('div');
  item.classList.add(className);
  item.textContent = content;
  item.style.left = `${Math.random() * 100}vw`;
  item.style.animationDuration = `${Math.random() * 2 + duration / 1000}s`;
  document.querySelector(containerSelector).appendChild(item);
  setTimeout(() => item.remove(), lifetime);
}
