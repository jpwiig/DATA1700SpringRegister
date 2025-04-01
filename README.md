# DATA1700: Ett litt større register

Dette prosjektet kan fungere på mange måter. Det første denne blir er at vi går gjennom uke for uke i sporadiske mellomrom med temaer som er relevant for eksamen gjennom denne demoen. I første omgang virker den kanskje latterlig enkel, men mer kompleksistet blir lagt til dersom det er nødvendig. Under kommer en liten smørbrødsliste over ting som kommer til å være i prosjektet. Føl deg fri til å leke, legge til og ha det gøy i din egen fork så mye du vil for å bli ekstra klar til eksamen!

![Incredible register!](imgREADME/fantasticregister.webp)
## Tekniske detaljer


| java versjon        | 21    |
|---------------------|-------|
| Spring boot versjon | 3.4   |
| Byggesystem         | Maven |
|oversikt over det som blir gjort i demoer| [trykk her](demoer.md)

| Ser du feil?| lag en issue [her](https://github.com/jpwiig/DATA1700SpringRegister/issues) |
|-------------|----------------------|
## Hvordan kan jeg jobbe med min egen kopi?
Du trykkker på "fork",da får du en kopi på din github profil, du kan også laste ned som zip


## Oppgaver som du Kan gjøre: 

I denne filen så ser du noen oppgaver som er delt inn i temaer, gjerne gjør mer, men det er ett godt utgangspunkt! Ett godt tips er å bryte ned og tenke hva er det letteste jeg kan gjøre nå, før man eventuelt går videre til google eller chatgpt

### Generelt backend programmering
Det er lagt inn noen feller som man må løse i html siden også før alt fungerer som det skal, prøv å finne ut av det også ;)
1) Lagre dataen fra skjemaet på server siden, tenk spesielt over hvilken http respons dette skal være, bruk jquery eller vanilla JS, men vær konsistent. 
2) Oppdater en allerede eksisterende ting som er i registeret, husk riktig http respons! 
3) Sletting av registeret ditt: legg inn mulighet for å slette hele, og slette en av tingnene i lista. Ha bekreftelse før det blir slettet fra backenden, rikitg http respons gjelder fremdeles.

### Genereisk og collections
1) Legg inn sortering av lista di, bruk collections
2) Legg til muligheten for å sortere på hver av attributtene på tabellen.


### Databaser
**NB: Husk å legg inn riktig biblotek i pom.xml filen for å få dabaser til å fungere**
**NNB: Husk også å oppdater applications.properties**
1) Ta i bruk postgres til å gjøre lagring av listen din konsistent
2) Sørg for at CRUD (Create, Read, Update,Delete) operatsjonene er konsist og fungerer med databasen din

### Sikkerhet og brukerbehandling
**Husk å ha riktig rammeverk her også**
1) Lag ett innloggingssystem, prototyp først uten kryptering også bruker du kryptering
2) Ta i bruk sesjoner for å registere om brukeren din er ligget inn eller ikke
3) _BONUS: Prøv forskjellige krypteringsalgoritmer, er det noen som du tror er mer sikkert enn andre: du kan se forskjellige krypteringsalgoritmer [her](https://www.geeksforgeeks.org/encryption-its-algorithms-and-its-future/)_


## Verktøy som er nytting når man jobber med APIer
- [curl](https://curl.se/) - kommandlinje verktøy for å hente data fra api-er
- [hoppscotch](https://hoppscotch.io/) - api verktøy som kan skrive tester, og ha en mer "visuell visning" av hva API-en leverer, for å få den til å fungere med localhost, se [her](https://github.com/hoppscotch/hoppscotch/discussions/2051), eller bruk noe som [ngrok](https://ngrok.com/)
- [JWT.io](https://jwt.io/) - dekoding av JWT tokens
- [maven central repository](https://mvnrepository.com/repos/central) - hvor man kan finne dependencies i maven sitt hovedrepository