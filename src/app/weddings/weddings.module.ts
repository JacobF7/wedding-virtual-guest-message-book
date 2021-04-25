import {NgModule} from '@angular/core';

import {WeddingsRoutingModule} from './weddings-routing.module';
import {WeddingsComponent} from './weddings.component';
import {WeddingGuestMessagesComponent} from './wedding-guest-messages/wedding-guest-messages.component';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AddWeddingDialogComponent} from './add-wedding-dialog/add-wedding-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {SwiperModule} from 'swiper/angular';
import {AddWeddingGuestMessageDialogComponent} from './add-wedding-guest-message-dialog/add-wedding-guest-message-dialog.component';


@NgModule({
  declarations: [
    WeddingsComponent,
    WeddingGuestMessagesComponent,
    AddWeddingDialogComponent,
    AddWeddingGuestMessageDialogComponent
  ],
  imports: [
    WeddingsRoutingModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    SwiperModule,
    MatRippleModule,
  ]
})
export class WeddingsModule {
}
