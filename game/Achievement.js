export default class Achievement {
    constructor(name,desc,target,amount,unlock) {
        this.name = name;
        this.description = desc;
        this.target = target;
        this.amount = amount;
        this.unlock = unlock;
        this.unlocked = false;
        // this.tag = tag;

        this.element=this.createElement();
    }

    createElement(){
        const element = document.createElement("div");
        element.classList.add("achievement");
        element.classList.add("hidden");
        element.innerHTML = `
        <span class="achievement-name">${this.name}:</span>
        <span class="achievement-description">${this.description}</span>
        `
        // this.updateElement();
        return element;
    }

    updateElement(target){
        // console.log(this.unlocked)
        
        if(!this.unlocked) {
            // console.log("should be here")
            this.target = target;
            if(this.target < this.amount) {
                // console.log(this.target, this.amount)
            }
            else {
                // console.log(this.element)
                
                this.element.classList.remove("hidden"); // reveals achievement
                console.log("call unlock")
                this.unlock(); // reveals upgrade
                this.unlocked = true;
            }
        }
    }

    getElement() {
        return this.element;
    }
}