
var links = document.querySelectorAll('.nav-link');


for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {

    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }

    this.classList.add('active');
  });
}
