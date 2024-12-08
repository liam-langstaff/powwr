import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import {Status} from "./enums/status";

@Component({
  selector: 'ui-status-tag',
  standalone: true,
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './status-tag.component.html',
  styleUrl: './status-tag.component.scss'
})
export class StatusTagComponent {
  @Input()
  public status: Status = Status.pending;
}
