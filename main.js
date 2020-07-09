// variables
const sec1 = document.getElementById("sec-1");
const sec2 = document.getElementById("sec-2");
const error = document.getElementById("error");
const input = document.getElementById("input");
const backBtn = document.getElementById("back-btn");

let output = "";

// functions

function back() {
    sec2.classList.add("hide");
    backBtn.classList.add("hide");
    sec1.classList.remove("hide");
    input.value = "";
}

function compare(zodiac) {
    switch (zodiac) {
        case "leo":
            return true;
        case "Leo":
            return true;
        case "virgo":
            return true;
        case "Virgo":
            return true;
        case "aries":
            return true;
        case "Aries":
            return true;
        case "taurus":
            return true;
        case "Taurus":
            return true;
        case "gemini":
            return true;
        case "Gemini":
            return true;
        case "Cancer":
            return true;
        case "Cancer":
            return true;
        case "libra":
            return true;
        case "Libra":
            return true;
        case "Scorpio":
            return true;
        case "scorpio":
            return true;
        case "sagittarius":
            return true;
        case "Saggitarius":
            return true;
        case "Capricorn":
            return true;
        case "capricorn":
            return true;
        case "aquarius":
            return true;
        case "Aquarius":
            return true;
        case "pisces":
            return true;
        case "Pisces":
            return true;

        default:
            return false;
    }
}

$(document).ready(() => {
    $("#day-buttons").on("click", (e) => {
        let zodiac = $("#input").val();
        let day = $(e.target).attr("id");
        console.log(day);
        console.log(zodiac);

        error.textContent = "";
        if (zodiac.length < 2 || !compare(zodiac)) {
            error.textContent = "Enter a valid sign";
        } else {
            show(zodiac, day);
        }

        e.preventDefault();
    });
});

function show(sign, day) {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;

    // POST request using fetch()
    fetch(URL, {
        // Adding method type
        method: "POST",
    })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
            let zodiacSign = json;
            console.log(json);
            sec1.classList.add("hide");
            sec2.classList.remove("hide");
            backBtn.classList.remove("hide");

            let output = `

                        <h1 id="top-name"><span>
                        <img src="./assets/${sign}.png" alt=""> 
                        </span>${sign}</h1>
                        <div class="data">
                            <ul class="list">
                                <li class="list-item"><i class="ai sun"></i> <strong>Current Date: </strong>${zodiacSign.current_date}</li>
                                <li class="list-item"><i class="ai sun"></i> <strong>Date Range: </strong>${zodiacSign.date_range}</li>
                                <li class="list-item"><i class="ai sun"></i> <strong>Compatibility: </strong>${zodiacSign.compatibility}</li>
                                <li class="list-item"><i class="ai sun"></i> <strong>Color: </strong>${zodiacSign.color}</li>
                                <li class="list-item"><i class="ai sun"></i> <strong>Lucky Number: </strong>${zodiacSign.lucky_number}</li>
                                <li class="list-item"><i class="ai sun"></i> <strong>Lucky Time: </strong>${zodiacSign.lucky_time} </li>
                                <li class="list-item"><i class="ai sun"></i> <strong>Mood: </strong>${zodiacSign.mood} </li>
                            </ul>
                        </div>

                        <h3><i class="ai ${sign}"></i> Description</h3>
                        <p>${zodiacSign.description}</p

            `;

            $("#sec-2").html(output);
        });
}
