<template>

   
        <h1 class="overskrift">Kompetencer</h1>
   

<div class="hero1">

    <div class="hero-left1">
      <h1>Kode</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-heart" class="se" />
          <h3>Jeg har erfaring med <br> følgende kode:</h3>
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
      <h1>Adobe</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-palette" class="se" />
          <h3>Jeg har erfaring med følgende Adobe programmer:</h3>
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
      <h1>Teori og metode</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-user-graduate" class="se" />
          <h3>Jeg har erfaring med følgende teorier og metoder:</h3>
          <div class="li">
         <li>Scrum - Teamwork</li>
         <li>Design thinking - Process</li>
         <li>Research - Hvordan skal problemet løses</li>
         <li>Analyse af data - Hvad kan data fortælle os</li>
         <li>Info grafik og grafer - udforme</li>
         <li>UI og UX - Den bedste brugeroplevelse</li>
         <li>+ Meget meget mere.</li> <br>
        </div>
        
           </div>
        </div></div>

          

          
     
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
}
         .hero1 {
            background-color: rgb(27, 26, 26);
            color: white;
            display: flex;
            flex-direction: column;
            
            
        }
        
        .hero-left1 {
            width: 94%;
            height: auto;
            text-align: center;
            border: 5px solid $red4;
            margin: 10px;
         background-color: rgb(19, 18, 18);
            
            
          
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
      

        @media only screen and (min-width: 750px) {
        .hero1 {
            flex-direction: row;
        }
        .hero-left1 {
            width: 50%;
            height: auto;
            margin-bottom: 100px;
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

 
  

