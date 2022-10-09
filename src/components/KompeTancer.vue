<template>

   
        <h1 class="overskrift">Mine Kompetencer</h1>
   

<div class="hero1">

    <div class="hero-left1">
      <h1 class="one">Kode</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-heart" class="se" />
          <h3 class="two">Jeg har erfaring med <br> følgende kode:</h3>
          <div class="li">
            <ul>
         <li>HTML</li>
         <li>CSS</li>
         <li>SASS</li>
         <li>JavaScript</li>
         <li>Vue</li>
         <li>Vuetify</li> 
         <li>PHP</li> 
         <li>SEO</li>
        </ul>
         <br>
        </div>
         
           </div></div>

           <div  class="hero-left1">
      <h1 class="one">Adobe</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-palette" class="se" />
          <h3 class="two">Jeg har erfaring med følgende Adobe programmer:</h3>
          <div class="li">
            <ul>
         <li>InDesign</li>
         <li>Illustrator</li>
         <li>Animate</li>
         <li>XD</li>
         <li>Lightroom</li>
         <li>Photoshop</li>
         <li>Premiere Rush</li>
         <li>After Effects</li>
         <li>Premiere Pro</li> <br>
        </ul>
        </div>
           </div></div>

           <div  class="hero-left1">
      <h1 class="one">Projekter</h1>
     <div>
        <font-awesome-icon icon="fa-solid fa-user-graduate" class="se" />
          <h3 class="two">Tidligere udarbejdede projekter:</h3>
          <p>Links åbner på ny fane</p>
          <div class="li">
            <ul>
            <li>Første Eksamensprojekt - Portfolio. <br> <a href="https://webarts.dk/praktik/portfolio/index.html" target="_blank">Se projekt 1</a></li>
                <li>Andet Eksamensprojekt - Fremhæv produktserien wiser. <br> <a href="https://webarts.dk/praktik/wiser/" target="_blank">Se projekt 2</a> <br> <a href="https://webarts.dk/praktik/wiser-stileguide/" target="_blank">Se Stileguide</a></li>
                
                <li>Galleri - Fra 1 og 2 Semester. <br> <a href="https://webarts.dk/praktik/galleri/" target="_blank">Galleri</a></li>
                

                <li>Eget projekt - Hjemmeside i wordpress. <br> <a href="https://tankereform.dk/" target="_blank">Tankereform</a></li>
                

                <li>Denne Portfolio er kodet i VUE</li>
               
            </ul>

           
        </div>
        
           </div>

    <div>
        
    </div>

    

        </div>
        
    </div>

    <h1 class="overskrift">Kommende projekter</h1>

    <div class="hero1">
    <div class="hero-left2">
            <h1 class="one">Dette semester</h1>
            <h3 class="two">Er mine personlige projekter:</h3>
            <div class="li">
                <p> 
                    Det er mit mål at nå at lave et teama til wordpress i PHP, til min proces port folio, som er min personlige dokumentation for deltagelse i undervisningen. <br><br>
                Jeg vil færdiggøre hjemmesiden tankereform, som pt. er bygget med DIVI, om muligt vil jeg kode den selv. <br>
            Derudover vil jeg bruge tid på at forberede mig, i de værktøjer/programmer virksomheden anvender, hvor jeg kommer i praktik.</p>
                

           
         
        </div>
           

            </div>


        <div class="hero-left3">
           
        
            <h1 class="one">Dette semester</h1>
            <h3 class="two">Projekt:</h3>

            <div class="li">

            <p>Klient er restaurant - Thai by Noo. <br> 
                Vores opgave er at få mere salg, fra Thai by Noo's egen hjemmeside. <br>
                Redesign af hjemmeside - Markedsføringsstrategi - Ny webshop (De anvender pt Eat more)
                </p>
        </div></div></div>

   

          
     
    </template>

<script>

    
    export default {
  
    }
    </script>

    <style lang="scss" scoped>
@import "@/scss/colors";
        .overskrift {
            color: $one;
            text-align: center;
            font-size: 8vw;
         
        }
        ul {
  list-style: none;
}
        ul li::before {
            content: "\2022";
                color: $four1;
                font-size: 1.5em;
                font-weight: bolder; 
  display: inline-block; 
  width: 1em; 
  margin-left: -1em;
            }
       
.li {
    text-align: left;
    margin-left: 50px;
    margin-right: 50px;
    color: $one;
    font-weight: bolder;
    a {
    font-size: 15px;
    color: $two;
    background-color: $four;
    border-radius: 10px;
    padding: 5px;
    text-decoration: none;
  
    
    
}
}
a:hover {
        background-color: $four1;
    }

         .hero1 {
            color: $one;
            display: flex;
            flex-direction: column;
            
            
        }
        .one {
            color: $four1;
        }
        .two {
            color: $four1;
        }
        
        .hero-left1 {
            height: auto;
            line-height: 30px;
            text-align: center;
            padding: 10px;
    margin: 20px;
         color: $one;
         border-left: none;
            border-bottom: 2px solid $tree1;
            border-bottom-right-radius: 100px;
            border-top-right-radius: 100px;
            background-image: linear-gradient(to bottom right, $four2, $four2, $tree1, $four2);
        
        }

        .hero-left2 {
            height: auto;
            text-align: center;
            line-height: 30px;

            padding: 10px;
    margin: 20px;
    border-left: none;
            border-bottom: 2px solid $tree1;
            border-bottom-right-radius: 100px;
            border-top-right-radius: 100px;
            background-image: linear-gradient(to bottom right, $four2, $four2, $tree1, $four2);        }
        .hero-left3 {
            height: auto;
            text-align: center;
            padding: 10px;
    margin: 20px;
    line-height: 30px;
    border-left: none;
            border-bottom: 2px solid $tree1;
            border-bottom-right-radius: 100px;
            border-top-right-radius: 100px;
            background-image: linear-gradient(to bottom right, $four2, $four2, $tree1, $four2);        }
        .parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
background-color: rgb(27, 26, 26);
align-items: center; 
}


        .se {
            font-size: 40px;
            color: $one;
        }

        @media only screen and (min-width: 750px) {
        .hero1 {
            flex-direction: row;
        }
       
        .hero-left1 {
            width: 50%;
            height: auto;
            border-bottom: none;
            border-left: 2px solid $four;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 100px;
            background-image: linear-gradient(to bottom left, $four2, $four2, $tree1);
           
        }
        .hero-left2 {
            width: 100%;
            height: auto;
            border-bottom: none;
            border-left: 2px solid $four;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 100px;
            background-image: linear-gradient(to bottom left, $four2, $four2, $tree1);
           
        }
        .hero-left3 {
            width: 100%;
            height: auto;
            border-bottom: none;
            border-left: 2px solid $four;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 100px;
            background-image: linear-gradient(to bottom left, $four2, $four2, $tree1);
           
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

 
  

