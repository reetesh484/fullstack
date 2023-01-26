// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

function addFirst(item) {
  if (!shoppingCart.includes(item)) {
    shoppingCart.unshift(item);
  }
  console.log("After adding", item, ":", shoppingCart);
}

function addLast(item) {
  if (!shoppingCart.includes(item)) {
    shoppingCart.push(item);
  }
  console.log("After adding", item, ":", shoppingCart);
}

function remove(rm_item) {
  shoppingCart = shoppingCart.filter((item) => item !== rm_item);
  console.log("After removing", rm_item, ":", shoppingCart);
}

addFirst("Meat");
addLast("Sugar");
remove("Honey");

// shoppingCart = shoppingCart.

let i = shoppingCart.indexOf("Tea");
shoppingCart[i] = "Green Tea";
console.log("After replacing Tea:", shoppingCart);
