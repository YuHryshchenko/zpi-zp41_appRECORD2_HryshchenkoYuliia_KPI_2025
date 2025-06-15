function makeTransaction(quantity, pricePerDroid, customerCredits) {
    // Розраховуємо загальну вартість замовлення
    const totalPrice = quantity * pricePerDroid;

    // Перевіряємо, чи вистачає коштів у клієнта
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    }

    // Якщо коштів вистачає, повертаємо повідомлення про успішну покупку
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Приклади використання функції
console.log(makeTransaction(3, 500, 2000)); // "You ordered 3 droids worth 1500 credits!"
console.log(makeTransaction(5, 300, 1000)); // "Insufficient funds!"