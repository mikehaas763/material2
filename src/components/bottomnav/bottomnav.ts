import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';


@Component({
  selector: 'md-bottomnav',
  templateUrl: './components/bottomnav/bottomnav.html',
  styleUrls: ['./components/bottomnav/bottomnav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdBottomnav {
  constructor() { }
}
