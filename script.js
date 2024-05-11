function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'active';

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach(content => {
                content.classList.remove(activeClass);
            });
            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add(activeClass, direction);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

function initSmoothScroll() {
    const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    }

    internalLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
}

initSmoothScroll();

function initScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll');
    
    if (sections.length) {  
        const halfWindow = window.innerHeight * 0.6;
        
        function animateScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfWindow) < 0;
                if (isSectionVisible)
                    section.classList.add('active');
                else
                    section.classList.remove('active');
            });
        }
        
        animateScroll();
        
        window.addEventListener('scroll', animateScroll);
    }
}

initScrollAnimation();