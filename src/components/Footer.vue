<template>
  <footer class="footer">
    <!-- Rotated black square in top-left -->
    <div class="footer-left-square"></div>

    <!-- Main Footer Content -->
    <div class="footer-container">
      <!-- Left: Logo and TED info -->
      <div class="footer-section footer-left">
        <div class="footer-logo">
          <!-- <span class="red"><strong>TED</strong><sup>x</sup></span><span class="small">IITPatna</span> -->
          <!-- <p class="subtext"><span class="red">X</span> = independently organized TED event</p> -->
          <img src="@/assets/images/tedx_iitplogo2023.png" alt="TEDxIITPatna" class="logo" />
        </div>
        <ul class="footer-links">
          <li><a href="https://www.ted.com/" target="_blank">TED Website</a></li>
          <li><a href="https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/tedx-rules">Terms & Conditions</a></li>
          <li><a href="https://www.ted.com/about/programs-initiatives/tedx-program">About TEDx</a></li>
        </ul>
        <div class="footer-links-mobile">
          <div class="footer-links-container">
            <span><a href="https://www.ted.com/" target="_blank">TED Website</a></span>
            <span><a href="https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/tedx-rules">Terms & Conditions</a></span>
            <span><a href="https://www.ted.com/about/programs-initiatives/tedx-program">About TEDx</a></span>
          </div>
        </div>
      </div>

      <!-- Center: Socials and Contact -->
      <div class="footer-section footer-section-no footer-center">
        <h2>Follow Us</h2>
        <div class="social-icons">
          <a href="https://www.instagram.com/tedxiitpatna/" target="_blank"><img src="@/assets/icons/instagram-icon-black.png" /></a>
          <a href="https://twitter.com/tedxiitpatna" target="_blank"><img src="@/assets/icons/twitter-icon-black.png" /></a>
          <a href="https://www.linkedin.com/company/tedxiitpatna" target="_blank"><img src="@/assets/icons/linkedin-icon-black.png" /></a>
          <a href="https://www.facebook.com/tedxiitpatna/" target="_blank"><img src="@/assets/icons/facebook-icon-black.png" /></a>
        </div>
        <a href="mailto:tedxiitpatna@gmail.com" class="email-link">tedxiitpatna@gmail.com</a>
        <hr class="footer-divider" />
        <h1 class="contact-us">Contact Us</h1>
      </div>

      <!-- Right: Quick Links -->
      <div class="footer-section footer-section-no footer-right">
        <h2>Quick Links</h2>
        <ul class="footer-links">
          <li><a href="http://localhost:8080/about">About us</a></li>
          <li><a href="http://localhost:8080/speakers">Speakers</a></li>
          <li><a href="http://localhost:8080/funfair">Pre-event</a></li>
          <li><a href="http://localhost:8080/our-journey">Past events</a></li>
          <li><a href="#">Buy Tickets</a></li>
        </ul>
      </div>
    </div>

    <!-- Right: Quick Links -->
      <div class="footer-section-mobile footer-right-mobile">
        <h2 style="font-weight: normal;">Quick Links</h2>
        <ul class="footer-links-mobile">
          <li><a href="http://localhost:8080/about"><p style="color: white; font-weight: bold">About us</p></a></li>
          <li><a href="http://localhost:8080/speakers"><p style="color: white; font-weight: bold">Speakers</p></a></li>
          <li><a href="http://localhost:8080/funfair"><p style="color: white; font-weight: bold">Pre-event</p></a></li>
          <li><a href="http://localhost:8080/our-journey"><p style="color: white; font-weight: bold">Past events</p></a></li>
          <li><a href="#"><p style="color: white; font-weight: bold">Buy Tickets</p></a></li>
        </ul>
      </div>

    <!-- Center: Socials and Contact -->
      <div class="footer-section-mobile footer-center-mobile">
        <h2 class="contact-us-mobile">Contact Us</h2>
        <hr class="footer-divider-mobile" />
        <a href="mailto:tedxiitpatna@gmail.com" class="email-link-mobile">tedxiitpatna@gmail.com</a>
        <h2 style="font-weight: normal;">Follow Us</h2>
        <br>
        <div class="social-icons-mobile">
          <a href="https://www.instagram.com/tedxiitpatna/" target="_blank"><img src="@/assets/icons/instagram-icon-black.png" /></a>
          <a href="https://twitter.com/tedxiitpatna" target="_blank"><img src="@/assets/icons/twitter-icon-black.png" /></a>
          <a href="https://www.linkedin.com/company/tedxiitpatna" target="_blank"><img src="@/assets/icons/linkedin-icon-black.png" /></a>
          <a href="https://www.facebook.com/tedxiitpatna/" target="_blank"><img src="@/assets/icons/facebook-icon-black.png" /></a>
        </div>
        
      </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-row">
        <span>*This Independent TEDx Event Is Operated Under License From TED.</span>
        <span class="copyright">© 2025 TEDxIITPatna. All rights reserved.</span>
      </div>
    </div>

    <div class="footer-bottom-mobile">
      <div class="footer-bottom-row-mobile">
        <p class="first">*This Independent TEDx Event Is Operated Under License From TED.</p>
        <p class="second">© 2025 TEDxIITPatna. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
@import '@/assets/css/footer.css';
@import '@/assets/css/footer.mobile.css';
</style>
