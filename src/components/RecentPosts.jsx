import Post from "../components/Post";
import { posts } from "../utils/postList";
function RecentPost({ initial_index, end_index }) {
  return (
    <div className="bg-gray-200 py-5 ">
      <div className="flex flex-col gap-y-3 justify-center  items-center">
        {posts.slice(initial_index, end_index).map((singlePost) => (
          <Post post={singlePost} />
        ))}
      </div>
    </div>
  );
}

export default RecentPost;
