import { useState } from 'react'
import classNames from 'classnames'
function RankingProfile({}) {
    const stars = [
        { id: 1, clicked: false, val: 1 },
        { id: 2, val: 2 },
        { id: 3, val: 3 },
        { id: 4, val: 4 },
        { id: 5, val: 5 }
    ]

    const [newRanking, setNewRanking] = useState(0)
    return (
        <div className="w-[25%]  rounded-[20px] bg-white shadow-sm p-[20px] ">
            <p className="font-bold text-[18px] text-center ">Noter ce producteur </p>
            <div className="flex items-center justify-center text-[#006400] text-center mt-3">
                {stars.slice(0, newRanking).map((item) => (
                    <Star
                        key={item.id}
                        newRanking={newRanking}
                        setNewRanking={setNewRanking}
                        clicked={true}
                        val={item.val}
                    />
                ))}{' '}
                {stars.slice(newRanking, 5).map((item) => (
                    <Star
                        key={item.id}
                        newRanking={newRanking}
                        setNewRanking={setNewRanking}
                        clicked={false}
                        val={item.val}
                    />
                ))}
                <span className="pl-2 font-[600] text-[18px] ">{newRanking}</span>
            </div>
            <p className="font-bold text-[18px] text-center mt-[30px] ">Notes obtenues </p>
            <p className="text-center font-bold text-[#006400] text-[30px] ">4,2</p>
            <p className="text-[#166534] text-center">
                <span className="material-icons  ">grade</span>
                <span className="material-icons  ">grade</span>
                <span className="material-icons  ">grade</span>
                <span className="material-icons  ">star_half</span>
                <span className="material-icons-outlined">grade</span>
            </p>
            <p className="text-center text-gray-600">235 avis</p>
        </div>
    )
}

export default RankingProfile

const Star = ({ newRanking, setNewRanking, clicked, val }) => {
    const [bold, setBold] = useState(clicked)
    const handlelick = () => {
        newRanking === val ? setNewRanking(val - 1) : setNewRanking(val)
    }
    return (
        <>
            <span
                onClick={handlelick}
                className={classNames(
                    `material-icons${bold ? '' : '-outlined'}`,
                    ' text-[30px] font-[100] cursor-pointer hover:scale-[1.1]  '
                )}
            >
                grade
            </span>
            {/* <span className="material-icons  ">grade</span> */}
        </>
    )
}
