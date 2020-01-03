import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ModalState, HideRequestConsultationModal } from '../../shared/state';



import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-request-consultation',
  templateUrl: './request-consultation.component.html',
  styleUrls: ['./request-consultation.component.scss']
})
export class RequestConsultationComponent implements OnInit {

  @Select(ModalState.getShowRequestConsultation)
  public showRequestConsultation$: Observable<boolean>;

  requestConsultation = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit() {}

  cancelRequestForm() {
    this.store.dispatch(new HideRequestConsultationModal());
  }

  submitRequest() {
    this.store.dispatch(new HideRequestConsultationModal());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RequestConsultationComponentDialog, {
      width: '250px',
      data: { name: 'Request Consultation' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-request-consultation',
  templateUrl: 'request-consultation.component-mat.html',
})
export class RequestConsultationComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<RequestConsultationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
