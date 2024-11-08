import PostUser from "@/components/postUse/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }: any) => {
  const { slug } = params;

  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/post_1.jpg" alt="post_1" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/post_1.jpg"
            alt="post_1"
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading!...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
