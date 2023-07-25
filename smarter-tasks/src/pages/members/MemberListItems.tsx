import React from "react";
import { useMembersDispatch, useMembersState } from "../../context/members/context";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteMember } from "../../context/members/actions";

export default function ProjectListItems() {
  const dispatchMembers = useMembersDispatch();

  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const handleDelete = async (memberId: number) => {
    const response = await deleteMember(dispatchMembers, memberId);
    if (response.ok) {
      console.log("deleted");
    } else {
      console.log("error");
    }
  }

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Name: {member.name}
            </h5>
            <p className="mb-2 text-l font-medium tracking-tight text-gray-900 dark:text-white">
              Email: {member.email}
            </p>
          </div>
          <button onClick={() => handleDelete(member.id)}>
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      ))}
    </>
  );
}
