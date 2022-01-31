import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData, GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss']
})
export class StartModalComponent implements OnInit {

  public body: string;
  public body2: string;
  public body3: string;
  public body4: string;
  public icon: string;
  public button: string;
  public title: string;

  constructor(
    public dialogRef: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    )
    {
    dialogRef['_containerInstance']['_config']['width'] = '700px';
    // dialogRef['_containerInstance']['_config']['height'] = '400px';
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
  }

  ngOnInit() {
    this.body = this.data['body'];
    this.body2 = this.data['body2'];
    this.body3 = this.data['body3'];
    this.body4 = this.data['body4'];
    this.icon = this.data['svg'];
    this.button = this.data['button'];
    this.title = this.data['title'];
  }

}
