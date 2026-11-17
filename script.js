
document.addEventListener("DOMContentLoaded", function () {

    // Total test clicks on this device
    const counter = document.getElementById("total-views");
    const storageKey = "sau_mock_test_clicks";

    let totalClicks = Number(localStorage.getItem(storageKey)) || 0;

    if (counter) {
        counter.textContent = totalClicks;
    }

    // Count test button clicks
    document.querySelectorAll(".test-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            totalClicks++;

            localStorage.setItem(storageKey, totalClicks);

            if (counter) {
                counter.textContent = totalClicks;
            }

        });

    });

});
