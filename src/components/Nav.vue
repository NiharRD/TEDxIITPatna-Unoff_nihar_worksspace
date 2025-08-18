<template>
    <div class="nav-container" :class="{ 
        'nav-scrolled': isScrolled, 
        'nav-azure': isInfinitePage 
    }">
        <div class="nav-logo-container">
            <a href="http://localhost:8080/">
                <img src="../assets/navbar/tedx-logo.svg" class="nav-logo" alt="TEDx Logo"/>
            </a>
        </div>

        <div class="navbar-items-container">
            <a class="navbar-item" href="http://localhost:8080/">Home</a>
            <a class="navbar-item" href="http://localhost:8080/about">About Us</a>
            <div class="navbar-item event" @click="handleEvent">
                Events
                <img src="../assets/navbar/down-svg.svg" class="dropdown-icon" :class="{ 'event-click': clickEvent, 'event-reverse-click': !clickEvent && count > 0 }" alt="Dropdown Arrow"/>
            </div>
            
            <!-- Events Dropdown Menu -->
            <div class="events-dropdown" :class="{ 'show': clickEvent }">
                <div class="dropdown-section">
                    <a class="dropdown-title" href="http://localhost:8080/funfair">Pre-Events</a>
                </div>
                <div class="dropdown-divider"></div>
                <div class="dropdown-section">
                    <a class="dropdown-title" href="http://localhost:8080/our-journey">Past Editions</a>
                </div>
            </div>
            <a class="navbar-item" href="http://localhost:8080/speakers">Speakers</a>
            <div class="navbar-item navbar-buy-tickets"><a href="http://localhost:8080/buyMerchTickets">Buy Tickets</a></div>
        </div>
    </div>

    <div ref="menuButton" class="menu-container" :class="{ 'is-active': clickMenu }" @click="handleMenuClicked">
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
    </div>

    <div ref="sidebar" class="sidebar-menu" :class="{ 
        'is-open': clickMenu,
        'sidebar-azure': isInfinitePage 
    }">
        <div class="sidebar-item"><a href="http://localhost:8080/">Home</a></div>
        <div class="sidebar-item"><a href="http://localhost:8080/about">About Us</a></div>
        <div class="sidebar-item event" @click="handleSidebarEvent">
            Events
            <img src="../assets/navbar/down-svg.svg" class="dropdown-icon" :class="{ 'event-click': clickSidebarEvent, 'event-reverse-click': !clickSidebarEvent && countSidebar > 0 }" alt="Dropdown Arrow"/>
        </div>
        
        <!-- Sidebar Events Dropdown Menu -->
        <div class="sidebar-events-dropdown" :class="{ 'show': clickSidebarEvent }">
            <div class="dropdown-section">
                <div class="dropdown-title"><a href="http://localhost:8080/funfair">Pre-Events</a></div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-section">
                <div class="dropdown-title"><a href="http://localhost:8080/our-journey">Past Editions</a></div>
            </div>
        </div>
        <div class="sidebar-item"><a href="http://localhost:8080/speakers">Speakers</a></div>
        <div class="sidebar-item"><a href="http://localhost:8080/buyMerchTickets">Buy Tickets</a></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const clickEvent = ref(false);
const count = ref(0);
const isScrolled = ref(false);
const clickMenu = ref(false);
const clickSidebarEvent = ref(false);
const countSidebar = ref(0);

const sidebar = ref(null);
const menuButton = ref(null);

// Get current route
const route = useRoute();

// Computed property to check if current page is infinite
const isInfinitePage = computed(() => {
    return route.name === 'InfiniteView' || route.path === '/infinite' || route.path.includes('infinite');
});

const handleEvent = () => {
  clickEvent.value = !clickEvent.value;
  count.value++;
};

const handleSidebarEvent = () => {
    clickSidebarEvent.value = !clickSidebarEvent.value;
    countSidebar.value++;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const handleMenuClicked = () => {
    clickMenu.value = !clickMenu.value;
};

const closeOnClickOutside = (event) => {
    if (
        sidebar.value &&
        !sidebar.value.contains(event.target) &&
        menuButton.value &&
        !menuButton.value.contains(event.target)
    ) {
        clickMenu.value = false;
    }
};

watch(clickMenu, (isOpen) => {
    if (isOpen) {
        document.addEventListener('click', closeOnClickOutside, true);
    } else {
        document.removeEventListener('click', closeOnClickOutside, true);
    }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', closeOnClickOutside, true);
});
</script>

<style>
:root {
    --sidebar-width: 280px;
}

body {
    font-family: 'Inter', sans-serif;
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 1); /* Default opaque black */
    transition: all 0.3s ease;
}

/* Azure background for infinite page */
.nav-container.nav-azure {
    background-color: rgb(225, 225, 225); /* Azure color - opaque at start */
}

.nav-scrolled {
    background-color: rgba(0, 0, 0, 0.85); /* Transparent when scrolled */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.nav-logo-container {
    max-width: 315px;
    max-height: 40px;
}

.nav-logo {
    width: 190px;
    height: auto;
}

.navbar-items-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: white;
}

/* Change text color to black for azure background */
.nav-azure .navbar-items-container {
    color: black;
}

.navbar-item {
  position: relative;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  letter-spacing: 1px;
  cursor: pointer;
}

.sidebar-item {
    position: relative;
    color: white;
    font-size: 22px;
    padding: 1rem;
    cursor: pointer;
    width: 80%;
    text-align: center;
}

/* Change sidebar text color for azure theme */
.sidebar-azure .sidebar-item {
    color: black;
}

/* --- MODIFIED CSS FOR HOVER EFFECT --- */
.navbar-item::after, .sidebar-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: red;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.navbar-item:hover::after, .sidebar-item:hover::after {
  width: 100%;
  left: 0;
}
/* ------------------------------------ */

.navbar-buy-tickets {
    background-color: red;
    border-radius: 50px;
    padding: 0.6rem 1.5rem;
}

.navbar-buy-tickets:hover {
    background-color: white;
    color: red;
    border-radius: 50px;
    padding: 0.6rem 1.5rem;
}

/* Prevent hover effect on buttons */
.navbar-buy-tickets:hover::after, .sidebar-buy-tickets:hover::after {
    width: 0;
}

.event {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropdown-icon {
    width: 12px;
    height: 12px;
    filter: brightness(0) invert(1);
    transition: transform 0.2s ease-in-out;
}

/* Change dropdown icon color for azure background */
.nav-azure .dropdown-icon {
    filter: brightness(0) invert(0); /* Black instead of white */
}

.sidebar-azure .dropdown-icon {
    filter: brightness(0) invert(0); /* Black instead of white */
}

.event-click {
    transform: rotate(180deg);
}

.event-reverse-click {
    transform: rotate(0deg);
}

/* Events Dropdown Menu Styles */
.events-dropdown {
    position: absolute;
    top: calc(100% + 2px);
    left: 70%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.98));
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 12px;
    padding: 1.5rem;
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.15);
    z-index: 1001;
}

.events-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

.dropdown-section {
    position: relative;
    padding: 1rem 0;
    text-align: center;
}

.dropdown-title {
    color: white;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: color 0.2s ease;
}

.dropdown-title:hover {
    color: #ffcccc;
}

.dropdown-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    margin: 0.5rem 0;
}

/* Decorative Petal Shapes */
.petal-shape {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #dc2626;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    opacity: 0.7;
    animation: float 3s ease-in-out infinite;
}

.petal-1 {
    top: 10px;
    right: 20px;
    animation-delay: 0s;
}

.petal-2 {
    top: 25px;
    left: 15px;
    animation-delay: 0.5s;
}

.petal-3 {
    top: 40px;
    right: 30px;
    animation-delay: 1s;
}

.petal-4 {
    bottom: 15px;
    left: 25px;
    background: #ef4444;
    animation-delay: 1.5s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-5px) rotate(5deg);
    }
}

/* Sidebar Events Dropdown Styles */
.sidebar-events-dropdown {
    width: 80%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.98));
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 8px;
    padding: 0;
    margin: 0;
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Azure theme for sidebar dropdown */
.sidebar-azure .sidebar-events-dropdown {
    background: linear-gradient(135deg, rgba(240, 255, 255, 0.95), rgba(200, 240, 255, 0.98));
    border: 1px solid rgba(0, 0, 0, 0.15);
}

.sidebar-azure .sidebar-events-dropdown .dropdown-title {
    color: black;
}

.sidebar-azure .sidebar-events-dropdown .dropdown-title:hover {
    color: #333333;
}

.sidebar-azure .sidebar-events-dropdown .dropdown-divider {
    background: rgba(0, 0, 0, 0.3);
}

.sidebar-events-dropdown.show {
    opacity: 1;
    visibility: visible;
    max-height: 200px;
    padding: 1rem;
    margin: 0.5rem 0;
}

.sidebar-events-dropdown .dropdown-section {
    padding: 0.75rem 0;
}

.sidebar-events-dropdown .dropdown-title {
    font-size: 18px;
}

.sidebar-events-dropdown .petal-shape {
    width: 16px;
    height: 16px;
}

.menu-container, .sidebar-menu {
    display: none;
}

.sidebar-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: var(--sidebar-width);
    background-color: rgba(20, 20, 20, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 1010;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Azure background for sidebar on infinite page */
.sidebar-menu.sidebar-azure {
    background-color: rgba(240, 255, 255, 0.85);
}

.sidebar-menu.is-open {
    transform: translateX(0);
}

.sidebar-buy-tickets {
    background-color: red;
    border-radius: 50px;
    margin-top: 1rem;
}

@media( max-width: 1023px){
    .navbar-items-container {
        display: none;
    }
    
    .sidebar-menu {
        display: flex;
    }
    
    .menu-container {
        display: flex;
        position: fixed;
        top: 1.7rem;
        right: 2rem;
        width: 24px;
        height: 18px;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        z-index: 1011;
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .menu-line {
        width: 100%;
        height: 3px;
        background-color: white;
        border-radius: 2px;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform-origin: center;
    }

    /* Change hamburger menu color for azure background */
    .nav-azure ~ .menu-container .menu-line {
        background-color: black;
    }
    
    .menu-container.is-active {
        transform: translateX(calc(-1 * var(--sidebar-width) + 50px));
    }
    
    .menu-container.is-active .menu-line:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
    }
    
    .menu-container.is-active .menu-line:nth-child(2) {
        opacity: 0;
    }
    
    .menu-container.is-active .menu-line:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
    }
    
    @media (max-width: 768px) {
        .menu-container.is-active {
            transform: none;
            right: 1.5rem;
        }
    }
}

@media(max-width: 480px){
    .nav-container {
        padding: 1rem 1.5rem;
    }
    
    .nav-logo {
        width: 150px;
    }
    
    .menu-container {
        right: 1.5rem;
    }
}
</style>
