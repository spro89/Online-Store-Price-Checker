let item = prompt('Enter the name of the item');
console.log(item);

let basePrice = prompt('What is the base price of the item?');
console.log(basePrice);

let blkFriday = prompt('Is today "Black Friday"? Answer yes or no.');
console.log(blkFriday);

let searchEng = prompt('Did the purchaser find the product through a search engine? Answer yes or no.');
console.log(searchEng);

let compareSite = prompt('Did the purchaser visit a comparison-shopping site? Answer yes or no.');
console.log(compareSite);

let finalPrice = 0.25;
// let finalPrice2 = 0.10;
// let finalPrice3 = 0.01;

// for black friday prompt //

if (blkFriday === 'yes') {
    console.log(`Since it's Black Friday, we will reduce the price by 25%.`);
    finalPrice *= 0.25;
} else {
    console.log('It\'s not Black Friday, so the price didn\'t change for that.');
}

// for search engine prompt //

if (searchEng === 'yes') {
    console.log('We will increase the price by 1% to pay the search engine.');
    // finalPrice3 *= 0.01;
} else {
    console.log('The customer didn\'t use a search engine, so the price didn\'t change for that.');
}


// for site comparison //

if (compareSite === 'yes') {
    console.log('Since the customer visited a comparison-shopping site, we will reduce the price by 10%.');
    // finalPrice2 *= 0.10;
} else {
    console.log('The customer didn\'t visit a comparison-shopping site, so the price didn\'t change for that');
}

alert(`The base price for the ${item} is ${basePrice}. Since it's Black Friday, we will reduce the price by 25%. We will increase the price by 1% to pay the search engine. Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is ${finalPrice}.`);


// I'm not even sure I did this right. I'm having a hard time figuring out how to calculate all of the percentages into a final price. //