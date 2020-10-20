"use strict";

let button = document.querySelector(".button");

function sortTable() {
    let switching, i, x, y, z, shouldSwitch;
    let table = document.querySelector("table");
    let rows = table.rows;

    switching = true;

    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];

            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

            switching = true;
        }
    }
}

button.addEventListener("click", () => {
    sortTable();
});


