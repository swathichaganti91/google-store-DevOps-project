
document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    const totalAmount = document.getElementById('total-amount');

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        orderList.appendChild(li);
        total += item.price;
    });

    totalAmount.textContent = `$${total.toFixed(2)}`;

    const paymentForm = document.getElementById('payment-form');
    const successMessage = document.getElementById('success-message');

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        paymentForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        localStorage.clear();
    });

    const cardNumberInput = document.getElementById('card-number');
    cardNumberInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
});
