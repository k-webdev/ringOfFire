import { Component, OnInit } from '@angular/core';
import { Game } from 'src/game/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  takeCardAnimation = false;
  currentCard: string = '';
  playedCard: string = '';
  game: Game;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    ;
  }

  takeCard() {
    if (!this.takeCardAnimation) {


      this.currentCard = this.game.stack.pop();//pop nimmt den letzten Wert eines Arrays und entfernt ihn aus dem Array.
      console.log(this.currentCard);
      this.takeCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.takeCardAnimation = false;
      }, 2500);
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length > 0){
     this.game.players.push(name);
      }
    });

  }
}
