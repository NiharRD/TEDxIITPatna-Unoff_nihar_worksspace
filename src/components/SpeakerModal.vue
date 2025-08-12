<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">✕</button>
      <div class="modal-body">
        <img :src="speaker.image" class="modal-image" />
        <div class="modal-text">
          <h2 class="laptop">ABOUT</h2>
          <h2 class="mobile">{{ speaker.name }}</h2>
          <p>{{ speaker.description }}</p>
          <p class="title-line">Spoke on : <span class="title-placeholder">{{ speaker.title }}</span></p>
          <a :href="speaker.youtubeLink" target="_blank">
            <button class="yt-btn">Watch Talk on YouTube</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['speaker']
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 16px;
}

.modal-content {
  background: #1c1c1c;
  border: 1px solid #aaa;
  border-radius: 12px;
  padding: 24px;
  max-width: 850px;
  width: 100%;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-body {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.modal-image {
  width: 200px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
}

.modal-text {
  flex: 1;
  min-width: 0;
}

.modal-text h2 {
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 12px;
  /* display: inline-block; */
  padding-bottom: 4px;
  letter-spacing: 0.5px;
}

.modal-text p {
  font-size: 15px;
  line-height: 1.6;
  color: #d0d0d0;
  font-family: "Times New Roman", Times, serif;
}

.yt-btn {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 8px 18px;
  margin: 16px 0 8px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.yt-btn:hover {
  background-color: #cc0000;
}

.title-line {
  margin-top: 16px;
  font-weight: 600;
  color: #ffffff;
}

.title-placeholder {
  color: #ff4c4c;
  font-style: italic;
  margin-left: 6px;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 20px;
  background: #ff4c4c;
  color: white;
  border: 2px solid white;
  border-radius: 20%;
  width: 35px;
  height: 35px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 12px;
  }
  
  .modal-content {
    padding: 20px 16px;
    margin: 0;
    border-radius: 8px;
    max-height: 95vh;
  }
  
  .modal-body {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  
  .modal-image {
    width: 160px;
    align-self: center;
  }
  
  .modal-text {
    text-align: center;
    width: 100%;
  }
  
  .modal-text h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    border-bottom: 1px solid #666;
    width: 100%;
    padding-bottom: 8px;
  }
  
  .modal-text p {
    font-size: 14px;
    text-align: left;
  }
  
  .yt-btn {
    padding: 10px 20px;
    font-size: 14px;
    margin: 12px 0;
    width: 100%;
    max-width: 250px;
  }
  
  .title-line {
    margin-top: 12px;
    font-size: 14px;
    text-align: left;
  }
  
  .close-btn {
    top: 8px;
    right: 12px;
    width: 32px;
    height: 32px;
    font-size: 18px;
  }

  .laptop {
    display: none;
  }

  .mobile {
    display: inline-block;
    font-family: "Times New Roman", Times, serif;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 8px;
  }
  
  .modal-content {
    padding: 16px 12px;
    border-radius: 6px;
  }
  
  .modal-body {
    gap: 12px;
  }
  
  .modal-image {
    width: 140px;
  }
  
  .modal-text h2 {
    font-size: 1.2rem;
  }
  
  .modal-text p {
    font-size: 13px;
  }
  
  .yt-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
  
  .title-line {
    font-size: 13px;
  }
  
  .close-btn {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
}

/* Laptop Styles */
@media (min-width: 768px) {
  .mobile {
    display: none;
  }

  .laptop {
    display: inline-block;
  }
}
</style>