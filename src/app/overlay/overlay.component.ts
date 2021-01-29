import { Component, HostListener, Input, OnInit } from '@angular/core';
import { home } from '../init-data';
import { Card } from '../models/card';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() card:Card;

  closePopup(){
    let focusTask = document.getElementById("focusT")
    focusTask.style.display = 'none';
  }

  likeCard(){
    this.card.Likes+=1;
  }

  deleteCard(){
    switch(this.card.Section){
      case "A":
        this.removeCard(home.sectionA, this.card)
        break;
      case "B":
        this.removeCard(home.sectionB, this.card)
        break;
      case "C":
        this.removeCard(home.sectionC, this.card)
        break;
    }
  }

  removeCard(cards:Card[], card:Card){
    let index = cards.indexOf(card);
    if(index>-1){
      cards.splice(index,1);
    }
    this.closePopup();
  }
}