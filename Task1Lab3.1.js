function getShippingMessage(country, price, deliveryFee) {
    // Розраховуємо загальну вартість замовлення
    const totalPrice = price + deliveryFee;

    // Формуємо і повертаємо повідомлення
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Приклад використання функції
const message = getShippingMessage('USA', 100, 20);
console.log(message); // "Shipping to USA will cost 120 credits"