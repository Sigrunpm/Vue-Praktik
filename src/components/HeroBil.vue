<template>
<div>

<div class="hero">
        <div class="hero-left">
            <img class="profil" src="@\assets\img/heronyny.png" alt="profil">
        </div>
        <div class="hero-right">
            <div class="fix">
            <h3 class="op">Hej! Mit navn er Sigrun Mouritsen</h3>
            <h1 class="mel">Jeg studerer Multimedie design på UCL</h1>
            <p>
              Jeg søger en praktikplads, i perioden d. 01 Feb. 2023 - d. 30 Mar. 2023 <br>
              Hvis I er interesserede i at have, en multimediedesigner praktikant med UI som valgfag, er jeg den rette. <br> <br>
            </p>
            <button class="menubut" @click="isShow = !isShow">Krav til Praktiksted</button>
            
            
            <section class="hero" v-show="isShow">
           
            
            <div class="ned">
            <h1 class="mel">Hvilke krav stiller UCL?</h1>
            <p>
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
            color: $one;
            display: flex;
            flex-direction: column;
            height: auto;
            font-weight: bolder;
            line-height: 30px;
            border-bottom: 2px;
            background-image: linear-gradient(to bottom right, $one, $four, $tree1, $two1);
            border-bottom-right-radius: 200px; 
            .ned {
                background-color: $four2;
                padding: 10px;
                border-left: 2px solid $four;
                border-bottom: 2px solid $four;
                border-bottom-right-radius: 100px;
                

            }
        }
        
        .hero-left {
            height: auto;
            text-align: center;
            
        }

        .hero-right {

            height: auto;
        }

        .profil {
            width: 65%;
            height: auto;
            margin: 25px; 
            margin-top: 100px;
            padding: 25px;
                padding-top: 15px;
                border-bottom: 10px solid $one;
            border-radius: 100%; 

        }

        .op {
            color: $four3;
            font-size: 1.5em;
        }

        .fix {
            margin: 40px;
            padding: 25px;
            margin-top: -10px;
        }
        .menubut { 
            background-color: $four;
            color: $two;
            font-weight: bolder;
            padding: 10px 15px 10px 15px;
            border: none;
            border-radius: 10px;
           
        }
        .mel {
            color: $one;
            font-size: 2em;
        }

        .menubut:hover {
                background-color: $four1;
                
            }
           

        @media only screen and (min-width: 800px) {
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
        .fix {
            margin: 40px;
            padding: 25px;
            margin-top: 100px;
        }
        .profil {
            width: 60%;
            border-radius: 100%; 
            padding: 0px;

        }
        }
       
    </style>