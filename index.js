import game from "./Game.js";
import ShopItem from "./game/ShopItem.js";
import ShopUpgrade from "./game/ShopUpgrade.js";
import Achievement from "./game/Achievement.js";
import dparseNumber from "./game/dparseNumber.js";
import dparseUnit from "./game/dparseUnit.js";
import data from "./prayerList.json" with {type:"json"}

const clickerButton = document.getElementById("clicker-button");
// const prayer = document.getElementById("prayer")
const prayerList = document.getElementById("prayers")
const prayersButton = document.getElementById("prayers-button")
let prayers = [];
let flippedPrayers = [];



function pray() {
    // let temp = prayerList.innerHTML;
    let newName = data[Math.floor(Math.random()*data.length)];
    let messages = [
    `You've kept ${newName} in your prayers.`,
    `Your prayers have been for ${newName}.`,
    `You’ve been lifting ${newName} up in prayer.`,
    `You've been sending prayers for ${newName}.`,
    `Your intercessions have included ${newName}.`,
    `You've been remembering ${newName} in your prayers.`,
    `You've offered your prayers on behalf of ${newName}.`,
    `You've included ${newName} in your spiritual thoughts.`,
    `Your supplications have been directed toward ${newName}.`,
    `You’ve been praying earnestly for ${newName}.`,
    `Your prayers have been focused on ${newName}.`,
    `You've asked for blessings for ${newName}.`,
    `You’ve been praying for the well-being of ${newName}.`,
    `Your spiritual petitions have been for ${newName}.`,
    `You've been offering prayers for the benefit of ${newName}.`,
    `You’ve sought divine favor for ${newName}.`,
    `Your heartfelt prayers have been for ${newName}.`,
    `You’ve been invoking blessings for ${newName}.`,
    `Your prayers have been aimed at ${newName}.`,
    `You've been interceding with prayers for ${newName}.`
    ]
    let newMessage = messages[Math.floor(Math.random()*20)]
    prayers.push(`<p>${newMessage}</p>`);
    if(prayers.length > 19) {prayers.shift()}
    
    
    let tempArray = []
    for(let i =0; i < prayers.length; i++){
        
        let diff = prayers.length - (i+1)
        
        tempArray.push(prayers[diff]);
        
    }


    flippedPrayers = tempArray;
    
    let tempText = ""
    for(let j = 0; j < flippedPrayers.length; j++) {
        tempText += flippedPrayers[j];
        
    }
    // prayer.innerHTML = flippedPrayers[0];
    prayerList.innerHTML = tempText;
}

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
        if(game.achievements[i].unlocked)game.achievements[i].element.classList.remove("hidden");
    }
}



function updateBlessings() {
    document.getElementById("blessings").innerHTML = 
    dparseNumber(game.blessings) + `<span>${dparseUnit(game.blessings)}</span>`;

    
}


game.addShopItem(
    document.getElementById("buildings"),
     new ShopItem("Faithful Child",25, 1, "./images/shopchild.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Youth Leader", 100, 3, "./images/youthleader2.webp")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Work Friends", 550, 11, "./images/workfriends.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Bible Group", 3100, 150, "./images/biblegroup.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Prayer Hotline", 52000, 5600, "./images/hotline.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Pastor", 10100000, 28200, "./images/shoppastor.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Congregation", 5555455555, 539000, "./images/congregation.png")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Religion", 333333333333, 13000000, "./images/religion.jpeg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Neighborhood", 22700000000000, 400000000, "./images/neighborhood.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Partisan", 610800000000000000, 5000000000, "./images/partisan.jpg")
);
game.addShopItem(
    document.getElementById("buildings"), 
    new ShopItem("Intergalactic Servants", 1928049921560425475921, 2124710000000, "./images/alien.jpg")
);

game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Kneel","Doubles prayers per click",5,"./images/kneel.jpg", "id1", (game)=>{
        game.clickRate*=2;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Close your eyes","10x prayers per click",5,"./images/closeeyes.jpg","id2", (game)=>{
        game.clickRate*=10;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Raise your voice","Increases the amount per click",5,"./images/raise.jpg","id3", (game)=>{
        game.clickRate*=20;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Shake stick","Increases the amount per click",5,"./images/stick.png","id4", (game)=>{
        game.clickRate*=5;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Light Incense","Increases the amount per click",5,"./images/incense.jpg","id5", (game)=>{
        game.clickRate*=10;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Prostrate","Increases the amount per click",5,"./images/prostrate.jpeg","id6", (game)=>{
        game.clickRate*=10;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Tears","Increases the amount per click",5,"./images/tears.png","id7", (game)=>{
        game.clickRate*=100;
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Visit Temple","Increases the amount per click",5,"./images/temple.avif","id8", (game)=>{
        game.clickRate*=10;
        
    })
);
game.addShopUpgrade(
    document.getElementById("upgrades"), 
    new ShopUpgrade("Offer Sacrifice","Increases the amount per click",5,"./images/sacrifice.png","id9", (game)=>{
        game.clickRate*=100;
    })
);


game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Fervent","You know how to pray seriously",game.blessings,50,()=>{
        // console.log(id1)
        game.shopUpgrades[0].display = true;
        document.querySelector(".id1").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Peaceful","Your prayers can be healing and tranquil",game.blessings,500,()=>{
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
    new Achievement("Violent","Fight for what you pray for",game.blessings,100000000,()=>{
        // console.log(id1)
        game.shopUpgrades[3].display = true;
        document.querySelector(".id4").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Sensational","Holy rituals are useful",game.blessings,1000000000,()=>{
        // console.log(id1)
        game.shopUpgrades[4].display = true;
        document.querySelector(".id5").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Committed","Pride is something that should be sacrificed",game.blessings,10000000000,()=>{
        // console.log(id1)
        game.shopUpgrades[5].display = true;
        document.querySelector(".id6").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("Life-Changing","Prayer can move mountains",game.blessings,1000000000000,()=>{
        // console.log(id1)
        game.shopUpgrades[6].display = true;
        document.querySelector(".id7").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("The lord's house","The Holy Land",game.blessings,100000000000000,()=>{
        // console.log(id1)
        game.shopUpgrades[7].display = true;
        document.querySelector(".id8").classList.remove("hidden");
        console.log("upgrade revealed")
    })
);
game.addAchievement(document.getElementById("achievements"), 
    new Achievement("All in","One way. One God.",game.blessings,1000000000000000000000,()=>{
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
    // document.getElementById("click-image").classList.add("click-animate");
    pray();
}

document.addEventListener("click", ()=>{
    updateAchievements();
})

// update prayer list
window.setInterval(()=>{
    if(game.rate>0) {
        pray();
    }
    // document.getElementById("click-image").classList.remove("click-animate");
}, 3000)

console.log(game.blessings)

window.setInterval(()=>{
    game.earn(game.rate/10);
    // console.log(game.rate/10)
    updateBlessings();
    updateAchievements();
    saveGame();
}, 100)
loadGame();

const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();