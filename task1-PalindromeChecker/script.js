document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const textInput = document.getElementById('text-input');
    const resultDisplay = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputText = textInput.value.trim();

        if(textInput.value === '') {
            alert('Please input a value');
            return;
        }

        function isPalindrome(str) {
            const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
            return cleanStr === cleanStr.split('').reverse().join('');
        }

        resultDisplay.textContent = inputText ? isPalindrome(inputText) ? `Woohoo! It's a Palindrome.` : `Nope! It's not a Palindrome.` : 'Input needed!';
    });
});
