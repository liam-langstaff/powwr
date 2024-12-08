import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  standalone: true,
  imports: [MaterialModule],
  styleUrls: ['./task3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Task3Component {}
