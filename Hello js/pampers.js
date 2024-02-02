const pampersPrice = 0.31;
const pampersOffer23 = 0.23;
const pampersOffer19 = 0.19;

const moneySaved = (boxes, type, pieces) => {
    let totalFullPrice = pampersPrice * pieces;
    let totalPrice23 = pampersOffer23 * pieces;
    let totalPrice19 = pampersOffer19 * pieces;
    if (type === 23) {
    return Math.floor((totalFullPrice - totalPrice23) * boxes);
    } else if (type === 19) {
        return Math.floor((totalFullPrice - totalPrice19) * boxes);
    }
}

console.log(moneySaved(4, 19, 64));

