let timeframe = document.querySelectorAll('.timeframe');
let title = document.querySelectorAll('.title');
let current = document.querySelectorAll('.current');
let previous = document.querySelectorAll('.previous');

main();

async function main() {
    await weeklyValue();
}

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

    const infoValue = option.value;

    switch (infoValue) {
        case 'daily':
            dailyValue();
            break;
        case 'weekly':
            weeklyValue();
            break;
        case 'monthly':
            monthlyValue();
            break;
    }
}

function disableTimeframe() {
    const timeframeSelected = document.querySelector('.active');
    timeframeSelected.classList.remove('active');
}

/* || SYNCHRONIZE THE CARD VALUES */
async function dailyValue() {
    const response = await fetch('data.json');
    const data = await response.json();

    for (var i = 0; i < data.length; i++) {
        title[i].innerHTML = data[i].title;
        current[i].innerHTML = data[i].timeframes.daily.current;
        previous[i].innerHTML = data[i].timeframes.daily.previous;

    }

}

async function weeklyValue() {
    const response = await fetch('data.json');
    const data = await response.json();

    for (var i = 0; i < data.length; i++) {
        title[i].innerHTML = data[i].title;
        current[i].innerHTML = data[i].timeframes.weekly.current;
        previous[i].innerHTML = data[i].timeframes.weekly.previous;

    }

}

async function monthlyValue() {
    const response = await fetch('data.json');
    const data = await response.json();

    for (var i = 0; i < data.length; i++) {
        title[i].innerHTML = data[i].title;
        current[i].innerHTML = data[i].timeframes.monthly.current;
        previous[i].innerHTML = data[i].timeframes.monthly.previous;

    }

}