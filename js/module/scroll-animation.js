export default function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    
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
