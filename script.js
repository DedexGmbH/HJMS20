let autoScrollInterval;
let userScrolling = false;
let autoScrollDelay;

// Function to auto-scroll the page
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    window.scrollBy(0, 1);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      clearInterval(autoScrollInterval);
    }
  }, 10);
}

// Stop auto-scrolling
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Manage user scrolling
window.addEventListener('scroll', () => {
  if (!userScrolling) {
    userScrolling = true;
    stopAutoScroll();
  }

  clearTimeout(autoScrollDelay);
  autoScrollDelay = setTimeout(() => {
    userScrolling = false;
    startAutoScroll();
  }, 3000);
});

// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '⬆️ Top';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  stopAutoScroll();
  setTimeout(startAutoScroll, 3000);
});

// Show/hide button
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Start auto-scroll
startAutoScroll();
