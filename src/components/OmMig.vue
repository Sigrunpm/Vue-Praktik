<template>
    <h1 class="overskrift">Om mig</h1>
    
    <div class="mig">
       
           
            <div class="mig-right">
                <div class="migfix">
                <h3 class="migop">Lidt om mig</h3>
                <h1 class="migmel">Og hvad I kan forvente.</h1>
                <p class="migned">
                  Jeg går meget op i, at udføre mit arbejde ordentligt. <br>
                  Jeg er aktiv, tilstede, pligtopfyldende og ikke bange for at udfordre mig selv. <br>
                  Jeg har rigtig meget at lære indenfor faget, min taktik pt. er at prøve mig frem med alt, jeg bliver præsenteret for - learning by doing. <br> 
                  Det fungerer, men jeg håber at dette semester, samt mit praktikophold, kan hjælpe med at afklare for mig, hvor jeg skal placere min energi. <br>
                  Selvom jeg har valgt UI som valgfag, er jeg stadig meget interesseret i content, jeg vil beskrive mig selv som en meget kreativ person, der elsker at skabe og fange. <br>
                  Dog er det kode jeg brander for, og ønsker at blive god til.
                  Ellers er jeg meget rolig og venlig af natur, jeg fungerer med de fleste mennesker og har altid været vel lidt på min arbejdsplads. 
                  Jeg fungerer godt i teams, men jeg fungerer også godt selvstændigt. 
                  
                </p>
                <button class="menubut" @click="isShow = !isShow">LÆS MERE</button>
                
                
                
                <section class="mig" v-show="isShow">
               
                
                <div>
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
                <img class="migprofil" src="@\assets\img/migs.png" alt="profil">
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
                background-color: rgb(27, 26, 26);
                color: white;
                display: flex;
                flex-direction: column;
                
                
            }
            
            .mig-left {
                width: 100%;
                height: auto;
                text-align: center;
            }
    
            .mig-right {
                width: 100%;
                height: auto;
            }
    
            .migprofil {
                width: 80%;
                height: auto;
                padding: 25px;
                padding-top: 100px; 
                 
            }
    
            .migop {
                color: $red1;
            }
    
            .migfix {
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
                .overskrift {
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
            }
           
        </style>