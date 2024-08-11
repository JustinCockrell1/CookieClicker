import game from "./Game.js";
import ShopItem from "./game/ShopItem.js";
import ShopUpgrade from "./game/ShopUpgrade.js";

const clickerButton = document.getElementById("clicker-button");

game.addShopItem(
    document.getElementById("buildings"),
     new ShopItem("Faithful Child",50, 1, "./images/shopchild.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Youth Leader", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Work Friends", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Bible Group", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Prayer Hotline", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Pastor", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Congregation", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Religion", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Neighborhood", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Partisan", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Intergalactic Servants", 500, 5, "./images/shoppastor.jpg")
);

game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Pastor","pastor",5, (game)=>{
        game.clickRate*=2;
    })
);

game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Click better","makes you click better",50, (game)=>{
        game.rate+=10;
    })
);

clickerButton.onclick = function() {
    game.earn(game.clickRate);
    document.getElementById("blessings").innerHTML = game.blessings;
}

window.setInterval(()=>{

    game.earn(game.rate);
    document.getElementById("blessings").innerHTML = game.blessings;
}, 1000)