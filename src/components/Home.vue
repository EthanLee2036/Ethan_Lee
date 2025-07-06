<template>
  <div class="container">
    <section id="intro">
      <div id="intro-info">
        <h1>Cheng Ling Jie (Jeremy) <span style="font-size:0.7em;">(曾令杰)</span></h1>
        <h2>PhD, MPH, BSN (Hons), RN</h2>
        <p class="intro-description">
Dr Cheng Ling Jie is a Postdoctoral Fellow at the <a href="https://www.npeu.ox.ac.uk/about/people/ling-jie-cheng-1110">National Perinatal Epidemiology Unit</a>, University of Oxford, supported by the prestigious <a href="https://www.moe.gov.sg/news/press-releases/20240814-28-young-singaporeans-receive-awards-to-pursue-careers-in-academia-and-research">Singapore Teaching and Academic Research Talent (START) Award</a>. He also holds an academic appointment as Senior Tutor at the <a href="https://medicine.nus.edu.sg/nursing/our-people/our-faculty/teaching-faculty/cheng-ling-jie/">Alice Lee Centre for Nursing Studies</a>, Yong Loo Lin School of Medicine, National University of Singapore.
        </p>
        
        <p class="intro-description">
His research focuses on health economics and outcomes research, with the goal of improving healthcare decision-making. He has led or contributed to projects securing over SGD 1.6 million in funding and has published more than 70 peer-reviewed articles. He has also supervised over 30 undergraduate and 8 postgraduate theses.
        </p>
        
        <p class="intro-description">
Internationally, Dr Cheng serves as a <a href="https://systematicreviewsjournal.biomedcentral.com/about/editorial-board">Senior Editor</a> for Systematic Reviews and an <a href="https://link.springer.com/journal/11136/editorial-board">Associate Editor</a> for Quality of Life Research. He is a member of the EuroQol Group Association, ISPOR, ISOQOL, and the PROMIS Health Organization, and a founding member of the EuroQol PhD Network. He is also a regular peer reviewer for leading journals in public health, nursing, and health outcomes research.
        </p>

      </div>

      <div class="intro-img-block">
        <img src="/img/CHENG-LING-JIE_NUS-OAM-9.jpg" alt="Dr Cheng Ling Jie (Jeremy)" />
      </div>
    </section>

    <section id="education" class="highlight-section">
      <h2>Education & Training</h2>
      <ul class="education-list">
        <li><strong>Postdoctoral Fellowship</strong>, University of Oxford</li>
        <li><strong>PhD in Public Health</strong>, National University of Singapore</li>
        <li><strong>Master of Public Health</strong>, National University of Singapore</li>
        <li><strong>Bachelor of Science (Nursing) (Honours)</strong>, National University of Singapore</li>
      </ul>
    </section>

    <section id="appointments" class="highlight-section appointments">
      <h2>Academic Appointments</h2>
      <ul class="appointment-list">
        <li><strong>Postdoctoral Fellow (NUS-OPF)</strong> [2024-Present], University of Oxford</li>
        <li><strong>Senior Tutor (NUS-OPF)</strong> [2024-Present], National University of Singapore</li>
        <li><strong>Research Associate</strong> [2021-2024], National University of Singapore</li>
        <li><strong>PhD Candidate</strong> [2021-2024], National University of Singapore</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact & Locations</h2>
      <div class="two-cols">
        <div class="contact-location">
          <strong>National Perinatal Epidemiology Unit (NPEU)</strong><br>
          Nuffield Department of Population Health<br>
          University of Oxford<br>
          Old Road Campus<br>
          Oxford OX3 7LF<br>
          United Kingdom
        </div>
        <div class="contact-location">
          <strong>Alice Lee Centre for Nursing Studies (NUS Nursing)</strong><br>
          Yong Loo Lin School of Medicine<br>
          Centre for Translational Medicine<br>
          Block MD6, Level 5<br>
          14 Medical Drive<br>
          Singapore 117599
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#intro {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
  min-height: 600px;
}

#intro-info {
  flex: 1.2;
  min-width: 0;
}

#intro-info h1 {
  font-size: 2.2em;
  margin-bottom: 12px;
  color: var(--primary-blue);
  line-height: 1.2;
}

#intro-info h2 {
  font-size: 1.2em;
  color: var(--text-medium);
  margin-bottom: 24px;
  font-weight: 500;
}

.intro-description {
  font-size: 1.05em;
  color: var(--text-dark);
  line-height: 1.7;
  margin-bottom: 18px;
  text-align: justify;
}

.intro-img-block {
  flex: 0 0 380px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-img-block img {
  width: 380px;
  height: 480px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(21, 76, 121, 0.15);
  border: 4px solid #e3e9f1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.intro-img-block img:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(21, 76, 121, 0.2);
}

h2 {
  color: var(--primary-blue);
  font-size: 1.25em;
  margin-bottom: 10px;
  border-left: 5px solid var(--primary-orange);
  padding-left: 10px;
}

.highlight-section {
  background: #f0f7fe;
  border-radius: 12px;
  padding: 28px 24px 20px 24px;
  margin-bottom: 36px;
  box-shadow: 0 2px 8px rgba(21, 76, 121, 0.06);
}

.highlight-section.appointments {
  background: #fef7e6;
}

.education-list,
.appointment-list {
  margin-left: 18px;
  margin-bottom: 10px;
}

.education-list li,
.appointment-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.two-cols {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.two-cols > div {
  flex: 1 1 300px;
  min-width: 250px;
}

.contact-location {
  background: var(--background-light);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid var(--primary-blue);
  line-height: 1.6;
}

/* 平板设备适配 */
@media (max-width: 1024px) {
  .intro-img-block {
    flex: 0 0 320px;
  }
  
  .intro-img-block img {
    width: 320px;
    height: 400px;
  }
  
  #intro {
    gap: 30px;
  }
}

/* 手机设备适配 */
@media (max-width: 768px) {
  #intro {
    flex-direction: column;
    gap: 24px;
    align-items: center;
    min-height: auto;
  }

  .intro-img-block {
    flex: none;
    order: -1;
    padding-top: 0;
  }
  
  .intro-img-block img {
    width: 280px;
    height: 350px;
  }

  #intro-info {
    flex: none;
    width: 100%;
  }

  #intro-info h1 {
    text-align: center;
    font-size: 1.8em;
  }

  #intro-info h2 {
    text-align: center;
  }

  .intro-description {
    text-align: left;
  }

  .two-cols {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .intro-img-block img {
    width: 240px;
    height: 300px;
  }
  
  #intro-info h1 {
    font-size: 1.6em;
  }
}
</style>