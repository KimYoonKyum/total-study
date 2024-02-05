import React from "react";
import UserList from "./UserList.tsx";

export default function UserListWrap() {
  return (
    <React.Suspense fallback={<div>loading.....</div>}>
      <UserList />
    </React.Suspense>
  );
}
