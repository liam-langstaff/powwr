import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {MenuList} from "./interfaces/menu-list";

@Component({
  selector: 'ui-dropdown-button',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressSpinner],
  templateUrl: './dropdown-button.component.html',
  styleUrl: './dropdown-button.component.scss'
})
export class DropdownButtonComponent {
  @Input()
  public menuList: MenuList[] = [];
  @Input()
  public isLoading: boolean = false;
}
