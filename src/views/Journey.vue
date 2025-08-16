<template>
  <Nav></Nav>
  <div class="page-wrapper">
    <header class="page-header">
      <h1 class="page-title" :class="{ 'page-title-scrolled': isScrolled }">
        <span class="title-highlight">OUR&nbsp;</span> JOURNEY
      </h1>
    </header>
    <div class="background-overlay"></div>
    <div class="content-container">
      <div class="red-line-container">
        <div v-for="year in journeyYears" :key="year.year" class="year-line-container">
          <img :src="year.image" :alt="`Timeline year ${year.year}`" class="year-img">
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
    
    <div class="image-event-container-phone">
      <EventComponentMobile
        v-for="(item, index) in event_details_phone"
        :key="index"
        :year="item.imageFooter"
        :image="item.imageURL"
      />
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import EventComponent from '@/components/EventComponent.vue';
import EventComponentMobile from '@/components/EventComponentMobile.vue';
import image1 from '@/assets/our_journey_images/image-1.png';
import image2 from '@/assets/our_journey_images/image-2.png';
import image3 from '@/assets/our_journey_images/image-3.png';
import image4 from '@/assets/our_journey_images/image-4.png';
import image5 from '@/assets/our_journey_images/image-5.png';
import image6 from '@/assets/our_journey_images/image-6.png';
import image1title from '@/assets/our_journey_images/image-1-title.svg';
import image2title from '@/assets/our_journey_images/image-2-title.svg';
import image3title from '@/assets/our_journey_images/image-3-title.svg';
import year2024 from '@/assets/our_journey_images/year-2024.png';
import year2023 from '@/assets/our_journey_images/year-2023.png';
import year2022 from '@/assets/our_journey_images/year-2022.png';
import year2021 from '@/assets/our_journey_images/year-2021.png';
import year2019 from '@/assets/our_journey_images/year-2019.png';
import year2016 from '@/assets/our_journey_images/year-2016.png';

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const journeyYears = [
  { year: 2024, image: year2024 },
  { year: 2023, image: year2023 },
  { year: 2022, image: year2022 },
  { year: 2021, image: year2021 },
  { year: 2019, image: year2019 },
  { year: 2016, image: year2016 },
];

const event_details = [
  { title: "VEILED VERACITY", description: `"Veiled Veracity" reminds us that even in confusion, hope leads us to clarity. It urges us to confront illusions and seek truth with courage. "Veiled" hints at hidden truths, while "Veracity" emphasizes honesty in our search for meaning.`, imageFooter: "TEDxIITPatna '24", imageURL: image1 },
  { title: "PRISMS OF PERCEPTION", description: `Prisms of Perception" explores how our view of the world, like light through a prism, is shaped by various factors. It shows that by shifting perspective, we reveal new ideas and solutions, fostering innovation and understanding.`, imageFooter: "TEDxIITPatna '23", imageURL: image2 },
  { title: "INFINITE AFFINITIES", description: `At TEDxIITPatna, we believe dreams become reality together. Infinite Affinities celebrates unity, shared effort, and the humanity that connects us. Each of us has a role—to inspire a brighter future.`, imageFooter: "TEDxIITPatna '22", imageURL: image3 },
  { title: "ROAR", description: `The 3rd Edition of TEDxIIT Patna, Roar – The Acoustic of Strength, celebrated resilience and inner power. When we overcome fear and take charge of our thoughts, we unlock the strength to face any challenge. Unleash your inner roar and join us on the path to a stronger self.`, imageFooter: "TEDxIITPatna '21", imageURL: image4 },
  { title: "METAMORPHOSIS", description: `The 2nd Edition of TEDxIITPatna, Metamorphosis, embraced change as a constant force. It highlighted how transformation brings growth and how adapting is key. Experts explored its impact on technology, entertainment, and societal values.`, imageFooter: "TEDxIITPatna '19", imageURL: image5 },
  { title: "SHEDDING OFF FEATHERS", description: `TEDxIITPatna believes that building anything new is possible when we let go of the old. Just as birds shed their feathers, allowing the new ones to embrace, taking them afresh to infinite skies, bringing out change is an inevitable part of one's life to keep walking the course of life.`, imageFooter: "TEDxIITPatna '16", imageURL: image6 },
];

const event_details_phone = [
  { title: image1title, description: `"Veiled Veracity" reminds us that even in confusion, hope leads us to clarity. It urges us to confront illusions and seek truth with courage. "Veiled" hints at hidden truths, while "Veracity" emphasizes honesty in our search for meaning.`, imageFooter: "2024", imageURL: image1 },
  { title: "PRISMS OF PERCEPTION", description: `Prisms of Perception" explores how our view of the world, like light through a prism, is shaped by various factors. It shows that by shifting perspective, we reveal new ideas and solutions, fostering innovation and understanding.`, imageFooter: "2023", imageURL: image2 },
  { title: image2title, description: `At TEDxIITPatna, we believe dreams become reality together. Infinite Affinities celebrates unity, shared effort, and the humanity that connects us. Each of us has a role—to inspire a brighter future.`, imageFooter: "2022", imageURL: image3 },
  { title: "ROAR", description: `The 3rd Edition of TEDxIIT Patna, Roar – The Acoustic of Strength, celebrated resilience and inner power. When we overcome fear and take charge of our thoughts, we unlock the strength to face any challenge. Unleash your inner roar and join us on the path to a stronger self.`, imageFooter: "2021", imageURL: image4 },
  { title: image3title, description: `The 2nd Edition of TEDxIITPatna, Metamorphosis, embraced change as a constant force. It highlighted how transformation brings growth and how adapting is key. Experts explored its impact on technology, entertainment, and societal values.`, imageFooter: "2019", imageURL: image5 },
  { title: "SHEDDING OFF FEATHERS", description: `TEDxIITPatna believes that building anything new is possible when we let go of the old. Just as birds shed their feathers, allowing the new ones to embrace, a fresh start is an inevitable part of life's journey.`, imageFooter: "2016", imageURL: image6 },
];

const event_ref = ref(event_details);
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  background-color: #000000;
  background-image: linear-gradient(to top, #4c0e0e, #000000 75%);
  min-height: 100vh;
}

.page-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin-top: 80px;
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
    padding-left: 9rem;
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
  transition: all 0.3s ease;
}

.page-title-scrolled::before {
  background-image: linear-gradient(to bottom, rgba(14, 1, 1, 0.6), rgba(0, 0, 0, 0.95)), url('../assets/our_journey_images/bg-image.png');
  filter: blur(2px);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  background-color: rgba(230, 3, 3, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 10px;
  justify-content: start;
  align-items: start;
  margin-left: 3rem;
  border-radius: 10px;
}

.red-line {
  background-color: rgba(230, 3, 3, 1);
  width: 10px;
  height: 100%;
}

.red-line-container .year-line-container:first-child .red-line {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.red-line-container .year-line-container:last-child .red-line {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.image-container {
  display: flex;
  flex-direction: column;
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

.year-img {
  position: absolute;
}

.event-image {
  max-width: 900px;
  height: 511px;
  margin-bottom: 2rem;
  margin-right: 10rem;
}

.image-event-container {
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  perspective: 1000px;
}

.image-event-container-phone {
  display: none;
}

@media (max-width: 1023px) {
  .image-event-container {
    width: auto;
    margin-right: 2rem;
  }
  
  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
    gap: 4rem;
    padding: 3rem 1rem;
  }
  
  .year-img {
    width: 160px;
  }
  
  .red-line-container {
    width: 10px;
    margin-left: 1rem;
  }
  
  .page-title {
    height: 400px;
    padding-left: 3rem;
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .year-img {
    width: 125px;
  }
  
  .content-container {
    gap: 3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    padding: 2rem 1rem;
  }
  
  .red-line-container {
    width: 10px;
    margin-left: 3rem;
  }
  
  .page-title {
    height: 350px;
    padding-left: 2rem;
    font-size: 2rem;
  }
  
  .page-title::before {
    filter: blur(1.5px);
  }
}

@media (max-width: 640px) {
  .content-container {
    gap: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.5rem 0.5rem;
  }
  
  .year-img {
    width: 100px;
  }
  
  .red-line-container {
    width: 80px;
  }
  
  .page-title {
    height: 300px;
    padding-left: 1.5rem;
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .content-container {
    display: none;
  }
  
  .page-title {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    width: 100%;
    height: 250px;
    color: #ffffff;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    box-shadow: inset 0px 0px 60px 30px rgba(0, 0, 0, 0.6);
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
    filter: blur(1px);
    z-index: -1; 
  }
  
  .image-event-container-phone {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem 1rem;
    width: 100%;
    box-sizing: border-box;
    justify-items: center;
  }
  
  .year-img {
    width: 80px;
    height: auto;
  }
}

@media (max-width: 430px) {
  .page-title {
    height: 200px;
    padding-left: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  .year-img {
    width: 70px;
    height: auto;
  }
}

@media (max-width: 380px) {
  .image-event-container-phone {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 360px) {
  .page-title {
    height: 180px;
    padding-left: 0.5rem;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
  
  .year-img {
    width: 60px;
    height: auto;
  }
}

@media (max-width: 320px) {
  .page-title {
    height: 160px;
    padding-left: 0.25rem;
    font-size: 1rem;
    line-height: 1.3rem;
  }
  
  .year-img {
    width: 50px;
    height: auto;
  }
}
</style>