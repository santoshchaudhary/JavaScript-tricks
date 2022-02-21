const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 4000 },
    { name: 'Album',    price: 1020 },
    { name: 'Book',     price: 400 },
    { name: 'Phone',    price: 300 },
    { name: 'Computer', price: 10000 },
    { name: 'keyboard', price: 1000 },
    { name: 'Mouse',    price: 500 },
]
// Filter
const filteredItem = items.filter((item) => {
    return item.price <= 4000;
})
console.log(filteredItem)
// Map
const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames)

// Find
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(foundItem)

// For Each
items.forEach((item) => {
    console.log(item.price)
})

// Some
const hasinExpensiveItem = items.some((item) => {
    return item.price <= 100;
})
console.log('---------' + hasinExpensiveItem)

// Every
const hasEveryItem = items.every((item) => {
    return item.price <= 4000;
})
console.log('---------' + hasEveryItem)

// Reduce
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)
console.log(total)

// Include
const numbers = [1,2,3,4,5,6];
const includestwo = numbers.includes(2)
console.log(includestwo);



var tempByHour = [ 59.2, 60.1, 63, 65, 62 ];

function createLi(temp, i) {
    var li = document.createElement("LI");
    
    if (i === 0) {
        li.innerText = "The temperature at noon was " + temp;
    } else {
        li.innerText = "The temperature at " + i + "was " + temp;
    }
    
    return li;
}

var i,
    len = tempByHour.length,
    target = document.getElementById("temps");

for (i = 0; i < len; i++) {
    target.appendChild(createLi(tempByHour[i], i));
}
