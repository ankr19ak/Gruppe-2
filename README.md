## Gruppe-2 - Projekt Danseskole

Velkommen til Gruppe-2's førsteårsprojekt!

Dette projekt er et administrationsprogram, der skal hjælpe danseskoler med at oprette og organisere dansehold/undervisninger,
samt gøre det nemt for kunder at tilmelde sig specifikke dansehold.

En uddybende beskrivelse af systemet følger nedenfor!

## Beskrivelse af systemet

Systemet skal være et log-ind system, hvor danseskolens administrator og ejer er i stand til at oprette undervisningstimer, 
antal ledige pladser og tilføje lokationer samt tidspunkter. Administrator kan også få et overblik over antallet af kunder
som har tilmeldt sig de enkelte undervisningstimer, og hvilke typer som har tilmeldt sig, da kunderne skal oplyse køn og
fødselsår, når de opretter deres bruger. På denne måde er det i nogen grad også muligt for administratoren at få et indblik i
den enkelte kundes niveau, forudsat antallet af tilmeldte undervisningstimer.

Systemet har også en kunde funktion, hvor kunderne til danseskolen er i stand til at oprette og logge ind på en unik bruger.
Herfra kan de så få et overblik over undervisningstimer med tidspunkt og lokation, samt undervisere der er tilknyttet den
enkelte undervisningstime.  Kunden er yderligere i stand til at se hvor mange ledige pladser der er tilbage. På baggrund af
disse informationer, kan kunden herfra tilmelde sig undervisningstimer, hvis der er ledige pladser. Kunden kan hertil også
framelde sig tilmeldte undervisningstimer.

Formålet ved at opbygge dette system er dermed at skabe en platform, hvor det at tilmelde sig flere forskellige
undervisningstimer er gjort simpelt og overskueligt for kunden, samt nemt for danseskolens ejere at administrere og overskue.
Dertil vil platformen også give ejerne en fordelagtig indsigt i og omkring den enkelte kunde. Set fra kundernes perspektiv,
vil de få et godt overblik over deres undervisningstimer samt de enkelte hold. 

## Kravspecifikationer & Use Cases

De enkelte elementer vi skal have med i projektet og hvad man skal kunne gøre i disse elementer som kunde og administrator.

**Kunde:**

    a. Kunden opretter en bruger
  
    b. Kunden kan herefter logge ind
  
    c. Kunden vil have mulighed for at slette sin bruger igen
  
    d. Kunden klikker sig ind på en danseskole, for herefter at kunne se tidspunkter/sted, samt 
       varighed for undervisningstimer
  
    e. Kunden kan se underviseren og antallet af deltagere for den enkelte undervisningstime
  
    f. Kunden vælger en undervisningstime
  
    g. Kunden har herefter mulighed for at booke tid til en undervisningstime
  
    h. Kunden kan afmelde sig fra en undervisningstime
  
    i. Kunden kan se tilmeldte undervisningstimer
  
    j. Når kunden er færdig logger vedkommende sig ud af systemet igen
 
**Administrator:**

    a. Administrator logger ind på administratorside. 
    
    b. Administratoren skal her kunne oprette undervisningstimer.
    
    c. Administratoren skal kunne oprette antal ledige pladser. 
    
    d. Administratoren skal kunne redigere i den enkelte undervisningstime.
    
    e. Administratoren skal kunne fjerne undervisningstimer.
    
    f. Administratoren skal kunne se tilmeldte til de enkelte undervisningstimer.
    
    g. Administratoren skal kunne se hvilke typer (køn og alder) der har tilmeldt sig.
    
    h. Administratoren logger ud når de ønskede ændringer er blevet gennemført.

## List of Requirements

- Forsiden
  - Velkomsttekst
  - Eksisterende kunde
  - Ny kunde
- Ny kunde? - Opret bruger
  - Brugernavn
  - Kodeord
  - Email
  - Navn
  - Fødselsår
  - Køn 
  - Mobil/tlf nr.
- Log ind
  - Brugernavn
  - Kodeord
- Brugerside
  - Oversigt over undervisningstimer
  - Tilmeld undervisningstime(r)
  - Frameld undervisningstime(r)
  - Slet bruger 
  - Tilmeldte undervisningstimer
- Administratorside 
  - Opret undervisningstime
  - Slet undervisningstime
  - Rediger undervisningstime
  - Se antallet af tilmeldte kunder på de enkelte undervisningstimer
  
  ## UML-Diagram
  ![Alt text](assets/UML-Diagram.png?raw=true "Danseskole UML Class Diagram")
