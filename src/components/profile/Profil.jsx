import Feed from "../feed/Feed"
import Topbar from "../topbar/Topbar"
import Sidebar from "../sidebar/Sidebar"
import "./profil.css"

export default function Profil() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRighTop">kkkk</div>
                    <div className="profileRightBottom">
                        <Feed />
                    </div>
                </div>
            </div>
        </>
    )
}
