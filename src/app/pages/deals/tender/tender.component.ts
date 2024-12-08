import {Component, computed, inject} from '@angular/core';
import {BreadcrumbComponent} from "../../../shared/features/ui/breadcrumb/breadcrumb.component";
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {TENDER_CARDS} from "../../../features/tender/data/fake-data";
import {TenderStepComponent} from "../../../features/tender/components/tender-step/tender-step.component";
import {TenderStep} from "../../../features/tender/interfaces/tender-steps";

@Component({
  selector: 'app-tender',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TenderStepComponent
  ],
  templateUrl: './tender.component.html',
  styleUrl: './tender.component.scss'
})
export class TenderComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  readonly pageTitle = toSignal(
    this._activatedRoute.data.pipe(map(data => data['title']))
  );
  private readonly tenderId: string | null = '';
  public breadcrumbs = [{
    label: 'My Deals',
    route: '/tasks/deals'
  }, {
    label: 'New Tender',
    route: '/tender/' + this.tenderId
  }];

  steps: TenderStep[] = TENDER_CARDS;

  readonly currentTender = toSignal(this._activatedRoute.paramMap.pipe(map(params => {
    const tenderId = params.get('id');
    const dealIds = JSON.parse(localStorage.getItem('dealIds') || '[]');
    return dealIds.find((deal: { id: string }) => deal.id === tenderId);
  })));

  readonly tenderType = computed(() => {
    return this.currentTender().type;
  });
}
