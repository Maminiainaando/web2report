import "./post.css"
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dumnyData";
import { useState } from "react";

export default function Post({ post }) {
    const [like, setLike] = useState(1)
    const [islike, setisLike] = useState(false)
    const likeHandler = () => {
        setLike(islike ? like - 1 : like + 1)
        setisLike(!islike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfilImg" src="/assets/2023-03/IMG_20220831_081511.jpg" alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src="/assets/2023-03/angry.png" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/2023-03/love.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/2023-03/like.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
