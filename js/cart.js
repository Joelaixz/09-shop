
// 金額加減按鈕
const minusBtns = document.querySelectorAll('.btn.minus');
const plusBtns = document.querySelectorAll('.btn.plus');

function minusBtn() {
    const input = this.nextElementSibling; // 後一個兄弟元素是 input
    let value = parseInt(input.value) || 0; // parseInt() 字串轉成整數
    if (value > 0) {
        input.value = value - 1;
    }
}

function plusBtn() {
    const input = this.previousElementSibling; // 前一個兄弟元素是 input
    let value = parseInt(input.value) || 0;
    if (value < 99) {
        input.value = value + 1;
    }
}

minusBtns.forEach(button => {
    button.addEventListener('click', minusBtn);
});

plusBtns.forEach(button => {
    button.addEventListener('click', plusBtn);
});