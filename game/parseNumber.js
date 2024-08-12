export default function parseNumber(number) {
    let word = "";
    if(number >1000000) {
        if(number <= 1000000000) {
            number = number/1000000;
            word = "million";
        };
        if(number > 1000000000 && number <= 1000000000000) {
            number = number/1000000000;
            word = "billion";
        };
        if(number > 1000000000000 && number <= 1000000000000000) {
            number = number/1000000000000;
            word = "trillion";
        };
        if(number > 1000000000000000 && number <= 1000000000000000000) {
            number = number/1000000000000000;
            word = "quadrillion";
        };
        if(number > 1000000000000000000 && number <= 1000000000000000000000) {
            number = number/1000000000000000000;
            word = "quintillion";
        };
        if(number > 1000000000000000000000 && number <= 1000000000000000000000000) {
            number = number/1000000000000000000000;
            word = "sextillion";
        };
        if(number > 1000000000000000000000000 && number <= 1000000000000000000000000000) {
            number = number/1000000000000000000000000;
            word = "septillion";
        };
        if(number > 1000000000000000000000000000 && number <= 1000000000000000000000000000000) {
            number = number/1000000000000000000000000000;
            word = "octillion";
        };
        if(number > 1000000000000000000000000000000 && number <= 1000000000000000000000000000000000) {
            number = number/1000000000000000000000000000000;
            word = "nonillion";
        };
        number = number.toFixed(3);
        let diff = number - Math.floor(number);
        if (diff > 0.009) {
            
            number = Number(number).toFixed(2)
        }
        else if (diff > 0.099) {
            number = Number(number).toFixed(1)
        }
        else {
            number = Number(number).toFixed(0)
        }
    }

    else{number = Math.trunc(number);}
    let displayNumber = number + word;
    return displayNumber;
}