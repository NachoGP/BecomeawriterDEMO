import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-maintenance',
  templateUrl: './page-maintenance.component.html',
  styleUrls: ['./page-maintenance.component.scss']
})
export class PageMaintenanceComponent{

  constructor(private r: Router) { }

  goHome(){
    this.r.navigate(['/']);
    console.log('Sale a inicio');
  }

}
