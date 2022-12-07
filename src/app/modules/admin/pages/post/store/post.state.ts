import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Post, CreatePostDto, UpdatePostDto } from '../entities';

export interface PostState {
	create: {
		createPostDto: CreatePostDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Post> | null;
	};
	findAll: {
		response: Response<Post[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Post> | null;
		id: string | null;
	};
	update: {
		updatePostDto: UpdatePostDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Post> | null;
	};
}

export const postInitialState: PostState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createPostDto: null,
		exception: null,
		isLoading: false,
		response: null
	},
	findOne: {
		exception: null,
		isLoading: false,
		response: null,
		id: null
	},
	update: {
		updatePostDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
