import game from "./Game.js";

let count = 0;

let lastElapsedTime = 0;

let totalDiff = 0;

document.getElementById("button").onclick = function() {
    game.earn(1);
    if(count!=game.blessings) {
        totalDiff = game.blessings - count;
        
    }
}

let earningCounter = 0;

function animateCount(totalElapsedTime) {

    const elapsedTime = (totalElapsedTime - lastElapsedTime)/1000;
    lastElapsedTime = totalElapsedTime;
    earningCounter+=elapsedTime;

    // console.log(elapsedTime, earningCounter);
    

    const amount = (totalDiff * elapsedTime)/4;
    count += (amount >= 1) ? amount : 1;

    if(count<game.blessings) {
 
    }
    else if(count > game.blessings) {
        count = game.blessings;
    }

    document.getElementById("count").innerHTML = count.toFixed(0);
    document.getElementById("rate").innerHTML = `${game.rate.toFixed(2)}/s`


    if(earningCounter>=.1) {
        game.earn(game.rate/10);
        earningCounter=0;
        totalDiff = game.blessings - count;
    }


    window.requestAnimationFrame(animateCount);
}

const shop = document.getElementById("shop");
function drawShop() {
    shop.innerHTML="";
    for(let i = 0; i < game.shopItems.length; i++) {

        // shop.innerHTML+=`<button class="shop-item" data-id=${i}>
        // <span class="shop-item-name">${game.shopItems[i].name}</span>
        // <span class="shop-item-quanitity">${game.shopItems[i].owned}</span>
        // <span class="shop-item-price">${game.shopItems[i].cost}</span>
        // <span class="shop-item-increase">${game.shopItems[i].increase}</span>
        // </button>`

        shop.innerHTML+=
        `<button data-id=${i}><img src=${game.shopItems[i].image}><div>${game.shopItems[i].name} 
        </br>Convert for ${game.shopItems[i].cost} blessings</br>Converted: ${game.shopItems[i].owned}<div></button>`

    }

}


drawShop();
shop.onclick = function(e)  {
    console.log("clicked shop");
    
    let element = e.target;
    while(element.parentElement){
    if(element.dataset.id) {
    const id = Number(element.dataset.id)
    game.purchaseShopItem(id);
    drawShop();
    break;
    }
    element = element.parentElement;
    }
}

window.requestAnimationFrame(animateCount);

game.earn(200);
game.purchaseShopItem(0);
game.purchaseShopItem(0);
game.purchaseShopItem(0);
game.purchaseShopItem(0);
console.log(game.rate);
