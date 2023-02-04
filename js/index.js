import {firstForm} from "./modules/firstForm.js";
import {secondForm} from "./modules/secondForm.js";
import {thirdForm} from "./modules/thirdForm.js";

let action = 1;

document.querySelector('#callFirstForm').onclick = function (){
    if (action === 1){
        firstForm();
        action = 2;
    }else{
        location.reload()
        action = 1;
    }
}

document.querySelector('#callSecondForm').onclick = function (){
    if (action === 1){
        secondForm();
        action = 2;
    }else{
        location.reload()
        action = 1;
    }
}

document.querySelector('#callThirdForm').onclick = function (){
    if (action === 1){
        thirdForm();
        action = 2;
    }else{
        location.reload()
        action = 1;
    }
}

// firstForm()
// secondForm()
// thirdForm()