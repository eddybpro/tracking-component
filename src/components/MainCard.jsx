import { Illustration } from "../assets";
import "./MainCard.css";

function MainCard() {
  return (
    <main>
      <div className="ImgBox">
        <img src={Illustration} alt="" />
      </div>
      <div className="TxtBox">
        <div className="TxtBox-BtnBox">
          <button className="TxtBox-BtnBox-NewBtn">new</button>
          <p>monograph dashboard</p>
        </div>
        <h1 className="TxtBox-Title">powerful insights into your team</h1>
        <p className="TxtBox-Para">
          project planning and time tracking for agile teams
        </p>
        <div className="TxtBox-BtnBox">
          <button className="TxtBox-BtnBox-ScheduleBtn">schedule a demo</button>
          <p>to see a preview</p>
        </div>
      </div>
    </main>
  );
}
export default MainCard;
