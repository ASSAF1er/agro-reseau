function EmitedMessage({ msg, date }) {
    return (
        <div className=" flex w-full justify-end my-1">
            <div className="relative rounded-xl rounded-tr-[0px] z-[10] p-3 !pb-4  bg-green-100 text-gray-700 min-w-[90px] max-w-[80%] sm:max-w-[50%] shadow-md">
                {msg}
                <span className="absolute bottom-[0px] right-2 text-gray-400 text-[13px] text-nowrap ">{date}</span>
            </div>
        </div>
    )
}

export default EmitedMessage
