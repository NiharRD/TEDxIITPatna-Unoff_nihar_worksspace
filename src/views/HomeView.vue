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
      <p class="theme-text">
        We are thrilled to unveil the theme for the 7th edition of TEDxIITPatna:
        <p style="font-weight: bold;">"Kaleidoscopic Interludes"</p>
      </p>
      <p>
        "Kaleidoscopic" evokes vibrant, ever-shifting patterns-glimpses of identity refracted through time and experience. 
        "Interludes" suggests pauses in life's rhythm-transitional moments that carry quiet transformation.
      </p>
      <p>
        Kaleidoscopic Interludes invites us to explore the subtle shifts that shape who we are-not through grand events, but through passing decisions, contradictions, and silences. 
        It speaks to the fragments in between: the times when we are not fixed, but continually becoming.
      </p>
      <p>
        In these fluid intervals, where identity moves between clarity and ambiguity, we uncover the quiet beauty of being unfinished. 
        This theme calls us to embrace complexity and reflect on the spaces where meaning flickers into view.
      </p>
    </div>

    <!-- Theme Video -->
    <section class="theme-video-section">
      <div class="theme-video-text">
        <h1>Theme Video</h1>
        <p>
          Our theme shapes the way we look at ideas, people, and the future. Watch
          the video to experience the thought that fuels TEDxIITPatna 2025.
        </p>
      </div>

      <!-- Inline YouTube Embed -->
      <div class="youtube-embed">
        <!-- Thumbnail with play button -->
        <div
          v-if="!videoPlaying"
          class="youtube-thumbnail"
          @click="videoPlaying = true"
        >
          <img :src="thumbnailUrl" alt="Theme Video" />
          <div class="play-button">▶</div>
        </div>

        <!-- Responsive wrapper for iframe -->
        <div v-else class="video-wrapper">
          <iframe
            :src="videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="speaker-application">
      <div class="title">Interested In Becoming a Speaker?</div>
      <a href="/contact-us" class="link" target="_blank">Contact Us</a>
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

      <!-- Row 1 -->
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

      <!-- Row 2 -->
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
</template>

<script>
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

      countdownTarget: new Date("2022-09-03T00:00:00.000+05:30"),
      displayDays: 0,
      displayHours: 0,
      _days: 60 * 60 * 24,
      _hours: 60 * 60,

      // Video stuff
      videoPlaying: false,
      videoId: "T6eNDEogrZI", // your theme video ID
      startTime: 10,
    };
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}?start=${this.startTime}&autoplay=1`;
    },
    thumbnailUrl() {
      return `https://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`;
    },
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
      );
      if (deltaT < 0) return;

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

.theme-video-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 10%;
  gap: 40px;
  background: black;
  text-align: center;
}

.theme-video-text {
  max-width: 600px;
}
.theme-video-text h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.theme-video-text p {
  font-size: 18px;
  color: #fff;
}

/* Video embed box */
.youtube-embed {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
}

/* Responsive 16:9 box */
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Thumbnail */
.youtube-thumbnail {
  position: relative;
  cursor: pointer;
}
.youtube-thumbnail img {
  width: 100%;
  display: block;
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
