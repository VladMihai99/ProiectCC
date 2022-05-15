# ProiectCC

1. Introducere
Aceasta aplicatie este o platforma de blogging unde orice se inregistreaza poate impartasi povesti din viata lor, alegand sa le face publice sau private. Aplicatia a fost creata utilizand Node.js, Express, MongoDB, Passport cu strategie Google OAuth. De asemenea, am urmat mai multe tutoriale in care am incercat sa utilizez handlebars care foloseste un sablon si un obiect de intrare pentru a genera HTML sau alte formate text. 

2. Cele 2 servicii folosite in Cloud folosite in aceasta aplicatie este 'Google+ API' folosing Google OAuth 2.0 pentru a realiza pagina de login cu contul Google si MongoDB, baza de data hostata pe un cluster de pe platforma AWS, deoarece am ales sa nu folosesc o baza de data locala.

3. Google OAuth 2.0 este folosit in diferite limbaje de programare si framework-uri. Autorizarea este realizata atunci cand aplicatia este redirectionata de browse catre o adresa URL Google, cum este si cazul de fata. URL-ul include parametri de interogare care indica tipul de acces solicitat.
Dezvoltatorii de aplicatii care sunt in domeniul securitatii datelor, trebuie sa se concentreze pe utilizarea celor mai sigur standarde in aplicatiile pe care le lanseaza. Integrarea OAuth 2.0 are multe avantaje precum:
>Permite citirea datelor unui utilizator dintr-o alta aplicatie
>Furtnizeaza fluxul de lucru de autorizare pentru web, aplicatii desktop si dispozitive mobile
>Este o apllicatie web pe partea de server care utilizeaza codul de autorizare si nu interactioneaza cu acreditarile utilizatorului.
>Ofera utilizatorilor mai mult control asupra datelor, pot acorda selectiv acces la diferite functionalitati pentru aplicatiile pe care doresc sa le utilizeze

Dupa cum se poate vedea in aplicatie, aceasta este hostata pe Heroku, iar in momentul cand o incercam sa o accessam primim o avertizare severa de la Google cum ca acest provider poate fi periculos. Insa din moment ce noi suntem developerii, putem sa whitelistam aceasta adresa in Google Cloud pentru a o putea folosi asa cum trebuie.

Aplicatia este una CRUD unde am adaugat Google OAuth 2.0 iar baza de date este una NoSQL(MongoDB) unde pastram date despre bloguri, sesiuni de logare si despre utilizatori. De asemenea am urmarit si numeroase ghiduri online pentru a reusi sa implementez aceasta logica.

Utilizam handlebars, iar pentru partea de frontend am ales sa tin totul la nivel de server fara a utiliza vreun framework sau vreo librarie anume.

Landing page-ul este serviciul de autorizare de la Google. Din moment ce ne logam, ajungem pe pagina 'Dashboard' iar datele de logare vor fi stocate in baza de date. In Dashboard vor aparea blogurie, se pot edita, se pot face publice sau private. Publice insemnand ca toti utilizatorii logati le pot folosi. Putem vedea date despre utilizatori si mai multe date despre ei. 

4. Capturile de ecran sunt atasate.

Link catre aplicatie Heroku: 
https://ancient-ocean-36298.herokuapp.com/
