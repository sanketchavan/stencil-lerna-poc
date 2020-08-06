import { NgModule } from '@angular/core';
import { MyComponent } from './component-library-angular-library.component';
import { applyPolyfills, defineCustomElements } from 'component-library/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

@NgModule({
  declarations: [MyComponent],
  imports: [
  ],
  exports: [MyComponent]
})
export class ComponentLibraryAngularLibraryModule { }
