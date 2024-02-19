const seats = document.querySelectorAll(".seats");
const seatCount = document.querySelector("#seatcount");
let clickCount = 0;
for(let i = 0; i < seats.length; i++){
    const seat = seats[i];
    seat.addEventListener("click", function(){
        console.log("clicked");

        clickCount++;

            if (clickCount === 4) {
                alert("You have Booked 4 seats");
                seats.forEach(function(seat) {
                    seat.style.pointerEvents = "none";
                });
            }



        if(seat.classList.contains("bg-gray-300")){
            seat.classList.remove("bg-gray-300");
            seat.classList.add("bg-green-500");
        }

        console.log(clickCount);
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