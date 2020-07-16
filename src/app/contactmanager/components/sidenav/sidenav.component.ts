import { Component, OnInit, NgZone } from '@angular/core';

const SMALL_WIDTH_BRAEKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BRAEKPOINT}px)`);
  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(mql => {
      console.log('setse',mql)
    });
   }

  ngOnInit(): void {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
