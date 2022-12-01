const year_input = document.getElementById("year");
const month_input = document.getElementById("month");
const date_input = document.getElementById("date");
const data_div = document.getElementById("data");
const submit_btn = document.getElementById("btn")

// console.log(year_input, month_input, date_input, data_div, submit_btn)



submit_btn.addEventListener('click', (e) => {
    let year = year_input.value;
    let month = month_input.value;
    let date = date_input.value;

    // console.log(typeof(year), month, date)

    if (parseInt(year) > new Date().getFullYear() || year.length !== 4) {
        return data_div.innerText = "Invalid Year"
    } else if (parseInt(month) > 12 || parseInt(month) < 1 || month.length === 0) {
        return data_div.innerText = "Invalid Month"
    } else if (parseInt(date) > 31 || parseInt(date) < 1 || date.length === 0) {
        return data_div.innerText = "Invalid Date"
    }

    switch(parseInt(month)) {
        case 4:
        case 6:
        case 9:
        case 11: if(parseInt(date) > 30) {
            return data_div.innerText = "Invalid date"
        };
        case 2: if (parseInt(year) % 4 === 0) {
            if(parseInt(date) > 29) {
                return data_div.innerText = "Invalid date"
            };
        } else {
            if(parseInt(date) > 28) {
                return data_div.innerText = "Invalid date"
            };
        }

    }

    date = parseInt(date);
    month = parseInt(month);
    year = parseInt(year);
    let currDate = new Date().getDate();
    let currMonth = new Date().getMonth();
    let currYear = new Date().getFullYear();

    if(new Date().getDate() < date) {
        currDate = currDate + 30;
        currMonth = currMonth -1
    } else if(new Date().getMonth() < month) {
        currMonth = currMonth + 12;
        currYear = currYear - 1;
    }

    return data_div.innerText = `Your Age is ${currYear - year} Years ${currMonth - month} Months ${currDate - date} Days`
})


