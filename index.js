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
    new ShopItem("Youth Leader", 500, 5, "./images/youthleader.webp")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Work Friends", 500, 5, "./images/workfriends.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Bible Group", 500, 5, "./images/biblegroup.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Prayer Hotline", 500, 5, "./images/hotline.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Pastor", 500, 5, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Congregation", 500, 5, "./images/congregation.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Religion", 500, 5, "./images/religion.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Neighborhood", 500, 5, "./images/neighborhood.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Partisan", 500, 5, "./images/partisan.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Intergalactic Servants", 500, 5, "./images/alien.jpg")
);

game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Kneel","Increases the amount per click",5,"./images/kneel.jpg", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Close your eyes","Increases the amount per click",5,"./images/closeeyes.jpg", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Raise your voice","Increases the amount per click",5,"./images/raise.jpg", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Shake stick","Increases the amount per click",5,"./images/stick.png", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Light Incense","Increases the amount per click",5,"./images/incense.jpg", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Prostrate","Increases the amount per click",5,"./images/prostrate.jpeg", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Tears","Increases the amount per click",5,"./images/tears.png", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Visit Temple","Increases the amount per click",5,"./images/temple.avif", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopItem(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Offer Sacrifice","Increases the amount per click",5,"./images/sacrifice.png", (game)=>{
        game.clickRate*=2;
    })
);

function parseNumber(number) {
    let word = "";
    if(number > 999 && number < 1000000) {
        number = number/1000;
        word = "thousand";
    };
    number = number.toFixed(3);
    let displayNumber = number + word;
    return displayNumber;
}

clickerButton.onclick = function() {
    game.earn(game.clickRate);
    document.getElementById("blessings").innerHTML = parseNumber(game.blessings);
}

window.setInterval(()=>{

    game.earn(game.rate);
    document.getElementById("blessings").innerHTML = parseNumber(game.blessings);
}, 1000)