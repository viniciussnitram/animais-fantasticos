import Accordion from "./module/accordion.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initFetchAnimals from "./module/fetch-animals.js";
import iniFetchBitcoin from "./module/fetch-bitcoin.js";
import initMenuMobile from "./module/menu-mobile.js";
import Modal from "./module/modal.js";
import initOperation from "./module/operation.js";
import initScrollAnimation from "./module/scroll-animation.js";
import SmoothScroll from "./module/smooth-scroll.js";
import TabNav from "./module/tabnav.js";
import Tooltip from "./module/tooltip.js";

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const smothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smothScroll.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initScrollAnimation();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
iniFetchBitcoin();
