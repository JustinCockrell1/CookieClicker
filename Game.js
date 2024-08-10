class Game {
    constructor() {
        this.blessings = 0;
        this.rate = 0;

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
}

const game = new Game();
export default game;