function inputNumber(input) {
    document.getElementById('input_number').value +=input;
}
function calculate() {
    let input = document.getElementById('input_number').value;
    if(input == '')
        document.getElementById('input_number').value ='';
    else
    {
        let calculate = eval(input);
        document.getElementById('input_number').value = calculate;
    }
}
function clearCalculator() {
    document.getElementById('input_number').value = '';
}