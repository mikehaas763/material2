import {
  NgModule,
  ModuleWithProviders,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'md-bottom-nav',
  templateUrl: 'bottom-nav.html',
  styleUrls: ['bottom-nav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MdBottomNav { }

@Component({
  moduleId: module.id,
  selector: 'md-bottom-nav-item',
  templateUrl: 'bottom-nav-item.html',
  styleUrls: ['bottom-nav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MdBottomNavItem { }

@NgModule({
  exports: [MdBottomNav, MdBottomNavItem],
  declarations: [MdBottomNav, MdBottomNavItem],
})
export class MdBottomNavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdBottomNavModule,
      providers: []
    };
  }
}