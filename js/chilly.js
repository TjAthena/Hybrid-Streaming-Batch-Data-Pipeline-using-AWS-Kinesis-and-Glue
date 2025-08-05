  //specs tabs
  const tabs = document.querySelectorAll('.tab-chilly-specs');
const contents = document.querySelectorAll('.tab-content-chilly-specs');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all
    tabs.forEach(t => t.classList.remove('active-chilly-specs'));
    contents.forEach(c => c.classList.remove('active-chilly-specs'));

    // Add to clicked tab
    tab.classList.add('active-chilly-specs');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active-chilly-specs');
  });
});