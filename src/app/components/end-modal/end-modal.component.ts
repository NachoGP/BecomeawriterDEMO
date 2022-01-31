import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatRadioChange, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { DialogData, GenericModalComponent } from '../generic-modal/generic-modal.component';
import { Relato } from './../../pages/interface.interface';
@Component({
  selector: 'app-end-modal',
  templateUrl: './end-modal.component.html',
  styleUrls: ['./end-modal.component.scss']
})
export class EndModalComponent implements OnInit {


  public endWriteForm: FormGroup;
  public body: string;
  public body2: string;
  public body3: string;
  public body4: string;
  public icon: string;
  public aa: any;
  public button: string;
  public title: string;
  public selectedRadio = "";
  public getId: any;
  public relato: Relato = { titulo: '', texto: '' };
  public propuesta: any;
  public tiempo: any;
  public id: any;
  constructor(
    private relatosService: RelatoservicesService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef['_containerInstance']['_config']['width'] = '700px';
    // dialogRef['_containerInstance']['_config']['height'] = '400px';
  }
  get f() { return this.endWriteForm.controls; }

  onChange(change) {
    console.log("entra en el On Change", change.value);
    this.endWriteForm.get('type').patchValue(change.value);
  }

  /**
   * Method to close the modal
   */
  public close(): void {
    this.dialogRef.close(false);
  }

  /**
   * Method to accept the modal
   */
  public accept() {

    if (this.endWriteForm.controls.type.value == "tosave") {
      console.log("Me voy a guardado listado(tosave). VISTA");
    } else {
      console.log("Me voy po challenge VISTA");
      this.getId = localStorage.getItem('id');
      this.router.navigate(['/challenges', this.getId]);
    }


    this.dialogRef.close(true);
  }

  ngOnInit() {
    this.body = this.data['body'];
    this.body2 = this.data['body2'];
    this.body3 = this.data['body3'];
    this.body4 = this.data['body4'];
    this.icon = this.data['svg'];
    this.button = this.data['button'];
    this.title = this.data['title'];

    this.endWriteForm = this.formBuilder.group({
      type: new FormControl('')
    })
    this.getId = localStorage.getItem('id');

  }

}

