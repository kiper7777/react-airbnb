import "./index.css";
import avatar from "./avatar.svg";

export default function Contact({ src, name, rate, time, info, phone }) {
  return (
    <div className="contact__section">
      <div className="contact">
        <img src={avatar} alt="Avatar" height={80} width={80} />
        <div className="contact__block">
          <h1 className="contact__block-title">Господар – {name}</h1>
          <div className="contact__block-info">
            <span className="contact__block-value">{phone}</span>
            <span className="contact__block-value">{time}</span>
            <span className="ccontact__block-value">
              {rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact__description">{info}</p>
    </div>
  );
}
{
  /* <p className="contact__description">{info}</p>; */
}
