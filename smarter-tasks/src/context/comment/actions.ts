import { API_ENDPOINT } from "../../config/constants";
import { CommentDispatch, CommentListAvailableAction, CommentPayload } from "./types";

export const addComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
  comment: CommentPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: comment }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS });
    refreshComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
}

export const refreshComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to load comments");
    }
    const comments = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: comments,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};
