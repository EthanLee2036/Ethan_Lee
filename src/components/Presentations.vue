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
              content: 'Cheng, L.J. "How to score EQ-5D data and how to obtain EQ-5D questionnaires?". Invited Speaker, Saw Swee Hock School of Public Health, National University of Singapore, Singapore',
              date: '15th October 2025',
              sortDate: '2025-10-15'
            },
            {
              content: 'Cheng, L.J. "NUS Nursing Year 4 Honours Undergraduate Bridging Workshop AY2022/2023 (Unraveling the Research Puzzle: A Beginner\'s Guide to Systematic Mixed-Studies Reviews)". Invited Guest Lecturer, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Public Health, National University of Singapore, Singapore',
              date: '6th June 2023',
              sortDate: '2023-06-06'
            },
            {
              content: 'Cheng, L.J. "NUS Nursing Honours Programme - Bridging Session for prospective Honours students (Searching for Existing Empirical Evidence - A Practice Session)". Invited Guest Lecturer, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Public Health, National University of Singapore, Singapore (Zoom)',
              date: '11th June 2021',
              sortDate: '2021-06-11'
            },
            {
              content: 'Cheng, L.J. "Systematic review & Meta-analysis Paper Writing". Invited Speaker for the Saw Swee Hock School of Public Health Graduate Student Conference 2020 (Zoom), Singapore',
              date: '14th December 2020',
              sortDate: '2020-12-14'
            },
            {
              content: 'Cheng, L.J. "NUS Nursing Honours Programme - Bridging Session for prospective Honours students". Invited Guest Lecturer, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Public Health, National University of Singapore, Singapore (Zoom)',
              date: '26th May 2020',
              sortDate: '2020-05-26'
            }
          ]
        },
        {
          title: 'Oral Presentations',
          category: 'oral',
          presentations: [
            {
              content: 'Cheng, L.J., Feng, Y-S., Cheng, J.Y., Chen, L.A., & Luo, N. "Exploring Variability in EQ VAS scores: A Systematic Review and Meta-regression of Population Health Studies". Oral presentation in the ISPOR Europe 2025, Glasgow, Scotland, UK',
              date: '9th-12th November 2025',
              sortDate: '2025-11-09'
            },
            {
              content: 'Cheng, L.J., Feng, Y-S., Cheng, J.Y., Chen, L.A., & Luo, N. "Exploring Variability in EQ VAS scores: A Systematic Review and Meta-regression of Population Health Studies". Oral presentation in the 32nd ISOQOL Annual Conference, Milwaukee, Wisconsin, USA',
              date: '22nd-25th October 2025',
              sortDate: '2025-10-22',
              award: '[2025 New Investigator Oral Presentation Award Finalists]'
            },
            {
              content: 'Cheng, L.J., Ng, Q.X., Lee, J.G.J., Koh, G.C.H. & Luo, N. "Measuring What Matters in Primary Care: Health-Related Quality of Life and Its Predictors Among Users of Public Primary Care Clinics in Singapore Using the EQ-5D-5L". Oral presentation in the 32nd ISOQOL Annual Conference, Milwaukee, Wisconsin, USA',
              date: '22nd-25th October 2025',
              sortDate: '2025-10-22'
            },
            {
              content: 'Vasan Thakumar, A., Kennedy-Martin, T., Zhang, X., Slaap, B., Herdman, M., & Cheng, L.J. "How far have we come with EQ-5D-5L value sets? A systematic review and lesson learnt from general population and patient valuation studies". Paper presentation in the 42nd EuroQol Plenary Meeting 2025, Vienna, Austria',
              date: '23rd-26th September 2025',
              sortDate: '2025-09-23'
            },
            {
              content: 'Cheng, L.J., Feng, Y-S., Cheng, J.Y., Chen, L.A., & Luo, N. "Exploring Variability in EQ VAS scores: A Systematic Review and Meta-regression of Population Health Studies". Oral presentation in the 2nd UK and Ireland EQ-5D Researchers Meeting 2025, London, United Kingdom',
              date: '20th February 2025',
              sortDate: '2025-02-20'
            },
            {
              content: 'Cheng, L.J., Kreimeier, S., Chen, L.A., Herdman, M.J., & Luo, N. "Head-to-head Comparisons of the Measurement Properties of the Three-level and Five-level Version of the EQ-5D-Y: A Systematic Review". Oral presentation in the 30th ISOQOL Annual Conference, Calgary, Alberta, Canada',
              date: '18th-21st October 2023',
              sortDate: '2023-10-18'
            },
            {
              content: 'Cheng, L. J., Chen, L.A., Herdman, M.J., & Luo, N. "The minimally important difference for EQ-5D: A systematic review of anchor-based estimates". Oral brief presentation in the 30th ISOQOL Annual Conference, Calgary, Alberta, Canada',
              date: '18th-21st October 2023',
              sortDate: '2023-10-18'
            },
            {
              content: 'Cheng, L. J., Cheng, J. Y., Yen, K. Y., Lau, S. T., & Lau, Y. "Global Prevalence and Factors Related to Intimate Partner Violence Amongst People Living with Human Immunodeficiency Virus/Acquired Immunodeficiency Syndrome: A Systematic Review, Meta-Analysis, and Meta-Regression." Oral presentation in the 2022 International Postgraduate Forum on Public Health, China',
              date: '7th-8th January 2023',
              sortDate: '2023-01-07',
              award: '[Third Prize]'
            },
            {
              content: 'Anh, G.T., Tang, Q.C., Tan, Y.L, Chua, M.J., Divya, M., Cheng, L. J., et al. "A Compassionate Sensory Care Approach on Patients with Cognitive Impairment in Acute Hospital Improves Outcomes". Oral Presentation in the Yishun Health Kaizen Festival, Singapore',
              date: 'June 2021',
              sortDate: '2021-06-15',
              award: '[The People\'s Choice Award 2021]'
            },
            {
              content: 'Anh, G.T., Tang, Q.C., Tan, Y.L, Chua, M.J., Talha, A.A., Divya, M., Cheng, L. J., et al. "MDT One Care Plan Improves Outcomes in Delirium and Dementia". Oral Presentation in the Yishun Health Kaizen Festival, Singapore',
              date: 'June 2021',
              sortDate: '2021-06-15',
              award: '[2nd Runner-up]'
            },
            {
              content: 'Goh, Q. L. P., Cheng, L.J., Chin, G. F., & Liaw, S. Y. "Factors Influencing Teamwork Among Nurses in General Ward Setting: An Exploratory Descriptive Study". Oral presentation in the Singapore Health and Biomedical Congress 2019, Singapore',
              date: '10th-12th October 2019',
              sortDate: '2019-10-10',
              award: '[Singapore Nursing Award]'
            }
          ]
        },
        {
          title: 'Poster Presentations',
          category: 'poster',
          presentations: [
            // 2025 - November (ISPOR Europe)
            {
              content: 'Cheng, L.J., Hey, H.D., Liu, G.K.P., & Luo, N. "Differential responsiveness and minimally important difference of EQ-5D: truth or artefact?". Poster presentation in the ISPOR Europe 2025, Glasgow, Scotland, UK',
              date: '9th-12th November 2025',
              sortDate: '2025-11-09'
            },
            {
              content: 'Vasan Thakumar, A., Kennedy-Martin, T., Boye, K.S., Zhang, X., Slaap, B., Herdman, M., & Cheng, L.J. "How far have we come with EQ-5D-5L value sets? An updated systematic literature review of 55 valuation studies". Poster presentation in the ISPOR Europe 2025, Glasgow, Scotland, UK',
              date: '9th-12th November 2025',
              sortDate: '2025-11-09'
            },
            {
              content: 'Vasan Thakumar, A., & Cheng, L.J. "Beyond the Mean: Do distribution-based metrics offer greater insight into predictors of societal health preferences? A secondary analysis of 42 EQ-5D-5L value sets". Poster presentation in the ISPOR Europe 2025, Glasgow, Scotland, UK',
              date: '9th-12th November 2025',
              sortDate: '2025-11-09'
            },
            {
              content: 'Yap, X.Y., Ng, N.B.H, Seo, W.L., Yong, C., Yeo, D., Finch, A.P., Verstraete, J., Cheng, L.J., & Luo, N. "Evaluating Performance of the Experimental EQ-TIPS (V3) for Assessing Infants and Toddlers with Acute Infections: A Mixed-Methods Approach of Cognitive Debriefing and Psychometric Testing". Poster presentation in the ISPOR Europe 2025, Glasgow, Scotland, UK',
              date: '9th-12th November 2025',
              sortDate: '2025-11-09'
            },
            {
              content: 'Zhang, X., Cheng, L.J., Qian, Y., Tan, W.L.B., Bansback, N., Tam, W.S.W., He, H., Po, H.H., Tan, M., Liau, G., Pang, K.C., Sivasubramanian, H., & Luo, N. "Patient-Reported Outcomes after Total Knee Arthroplasty: A Comparisons across TKA Procedures and PRO Domains". Poster presentation in the ISPOR Europe 2025, Glasgow, Scotland, UK',
              date: '9th-12th November 2025',
              sortDate: '2025-11-09'
            },
            // 2025 - October (PROMIS)
            {
              content: 'Cheng, L.J., Bansback, N., Liu, G.K.P., Wang, W., Wu, V.X., Luo, N. & Hey, H.D. "A Systematic Review and Head-to-Head Comparison of EQ-5D and PROPr: Psychometric Performance and Distributional Patterns". Poster presentation in the 11th Annual PROMIS International Conference, Milwaukee, Wisconsin, USA',
              date: '26th-28th October 2025',
              sortDate: '2025-10-26'
            },
            {
              content: 'Cheng, L.J., Hey, H.D., Liu, G.K.P., & Luo, N. "Differential responsiveness and minimally important difference of EQ-5D: truth or artefact?". Poster presentation in the 11th Annual PROMIS International Conference, Milwaukee, Wisconsin, USA',
              date: '26th-28th October 2025',
              sortDate: '2025-10-26'
            },
            {
              content: 'Zhang, X., Vasan Thakumar, A., Luo, N. & Cheng, L.J. "A Systematic Review and Head-to-Head Comparison of EQ-5D and PROPr: Psychometric Performance and Distributional Patterns". Poster presentation in the 11th Annual PROMIS International Conference, Milwaukee, Wisconsin, USA',
              date: '26th-28th October 2025',
              sortDate: '2025-10-26'
            },
            // 2024 - November (ISPOR Europe)
            {
              content: 'Cheng, L.J., Vasan Thakumar, A., & Luo, N. "Who prefers death to life in composite time trade-off interviews and why: A mixed-methods analysis of the Singapore EQ-5D-5L valuation study". Poster presentation in the ISPOR Europe 2024, Barcelona, Spain',
              date: '17th-20th November 2024',
              sortDate: '2024-11-17'
            },
            {
              content: 'Cheng, L.J., Chen, L.A., Cheng, J.Y., Herdman, M.J., & Luo, N. "Construct Validity and Test-Retest Reliability of the Three-Level and Five-Level Versions of the EQ-5D-Y: A Systematic Review and Meta-Regression of Head-to-Head Comparison Studies". Poster presentation in the ISPOR Europe 2024, Barcelona, Spain',
              date: '17th-20th November 2024',
              sortDate: '2024-11-17'
            },
            // 2024 - September (EuroQol)
            {
              content: 'Cheng, L.J., Vasan Thakumar, A., & Luo, N. "Who prefers death to life in composite time trade-off interviews and why: A mixed-methods analysis of the Singapore EQ-5D-5L valuation study". Poster presentation in the 41st EuroQol Plenary Meeting 2024, Rotterdam, the Netherlands',
              date: '17th-20th September 2024',
              sortDate: '2024-09-17'
            },
            // 2024 - March (EQ ECR)
            {
              content: 'Cheng, L.J., Herdman, M., Chen, L.A., & Luo, N. "Systematic review of Minimally Important Difference (MID) estimates for EQ-5D Index and VAS Scores and their influential factors". Poster presentation in the 4th EQ ECR Meeting 2024, Copenhagen, Denmark',
              date: '4th-6th March 2024',
              sortDate: '2024-03-04'
            },
            {
              content: 'Chua, A.P., Janssen, B., Cheng, L.J., Chen, L.A., Liao, M.X., Nalusamy, N., Busschbach, J., & Luo, N. "An Exploratory Study on Test-Retest Reliability and Responsiveness of Respiratory Bolt-ons for EQ-5D-5L in Obstructive Airway Diseases". Poster presentation in the 4th EQ ECR Meeting 2024, Copenhagen, Denmark',
              date: '4th-6th March 2024',
              sortDate: '2024-03-04'
            },
            // 2023 - October (ISOQOL)
            {
              content: 'Cheng, L.J., Bansback, N., Liu, G.P.L., Hey, H.W.D., & Luo, N. "Patient-Specific Prediction Model for Health-Related Quality of Life Outcomes Following Lumbar Spine Surgery: A Retrospective, Single-Centre Cohort Study". Poster presentation in the 30th ISOQOL Annual Conference, Calgary, Alberta, Canada',
              date: '18th-21st October 2023',
              sortDate: '2023-10-18'
            },
            // 2023 - September (EuroQol)
            {
              content: 'Cheng, L.J., Kreimeier, S., Chen, L.A., Herdman, M.J., & Luo, N. "Head-to-head Comparisons of the Measurement Properties of the Three-level and Five-level Version of the EQ-5D-Y: A Systematic Review". Poster presentation in the 40th EuroQol Plenary Meeting 2023, Rome, Italy',
              date: '19th-21st September 2023',
              sortDate: '2023-09-19'
            },
            // 2023 - March (EQ ECR)
            {
              content: 'Cheng, L.J., Engel, L., Chen, L.A., & Luo, N. "Using the EQ-5D for proxy assessment in aged care homes: A systematic review of feasibility and measurement properties". Poster presentation in the 3rd EQ ECR Meeting 2023, Milan, Italy',
              date: '7th-9th March 2023',
              sortDate: '2023-03-07'
            },
            // 2022 - November (APSR)
            {
              content: 'Chua, A.P., Chen, L.A., Cheng, L.J., & Luo, N. "Validity and Responsiveness of EuroQol-5-Dimensions in Asthma: A Systematic Review and Meta-analysis". Poster presentation in the 26th Congress of the Asian Pacific Society of Respirology (APSR 2022), Gangnam-gu, Seoul, South Korea',
              date: '17th-20th November 2022',
              sortDate: '2022-11-17'
            },
            // 2022 - September (EuroQol)
            {
              content: 'Cheng, L.J., Pan, T., Mulhern, B., Devlin, N., & Luo, N. "The ceiling effects of EQ-5D in general population health surveys: A systematic review and meta-analysis". Poster presentation in the 39th EuroQol Plenary Meeting 2022, Chicago, USA',
              date: '20th-23rd September 2022',
              sortDate: '2022-09-20'
            },
            {
              content: 'Chua, A.P., Janssen, B., Cheng, L.J., Soh, S.Z.Y., Chen, L.A., Liao, M.X., Nalusamy, N., Busschbach, J., & Luo, N. "An Exploratory Study of Alternative Timeframes and Frequency-Based Descriptors for EQ-5D-5L in Obstructive Airway Diseases: An Analysis of 184 Patients". Poster presentation in the 39th EuroQol Plenary Meeting 2022, Chicago, USA',
              date: '20th-23rd September 2022',
              sortDate: '2022-09-20'
            },
            // 2021 - December (IPA)
            {
              content: 'Anh, G.T., Cheng, L. J., Tang, Q.C., Chua, M.J., Araújo, J.P., & Yap, L.K.P. "Humanitude Care on Older Patients with Dementia or Delirium in Acute Hospital Improves Outcomes". Poster presentation in the 2021 IPA Virtual Congress',
              date: 'December 2021',
              sortDate: '2021-12-01'
            },
            // 2021 - October (EuGMS & SHBC)
            {
              content: 'Anh, G.T., Cheng, L. J., Tang, Q.C., Chua, M.J., Araújo, J.P., & Yap, L.K.P. "Humanitude Care on Older Patients with Dementia or Delirium in Acute Hospital Improves Outcomes". Poster presentation in the 17th EuGMS Congress',
              date: '11th-13th October 2021',
              sortDate: '2021-10-11'
            },
            {
              content: 'Cheng, L.J., Yen, K.Y., Wong, S.H., Cheng, J.Y., & Lau, Y. "Effect of digital cognitive behavioural therapy on depressive, anxiety and stress symptoms in perinatal women: A systematic review and meta-regression". Abstract presentation in the Singapore Health and Biomedical Congress 2021, Singapore',
              date: '7th-8th October 2021',
              sortDate: '2021-10-07'
            },
            {
              content: 'Cheng, L.J., Chua, W.L., & Lau, Y. "Multi-group structural equation models of self-esteem and life satisfaction on positive psychological well-being among university students: Effect of seniority". Abstract presentation in the Singapore Health and Biomedical Congress 2021, Singapore',
              date: '7th-8th October 2021',
              sortDate: '2021-10-07'
            },
            // 2021 - March (EQ Academy)
            {
              content: 'Cheng, L.J., Tan, L.Y.R., & Luo, N. "Measurement Properties of The EuroQoL Visual Analog Scale (EQ-VAS) around the Globe: A Systematic Review and Meta-Analysis". Poster presentation in the 5th EQ Academy Meeting 2021 - A Virtual Meeting',
              date: '1st-2nd March 2021',
              sortDate: '2021-03-01'
            },
            // 2019 - October (SHBC)
            {
              content: 'Goh, Q.L.P., Cheng, L.J., Chin, G.F., & Liaw, S.Y. "Factors Influencing Teamwork Among Nurses in General Ward Setting: An Exploratory Descriptive Study". Poster presentation in the Singapore Health and Biomedical Congress 2019, Singapore',
              date: '10th-12th October 2019',
              sortDate: '2019-10-10'
            },
            {
              content: 'Cheng, L.J., Jiang, Y., Wu, V. X., & Wang, W. "Effectiveness of Vinegar Consumption on Glycaemic Control in Adults with Type II Diabetes Mellitus: A Systematic Review and Meta-analysis". Poster presentation in the Singapore Health and Biomedical Congress 2019, Singapore',
              date: '10th-12th October 2019',
              sortDate: '2019-10-10'
            },
            {
              content: 'Ser, T.F., Cheng, L.J., Chin, G.F., & Liaw, S.Y. "Exploring the perceptions of registered nurses and non-registered nurses towards nursing teamwork in the general ward setting: A qualitative study". Poster presentation in the Singapore Health and Biomedical Congress 2019, Singapore',
              date: '10th-12th October 2019',
              sortDate: '2019-10-10'
            },
            // 2019 - January (EAFONS)
            {
              content: 'Cheng, L.J., Jiang, Y., Wu, V.X., & Wang, W. "Effectiveness of vinegar as complementary and alternative medicine on glycaemic control in patients with type II diabetes: A systematic review and meta-analysis". Poster presentation in the 22nd East Asian Forum of Nursing Scholars (EAFONS), National University of Singapore',
              date: '17th-18th January 2019',
              sortDate: '2019-01-17'
            },
            // 2018 - July
            {
              content: 'Cheng, L.J., Wu, V.X., Dawkes, S., Lim, S.T., & Wang, W. "Diet barriers and their influencing factors among outpatients with poorly controlled type 2 diabetes". Poster presentation in the 20th Asia Pacific Diabetes Conference, Sydney, Australia',
              date: '16th-17th July 2018',
              sortDate: '2018-07-16'
            },
            // 2018 - February
            {
              content: 'Cheng, L.J., Wu, V.X., Dawkes, S., Lim, S.T., & Wang, W. "Diet barriers and their influencing factors among outpatients with poorly controlled type 2 diabetes". Poster presentation in the Global Conference on Integrated Care, Singapore',
              date: '2nd-3rd February 2018',
              sortDate: '2018-02-02'
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

      // Sort presentations by date (newest first) within each section
      sections = sections.map(section => ({
        ...section,
        presentations: [...section.presentations].sort((a, b) => {
          return new Date(b.sortDate) - new Date(a.sortDate)
        })
      }))

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
