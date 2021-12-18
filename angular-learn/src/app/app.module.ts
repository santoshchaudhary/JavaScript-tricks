import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components-interaction/child/child.component';
import { ParentComponent } from './components-interaction/parent/parent.component';
import { BindingComponent } from './components-interaction/binding/binding.component';
import { ParentAComponent } from './components-interaction/parent-a/parent-a.component';
import { ChildAComponent } from './components-interaction/child-a/child-a.component';
import { ChildBComponent } from './components-interaction/child-b/child-b.component';
import { ParentBComponent } from './components-interaction/parent-b/parent-b.component';
import { ParentCComponent } from './components-interaction/parent-c/parent-c.component';
import { ChildCComponent } from './components-interaction/child-c/child-c.component';
import { ChildDComponent } from './components-interaction/child-d/child-d.component';
import { ParentDComponent } from './components-interaction/parent-d/parent-d.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    BindingComponent,
    ParentAComponent,
    ChildAComponent,
    ChildBComponent,
    ParentBComponent,
    ParentCComponent,
    ChildCComponent,
    ChildDComponent,
    ParentDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
