<template>

   
        <h1 class="overskrift">Kompetencer</h1>
   

<div class="hero1">

    <div class="hero-left1">
      <h1 class="one">Kode</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-heart" class="se" />
          <h3 class="two">Jeg har erfaring med <br> følgende kode:</h3>
          <div class="li">
         <li>HTML</li>
         <li>CSS</li>
         <li>SASS</li>
         <li>JavaScript</li>
         <li>Vue</li>
         <li>vuetify</li> 
         <li>PHP</li> 
         
         <br>
        </div>
         
           </div></div>

           <div  class="hero-left1">
      <h1 class="one">Adobe</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-palette" class="se" />
          <h3 class="two">Jeg har erfaring med følgende Adobe programmer:</h3>
          <div class="li">
         <li>InDesign</li>
         <li>Illustraitor</li>
         <li>Animate</li>
         <li>XD</li>
         <li>Lightroom</li>
         <li>Photoshop</li> <br>
        </div>
           </div></div>

           <div  class="hero-left1">
      <h1 class="one">Projekter</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-user-graduate" class="se" />
          <h3 class="two">Vi har arbejdet med følgende 6 projekter:</h3>
          <div class="li">
            <li>  Datingapp </li>
              <li>   installations projekt for Naturama </li>
              <li>   Portfolio i HTML og CSS </li>
              <li>   StudyBuddy app til UCL </li>
              <li>   markedsføringsstrategi og hjemmeside, til butik Pulvis </li>
              <li>   Markedsføringsstrategi og hjemmeside, for produktserien Wiser, by Schneider Electric. </li> <br>
              <li>Mit første selvstændige projekt, er denne hjemmeside:
                <a class="link" href="https://tankereform.dk/">Tankereform.dk</a>
              </li> 
              <li>Denne side er kodet med VUE</li><br><br>
        </div>
        
           </div>

    <div>
        
    </div>

    

        </div>
        
    </div>
    <div class="hero1">
    <div class="hero-left2">
            <h1 class="one">Projekterne indeholder</h1>
            <h3 class="two">Step by step:</h3>

            <div class="li">

                <p>Teamet arbejder med SCRUM og Design Thinking, som metode. <br> <br>

              1. Vi starter med at udarbejde en problemformulering, i samarbejde med klienten.
  <br> <br>
                                2. Discovery - Primær og sekundær research.
 <br> <br>
                                 3. Interpretation - Her anvendes alle relevante teorier, metoder og modeller, så som - BMC-PESTLE-GOLDENCIRKEL-PERSONA-SMP/SMUKmodellen-INDHOLDSSTRATEGI-SWOT/TWOT-VÆRDITRAPPEN-TONE OF VOICE M.M. 
  <br> <br>
                                4. Ideation - Hvordan fortæller vores research os, at problemstillingen skal løses? 
 <br> <br>
                              5. Experimentation - !Byg-test-byg-test! - Paper prototyping - Lo-Fi wireframes, Scenario mapping, userflow, wireflow, cardsorting, UI, UX, thinkaloud test m.m. 
<br> <br>
                               6. Evolution - Hvad har vi valgt at gå videre med og hvorfor. <br><br>
 
 7. Konklusion.
             <br></p>
             
               


         
        </div>
           

            </div>


        <div class="hero-left3">
           
        
            <h1 class="one">Dette semester</h1>
            <h3 class="two">Vil vi arbejde med:</h3>

            <div class="li">

            <p>Dette semester arbejde vi med et projekt, vi har fundet en klient "Thai by Noo". <br><br> Da vi er en gruppe på 5, 
                der alle har valgt UI som valgfag, vil vi fokusere på at lave deres egen bestillings side. <br><br> 
                Derudover vil vi forny deres nuværende design og udearbejde en strategi for, hvordan de skal få mere salg på deres egen siden, 
                frem for portaler som Wolt og Hungry. <br><br>
            Hjemmesiden vil blive kodet i VUE eller REACT. <br> <br>

        Personligt vil jeg forsøge at lave min proces port folio, som er min personlige dokumentation for deltagelse i undervisningen, i PHP</p>
        </div></div></div>

   

          
     
    </template>

<script>

    
    export default {
  
    }
    </script>

    <style lang="scss" scoped>
@import "@/scss/colors";
        .overskrift {
            text-align: center;
            font-size: 8vw;
         
        }
       
.li {
    text-align: left;
    margin-left: 50px;
    margin-right: 50px;
    a {
    font-size: 15px;
    color: $one;
}
}


         .hero1 {
            color: white;
            display: flex;
            flex-direction: column;
            width: 100%;
            
            
        }
        .one {
            color: $one;
        }
        .two {
            color: $two;
        }
        
        .hero-left1 {
            width: 94%;
            height: auto;
            text-align: center;
            border: 2px solid $one;
            padding: 10px;
    margin: 20px;
            border-radius: 10px;
         background-color: $black1;
         color: white;
            
            
          
        }
        .hero-left2 {
            width: 94%;
            height: auto;
            text-align: center;
            border: 2px solid $one;
            border-radius: 10px;
            padding: 10px;
    margin: 20px;
         background-color: $black1; 
        }
        .hero-left3 {
            width: 94%;
            height: auto;
            text-align: center;
            border: 2px solid $one;
            border-radius: 10px;
            padding: 10px;
    margin: 20px;
         background-color: $black1; 
        }
        .parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
background-color: rgb(27, 26, 26);
align-items: center; 
}

.profil1 {
            width: 90%;
            height: auto;
       
        }
      
        .link {
            color: white;
            font-size: 1vw;
        } 
        .se {
            font-size: 40px;
        }

        @media only screen and (min-width: 750px) {
        .hero1 {
            flex-direction: row;
        }
       
        .hero-left1 {
            width: 50%;
            height: auto;
        }
        .hero-left2 {
            width: 98%;
            height: auto;
        }
        
        .overskrift {
            font-size: 4vw;
        }
        .parent {
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
background-color: rgb(27, 26, 26);
align-items: center; 
}
         }

    </style>

 
  

