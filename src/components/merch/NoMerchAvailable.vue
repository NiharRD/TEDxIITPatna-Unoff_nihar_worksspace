<script setup>
// No props needed - this is a static component
</script>

<template>
  <div class="no-merch">
    <div class="no-merch-content">
      <h2>👕 Merchandises Will Be Releasing Soon</h2>
      <p>
        Merchandises are not available at the website at the moment. Keep an eye
        out for updates!
      </p>
      <!-- <div class="coming-soon-info">
        <p>🔥 Exciting TEDx IIT Patna merchandise coming soon!</p>
        <p>Stay tuned for exclusive hoodies, t-shirts, and more.</p>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
/* No Merch State */
.no-merch {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;
}

.no-merch-content {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  max-width: 500px;
  width: 100%;
}

.no-merch-content h2 {
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.no-merch-content > p {
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.coming-soon-info {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.coming-soon-info p {
  color: #4b5563;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.coming-soon-info p:last-child {
  margin-bottom: 0;
}

.coming-soon-info p:first-child {
  font-weight: 600;
  color: #dc2626;
}

/* Responsive Design */
@media (max-width: 768px) {
  .no-merch {
    min-height: 300px;
    padding: 1rem;
  }

  .no-merch-content {
    padding: 2rem;
  }

  .no-merch-content h2 {
    font-size: 1.5rem;
  }

  .no-merch-content > p {
    font-size: 1rem;
  }

  .coming-soon-info {
    padding: 1rem;
  }
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.no-merch-content {
  animation: fadeInUp 0.6s ease-out;
}
</style>
