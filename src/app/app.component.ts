/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/17/23
 * Description: app component for nodebucket application
 */

// imports statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- This router-outlet displays the content of the BaseLayout or AuthLayout components -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
