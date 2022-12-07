import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class CategoryAdapter {
	constructor(
		public readonly cat_id: string,
		public readonly cat_nombre: string,
		public readonly cat_estado: boolean,
		public readonly cat_creado: string
	) {}
}

export type CreateCategoryDto = Omit<CategoryAdapter, 'cat_id' | 'cat_creado' | 'cat_estado'>;

export interface UpdateCategoryDto extends Partial<CategoryAdapter> {}

@Injectable()
export class Category implements Adapter<CategoryAdapter> {
	adapter(categoryAdapter: CategoryAdapter): CategoryAdapter {
		return new CategoryAdapter(
			categoryAdapter.cat_id,
			categoryAdapter.cat_nombre,
			categoryAdapter.cat_estado,
			categoryAdapter.cat_creado
		);
	}
}
