window.addEventListener('load', function() {

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let select = document.getElementById('select');
    let regExp = /[^+\d]/g;
    // ввод только цифр в поля inp1 и inp2
    function regInt() {
        this.value = this.value.replace(regExp, '');
    }
    inp1.addEventListener('input', regInt);
    inp2.addEventListener('input', regInt);

    //подсчет результата
    btn.addEventListener('click', function() {

        let inpVal1 = parseInt(inp1.value);
        let inpVal2 = parseInt(inp2.value);

        let optionValue = select.options[select.options.selectedIndex].value;

        if (optionValue === '+') {
            sum = inpVal1 + inpVal2;
        }
        if (optionValue === '-') {
            sum = inpVal1 - inpVal2;
        }
        if (optionValue === '*') {
            sum = inpVal1 * inpVal2;
        }
        if (optionValue === '/') {
            sum = inpVal1 / inpVal2;
        }
        res.innerHTML = sum;
        btn.disabled = true;
    });

    // активация кнопки при измененнии в полях и select
    inp1.addEventListener('input', isEnabled);
    inp2.addEventListener('input', isEnabled);
    select.addEventListener('change', isEnabled);

    function isEnabled() {
        btn.disabled = false;
    }
});

