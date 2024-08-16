import game from "./Game.js";
import ShopItem from "./game/ShopItem.js";
import ShopUpgrade from "./game/ShopUpgrade.js";
import Achievement from "./game/Achievement.js";
import dparseNumber from "./game/dparseNumber.js";
import dparseUnit from "./game/dparseUnit.js";
import data from "./prayerList.json" with {type:"json"}

const clickerButton = document.getElementById("clicker-button");
const prayerList = document.getElementById("prayers")
const prayersButton = document.getElementById("prayers-button")

let show = true;
prayersButton.onclick = function () {
    if(show) {
        show = false;
        prayerList.classList.add("cropped")
        // prayerList.classList.remove("scroll")
        prayersButton.innerHTML = "Expand prayer list"
    }
    else{
        show = true;
        prayerList.classList.remove("cropped")
        // prayerList.classList.add("scroll")
        prayersButton.innerHTML = "Crop prayer list"
    }
}

function saveGame() {
    // localStorage.setItem("childOwned")
    // localStorage.setItem("save", game.blessings);

    const storageObject = {
        shopItems:[],
        shopUpgrades:[],
        rate:game.rate,
        clickRate:game.clickRate,
        blessings:game.blessings,
        achievements:[],
    };
    for(let i = 0; i < game.shopItems.length; i++){
        storageObject.shopItems[i] = game.shopItems[i].owned;
    }
    for(let i = 0; i < game.shopUpgrades.length; i++){
        storageObject.shopUpgrades[i] = game.shopUpgrades[i].display;
    }
    for(let i =0; i < game.achievements.length; i++) {
        storageObject.achievements[i] = game.achievements[i].unlocked;
    }


    localStorage.setItem("save", JSON.stringify(storageObject));

}
function loadGame() {
    const data = JSON.parse(localStorage.getItem("save"));
    game.blessings = data.blessings;
    game.setRate(data.rate);
    game.clickRate = data.clickRate;

    for(let i = 0; i < data.shopItems.length; i++){
        game.shopItems[i].owned = data.shopItems[i];

        for(let j = 0; j < game.shopItems[i].owned; j++) {
            game.shopItems[i].increaseCost();
        }

        game.shopItems[i].updateElement();
    }
    for(let i = 0; i < data.shopUpgrades.length; i++){
        game.shopUpgrades[i].display = data.shopUpgrades[i];
        if(game.shopUpgrades[i].display)
        document.querySelector(`.id${i+1}`).classList.remove("hidden");

    }
    for(let i = 0; i < data.achievements.length; i++){
        game.achievements[i].unlocked = data.achievements[i];
        game.achievements[i].element.classList.remove("hidden");
    }
}



function updateBlessings() {
    document.getElementById("blessings").innerHTML = 
    dparseNumber(game.blessings) + `<span>${dparseUnit(game.blessings)}</span>`;

    
}


game.addShopItem(
    document.getElementById("buildings"),
     new ShopItem("Faithful Child",5, 1, "./images/shopchild.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Youth Leader", 5, 10, "./images/youthleader2.webp")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Work Friends", 500, 100, "./images/workfriends.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Bible Group", 500, 1000, "./images/biblegroup.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Prayer Hotline", 500, 10000, "./images/hotline.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Pastor", 500, 100000, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Congregation", 500, 100000, "./images/congregation.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Religion", 500, 1000000, "./images/religion.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Neighborhood", 500, 10000000, "./images/neighborhood.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Partisan", 500, 100000000, "./images/partisan.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Intergalactic Servants", 500, 1000000000, "./images/alien.jpg")
);

game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Kneel","Increases the amount per click",5,"./images/kneel.jpg", "id1", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Close your eyes","Increases the amount per click",5,"./images/closeeyes.jpg","id2", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Raise your voice","Increases the amount per click",5,"./images/raise.jpg","id3", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Shake stick","Increases the amount per click",5,"./images/stick.png","id4", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Light Incense","Increases the amount per click",5,"./images/incense.jpg","id5", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Prostrate","Increases the amount per click",5,"./images/prostrate.jpeg","id6", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Tears","Increases the amount per click",5,"./images/tears.png","id7", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Visit Temple","Increases the amount per click",5,"./images/temple.avif","id8", (game)=>{
        game.clickRate*=2;
        
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Offer Sacrifice","Increases the amount per click",5,"./images/sacrifice.png","id9", (game)=>{
        game.clickRate*=2;
    })
);


game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Fervent","You know how to pray seriously",game.blessings,100,()=>{
        // console.log(id1)
        game.shopUpgrades[0].display = true;
        document.querySelector(".id1").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Peaceful","Your prayers can be healing and tranquil",game.blessings,1000,()=>{
        // console.log(id1)
        game.shopUpgrades[1].display = true;
        document.querySelector(".id2").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Passionate","You can pray with emotion",game.blessings,10000,()=>{
        // console.log(id1)
        game.shopUpgrades[2].display = true;
        document.querySelector(".id3").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Violent","Fight for what you pray for",game.blessings,100000,()=>{
        // console.log(id1)
        game.shopUpgrades[3].display = true;
        document.querySelector(".id4").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Sensational","Holy rituals are useful",game.blessings,1000000,()=>{
        // console.log(id1)
        game.shopUpgrades[4].display = true;
        document.querySelector(".id5").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Committed","Pride is something that should be sacrificed",game.blessings,10000000,()=>{
        // console.log(id1)
        game.shopUpgrades[5].display = true;
        document.querySelector(".id6").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Life-Changing","Prayer can move mountains",game.blessings,100000000,()=>{
        // console.log(id1)
        game.shopUpgrades[6].display = true;
        document.querySelector(".id7").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("The lord's house","The Holy Land",game.blessings,1000000000,()=>{
        // console.log(id1)
        game.shopUpgrades[7].display = true;
        document.querySelector(".id8").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("All in","One way. One God.",game.blessings,10000000000,()=>{
        // console.log(id1)
        game.shopUpgrades[8].display = true;
        document.querySelector(".id9").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);

// THIS ONLY WORKS FOR BLESSINGS ACHIEVEMENTS!
function updateAchievements() {
    for (let i=0; i < game.achievements.length; i++){
        // console.log(game.achievements[i]);
        // console.log("TARGET:" + game.achievements[i].target)
        // console.log("ACTUAL:" + game.blessings )
        game.updateAchievement(game.achievements[i], game.blessings); // this is where I entered the game.blessings specific target
    }
    
}




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

document.addEventListener("click", ()=>{
    updateAchievements();
})

// update prayer list
window.setInterval(()=>{
    if(game.rate>0) {
        let temp = prayerList.innerHTML;
    prayerList.innerHTML = `<p>${data[Math.floor(Math.random()*(Math.pow(10, Math.ceil(Math.random()*3))))]}</p>` + temp;
    }
}, 1000)

console.log(game.blessings)

window.setInterval(()=>{
    game.earn(game.rate/10);
    // console.log(game.rate/10)
    updateBlessings();
    updateAchievements();
    saveGame();
}, 100)
loadGame();