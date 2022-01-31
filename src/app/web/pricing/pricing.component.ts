import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalcontactComponent } from '../../components/modalcontact/modalcontact.component';
import { Router } from '@angular/router';
import { ComponentFactoryService } from 'src/libs/cfactory/componentfactory.service';
import { Parameters } from 'src/libs/cfactory/parameters';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
@ViewChild('pricingModal',  { read: ViewContainerRef, static: true }) modalRef: ViewContainerRef;
dataResult: boolean = true;
parameters: Parameters;
  constructor(private router: Router, private cFactory: ComponentFactoryService) { }

  ngOnInit() {
  }

  openmodal(){
    console.log("Entra en openmodal")
    if (this.dataResult = true) {
      this.cFactory.insert(this.modalRef, ModalcontactComponent, {
        title: "Become a Writer Kids",
        tick: "",
        text1: "Gracias por registrarse en Become a Writer",
        text2: "¡Nos pondremos en contacto en breve!",
        button: "Salir"
      },
        {
          close: this.enviar
        });
    }
    else {
      this.cFactory.insert(this.modalRef, ModalcontactComponent, {
        title: "Lo sentimos!",
        body: "Ha ocurrido un error al registrar su usuario.",
        button: "Salir"
      })
    }
  }
  enviar = () => {
    this.router.navigate(['/'])
  }

}
