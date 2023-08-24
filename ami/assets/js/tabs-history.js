const tabs = document.querySelectorAll('.section__history-tab');
const tabContents = document.querySelectorAll('.section__history-tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(t => t.classList.remove('section__comand-tab-active'));
    tabContents.forEach(content => content.classList.remove('section__comand-tab-content-active'));


    tab.classList.add('section__comand-tab-active');
    const tabId = tab.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('section__comand-tab-content-active');
  });
});