import { ChangeEvent } from "react";
import userStore from "../store/UserStore.ts";

export default function UserNameInput() {
  const firstName = userStore((state) => state.firstName);
  const lastName = userStore((state) => state.lastName);
  const setFirstName = userStore((state) => state.setFirstName);
  const setLastName = userStore((state) => state.setLastName);
  const onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type={"text"}
          value={firstName}
          onChange={onChangeFirstName}
          placeholder={"first name"}
        />
        <input
          type={"text"}
          value={lastName}
          onChange={onChangeLastName}
          placeholder={"last name"}
        />
      </div>
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );
}
