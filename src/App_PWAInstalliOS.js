import "./App.css";
import PwaInstallPopupIOS from "react-pwa-install-ios";
import gebaeude from "./gebaeude.jpeg";
import hausrat from "./hausratversicherung.jpeg";
import unfall from "./unfall.jpeg";
import motor from "./motor.jpeg";
import rechtschutz from "./rechtschutz.jpeg";
import haftpflicht from "./haftpflicht.jpeg";

import "@pwabuilder/pwainstall";

function App() {
  var versicherungen = {
    hausrat: hausrat,
    haftpflicht: haftpflicht,
    unfall: unfall,
    rechtschutz: rechtschutz,
    gebaeude: gebaeude,
    motor: motor,
  };

  const versicherungen_bilder = Object.keys(versicherungen).map((key) => (
    <div className="card">
      <img
        className="card--avatar"
        key={key}
        src={versicherungen[key]}
        alt=""
      />
      <h1 className="card--title">{key}</h1>
      <a className="card--link" href="#">
        Wissen warum
      </a>
    </div>
  ));

  return (
    <div className="container">
      {versicherungen_bilder}
      <PwaInstallPopupIOS
        delay={3}
        lang="de"
        force
        appIcon="./logo192.png"
      ></PwaInstallPopupIOS>
    </div>
  );
}

export default App;
