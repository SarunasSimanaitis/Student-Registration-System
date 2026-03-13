**Studentų registracijos sistema**



Tai yra WEB aplikacija skirta studentų registracijai ir jų mokomųjų dalykų, kreditų, kursų valdymui.



Sistema sukurta naudojant kliento-serverio architektūrą.



Naudotos technologijos



/Frontend

\- React

\- Vite

\- JavaScript

\- HTML5

\- CSS





/Backend

\- Node.js

\- Express.js

\- MongoDB

\- Mongoose



\---



**Sistemos funkcionalumas**



Sistema leidžia:



\- pridėti naują studentą

\- peržiūrėti visų studentų sąrašą

\- filtruoti studentus pagal kursą

\- ieškoti studentų pagal vardą arba pavardę

\- peržiūrėti konkretaus studento informaciją

\- ištrinti studentą

\- priskirti studentui mokomuosius dalykus

\- pašalinti mokomuosius dalykus



\---



**REST API endpointai**





**Testavimas ir naudojimo komandos**



GET



/api/students



Gauti visų studentų sąrašą

\-----------------------



GET



/api/students/:id



Gauti konkretų studentą

\-----------------------



POST



/api/students



Sukurti studentą

\-----------------------



PUT



/api/students/:id



Atnaujinti studento duomenis

\-----------------------



DELETE



/api/students/:id



Pašalinti studentą



\---



**Dalykai**



POST



/api/subjects



Pridėti mokomąjį dalyką studentui

\-----------------------



PUT



/api/subjects/:id



Atnaujinti mokomąjį dalyką

\-----------------------



DELETE



/api/subjects/:id



Pašalinti mokomąjį dalyką

\-----------------------



\---



**Projekto struktūra**





backend

├─ config

├─ controllers

├─ models

├─ routes

├─ services

└─ server.js



frontend

├─ api

├─ components

├─ App.jsx

└─ main.jsx





\-----------------------



**Projekto paleidimas**



\--- Backend



Eiti į backend folderį:





cd backend





Instaliuoti dependencies:





npm install





Paleisti serverį:





npm run dev





Backend serveris veiks:





http://localhost:5000





\---



\--- Frontend



Eiti į frontend folderį:





cd frontend





Instaliuoti dependencies:





npm install





Paleisti aplikaciją:





npm run dev





Frontend bus pasiekiamas per:





http://localhost:5173





\-----------------------



Autorius Šarūnas Simanaitis

