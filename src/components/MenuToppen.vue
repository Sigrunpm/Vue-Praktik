<template>
  
  <div class="nav-menu">
    <font-awesome-icon icon="fa-solid fa-sliders" class="se" @click="showMenu()" />
  <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
  <div class="logo">
    <img class="logos" style="float:left" src="@\assets\logo1.png" alt="logo">

  </div>
  <ul class="nav-items">
  <li><button text @click="scroll('home'), showMenu()">Home</button></li>
  <li><button text @click="scroll('kompetancer'), showMenu()">Kompetencer</button></li>
  <li><button text @click="scroll('ommig'), showMenu()">Om mig</button></li>
  <li><button text @click="scroll('cv'), showMenu()">CV</button></li>
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
  background-color: rgb(0, 0, 0);
  position: fixed;
  width: 99%;
  border: 5px solid $red4;
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
  background-color: black;
  color: white;
  font-weight: bolder;
  }
  :hover {
  color: $red1;
    
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
  width: 98%;
  }
  .open-menu {
  opacity: 1;
  height: 150px;
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
  }
  .nav-items {
  flex-direction: column;
  }
  .se {
  display: block;
  text-align: right;
  padding: 0px 10px 10px 10px;
  font-size: 25px;
  }
  }
  </style>







