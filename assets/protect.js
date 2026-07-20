// Deterrent: suppress the right-click "Save Image/Video" menu on media.
// Raises the bar for casual users only; determined users can still fetch via DevTools/Network.
document.addEventListener('contextmenu', function (e) {
  var t = e.target;
  if (t && (t.tagName === 'IMG' || t.tagName === 'VIDEO' || (t.closest && t.closest('img,video')))) {
    e.preventDefault();
  }
});
