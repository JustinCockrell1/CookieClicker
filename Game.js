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


        this.upgrades = [

        ]
    }

    addShopItem(element, shopItem) {

   
        console.log("hello");
        const item = shopItem.getElement()
        
        item.onclick = (ev)=>{
            shopItem.onClick(this);
        }
        element.appendChild(item);
    }

    setRate(rate) {
        this.rate = rate;

        document.getElementById("rate").innerHTML = this.rate;
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