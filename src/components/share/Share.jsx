import { useState } from "react"
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
export default function Share() {
    // const post = document.querySelector(".share");
    // const postenfant = document.querySelector(".shareWrapper");
    // const poster = post.addEventListener("click", () => {
    //     post.add(postenfant);
    // })
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfilImg" src="/assets/2023-03/IMG_20220831_081511.jpg" alt="" />
                    <input placeholder="What's your mind Safak" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo/video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText"></span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
