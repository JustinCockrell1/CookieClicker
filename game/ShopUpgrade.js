
import dparse from "./dparse.js"
export default class ShopUpgrade {
    constructor(name,desc,cost,image,id, onPurchase) {
        this.name=name;
        this.owned = 0;
        this.description = desc;
        this.cost = cost;
        this.image = image;
        this.id= id;

        this.active = false;

        this.element=this.createElement();

        this.onPurchase = onPurchase;

        this.purchased = false;
        this.display = false;
    }

    onClick(game) {
        console.log(game.blessings);
        if(this.active == false){
            this.active = true;
            document.getElementById("upgrades-info").innerHTML = `
            <div class="upgrades-info-container">
                <div>
                    <img src=${this.image} class="display-image">
                </div>

                <div>
                    <p>Upgrade: ${this.name} Cost: ${this.cost}</p>
                    <p>${this.description}</p>
                </div>
                <p>Click again to purchase</p>
            </div>
            
            `;
            
            // updateElement();
        }
        else {
            this.active = false;
            if(game.blessings >= this.cost){
                document.getElementById("upgrades-info").innerHTML = "Click an upgrade to see info"

                // console.log("purchased")
                // console.log(this.cost)
                game.blessings-=this.cost;
                // console.log("New blessings: "+ game.blessings)
                this.hideElement();
                this.onPurchase(game);
                this.purchased = true;
                this.display = false;
            }
            else {
                document.getElementById("upgrades-info").innerHTML = 
                "You didn't have enough money to buy it </br>Click an upgrade to see info"
            }
        }
    }

    onPurchase(game) {
        console.log("called onpurchase")
        game.setRate(game.rate+this.increase);
        console.log(this.cost);
        game.blessings-=this.cost;
        this.active = false;
        this.hideElement();
    }

    createElement() {

        // const display = document.createElement("div");
        // display.classList.add("upgrade-display");
        // display.innerHTML = `
        // <img class="upgrade-image" src="${this.image}"/>
        // <h1 class="upgrade-title">${this.name}</h1>
        // <p class="upgrade-description">${this.description}</p>
        // <p class="upgrade-cost">${dparse(this.cost)}`
        

        const element = document.createElement("button");
        element.classList.add(this.id);
        element.classList.add("upgrade");
        element.classList.add("hidden")
        element.innerHTML = `
        <img class="upgrade-image" src="${this.image}"/>
        <div class ="upgrade-display">
        <button class="purchase"><img class="display-image" src="${this.image}"/></button>
        <div class ="upgrade-display-info">
        <p class="upgrade-cost">Cost: ${dparse(this.cost)}</p>
        <p class="upgrade-description">${this.description}</p>
        </div>
        
        </div>`
        return element;
    }

    updateElement(event) {
        console.log("updated")
            event.stopPropagation();
            this.element.classList.add("active");
            console.log("classadded")

            document.addEventListener("click", function(event) {
                if (!this.element.contains(event.target)){
                    this.element.classList.remove("active");
                    console.log("movie")
                }
            })
        
    }

    hideElement() {
        this.element.classList.add("hidden")

    }

    getElement() {
        return this.element;
    }

}