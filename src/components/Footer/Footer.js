
import copyright from "../../images/copyright.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="FooterDiv">
      <div className="FooterContent">
        <div className="Copyright">
          <img src={copyright} alt="copyright" />
        </div>
        <p>Deen Qureshi</p>
      </div>
    </div>
  );
}
