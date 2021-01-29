import { Component, Renderer2 } from '@angular/core';
import { getRandomInt, home } from './init-data';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ideaboard';
  selectedCard:Card;

  constructor(private renderer: Renderer2) { }

sectionA = home.sectionA;
sectionB = home.sectionB;
sectionC = home.sectionC;


  onSelect(card:Card):void{
    this.selectedCard = card;
    let focusTask = document.getElementById("focusT")
    focusTask.style.display = 'block';
  }


  addCard(sec:string) 
  { 
    let addedCard:Card = {
      Section:sec,
      Content:"",
      Likes:0,
      Id:getRandomInt(1000),
    };
    switch(sec){
      case "A":
        home.sectionA.push(addedCard);
        break;
      case "B":
        home.sectionB.push(addedCard);
        break;
      case "C":
        home.sectionC.push(addedCard);
        break;
    }
  }
}

