const app = {};

app.toggle = () => {
  $('.bar').on('click',function (e) {
    e.preventDefault();
    $('.top-nav__nav').css('display', 'block');
  })
}

$(document).ready(function () {

app.toggle();
  
});