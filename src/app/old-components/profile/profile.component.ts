import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(
    public virtualRouter: virtualRouter,
    public global:GlobalService
  ) { }
setAttempt(i:any){
  this.global.attemptPrev=this.global.assetments[i];
}
setProfileOption(option:any){
  this.global.profileOption=option;
}
  ngOnInit(): void {
  }
}
