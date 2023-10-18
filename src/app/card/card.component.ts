import { Component } from '@angular/core';
import { alphabet } from '../abc.config';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('leftArrowClick', [
      state('leftArrowInactive', style({
        transform: 'rotate(0deg)'
      })),
      state('leftArrowActive', style({
        transform: 'rotate(25deg)'
      })),
      transition('leftArrowInactive <=> leftArrowActive', [
        animate('0.5s')
      ]),
    ]),
    trigger('rightArrowClick', [
      state('rightArrowInactive', style({
        transform: 'rotate(0deg)'
      })),
      state('rightArrowActive', style({
        transform: 'rotate(-25deg)'
      })),
      transition('rightArrowInactive <=> rightArrowActive', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class CardComponent {
  public config = alphabet;
  public isFlipped = false;
  public showNavigation = false;
  public currentIndex = 0;
  public alphabet = ['a', 'b', ' c', ' d', ' e', ' f', ' g', ' h', ' i', ' j', ' k', ' l', ' m', ' n', ' o', ' p', ' q', ' r', ' s', ' t', ' u', ' v', ' w', ' x', ' y', ' z'];

  public leftArrowClicked = false;
  public rightArrowClicked = false;

public toggle(): void {
  this.isFlipped = !this.isFlipped;
}

public prev(): void {
  this.leftArrowClicked = true;
  setTimeout(() => this.leftArrowClicked = false, 150);
  if (this.currentIndex > 0) this.currentIndex--;
}

public next(): void {
  this.rightArrowClicked = true;
  setTimeout(() => this.rightArrowClicked = false, 150);
  if (this.isFlipped) {
    this.isFlipped = false;
    if (this.currentIndex < this.config.length - 1) setTimeout(() => this.currentIndex++, 100);
  } else if (this.currentIndex < this.config.length - 1) this.currentIndex++;
}

public selectIndex(index: number): void {
  if (this.isFlipped) {
    this.isFlipped = false;
    setTimeout(() => this.currentIndex = index, 100);
  } else this.currentIndex = index;
}

}
