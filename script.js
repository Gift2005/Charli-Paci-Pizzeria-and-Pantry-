// NAV TOGGLE
document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.add('open');
});
document.getElementById('closeMenuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.remove('open');
});
document.querySelectorAll('#navDropdown a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navDropdown').classList.remove('open');
  });
});

// MENU MODAL
function openMenu() {
  var modal = document.getElementById('menuModal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('menuModal').classList.remove('open');
  document.body.style.overflow = '';
}

// TODAY'S HOURS
(function() {
  var now = new Date();
  var day = now.getDay();
  var time = now.getHours() + now.getMinutes() / 60;
  var schedule = {
    0: null,
    1: null,
    2: { open: 11, close: 18.5 },
    3: { open: 11, close: 18.5 },
    4: { open: 11, close: 20.5 },
    5: { open: 11, close: 20.5 },
    6: { open: 11, close: 20.5 }
  };
  var today = schedule[day];
  var s1 = document.getElementById('today-status');
  var s2 = document.getElementById('today-status2');
  var h  = document.getElementById('today-hours');
  function fmt(v) {
    var hrs  = Math.floor(v);
    var mins = (v % 1 === 0.5) ? '30' : '00';
    var ampm = hrs < 12 ? 'AM' : 'PM';
    var h12  = hrs > 12 ? hrs - 12 : hrs;
    return h12 + ':' + mins + ' ' + ampm;
  }
  if (!today) {
    if (s1) { s1.textContent = 'Closed Today'; s1.style.color = '#cc7050'; }
    if (s2) { s2.textContent = 'Closed Today'; s2.style.color = '#cc7050'; }
    if (h)  { h.textContent  = 'Closed on Sundays & Mondays'; }
  } else {
    var isOpen = time >= today.open && time < today.close;
    var txt = isOpen ? '&#9679; Open Now' : '&#9679; Closed';
    var col = isOpen ? '#6aaa70' : '#cc7050';
    if (s1) { s1.innerHTML = txt; s1.style.color = col; }
    if (s2) { s2.innerHTML = txt; s2.style.color = col; }
    if (h)  { h.textContent = fmt(today.open) + ' - ' + fmt(today.close); }
  }
})();