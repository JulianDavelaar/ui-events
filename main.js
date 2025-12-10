/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

//frontend, scale
let scale = document.querySelector('a[href="#frontend"]')

scale.addEventListener('click', function() {
  scale.classList.add('scale')
})

scale.addEventListener('animationend', function() {
  scale.classList.remove('scale')
})



//& translate
let translate = document.querySelector('a[href="#and"]')

translate.addEventListener('click', function() {
  translate.classList.add('and')
})

translate.addEventListener('animationend', function() {
  translate.classList.remove('and')
})


//development shake
let shake = document.querySelector('a[href="#development"]')

shake.addEventListener('dblclick', function() {
  shake.classList.add('dblclick')
})
 
shake.addEventListener('animationend', function(){
  shake.classList.remove('dblclick')
})



//Sprint 5 kleuren
let kleur = document.querySelector('a[href="#sprint-5"]')

kleur.addEventListener('click', function(){
kleur.classList.add('kleuren')
})

kleur.addEventListener('animationend', function(){
  kleur.classList.remove('kleuren')
})