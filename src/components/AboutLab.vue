// components/AboutLab.vue
<template>
  <div class="container">
    <div class="logo-block">
      <img src="/img/logo2.jpg" alt="VALUE Lab Logo" class="lab-logo">
      <h1>VALUE Lab Logo Overview</h1>
      <p class="lab-description">
        The VALUE Lab logo is a visual representation of our research mission, academic journey, and dedication to advancing health outcomes. It integrates the colour legacies of my alma mater, the National University of Singapore (NUS), and my postdoctoral home, the National Perinatal Epidemiology Unit (NPEU) at the University of Oxford, blending heritage with research purpose.
      </p>
    </div>

    <h2>Symbolism and Meaning</h2>
    <p class="intro-text">
      The VALUE Lab logo visually expresses our research mission and academic journey, blending the legacies of National University of Singapore (NUS) and National Perinatal Epidemiology Unit (NPEU), University of Oxford.
    </p>
    
    <div class="color-section">
      <h3>Color Palette</h3>
      <div class="color-row">
        <div class="color-swatch" v-for="color in colorPalette" :key="color.name">
          <span class="swatch" :style="{ backgroundColor: color.hex }"></span>
          <div class="color-info">
            <strong>{{ color.name }}</strong>
            <span class="color-meaning">{{ color.meaning }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="symbols-section">
      <h3>Symbolic Elements</h3>
      <p class="symbols-intro">
        The heart with a pulse line reflects our commitment to patient-reported outcomes (PROMs) and quality of life research, while the measurement ruler signifies our dedication to validation, valuation, and evidence synthesis.
      </p>
      
      <div class="symbol-row">
        <div class="symbol-card" v-for="symbol in symbols" :key="symbol.name">
          <span class="icon">{{ symbol.icon }}</span>
          <div class="symbol-content">
            <strong>{{ symbol.name }}</strong>
            <div class="symbol-description">{{ symbol.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mission-statement">
      <p>
        Together, these elements illustrate our mission: to drive impactful research, bridge academic excellence from Singapore to Oxford, and advance healthcare outcomes through innovation, collaboration, and patient-centred care.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutLab',
  data() {
    return {
      colorPalette: [
        {
          name: 'NPEU Deep Purple',
          hex: '#5c3478',
          meaning: 'Wisdom, dignity, research excellence'
        },
        {
          name: 'NUS Blue',
          hex: '#005fa3',
          meaning: 'Trust, knowledge'
        },
        {
          name: 'NUS Orange',
          hex: '#ff6600',
          meaning: 'Enthusiasm, creativity, determination'
        }
      ],
      symbols: [
        {
          icon: '❤️‍🩹',
          name: 'Heart with Pulse Line',
          description: 'Commitment to patient-reported outcomes (PROMs) and quality of life research.'
        },
        {
          icon: '📏',
          name: 'Measurement Ruler',
          description: 'Dedication to validation, valuation, and evidence synthesis.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.logo-block {
  text-align: center;
  margin-bottom: 30px;
}

.lab-logo {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: contain;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(21,76,121,0.1);
}

h1 {
  color: #3a2568;
  font-size: 2em;
  margin-bottom: 8px;
}

.lab-description {
  color: var(--text-medium);
  font-size: 1.1em;
  margin-top: 10px;
  line-height: 1.6;
  max-width: 800px;
  margin: 10px auto 0;
}

h2 {
  color: var(--primary-blue);
  font-size: 1.3em;
  margin-top: 32px;
  margin-bottom: 12px;
  border-left: 5px solid var(--primary-orange);
  padding-left: 10px;
}

h3 {
  color: var(--primary-blue);
  font-size: 1.15em;
  margin-bottom: 16px;
  font-weight: 600;
}

.intro-text {
  margin-bottom: 24px;
  line-height: 1.6;
  color: var(--text-dark);
}

.color-section {
  background: #f4f7fb;
  border-radius: 10px;
  padding: 24px;
  margin: 24px 0;
}

.color-row {
  display: flex;
  gap: 24px;
  margin: 18px 0;
  flex-wrap: wrap;
}

.color-swatch {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  flex: 1;
  min-width: 250px;
}

.swatch {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 2px solid #eee;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.color-info {
  display: flex;
  flex-direction: column;
}

.color-info strong {
  color: var(--primary-blue);
  margin-bottom: 4px;
}

.color-meaning {
  color: var(--text-medium);
  font-size: 0.95em;
}

.symbols-section {
  margin: 32px 0;
}

.symbols-intro {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-dark);
}

.symbol-row {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 24px 0;
  justify-content: center;
}

.symbol-card {
  background: #f4f7fb;
  border-radius: 12px;
  padding: 24px 20px;
  min-width: 200px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(21,76,121,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
}

.symbol-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(21,76,121,0.15);
}

.symbol-card .icon {
  font-size: 2.5em;
  margin-bottom: 12px;
  display: block;
}

.symbol-content strong {
  color: var(--primary-blue);
  font-size: 1.1em;
  display: block;
  margin-bottom: 8px;
}

.symbol-description {
  color: var(--text-medium);
  font-size: 0.95em;
  line-height: 1.5;
}

.mission-statement {
  background: linear-gradient(135deg, #f0f7fe 0%, #fef7e6 100%);
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
  border-left: 5px solid var(--primary-orange);
}

.mission-statement p {
  font-size: 1.05em;
  line-height: 1.7;
  color: var(--text-dark);
  margin: 0;
  font-weight: 500;
}

@media (max-width: 700px) {
  .color-row {
    flex-direction: column;
    gap: 16px;
  }
  
  .color-swatch {
    min-width: auto;
  }
  
  .symbol-row {
    flex-direction: column;
    gap: 20px;
  }
  
  .symbol-card {
    max-width: 100%;
  }
  
  .lab-logo {
    width: 100%;
    height: auto;
  }
}
</style>
