<template>
    <Nav />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Molend">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700">
  
  <div class="prisms-container">

     <!-- Back arrow -->
    <div class="back-arrow" @click="goBack">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    
    <div class="upper">
      <h1 class="hero-title">
          PRISMS<span class="x">X</span> &nbsp; OF<br>
          PERCEPTION
        </h1>
        
      <!-- Main prism image beside the title -->
      <div class="prism-section">
      <picture>
      <source srcset="@/assets/images/poster-square-2023.png" media="(max-width: 768px)" />
      <img
      src="@/assets/images/Prism.png"
      alt="Prism Image"
      class="prism-main"
      />
     </picture>
     </div>     
    </div>

        
        <div class="content-section">
          <h2 class="section-title">PRISMS OF PERCEPTION</h2>
          
          <p class="content-text">
            We experience the world not through clear glass, but through
            prisms — shaped by memory, identity, culture, and belief. Each
            of us carries a lens that bends what we see, coloring our
            understanding with nuance, distortion, and depth we choose to see.
          </p>
          
          <p class="content-text">
            <span class="highlight">Prisms of Perception</span> invites us to question certainty, embrace
            complexity, and find meaning in multiplicity. Sometimes, the
            shift we need isn't in what we see — but in how we choose to see
            it.
          </p>
        
    </div>
    <div class="top-arrow">
      <button @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>
      </button>
    </div>

   
  </div>
   <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import HomeNav from '@/components/Home.Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PrismsView',
  components: {
    Nav,
    Footer,
    HomeNav,
  },
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
    goBack() {
      // Navigate back to our-journey page
      this.$router.push('/our-journey')
    },
    scrollToTop() {
      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= (1.51 * window.innerHeight)
    },
    formatTime(val) {
      return val >= 10 ? String(val) : "0" + String(val)
    },
    countdownLogic(interval) {
      const now = new Date()
      const deltaT = Math.trunc((this.countdownTarget.getTime() - now.getTime()) / 1000)

      if (deltaT < 0) {
        return
      }

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
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
@import '@/assets/css/custom-prism.css';

</style>
