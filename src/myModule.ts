export const helloWorld: string = "Hello World";

export class Ursprungscode extends HTMLElement{
    constructor(){
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  
    }
}

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
const cardsData = getCardsData();


// Create all cards
function createCards() {
    if (cardsData != null)
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
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
    `;
  
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
  
    // Add to DOM cards
    cardsEl.push(card);
    
    if(cardsContainer) 
      cardsContainer.appendChild(card);
  
    updateCurrentText();
  }
  


  // Show number of cards
  function updateCurrentText() {
    if(currentEl) {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
  }}
  
  // Get cards from local storage
  function getCardsData(): any {
    
    var tmpCards : string | null ;
    tmpCards = localStorage.getItem('cards');


    if (typeof tmpCards === 'string') { 
       var cards = JSON.parse(tmpCards); }

    return cards === null ? [] : cards;
  }

  // Add card to local storage
  function setCardsData(cards: any):any {
    
    alert(cards);
        localStorage.setItem('cards', JSON.stringify(cards));
        window.location.reload();
      
  }

  
  createCards();
  
  // Event listeners

// Next button

function nextButton() {
if(nextBtn) {

    nextBtn.addEventListener('click', () => 
    {
        cardsEl[currentActiveCard].className = 'card left';

        currentActiveCard = currentActiveCard + 1;
  
        if (currentActiveCard > cardsEl.length - 1) {
            currentActiveCard = cardsEl.length - 1;
        }
    
        cardsEl[currentActiveCard].className = 'card active';
  
        updateCurrentText();
    }
  )}
}

nextButton();
  // Prev button
  function prevButton () {
  if(prevBtn) {
  prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';
  
    currentActiveCard = currentActiveCard - 1;
  
    if (currentActiveCard < 0) {
      currentActiveCard = 0;
    }
  
    cardsEl[currentActiveCard].className = 'card active';
  
    updateCurrentText();
  });
}
}

prevButton();

  // Show add container
  function showAddContainer () {
  if(showBtn) {
    alert("Show");
    showBtn.addEventListener('click', () => {
      if(addContainer) 
        addContainer.classList.add('show');
        
    });
  }
}
showAddContainer();
  // Hide add container
  function hideAddContainer () {
  if(hideBtn) {
  hideBtn.addEventListener('click', () => {
      if(addContainer)
        addContainer.classList.remove('show');
    });
  } 
}
hideAddContainer();
  
  // Add new card
  function addNewCard () {

    if(addCardBtn) {

    /*addCardBtn.addEventListener('click', () => {
        if(questionEl){
            const question = questionEl.value;
        if(answerEl){
            const answer = answerEl.value;}
    
        if(questionEl && answerEl) {


            if (questionEl.trim() && answerEl.trim()) {
  
                createCard(questionEl, answerEl);
        
                if(questionEl) {
                    questionEl.textContent = '';}
                if(answerEl) {
                    answerEl.textContent = '';}
        
                if(addContainer) {
                    addContainer.classList.remove('show');}
  
                cardsData.push(questionEl, answerEl);
                setCardsData(cardsData);
            }*/
            
          // Add new card
      addCardBtn.addEventListener('click', () => {


        const question = questionEl.value;
        const answer = answerEl.value;


        alert(question);
        alert(answer);

        if (question && answer) {
          if (question.trim() && answer.trim()) {
            const newCard = { question, answer };

            createCard(question, answer);//newCard);

          //questionEl.value = '';
          //answerEl.value = '';
          if (addContainer)    
          addContainer.classList.remove('show');

          cardsData.push(newCard);
          setCardsData(cardsData);
        }
      }
      });
    }   
    }
  
  addNewCard();
  // Clear cards button
  
function clearCards () {
  if(clearBtn){
    clearBtn.addEventListener('click', () => {
        if(localStorage){
            localStorage.clear();}
        if(cardsContainer){
            cardsContainer.innerHTML = '';}
        window.location.reload();
        });
    }
  }
clearCards(); 
