
document.addEventListener('DOMContentLoaded', function () {

    const testLinks = document.querySelectorAll('.test-btn');
    const totalViewsElement = document.getElementById('total-views');

    const storageKey = 'sau-mock-test-clicks';

    let clicks = {};

    try {
        clicks = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (error) {
        clicks = {};
    }

    function updateTotal() {
        const total = Object.values(clicks).reduce(
            (sum, value) => sum + (Number(value) || 0),
            0
        );

        if (totalViewsElement) {
            totalViewsElement.textContent = total.toLocaleString('en-US');
        }
    }

    testLinks.forEach(function (link) {

        const testId = link.dataset.test;

        link.addEventListener('click', function () {

            clicks[testId] = (Number(clicks[testId]) || 0) + 1;

            try {
                localStorage.setItem(storageKey, JSON.stringify(clicks));
            } catch (error) {
                console.warn('Unable to save local test clicks.');
            }

            updateTotal();

        });

    });

    updateTotal();

});
