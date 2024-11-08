import { cache } from "react";
import styles from "./postUser.module.css";

const getData = async (userId: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }
  return res.json();
};

const PostUser = async ({ userId }: any) => {
  const user = await getData(userId);
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.userName}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
