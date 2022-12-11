import { iosVhFix } from './utils/ios-vh-fix';
import { initCustomSelect } from './modules/form/init-custom-select';
import { initFormValidate } from './modules/form/init-form-validate';
import { initMenu } from './modules/init-menu';

window.addEventListener('DOMContentLoaded', () => {
    iosVhFix();
    initCustomSelect();
    initFormValidate();
    initMenu();
});
