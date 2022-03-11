export const BUY = 0;
// eslint-disable-next-line no-unused-vars
export const SELL = 1;
export const TRANSFER = 2;

export function switchPriceIntoTotal(value, switchSpent) {
    let string1 = '';
    let string2 = '';
    if (value === BUY) {
        if (switchSpent === 'price') {
            string1 = 'Total Spent';
            string2 = 'Price Per Coin';
        } else {
            string1 = 'Price Per Coin';
            string2 = 'Total Spent';
        }
    } else if (switchSpent === 'price') {
        string1 = 'Total Received';
        string2 = 'Price Per Coin';
    } else {
        string1 = 'Price Per Coin';
        string2 = 'Total Received';
    }
    return [string1, string2];
}
