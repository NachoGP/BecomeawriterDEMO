import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllstorieskidsComponent } from './allstorieskids/allstorieskids.component';
import { ReadstorykidsComponent } from './readstorykids/readstorykids.component';
import { ProposalkidsComponent } from './proposalkids/proposalkids.component';
import { NewprofilekidsComponent } from './newprofilekids/newprofilekids.component';
import { SelecttimekidsComponent } from './selecttimekids/selecttimekids.component';
import { TipReadkidsComponent } from './tip-readkids/tip-readkids.component';
import { TipskidsComponent } from './tipskids/tipskids.component';
import { LogroskidsComponent } from './logroskids/logroskids.component';
import { WriteboardkidsComponent } from './writeboardkids/writeboardkids.component';
import { EditstorieskidsComponent } from './editstorieskids/editstorieskids.component';


const routes: Routes = [
        { path: 'newprofilekids/:id', component: NewprofilekidsComponent },
        { path: 'allstorieskids', component: AllstorieskidsComponent },
        { path: 'proposalkids', component: ProposalkidsComponent },
        { path: 'readstorykids/:id', component: ReadstorykidsComponent },
        { path: 'selecttimekids', component: SelecttimekidsComponent },
        { path: 'tips-readkids/:id', component: TipReadkidsComponent },
        { path: 'tipskids', component: TipskidsComponent },
        { path: 'logroskids/:id', component: LogroskidsComponent },
        { path: 'writeboardkids', component: WriteboardkidsComponent },
        { path: 'editstorykids/:id', component: EditstorieskidsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
