# PVA - Die Progessive Versicherung App

Das Github Projekt der ***Progressive Versicherung App*** (PVA) ist ein "Sandkasten" zum Ausprobieren neuer nativer Web Technologien im Bereich der App Entwickung und im Kontext von Versicherungen und Finanzdienstleistern. 

# Offline 

Die aktuelle Version ist eine React App mit entsprechendenden PWA OOTB Fähigkeiten (https://de.wikipedia.org/wiki/Progressive_Web_App) 
Dazu gehören die Offline-Fähigkeit über Service-Worker und unterstützende Fähigkeiten über Webpack und Workbox etc. (https://create-react-app.dev/docs/making-a-progressive-web-app) 

# Installierbar 

Über das beigefügte manifest-File wird die Installierbarkeit der Anwendung sicher gestellt.

# Dialoge und Routinen für eine Installation

Zusätzlich demonstriert die Anwendung die Nutzung von entsprechenden Installations-Dialogen für iOS (da die iOS Plattform diese Unterstützung noch nicht nativ anbietet - siehe https://github.com/guillaumegustin/react-pwa-installer-ios/tree/master/src)

Ebenso werden Installation-Dialoge bzw. ein Installations-Button für Desktop Betriebs-Systeme wie OSX bei Nutzung von Chrome angeboten. 

***Die PVA Anwendung wird regelmäßig weiter entwickelt/verprobt, dann erfolgen auch Updates hier im Code bzw. über entsprechende Blogbeiträge***. 
Gerne Ideen, Wünsche artikulieren bzw. gerne auch partizipieren. 

Die aktuelle Version ist auch online unter https://pva.mobinauten.de abrufbar. 

# Installation (Voraussetzung NPM und entsprechende Abhängigeiten): 

1. Download des Sourceocodes
2. Entpacken der Datei und über Console in das Verzeichnis springen 
3. ***./npm*** install für die Installation der notwendigen Abhängigen 
4. ***./npm start*** startet die Anwendung auf Port 3000 im bevorzugten Browser 
5. ***./npm run build*** "baut" die Anwendung und der Output unter /build kann auf den Webbserver deiner Wahl kopiert werden 
