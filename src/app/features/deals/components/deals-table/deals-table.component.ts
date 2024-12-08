import {Component, EventEmitter, inject, signal, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {DealsService} from "../../../../services/deals.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {map, Subject, switchMap, tap} from "rxjs";
import {Params} from "@angular/router";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {Deal} from "../../interfaces/deal";
import {DatePipe} from "@angular/common";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-deals-table',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    DatePipe,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatSortModule,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './deals-table.component.html',
  styleUrl: './deals-table.component.scss'
})
export class DealsTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  private readonly _dealService = inject(DealsService);

  private readonly tableData$$ = new Subject<Params>();
  private readonly tableData$ =
    this.tableData$$.pipe(
      tap(() => this.isLoading.set(true)),
      switchMap((params) => this._dealService.getTableData(params)),
      map((deals) => new MatTableDataSource(deals)),
      tap((table) => {
        table.paginator = this.paginator;
        table.sort = this.sort;
        this.isLoading.set(false);
      }));

  readonly tableData = toSignal(this.tableData$, { initialValue: new MatTableDataSource<Deal>([]) });
  isLoading = signal(false);
  displayedColumns: string[] = ['created', 'dueDate', 'status', 'customer', 'meters', 'quotes', 'updates'];
  placeholderData = Array(10);

  constructor() {
    this.tableData$$.next(
      {
        pageIndex: 0,
        pageSize: 10,
        sortDirection: 'asc',
        sortField: 'created'
      });
  }
}
