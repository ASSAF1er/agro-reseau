function Post() {
  return (
    <div className="border-gray-500 border rounded-md w-full">
      <div className="flex flex-row gap-[10px]">
        <div className="rounded-full h-9 w-9 bg-black">photo</div>
        <div className=" flex flex-col">
          <div className="font-bold text-[#166534]">Nom</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
