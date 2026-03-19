// Simple lightbox for gallery images
document.addEventListener('DOMContentLoaded', function () {
  // Create modal elements
  var modal = document.createElement('div');
  modal.id = 'lightbox';
  modal.innerHTML = '<img id="lightbox-img" src="" alt=""><button id="lightbox-close" aria-label="Close">&times;</button>';
  document.body.appendChild(modal);

  var img = document.getElementById('lightbox-img');
  var closeBtn = document.getElementById('lightbox-close');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    img.src = '';
  }

  // Attach click handlers to all gallery images
  document.querySelectorAll('.gallery-grid .gallery-item img').forEach(function (el) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () {
      open(el.src, el.alt);
    });
  });

  // Close on button, backdrop click, or Escape
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});
