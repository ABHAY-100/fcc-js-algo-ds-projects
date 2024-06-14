document.addEventListener("DOMContentLoaded", ()=>{
    const userInput = document.getElementById("user-input");
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultsDiv = document.getElementById("results-div")

    const validatePhoneNumber = phoneNumber => {
        const countryCode = '^(1\\s?)?';
        const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
        const spacesDashes = '[\\s\\-]?';
        const pNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
        const pattern = new RegExp(`${countryCode}${areaCode}${spacesDashes}${pNumber}`);

        return pattern.test(phoneNumber);
    }

    const displayResults = check => {
        if(check) {
            resultsDiv.textContent = "outcome: all good, homie!";
            resultsDiv.classList.remove('bg-red-100', 'text-red-700', 'dark:bg-red-400', 'dark:text-red-300', 'hidden');
            resultsDiv.classList.add('text-lime-700', 'dark:bg-lime-400/10', 'dark:text-lime-300', 'block');
        }
        else{
            resultsDiv.textContent = 'outcome: nah, not a valid number!';
            resultsDiv.classList.remove('bg-lime-400/20', 'text-lime-700', 'dark:bg-lime-400/10', 'dark:text-lime-300', 'hidden');
            resultsDiv.classList.add('bg-red-100', 'text-red-700', 'dark:bg-red-400/10', 'dark:text-red-300', 'block');
        }
    }

    checkBtn.addEventListener('click', (event)=>{
        event.preventDefault();

        if(userInput.value === ''){
            resultsDiv.textContent = "outcome: no number? no validation";
            resultsDiv.classList.remove('bg-lime-400/20', 'text-lime-700', 'dark:bg-lime-400/10', 'dark:text-lime-300', 'hidden');
            resultsDiv.classList.add('bg-red-100', 'text-red-700', 'dark:bg-red-400/10', 'dark:text-red-300', 'block');
            return;
        }

        const inputValue = userInput.value;
        const check = validatePhoneNumber(inputValue);
        displayResults(check);
    })

    clearBtn.addEventListener('click', (event)=>{
        event.preventDefault();

        userInput.value = '';
        resultsDiv.classList.add('hidden');
    })
})