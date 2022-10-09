<template>
  
  <div class="nav-menu">
    <font-awesome-icon icon="fa-solid fa-sliders" class="se" @click="showMenu()" />
  <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
  <div class="logo">
    <img class="logos" style="float:left" src="@\assets\img/logonyt.png" alt="logo">

  </div>
  <ul class="nav-items">
  <li><button text @click="scroll('home'), showMenu()">Home</button></li>
  <li><button text @click="scroll('kompetancer'), showMenu()">Kompetencer</button></li>
  <li><button text @click="scroll('ommig'), showMenu()">Om mig</button></li>
  <li><button text @click="scroll('kontakt'), showMenu()">Kontakt</button></li>  
</ul>
</div>
  </div>


  </template>

<script>
  export default {
  data() {
  return {
  showMobileMenu: false,
  };
  },
  methods: {
  showMenu() {
  this.showMobileMenu = !this.showMobileMenu;
  },
  scroll(refName) {
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"});
            },
  },
  };
  </script>

<style lang="scss" scoped>
    @import "@/scss/colors";

  .nav-menu {
    
  background-color: $one;
  position: fixed;
  width: 100%;
  }
  .nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
  
  }
  .nav-items {
  display: flex;
  justify-content:flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
  padding: 0 10px;
  button {
    font-family: "Playfair Display", Helvetica, Arial;
font-weight: bolder;
    background-color: transparent;
    color: $two;
  border: none;
  font-size: 1rem;
  
  }
  :hover {
    color: $four;
  
    
  }
  }
  }
  .se {
  display: none;
  }
  .logos {
        max-width: 40px;
        height: auto;
        float: left;
        margin-top: 1px;
    } 
  // Mobile version - hidden hamburger menu
  @media screen and (max-width: 768px) {
  .nav-menu {
  padding-top: 10px;
  position: fixed;
  width: 100%;
  }
  .open-menu {
  opacity: 1;
  height: 200px;
  }
  .closed-menu {
  opacity: 0;
  height: 0;
  padding: 0;
  }
  .nav-content {
  flex-direction: column;
  z-index: 100;
  position: relative;
  transition: all 0.2s ease-out;
  align-items: flex-start;
  
  .logos {
    margin-left: 15px;
  }
  }
  
  .nav-items {
  flex-direction: column;
  align-items: flex-start;
 button {
  margin-top: 10px;
 }
  }
  
  
  .se {
  display: block;
  text-align: right;
  padding: 0px 10px 10px 10px;
  font-size: 30px;
  }
  }
  </style>







