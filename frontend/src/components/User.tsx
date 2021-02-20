import React from "react";

interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <>
      <p>
        <strong>Username: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email || "Doesn't have an email"}
      </p>
    </>
  );
};

export default User;
