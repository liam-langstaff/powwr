import {NgClass, NgIf} from '@angular/common';
import {Component, input} from '@angular/core';
import { map } from 'rxjs';
import { CoreService } from 'src/app/services/core.service';
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <div class="branding" [class.isOpen]="!isCollapsed()">
      @if(options.theme === 'light') {
      <a href="/">
        <img src="./assets/images/logos/powwr-logo-Unbranded.svg" alt="test logo">
      </a>
      } @if(options.theme === 'dark') {
      <a href="/">
        <img
          src="./assets/images/logos/powwr-logo-Unbranded.svg"
          class="align-middle m-2"
          alt="logo"
        />
      </a>
      }
    </div>
  `,
  styles: [`
    :host {
     flex-grow: 1;
    }
  `]
})
export class BrandingComponent {
  options = this.settings.getOptions();
  isCollapsed = input(false);

  // I'm not using this due to a timeout. I have created isCollapsed
  // to add the class to control padding constraints;
  isOpen = toSignal(this.settings.notify.pipe(
    map((settings) => settings['sidenavOpened'])
  ));

  constructor(private settings: CoreService) {}
}
