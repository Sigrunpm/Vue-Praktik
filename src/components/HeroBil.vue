<template>
<div>

<div class="hero">
        <div class="hero-left">
            <img class="profil" src="@\assets\mig.png" alt="profil">
        </div>
        <div class="hero-right">
            <div class="fix">
            <h3 class="op">Hej! Mit navn er Sigrun Mouritsen</h3>
            <h1 class="mel">Jeg studerer Multimediedesign på UCL</h1>
            <p class="ned">
              Jeg søger en praktikplads, i perioden 01.02.2023-30.04.2023 <br>
              Hvis I er interesserede i at have, en multimediedesigner praktikant med UI som valgfag, så skal i have mig.
            </p>
            <button class="menubut" @click="isShow = !isShow">Krav til Praktiksted</button>
            
            
            <section class="hero" v-show="isShow">
           
            
            <div>
            <h1 class="mel">Hvilke krav stiller UCL?</h1>
            <p class="ned">
              Uddannelsen forventer at jeg finder en relevant praktikplads, indenfor området - Multimediedesign.
              Praktikstedet skal tilbyde et læringsmiljø, som introducerer mig for livet på arbejdsmarkedet. <br> 
              Min vejleder vil komme på besøg, en enkelt gang og snakke om hvordan det går. 
              Som en del af min eksamen, skal jeg skrive en logbog over mit forløb. <br> 
              Efter praktikperioden, vælger jeg selv om min eksamensopgave skal tage udgangspunkt i mit praktikophold, eller noget helt andet. <br>
              
            </p>
            <button class="menubut" @click="isShow = !isShow">Luk</button>
             
        </div>

             </section>
        </div>
        </div>
    </div>

</div> 
    
        </template> 

        <script>
        export default {
        data: function () {
        return {
        isShow: false, 
         };
         },

         props: {
         msg: String,
         },

         methods: {
            scroll(refName) {
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"});
            }
             }
              }
         </script>

         <style lang="scss" scoped>
            @import "@/scss/colors";

        .hero {
            background-color: rgb(27, 26, 26);
            color: white;
            display: flex;
            flex-direction: column;
            height: 800px;
            
            
        }
        
        .hero-left {
            width: 100%;
            height: auto;
            text-align: center;
            
        }

        .hero-right {
            width: 100%;
            height: auto;
        }

        .profil {
            width: 80%;
            height: auto;
            padding: 25px;
            padding-top: 100px; 
             
        }

        .op {
            color: $red1;
        }

        .fix {
            margin: 40px;
            padding: 25px;
            margin-top: 100px;
        }
        .menubut {
            background-color: $red1;
            color: white;
            font-weight: bolder;
            padding: 5px 10px 5px 10px;
            border: none;
           
        }

        .menubut:hover {
                background-color: $red3;
                
            }

        @media only screen and (min-width: 750px) {
        .hero {
            flex-direction: row;
        }
        .hero-left {
            width: 50%;
            height: auto;
        }
        .hero-right {
            width: 50%;
            height: auto;
        }
        }
       
    </style>