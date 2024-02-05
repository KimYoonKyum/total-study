import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { fetchUserList } from "../states";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

export default function UserList() {
  const [userList, setUserList] = useRecoilState(fetchUserList);
  const refresh = useRecoilRefresher_UNSTABLE(fetchUserList);

  const renderUserList = () => {
    if (!userList || userList.length < 1) {
      return <div>No Data</div>;
    }
    return userList.map((user: { id: number; name: string }) => {
      return (
        <div
          key={user.id}
          style={{
            border: "1px solid grey",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar style={{ marginRight: "10px" }}>{user.id}</Avatar>
          <Typography>{user.name}</Typography>
        </div>
      );
    });
  };

  const onRefreshTrigger = () => {
    setUserList(new Date().getTime());
  };

  const onRefreshUseRecoilRefresher = () => {
    refresh();
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          style={{ marginBottom: "10px" }}
          onClick={onRefreshTrigger}
        >
          <CachedIcon style={{ marginRight: "5px" }} />
          <Typography>Refresh by trigger</Typography>
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ marginBottom: "10px" }}
          onClick={onRefreshUseRecoilRefresher}
        >
          <CachedIcon style={{ marginRight: "5px" }} />
          <Typography>Refresh by useRecoilRefresher_UNSTABLE</Typography>
        </Button>
      </div>
      <Stack spacing={2}>{renderUserList()}</Stack>
    </div>
  );
}
