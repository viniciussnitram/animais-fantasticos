import TabNav from "./module/tabnav.js";
import Accordion from "./module/accordion.js";
import SmoothScroll from "./module/smooth-scroll.js";
import initScrollAnimation from "./module/scroll-animation.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initOperation from "./module/operation.js";
import initFetchAnimals from "./module/fetch-animals.js";
import iniFetchBitcoin from "./module/fetch-bitcoin.js";

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const smothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smothScroll.init();

initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
iniFetchBitcoin();
