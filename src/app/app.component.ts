import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'becomeawriter8';

  constructor(
    private router: Router,
    public translate: TranslateService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
    ) {
    this.translate.setDefaultLang('es');
    translate.use('es');
    this.iconRegistry.addSvgIcon(
      'menu_close', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu_close.svg'));
    this.iconRegistry.addSvgIcon(
      'add', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/add.svg'));
    this.iconRegistry.addSvgIcon(
      'add_white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/add_white.svg'));
    this.iconRegistry.addSvgIcon(
      'edit', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/edit.svg'));
    this.iconRegistry.addSvgIcon(
      'view', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/view.svg'));
    this.iconRegistry.addSvgIcon(
      'delete', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/bin-delete.svg'));
    this.iconRegistry.addSvgIcon(
      'search', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/search.svg'));
    this.iconRegistry.addSvgIcon(
      'navigate_before', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/navigate_before.svg'));
    this.iconRegistry.addSvgIcon(
      'navigate_next', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/navigate_next.svg'));
    this.iconRegistry.addSvgIcon(
      'logout', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/logout.svg'));
    this.iconRegistry.addSvgIcon(
      'logout-modal', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/logout-modal.svg'));
    this.iconRegistry.addSvgIcon(
      'logout_dark', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/logout_dark.svg'));
    this.iconRegistry.addSvgIcon(
      'menu_open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu_open.svg'));
    this.iconRegistry.addSvgIcon(
      'tips', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/tips.svg'));
    this.iconRegistry.addSvgIcon(
      'save', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/save.svg'));
    this.iconRegistry.addSvgIcon(
      'clock', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/clock.svg'));
    this.iconRegistry.addSvgIcon(
      'challenge', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/challenge.svg'));
    this.iconRegistry.addSvgIcon(
      'challenge-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/challenge-white.svg'));
    this.iconRegistry.addSvgIcon(
      'menu-main', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu-main.svg'));
    this.iconRegistry.addSvgIcon(
      'menu-main-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu-main-white.svg'));
    this.iconRegistry.addSvgIcon(
      'folder', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/folder.svg'));
    this.iconRegistry.addSvgIcon(
      'calendar', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/calendar.svg'));
    this.iconRegistry.addSvgIcon(
      'vacio', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/vacio.svg'));
    this.iconRegistry.addSvgIcon(
      'exclamacion', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/exclamacion.svg'));
    this.iconRegistry.addSvgIcon(
      'view', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/view.svg'));
    this.iconRegistry.addSvgIcon(
      'delete', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/delete.svg'));
    this.iconRegistry.addSvgIcon(
      'tochallenge', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/military-tech.svg'));
    this.iconRegistry.addSvgIcon(
      'cat-5', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/cat-5.svg'));
    this.iconRegistry.addSvgIcon(
      'cat-15', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/cat-15.svg'));
    this.iconRegistry.addSvgIcon(
      'cat-infinito', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/cat-infinito.svg'));
    this.iconRegistry.addSvgIcon(
      'winner', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/winner.svg'));
   }

   ngOnInit() {
    //hacer que las paginas suban arriba
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
