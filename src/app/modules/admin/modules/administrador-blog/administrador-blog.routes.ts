import { Routes } from '@angular/router';

export const AdministradorBlogRoutes: Routes = [
	{
		path: 'category',
		loadChildren: () =>
			import('../../pages/category/category.module').then((m) => m.CategoryModule)
	},
	{
		path: 'post',
		loadChildren: () => import('../../pages/post/post.module').then((m) => m.PostModule)
	}
];
