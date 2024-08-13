export default class Achievement {
    constructor(name,desc,prereq,unlock) {
        this.name = name;
        this.description = desc;
        this.prereq = prereq;
        this.unlock = unlock;
    }

    createElement(){
        const element = document.createElement("div");
        element.classList.add("achievementDiv")
        element.innerHTML = `
        <p>${this.name}</p>
        <p>${this.description}</p>
        `
    }

    updateElement(){


        this.updateElement();
    }
}