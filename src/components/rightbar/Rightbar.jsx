import Online from "../online/Online";
import { Users } from "../../dumnyData"
import "./rightbar.css";
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/2023-03/IMG_20220831_081511.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Natiora fitia</b> <b> and sarobidy</b> birthday
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/2023-03/IMG_20220831_081511.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

