import React, { useEffect, useState } from "react";
import { Card, Button } from "@material-ui/core";
import { FriendsForm } from "./FriendsForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { friendCardStyles } from "../styles/friendCardStyles";

export const FriendsList = () => {
  const classes = friendCardStyles();
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
    <div className={classes.cardContainer}>
      {friends.map((friend) => (
        <Card className={classes.root}>
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
