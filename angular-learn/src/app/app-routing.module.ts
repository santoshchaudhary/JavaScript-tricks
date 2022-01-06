import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DependecyInjectionComponent } from './dependecy-injection/dependecy-injection.component';
import { FilterComponent } from './filter/filter.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { NodisplayComponent } from './nodisplay/nodisplay.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';
import { ServicesComponent } from './services/services.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
//import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'common', component: CommonComponent },
  { path: 'dependency', component: DependecyInjectionComponent },
  { path: 'form', component: FormComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'toArray', component: ToArrayComponent },
  { path: 'customObservable', component: CustomObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'subject', component: SubjectComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NodisplayComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
