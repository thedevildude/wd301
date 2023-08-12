import React, { useEffect, useState } from "react";
import {
  useCommentDispatch,
  useCommentState,
} from "../../context/comment/context";
import { addComment, refreshComments } from "../../context/comment/actions";

interface CommentsProps {
  taskID: string;
  projectID: string;
}

const Comments = (props: CommentsProps) => {
  const commentDispatch = useCommentDispatch();
  const commentListState = useCommentState();
  const comments = commentListState.commentData;
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    const userData = localStorage.getItem("userData") || "";
    const user = JSON.parse(userData);
    addComment(commentDispatch, props.projectID, props.taskID, {
      description: newComment,
      owner: user.id,
    });
    setNewComment("");
  };

  useEffect(() => {
    refreshComments(commentDispatch, props.projectID, props.taskID);
  }, [commentDispatch, props.projectID, props.taskID]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900">Comments</h3>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a comment..."
          id="commentBox"
          value={newComment}
          onChange={handleCommentChange}
          className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
        <button
          onClick={handleAddComment}
          id="addCommentBtn"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add Comment
        </button>
        {comments.map((item) => {
          const time = item.createdAt.split("T");
          const timestamp = `${time[0]} - ${time[1].slice(0, 8)}`;
          return (
            <div
              key={item.id}
              className="comment mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 font-medium">
                  {item.User.name}
                </span>
                <span className="text-xs text-gray-500">{timestamp}</span>
              </div>
              <p className="text-gray-800">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
