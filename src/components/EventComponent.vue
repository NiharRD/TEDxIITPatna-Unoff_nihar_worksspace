<template>
  <div class="event-box" ref="eventBoxRef" :class="{ 'is-visible': isVisible }">
    <div class="image-footer-container">
      <div class="image-container">
        <img :src="imageUrl" />
      </div>
      <div class="event-footer-container">
        <h1>{{ imageFooter }}</h1>
      </div>
    </div>
    <div class="description-container">
      <h2>{{ eventHeading }}</h2>
      <p>{{ eventDescription }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps(['imageUrl', 'imageFooter', 'eventHeading', 'eventDescription']);

const eventBoxRef = ref(null);
const isVisible = ref(false);
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(eventBoxRef.value); 
      }
    },
    {
      threshold: 0.1,
    }
  );
  if (eventBoxRef.value) {
    observer.observe(eventBoxRef.value);
  }
});
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container {
  width: 356px;
  height: 268px;
}

.image-footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.event-footer-container {
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 356px;
  height: 76px;
  font-family: 'IM FELL French Canon';
  font-size: 20px;
}

.description-container {
  color: white;
  margin-left: 5rem;
}

.description-container h2 {
  font-family: 'IM_FELL_French_Canon';
  font-size: 48px;
  display: flex;
  justify-content: start;
  margin-bottom: 13px;
  padding-bottom: 1rem;
  text-transform: uppercase;
  width: 24rem;
}

.description-container p {
  font-family: 'EB_Garamond';
  letter-spacing: 2px;
  font-size: 24px;
  width: 434px;
  display: flex;
  justify-content: start;
}

.event-box {
  display: flex;
  flex-direction: row;
  margin-bottom: 8rem;
  padding: 4rem;
  height: 512px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 1px solid white;
  opacity: 0;
  filter: blur(4px);
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, filter 0.6s ease-out,
    transform 0.4s ease, box-shadow 0.4s ease;
}

.event-box.is-visible {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

.event-box.is-visible:hover {
  cursor: pointer;
  transform: translateZ(25px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}
</style>