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
      <pwa-install
        installbuttontext="Installation"
        explainer="Die PVA Demo App vereinigt und testet neue PWA Features."
        iosinstallinfotext="Öffnen Sie PVA im Safari Browser. Clicken Sie den 'Share Button'. Mit '+ Zum Homebildschirm hinzufügen' installieren Sie die PVA."
        descriptionheader="Die PVA Demo App vereinigt und testet neue PWA Features. Diese arbeitet im Offline Modus. Bietet Installationsroutinen/hinweise an und optimiert das native Aussehen und 'Feeling'. Zur PVA App existiert auch ein gleichnamiges Github Projekt."
      ></pwa-install>
    </div>
  );
}

export default App;
