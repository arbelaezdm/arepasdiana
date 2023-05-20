import React from "react";
import "../whatsapp/whatsapp.css";
import logo_4 from "../../assets/images/logos/logo_arepas_diana_4.png";
import logo_maiz from "../../assets/images/logos/logo_100_maiz.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";
import instagram from "../../assets/images/icons/instagram.png";
import facebook from "../../assets/images/icons/facebook.png";
import banner_1 from "../../assets/images/banner/banner_1.png";
import banner_2 from "../../assets/images/banner/banner_2.png";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=17544227427"
        target="__blank"
      >
        <img src={whatsapp} alt="whatsapp" className="whatsapp__icon" />
      </a>
      <a
        href="https://www.instagram.com/arepasdiana/?igshid=MzRlODBiNWFlZA%3D%3D"
        target="__blank"
      >
        <img src={instagram} alt="instagram" className="instagram__icon" />
      </a>
      <a
        href="https://m.facebook.com/profile.php?id=100009118538089&mibextid=LQQJ4d&wtsid=rdr_0Oo2exCHXND4Cz9Fh"
        target="__blank"
      >
        <img src={facebook} alt="facebook" className="facebook__icon" />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=17544227427"
        target="__blank"
      >
        <img src={logo_4} alt="logo_4" className="logo_4" />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=17544227427"
        target="__blank"
      >
        <img src={logo_maiz} alt="logo_maiz" className="logo_maiz" />
      </a>

      {/* ====== BANNER ===== */}
      <a
        href="https://api.whatsapp.com/send?phone=17544227427"
        target="__blank"
      >
        <img src={banner_1} alt="banner_1" className="banner_1" />
        <img src={banner_2} alt="banner_2" className="banner_2" />
      </a>
    </div>
  );
};

export default Whatsapp;
