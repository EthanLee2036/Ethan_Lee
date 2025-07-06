// components/ResearchThemes.vue
<template>
  <div class="container">
    <h1>Five Themes in VALUE Lab</h1>
    <div class="themes-row">
      <div 
        v-for="(theme, index) in researchThemes" 
        :key="index"
        class="theme-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="theme-title">{{ theme.title }}</div>
        <div class="theme-description">{{ theme.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchThemes',
  data() {
    return {
      researchThemes: [
        {
          title: "Validation and Valuation of Health and Quality-of-Life Measures",
          description: "Rigorous validation and valuation of health and quality-of-life instruments to ensure reliability and relevance in diverse populations."
        },
        {
          title: "Applications of PROMs: Establishing Population Norms and Minimally Important Differences",
          description: "Applying Patient-Reported Outcome Measures (PROMs) to define population benchmarks and identify meaningful changes in health status."
        },
        {
          title: "Leveraging PROMs in Decision Support Tools for Shared Decision-Making",
          description: "Integrating PROMs into decision support systems to empower patients and clinicians in collaborative, informed healthcare choices."
        },
        {
          title: "Using Evidence Synthesis and Decision-Analytic Modelling to Guide Policies and Practices",
          description: "Employing systematic reviews and advanced modelling to inform policy, optimize interventions, and improve health outcomes."
        },
        {
          title: "Empowering Nurses with PROMs for Resource Optimisation and Evidence-Based Care",
          description: "Equipping nurses with PROMs to enhance resource allocation and deliver high-quality, evidence-based patient care."
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: #3a2568;
  font-size: 2em;
  margin-bottom: 26px;
  text-align: center;
}

.themes-row {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.theme-card {
  background: #f4f7fb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(21,76,121,0.07);
  padding: 28px 22px 22px 22px;
  min-width: 230px;
  max-width: 340px;
  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theme-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(21,76,121,0.15);
}

.theme-card::before {
  content: '';
  display: block;
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--primary-blue) 60%, var(--primary-orange) 100%);
  margin-bottom: 18px;
}

.theme-title {
  font-size: 1.15em;
  color: var(--primary-blue);
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.3;
}

.theme-description {
  color: var(--text-medium);
  line-height: 1.6;
  font-size: 0.95em;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .themes-row {
    flex-direction: column;
    gap: 18px;
  }
  
  .theme-card {
    max-width: 100%;
  }
}
</style>