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
  user: Member;
  createdAt: string;
};

export type CommentPayload = Omit<
  Comment,
  "id" | "task_id" | "user" | "createdAt"
>;

export enum CommentListAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentActions =
  | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
  | {
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS;
      payload: Comment[];
    }
  | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
  | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
  | {
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE;
      payload: string;
    };

export type CommentDispatch = React.Dispatch<CommentActions>;
