[].forEach.call(document.querySelectorAll('.page-cell a'), function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();
  });
});
