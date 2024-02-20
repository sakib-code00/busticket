const seats = document.querySelectorAll(".seats");
const seatCount = document.querySelector("#seatcount");
const totalSeats = document.querySelector("#totalseat")
const seatnoDiv = document.getElementById("seatno");
let clickCount = 0;
let totalseatCount = 0;


for(let i = 0; i < seats.length; i++){
    const seat = seats[i];
    seat.addEventListener("click", function(){
        console.log("clicked");

        clickCount++;
        totalseatCount++;
        totalSeats.textContent = totalseatCount;

        var seatInfoDiv = document.createElement("div");
        seatInfoDiv.textContent = seat.textContent;
        seatnoDiv.appendChild(seatInfoDiv);

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

        
        var count = parseInt(seatCount.textContent);
        if (count > 0) {
            count--;
            seatCount.textContent = count;
        }
        if (count === 0) {
            button.classList.add("pointer-events-none");
        }
        
    })
}