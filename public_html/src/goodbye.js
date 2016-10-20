require('jquery');
require('../scss/style.scss');
import { bye2 } from './bye2';

/**
 * @function docWrite
 * @description places contents of arg into #container div
 * @param {string} arg - message to display
 * @returns {string}
 */
export var docWrite = (arg) => {
    $('#container').html(arg);
    return arg;
};

docWrite(bye2);