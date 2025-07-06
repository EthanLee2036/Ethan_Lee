<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-text">
        © {{ currentYear }} by Cheng Ling Jie (Jeremy)
      </div>
      <div class="footer-links">
        <a href="mailto:contact@valuelab.com" class="footer-link">Email</a>
        <a href="https://twitter.com/JeremyChengLJ" target="_blank" rel="noopener" class="footer-link">Twitter</a>
        <a href="https://scholar.google.com/" target="_blank" rel="noopener" class="footer-link">Google Scholar</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--primary-blue);
  color: white;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-text {
  font-size: 0.95em;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--primary-orange);
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    padding: 18px 12px;
  }
  
  .footer-links {
    gap: 16px;
  }
}
</style>