import fond_producteurs from "../assets/fond_producteurs.png";
function HeroProductors() {
  return (
    <div
      style={{ backgroundImage: `url(${fond_producteurs})` }}
      className="flex flex-col bg-no-repeat bg-cover justify-center items-center w-full  "
    >
      <div className="pt-[70px] backdrop-opacity-90 backdrop-invert-0 w-full bg-[#166534]/60 ">
        <div className="flex flex-col items-center py-[50px] ">
          <h1 className="text-[30px] sm:text-[40px] font-bold text-white text-center leading-[40px]">
            Trouvez un producteur agropastoral
          </h1>
          <p className="text-white text-[18px] sm:text-[20px] leading-[25px] font-bold w-[80%] sm:w-1/2 text-center py-5">
            Affinez votre recherche en entrant soit le nom du producteur, la
            catégorie du produit ou le nom du produit recherché.
          </p>
          <div className="w-[80%] sm:w-1/2 flex flex-row items-center justify-center rounded-lg ring-2 ring-gray-300">
            <div className="w-[200px] bg-white h-10 rounded-l-lg text-center flex items-center justify-center border-r border-gray-400">
              catégories
            </div>
            <input
              type="text"
              placeholder="Oeufs, poulets de chair, haricot,.."
              className=" h-10 focus:outline-none w-full p-2 text-gray-600 font-bold"
            />
            <div className="flex items-center justify-center bg-white h-10 rounded-r-lg">
              <span className="material-icons pr-2 ">search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroProductors;
