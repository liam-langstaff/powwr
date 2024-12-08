import {computed, Injectable, signal} from '@angular/core';
import {delay, map, Observable, of, tap} from "rxjs";
import {Params} from "@angular/router";
import {TenderType} from "../features/deals/enums/tender-type";
import {DealMetadata} from "../features/deals/interfaces/deal-metadata";
import {DEAL_DATA} from "../features/deals/data/fake-data";
import {Deal} from "../features/deals/interfaces/deal";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  private _isLoading = signal(false);
  public readonly isLoading = computed(() => {
    return this._isLoading();
  });
  public deal = null;

  getTableData(params: Params): Observable<Deal[]> {
    return of(DEAL_DATA).pipe(delay(2000));
  }

  createDeal(dealParams: TenderType): Observable<DealMetadata> {
    return of(null).pipe(
      tap(() => this._isLoading.set(true)),
      map(() => this.assignAndSetId(dealParams)),
      delay(2000),
      tap(() => this._isLoading.set(false)));
  }

  retrieveDeal(id: string): Observable<DealMetadata> {
    return of(this.getDataFromStorage(id)).pipe(
      tap(() => this._isLoading.set(true)),
      delay(2000),
      tap(() => this._isLoading.set(false)));
  }

  private assignAndSetId(dealParams: TenderType): DealMetadata {
    const dealId = uuidv4();
    const dealIds = JSON.parse(localStorage.getItem('dealIds') || '[]');
    const payload: DealMetadata = { id: dealId, type: dealParams };
    dealIds.push(payload);
    localStorage.setItem('dealIds', JSON.stringify(dealIds));
    return payload;
  }

  private getDataFromStorage(id: string): DealMetadata {
    return JSON.parse(localStorage.getItem('dealIds') || '[]').find((dealMetadata: DealMetadata) => dealMetadata.id === id);
  }
}
