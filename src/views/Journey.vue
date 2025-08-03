<template>
  <Nav></Nav>
  <div class="page-wrapper">
    <header class="page-header">
      <h1 class="page-title">
        <span class="title-highlight">OUR&nbsp;</span> JOURNEY
      </h1>
    </header>
    <div class="background-overlay"></div>
    <div class="content-container">
      <div class="red-line-container">
        <div class="year-line-container">
          <img src="../assets/our_journey_images/year-2024.png" class="year-img">
          <div class="red-line"></div>
        </div>
        <div class="year-line-container">
          <img src="../assets/our_journey_images/year-2023.png" class="year-img">
          <div class="red-line"></div>
        </div>
        <div class="year-line-container">
          <img src="../assets/our_journey_images/year-2022.png" class="year-img">
          <div class="red-line"></div>
        </div>
        <div class="year-line-container">
          <img src="../assets/our_journey_images/year-2021.png" class="year-img">
          <div class="red-line"></div>
        </div>
        <div class="year-line-container">
          <img src="../assets/our_journey_images/year-2019.png" class="year-img">
          <div class="red-line"></div>
        </div>
        <div class="year-line-container">
          <img src="../assets/our_journey_images/year-2016.png" class="year-img">
          <div class="red-line"></div>
        </div>
      </div>
      
      <div class="image-event-container">
        <EventComponent 
          v-for="(item, index) in event_ref" 
          :key="index" 
          :imageUrl="item.imageURL" 
          :imageFooter="item.imageFooter" 
          :eventHeading="item.title" 
          :eventDescription="item.description"
        ></EventComponent>
      </div>
    </div>
    <div class="image-event-container-phone ">
      <div class="image-event-container-phone-left">
        <EventComponentMobile
          v-for="(item, index) in event_details_phone_left"
          :key="index"
          :year="item.imageFooter"
          :image="item.imageURL"
        ></EventComponentMobile>
      </div>
      <div class="image-event-container-phone-right">
        <EventComponentMobile
          v-for="(item, index) in event_details_phone_right"
          :key="index"
          :year="item.imageFooter"
          :image="item.imageURL"
        ></EventComponentMobile>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>

import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import EventComponent from '@/components/EventComponent.vue';
import image1 from '@/assets/our_journey_images/image-1.png';
import image2 from '@/assets/our_journey_images/image-2.png';
import image3 from '@/assets/our_journey_images/image-3.png';
import image4 from '@/assets/our_journey_images/image-4.png';
import image5 from '@/assets/our_journey_images/image-5.png';
import image6 from '@/assets/our_journey_images/image-6.png';
import image1title from '@/assets/our_journey_images/image-1-title.svg';
import image3title from '@/assets/our_journey_images/image-3-title.svg';
import image2title from '@/assets/our_journey_images/image-2-title.svg';
import Nav from '@/components/Nav.vue';
import EventComponentMobile from '@/components/EventComponentMobile.vue';

const event_details = [
  { title:"VEILED VERACITY", description:`"Veiled Veracity" reminds us that even in confusion, hope leads us to clarity. It urges us to confront illusions and seek truth with courage. "Veiled" hints at hidden truths, while "Veracity" emphasizes honesty in our search for meaning.`,imageFooter:"TEDxIITPatna ‘24", imageURL:image1 },
  { title:"PRISMS OF PERCEPTION", description:`Prisms of Perception" explores how our view of the world, like light through a prism, is shaped by various factors. It shows that by shifting perspective, we reveal new ideas and solutions, fostering innovation and understanding.`,imageFooter:"TEDxIITPatna ‘23", imageURL:image2 },
  { title:"INFINITE AFFINITIES", description:`At TEDxIITPatna, we believe dreams become reality together. Infinite Affinities celebrates unity, shared effort, and the humanity that connects us. Each of us has a role—to inspire a brighter future.`, imageFooter:"TEDxIITPatna ‘22", imageURL:image3 },
  { title:"ROAR", description:`The 3rd Edition of TEDxIIT Patna, Roar – The Acoustic of Strength, celebrated resilience and inner power. When we overcome fear and take charge of our thoughts, we unlock the strength to face any challenge. Unleash your inner roar and join us on the path to a stronger self.`, imageFooter:"TEDxIITPatna ‘21", imageURL:image4},
  { title:"METAMORPHOSIS", description:`The 2nd Edition of TEDxIITPatna, Metamorphosis, embraced change as a constant force. It highlighted how transformation brings growth and how adapting is key. Experts explored its impact on technology, entertainment, and societal values.`, imageFooter:"TEDxIITPatna ‘19", imageURL:image5},
  { title:"SHEDDING OFF FEATHERS", description:`TEDxIITPatna believes that building anything new is possible when we let go of the old. Just as birds shed their feathers, allowing the new ones to embrace, taking them afresh to infinite skies, bringing out change is an inevitable part of one's life to keep walking the course of life.`, imageFooter:"TEDxIITPatna ‘16", imageURL:image6},
]
const event_details_phone_left = [
  { title:image1title, description:`"Veiled Veracity" reminds us that even in confusion, hope leads us to clarity. It urges us to confront illusions and seek truth with courage. "Veiled" hints at hidden truths, while "Veracity" emphasizes honesty in our search for meaning.`,imageFooter:"2024", imageURL:image1 },
  { title:image2title, description:`At TEDxIITPatna, we believe dreams become reality together. Infinite Affinities celebrates unity, shared effort, and the humanity that connects us. Each of us has a role—to inspire a brighter future.`, imageFooter:"2022", imageURL:image3 },
  { title:image3title, description:`The 2nd Edition of TEDxIITPatna, Metamorphosis, embraced change as a constant force. It highlighted how transformation brings growth and how adapting is key. Experts explored its impact on technology, entertainment, and societal values.`, imageFooter:"2019", imageURL:image5},
]
const event_details_phone_right = [
  { title:"PRISMS OF PERCEPTION", description:`Prisms of Perception" explores how our view of the world, like light through a prism, is shaped by various factors. It shows that by shifting perspective, we reveal new ideas and solutions, fostering innovation and understanding.`,imageFooter:"2023", imageURL:image2 },
  { title:"ROAR", description:`The 3rd Edition of TEDxIIT Patna, Roar – The Acoustic of Strength, celebrated resilience and inner power. When we overcome fear and take charge of our thoughts, we unlock the strength to face any challenge. Unleash your inner roar and join us on the path to a stronger self.`, imageFooter:"2021", imageURL:image4},
  { title:"SHEDDING OFF FEATHERS", description:`TEDxIITPatna believes that building anything new is possible when we let go of the old. Just as birds shed their feathers, allowing the new ones to embrace, taking them afresh to infinite skies, bringing out change is an inevitable part of one's life to keep walking the course of life.`, imageFooter:"2016", imageURL:image6},
]
const event_ref = ref(event_details)

</script>

<style>
/* Global Styles */
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  background-color: #000000;
  background-image: linear-gradient(to top, #4c0e0e, #000000 75%);
  min-height: 100vh;
}

/* Page Wrapper Styles */
.page-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.content-container {
  position: relative;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;
}

@media (min-width: 640px) {
  .content-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .content-container {
    padding-left:   9rem;
    padding-right: 2rem;
  }
}

.page-header {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  width: 100%;
  height: 527px;
  color: #ffffff;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5rem;
  box-shadow: inset 0px 0px 80px 40px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 1;
}

.page-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(14, 1, 1, 0.6), rgba(0, 0, 0, 0.95)), url('../assets/our_journey_images/bg-image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px);
  z-index: -1; 
}

@media (min-width: 640px) {
  .page-title {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  .page-title {
    font-size: 3.75rem;
    line-height: 1;
    padding-left: 8rem;
  }
}

.red-line-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 150px;
  justify-content: start;
  align-items: start;
  margin-left: 3rem;
}

.red-line {
  background-color: rgba(230, 3, 3, 1);
  width: 10px;
  height: 100%;
}

.image-container {
  display: flex;
  flex-direction: column;;
}

.year-line-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.year-img{
  position: absolute;
}

.event-image {
  max-width: 900px;
  height: 511px;
  margin-bottom: 2rem;
  margin-right: 10rem;
}

.image-event-container{
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
  perspective: 1000px;
}
.image-event-container-phone{
  display: none;
}
@media(max-width:1023px){
  .image-event-container{
    width: auto;
  }
  .content-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .year-img{
    width: 190px;
  }
}
@media(max-width:768px){
  .year-img{
    width: 125px;
  }
  .content-container{
    gap: 5rem;
  }
}
@media(max-width:480px){
  .content-container{
    display: none;
  }
  .page-title {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    width: 100%;
    height: 350px;
    color: #ffffff;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2rem;
    box-shadow: inset 0px 0px 80px 40px rgba(0, 0, 0, 0.6);
    position: relative;
    z-index: 1;
  }

  .page-title::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(14, 1, 1, 0.6), rgba(0, 0, 0, 0.95)), url('../assets/our_journey_images/bg-image.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(1px);
    z-index: -1; 
  }
  .image-event-container-phone{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    /* background-color: green; */
  }
  .image-event-container-phone-left{
    margin-top: 1rem;
  }
  .image-event-container-phone-right{
    margin-top: 10rem;
  }
}
@media(max-width:430px){
  .image-event-container-phone-right{
    margin-top: 0rem;
  }
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #413030;
}
::-webkit-scrollbar-thumb {
  background: #ef4444;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #dc2626;
}
</style>