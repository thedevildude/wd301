import { Reducer } from "react";
import { CommentActions, CommentListAvailableAction, CommentListState } from "./types";

export const initialState: CommentListState = {
    commentData: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}