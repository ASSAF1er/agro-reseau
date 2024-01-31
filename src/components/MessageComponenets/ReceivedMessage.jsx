import { useRef, useState } from 'react'

function ReceivedMessage({ msg, date }) {
    const answer = msg
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(800)
    const handledisplay = () => {
        if (answer.length >= index + 800) {
            setIndex(index + 800)
        } else {
            setIndex(answer.length)
        }
    }

    return (
        <div className=" flex w-full ">
            {' '}
            <div className="relative rounded-xl rounded-tl-[0px] z-[100] p-3 !pb-4 !bg-white my-1 text-gray-700 min-w-[90px] max-w-[80%] sm:max-w-[50%] shadow-md">
                {answer?.slice(0, index)}
                {answer?.length > index && (
                    <span onClick={handledisplay} className="text-[#006400] cursor-pointer">
                        ...voir plus
                    </span>
                )}
                <span className="absolute bottom-[0px] right-2 text-gray-400 text-[13px] text-nowrap ">{date}</span>
            </div>
        </div>
    )
}

export default ReceivedMessage
