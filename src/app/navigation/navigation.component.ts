import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public fadeStyle: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  fadeNavigationBackground(event) {
    let position = window.pageYOffset
    if (position > 50)
      this.fadeStyle = "fade-in"
    else
      this.fadeStyle = "fade-out"
  }
}
