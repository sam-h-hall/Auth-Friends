import React from "react";
import { Card, Button } from "@material-ui/core";
import { FriendsForm } from "./FriendsForm";

export const FriendsList = () => {
  const friends = [
    { name: "Bob Smith", age: 25, email: "bob@email.com" },
    { name: "John Roberts", age: 21, email: "john@email.com" },
  ];

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

      <FriendsForm />
    </div>
  );
};
