<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  offerPrice: {
    // paying price
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    // such as hoodie, tshirt, cap etc
    type: String,
    required: true,
  },
  size: {
    type: String, // s,m,l,xl,xxl
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentLink: {
    type: String,
    required: true,
  },
});

// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  rollNo: "",
  iitpStudentStatus: "",
});

const emit = defineEmits(["view-more", "form-submit"]);

const handleBack = () => {
  emit("view-more", props);
};

const handleSubmit = () => {
  console.log(props.paymentLink);
  // Validate required fields
  if (
    !formData.value.name ||
    !formData.value.email ||
    !formData.value.phone ||
    !formData.value.iitpStudentStatus
  ) {
    alert("Please fill in all required fields");
    return;
  }
  // Pass form data to Razorpay payment link as query parameters
  const params = new URLSearchParams({
    name: formData.value.name,
    email: formData.value.email,
    phone: formData.value.phone,
    rollNo: formData.value.rollNo,
    iitpStudentStatus: formData.value.iitpStudentStatus,
  }).toString();

  // Open the Razorpay payment link with form data as query params
  window.location.href = `${props.paymentLink}?${params}`;

  // Optionally, emit the form-submit event with form data
  emit("form-submit", { ...formData.value });
  formData.value = {
    name: "",
    email: "",
    phone: "",
    rollNo: "",
    iitpStudentStatus: "",
  };

  // Placeholder - functionality not implemented yet
};
</script>

<template>
  <div class="form-container">
    <div class="form-header">
      <h2>Product Order Form</h2>
      <div class="product-summary">
        <img :src="props.image" :alt="props.name" class="product-image" />
        <div class="product-details">
          <h3>{{ props.name }}</h3>
          <p class="product-type">
            {{ props.type.toUpperCase() }} - Size: {{ props.size }}
          </p>
          <div class="price-info">
            <span class="current-price">₹{{ props.offerPrice }}</span>
            <span class="original-price">₹{{ props.originalPrice }}</span>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="order-form">
      <div class="form-grid">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name" class="form-label">Full Name *</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email" class="form-label">Email *</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="form-input"
            placeholder="Enter your email address"
            required
          />
        </div>

        <!-- Phone Field -->
        <div class="form-group">
          <label for="phone" class="form-label">Phone *</label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            class="form-input"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <!-- Roll Number Field (Optional) -->
        <div class="form-group">
          <label for="rollNo" class="form-label">RollNo (Optional)</label>
          <input
            id="rollNo"
            v-model="formData.rollNo"
            type="text"
            class="form-input"
            placeholder="Enter your roll number"
          />
        </div>

        <!-- IITP Student Status Field -->
        <div class="form-group">
          <label for="iitpStudentStatus" class="form-label"
            >IITPStudentStatus *</label
          >
          <select
            id="iitpStudentStatus"
            v-model="formData.iitpStudentStatus"
            class="form-input"
            required
          >
            <option value="">Select your status</option>
            <option value="current_student">Current IITP Student</option>
            <option value="alumni">IITP Alumni</option>
            <option value="not_iitp">Not from IITP</option>
          </select>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="form-actions">
        <button type="button" @click="handleBack" class="btn-secondary">
          Back to Product
        </button>
        <button type="submit" class="btn-primary">
          Proceed to Razorpay - ₹{{ props.offerPrice }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9fafb;
  min-height: 100vh;
}

/* Form Header */
.form-header {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 20px 0;
  text-align: center;
}

/* Product Summary */
.product-summary {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f3f4f6;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.product-details h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 5px 0;
}

.product-type {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 10px 0;
  font-weight: 500;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.current-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
}

.original-price {
  font-size: 1.1rem;
  color: #6b7280;
  text-decoration: line-through;
}

/* Form Styling */
.order-form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-input {
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: white;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Select styling */
select.form-input {
  cursor: pointer;
}

select.form-input option {
  padding: 8px;
}

/* Required field styling */
.form-input:required:invalid {
  border-color: #ef4444;
}

.form-input:required:valid {
  border-color: #10b981;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 2px solid #e5e7eb;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #4b5563 0%, #374151 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-container {
    padding: 10px;
  }

  .form-header,
  .order-form {
    padding: 20px;
  }

  .form-header h2 {
    font-size: 1.5rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .product-summary {
    flex-direction: column;
    text-align: center;
  }

  .form-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

/* Animation for form appearance */
.form-container {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
