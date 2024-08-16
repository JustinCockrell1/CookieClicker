
import dparse from "./dparse.js"
export default class ShopItem {
    constructor(name, cost, increase, image) {
        this.cost = cost;
        this.increase = increase;
        this.name=name;
        this.owned = 0;
        this.image = image;

        this.element=this.createElement();
    }

    onClick(game) {
        if(game.blessings>=this.cost) {
            
            this.onPurchase(game)
        }
    }

    onPurchase(game) {
        game.setRate(game.rate+this.increase);
        game.blessings-=this.cost;
        this.owned++;
        this.increaseCost();
        this.updateElement();
    }

    increaseCost() {
        this.cost+= this.cost*0.22;
    }

    createElement() {
        const element = document.createElement("button");
        element.classList.add("shop-item");
        element.innerHTML = `<img src="${this.image}"/>

            <div class="item-description">
            <h1>${this.name}</h1>
            Convert for <span class="item-cost">${dparse(this.cost)}</span> blessings
            </div>
            <div class="item-quantity">
            ${this.owned}
        </div>`
        return element;
    }

    updateElement() {


        this.element.querySelector(".item-description").innerHTML = `
                <h1>${this.name}</h1>
        Convert for <span class="item-cost">${dparse(this.cost)}</span> blessings
        </div>`

        this.element.querySelector(".item-quantity").innerHTML = `<div class="item-quantity">
        ${this.owned}
        </div>`
    }

    getElement() {
        return this.element;
    }
}