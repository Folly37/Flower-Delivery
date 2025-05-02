window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
    
    AOS.init({
        startEvent: 'DOMContentLoaded',
        duration: 800,
        easing: 'ease-out',
        delay: 100,
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
        disable: function() {
            return window.innerWidth < 768; 
        },
        useClassNames: false
    });
}
)