import { Component, OnInit, HostListener, EventEmitter, Output, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public fadeStyle: string = ""
  public slideStyle: string = ""
  public isLoremOpened: boolean = false
  public isLanguageOpened: boolean = false
  public isLoggedIn: boolean = false
  public isProfileDropdownOpened: boolean = false
  public isBurgerMenuOpened: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.isLoggedIn = true;
  }

  @HostListener('window:scroll', ['$event'])
  fadeNavigationBackground(event) {
    let position = window.pageYOffset
    if (position > 50)
      this.fadeStyle = "fade-in"
    else
      this.fadeStyle = "fade-out"
  }

  slideOutMenu() {
    this.isBurgerMenuOpened = true
    this.slideStyle = "slide-in"
  }
  slideInMenu() {
    this.isBurgerMenuOpened = false
    this.slideStyle = ""
  }

}

@Directive({
  selector: '[clickOutside]'
})
export class HighlightDirective {

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(
    private _elementRef: ElementRef
  ) { }

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }
}
