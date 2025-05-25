// 金額運算顯示
const showAmount = document.querySelector('#show-amount'); // 數量
const showSubtotal = document.querySelector('#show-subtotal'); // 小計
const showFare = document.querySelector('#show-fare'); // 運費
const showTotal = document.querySelector('#show-total'); // 總計

// 更新金額運算顯示
function updateTableShow() {
    const inputs = document.querySelectorAll('input[type="number"]');
    let sumAmount = 0;
    inputs.forEach(input => {
        sumAmount += Number(input.value);
    });
    showAmount.textContent = `${sumAmount}`; //數量
}
// 初始渲染
updateTableShow();

// 訂單明細渲染
document.querySelectorAll('.order').forEach(row => {
    // 訂單(單價*數量)顯示
    const unitPrice = parseFloat(row.querySelector('.unitprice').dataset.unitprice); // 單價
    const qtyInput = row.querySelector('input[type="number"]'); // 數量
    const priceShow = row.querySelector('.price'); //總價
    // 金額加減按鈕
    const minusBtn = row.querySelector('.btn.minus');
    const plusBtn = row.querySelector('.btn.plus');
    // 單價顯示
    row.querySelector('.unitprice').textContent = `$${unitPrice}`;

    // 更新個別訂單總價顯示
    function updatePrice() {
        priceShow.textContent = `總價:$ ${unitPrice * Number(qtyInput.value)}`;
    }

    // 初次載入
    updatePrice();

    // 數量input改變時 總價顯示改變
    qtyInput.addEventListener('change', function () {
        updatePrice();
        updateTableShow();
    });

    //減按鈕 input.value改變 與 總價顯示改變
    minusBtn.addEventListener('click', function () {
        let value = parseInt(qtyInput.value) || 0; // parseInt() 字串轉成整數
        if (value > 0) {
            qtyInput.value = value - 1;
            updatePrice(); // 手動更新總價
            updateTableShow();
        }
    });

    //加按鈕 input.value改變 與 總價顯示改變
    plusBtn.addEventListener('click', function () {
        let value = parseInt(qtyInput.value) || 0;
        if (value < 99) {
            qtyInput.value = value + 1;
            updatePrice();
            updateTableShow();
        }
    });
});


