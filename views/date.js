//module for displaying date with day
exports.getDate = function(){
let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }; 
    return today.toLocaleDateString("en-US", options);
}    
//module for displaying only day
exports.getDay = function(){
let today = new Date();
    let options = {
        weekday: "long"
    }; 
    return today.toLocaleDateString("en-US", options);
}    