import { tournamentData } from "./Data/tournamentDB"
import notificationimg from "./photo/NOTIFICATION.png";
import profile from "./photo/profil.png";
function Header() {
    return (
        <header className="Header">
                <div className="diiv">
                <h1>good Morning <br />samuel walker !</h1>
                <div className="images">
                    <img src={notificationimg} />
                    {/* <img src={profile} /> */}
                    </div>

</div>
                    <div className="search">
    <input className="input" type="text" placeholder="search.." />
</div>
        </header>
        
    );

}
export default Header;