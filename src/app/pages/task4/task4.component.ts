import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  standalone: true,
  imports: [MaterialModule],
  styleUrls: ['./task4.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Task4Component {}
