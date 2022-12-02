import {ActionsType, PostType, ProfilePageType} from './store';

const initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It\'s, my first post?', likesCount: 11 },
		{ id: 3, message: 'Blabla', likesCount: 11 },
		{ id: 4, message: 'Dadada', likesCount: 11 }
	], newPostText: ''
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost: PostType = {
				id: 5, message: action.postText, likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = (text: string) => ({
	type: 'ADD-POST', postText: text
} as const);

export const updatePostTextActionCreator = (text: string) => ({
	type: 'UPDATE-NEW-POST-TEXT', newText: text
} as const);

export default profileReducer;