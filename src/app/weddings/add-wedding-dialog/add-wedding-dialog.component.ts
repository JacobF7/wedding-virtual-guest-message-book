import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WeddingsService} from '../weddings.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-wedding-dialog',
  templateUrl: './add-wedding-dialog.component.html',
  styleUrls: ['./add-wedding-dialog.component.scss']
})
export class AddWeddingDialogComponent implements OnInit {

  addWeddingForm = new FormGroup({
    brideName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    groomName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    date: new FormControl(null, [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<AddWeddingDialogComponent>,
              private weddingsService: WeddingsService,
              private matSnackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.addWeddingForm.reset();
  }

  confirmAddWedding(): void {
    if (this.addWeddingForm.invalid) {
      this.matSnackBar.open('Invalid Input', 'Close', {duration: 2000});
      return;
    }

    this.weddingsService.addWedding({
      brideName: this.addWeddingForm.value.brideName,
      groomName: this.addWeddingForm.value.groomName,
      date: this.addWeddingForm.value.date
    }).subscribe(() => {
      this.matSnackBar.open('Wedding Added Successfully', 'Close', {duration: 2000});
      this.dialogRef.close('success');
    }, () => this.matSnackBar.open('Error! Please try again later.', 'Close', {duration: 2000}));
  }

  cancelAddWedding(): void {
    this.dialogRef.close();
  }
}
