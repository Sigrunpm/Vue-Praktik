<template>
   <div class="alt">
    
  <div>
    <div id="slides">

    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
    <a class="prev" @click="prev" id="slides">&#10094; Previous</a>
    <a class="next" @click="next" id="slides">Next &#10095;</a>

  </div>
</div>
  </template>

  <script>
  export default {
    name: "SliderShow",
    data() {
      return {
        images: [
          "http://webarts.dk/galleri/7.png",
          "http://webarts.dk/galleri/9.png",
          "http://webarts.dk/galleri/10.png",
          "http://webarts.dk/galleri/1.png",
          "http://webarts.dk/galleri/12.png",
          "http://webarts.dk/galleri/14.png",
          "http://webarts.dk/galleri/19.png",
          "http://webarts.dk/galleri/15.png",
          "http://webarts.dk/galleri/16.png",
          "http://webarts.dk/galleri/20.png",
          "http://webarts.dk/galleri/17.png",
          "http://webarts.dk/galleri/18.png",
          "http://webarts.dk/galleri/11.png",
          "http://webarts.dk/galleri/13.png",
          "http://webarts.dk/galleri/2.png",
          "http://webarts.dk/galleri/4.png",
          "http://webarts.dk/galleri/5.png",
          "http://webarts.dk/galleri/6.png",
          "http://webarts.dk/galleri/8.png",


           
        ],
        
        currentIndex: 0
      };
    },
  
   
  
    methods: {
      
  
      next: function() {
        this.currentIndex += 1;
      },
      prev: function() {
        this.currentIndex -= 1;
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  };
  </script>

  <style lang="scss" scoped>
    @import "@/scss/colors";

 

.alt {
  
  width: 99%;
  margin-bottom: 20px;
  margin-top: 20px;
}

  img {
  height:auto;
  width: 95%;
 margin: 30px;

  
}


.prev, .next {
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 16px;
  margin: 16px;
  margin-top: -300px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: $one;
}

@media screen and (max-width: 768px) {

.prev, .next {
 padding: 0px;
  margin-top: -100px;
   }
 

  }
   
  </style>
