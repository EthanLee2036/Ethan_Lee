// components/Team.vue
<template>
  <div class="container">
    <h1>Research Team</h1>

    <div class="section-title">Principal Investigator</div>
    <div class="pi-card">
      <div class="pi-info">
        <h2>{{ principalInvestigator.name }}</h2>
        <div class="pi-role">{{ principalInvestigator.role }}</div>
        
        <h4 class="subsection-title">Qualifications</h4>
        <ul class="qualifications-list">
          <li v-for="qualification in principalInvestigator.qualifications" :key="qualification">
            {{ qualification }}
          </li>
        </ul>
        
        <h4 class="subsection-title">Academic Positions</h4>
        <div class="positions">
          <div v-for="position in principalInvestigator.positions" :key="position" class="position">
            {{ position }}
          </div>
        </div>
        
        <div class="editorial-roles" v-if="principalInvestigator.editorialRoles">
          <h4 class="subsection-title">Editorial Roles</h4>
          <div v-for="role in principalInvestigator.editorialRoles" :key="role" class="position">
            {{ role }}
          </div>
        </div>
      </div>
    </div>

    <div class="section-title">Collaborators</div>
    <ul class="team-list">
      <li v-for="member in collaborators" :key="member.name" class="team-member">
        <strong>{{ member.name }}</strong>
        <span class="member-education">{{ member.education }}</span>
      </li>
    </ul>

    <div class="section-title">Research Team Members</div>
    <ul class="team-list">
      <li v-for="member in teamMembers" :key="member.name" class="team-member">
        <strong>{{ member.name }}</strong>
        <span class="member-education">{{ member.education }}</span>
      </li>
    </ul>

    <div class="section-title">Current Graduate Students</div>
    <ul class="student-list">
      <li v-for="student in currentStudents" :key="student.name" class="student-item">
        <strong>{{ student.name }}</strong> ({{ student.degree }})
        <span class="research-topic">{{ student.program }}</span>
      </li>
    </ul>

    <div class="section-title">Current Undergraduate Students</div>
    <ul class="student-list">
      <li v-for="student in currentUndergraduates" :key="student.name" class="student-item">
        <strong>{{ student.name }}</strong> ({{ student.degree }})
        <span class="research-topic">{{ student.program }}</span>
      </li>
    </ul>

    <div class="section-title">Past Graduate Students</div>
    <ul class="student-list">
      <li v-for="student in pastStudents" :key="student.name" class="student-item">
        <strong>{{ student.name }}</strong> ({{ student.degree }})
        <span class="research-topic">{{ student.program }}</span>
      </li>
    </ul>

    <div class="section-title">Past Undergraduate Students</div>
    <ul class="student-list">
      <li v-for="student in pastUndergraduates" :key="student.name" class="student-item">
        <strong>{{ student.name }}</strong> ({{ student.degree }})
        <span class="research-topic">{{ student.program }}</span>
        <span v-if="student.award" class="award">{{ student.award }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      principalInvestigator: {
        name: 'Dr Cheng Ling Jie',
        role: 'Principal Investigator',
        qualifications: [
          'PhD in Public Health, National University of Singapore, Singapore',
          'Master of Public Health, National University of Singapore, Singapore',
          'Bachelor of Science (Nursing with Honours), National University of Singapore, Singapore'
        ],
        positions: [
          'Postdoctoral Fellow, National Perinatal Epidemiology Unit, Nuffield Department of Women\'s and Reproductive Health, University of Oxford, United Kingdom (2025-current)',
          'Senior Tutor, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Medicine, National University of Singapore, Singapore (2024-current)',
          'Postdoctoral Fellow, National Perinatal Epidemiology Unit, Nuffield Department of Population Health, University of Oxford, United Kingdom (2024-2025)'
        ],
        editorialRoles: [
          'Senior Editor, Systematic Reviews',
          'Associate Editor, Quality of Life Research'
        ]
      },
      collaborators: [
        { name: 'Annushiah Vasan Thakumar (PhD)', education: 'Universiti Sains Malaysia' },
        { name: 'Zhang Xin (PhD)', education: 'University of Groningen' }
      ],
      teamMembers: [
        { name: 'Chen Le Ann', education: 'MPH, National University of Singapore' },
        { name: 'Chern Wei Jie Calvin', education: 'BSN (Hons), National University of Singapore' },
        { name: 'Cheng Jing Ying', education: 'BSN (Hons), National University of Singapore' },
        { name: 'Yen Kai Yoong', education: 'BSN (Hons), National University of Singapore' },
        { name: 'Yap Xin Yi', education: 'BSc, National University of Singapore' }
      ],
      currentStudents: [
        {
          name: 'Tay Jie Yin,',
          degree: 'MPH',
          program: 'NUS Public Health, National University of Singapore, Singapore'
        }
      ],
      currentUndergraduates: [
        {
          name: 'Joshua Teoh Ee-An',
          degree: 'BSN (Hons) candidate',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Mabel Madeline Lee De Ean',
          degree: 'BSN (Hons) candidate',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        }
      ],
      pastStudents: [
        {
          name: 'Ustunkan Fulya',
          degree: 'MPH',
          program: 'NUS Public Health, National University of Singapore, Singapore'
        }
      ],
      pastUndergraduates: [
        {
          name: 'Chua Ee Shen',
          degree: 'BPharm',
          program: 'School of Pharmacy, Taylor\'s University, Malaysia'
        },
        {
          name: 'Chern Wei Jie Calvin',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore',
          award: 'Winner of the NUS Outstanding Undergraduate Researcher Prize'
        },
        {
          name: 'Glenys Chiang',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Teow Eau Liang',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore',
          award: 'Winner of the NUS Outstanding Undergraduate Researcher Prize'
        },
        {
          name: 'Lew Shu Ling',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Yap Siat Yee',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Yeo Ying Yee',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Lee Zi Rong',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Quek Yu Yi',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Ng Yu Xuan',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Lam Xin Rong',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Celest Leo Su Yi',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Mong Mei Siew Andrea',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Lai Min Yi Calida',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Teo Rui Hong',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Cheng Wen Hui',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore',
          award: 'Winner of the Nursing Research Medal'
        },
        {
          name: 'David Lau Chia Ern',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Goh Qin Ling Pearlyn',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
        },
        {
          name: 'Ser Ting Fang',
          degree: 'BSN (Hons)',
          program: 'NUS Nursing, National University of Singapore, Singapore'
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
  margin-bottom: 24px;
  text-align: center;
}

.section-title {
  color: var(--primary-blue);
  font-size: 1.2em;
  margin-top: 32px;
  margin-bottom: 16px;
  border-left: 5px solid var(--primary-orange);
  padding-left: 10px;
  font-weight: 600;
}

.pi-card {
  background: #f4f7fb;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(21,76,121,0.08);
  padding: 28px 22px;
  margin-bottom: 24px;
  border-left: 4px solid var(--primary-blue);
}

.pi-info h2 {
  margin: 0 0 8px 0;
  color: var(--primary-blue);
  font-size: 1.3em;
}

.pi-role {
  font-weight: bold;
  color: var(--accent-orange);
  margin-bottom: 20px;
  font-size: 1.05em;
}

.subsection-title {
  color: var(--primary-blue);
  font-size: 1.1em;
  margin: 20px 0 12px 0;
  font-weight: 600;
  border-left: 3px solid var(--primary-orange);
  padding-left: 8px;
}

.qualifications-list {
  margin-left: 18px;
  margin-bottom: 20px;
}

.qualifications-list li {
  margin-bottom: 6px;
  color: var(--text-dark);
  line-height: 1.5;
}

.education-list {
  margin-left: 18px;
  margin-bottom: 16px;
}

.education-list li {
  margin-bottom: 4px;
  color: var(--text-dark);
}

.positions {
  margin-bottom: 20px;
}

.position {
  margin-bottom: 8px;
  color: var(--text-dark);
  line-height: 1.5;
}

.position::before {
  content: "• ";
  color: var(--primary-orange);
  font-weight: bold;
}

.editorial-roles {
  margin-top: 0;
}

.team-list,
.student-list {
  margin-left: 0;
  padding-left: 0;
  list-style: none;
}

.team-member,
.student-item {
  margin-bottom: 16px;
  background: var(--background-light);
  border-left: 4px solid var(--primary-blue);
  border-radius: 8px;
  padding: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.team-member:hover,
.student-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(21,76,121,0.1);
}

.team-member strong,
.student-item strong {
  color: var(--primary-blue);
  font-size: 1.05em;
  display: block;
  margin-bottom: 4px;
}

.member-education,
.research-topic {
  display: block;
  color: var(--text-medium);
  font-size: 0.95em;
  line-height: 1.4;
  margin-top: 6px;
}

.award {
  display: block;
  color: var(--primary-orange);
  font-weight: bold;
  font-size: 0.9em;
  margin-top: 4px;
  font-style: italic;
}

/* Staggered animation for list items */
.team-member,
.student-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

.team-member:nth-child(1) { animation-delay: 0.1s; }
.team-member:nth-child(2) { animation-delay: 0.2s; }
.team-member:nth-child(3) { animation-delay: 0.3s; }
.team-member:nth-child(4) { animation-delay: 0.4s; }
.team-member:nth-child(5) { animation-delay: 0.5s; }

.student-item:nth-child(1) { animation-delay: 0.1s; }
.student-item:nth-child(2) { animation-delay: 0.2s; }
.student-item:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .pi-card {
    padding: 18px 16px;
  }
  
  .team-member,
  .student-item {
    padding: 12px;
  }
}
</style>