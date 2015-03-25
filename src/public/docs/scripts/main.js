[].forEach.call(document.querySelectorAll('.page-cell a'), function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

new ui.Affix({
  element: '#docs-sidebar',
  offsetTop: 100
});
