<template>
  <header class="site-header">
    <div class="navbar">
      <router-link to="/" class="logo">
        <img src="/img/logo.jpg" alt="VALUE Lab Logo" />
      </router-link>
      <nav>
        <ul class="nav-menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About VALUE Lab</router-link></li>
          <li><router-link to="/research">Research Themes</router-link></li>
          <li class="dropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
            <a href="#" @click.prevent="toggleDropdown" class="dropdown-toggle">
              Portfolio ▼
            </a>
            <ul class="submenu" :class="{ active: dropdownVisible }">
              <li><router-link to="/publications" @click="hideDropdown">Publications</router-link></li>
              <li><router-link to="/presentations" @click="hideDropdown">Presentations</router-link></li>
            </ul>
          </li>
          <li><router-link to="/team">Our Team</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuVisible }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul class="mobile-menu" :class="{ active: mobileMenuVisible }">
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">About VALUE Lab</router-link></li>
          <li><router-link to="/research" @click="closeMobileMenu">Research Themes</router-link></li>
          <li><router-link to="/publications" @click="closeMobileMenu">Publications</router-link></li>
          <li><router-link to="/presentations" @click="closeMobileMenu">Presentations</router-link></li>
          <li><router-link to="/team" @click="closeMobileMenu">Our Team</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      dropdownVisible: false,
      mobileMenuVisible: false
    }
  },
  methods: {
    showDropdown() {
      this.dropdownVisible = true
    },
    hideDropdown() {
      this.dropdownVisible = false
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible
    },
    closeMobileMenu() {
      this.mobileMenuVisible = false
    }
  }
}
</script>

<style scoped>
.site-header {
  background: var(--primary-blue);
  border-bottom: 1px solid var(--border-light);
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 28px;
  position: relative;
}

.logo img {
  height: 72px;
  width: auto;
  display: block;
}

.nav-menu {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li a,
.dropdown-toggle {
  color: white;
  text-decoration: none;
  font-size: 1.07em;
  font-weight: 500;
  transition: color 0.2s;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  letter-spacing: 1px;
}

.nav-menu li a:hover,
.dropdown-toggle:hover,
.nav-menu li a.router-link-active {
  color: var(--primary-orange);
  border-bottom: 2px solid var(--primary-orange);
}

.dropdown {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  left: 0;
  top: 32px;
  background: white;
  min-width: 170px;
  box-shadow: 0 4px 16px rgba(21,76,121,0.13);
  border-radius: 0 0 10px 10px;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
}

.submenu.active,
.dropdown:hover .submenu {
  display: block;
}

.submenu a {
  color: var(--primary-blue) !important;
  padding: 12px 20px;
  display: block;
  text-decoration: none;
  font-size: 1em;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s, color 0.2s;
}

.submenu a:last-child {
  border-bottom: none;
}

.submenu a:hover {
  background: var(--background-light);
  color: var(--accent-orange) !important;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--primary-blue);
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.mobile-menu.active {
  display: flex;
}

.mobile-menu li a {
  color: white;
  text-decoration: none;
  padding: 15px 28px;
  display: block;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: background 0.2s;
}

.mobile-menu li a:hover,
.mobile-menu li a.router-link-active {
  background: rgba(255,255,255,0.1);
  color: var(--primary-orange);
}

@media (max-width: 800px) {
  .nav-menu {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .navbar {
    padding: 0 12px;
  }
}
</style>
