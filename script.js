// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });

}



// ================= ORDER FORM =================

const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");

if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value;
        const soup = document.getElementById("soup").value;
        const swallow = document.getElementById("swallow").value;
        const quantity = document.getElementById("quantity").value;

        orderMessage.textContent =
            `Thank you, ${name}! Your order for ${quantity} serving(s) of ${soup} with ${swallow} has been received.`;

        orderMessage.classList.remove("hidden");

        orderForm.reset();

    });

}



// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        contactSuccess.classList.remove("hidden");

        contactForm.reset();

    });

}