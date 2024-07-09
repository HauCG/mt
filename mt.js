
const soThu1Input = document.getElementById('SoThu1');
const soThu2Input = document.getElementById('SoThu2');
const resultElement = document.getElementById('result');
function cong() {
    const soThu1 = parseFloat(soThu1Input.value);
    const soThu2 = parseFloat(soThu2Input.value);
    if (isNaN(soThu1) || isNaN(soThu2)) {
        resultElement.innerText = 'Vui lòng nhập số hợp lệ.';
        return;
    }
    const ketQua = soThu1 + soThu2;
    resultElement.innerText = `Kết quả cộng: ${ketQua}`;
}
function tru() {
    const soThu1 = parseFloat(soThu1Input.value);
    const soThu2 = parseFloat(soThu2Input.value);
    if (isNaN(soThu1) || isNaN(soThu2)) {
        resultElement.innerText = 'Vui lòng nhập số hợp lệ.';
        return;
    }
    const ketQua = soThu1 - soThu2;
    resultElement.innerText = `Kết quả trừ: ${ketQua}`;
}
document.getElementById('congButton').addEventListener('click', cong);
document.getElementById('truButton').addEventListener('click', tru);
