//Mathieu Kers
//
//Pizza Calculator 1.0
//Prijs Pizza
const PRICESMALL=5.00//Prijs van de kleine pizza.
const PRICEMEDIUM=6.00//Prijs van de middelmatige pizza.
const PRICELARGE=7.00//Prijs van de grote pizza.
document.write('Pizza bon');//Schrijft op dat het een pizza bon is

//Small pizza
var small = prompt('How many small pizza do you want?');//Stelt de vraag hoeveel kleine pizza je wilt.
document.write('<br>Small: '+ small + ' pizza');//Schrijft op hoeveel kleine pizza je hebt gekozen.
small=small * PRICESMALL;//Rekent de prijs uit van het aantal kleine pizza dat je wilt.
document.write(' '+ small + '.00,-');//Schrijft de prijs op van de kleine pizza.

//Medium pizza
var medium = prompt('How many medium pizza do you want?');//Stelt de vraag hoeveel middelmatige pizza je wilt.
document.write('<br>Medium: '+ medium + ' pizza');//Schrijft op hoeveel middelmatige pizza je hebt gekozen
medium=medium * PRICEMEDIUM;//Rekent de prijs uit van het aantal middelmatige pizza dat je wilt
document.write(' '+ medium + '.00,-');//Schrijft de prijs op van de middelmatige pizza.

//Large pizza
var large = prompt('How many large pizza do you want?');//Stelt de vraag hoeveel grote pizza je wilt.
document.write('<br>Large: '+ large + ' pizza');//Schrijft op hoeveel grote pizza je hebt gekozen.
large=large * PRICELARGE;//Rekent de prijs uit van het aantal grote pizza dat je wilt.
document.write(' '+ large + '.00,-');//Schrijft de prijs op van de grote pizza.

//Totaal pizza
const TOTAAL=small + medium + large//Rekent het totaal bedrag uit van de pizza.
document.write('<br>Totaal: ' + TOTAAL + ',-')//Schrijft het totaal bedrag op van de pizza.