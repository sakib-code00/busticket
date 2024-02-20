
const seats = document.querySelectorAll(".seats");
const seatCount = document.querySelector("#seatcount");
const totalSeats = document.querySelector("#totalseat")
const seatnoDiv = document.getElementById("seatno");
const totalSeatButton = document.getElementById("totalseat");
const totalPriceElement = document.getElementById("totalPrice");
let seatPrice = 550;
let totalPrice = 0;
let clickCount = 0;
let totalseatCount = 0;


for(let i = 0; i < seats.length; i++){
    const seat = seats[i];
    seat.addEventListener("click", function(){
        console.log("clicked");

        clickCount++;
        totalseatCount++;
        totalSeats.textContent = totalseatCount;

        let seatInfoDiv = document.createElement("div");
        seatInfoDiv.textContent = seat.textContent;
        seatnoDiv.appendChild(seatInfoDiv);


        let totalSeatCount = parseInt(totalSeatButton.textContent);


        totalPrice = totalSeatCount * seatPrice;


        console.log("Total Price: BDT", totalPrice);
        totalPriceElement.textContent = "BDT " + totalPrice;

        if(seat.classList.contains("bg-gray-300")){
            seat.classList.remove("bg-gray-300");
            seat.classList.add("bg-green-500");
        }

        if (clickCount === 4) {
            alert("You have Booked 4 seats");
            seats.forEach(function(seat) {
                seat.style.pointerEvents = "none";
            });
        }

        
        let count = parseInt(seatCount.textContent);
        if (count > 0) {
            count--;
            seatCount.textContent = count;
        }
        if (count === 0) {
            button.classList.add("pointer-events-none");
        }
        
    })
}


const mainSection = document.getElementById('mainSection');
const nextButton = document.getElementById('nextButton');
const bookingComplete = document.getElementById('bookingcomplete');
const continueButton = document.getElementById('continueButton');

nextButton.addEventListener("click", function(){
    console.log("next button clicked");

    mainSection.classList.add("hidden");
    bookingComplete.classList.contains("hidden");
    bookingComplete.classList.remove("hidden");
});

continueButton.addEventListener("click", function(){

    mainSection.classList.remove("hidden");
    bookingComplete.classList.add("hidden");
});

