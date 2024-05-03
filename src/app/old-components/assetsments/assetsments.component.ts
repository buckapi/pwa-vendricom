import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-assetsments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assetsments.component.html',
  styleUrl: './assetsments.component.css'
})
export class AssetsmentsComponent {

  constructor(
    public virtualRouter: virtualRouter,
    public global:GlobalService
  ) { }

  ngOnInit(): void {
  }}
