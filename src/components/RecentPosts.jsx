import Post from "../components/Post";
function RecentPost() {
  return (
    <div>
      <p className="text-center text-[50px] text-[#333333] font-bold py-[20px]">
        Annonces récentes
      </p>
      <div className="flex flex-row justify-center it">
        <Post />
      </div>
    </div>
  );
}

export default RecentPost;
