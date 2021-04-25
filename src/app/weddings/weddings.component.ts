import {Component, OnInit} from '@angular/core';
import {WeddingsService} from './weddings.service';
import {Wedding} from './wedding.model';
import {AddWeddingDialogComponent} from './add-wedding-dialog/add-wedding-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {

  weddings: Wedding[] | undefined;

  constructor(public dialog: MatDialog,
              private weddingsService: WeddingsService) {
  }

  ngOnInit(): void {
    this.getWeddings();
  }

  private getWeddings(): void {
    this.weddings = undefined;
    this.weddingsService.getWeddings().pipe(delay(500))
      .subscribe(weddings => this.weddings = weddings);
  }

  openAddWeddingDialog(): void {
    const addWeddingDialog = this.dialog.open(AddWeddingDialogComponent, {
      width: '250px',
    });

    addWeddingDialog.afterClosed().subscribe(result => {
      if (result) {
        this.getWeddings();
      }
    });
  }
}
