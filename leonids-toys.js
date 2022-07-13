
// var toy holding an array of objects.
const toys = [
    {
name:"radio",
id:1,
weight:5.5,
height: 2,
color: "blk",

voltage: 10

},

{
name: "drums",
id:2,
weight:10,
height:3,

color: "red"
},

{
name:"piano",
id:3,
weight:15.2,
heightInFeet:4,

color:"blue"

}]
//more objects being pushed into the toys array with .push method
toys.push({
    name:"Jeff" ,
    id: 4,
    maker: "microsoft",
    weight: 12,
    height: 10,
    price: 12,
    color: "green"

})
toys.push({
    name: "Barbara",
    id: 5,
    weight:100,
    height:25,
    price: 12,
    color: "blue"
})

//for...of loop iterating through each toys object using the 'toy' element local var
for (const toy of toys) {
    console.log(toy.name, toy.voltage)    
//then printing each toy ojects name and voltage
}
//for..of loop iterating through toys array to catalog property values
for(const toy of toys) {
    console.log(`My toy number is ${toy.id}, the weight of this toy is ${toy.weight}
    the color is ${toy.color}. The item cost is $ ${toy.price}. `)
// printing to console this interpolated sentence with toy properties using object.propkey
}
    // create var named toyToFind
    // Step through the array of toys
    // Add 5% to the weight of each toy
    // toy.weight = toy.weight * .05 + toy.weight
    // Add the weight to the output
let toyToFind = 4
for (const toy of toys) {
    // Only one toy will cause the condition below to evaluate to true
    //which will be the one that has the equal id number to the value of toyToFind
    if (toy.id === toyToFind) {
        toy.weight = toy.weight + 0.4
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
    // print the toy objects info in this interpolated string
    }
}

//created a new map variable to store the new prices in
let toyPriceMap = new Map()

// created new var toyPriceMap set equal to 
// a new Map function method which will reference to whatever array i call
//and will allow me to manipulate the array while not affecting the original
const addToyToInventory = (toy, price) => {
    toyPriceMap.set(toy,price)
}
toyPriceMap.set(toys[0], 66)
toyPriceMap.set(toys[1], 501)
toyPriceMap.set(toys[2], 99)
toyPriceMap.set(toys[3], 412)
toyPriceMap.set(toys[4], 101)

console.log(addToyToInventory)
