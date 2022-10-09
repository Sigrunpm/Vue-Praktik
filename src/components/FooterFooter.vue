<template>
    <div class="footer">
  
      <div class="contentaa">
      <img class="logos" src="@\assets\img/logonyt.png" alt="logo">
      </div>
  
      <div class="contentaa">
      <h4 class="sti">Created by &copy; Copyright - SPM WEBARTS 2022</h4>
      </div>
  
      <div class="contentaa">
      <font-awesome-icon class="ico" icon="fa-solid fa-heart" />
      <font-awesome-icon class="ico" icon="fa-solid fa-heart" />
      <font-awesome-icon class="ico" icon="fa-solid fa-heart" />
  </div>
  
  
    </div>
    </template>
    
   
    
    <style lang="scss" scoped>
      @import "@/scss/colors";
    
      .footer {
      display: flex;
      background-color: $one;
      flex-direction: column;
  
  }
  
    .contentaa{
      padding: 15px;
      display: flex;
      justify-content: center;
    }
  
  
    .logos {
          max-width: 40px;
          height: auto;
          margin: 10px;
      } 
  
      .ico {
          padding: 0px 20px 0px 0px;
          margin-top: 25px;
  
      }
  
      .sti {
          color: white;
      }
  
      @media only screen and (min-width: 750px) {
          .footer {
              flex-direction: row;
              justify-content: space-between;  
  
          }
        
           }
  
    </style>
  
  
  