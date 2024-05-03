import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { PodiumComponent } from '../podium/podium.component';
@Component({
  selector: 'app-bhome',
  standalone: true,
  imports: [CardsComponent,CommonModule,PodiumComponent],
  templateUrl: './bhome.component.html',
  styleUrl: './bhome.component.css'
})
export class BhomeComponent {
  constructor(
    public virtualRouter: virtualRouter,
    public global:GlobalService
  ) { }

  ngOnInit(): void {
  }
}
