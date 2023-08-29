function initializeTabs(section) {
  const tabs = section.querySelectorAll('.section__comand-tab');
  const tabContents = section.querySelectorAll('.section__comand-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('section__comand-tab-active'));
      tabContents.forEach(content => content.classList.remove('section__comand-tab-content-active'));

      tab.classList.add('section__comand-tab-active');
      const tabId = tab.getAttribute('data-tab');
      const tabContent = section.querySelector(`#${tabId}`);
      tabContent.classList.add('section__comand-tab-content-active');
    });
  });
}

const sections = document.querySelectorAll('.section__comand');
sections.forEach(section => {
  initializeTabs(section);
});