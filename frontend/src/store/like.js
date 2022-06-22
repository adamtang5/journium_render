import { csrfFetch } from "./csrf";

const LIKE = 'like/like';
const UNLIKE = 'like/unlike';

const newLike = (like) => ({
    type: LIKE,
    like,
});

const removeLike = (like) => ({
    type: UNLIKE,
    like,
});
