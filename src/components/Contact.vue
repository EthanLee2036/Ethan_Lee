<template>
  <div class="container">
    <h1>Contact Us</h1>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="form.firstName" 
            required
          >
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            v-model="form.lastName" 
            required
          >
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          required
        >
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          v-model="form.subject" 
          required
        >
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea 
          id="message" 
          v-model="form.message" 
          required
        ></textarea>
      </div>
      <button class="submit-btn" type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Submit' }}
      </button>
      
      <div v-if="submitMessage" class="submit-message" :class="submitStatus">
        {{ submitMessage }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: '',
      submitStatus: ''
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      try {
        // 🔔 使用你的实际Formspree表单ID
        const FORMSPREE_FORM_ID = 'mwpbjqvo' // 你的新表单ID
        
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${this.form.firstName} ${this.form.lastName}`,
            email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
            // 额外信息，会显示在邮件中
            _replyto: this.form.email,
            _subject: `VALUE Lab Contact: ${this.form.subject}`
          })
        })

        if (response.ok) {
          // 重置表单
          this.form = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
          }
          
          this.submitMessage = '✅ Thank you for your message! We\'ll get back to you soon.'
          this.submitStatus = 'success'
          
          setTimeout(() => {
            this.submitMessage = ''
          }, 8000)
        } else {
          throw new Error('Failed to send message')
        }
        
      } catch (error) {
        console.error('Contact form error:', error)
        this.submitMessage = '❌ Sorry, there was an error sending your message. Please try again or email us directly at lxmxusa@gmail.com'
        this.submitStatus = 'error'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}

h1 {
  color: #3a2568;
  font-size: 2em;
  margin-bottom: 24px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 500;
  margin-bottom: 6px;
  color: var(--primary-blue);
}

input, textarea {
  padding: 10px 12px;
  border: 1.5px solid #cfd8e3;
  border-radius: 6px;
  font-size: 1em;
  background: var(--background-light);
  resize: vertical;
  transition: border-color 0.2s;
  font-family: inherit;
}

input:focus, textarea:focus {
  border-color: var(--primary-blue);
  outline: none;
}

textarea {
  min-height: 80px;
  max-height: 220px;
}

.submit-btn {
  background: linear-gradient(90deg, var(--primary-blue) 60%, var(--primary-orange) 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(90deg, var(--primary-orange) 40%, var(--primary-blue) 100%);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
  line-height: 1.4;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>