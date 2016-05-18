import {Component} from '@angular/core';
import {MdBottomNav, MdNavItem} from '../../components/bottom-nav/bottom-nav';


@Component({
    selector: 'bottom-nav-demo',
    templateUrl: 'demo-app/bottom-nav/bottom-nav-demo.html',
    styleUrls: ['demo-app/bottom-nav/bottom-nav-demo.css'],
    directives: [MdBottomNav, MdNavItem],
})
export class BottomNavDemo {
}
