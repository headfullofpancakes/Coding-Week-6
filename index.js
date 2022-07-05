let shuffle =(arr)=>arr.sort(()=>0.5 - Math.random());

//sets player scores to zero and assigns an empty array to 'cards'
let p1Score = 0;
let p2Score = 0;
let cards = [];

//creates a new deck    
for(let i = 0; i < 4; i++){
    for (let num = 2; num < 11; num++){
        cards.push(num);
    }
    cards.push('J','Q','K','A');
}
let shuffledDeck = shuffle(cards);

//creates a class and method to deal and draw player cards
class Players{
  constructor(p1, p2){
    this.playerOneCard=[];
    this.playerTwoCard=[];
    this.p1Card = p1;
    this.p2Card = p2;
    }
    
    dealCards(){
      for(let i = 0; i < cards.length; i++){
        if(i%2 ===0){
          this.playerOneCard.push(shuffledDeck[i]);
        }else{
          this.playerTwoCard.push(shuffledDeck[i]);
        }
      };
      console.log(`Cards have been dealt! LET'S BATTLE!`)
    };

    takeTurns (){
      console.log(`Let's WAR it up`);
      for(let i = 0; i<cards.length/2;i++){
        console.log 
        (`
        Turn : ${i+1}
        Player 1 :    ${this.playerOneCard[i]}           
        Player 2 :    ${this.playerTwoCard[i]}
        `);
        
          //assigns values to string cards
          switch(this.playerOneCard[i]){
            case 'J': this.p1Card = 11;
            break;
            case 'Q': this.p1Card = 12;
            break;
            case 'K': this.p1Card = 13;
            break;
            case 'A': this.p1Card = 14;
            break;
            default: this.p1Card = this.playerOneCard[i];
          }
          
          switch(this.playerTwoCard[i]){
            case 'J': this.p2Card = 11;
            break;
            case 'Q': this.p2Card = 12;
            break;
            case 'K': this.p2Card = 13;
            break;
            case 'A': this.p2Card = 14;
            break;
            default: this.p2Card = this.playerTwoCard[i];
          }
          
          if(this.p1Card > this.p2Card){
              p1Score += 1;
              console.log('1 point awarded to Player 1'); 
          }else if (this.p1Card < this.p2Card) {
              p2Score += 1;
              console.log('1 point awarded to Player 2');
          }else {
              console.log('Tie! No points awarded');
          }
      };
    }; 
  }

    class Game{
      start(){

        //sort cards to players, push into arrays
        let deal= new Players();
        deal.dealCards();
        //put down cards AND assign points
        deal.takeTurns();
      } 
      
      //winner outcome declaration
      winner(){
        if(p1Score > p2Score){
          return 'Player 1 Wins!'
        } else if (p1Score < p2Score){
          return 'Player 2 Wins!'
        } else{
          return 'STALEMATE! Play WAR again to see who shall rule!'
        };
      }


      //score outcomes and winner
      gameOver(){ 
        console.log
        (`          
          Player 1 Score Total :   ${p1Score}   
        
          Player 2 Score Total :   ${p2Score} 
     __________________________________
             
             ${game.winner(p1Score, p2Score)}
        `);
      }
  };
//instance of class Game  
let game = new Game();
//starts the game (instance.method)
game.start();
//shows score and winner
game.gameOver();
 