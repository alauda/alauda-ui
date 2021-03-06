import { TabComponent, TabContextService } from '@alauda/ui';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line component-selector
  selector: 'tabs-active-test',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveTestComponent implements OnInit, OnDestroy {
  private readonly destroy$$ = new Subject<void>();

  constructor(
    // it is only used to get `textLabel` for storybook demo
    private readonly tabComponent: TabComponent,
    private readonly tabContext: TabContextService,
  ) {}

  ngOnInit() {
    this.tabContext.active$
      .pipe(takeUntil(this.destroy$$))
      .subscribe(active => {
        console.log(this.tabComponent.textLabel, active);
      });
  }

  ngOnDestroy() {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
