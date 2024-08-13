
// USE FOR SETTING INNER HTML DISPLAY
// RETURNS UNIT ONLY

export default function dparseUnit(number) {
    let word = "";
    if(number >1000000) {
        if(number <= 1000000000) {
            
            word = "million";
        };
        if(number > 1000000000 && number <= 1000000000000) {
            
            word = "billion";
        };
        if(number > 1000000000000 && number <= 1000000000000000) {
            
            word = "trillion";
        };
        if(number > 1000000000000000 && number <= 1000000000000000000) {
            
            word = "quadrillion";
        };
        if(number > 1000000000000000000 && number <= 1000000000000000000000) {
            
            word = "quintillion";
        };
        if(number > 1000000000000000000000 && number <= 1000000000000000000000000) {
            
            word = "sextillion";
        };
        if(number > 1000000000000000000000000 && number <= 1000000000000000000000000000) {
            
            word = "septillion";
        };
        if(number > 1000000000000000000000000000 && number <= 1000000000000000000000000000000) {
            
            word = "octillion";
        };
        if(number > 1000000000000000000000000000000 && number <= 1000000000000000000000000000000000) {
            
            word = "nonillion";
        };
    }
    return word;
}