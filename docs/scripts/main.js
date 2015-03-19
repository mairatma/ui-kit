[].forEach.call(document.querySelectorAll('a'), function (elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();
  });
});
