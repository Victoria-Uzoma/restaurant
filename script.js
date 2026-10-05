// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-button");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    // Open mobile menu
    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        menuBtn.setAttribute("aria-expanded", "true");

    });

}


// Close mobile menu
if (closeMenu && mobileMenu) {

    closeMenu.addEventListener("click", function () {

        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");

        menuBtn.setAttribute("aria-expanded", "false");

    });

}


// Close menu when a navigation link is clicked
if (mobileMenu) {

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("translate-x-0");
            mobileMenu.classList.add("translate-x-full");

            if (menuBtn) {
                menuBtn.setAttribute("aria-expanded", "false");
            }

        });

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