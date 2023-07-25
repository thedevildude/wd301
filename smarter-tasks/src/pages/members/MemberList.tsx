import React, { useEffect } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from "./MemberListItems";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, [dispatchMembers]);

  return (
    <div className="flex gap-4 flex-col mt-5">
      <MemberListItems />
    </div>
  );
};
export default MemberList;
