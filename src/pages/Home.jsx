import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";

function Home() {
  return (
    <div className="flex flex-col w-screen  overflow-hidden ">
      <section className=" flex  h-screen overflow-x-hidden ">
        <Navbar />
        <Hero />
      </section>

      <Categories />
      <RecentPosts />
    </div>
  );
}

export default Home;
