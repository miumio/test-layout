import { ScrollLock } from '../utils/scroll-lock';
const breakpointMd = window.matchMedia('(max-width:1023px)');

export const initMenu = () => {
    const header = document.querySelector('.page-header');
    window.scrollLock = new ScrollLock();

    if (header) {
        const TOGGLER_SELECTOR = '.burger';
        const toggler = header.querySelector(TOGGLER_SELECTOR);
        const menu = header.querySelector('.main-nav');

        const toggleMenu = () => {
            toggler.classList.toggle('on');
            menu.classList.toggle('is-open');
            const isActive = header.classList.toggle('nav-is-open');
            toggler.setAttribute(
                'aria-label',
                toggler.dataset[isActive ? 'opened' : 'closed']
            );
        };

        header.addEventListener('click', (ev) => {
            if (ev.target.closest(TOGGLER_SELECTOR)) {
                toggleMenu();
            }

            if (menu.classList.contains('is-open') && breakpointMd.matches) {
                window.scrollLock.disableScrolling();
            } else {
                window.scrollLock.enableScrolling();
            }
        });
    }
};
