<template> 
<nav class="menu">       
    <img class="logo" style="float:left" src="@\assets\logo1.png" alt="logo">
    <li> <button class="menubut" @click="scroll('home')">Om mig</button> </li>
    <li> <button class="menubut" @click="scroll('home')">Om mig</button> </li>
    <li> <button class="menubut" @click="scroll('home')">Om mig</button> </li>
    <li> <button class="menubut" @click="scroll('home')">Om mig</button> </li>
</nav>
</template> 

<script>
    export default {
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

    .menu {
        background-color: black;
        text-align: right;
    .logo {
        max-width: 40px;
        height: auto;
        float: left;
        margin-top: 1px;
    }  
    }
.menubut {
    background-color: black;
    color: white;
    margin: 10px;
    font-size: 1rem;
    font-weight: bolder;
    :hover {
        background-color: blueviolet;
    }
    }



</style>