const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
