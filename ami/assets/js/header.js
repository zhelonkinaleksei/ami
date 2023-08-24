
const headDrops = document.querySelectorAll('.head__drop');
const dropLists = document.querySelectorAll('.drop__list');

for (let i = 0; i < headDrops.length; i++) {
  headDrops[i].addEventListener('click', function(e) {
    closeOtherLists(i);
    headDrops[i].classList.toggle('head__drop-active');
    dropLists[i].classList.toggle('drop__list-active');
    e.stopPropagation();
  });
}

document.addEventListener('click', function(e) {
  for (let i = 0; i < headDrops.length; i++) {
    if (!headDrops[i].contains(e.target)) {
      headDrops[i].classList.remove('head__drop-active');
      dropLists[i].classList.remove('drop__list-active');
    }
  }
});

function closeOtherLists(excludeIndex) {
  for (let j = 0; j < dropLists.length; j++) {
    if (j !== excludeIndex) {
      headDrops[j].classList.remove('head__drop-active');
      dropLists[j].classList.remove('drop__list-active');
    }
  }
}