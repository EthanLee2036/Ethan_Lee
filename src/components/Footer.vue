<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-text">
        © {{ currentYear }} by Cheng Ling Jie (Jeremy)
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
  justify-content: center;
  align-items: center;
}

.footer-text {
  font-size: 0.95em;
}

</style>
