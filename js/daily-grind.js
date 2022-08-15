//alert("it's working!");

/*

    One unique image, with appropriate and matching content in the alt tag.  

    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    
    A unique color that supports the image and paragraph of content

    Here are the items we need to change for each coffee

    Image - src of pic 
    Alt - alt tag of pic
    description - a paragrah content about the coffee
    name -  a name of today's coffee
    color - a color representing the coffee

    we may also us the following, but not part of the coffee itselft 

    today - the current day of the week 

*/


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day} Coffee Special:</strong> 
            ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}
            </strong>, ${coffee.desc}
        </p>
    `;

    return myReturn;
}


let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";

//use location object to access querystring (addess bar)
const queryString = window.location.search;

//output querystring parameters
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data available? Show from url
    myDay = urlParams.get("day");
}

    switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a Bubble Tea",
            day: "Sunday",
            desc: `I like me some bubble tea!`
        };

    break;

    case 1:
        today = "Monday";

        coffee = {
            color: "brown",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a Caramel",
            day: "Monday",
            desc: `I like me some Caramel Latte!`
        };

    break;

    case 2:
        today = "Tuesday"

        coffee = {
            color: "white",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of cold brew",
            day: "Tuesday",
            desc: `I like me some Cold Brew!`
        };

    break;

    case 3:
        today = "Wednesday"

        coffee = {
            color: "black",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of drip",
            day: "Wednesday",
            desc: `I like me some Drip!`
        };

    break;

    case 4:
        today = "Thusday"

        coffee = {
            color: "green",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of Frappaccino",
            day: "Thusday",
            desc: `I like me some Frappaccino!`
        };

    break;

    case 5:
        today = "Friday"

        coffee = {
            color: "red",
            name: "Mocha",
            pic: "images/mocha.jps",
            alt: "A pic of Mocha",
            day: "Friday",
            desc: `I like me some Mocha!`
        };

    break;

    case 6:
        today = "Saturday"

        coffee = {
            color: "Yellow",
            name: "Pumkin Spice Latte",
            pic: "images/pumkin-spice-latte.jpg",
            alt: "A pif of Pumkin Spice Latte",
            day: "Saturday",
            desc: `I like me some Pumkin Spice Latte!`
        };

    break;

    default:
    today = "Something went wrong!";

}

//let coffeeData = coffeeTemplate(coffee)
//alert(coffee.pic);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

//console.log(coffee);