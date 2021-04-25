import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WeddingsService} from '../weddings.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-wedding-guest-message-dialog',
  templateUrl: './add-wedding-guest-message-dialog.component.html',
  styleUrls: ['./add-wedding-guest-message-dialog.component.scss']
})
export class AddWeddingGuestMessageDialogComponent implements OnInit {

  maxMessageLength = 100;

  addGuestMessageForm = new FormGroup({
    guestName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    message: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(this.maxMessageLength)]),
  });

  constructor(public dialogRef: MatDialogRef<AddWeddingGuestMessageDialogComponent>,
              private weddingsService: WeddingsService,
              private matSnackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: { weddingId: string }
  ) {
  }

  ngOnInit(): void {
    this.addGuestMessageForm.reset();
  }

  confirmAddGuestMessage(): void {
    if (this.addGuestMessageForm.invalid) {
      this.matSnackBar.open('Invalid Input', 'Close', {duration: 2000});
      return;
    }

    this.weddingsService.addWeddingGuestMessages({
      weddingId: this.data.weddingId,
      guestName: this.addGuestMessageForm.value.guestName,
      message: this.addGuestMessageForm.value.message,
      date: new Date()
    }).subscribe(() => {
      this.matSnackBar.open('Message Added Successfully', 'Close', {duration: 2000});
      this.dialogRef.close('success');
    }, () => this.matSnackBar.open('Error! Please try again later.', 'Close', {duration: 2000}));
  }

  cancelAddGuestMessage(): void {
    this.dialogRef.close();
  }

  getRemainingMessageCharacters(): number {
    return this.maxMessageLength - (this.addGuestMessageForm.value.message?.length || 0);
  }
}
