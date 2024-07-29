import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, The page you are looking for does not exict.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};
export default NotFound;
