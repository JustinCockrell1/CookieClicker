export default class ShopUpgrade {
    constructor(name,desc,cost, onPurchase) {
        this.name=name;
        this.owned = 0;
        this.description = desc;
        this.cost = cost;

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
        element.innerHTML = `<h1 class="upgrade-title">${this.name}</h1>
        <p class="upgrade-description">${this.description}</p>`
        return element;
    }

    updateElement() {


    }

    getElement() {
        return this.element;
    }
}