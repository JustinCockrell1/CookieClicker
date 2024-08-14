
import dparse from "./game/dparse.js";
class Game {
    constructor() {
        this.blessings = 0;
        this.rate = 0;
        this.clickRate = 1;

        this.shopItems = [
            {
                name:"Faithful Child",
                cost:50,
                increase:1,
                owned:0,
                image:"./images/shopchild.png"
            },
            {
                name:"Pastor",
                cost:500,
                increase:5,
                owned:0,
                image:"./images/shoppastor.jpg"
            }
        ];
        this.achievements = [
            
        ]


        this.shopUpgrades = [

        ]
    }

    addShopItem(element, shopItem) {
        const item = shopItem.getElement()
        // console.log(item)
        item.onclick = (ev)=>{
            shopItem.onClick(this);
        }
        element.appendChild(item);
    }
    addShopUpgrade(element, shopUpgrade) {
        const item2 = shopUpgrade.getElement()
        // console.log(item)
        item2.onclick = (ev)=>{
            shopUpgrade.onClick(this);
        }
        element.appendChild(item2);
        this.shopUpgrades.push(shopUpgrade)
    }
    
    addAchievement(element, achievement) {
        const item3 = achievement.getElement()
        // console.log(item2)
        element.appendChild(item3);
        this.achievements.push(achievement);
    }
    updateAchievement(achievement,target){
        // console.log("updated Achievement GAME")
        achievement.updateElement(target);
    }

    setRate(rate) {
        this.rate = rate;

        document.getElementById("rate").innerHTML = dparse(this.rate);
    }


    pray() {
        this.earn(this.clickRate);
    }

    earn(amount) {
        this.blessings+=amount;
    }



    purchaseShopItem(i) {
        console.log("jkhh")
        if(!this.shopItems[i])return; 
        if(this.blessings>=this.shopItems[i].cost) {
            this.blessings-=this.shopItems[i].cost;
            this.rate+=this.shopItems[i].increase;
            this.shopItems[i].owned++;
        }
    }

    purchaseUpgrade(i) {

    }

    
}

const game = new Game();
export default game;