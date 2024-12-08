import {Component, EventEmitter, input, Input, OnInit, Output} from '@angular/core';
import { BrandingComponent } from './branding.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import {AsyncPipe} from "@angular/common";
import {map, scan, startWith} from "rxjs";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BrandingComponent, TablerIconsModule, MaterialModule, AsyncPipe],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor() {}
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  isCollapsed = input(false)
  ngOnInit(): void {}
}
