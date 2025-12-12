
        // Data
        const SERVICES = [
            { id: 1, name: 'Dry Cleaning', price: 200, icon: 'shirt' },
            { id: 2, name: 'Wash & Fold', price: 100, icon: 'wind' },
            { id: 3, name: 'Ironing', price: 30, icon: 'hexagon' },
            { id: 4, name: 'Stain Removal', price: 500, icon: 'droplets' },
            { id: 5, name: 'Leather & Suede', price: 999, icon: 'user-check' },
            { id: 6, name: 'Wedding Dress', price: 2800, icon: 'sparkles' },
        ];

        // State
        let cart = [];

        // Elements
        const servicesListEl = document.getElementById('services-list');
        const cartItemsEl = document.getElementById('cart-items');
        const totalAmountEl = document.getElementById('total-amount');
        const bookingForm = document.getElementById('booking-form');
        const successMessage = document.getElementById('success-message');
        const bookBtn = document.getElementById('book-btn');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderServices();
            renderCart();
        });

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden-custom');
            const icon = mobileMenu.classList.contains('hidden-custom') ? 'menu' : 'x';
            mobileMenuBtn.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
            lucide.createIcons();
        });

        // Functions
        function addToCart(id) {
            const service = SERVICES.find(s => s.id === id);
            if (service) {
                cart.push({ ...service, cartId: Math.random().toString(36).substr(2, 9) });
                renderServices();
                renderCart();
            }
        }

        function removeFromCart(id) {
            // Remove last occurrence (LIFO like React version)
            const index = cart.map(item => item.id).lastIndexOf(id);
            if (index !== -1) {
                cart.splice(index, 1);
                renderServices();
                renderCart();
            }
        }

        function renderServices() {
            servicesListEl.innerHTML = SERVICES.map(service => {
                const count = cart.filter(item => item.id === service.id).length;
                return `
                    <div class="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition border border-gray-100 sm:border-transparent sm:hover:border-gray-100">
                        <div class="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
                            <div class="p-3 bg-blue-100 text-blue-600 rounded-full">
                                <i data-lucide="${service.icon}" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">${service.name}</h3>
                                <p class="text-blue-600 font-bold">₹${service.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
                            <button onclick="removeFromCart(${service.id})" ${count === 0 ? 'disabled' : ''} class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition ${count === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-red-600 bg-red-50 hover:bg-red-100'}">
                                <i data-lucide="minus-circle" class="w-4 h-4 mr-1.5"></i> Remove
                            </button>
                            <div class="w-8 text-center font-bold text-gray-700">${count}</div>
                            <button onclick="addToCart(${service.id})" class="flex items-center px-3 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-md hover:bg-green-100 transition">
                                <i data-lucide="plus-circle" class="w-4 h-4 mr-1.5"></i> Add Item
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
            lucide.createIcons();
        }

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

        // Form Submission
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                alert("Please add items to the cart first.");
                return;
            }

            const originalBtnText = bookBtn.innerText;
            bookBtn.innerText = 'Processing...';
            bookBtn.disabled = true;
            bookBtn.classList.add('opacity-75', 'cursor-wait');

            // Simulate API call
            setTimeout(() => {
                // Here you would use emailjs.send(...)
                // For example:
                // emailjs.send('service_id', 'template_id', {
                //     from_name: document.getElementById('fullName').value,
                //     from_email: document.getElementById('email').value,
                //     message: 'Booking request...'
                // });
                
                // For now, simulate success
                bookBtn.innerText = originalBtnText;
                bookBtn.disabled = false;
                bookBtn.classList.remove('opacity-75', 'cursor-wait');
                
                successMessage.classList.remove('hidden-custom');
                cart = [];
                renderServices();
                renderCart();
                bookingForm.reset();

                setTimeout(() => {
                    successMessage.classList.add('hidden-custom');
                }, 8000);
            }, 1500);
        });
  
