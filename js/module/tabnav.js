export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = "active";

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove(activeClass);
    });
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direction);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
