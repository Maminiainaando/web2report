import EditProfilePage from "../EditProfilePage";
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Topbar() {
    const edit = () => {
        return <EditProfilePage />
    }
    <Router>
        <div>
            <Switch>
                <Route path="/edit-profile" component={EditProfilePage} />
            </Switch>
        </div>
    </Router>
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Lamasocial</span>
                <span className="logo"><button onClick={edit}>Edit profil</button></span>
            </div>
            <div className="topbarCenter">edd
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search fo friend ,post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/2023-03/IMG_20220831_081511.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    );
}

