import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post: Post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
