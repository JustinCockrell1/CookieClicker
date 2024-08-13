import game from "./Game.js";
import ShopItem from "./game/ShopItem.js";
import ShopUpgrade from "./game/ShopUpgrade.js";
import dparseNumber from "./game/dparseNumber.js";
import dparseUnit from "./game/dparseUnit.js";
import data from "./prayerList.json" with {type:"json"}



const clickerButton = document.getElementById("clicker-button");
const prayerList = document.getElementById("prayers")
const prayersButton = document.getElementById("prayers-button")

let show = false;
prayersButton.onclick = function () {
    if(show) {
        show = false;
        prayerList.classList.add("cropped")
    }
    else{
        show = true;
        prayerList.classList.remove("cropped")
    }
}

function updateBlessings() {
    document.getElementById("blessings").innerHTML = 
    dparseNumber(game.blessings) + `<span>${dparseUnit(game.blessings)}</span>`;
}

game.addShopItem(
    document.getElementById("buildings"),
     new ShopItem("Faithful Child",5, 100, "./images/shopchild.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Youth Leader", 5, 200, "./images/youthleader2.webp")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Work Friends", 500, 1000, "./images/workfriends.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Bible Group", 500, 1000, "./images/biblegroup.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Prayer Hotline", 500, 1000, "./images/hotline.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Pastor", 500, 10000, "./images/shoppastor.jpg")
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

document.getElementById("buildings").onclick = function() {
    updateBlessings();
}

document.getElementById("upgrades").onclick = function() {
    updateBlessings();
}

clickerButton.onclick = function() {
    game.earn(game.clickRate);
    updateBlessings();
    let temp = prayerList.innerHTML;
    prayerList.innerHTML = `<p>${data[Math.floor(Math.random()*(Math.pow(10, Math.ceil(Math.random()*3))))]}</p>` + temp;
}

window.setInterval(()=>{

    game.earn(game.rate);
    if(game.rate>0) {
        let temp = prayerList.innerHTML;
    prayerList.innerHTML = `<p>${data[Math.floor(Math.random()*(Math.pow(10, Math.ceil(Math.random()*3))))]}</p>` + temp;
    }
    updateBlessings();
    
}, 1000)