<template>
      <h1 class="overskrift">Kontakt</h1>
    
    <div class="hero">
            <div class="hero-left">
                <img class="profil" src="@\assets\img/bund2.png" alt="profil">
            </div>
            <div class="hero-right">
                <div class="fix">
                <div  class="hero-left2">
      <h1 class="hh">kontakt mig via</h1>
     <div>
        <div class="hero-left5">

          <h3><font-awesome-icon icon="fa-solid fa-envelope" class="se" /> E-mail: sigrunpm@gmail.com</h3>
          
        </div>
           </div>
           <div class="hero-left5">

          <h3><font-awesome-icon icon="fa-solid fa-phone" class="se" /> tlf: +45 42 31 36 96</h3>
           </div>
           <h1 class="hh">Jeg glæder mig til at høre fra jer!</h1>

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
                background-color: $black1;
                color: white;
                display: flex;
                flex-direction: column;
                width: 95%;
                margin: 30px;
                
                
            }
            .overskrift {
            text-align: center;
            font-size: 8vw;
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
                width: 90%;
                height: auto;
                padding: 25px;
                 
            }
    
            .op {
                color: $one;
            }
    
            .fix {
                margin: 40px;
                padding: 25px;
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

                .hero-left2 {
            background-color: $black1;
            text-align: center;
            border: 2px solid $one;
            border-radius: 10px;
            margin: 10px;
            
            width: 120%;
   
   margin-left: -30px;
        }
        .hero-left5 {
            background-color: $one;
            color: black;
            width: 90%;
            height: auto;
            text-align: center;
            padding: 5px;
            border-radius: 10px;
            margin: 6px;
            margin-top: 30px;
        }
        .hh {
            color: $two;
        }

    
            @media only screen and (min-width: 750px) {
            .hero {
                flex-direction: row;
                
            }
            .hero-left {
                width: 50%;
                height: auto;
            }
            .hero-left5 {
                width: 94%;
                
            }
            .overskrift {
            font-size: 4vw;
        }
            .hero-right {
                width: 50%;
                height: auto;
            }
            .hero-left2 {
                margin-top: 30px;
                width: 94%;

}
            }
           
        </style>