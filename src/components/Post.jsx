import coeur from '../assets/coeur.png'
import { useState } from 'react'
import classNames from 'classnames'
import image_test from '../assets/image_test.jpg'
import { Link } from 'react-router-dom'
function Post({ post }) {
    const [like, setLike] = useState(false)
    const [countLike, setCountLike] = useState(post.nbLikes ? post.nbLikes : 0)
    const comments = 0

    const handleLike = () => {
        setLike(!like)
        like ? setCountLike(countLike - 1) : setCountLike(countLike + 1)
    }

    return (
        <div
            id="post"
            className={classNames(
                'animate-reveal',
                ' bg-white border-gray-300  border sm:rounded-md w-full shadow-sm  py-3'
            )}
        >
            <div className="flex flex-row gap-[10px] items-center px-3">
                <div className="rounded-full h-9 w-9 bg-black">ph</div>
                <div className=" flex flex-col">
                    <div className="font-bold text-[#006400] flex flex-row items-center cursor-pointer ">
                        <Link to={`/profile/${post.name}`} className="hover:underline">
                            {post.name}
                        </Link>
                        {post.verified && <span className="material-icons pl-2 text-green-500 ">verified</span>}
                    </div>
                    <div className="text-gray-500 text-[14px] "> {post.date}</div>
                </div>
            </div>
            <div className="py-3 px-3">{post.description}</div>{' '}
            <div>
                {post.video && <video src={post.video} controls />}
                {!post.video && (
                    <img
                        src={post.image ? post.image : image_test}
                        alt=""
                        loading="lazy"
                        className="w-full object-cover max-h-[400px] "
                    />
                )}
            </div>
            <div className="flex flex-row justify-between px-3 space text-[15px]  mt-5 border-t pt-2 border-gray-300">
                <div
                    className={classNames(like ? 'text-[#006400]' : '', 'flex items-center cursor-pointer ')}
                    onClick={handleLike}
                >
                    j'aime{'  '}
                    <img src={coeur} alt="" className={classNames(like ? 'hidden' : '', 'w-[21px] mx-1')} />
                    <span className={classNames(like ? '' : 'hidden', 'material-icons text-[#006400] ml-1')}>
                        favorite
                    </span>
                    <span
                        className={classNames(
                            like ? ' ' : ' ',
                            'rounded-full h-8 w-8 flex items-center justify-center text-[13px] bg-gray-200 text-[#006400] ml-1'
                        )}
                    >
                        {countLike}
                    </span>
                </div>
                <div className="cursor-pointer flex flex-row items-center justify-center">
                    {/* <span className="material-icons">comment</span>*/} commenter{' '}
                    <span
                        className={classNames(
                            'rounded-full h-8 w-8 flex items-center justify-center text-[13px] bg-gray-200 text-[#006400] ml-1'
                        )}
                    >
                        {comments}
                    </span>
                </div>
                <div className="cursor-pointer bg-[#006400] text-white px-3 sm:px-7 py-2 rounded-md ">
                    <Link to={`/1/messages/${post.name}`}>contacter</Link>
                </div>
            </div>
        </div>
    )
}

export default Post
