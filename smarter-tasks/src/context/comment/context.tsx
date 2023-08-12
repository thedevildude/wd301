import React, {createContext, useContext, useReducer} from "react";
import {CommentListState, CommentDispatch} from "./types";
import { commentReducer, initialState } from "./reducer";

const CommentStateContext = createContext<CommentListState>(initialState);
const CommentDispatchContext = createContext<CommentDispatch>(() => null);

export const CommentProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
}

export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);