// Tallest Mountain
interface Mountain{
    name: string,
    height: number
}

let mountains: Mountain[] = [];

let m1 : Mountain =  {name: "Kilimanjaro", height: 19314};
mountains.push(m1);

let m2 : Mountain =  {name: "Everest", height: 29029};
mountains.push(m2);

let m3 : Mountain =  {name: "Denali", height: 20310};
mountains.push(m3);

// function findNameOfTallestMountain(ms : Mountain[]) : string {
//     for(let i = 0; i < ms.length; i++){
        
//     }
    
    
    
    
//     return "";
// }
    
// Products
interface Product{
    name: string,
    price: number
}

let products : Product[] = [];

let p1 : Product = {name: "laptop", price: 700};
products.push(p1);

let p2 : Product = {name: "keyboard", price: 100};
products.push(p2);
      
let p3 : Product = {name: "mouse", price: 30};
products.push(p3);

function calcAverageProductPrice(products : Product[]) : number {
    let totalPrice : number = 0;
    for(let i = 0; i < products.length; i++){
        totalPrice += products[i].price;
    }
    let average : number = totalPrice / products.length;
    return average;
    
}

let avg : number = calcAverageProductPrice(products);
console.log(avg);


// Inventory

interface InventoryItem{
    product : Product,
    quantity : number
}

let pr1 : Product = {name: "motor", price: 10.00};
let pr2 : Product = {name: "sensor", price: 12.50};
let pr3 : Product = {name: "LED", price: 1.00};

let item1 : InventoryItem = {product: pr1, quantity: 10};
let item2 : InventoryItem = {product: pr2, quantity: 4};
let item3 : InventoryItem = {product: pr3, quantity: 20};

let inventory : InventoryItem[] = [];
inventory.push(item1);
inventory.push(item2);
inventory.push(item3);

function calcInventoryValue(inventory : InventoryItem[]) : number {
    let value : number = 0;
    for(let i = 0; i < inventory.length; i++){
        value += inventory[i].product.price * inventory[i].quantity;
    }
    return value; 
} 

let val = calcInventoryValue(inventory);
console.log(val);