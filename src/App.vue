<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #f7fafd;
  color: #222;
  line-height: 1.7;
}

:root {
  --primary-blue: #154c79;
  --primary-orange: #ffb700;
  --accent-orange: #ff6600;
  --nus-blue: #005fa3;
  --npeu-purple: #5c3478;
  --text-dark: #222;
  --text-medium: #444;
  --text-light: #666;
  --background-light: #f7fafd;
  --background-white: #fff;
  --border-light: #eee;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  max-width: 1000px;
  margin: 40px auto 0 auto;
  background: var(--background-white);
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(21,76,121,0.10);
  padding: 36px 28px;
}

.btn-primary {
  background: linear-gradient(90deg, var(--primary-blue) 60%, var(--primary-orange) 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: linear-gradient(90deg, var(--primary-orange) 40%, var(--primary-blue) 100%);
}

@media (max-width: 700px) {
  .container {
    margin: 20px auto 0 auto;
    padding: 18px 4vw;
  }
}
</style>