export const helloWorld: string = "Hello World";

export class Ursprungscode extends HTMLElement{
    constructor(){
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  
    }
  }


/*___Fremdcode in Typescript umgeschrieben___ 
https://github.com/bradtraversy/vanillawebprojects/tree/master/memory-cards */

const cardsContainer: HTMLElement | null = document.getElementById('cards-container');
const prevBtn: HTMLElement | null= document.getElementById('prev');
const nextBtn: HTMLElement | null= document.getElementById('next');
const currentEl: HTMLElement | null= document.getElementById('current');
const showBtn: HTMLElement | null = document.getElementById('show');
const hideBtn: HTMLElement | null = document.getElementById('hide');
const questionEl: HTMLElement | null = document.getElementById('question');
const answerEl: HTMLElement | null = document.getElementById('answer');
const addCardBtn: HTMLElement | null= document.getElementById('add-card');
const clearBtn: HTMLElement | null= document.getElementById('clear');
const addContainer: HTMLElement | null= document.getElementById('add-container');


let currentActiveCard = 0;
// Store DOM cards

const cardsEl: any = [];

// Store card data
var cardsData = new Array<any>();
cardsData = getCardsData();


// Create all cards
function createCards() {
  cardsData.forEach((data: any, index: any) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data: any, index: any) {

    const card = document.createElement('div');
    card.classList.add('card');
  
    if (index === 0) 
      card.classList.add('active');

    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data[0]}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data[1]}
      </p>
    </div>
  </div>
    `;
  
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
  
    // Add to DOM cards
    cardsEl.push(card);
    cardsContainer!.appendChild(card);
    updateCurrentText();
}
  


  // Show number of cards
function updateCurrentText() {
  currentEl!.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}
  
  // Get cards from local storage
function getCardsData(): any {

  var tmpCards : any | null ;
  tmpCards = localStorage.getItem('cards');

  var cards = null;
  if (typeof tmpCards === 'string') { 
    var cards = JSON.parse(tmpCards); }
  return cards === null ? [] : cards;
}
 

  
  // Add card to local storage
function setCardsData(cards: any):any {
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
}
createCards();
  
// ___Event listeners___

    // Next button

nextBtn!.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';
  currentActiveCard = currentActiveCard + 1;
  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1; }
  cardsEl[currentActiveCard].className = 'card active';
  updateCurrentText();
});

  // Prev button
prevBtn!.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';
  currentActiveCard = currentActiveCard - 1;
  if (currentActiveCard < 0) {
      currentActiveCard = 0;
  }
  cardsEl[currentActiveCard].className = 'card active';
  updateCurrentText();
  });



  // Show add container
showBtn!.addEventListener('click', () => {
  if(addContainer) 
    addContainer.classList.add('show');   
});
  

  // Hide add container
hideBtn!.addEventListener('click', () => {
  if(addContainer)
    addContainer.classList.remove('show');
    });

  // Add new card
addCardBtn!.addEventListener('click', () => {
  const question : string = (<HTMLInputElement>questionEl).value;
  const answer : string = (<HTMLInputElement>answerEl).value;
    if (question.trim() && answer.trim()) {
      var newCard = new Array;
      newCard[0] = question;
      newCard[1] = answer;
            
  //createCard(newCard,0);
      createCard(newCard,0);
      (<HTMLInputElement>questionEl).value = '';
      (<HTMLInputElement>answerEl).value = '';  
        addContainer!.classList.remove('show');
        cardsData.push(newCard);
        setCardsData(cardsData);
            
    }
}); 

  // Clear cards buttons
clearBtn!.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer!.innerHTML = '';
  window.location.reload(); 
});
 

