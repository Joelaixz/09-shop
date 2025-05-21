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

// 訂單(單價*數量)顯示
document.querySelectorAll('.order').forEach(row => {
    const unitPrice = parseFloat(row.querySelector('.unitprice').dataset.unitprice); // 單價
    const qtyInput = row.querySelector('input[type="number"]'); // 數量
    const priceShow = row.querySelector('.price'); //總價

    function updatePrice() {
        priceShow.textContent = `總價:$ ${unitPrice * Number(qtyInput.value)}`;
    }
    // 初次載入
    updatePrice();
    // 數量改變時 監聽
    qtyInput.addEventListener('change', updatePrice);
});