/**
 * Title: main.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/17/23
 * Description: main for nodebucket application
 */

// import
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
