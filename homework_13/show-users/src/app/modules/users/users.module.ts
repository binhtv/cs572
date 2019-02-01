import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { UserGuard } from './user-guard.service';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		ListComponent,
		DetailComponent,
	],
	imports: [CommonModule, RouterModule.forChild([
		{ path: '', component: ListComponent },
		{
			path: '', component: ListComponent, children: [
				{ path: ':id', component: DetailComponent, canActivate: [UserGuard] }
			]
		},
	])],
	providers: [UserGuard],
	bootstrap: [ListComponent]
})
export class UsersModule { }
