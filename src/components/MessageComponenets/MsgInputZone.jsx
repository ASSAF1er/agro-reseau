import { useState } from 'react'
function MsgInputZone() {
    const [message, setMessage] = useState('')
    const handleClick = (event) => {
        event.preventDefault()
    }
    return (
        <form className="w-full">
            <div className="absolute bottom-2 flex w-full items-center justify-center gap-3 px-5">
                <div className="px-5 rounded-full border border-[#006400] py-1 w-full bg-white shadow-sm">
                    <input
                        type="text"
                        placeholder="Nouveau Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="focus:outline-none w-full h-[40px] text-[18px] text-gray-800 "
                    />
                </div>
                <button type="submit" onClick={(e) => handleClick(e)}>
                    <span className="material-icons bg-[#006400] hover:bg-[#006000] rounded-full shadow-xl text-white p-3 cursor-pointer">
                        send
                    </span>
                </button>
            </div>
        </form>
    )
}

export default MsgInputZone
