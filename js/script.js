import initTabNav from "./module/tabnav.js";
import initAccordion from "./module/accordion.js";
import SmoothScroll from "./module/smooth-scroll.js";
import initScrollAnimation from "./module/scroll-animation.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initOperation from "./module/operation.js";
import initFetchAnimals from "./module/fetch-animals.js";
import iniFetchBitcoin from "./module/fetch-bitcoin.js";

const smothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smothScroll.init();

initTabNav();
initAccordion();
initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
iniFetchBitcoin();
