import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-breadcrumb',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, RouterLink, MatIconButton],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input()
  public breadcrumbs = [{ label: 'Home', route: '/' }, { label: 'Test', route: '/' }];
}
