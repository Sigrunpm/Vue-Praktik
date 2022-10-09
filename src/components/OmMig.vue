<template>
    <div class="tt">
    <h1 class="overskrift">Lidt om mig</h1>
</div>
    <div class="mig">
       
           
            <div class="mig-right">
                <div class="migfix">
                <h3 class="migop">Lidt om mig</h3>
                <h1 class="migmel">Og hvad I kan forvente.</h1>
                <p class="migned">
                  Jeg går meget op i at udføre mit arbejde ordentligt. <br>
                  Jeg er aktiv, tilstede, pligtopfyldende og ikke bange for at udfordre mig selv. <br>
                  Jeg har rigtig meget at lære indenfor faget, da det er et nyt fagområde for mig, men jeg er motiveret og ivrig efter at lære, samt villig til at lægge de mange timer i det, som det kræver. <br>
                  Selvom jeg har valgt UI og brander for kode, er jeg det sidst år blevet præsenteret for så mange spændende områder indenfor UI, UX og Content, at det kan være svært at finde "mit område", da man umuligt kan blive god til det hele. <br>
                  Jeg håber derfor at dette semester, samt mit praktikophold, kan hjælpe mig med at afklare, hvor jeg skal placere min energi. <br>
                  Ellers er jeg meget rolig og venlig af natur, jeg gør mit for at bidrage til en god og positiv arbejdsplads. 
                  Jeg fungerer godt i teams og selvstændigt.
                  
                </p>
                <button class="menubut" @click="isShow = !isShow">LÆS MERE</button>
                
                
                
                <section class="mig" v-show="isShow">
               
                
                <div class="ned">
                <h1 class="migmel">I vil ikke fortryde at få mig som praktikant! :D </h1>
                <p class="migned">
                 Jeg glæder mig!
                </p>
                <button class="menubut" @click="isShow = !isShow">Luk</button>
                 
            </div>
    
                 </section>
              
            </div>
            </div>
            <div class="mig-left">
                <img class="migprofil" src="@\assets\img/ommigny.png" alt="profil">
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
    
            .mig {
                color: $one;
            display: flex;
            flex-direction: column;
            height: auto;
            font-weight: bolder;

            line-height: 30px;
            border-bottom: 2px;
            background-image: linear-gradient(to bottom right, $two1, $tree1, $four, $one);
            border-bottom-right-radius: 200px;
                .ned {
                background-color: $four2;
                padding: 10px;
                border-left: 2px solid $four;
                border-bottom: 2px solid $four;
                border-bottom-right-radius: 100px;
                

            }
                
            }
            
            
            .mig-left {
                
                height: auto;
                text-align: center;
            }
    
            .mig-right {
                
                height: auto;
            }
    
            .migprofil {
                width: 70%;
                height: auto;
                padding: 25px;
                padding-top: 15px;
                margin: 15px; 
                border-bottom: 10px solid $one;
            border-radius: 100%; 
                 
            }
    
            .migop {
                color: $four1;
            }
    
            .migfix {
                margin: 40px;
                padding: 25px;
            }
            .menubut {
                background-color: $four;
                color: $two;
                font-weight: bolder;
                border-radius: 10px;
                padding: 10px 15px 10px 15px;
                border: none;
               
            }
            .migmel {
            color: $one;
        }
            .menubut:hover {
                    background-color: $four1;
                    
                }
                .overskrift {
                    color: $one;
            text-align: center;
            font-size: 8vw;
        }
    
            @media only screen and (min-width: 750px) {
            .mig {
                flex-direction: row;
            }
            .mig-left {
                width: 50%;
                height: auto;
                
            }
            .mig-right {
                width: 50%;
                height: auto;
            }
            .overskrift {
            font-size: 4vw;
        }
        .migprofil {
                
                padding-top: 150px; 
                 
            }
            .migfix {
                margin-top: 100px;
            }
            }
           
        </style>