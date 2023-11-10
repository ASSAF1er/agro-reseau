import { categories } from "../utils/categories_list";
function Categories() {
  return (
    <div className="py-[50px] ">
      <p className="text-center text-[50px] text-[#333333] font-bold py-[20px]">
        Les Catégories
      </p>
      <div className=" w-screen flex flex-row flex-wrap justify-center items-center gap-[20px] md:flex-row my-[50px]  object-cover ">
        {categories.map((cat) => (
          <div className=" z-1 relative w-[220px] shadow-md h-[180px] rounded-[10px]  bg-gray-300 overflow-hidden ">
            <img
              src={cat.photo}
              alt=""
              loading="lazy"
              className="  object-cover rounded-[10px] w-[220px] ease-in-out h-[180px] duration-1000 hover:scale-[1.08]"
            />
            <div className="absolute bottom-0 w-[inherit] bg-gradient-to-t from-[#166534] from-[30%] left-0 pl-2 pb-1 pt-5 rounded-b-[10px]">
              <p className="text-gray-200 font-bold"> {cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
