import { Component, Input, OnInit } from '@angular/core';
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

  @Input() public card:Card;

  closePopup(){
    let focusTask = document.getElementById("focusT")
    focusTask.style.display = 'none';
  }

}
