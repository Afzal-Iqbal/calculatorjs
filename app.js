let display = document.getElementById('inputBox'); // Get the input element
let buttons = document.querySelectorAll('button'); // Get all buttons
let buttonsArray = Array.from(buttons); // Convert NodeList to Array
let string = '';

buttonsArray.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        if (event.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
        } else if (event.target.innerHTML === 'AC') {
            string = '';
        } else if (event.target.innerHTML === '=') {
            try {
                string = eval(string);
            } catch (e) {
                display.value = 'Error';
                string = '';
            }
        } else {
            string += event.target.innerHTML;
        }
        display.value = string; // Update the input box value
        console.log(event.target.innerHTML); // Log the clicked button value
    });
});

console.log(buttonsArray);
