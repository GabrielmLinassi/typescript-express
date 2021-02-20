import React, { useCallback, useEffect, useState } from "react";
import api from "./../services/api";
import User from "./User";

interface IUser {
  name: string;
  email?: string;
}

function Users() {
  const { users } = useUsers();

  return (
    <>
      {users.map((user, idx) => (
        <User key={user.email || idx} user={user} />
      ))}
    </>
  );
}

function useUsers() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getAllUsers = useCallback(async () => {
    const res = await api.get<IUser[]>("/users");
    setUsers(res.data);
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return { users };
}

export default Users;
