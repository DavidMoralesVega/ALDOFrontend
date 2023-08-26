import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { CategoryAdapter } from '../../../category/entities/models/category.model';

export class PostAdapter {
	constructor(
		public readonly post_id: string,
		public readonly post_author: string,
		public readonly post_content: string,
		public readonly post_tittle: string,
		public readonly post_estado: boolean,
		public readonly post_creado: string,
		public readonly cat_post_id: string,
		public readonly post_fotografia: string
	) {}
}

export type CreatePostDto = Omit<PostAdapter, 'post_id' | 'post_estado' | 'post_creado'>;

export interface PostForeignAdapter extends PostAdapter {
	readonly category: CategoryAdapter;
	readonly cat_post_id: string;
}

export interface UpdatePostDto extends Partial<PostAdapter> {}

@Injectable()
export class Post implements Adapter<PostAdapter> {
	adapter(postAdapter: PostAdapter): PostAdapter {
		return new PostAdapter(
			postAdapter.post_id,
			postAdapter.post_author,
			postAdapter.post_content,
			postAdapter.post_tittle,
			postAdapter.post_estado,
			postAdapter.post_creado,
			postAdapter.cat_post_id,
			postAdapter.post_fotografia
		);
	}
}
