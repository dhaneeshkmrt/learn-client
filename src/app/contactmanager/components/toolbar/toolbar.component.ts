import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  @Output() toggleDir = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.openSnackBar('Contact added', 'Navigate').onAction().subscribe(() => {
          this.router.navigate(['/contactmanager', result.id]);
        });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000
    });
  }

}
