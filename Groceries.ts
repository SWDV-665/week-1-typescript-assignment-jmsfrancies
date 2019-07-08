class Grocery {

  Id: number;
  ItemName: string;
  ItemCost: number;
  ItemQty: number;

  constructor(Id: number, ItemName: string, ItemCost: number, ItemQty: number) {
    this.Id = Id;
    this.ItemName = ItemName;
    this.ItemCost = ItemCost;
    this.ItemQty = ItemQty;
  }
}

interface GroceryItem {
  Id: number;
  ItemName: string;
  ItemCost: number;
  ItemQty: number;
}

function GroceryList(item) {
  return (
    item.Id +
    " " +
    item.ItemName +
    " $" +
    item.ItemCost +
    " " +
    item.ItemQty
  );
}

var item1 = new Grocery(1, "Milk", 5.0, 12);

var item2 = new Grocery(2, "Eggs", 2.99, 50);

var item3 = new Grocery(3, "Cheese", 3.15, 10);

var item4 = new Grocery(4, "Chocolate", 6.99, 15);

/*
var Item1a = <HTMLInputElement>document.getElementById("item1")
var Item2a = <HTMLInputElement>document.getElementById("item2")
var Item3a = <HTMLInputElement>document.getElementById("item3")
var Item4a = <HTMLInputElement>document.getElementById("item4")
*/

document.body.textContent = GroceryList(item1);
document.body.textContent = GroceryList(item2);
document.body.textContent = GroceryList(item3);
document.body.textContent = GroceryList(item4);
