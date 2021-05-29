import {Component, OnInit} from '@angular/core';
import {delay, switchMap, tap} from 'rxjs/operators';
import {WeddingsService} from '../weddings.service';
import {GuestMessage, Wedding} from '../wedding.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddWeddingGuestMessageDialogComponent} from '../add-wedding-guest-message-dialog/add-wedding-guest-message-dialog.component';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';


@Component({
  selector: 'app-wedding-guest-messages',
  templateUrl: './wedding-guest-messages.component.html',
  styleUrls: ['./wedding-guest-messages.component.scss']
})
export class WeddingGuestMessagesComponent implements OnInit {

  wedding: Wedding | undefined;
  weddingGuestMessages: GuestMessage[] | undefined;

  weddingId = this.activatedRoute.snapshot.params.id;

  constructor(public dialog: MatDialog,
              private weddingsService: WeddingsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getWeddingDetails();
  }

  private getWeddingDetails(): void {
    this.weddingsService.getWedding(this.weddingId).pipe(
      tap(wedding => this.wedding = wedding),
      switchMap(wedding => wedding ? this.getWeddingGuestMessages() : fromPromise(this.router.navigate(['/', 'weddings']))))
      .subscribe();
  }

  private getWeddingGuestMessages(): Observable<GuestMessage[]> {
    this.weddingGuestMessages = undefined;
    return this.weddingsService.getWeddingGuestMessages(this.weddingId).pipe(
      delay(500),
      tap(messages => this.weddingGuestMessages = messages));
  }

  openAddWeddingGuestMessageDialog(): void {
    const addWeddingDialog = this.dialog.open(AddWeddingGuestMessageDialogComponent, {
      width: '250px',
      data: {weddingId: this.wedding?.id}
    });

    addWeddingDialog.afterClosed().subscribe(result => {
      if (result) {
        this.getWeddingGuestMessages().subscribe();
      }
    });
  }

  isMariaAndClayton(): boolean {
    return this.wedding?.groomName === 'Clayton' && this.wedding?.brideName === 'Maria';
  }

  openMariaAndClaytonMenu(): void {
    window.open('/assets/menu/Maria-Clayton-Wedding-Menu.pdf', '_blank');
  }

}
