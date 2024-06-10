document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("convert-btn");
    const backButton = document.getElementById("go-back-btn");

    const inputContainer = document.getElementById("input-container");
    const outputContainer = document.getElementById("output-container");

    const number = document.getElementById("number");
    const displayOutput = document.getElementById("output");

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        
        if (number.value === ''){
            alert("Please enter a valid number");
            return;
        }
        else if(parseInt(number.value) >= 4000){
            alert("Please enter a number less than or equal to 3999");
            return;
        }
        else if(parseInt(number.value) <= 0){
            alert("Please enter a number greater than or equal to 1");
            return;
        }

        inputContainer.style.display = 'none';
        outputContainer.style.display = 'block';

        const outputValue = toRoman(parseInt(number.value));
        displayOutput.textContent = `It's ${outputValue}`;

        const newPath = `/romanized/${outputValue}`;
        history.pushState({}, '', newPath);
    });

    backButton.addEventListener("click", function(event){
        event.preventDefault();
        outputContainer.style.display = 'none';
        inputContainer.style.display = 'block';

        number.value = '';
        history.pushState({}, '', '/');
    });

    const toRoman = num => {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ]

        let romanNumber = '';

        for(let i=0; i<romanNumerals.length; i++){
            while(num >= romanNumerals[i].value){
                romanNumber += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }

        return romanNumber;
    }
})