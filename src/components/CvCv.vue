<template>

   
        <h1 class="overskrift1">CV</h1>
  

<div class="hero2">

    <div class="hero-left2">
      <h1>Medarbejder</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-bell" class="se" />
        
        <div class="hero-left5">
            <div class="li">
          <h3 class="overs">Hvor har jeg været ansat:</h3>          
            <li>2016-2018 Leder hos Jensens Bøfhus.</li>
            <li>2015-2016: Tjener hos PizzaPizza.</li>
            <li>2012-2016: Tjener og bartender på Pianobar.</li>
            <h3 class="overs">INDEN-2012:</h3>
            <li>Bartender/tjener i Skotland.</li>
            <li>Pædagogmedhjælper.</li>
            <li>Bar medhjælper.</li>
            <li>Shell</li>
            <li>Burgerking</li>
            <li>Rengøring</li>
            <li>Pølsevogn</li>
            <li>MM... </li>
            <p>
                Selvom meget af min erfaring ikke kan overføres direkte, til denne nye karriere retning, så er jeg sikker 
                på at der er meget jeg kan tage med mig.
                 
                
            </p>
          
        </div>          
        </div></div>
        </div>

           <div  class="hero-left2">
      <h1>Selvstændig</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-masks-theater" class="se" />
        <div class="hero-left5">
            <div class="li">
          <h3 class="overs">Fra 2017-2021:</h3>
          <p>
             Jeg havde Zult, på arkaden streetfood marked. <br> Vi udvidede med Martins Kitchen, 3 måneder efter vi udvidede gik arkaden konkurs. <br> 
             Vi valgt at flytte op på Albanigade, hvor vi samlede vores 2 koncepter, desværre kom corona og vi fik en dårlig start. <br>
             
             Vi tilpassede os og skabe et nyt koncept "LOCOS"- mexicansk street food, det blev en kæmpe succes, dog specielt på wolt - som tager 30% + levering. <br>
             Jeg kæmpede en kamp for at få folk til at købe vores varer direkte fra mig, men det lykkes mig ikke <br> 
             - derfor er jeg her i dag. <br><br>
             Jeg har lært rigtig meget som selvstændig, der er rigtig meget arbejde bag hver burrito. <br>
          </p>
        </div>
        </div>
           </div></div>

           <div  class="hero-left2">
      <h1>Uddannelser</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="se" />
        <div class="hero-left5">
            <div class="li">
          <h3 class="overs">Mine uddannelser:</h3>
          <li>2021-2022 Multimediedesigner</li>
          <p style="margin-left:20px ;">- Igang</p>
          <li>2013-2014 Sociologi</li>
          <p style="margin-left:20px ;">- 1+2. Semester</p>
          <li>2012-2013 pædagogik</li>
          <p style="margin-left:20px ;">- 1+1/5. Semester</p>
          <li>2009-2011 HF</li>
          <br><br><br>
          
        </div>
           </div>
          
           </div></div>


          
           </div>
       
    
     
    </template>

    <style lang="scss" scoped>
@import "@/scss/colors";
        .overskrift1 {
            text-align: center;
            font-size: 8vw;
            color: white;
        }
        .li {
    text-align: left;
    margin-left: 50px;
}
         .hero2 {
            color: white;
            display: flex;
            flex-direction: column;
            widows: 95%;
            margin: 30px;
            
        }
        
        .hero-left2 {
            background-color: $black1;
            width: 99%;
            height: auto;
            text-align: center;
            border: 2px solid $one;
            margin-top: 30px;
            margin: 20px;
            border-radius: 10px;
        }
        .hero-left3 {
            color: white;
            width: 94%;
            height: auto;
            text-align: center;
            margin: 6px;
            margin-top: 30px;
        }
        .overs {
            color: $one;
        }
        h1 {
            color: $two;
        }
        .hero-left4 {
            width: 94%;
            height: auto;
            text-align: center;
            margin: 6px;
            margin-top: 30px;
        }

        .hero-left5 {
            width: 94%;
            height: auto;
            text-align: center;
            margin: 6px;
            margin-top: 30px;
        }
        .se {
            font-size: 40px;
        }

        @media only screen and (min-width: 750px) {
        .hero2 {
            flex-direction: row;
        }
        .hero-left2 {
            width: 50%;
            height: auto;
        }
        .hero-left3 {
            width: 50%;
            height: auto;
            float: left;
        }
        .hero-left4 {
            width: 50%;
            height: auto;
            float: right;
            
        }
       
        .overskrift1 {
            font-size: 4vw;
        }
         }

    </style>