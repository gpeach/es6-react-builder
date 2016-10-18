require('jquery');
import { bye2 } from './bye2';


export var docWrite = (arg) => {
    $('#container').html(arg);
    return arg;
};

docWrite(bye2);