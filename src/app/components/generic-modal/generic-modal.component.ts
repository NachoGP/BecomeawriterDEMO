import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  message: string;
  title: string;
}

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {

  public message: string;
  public title: string;
  public icon: string;

  constructor(
    public dialogRef: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    if (!dialogRef['_containerInstance']['_config']['width']) {
      dialogRef['_containerInstance']['_config']['width'] = '420px';
    }
  }

  /**
   * Method to close the modal
   */
  public close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.title = this.data.title;
    this.message = this.data.message;
    this.icon = this.data['svg'];
  }

}