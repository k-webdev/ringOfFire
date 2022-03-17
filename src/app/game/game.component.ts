import { Component, OnInit } from '@angular/core';
import { Game } from 'src/game/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  takeCardAnimation = false;
  currendCard: String = '';
  playedCard:string = '';
  game: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
    ;
  }

  takeCard(){
    if(!this.takeCardAnimation){

    
    this.currendCard = this.game.stack.pop();//pop nimmt den letzten Wert eines Arrays und entfernt ihn aus dem Array.
    console.log(this.currendCard);
    this.takeCardAnimation = true;
      
    setTimeout(()=>{
      this.game.playedCard.push(this.currendCard);
      this.takeCardAnimation = false;
    },2500);
  }
}

}
