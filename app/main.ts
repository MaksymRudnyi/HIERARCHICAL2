import { bootstrap }           from '@angular/platform-browser-dynamic';

import { HeroesListComponent } from './heroes-list.component';
import { HeroesService }       from './heroes.service';
import { RestoreService } from './restore.service';

bootstrap(HeroesListComponent, [HeroesService, RestoreService]);

/* Documentation artifact below
 // Don't do this!
 bootstrap(HeroesListComponent, [HeroesService, RestoreService])
 */


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */