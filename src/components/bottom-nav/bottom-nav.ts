import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';


@Component({
  selector: 'md-bottom-nav',
  templateUrl: './components/bottom-nav/bottom-nav.html',
  styleUrls: ['./components/bottom-nav/bottom-nav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdBottomNav {
  constructor() { }
}

@Component({
  selector: 'a[md-nav-item]',
  templateUrl: './components/bottom-nav/bottom-nav.html',
  styleUrls: ['./components/bottom-nav/bottom-nav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdNavItem {
  constructor() {}
}