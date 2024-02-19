const passengerSeatContainer = document.getElementById('passenger-seat-container');
const passengerSeatAll = passengerSeatContainer.getElementsByTagName('button');
let totalTicketBooked = 0;
let leftTicket = 40;
let totalPrice = 0;
let grandTotalPrice = 0;
let totalSeatBooked = 0;


for (const passengerSeat of passengerSeatAll) {
    passengerSeat.addEventListener('click', function () {
        if (totalSeatBooked < 4) {

            this.style.background = '#1DD100';
            this.style.color = 'white';
            this.setAttribute('disabled', 'true');

            // ticket left
            const ticketLeft = document.getElementById('ticket-left');

            leftTicket--;
            ticketLeft.innerText = leftTicket;

            // selected seat count
            const totalSeatBookedElement = document.getElementById('selected-seat-count');

            totalTicketBooked++;
            totalSeatBookedElement.innerText = totalTicketBooked;

            // Booked tickets Name and fare
            const BookedTicketElement = document.getElementById('booked-tickets');

            const p = document.createElement('p');
            p.setAttribute('class', 'flex justify-between')
            p.innerHTML = `
            <span> ${this.innerText} </span><span class="ms-8">Economy</span><span>550</span>
            `;
            BookedTicketElement.appendChild(p);

            // Total & grand total ticket price
            let totalTicketPrice = document.getElementById('total-price');
            const grandTotalTicketPrice = document.getElementById('grand-total');

            totalPrice += 550;
            totalTicketPrice.innerText = totalPrice;
            grandTotalTicketPrice.innerText = totalPrice;

            // Max 4 seat booked
            totalSeatBooked++;

            // Discount input enabled
            const discountInput = document.getElementById('discount-input');

            if (totalTicketBooked === 4) {
                discountInput.removeAttribute('disabled');
                discountInput.parentElement.style.border = '2px solid #1DD100';
            }

            // Number input for enabled Next button
            const numberInput = document.getElementById('number-input');
            const nextButton = document.getElementById('next-button');

            numberInput.addEventListener('keyup', function (e) {
                const keyValue = e.target.value;
                if (keyValue.length > 0) {
                    nextButton.removeAttribute('disabled');
                } else {
                    nextButton.setAttribute('disabled', true);
                }
            });

        } else {
            alert('Sorry! you can not buy more then 4 tickets.');
        }
    });

};

// Discount coupon input 
const discountInput = document.getElementById('discount-input');
let discountButton = document.getElementById('discount-button')

discountInput.addEventListener('keyup', function (e) {
    const inputValue = e.target.value;
    if (inputValue === 'NEW15') {
        discountButton.removeAttribute('disabled');

        discountButton.addEventListener('click', function () {
            // Apply button for 15% discount
            const discountPrice = totalPrice * 0.15;
            grandTotalPrice = totalPrice - discountPrice;

            const grandTotalTicketPrice = document.getElementById('grand-total');
            grandTotalTicketPrice.innerText = grandTotalPrice;

            // Show discount money
            const discount1 = document.getElementById('discount-1');
            discount1.classList.remove('hidden');

            // Hide discount input and button
            const discountForm = document.getElementById('discount-form');
            discountForm.style.display = 'none';

        })

    } else if (inputValue === 'Couple 20') {
        discountButton.removeAttribute('disabled');

        // Apply button for 15% discount
        discountButton.addEventListener('click', function () {
            const discountPrice = totalPrice * 0.2;
            grandTotalPrice = totalPrice - discountPrice;

            const grandTotalTicketPrice = document.getElementById('grand-total');
            grandTotalTicketPrice.innerText = grandTotalPrice;

            // Show discount money
            const discount1 = document.getElementById('discount-2');
            discount1.classList.remove('hidden');

            // Hide discount input and button
            const discountForm = document.getElementById('discount-form');
            discountForm.style.display = 'none';
        })


    } else {
        discountButton.setAttribute('disabled', true);
    }

});


// Close modal
const modal = document.getElementById('my_modal_1')
const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function(){
    modal.classList.add('hidden');
})