// ======================
// DATA
// ======================
const SERVICES = [
    { id: 1, name: 'Dry Cleaning', price: 200, icon: 'shirt' },
    { id: 2, name: 'Wash & Fold', price: 100, icon: 'wind' },
    { id: 3, name: 'Ironing', price: 30, icon: 'hexagon' },
    { id: 4, name: 'Stain Removal', price: 500, icon: 'droplets' },
    { id: 5, name: 'Leather & Suede', price: 999, icon: 'user-check' },
    { id: 6, name: 'Wedding Dress', price: 2800, icon: 'sparkles' },
];

// ======================
// STATE
// ======================
let cart = [];

// ======================
// DOM ELEMENTS
// ======================
const servicesListEl = document.getElementById('services-list');
const cartItemsEl = document.getElementById('cart-items');
const totalAmountEl = document.getElementById('total-amount');
const bookingForm = document.getElementById('booking-form');
const successMessage = document.getElementById('success-message');
const bookBtn = document.getElementById('book-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// ======================
// INITIALIZATION
// ======================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderServices();
    renderCart();

    // EmailJS Init
    emailjs.init("9eknezW31vBPtnQPW");
});

// ======================
// MOBILE MENU
// ======================
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden-custom');
    const icon = mobileMenu.classList.contains('hidden-custom') ? 'menu' : 'x';
    mobileMenuBtn.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
    lucide.createIcons();
});

// ======================
// TOGGLE CART (Single Button Logic)
// ======================
function toggleCart(id) {
    const index = cart.findIndex(item => item.id === id);

    if (index === -1) {
        const service = SERVICES.find(s => s.id === id);
        cart.push({ ...service });
    } else {
        cart.splice(index, 1);
    }

    renderServices();
    renderCart();
}

// ======================
// RENDER SERVICES
// ======================
function renderServices() {
    servicesListEl.innerHTML = SERVICES.map(service => {
        const count = cart.filter(item => item.id === service.id).length;

        const buttonText = count === 0 ? "Add Item" : "Remove Item";
        const buttonClass = count === 0
            ? "text-green-700 bg-green-50 hover:bg-green-100"
            : "text-red-600 bg-red-50 hover:bg-red-100";

        return `
            <div class="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition border border-gray-100">
                <div class="flex items-center space-x-4">
                    <div class="p-3 bg-blue-100 text-blue-600 rounded-full">
                        <i data-lucide="${service.icon}" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">${service.name}</h3>
                        <p class="text-blue-600 font-bold">₹${service.price.toFixed(2)}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <button onclick="toggleCart(${service.id})"
                        class="px-3 py-2 text-sm font-medium rounded-md transition ${buttonClass}">
                        ${buttonText}
                    </button>
                    <div class="w-8 text-center font-bold text-gray-700">${count}</div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// ======================
// RENDER CART
// ======================
function renderCart() {
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="text-gray-400 text-center py-8">No items added yet</p>';
        totalAmountEl.innerText = '₹0.00';
        return;
    }

    const rows = cart.map((item, index) => `
        <tr class="border-b border-gray-50">
            <td class="px-2 py-2 text-gray-500">${index + 1}</td>
            <td class="px-2 py-2 font-medium text-gray-900">${item.name}</td>
            <td class="px-2 py-2 text-right text-gray-600">₹${item.price.toFixed(2)}</td>
        </tr>
    `).join('');

    cartItemsEl.innerHTML = `
        <table class="w-full text-sm text-left">
            <thead class="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0">
                <tr>
                    <th class="px-2 py-2">S.No</th>
                    <th class="px-2 py-2">Service</th>
                    <th class="px-2 py-2 text-right">Price</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmountEl.innerText = '₹' + total.toFixed(2);
}

// ======================
// BOOKING FORM + EMAILJS
// ======================
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
        alert("Please fill all fields properly.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter valid 10 digit phone number.");
        return;
    }

    if (cart.length === 0) {
        alert("Please add items to the cart first.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        order_details: cart.map(item =>
            item.name + " - ₹" + item.price
        ).join("\n"),
        total_amount: total
    };

    bookBtn.innerText = "Processing...";
    bookBtn.disabled = true;

    emailjs.send("service_ldrgr0l", "template_55op6za", templateParams)
        .then(() => {
            successMessage.classList.remove('hidden-custom');
            cart = [];
            renderServices();
            renderCart();
            bookingForm.reset();
        })
        .catch((error) => {
            alert("Email failed to send. Please check console.");
            console.error(error);
        })
        .finally(() => {
            bookBtn.innerText = "Book now";
            bookBtn.disabled = false;
        });
});