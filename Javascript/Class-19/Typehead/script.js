const resultsSection = document.getElementById('results');
const input = document.querySelector('#container input');

input.addEventListener('keyup', function () {
    const query = input.value;
    // if input query is empty string then do not do anything.
    if (query.trim().length === 0) {
        return;
    }
    
})