import React from "react";

import "../productos/productos.css";

//images
//arepas
import arepa_sal_y_mantequilla from "../../assets/images/arepas/arepa_sal_y_mantequilla.png";
import arepa_sin_sal from "../../assets/images/arepas/arepa_sin_sal.png";
import arepa_sal_y_mantequilla_tela from "../../assets/images/arepas/arepa_sal_y_mantequilla_tela.png";
import arepa_sin_sal_tela from "../../assets/images/arepas/arepa_sin_sal_tela.png";
import arepa_quinoa from "../../assets/images/arepas/arepa_quinoa.png";
import arepa_rellena from "../../assets/images/arepas/arepa_rellena.png";
import arepa_chicharron from "../../assets/images/arepas/arepa_chicharron.png";
import arepa_preasada from "../../assets/images/arepas/arepa_preasada.png";
import arepa_loncherita from "../../assets/images/arepas/arepa_loncherita.png";
import arepa_sin_sal_pequena from "../../assets/images/arepas/arepa_sin_sal_pequena.png";
import arepa_amarilla from "../../assets/images/arepas/arepa_amarilla.png";
import arepa_huevo from "../../assets/images/arepas/arepa_huevo.png";
import arepa_hawaiana from "../../assets/images/arepas/arepa_hawaiana.png";

//empanadas
import empanada_grande from "../../assets/images/empanadas/empanada_grande.png";
import empanada_coctelera from "../../assets/images/empanadas/empanada_coctelera.png";
import empanada_queso_dulce from "../../assets/images/empanadas/empanada_queso_dulce.png";

//ricuras
import almojabana from "../../assets/images/antojos/almojabana.png";
import aborrajado_queso from "../../assets/images/antojos/aborrajado_queso.png";
import aborrajado_queso_guayaba from "../../assets/images/antojos/aborrajado_queso_guayaba.png";
import pandebono_rosca from "../../assets/images/antojos/pandebono_rosca.png";
import pandebono_bolita from "../../assets/images/antojos/pandebono_bolita.png";
import bunuelos from "../../assets/images/antojos/bunuelos.png";
import tequeno_queso_guayaba from "../../assets/images/antojos/tequeno_queso_guayaba.png";
import tequeno_queso from "../../assets/images/antojos/tequeno_queso.png";
import tequeno_pequeno from "../../assets/images/antojos/tequeno_pequeno.png";

//antojos
import croqueta_yuca from "../../assets/images/ricuras/croqueta_yuca.png";
import papa_casco from "../../assets/images/ricuras/papa_casco.png";
import papa_criolla from "../../assets/images/ricuras/papa_criolla.png";
import tostones from "../../assets/images/ricuras/tostones.png";

const Productos = () => {
  return (
    <>
      <div className="container__products_title">
        <h2>Arepas</h2>
      </div>
      <section className="arepas">
        <img src={arepa_sal_y_mantequilla} alt="arepa_sal_y_mantequilla" />
        <img src={arepa_sin_sal} alt="arepa_sin_sal" />
        <img
          src={arepa_sal_y_mantequilla_tela}
          alt="arepa_sal_y_mantequilla_tela"
        />
        <img src={arepa_sin_sal_tela} alt="arepa_sin_sal_tela" />
        <img src={arepa_quinoa} alt="arepa_quinoa" />
        <img src={arepa_rellena} alt="arepa_rellena" />
        <img src={arepa_chicharron} alt="arepa_chicharron" />
        <img src={arepa_preasada} alt="arepa_preasada" />
        <img src={arepa_loncherita} alt="arepa_loncherita" />
        <img src={arepa_sin_sal_pequena} alt="arepa_sin_sal_pequena" />
        <img src={arepa_amarilla} alt="arepa_amarilla" />
        <img src={arepa_huevo} alt="arepa_huevo" />
        <img src={arepa_hawaiana} alt="arepa_hawaiana" />
      </section>

      <div className="container__products_title">
        <h2>Empanadas</h2>
      </div>

      <section className="arepas">
        <img src={empanada_grande} alt="empanada_grande" />
        <img src={empanada_coctelera} alt="empanada_coctelera" />
        <img src={empanada_queso_dulce} alt="empanada_queso_dulce" />
      </section>

      <div className="container__products_title">
        <h2>Antojos</h2>
      </div>

      <section className="arepas">
        <img src={almojabana} alt="almojabana" />
        <img src={aborrajado_queso} alt="aborrajado_queso" />
        <img src={aborrajado_queso_guayaba} alt="aborrajado_queso_guayaba" />
        <img src={pandebono_rosca} alt="pandebono_rosca" />
        <img src={pandebono_bolita} alt="pandebono_bolita" />
        <img src={bunuelos} alt="bunuelos" />
        <img src={tequeno_queso_guayaba} alt="tequeno_queso_guayaba" />
        <img src={tequeno_queso} alt="tequeno_queso" />
        <img src={tequeno_pequeno} alt="tequeno_pequeno" />
      </section>

      <div className="container__products_title">
        <h2>Ricuras</h2>
      </div>

      <section className="arepas">
        <img src={croqueta_yuca} alt="croqueta_yuca" />
        <img src={papa_casco} alt="papa_casco" />
        <img src={papa_criolla} alt="papa_criolla" />
        <img src={tostones} alt="tostones" />
      </section>
    </>
  );
};

export default Productos;
