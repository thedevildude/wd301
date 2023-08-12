import { Member } from "../members/reducer";

export interface CommentListState {
  commentData: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type Comment = {
  id: number;
  description: string;
  task_id: number;
  owner: number;
  User: Member;
  createdAt: string;
};

export type CommentPayload = Omit<
  Comment,
  "id" | "task_id" | "User" | "createdAt"
>;

export enum CommentListActionTypes {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentListActions =
  | { type: CommentListActionTypes.FETCH_COMMENTS_REQUEST }
  | {
      type: CommentListActionTypes.FETCH_COMMENTS_SUCCESS;
      payload: Comment[];
    }
  | { type: CommentListActionTypes.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentListActionTypes.CREATE_COMMENT_REQUEST }
  | { type: CommentListActionTypes.CREATE_COMMENT_SUCCESS }
  | {
      type: CommentListActionTypes.CREATE_COMMENT_FAILURE;
      payload: string;
    };

export type CommentDispatch = React.Dispatch<CommentListActions>;
