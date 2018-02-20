import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: String = "Add an Item";
  goalText: String = 'My first life goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    if (this.goalText != ""){
      this.goals.push(this.goalText);
    }
    
    this.goalText = "";
    this.itemCount = this.goals.length;
  }

}
