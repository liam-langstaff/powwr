import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatCard} from "@angular/material/card";
import {StatusTagComponent} from "../../../../shared/features/ui/status-pill/status-tag.component";
import {TenderStep} from "../../interfaces/tender-steps";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-tender-step',
  imports: [
    MatIcon,
    MatCard,
    StatusTagComponent,
    NgClass
  ],
  templateUrl: './tender-step.component.html',
  styleUrl: './tender-step.component.scss',
  standalone: true
})
export class TenderStepComponent {
  @Input() public step: TenderStep | undefined;
}
