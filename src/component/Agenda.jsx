import React, { Component } from "react";
import "./Res/res.css";

class Agenda extends Component {
  state = {};
  render() {
    return (
      <div className="mt-5">
        <ul>
          <li>
            <b>code</b> - draudejo kodas.
          </li>
          <li>
            <b>JarCode</b> - Juridinių asmenų registro kodas.
          </li>
          <li>
            <b>name</b> - Pavadinimas.
          </li>
          <li>
            <b>municipality</b> - Savivaldybė, kurioje registruota.
          </li>
          <li>
            <b>ecoActCode</b> - Ekonominės veiklos rūšies kodas.
          </li>
          <li>
            <b>ecoActName</b> - Ekonominės veiklos rūšies pavadinimas.
          </li>
          <li>
            <b>month</b> - Mėnuo.
          </li>
          <li>
            <b>avgWage</b> - Vidutinis darbo užmokestis.
          </li>
          <li>
            <b>numInsured</b> - Apdraustųjų skaičius.
          </li>
          <li>
            <b>avgWage2</b> - Vidutinis darbo užmokestis II.
          </li>
          <li>
            <b>numInsured2</b> - Apdraustųjų skaičius II.
          </li>
          <li>
            <b>tax</b> - Valstybinio socialinio draudimo įmoka.
          </li>
        </ul>
      </div>
    );
  }
}

export default Agenda;
