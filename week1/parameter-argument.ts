type InventoryItem = "nappies" | "wipes" | "nappy sacks";

function poopInventory(item: InventoryItem, stock: number): void {
  console.log(`You have ${stock} ${item} left in stock`);
}

poopInventory("nappies", 0);
poopInventory("wipes", 120);
poopInventory("nappy sacks", 2);
poopInventory("coffee", 5);
