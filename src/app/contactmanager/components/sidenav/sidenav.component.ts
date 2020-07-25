import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav, MatDrawer } from '@angular/material/sidenav';

const SMALL_WIDTH_BRAEKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BRAEKPOINT}px)`);
  users: Observable<User[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(zone: NgZone, private userService: UserService, private router: Router) {
    this.mediaMatcher.addListener(mql => {
      // console.log('setse',mql);
    });
   }

   @ViewChild(MatDrawer) drawer: MatDrawer;

  ngOnInit(): void {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe( () => {
      if(this.isScreenSmall()) {
        this.drawer.close();
      }
    });
  }

  isScreenSmall(): boolean {
    // console.log(this.mediaMatcher.matches);
    return this.mediaMatcher.matches;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
    this.drawer.toggle().then(() => {
      this.drawer.toggle();
    });
  }

}
