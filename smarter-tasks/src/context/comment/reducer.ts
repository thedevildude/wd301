import { Reducer } from "react";
import {
  CommentListActions,
  CommentListActionTypes,
  CommentListState,
} from "./types";

export const initialState: CommentListState = {
  commentData: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentListActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CommentListActionTypes.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentListActionTypes.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, commentData: action.payload };
    case CommentListActionTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentListActionTypes.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListActionTypes.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListActionTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
