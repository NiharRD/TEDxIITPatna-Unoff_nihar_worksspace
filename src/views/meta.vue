<template>
    <Nav />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=EB+Garamond:wght@400;500;600&display=swap">
  <div class="theme-bg">
    <!-- Back arrow -->
    <div class="back-arrow" @click="goBack">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Hero section with title and butterfly -->
    <div class="upper">
      <h1>METAMORPHOSIS</h1>
      <div class="butterfly">
  <picture>
    <source srcset="@/assets/images/poster-square-2010.png" media="(max-width: 768px)" />
    <img src="@/assets/images/butterfly.jpg" alt="Butterfly Image" class="butter" />
  </picture>
</div>

    </div>

    <!-- Content section -->
    <div class="content-section">
      <h2 class="section-title">METAMORPHOSIS </h2>
      <div class="content-text">
        <p class="first-paragraph">
          The 2nd edition of TEDxIIT Patna, <strong>Metamorphosis</strong>, embraced the idea that permanence is an illusion — that everything in existence is in a constant state of becoming. Change is not something to resist, but to understand; it often holds within it the potential for growth, renewal, and transformation.
        </p>
        <p class="second-paragraph">
          The edition brought together experts who reflected on the impact of rapid, often disruptive changes in technology, entertainment, and — most profoundly — on people and societal values.
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
  </div>
   <Footer/>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import HomeNav from '@/components/Home.Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MetamorphosisView',
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

      countdownTarget: new Date("2022-09-03T00:00:00.000+05:30"), // target date for countdown
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
      const deltaT = Math.trunc((this.countdownTarget.getTime() - now.getTime()) / 1000) // in seconds

      if (deltaT < 0) {
        // closeInterval(interval)
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
@import '@/assets/css/meta.css';

/* Add cursor pointer to back arrow */
.back-arrow {
  cursor: pointer;
}

.back-arrow:hover {
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

/* Add cursor pointer to top arrow button */
.top-arrow button {
  cursor: pointer;
}
</style>
