import {createSlice} from "@reduxjs/toolkit";

interface IPost {
    id: number;
    title: string;
    content: string;
    autorId?: number;
    createdDate: Date;
    lastChangedDate?: Date;
}

export interface IPostsState {
    posts: IPost[];
}

const initialState: IPostsState = {
    posts: [
        {
            id: 1,
            title: 'пример поста',
            content: 'Это содержание поста',
            createdDate: new Date()
        },
        {
            id: 2,
            title: 'пример поста',
            content: 'Это содержание поста',
            createdDate: new Date()
        },
    ],
}


export const posts = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            state.posts.splice(state.posts.indexOf(action.payload), 1);
        }
    }
})

export default posts.reducer;
