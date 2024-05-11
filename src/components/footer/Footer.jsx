import React from "react";
import "../footer/footer.css";
import logo from "../../assets/images/logos/logo_arepas_diana_2.png";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={logo} className="logo" />
        <ul className="permalinks__footer">
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=19547099625"
              target="__blank"
            >
              <BsWhatsapp className="social__icons" /> (954) 709 9625
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=17544227427"
              target="__blank"
            >
              <BsWhatsapp className="social__icons" /> (754) 422 7427
            </a>
          </li>
          <li>
            <a
              href="https://m.facebook.com/profile.php?id=100009118538089&mibextid=LQQJ4d&wtsid=rdr_0Oo2exCHXND4Cz9Fh"
              target="__blank"
            >
              <BsFacebook className="social__icons" /> @arepasdiana
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/arepasdiana/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="__blank"
            >
              <AiFillInstagram className="social__icons" /> @arepasdiana
            </a>
          </li>
        </ul>
      </footer>
      <div className="address__container">
        <a
          href="https://www.google.com/maps/place/Arepas+Diana/@26.1875747,-80.1998014,17z/data=!3m1!4b1!4m6!3m5!1s0x47d892766581fb37:0x251d5b046791e8c5!8m2!3d26.1875699!4d-80.1972265!16s%2Fg%2F11rtmn2t6p"
          target="__blank"
        >
          <FaMapMarkerAlt className="map__icon" /> 3601 W Comercial Blvd Suite
          27 / North Lauderdale 33309
        </a>
      </div>
      <div className="footer__copyright">
        <small> 2024 &copy; Arepas Diana All rights reserved</small>
      </div>
    </>
  );
};

export default Footer;
