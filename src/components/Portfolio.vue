// components/Portfolio.vue
<template>
  <div class="container">
    <h1>Portfolio Overview</h1>
    
    <div class="portfolio-intro">
      <p>
        Welcome to the VALUE Lab portfolio. Here you can explore our research outputs, 
        including peer-reviewed publications, conference presentations, and ongoing projects 
        that showcase our commitment to advancing health economics and outcomes research.
      </p>
    </div>

    <div class="portfolio-grid">
      <div class="portfolio-card" v-for="item in portfolioItems" :key="item.title">
        <div class="card-icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="card-stats">
          <span class="stat">{{ item.count }} items</span>
          <span class="stat-label">{{ item.label }}</span>
        </div>
        <router-link :to="item.link" class="card-button">
          View {{ item.title }}
        </router-link>
      </div>
    </div>

    <div class="recent-highlights">
      <h2>Recent Highlights</h2>
      <div class="highlights-grid">
        <div class="highlight-card" v-for="highlight in recentHighlights" :key="highlight.title">
          <div class="highlight-meta">
            <span class="highlight-type">{{ highlight.type }}</span>
            <span class="highlight-date">{{ highlight.date }}</span>
          </div>
          <h4>{{ highlight.title }}</h4>
          <p>{{ highlight.description }}</p>
          <a :href="highlight.link" target="_blank" rel="noopener" class="highlight-link">
            Learn more →
          </a>
        </div>
      </div>
    </div>

    <div class="metrics-section">
      <h2>Research Impact</h2>
      <div class="metrics-grid">
        <div class="metric-card" v-for="metric in researchMetrics" :key="metric.label">
          <div class="metric-value">{{ metric.value }}</div>
          <div class="metric-label">{{ metric.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      portfolioItems: [
        {
          title: 'Publications',
          description: 'Peer-reviewed articles in high-impact journals focusing on health economics and outcomes research.',
          icon: '📄',
          count: '60+',
          label: 'peer-reviewed articles',
          link: '/publications'
        },
        {
          title: 'Presentations',
          description: 'Conference presentations, invited talks, and poster sessions at international venues.',
          icon: '🎤',
          count: '50+',
          label: 'presentations',
          link: '/presentations'
        }
      ],
      recentHighlights: [
        {
          type: 'Publication',
          date: '2025',
          title: 'EQ-5D-Y Systematic Review',
          description: 'Head-to-head comparison study published in Value in Health.',
          link: 'https://doi.org/10.1016/j.jval.2025.03.020'
        },
        {
          type: 'Presentation',
          date: 'Feb 2025',
          title: 'UK EQ-5D Researchers Meeting',
          description: 'Oral presentation on EQ VAS variability research.',
          link: '#'
        },
        {
          type: 'Award',
          date: '2023',
          title: 'Third Prize',
          description: 'International Postgraduate Forum on Public Health presentation award.',
          link: '#'
        }
      ],
      researchMetrics: [
        { value: 'SGD 1.14M+', label: 'Research Funding Secured' },
        { value: '60+', label: 'Peer-Reviewed Publications' },
        { value: '3', label: 'Professional Organizations' },
        { value: '10+', label: 'Countries Presented In' }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: #3a2568;
  font-size: 2em;
  margin-bottom: 24px;
  text-align: center;
}

.portfolio-intro {
  background: linear-gradient(135deg, #f0f7fe 0%, #fef7e6 100%);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  border-left: 5px solid var(--primary-orange);
}

.portfolio-intro p {
  font-size: 1.1em;
  line-height: 1.6;
  color: var(--text-dark);
  margin: 0;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.portfolio-card {
  background: white;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 4px 16px rgba(21,76,121,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  border-left: 4px solid var(--primary-blue);
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(21,76,121,0.15);
}

.card-icon {
  font-size: 3em;
  margin-bottom: 16px;
}

.portfolio-card h3 {
  color: var(--primary-blue);
  font-size: 1.3em;
  margin-bottom: 12px;
}

.portfolio-card p {
  color: var(--text-medium);
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-stats {
  margin-bottom: 20px;
}

.stat {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: var(--primary-orange);
}

.stat-label {
  display: block;
  font-size: 0.9em;
  color: var(--text-light);
  margin-top: 4px;
}

.card-button {
  display: inline-block;
  background: var(--primary-blue);
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.2s;
}

.card-button:hover {
  background: var(--primary-orange);
}

h2 {
  color: var(--primary-blue);
  font-size: 1.4em;
  margin: 40px 0 20px 0;
  border-left: 5px solid var(--primary-orange);
  padding-left: 10px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.highlight-card {
  background: var(--background-light);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.2s ease;
}

.highlight-card:hover {
  transform: translateY(-2px);
}

.highlight-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.highlight-type {
  background: var(--primary-blue);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 500;
}

.highlight-date {
  color: var(--text-light);
  font-size: 0.9em;
}

.highlight-card h4 {
  color: var(--primary-blue);
  margin-bottom: 8px;
}

.highlight-card p {
  color: var(--text-medium);
  line-height: 1.4;
  margin-bottom: 12px;
}

.highlight-link {
  color: var(--accent-orange);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9em;
}

.highlight-link:hover {
  text-decoration: underline;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.metric-card {
  background: white;
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(21,76,121,0.08);
  border-top: 4px solid var(--primary-orange);
}

.metric-value {
  font-size: 2em;
  font-weight: bold;
  color: var(--primary-blue);
  margin-bottom: 8px;
}

.metric-label {
  color: var(--text-medium);
  font-size: 0.95em;
}

@media (max-width: 700px) {
  .portfolio-grid,
  .highlights-grid,
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
</style>