let timeframe = document.querySelectorAll('.timeframe');

/* || SELECT TIMEFRAME */
timeframe.forEach((option) => {
    option.addEventListener('click', () => {
        disableTimeframe();
        selectTimeframe(option);
    });
});

/* || FUNCTION SELECT TIMEFRAME */
function selectTimeframe(option) {
    option.classList.toggle('active');
}

function disableTimeframe() {
    const timeframeSelected = document.querySelector('.active');
    timeframeSelected.classList.remove('active');
}

// /* || SYNCHRONIZE THE CARD VALUES */
// async function cardValue() {
//     const response = await fetch('data.json');
//     const data = await response.json();


// }

