import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-age',
  templateUrl: './choose-age.component.html',
  styleUrls: ['./choose-age.component.scss']
})
export class ChooseAgeComponent {

  constructor(private router: Router) { }


  newprofileKids() {
    this.router.navigate(['/loginkids']);
  }
  newprofileTweens() {
     this.router.navigate(['/logintweens']);
  }
  newprofileTeens() {
    // this.router.navigate(['/loginkids']);
  }


}
