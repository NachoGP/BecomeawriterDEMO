import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  active: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.active = false;
    setTimeout(() => {
      this.router.navigate(['/newprofile'], { replaceUrl: true });
    }, 2500);
  }

}
