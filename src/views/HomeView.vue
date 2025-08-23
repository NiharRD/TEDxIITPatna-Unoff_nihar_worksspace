<template>
  <Nav />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Molend"
  />
  <div class="theme-bg">
    <div class="photo">
      <img src="@/assets/images/kaleidoscopic_interludes.png" />
    </div>

    <div class="theme">
      <p class="theme-text"><p>We are thrilled to unveil the theme for the 7th edition of TEDxIITPatna: <p style="font-weight: bold;">"Kaleidoscopic Interludes"</p></p><p>"Kaleidoscopic" evokes vibrant, ever-shifting patterns—glimpses of identity refracted through time and experience. "Interludes" suggests pauses in life's rhythm—transitional moments that carry quiet transformation.</p><p>Kaleidoscopic Interludes invites us to explore the subtle shifts that shape who we are—not through grand events, but through passing decisions, contradictions, and silences. It speaks to the fragments in between: the times when we are not fixed, but continually becoming.</p><p>In these fluid intervals, where identity moves between clarity and ambiguity, we uncover the quiet beauty of being unfinished. This theme calls us to embrace complexity and reflect on the spaces where meaning flickers into view.</p></p>
    </div>

    <section class="theme-video-section">
      <div class="theme-video-text">
        <h1>Theme Video</h1>
        <p>Our theme shapes the way we look at ideas, people, and the future. Watch the video to experience the thought that fuels TEDxIITPatna 2025.</p>
        <a href="https://www.instagram.com/reel/DNsmdUtWKzG/" class="watch-btn">Watch Now</a>
      </div>
      <div class="theme-video-placeholder">
        <img src="@/assets/images/thumbnail.png" />
      </div>
    </section>

    <section class="theme-video-section-mobile">
      <div class="theme-video-text-mobile">
        <h1>Theme Video</h1>
        <p>Our theme shapes the way we look at ideas, people, and the future. Watch the video to experience the thought that fuels TEDxIITPatna 2025.</p>
        <a href="https://www.instagram.com/reel/DNsmdUtWKzG/" class="watch-btn-mobile">Watch Now</a>
      </div>
      <div class="theme-video-placeholder-mobile">
        <img src="@/assets/images/thumbnail.png" />
      </div>
    </section>

    <section class="speaker-application">
      <div class="title">Interested In Becoming a Speaker?</div>
      <a href="/contact-us" class="link">Contact Us</a>
    </section>

    <div class="sponsor">
      <h1 class="section-heading">OUR SPONSORS</h1>
      <div class="images">
        <img src="@/assets/images/sponsor_1.png" />
        <img src="@/assets/images/sponsor_2.png" />
      </div>
    </div>

    <div class="partner">
      <h1 class="section-heading">OUR PREVIOUS PARTNERS</h1>

      <!-- Row 1: 9 Images, Show 4 at a time -->
      <div class="scroll-row">
        <div class="scroll-track">
          <img src="@/assets/images/partner_1.png" />
          <img src="@/assets/images/partner_2.png" />
          <img src="@/assets/images/partner_3.png" />
          <img src="@/assets/images/partner_4.png" />
          <img src="@/assets/images/partner_5.png" />
          <img src="@/assets/images/partner_6.png" />
          <img src="@/assets/images/partner_7.jpg" />
          <img src="@/assets/images/partner_8.png" />
          <img src="@/assets/images/partner_9.png" />

          <!-- Duplicate for infinite scroll -->
          <img src="@/assets/images/partner_1.png" />
          <img src="@/assets/images/partner_2.png" />
          <img src="@/assets/images/partner_3.png" />
          <img src="@/assets/images/partner_4.png" />
          <img src="@/assets/images/partner_5.png" />
          <img src="@/assets/images/partner_6.png" />
          <img src="@/assets/images/partner_7.jpg" />
          <img src="@/assets/images/partner_8.png" />
          <img src="@/assets/images/partner_9.png" />
        </div>
      </div>

      <!-- Row 2: 9 Images, Show 3 at a time -->
      <div class="scroll-row">
        <div class="scroll-track">
          <img src="@/assets/images/partner_10.png" />
          <img src="@/assets/images/partner_11.png" />
          <img src="@/assets/images/partner_12.png" />
          <img src="@/assets/images/partner_13.png" />
          <img src="@/assets/images/partner_14.jpg" />
          <img src="@/assets/images/partner_15.png" />
          <img src="@/assets/images/partner_16.png" />
          <img src="@/assets/images/partner_17.png" />
          <img src="@/assets/images/partner_18.png" />
          <img src="@/assets/images/partner_19.png" />

          <!-- Duplicate for infinite scroll -->
          <img src="@/assets/images/partner_10.png" />
          <img src="@/assets/images/partner_11.png" />
          <img src="@/assets/images/partner_12.png" />
          <img src="@/assets/images/partner_13.png" />
          <img src="@/assets/images/partner_14.jpg" />
          <img src="@/assets/images/partner_15.png" />
          <img src="@/assets/images/partner_16.png" />
          <img src="@/assets/images/partner_17.png" />
          <img src="@/assets/images/partner_18.png" />
          <img src="@/assets/images/partner_19.png" />
        </div>
      </div>
    </div>

    <Footer />
  </div>

  <!-- <section :class="['speaker-application', this.screenWidth > 560 ? 'web' : 'mobile']">
    <div class="title">Interested in becoming a speaker?</div>
    <a href="https://forms.gle/jhDwBQmSFid4jjPZ6" target="_blank" class="link">Speaker Applications →</a>
  </section> -->
</template>

<script scoped>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import HomeNav from "@/components/Home.Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Footer,
    HomeNav,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= 1.51 * window.innerHeight,

      countdownTarget: new Date("2022-09-03T00:00:00.000+05:30"), // target date for countdown
      displayDays: 0,
      displayHours: 0,
      _days: 60 * 60 * 24,
      _hours: 60 * 60,
    };
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      this.showWebView = window.innerWidth >= 1.51 * window.innerHeight;
    },
    formatTime(val) {
      return val >= 10 ? String(val) : "0" + String(val);
    },
    countdownLogic(interval) {
      const now = new Date();
      const deltaT = Math.trunc(
        (this.countdownTarget.getTime() - now.getTime()) / 1000
      ); // in seconds

      if (deltaT < 0) {
        // closeInterval(interval)
        return;
      }

      const days = Math.trunc(deltaT / this._days);
      const hours = Math.trunc((deltaT - days * this._days) / this._hours);

      this.displayDays = days;
      this.displayHours = hours;
    },
  },
  created() {
    this.countdownLogic();
    const timer = setInterval(() => this.countdownLogic(timer), 1000);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
@import "@/assets/css/home.css";
@import "@/assets/css/home.mobile.css";
</style>
<style scoped>
.theme-bg {
  background-color: #000000;
  overflow-x: hidden;
  color: white;
}
</style>
