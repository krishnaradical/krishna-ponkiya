import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NavService } from 'src/app/_services/nav.service';
import { EHRActionRoleDetailsView } from 'src/app/_models/ehraction-role-details-view';

@Component({
  selector: 'menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./_menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: EHRActionRoleDetailsView;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router ,private route: ActivatedRoute) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.routeSubString && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.routeSubString}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: EHRActionRoleDetailsView) {
    if (!item.childrens || !item.childrens.length) {
      this.router.navigate([item.routeSubString],{ relativeTo: this.route });
      this.navService.closeNav();
    }
    if (item.childrens && item.childrens.length) {
      this.expanded = !this.expanded;
    }
  }
}

