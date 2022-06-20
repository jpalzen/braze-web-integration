export function logMethod(name, value) {
    console.log(name + " " + value);
    switch (name) {
        case 'change_user_button':
            changeUser(value);
            break;
        case 'fn_button':
            logFirstName();
            break;
        case 'ln_button':
            logLastName();
            break;
        case 'email_button':
            logEmail(value);
            break;
        case 'gender_button':
            logGender(value);
            break;
        case 'country_button':
            logCountry(value);
            break;
        case 'birthday_button':
            logBirthday(value);
            break;
        case 'home_city_button':
            logHomeCity(value);
            break;
        case 'phone_number_button':
            logPhoneNumber(value);
            break;
        default:
            break;
    }

}
export function logCustomAttribute(name, value){
    // Log Attribute to Braze
    console.log(name + " " + value);
}
export function logCustomEvent(name, property){
    // Log Attribute to Braze
    console.log(name + " " + property);
}
export function logPurchase(productId,currency,price,quantity){
    // Log Attribute to Braze
    console.log(productId + " " + currency + " " + price + " " + quantity);
}

function changeUser(value) {
    console.log("ChangeUser to: " + value);
}

function logFirstName(){

}
function logLastName(){

}
function logEmail(){

}
function logGender() {

}
function logCountry(){

}
function logBirthday(){

}
function logHomeCity(){

}
function logPhoneNumber(){

}

