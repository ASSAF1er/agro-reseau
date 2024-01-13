import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ChatBotContext } from '../../utils/ChatBotContext'
import axios from 'axios'
function BotInputZone() {
    const [question, setQuestion] = useState('')
    const [request, setRequest] = useState('')
    const { messagesList, setMessagesList, setThemeList, themeList } = useContext(ChatBotContext)

    useEffect(() => {
        const date_hour = new Date().getHours().toString().padStart(2, '0')
        const date_min = new Date().getMinutes().toString().padStart(2, '0')
        setRequest({
            ...request,
            emitId: 1,
            content: question,
            date: `${date_hour}:${date_min}`
        })
    }, [question])
    const askOpenAI = async () => {
        await axios
            .post('http://localhost:9000/agrobot', request)
            .then((res) => {
                const date_hour = new Date().getHours().toString().padStart(2, '0')
                const date_min = new Date().getMinutes().toString().padStart(2, '0')

                setMessagesList([
                    ...messagesList,
                    request,
                    { emitId: 2, content: res.data.answer, date: `${date_hour}:${date_min}` }
                ])
            })
            .catch((err) => {
                setMessagesList([...messagesList, request, { emitId: 2, type: 'error' }])
            })

        await axios
            .post('http://localhost:9000/agrobot/theme', request)
            .then((res) => {
                const date_hour = new Date().getHours().toString().padStart(2, '0')
                const date_min = new Date().getMinutes().toString().padStart(2, '0')

                setThemeList([...themeList, { content: res.data.answer, date: `${date_hour}:${date_min}` }])
            })
            .catch((err) => {})
    }
    const handleClick = async (e) => {
        e.preventDefault()
        setMessagesList([...messagesList, request])
        setQuestion('')
        await askOpenAI()
    }
    return (
        <form>
            <div className="absolute bottom-2 flex w-full items-center justify-center gap-3 px-5">
                <div className="px-5 rounded-full border border-[#006400] py-1 w-full bg-white shadow-sm">
                    <input
                        type="text"
                        placeholder="posez-votre question..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
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

export default BotInputZone
