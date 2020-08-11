import React, { useEffect, useState } from "react";
import { Card, Button } from "@material-ui/core";
import { FriendsForm } from "./FriendsForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <Card>
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <Button variant="contained" color="secondary">
            X
          </Button>
        </Card>
      ))}
      {/* would like to put this in a drawer that slides out from the right side to add a friend */}
      <FriendsForm friends={friends} />
    </div>
  );
};
