import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';


@Component({
  selector: 'md-bottom-nav',
  template: '<ng-content></ng-content>',
  styleUrls: ['./components/bottom-nav/bottom-nav.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdBottomNav {
  constructor() { }
}

@Component({
  selector: 'md-bottom-nav > a[md-nav-item]', // todo research proper selector
  template: '<ng-content></ng-content>',
  styleUrls: ['./components/bottom-nav/bottom-nav.css'],
  encapsulation: ViewEncapsulation.None,  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdNavItem {
  constructor() {}
}