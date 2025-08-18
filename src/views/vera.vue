<template>
    <Nav/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700">
  <div class="vera-theme">
    <!-- Back arrow -->
    <div class="vera-back" @click="goBack">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Main content container -->
    <div class="vera-wrapper">
      <!-- Hero section with header and image side by side -->
      <div class="vera-hero">
        <!-- Header section with ROAR title - Left side -->
        <div class="vera-header">
          <img src="@/assets/images/TEXT.png" class="vera-logo" alt="Veiled Veracity Title" />
        </div>

        <!-- Visual section with image - Right side -->
        <div class="vera-hero-img">
          <!-- Desktop image -->
          <img src="@/assets/images/tree.png" alt="Event Tree Illustration" class="vera-desktop-img" />
          <!-- Mobile/Tablet image -->
          <img src="@/assets/images/treemobile.png" alt="Event Tree Mobile Illustration" class="vera-mobile-img" />
        </div>
      </div>

      <!-- Content section -->
      <div class="vera-content">
        <h2 class="vera-title">VEILED VERACITY</h2>
        <div class="vera-text">
          <p class="vera-paragraph">
            "Veiled Veracity" reminds us that amidst confusion and uncertainty, there's always the beacon of hope guiding us towards clarity and strength. It challenges us to confront the illusions that shape our lives and embrace the courage to seek out authentic understanding. <br> "Veiled" suggests that beneath the surface lies something waiting to be revealed, similar to a treasure hidden behind a curtain. "Veracity" underscores the importance of truthfulness and honesty in our exploration.
         </p>
        </div>

        <!-- Scroll to Top -->
        <div class="vera-top-btn">
          <button @click="scrollToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
          </button>
        </div>

        <h2 class="vera-title vera-gallery-title">EVENT GALLERY</h2>

        <!-- Event Gallery Grid -->
        <div class="vera-gallery">
          <div class="vera-gallery-item"><img src="@/assets/images/1000173358.jpg" alt="Gallery Image 1"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000173497.jpg" alt="Gallery Image 2"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000173499.jpg" alt="Gallery Image 3"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000173507.jpg" alt="Gallery Image 4"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000173502.jpg" alt="Gallery Image 5"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000173501.jpg" alt="Gallery Image 6"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000174005.jpeg" alt="Gallery Image 7"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000174015.jpeg" alt="Gallery Image 8"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175124.jpg" alt="Gallery Image 9"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175125.jpg" alt="Gallery Image 10"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175126.jpg" alt="Gallery Image 11"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175127.jpg" alt="Gallery Image 12"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175129.jpg" alt="Gallery Image 13"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175127.jpg" alt="Gallery Image 14"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175129.jpg" alt="Gallery Image 15"></div>
          <div class="vera-gallery-item"><img src="@/assets/images/1000175129.jpg" alt="Gallery Image 16"></div>
        </div>
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
  name: 'VeraView',
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
@import '@/assets/css/vera.css';
</style>
