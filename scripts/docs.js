document.addEventListener("DOMContentLoaded", function(event) {
  [].forEach.call(document.querySelectorAll('.docs-cell a'), function(elem) {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  new ui.Affix({
    element: '#docs-sidebar',
    offsetTop: 72
  });

  new ui.Scrollspy({
    element: '#docs-sidebar',
    activeClass: 'sidebar-link-selected'
  });
});
