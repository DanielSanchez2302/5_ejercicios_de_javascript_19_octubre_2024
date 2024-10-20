// validateCard.js
function getCardType(cardNumber) {
    if (/^3[47]\d{13}$/.test(cardNumber)) {
        return 'American Express';  // 15 dígitos, empieza con 34 o 37
    } else if (/^3(0[0-5]|[68])\d{11}$/.test(cardNumber)) {
        return 'Diners Club';  // 14 dígitos, empieza con 300-305, 36, 38
    } else if (/^6011\d{12}$/.test(cardNumber)) {
        return 'Discover';  // 16 dígitos, empieza con 6011
    } else if (/^5[1-5]\d{14}$/.test(cardNumber)) {
        return 'Mastercard';  // 16 dígitos, empieza con 51-55
    } else if (/^4\d{12}(\d{3})?$/.test(cardNumber)) {
        return 'Visa';  // 16 dígitos, empieza con 4
    } else {
        return null;  // No coincide con ningún patrón reconocido
    }
}

module.exports = { getCardType };

