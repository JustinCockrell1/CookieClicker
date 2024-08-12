import parseNumber from "./parseNumber.js";
export default class ShopUpgrade {
    constructor(name,desc,cost,image, onPurchase) {
        this.name=name;
        this.owned = 0;
        this.description = desc;
        this.cost = cost;
        this.image = image;

        this.element=this.createElement();

        this.onPurchase = onPurchase;
    }

    onClick(game) {
        if(game.blessings>=this.cost) {
            this.onPurchase(game)
        game.blessings-=this.cost;
        }
    }

    // onPurchase(game) {
    //     game.setRate(game.rate+this.increase);
    //     this.owned++;
    //     this.updateElement();
    // }

    createElement() {

        const element = document.createElement("button");
        element.classList.add("upgrade");
        element.innerHTML = `
        <img class="upgrade-image" src="${this.image}"/>
        <h1 class="upgrade-title">${this.name}</h1>
        <p class="upgrade-description">${this.description}</p>
        <p class="upgrade-cost">${parseNumber(this.cost)}`
        return element;
    }

    updateElement() {


    }

    getElement() {
        return this.element;
    }
}