function changeColor(color) {
  document.body.style.backgroundColor = color;
}
const footer = document.querySelector('#footer')


const hashLinks = document.querySelectorAll('.hash-route-link')
const routes = {
  "" : {
    title: "Education"
  },
  "#article" : {
    title: "Experience"
  },
  "#card" : {
    title: "Informations"
  },
  
  "#footer" : {
    title: "Contact"
  }
}
function checkRoute (hash = window.location.hash) {
  // console.log(routes[hash])
  document.title = routes[hash].title
}

hashLinks.forEach(item => item.addEventListener("click", (event) => {
  // console.log(item.hash)
  // console.log(event)
  checkRoute(item.hash)
}))

checkRoute ()

let isAnimating = false;
const animation = document.querySelector('#colorPalette')
animation.addEventListener('click', function() {
  if(isAnimating) {
  this.classList.remove('animate__animated', 'animate__bounce','animate__infinite'); 
}
else {
  this.classList.add('animate__animated', 'animate__bounce','animate__infinite');
}
  isAnimating = !isAnimating;
})

const resimAnimation = document.querySelector('.resim')
resimAnimation.classList.add('animate__animated', 'animate__zoomInDown','animate__slow')

const nameHeading = document.querySelector('.nameHeading')
nameHeading.classList.add('animate__animated', 'animate__bounceInRight','animate__slow')

