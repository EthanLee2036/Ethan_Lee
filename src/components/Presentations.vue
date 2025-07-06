// components/Presentations.vue
<template>
  <div class="container">
    <h1>Presentations</h1>

    <div class="filter-section">
      <div class="filter-controls">
        <select v-model="selectedCategory" class="filter-select">
          <option value="">All Categories</option>
          <option value="invited">Invited Talks</option>
          <option value="oral">Oral Presentations</option>
          <option value="poster">Poster Presentations</option>
        </select>
        <input 
          v-model="searchTerm" 
          type="text" 
          placeholder="Search presentations..." 
          class="search-input"
        />
      </div>
    </div>

    <section v-for="section in filteredSections" :key="section.title" class="presentation-section">
      <h2>{{ section.title }}</h2>
      <ol class="presentation-list">
        <li 
          v-for="(presentation, index) in section.presentations" 
          :key="index"
          class="presentation-item"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div class="presentation-content">
            {{ presentation.content }}
            <span v-if="presentation.date" class="date">{{ presentation.date }}</span>
            <span v-if="presentation.award" class="award">{{ presentation.award }}</span>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Presentations',
  data() {
    return {
      searchTerm: '',
      selectedCategory: '',
      sections: [
        {
          title: 'Invited Talks and Seminars',
          category: 'invited',
          presentations: [
            {
              content: 'Cheng, L.J. "NUS Nursing Year 4 Honours Undergraduate Bridging Workshop AY2022/2023 (Unraveling the Research Puzzle: A Beginner\'s Guide to Systematic Mixed-Studies Reviews)". Invited Guest Lecturer, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Public Health, National University of Singapore, Singapore',
              date: '6th June 2023'
            },
            {
              content: 'Cheng, L.J. "NUS Nursing Honours Programme - Bridging Session for prospective Honours students (Searching for Existing Empirical Evidence - A Practice Session)". Invited Guest Lecturer, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Public Health, National University of Singapore, Singapore (Zoom)',
              date: '11th June 2021'
            },
            {
              content: 'Cheng, L.J. "Systematic review & Meta-analysis Paper Writing". Invited Speaker for the Saw Swee Hock School of Public Health Graduate Student Conference 2020 (Zoom), Singapore',
              date: '14th December 2020'
            }
          ]
        },
        {
          title: 'Oral Presentations',
          category: 'oral',
          presentations: [
            {
              content: 'Cheng, L.J., Feng, Y-S., Cheng, J.Y., Chen, L.A., & Luo, N. "Exploring Variability in EQ VAS scores: A Systematic Review and Meta-regression of Population Health Studies". Oral presentation in the 2nd UK and Ireland EQ-5D Researchers Meeting 2025, London, United Kingdom',
              date: '20th February 2025'
            },
            {
              content: 'Cheng, L.J., Kreimeier, S., Chen, L.A., Herdman, M.J., & Luo, N. "Head-to-head Comparisons of the Measurement Properties of the Three-level and Five-level Version of the EQ-5D-Y: A Systematic Review". Oral presentation in the 30th ISOQOL Annual Conference, Calgary, Alberta, Canada',
              date: '18th-21st October 2023'
            },
            {
              content: 'Cheng, L. J., Cheng, J. Y., Yen, K. Y., Lau, S. T., & Lau, Y. "Global Prevalence and Factors Related to Intimate Partner Violence Amongst People Living with Human Immunodeficiency Virus/Acquired Immunodeficiency Syndrome: A Systematic Review, Meta-Analysis, and Meta-Regression." Oral presentation in the 2022 International Postgraduate Forum on Public Health, China',
              date: '7th – 8th January 2023',
              award: '[Third Prize]'
            }
          ]
        },
        {
          title: 'Poster Presentations',
          category: 'poster',
          presentations: [
            {
              content: 'Cheng, L.J., Vasan Thakumar, A., & Luo, N. "Who prefers death to life in composite time trade-off interviews and why: A mixed-methods analysis of the Singapore EQ-5D-5L valuation study". Poster presentation in the ISPOR Europe 2024, Barcelona, Spain',
              date: '17th-20th November 2024'
            },
            {
              content: 'Cheng, L.J., Chen, L.A., Cheng, J.Y., Herdman, M.J., & Luo, N. "Construct Validity and Test-Retest Reliability of the Three-Level and Five-Level Versions of the EQ-5D-Y: A Systematic Review and Meta-Regression of Head-to-Head Comparison Studies". Poster presentation in the ISPOR Europe 2024, Barcelona, Spain',
              date: '17th-20th November 2024'
            },
            {
              content: 'Cheng, L.J., Herdman, M., Chen, L.A., & Luo, N. "Systematic review of Minimally Important Difference (MID) estimates for EQ-5D Index and VAS Scores and their influential factors". Poster presentation in the 4th EQ ECR Meeting 2024, Copenhagen, Denmark',
              date: '4th-6th March 2024'
            }
          ]
        }
      ]
    }
  },
  computed: {
    filteredSections() {
      let sections = this.sections

      // Filter by category
      if (this.selectedCategory) {
        sections = sections.filter(section => section.category === this.selectedCategory)
      }

      // Filter by search term
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase()
        sections = sections.map(section => ({
          ...section,
          presentations: section.presentations.filter(presentation =>
            presentation.content.toLowerCase().includes(term)
          )
        })).filter(section => section.presentations.length > 0)
      }

      return sections
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

.filter-section {
  margin-bottom: 24px;
}

.filter-controls {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.filter-select,
.search-input {
  padding: 10px 12px;
  border: 1.5px solid #cfd8e3;
  border-radius: 6px;
  font-size: 1em;
  background: var(--background-light);
  transition: border-color 0.2s;
}

.filter-select {
  min-width: 150px;
}

.search-input {
  flex: 1;
  min-width: 250px;
}

.filter-select:focus,
.search-input:focus {
  border-color: var(--primary-blue);
  outline: none;
}

.presentation-section {
  margin-bottom: 36px;
}

h2 {
  color: var(--primary-blue);
  font-size: 1.25em;
  margin-top: 36px;
  margin-bottom: 12px;
  border-left: 5px solid var(--primary-orange);
  padding-left: 10px;
}

.presentation-list {
  margin-left: 24px;
  margin-bottom: 18px;
}

.presentation-item {
  margin-bottom: 16px;
  padding: 12px;
  background: var(--background-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-blue);
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.4s ease forwards;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.presentation-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(21,76,121,0.1);
}

.presentation-content {
  line-height: 1.5;
  color: var(--text-dark);
}

.date {
  color: var(--text-light);
  font-size: 0.95em;
  margin-left: 8px;
  font-style: italic;
}

.award {
  color: var(--accent-orange);
  font-weight: bold;
  margin-left: 8px;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .filter-controls {
    flex-direction: column;
  }
  
  .search-input {
    min-width: auto;
  }
  
  .presentation-list {
    margin-left: 10px;
  }
}
</style>

