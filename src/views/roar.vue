<template>
  <Nav />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700">
  <div class="roar-theme">
    <!-- Back arrow -->
    <div class="roar-back-arrow" @click="goBack">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Main content container -->
    <div class="roar-container">
      <!-- Hero section with header and image side by side -->
      <div class="roar-hero">
        <!-- Header section with ROAR title - Left side -->
        <div class="roar-header">
          <img src="@/assets/images/roar1.png" class="roar-logo" alt="Roar Logo"/>
        </div>

        <!-- Visual section with image - Right side -->
        <div class="roar-photo">
          <!-- Desktop image -->
          <img src="@/assets/images/poster-bg-2021.png" alt="Roar Poster Desktop" class="roar-desktop-img" />
          <!-- Mobile/Tablet image -->
          <img src="@/assets/images/poster-bg-2024.png" alt="Roar Poster Mobile" class="roar-mobile-img" />
        </div>
      </div>

      <!-- Content section -->
      <div class="roar-content">
        <h2 class="roar-title">ROAR -2021</h2>
        <div class="roar-text">
          <p class="roar-para1">
            The 3rd edition of <span class="roar-highlight">TEDxIIT Patna</span>, <strong>Roar – The Acoustics of Strength</strong>, celebrated the enduring spirit of resilience and the inner voice that refuses to be silenced. It echoed the truth that the stronger one's conviction, the greater their untapped potential.
          </p>
          <p class="roar-para2">
            Roar was a call to liberate the self, summon spiritual courage, and embrace a mindset forged not in silence, but in the sound of fearless becoming.
          </p>
        </div>
      </div>

      <!-- Top arrow -->
      <div class="roar-top-arrow">
        <button @click="scrollToTop">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="roar-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
          </svg>
        </button>
      </div> 
    </div>
  </div>
  <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import HomeNav from '@/components/Home.Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'RoarView',
  components: { Nav, Footer, HomeNav },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= (1.51 * window.innerHeight),
      countdownTarget: new Date("2022-09-03T00:00:00.000+05:30"),
      displayDays: 0,
      displayHours: 0,
      _days: 60 * 60 * 24,
      _hours: 60 * 60,
    }
  },
  methods: {
    goBack() { this.$router.push('/our-journey') },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= (1.51 * window.innerHeight)
    },
    formatTime(val) { return val >= 10 ? String(val) : "0" + String(val) },
    countdownLogic(interval) {
      const now = new Date()
      const deltaT = Math.trunc((this.countdownTarget.getTime() - now.getTime()) / 1000)
      if (deltaT < 0) return
      const days = Math.trunc(deltaT / this._days)
      const hours = Math.trunc((deltaT - days * this._days) / this._hours)
      this.displayDays = days
      this.displayHours = hours
    }
  },
  created() {
    this.countdownLogic()
    const timer = setInterval(() => this.countdownLogic(timer), 1000)
  },
  mounted() { window.addEventListener('resize', this.onResize) },
  beforeDestroy() { window.removeEventListener('resize', this.onResize) }
}
</script>

<style scoped>
@import '@/assets/css/roar.css';

</style>
