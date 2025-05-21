
document.querySelectorAll('.order').forEach(row => {
    // 訂單(單價*數量)顯示
    const unitPrice = parseFloat(row.querySelector('.unitprice').dataset.unitprice); // 單價
    const qtyInput = row.querySelector('input[type="number"]'); // 數量
    const priceShow = row.querySelector('.price'); //總價
    // 金額加減按鈕
    const minusBtn = row.querySelector('.btn.minus');
    const plusBtn = row.querySelector('.btn.plus');

    function updatePrice() {
        priceShow.textContent = `總價:$ ${unitPrice * Number(qtyInput.value)}`;
    }

    // 初次載入
    updatePrice();

    // 數量改變時 監聽
    qtyInput.addEventListener('change', updatePrice);


    minusBtn.addEventListener('click', function () {
        let value = parseInt(qtyInput.value) || 0; // parseInt() 字串轉成整數
        if (value > 0) {
            qtyInput.value = value - 1;
            updatePrice(); // 手動更新總價
        }
    });


    plusBtn.addEventListener('click', function () {
        let value = parseInt(qtyInput.value) || 0;
        if (value < 99) {
            qtyInput.value = value + 1;
            updatePrice();
        }
    });
});