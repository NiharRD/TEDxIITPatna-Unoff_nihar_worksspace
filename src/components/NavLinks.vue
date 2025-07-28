<template>
    <div class="nav-container" :class="{ 'nav-scrolled': isScrolled }">
        <div class="nav-logo-container">
            <img src="../assets/navbar/tedx-logo.svg" class="nav-logo"/>
        </div>
        <div class="navbar-items-container">
            <div class="navbar-item">Home</div>
            <div class="navbar-item">About Us</div>
            <div class="navbar-item event">
                Events
                <img src="../assets/navbar/down-svg.svg" :class="clickEvent==true?'event-click':count>0?'event-reverse-click':null" @click="handleEvent" />
            </div>
            <div class="navbar-item">Speakers</div>
            <div class="navbar-item navabar-buy-tickets">Buy Tickets</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const clickEvent = ref(false);
const count = ref(0);
const isScrolled = ref(false);

const handleEvent = () => {
  clickEvent.value = !clickEvent.value;
  count.value++;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.nav-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    background-color: rgba(0, 0, 0, 1); /* solid initially */
    transition: background-color 0.3s ease;
}
.nav-scrolled {
  background-color: rgba(0, 0, 0, 0.5); /* 80% opaque */
  backdrop-filter: blur(6px); /* optional for a modern glass effect */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.nav-logo{
    width: 315px;
    height: 40px;
}
.navbar-items-container{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: white;
    margin-right: 3.5rem;
}
.navbar-item {
  position: relative;
  font-size: 20px;
  font-family: 'Inter';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  letter-spacing: 1px;
  cursor: pointer;
  overflow: hidden;
}
.navbar-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: red;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.navbar-item:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.navabar-buy-tickets{
    background-color: red;
    border-radius: 50px;
    width: auto;
}
.event{
    gap: 0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.event-click{
    transform: rotate(-90deg);
    transition: 0.2s;
}
.event-reverse-click{
    transform: rotate(0deg);
    transition: 0.2s;
}
</style>
