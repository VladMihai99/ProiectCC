# ProiectCC

Link catre aplicatie Heroku: https://ancient-ocean-36298.herokuapp.com/
Link catre repository: https://github.com/VladMihai99/ProiectCC
Link catre video: https://www.youtube.com/watch?v=qmqDPHsmtVk

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

Metode HTTP:
![http](https://user-images.githubusercontent.com/72194352/168481467-c68fb016-ba3e-4888-9f18-78aef9a243e9.png)
![http2](https://user-images.githubusercontent.com/72194352/168481472-3e26ef94-b224-4c25-b6e4-5b7d78ac0ca0.png)
![http3](https://user-images.githubusercontent.com/72194352/168481477-c25397c4-745c-4ce7-8cf3-fa55d7ef9bc5.png)
![http4](https://user-images.githubusercontent.com/72194352/168481479-85b511c8-d659-4bd2-a98a-0f71b024308e.png)

Metode autorizare:
![auth](https://user-images.githubusercontent.com/72194352/168481493-830b9b17-8999-4c53-976a-bcd060768ae9.png)
![auth2](https://user-images.githubusercontent.com/72194352/168481496-c94e13d3-f8d6-4a13-8212-962297c420aa.png)

Interfata aplicatie:
![app](https://user-images.githubusercontent.com/72194352/168481501-92b309dd-387b-459f-a3bb-70efc58b3dbb.png)
![app2](https://user-images.githubusercontent.com/72194352/168481503-18254539-bf08-44d7-aae8-bebb5611827b.png)
![app3](https://user-images.githubusercontent.com/72194352/168481507-95a852d0-c247-4a2f-85a7-109963e83a69.png)
![app4](https://user-images.githubusercontent.com/72194352/168481509-aafd42e7-f809-4a34-bf99-1ad815ca3e81.png)
![app5](https://user-image![app6](https://user-images.githubusercontent.com/72194352/168481515-4235c39a-e850-43a8-96b9-bb99682e55fb.png)
![app6](https://user-images.githubusercontent.com/72194352/168481521-9a15d005-b033-417e-9e2c-3ed3753d9bfd.png)

