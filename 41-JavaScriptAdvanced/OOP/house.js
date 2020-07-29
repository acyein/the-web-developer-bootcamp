// OOP 02.1 - Constructor function + new
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

const firstHouse = new House(2,2,1000)
console.log(firstHouse.bedrooms); // 2
console.log(firstHouse.bathrooms); // 2
console.log(firstHouse.numSqft); // 1000