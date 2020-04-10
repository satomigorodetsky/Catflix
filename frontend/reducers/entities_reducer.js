import { combineReducers } from "redux";
import usersReducer from "../reducers/users_reducer";
import VideosReducer from "./videos_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: VideosReducer
});

export default entitiesReducer;