import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData, GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'app-exit-modal',
  templateUrl: './exit-modal.component.html',
  styleUrls: ['./exit-modal.component.scss']
})
export class ExitModalComponent implements OnInit {

  public body: string;
  public icon: string;
  public button1: string;
  public button2: string;
  public relatoName: string;
  public title: string;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    dialogRef['_containerInstance']['_config']['width'] = '500px';
    // dialogRef['_containerInstance']['_config']['height'] = '360px';
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
  public accept(): void {
    this.dialogRef.close(true);
    this.router.navigate(['']);
    localStorage.clear();
  }

  ngOnInit() {
    this.title = this.data['title'];
    this.body = this.data['body'];
    this.icon = this.data['svg'];
    this.relatoName = this.data['relatoName'];
    this.button1 = this.data['button1'];
    this.button2 = this.data['button2'];

  }

}
