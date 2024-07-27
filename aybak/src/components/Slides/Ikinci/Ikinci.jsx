import "./Ikinci.css";
import logo from "../../../assets/icon.png";
import paket from "../../../assets/slider/v-paket.png";

const Ikinci = () => {
  return (
    <div className="ikinci">
      <div className="ikinci-box">
        <div className="ikinci-logo">
          <img src={logo} alt="" />
        </div>
        <h2>
          Her Tanede <span>Kalite</span> Her Sofrada <span>Lezzet</span>
        </h2>
        <div className="ikinci-images">
          <img src={paket} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ikinci;
