export const initMenu = () => {
    const header = document.querySelector('.page-header');

    if (!header) {
        return;
    }

    function toggleMenu() {
        const menu = header.querySelector('.main-nav');
        menu.classList.toggle('is-open');
    }

    function toggleBtn() {
        const btn = header.querySelector('.burger');
        const isActive = header.classList.toggle('nav-is-open');

        btn.classList.toggle('on');
        btn.setAttribute(
            'aria-label',
            btn.dataset[isActive ? 'opened' : 'closed']
        );
    }

    header.addEventListener('click', (ev) => {
        if (ev.target.closest('.burger')) {
            toggleMenu();
            toggleBtn();
        }
    });
};
