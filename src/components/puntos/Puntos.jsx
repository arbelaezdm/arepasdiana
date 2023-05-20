import React from "react";
import "../puntos/puntos.css";
import punto_1 from "../../assets/images/puntos/punto_cargo_zone.png";
import punto_2 from "../../assets/images/puntos/punto_latinoamerica_express.png";
import punto_3 from "../../assets/images/puntos/punto_servientrega_boca_raton.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Puntos = () => {
  return (
    <>
      <div className="container__sales_point">
        <h2>Encuentranos en Nuestros Puntos de Venta</h2>
      </div>
      <div className="container__point_images">
        {/* Point 1 */}
        <h3>Cargo Zone</h3>
        <a href="https://goo.gl/maps/wGAJqEsRqYUnEiqc6" target="__blank">
          <FaMapMarkerAlt /> 22749 FL-7 D, Boca Raton, FL 33428
        </a>
        <a href="https://goo.gl/maps/wGAJqEsRqYUnEiqc6" target="__blank"><img src={punto_1} alt="punto_1" /></a>
        {/* Point 2 */}
        <h3>Latinoamerica Express</h3>
        <a href="https://goo.gl/maps/13ZyxXwLnwToJXAs6" target="__blank">
          <FaMapMarkerAlt /> 5636 Johnson St. Hollywood FL 33321
        </a>
        <a href="https://goo.gl/maps/13ZyxXwLnwToJXAs6" target="__blank"><img src={punto_2} alt="punto_2" /></a>
        {/* Point 3 */}'<h3>Servientrega Boca Raton</h3>
        <a href="https://goo.gl/maps/HWTDsZRg5EYUZQ6dA" target="__blank">
          <FaMapMarkerAlt /> 22749 FL-7 D, Boca Raton, FL 33428
        </a>
        <a href="https://goo.gl/maps/HWTDsZRg5EYUZQ6dA" target="__blank"><img src={punto_3} alt="punto_3" /></a>
      </div>
    </>
  );
};

export default Puntos;
