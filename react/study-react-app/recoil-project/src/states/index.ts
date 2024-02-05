import { atom, selector } from "recoil";
import axios from "axios";

const countState = atom({
  key: "countState",
  default: 0,
});

const textState = atom({
  key: "textState",
  default: "test",
});
const textCountState = selector({
  key: "textCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
const textSelector = selector({
  key: "textSelector",
  get: ({ get }) => {
    const text = get(textState);
    console.log(text);

    return `여기는 textState의 값을 보여주는 text: ${text}`;
  },
});

const _fetchUserListTrigger = atom({
  key: "_fetchUserListTrigger",
  default: 0,
});

const fetchUserList = selector({
  key: "fetchUserList",
  get: async ({ get }) => {
    get(_fetchUserListTrigger);
    try {
      const response = await axios({ url: "http://localhost:9999/api/test" });
      return response.data.data;
    } catch (e) {
      console.log(e);
      throw new Error("Error!");
    }
  },
  set: ({ set }) => {
    set(_fetchUserListTrigger, (value) => value + 1);
  },
});

export { countState, textState, textCountState, textSelector, fetchUserList };
