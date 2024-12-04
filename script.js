let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let res = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            res = eval(res);
        }
        else if(e.target.innerHTML == 'AC') {
            res = "";
        }
        else if(e.target.innerHTML == 'DEL') {
            res = res.slice(0,-1);  
        }
        else {
            res += e.target.innerHTML;
        }
        input.value = res;
    })
});

window.addEventListener('keydown', (e) => {
    let key = e.key;

    if(key>='0' && key<='9' || ['*','/','%','-','+'].includes(key)) {
        res += key;
        input.value = res;
    }
    else if(key === 'Enter') {
        res = eval(res);
        input.value = res;
    }
    else if(key === 'Backspace') {
        res = res.slice(0,-1);
        input.value = res;
    }
    else if(key === 'c' || key === 'C') {
        res = "";
        input.value = res;
    }
})
