import { Component, Renderer2 } from '@angular/core';
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

sectionA: Card[] = [
    {Content:"my name is",Likes:2},
    {Content:"",Likes:4},
    {Content:"",Likes:8},
  ]

sectionB: Card[] = [
    {Content:"",Likes:1},
    {Content:"",Likes:3},
  ]

sectionC: Card[] = [
    {Content:"",Likes:0},
    {Content:"",Likes:9},
    {Content:"",Likes:5},
  ]


  onSelect(card:Card):void{
    this.selectedCard = card;
    console.log(card);
    let focusTask = document.getElementById("focusT")
    focusTask.style.display = 'block';
  }


  addCard(sec:string) 
  { 
    let addedCard:Card = {
      Content:"",
      Likes:0
    };

    switch(sec){
      case "A":
        this.sectionA = [...this.sectionA,addedCard];
        break;
      case "B":
        this.sectionB = [...this.sectionB,addedCard];
        break;
      case "C":
        this.sectionC = [...this.sectionC,addedCard];
        break;
    }
  }
}

