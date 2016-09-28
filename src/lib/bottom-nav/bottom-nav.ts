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

@NgModule({
  exports: [MdBottomNav],
  declarations: [MdBottomNav],
})
export class MdBottomNavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdBottomNavModule,
      providers: []
    };
  }
}