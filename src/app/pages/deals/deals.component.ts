import {Component, inject} from '@angular/core';
import {TenderType} from "../../features/deals/enums/tender-type";
import {MenuList} from "../../shared/features/ui/dropdown-button/interfaces/menu-list";
import {DealsService} from "../../services/deals.service";
import {ActivatedRoute, Router} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map, take} from "rxjs";
import {DealsTableComponent} from "../../features/deals/components/deals-table/deals-table.component";
import {DropdownButtonComponent} from "../../shared/features/ui/dropdown-button/dropdown-button.component";

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [
    DealsTableComponent,
    DropdownButtonComponent
  ],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  private readonly _dealService = inject(DealsService);
  private readonly _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  readonly pageTitle = toSignal(
    this._activatedRoute.data.pipe(map(data => data['title']))
  );

  isLoading = this._dealService.isLoading;

  menuList: MenuList[] = [
    {
      id: '1',
      label: 'Electricity',
      route: '/',
      callback: () => this.create(TenderType.electricity)
    },
    {
      id: '2',
      label: 'Gas',
      route: '/',
      callback: () => this.create(TenderType.gas)
    },
  ];

  private create(type: TenderType) {
    // this can be more declarative if the dropdown outputed an event which emitts the ID
    // of the selected menu item. We could then trigger a stream using Subjects which fires
    // the create deal api.
    this._dealService.createDeal(type).pipe(take(1)).subscribe((res) => this._router.navigate([`/tasks/deals/${res.id}`]));
  }
}
