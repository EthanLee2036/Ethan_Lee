// components/Publications.vue
<template>
  <div class="container">
    <h1>Selected Publications</h1>
    
    <div class="search-filter">
      <input 
        v-model="searchTerm" 
        type="text" 
        placeholder="Search publications..." 
        class="search-input"
      />
      <select v-model="selectedYear" class="year-filter">
        <option value="">All Years</option>
        <option v-for="year in availableYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <ul class="pub-list">
      <li 
        v-for="(publication, index) in filteredPublications" 
        :key="index"
        class="pub-item"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <div class="pub-title">
          {{ index + 1 }}. {{ publication.title }}
          <span class="pub-journal">{{ publication.journal }}</span>
        </div>
        <div class="pub-meta">
          <span class="pub-year">{{ publication.year }}</span>
          <a v-if="publication.doi" class="pub-link" :href="publication.doi" target="_blank" rel="noopener">DOI</a>
        </div>
      </li>
    </ul>
    
    <p class="pub-note">
      For the full list of publications, please contact the VALUE Lab or refer to the latest CV.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      searchTerm: '',
      selectedYear: '',
      publications: [
        // ========== 2026 Publications ==========
        {
          title: "Zhang, H., Yang, Y., Li, F., Ma, L., Abudureyimu, A., Cheng, L.J., Li, K., Wu, V.X. (2026). Comparative effects of social participation interventions for stroke survivors: a network meta-analysis using a social ecological model.",
          journal: "Annals of Physical and Rehabilitation Medicine",
          doi: "https://doi.org/10.1016/j.rehab.2025.102029",
          year: 2026
        },
        // ========== 2025 Publications ==========
        {
          title: "Cheng, L.J., Cheng, J.Y., Chern, C.W.J., Liew, H.M., Tay, S.P., Ja'affar, M.H., Wu, V.X., Wang, W., & He, H.G. (2025). Global prevalence of perioperative depressive symptoms among non-emergency surgical patients: An umbrella review of current evidence from systematic review and meta-analyses.",
          journal: "International Journal of Nursing Studies",
          doi: "https://doi.org/10.1016/j.ijnurstu.2025.105213",
          year: 2025
        },
        {
          title: "Cheng, L.J., Schieskow, S., Chen, L.A., Cheng, J.Y., Herdman, M., & Luo, N. (2025). Head-to-head Comparisons of the Distributional Characteristics and Measurement Properties of the Three-level and Five-level Versions of the EQ-5D-Y: A Systematic Review.",
          journal: "Value in Health",
          doi: "https://doi.org/10.1016/j.jval.2025.03.020",
          year: 2025
        },
        {
          title: "Cheng, L.J., Vasan Thakumar, A., Chen, L.A., Tan, R.L.Y., Liao, M., Luo, N. (2025). Who prefers death to life in composite time trade-off interviews and why: A mixed-methods analysis of the Singapore EQ-5D-5L valuation study.",
          journal: "The Patient - Patient-Centered Outcomes Research",
          doi: "https://doi.org/10.1007/s40271-025-00777-z",
          year: 2025
        },
        {
          title: "Cheng, L.J., Luo, N., Chen, L.A., Cheng, J.Y., Liu, G.P.L., Wang, W., Hey, H.W.D., & Wu, V.X. (2025). Patients and Spine Surgeons' Perspectives regarding Decision-making and Outcomes in Lumbar Surgery: An Exploratory, Qualitative Study.",
          journal: "The Patient - Patient-Centered Outcomes Research",
          doi: "https://doi.org/10.1007/s40271-024-00719-1",
          year: 2025
        },
        {
          title: "Cheng, L.J., Bansback, N., Liu, G.P.L., Wang, W., Wu, V.X., Luo, N., & Hey, H.W.D. (2025). Patient-reported outcomes and their associated factors at 1- and 2-year follow-up after lumbar spine surgery: A Surgery Registry Study.",
          journal: "Quality of Life Research",
          doi: "https://doi.org/10.1007/s11136-025-04049-z",
          year: 2025
        },
        {
          title: "Cheng, L.J., Chern, C.W.J., Lee, J.G.J., Cheng, J.Y., Vasan Thakumar, A., Koh, G.C.H., Luo, N., & Ng, Q.X. (2025). Health-related quality of life among multiethnic public polyclinic users in Singapore and associated factors: A cross-sectional study.",
          journal: "Quality of Life Research",
          doi: "https://doi.org/10.1007/s11136-025-04069-9",
          year: 2025
        },
        {
          title: "Lee, J.G.J., Ng, Q.X., Luo, N., Koh, G.C.H., & Cheng, L.J. (2025). Validation of the Consumer Health Activation Index (CHAI) among Community-Dwelling Adults in Primary Care Clinics in Singapore.",
          journal: "Population Health Metrics",
          doi: "https://doi.org/10.1186/s12963-025-00402-z",
          year: 2025
        },
        {
          title: "Lew, S.L., Cheng, L.J., Yap, S.Y., Liaw, Y.Q., Park, J., & Lau S.T. (2025). Effect of chewing gum on clinical outcomes and postoperative recovery in adult patients after gastrointestinal surgery: an umbrella review.",
          journal: "International Journal of Surgery",
          doi: "https://doi.org/10.1097/JS9.0000000000002332",
          year: 2025
        },
        {
          title: "Lee, Z.R., Cheng, L.J., Yeo, Y.Y., Rolfson, D.B., & Wu, V.X. (2025). Measurement Properties of the Edmonton Frail Scale in Older Adults: A Systematic Review and Meta-analysis.",
          journal: "International Journal of Nursing Studies",
          doi: "https://doi.org/10.1016/j.ijnurstu.2025.105161",
          year: 2025
        },
        {
          title: "Yeo, T.M., Chin, C., Seah, A., Cheng, L.J., Lin, W., Dalakoti, M., Foo, R., & Wang, W. (2025). Global Prevalence of Myocardial Fibrosis among Individuals with Cardiometabolic Conditions: A Systematic Review and meta-analysis.",
          journal: "European Journal of Preventive Cardiology",
          doi: "https://doi.org/10.1093/eurjpc/zwaf083",
          year: 2025
        },
        {
          title: "Luo, N., Vasan Thakumar, A., Cheng, L.J., Yang, Z.H., Rand, K., Cheung, Y.B., Thumboo, J. (2025). Developing an EQ-5D-5L Value Set for Singapore.",
          journal: "PharmacoEconomics",
          doi: "https://doi.org/10.1007/s40273-025-01519-7",
          year: 2025
        },
        {
          title: "Chua, A.P., Janssen, M.F., Cheng, L.J., Busschbach, J., & Luo, N. (2025). Psychometric testing of two respiratory bolt-on items to EQ-5D-5L in patients with obstructive airway diseases.",
          journal: "Quality of Life Research",
          doi: "https://doi.org/10.1007/s11136-025-04016-8",
          year: 2025
        },
        {
          title: "Tan, J.Y.A., Ong, G.Y.Q., Cheng, L.J., Pikkarainen, M., & He, H.G. (2025). Effectiveness of mHealth-based psychosocial interventions for breast cancer patients and their caregivers: A systematic review and meta-analysis.",
          journal: "Journal of Telemedicine and Telecare",
          doi: "https://doi.org/10.1177/1357633X231187432",
          year: 2025
        },
        {
          title: "Chua, A.P., Cheng, L.J., Soh, Z.Y.S., Chen, L.A., & Luo, N. (2025). Validity and responsiveness of EQ-5D in Asthma: A systematic review and meta-analysis.",
          journal: "The Patient - Patient-Centered Outcomes Research",
          doi: "https://doi.org/10.1007/s40271-024-00711-9",
          year: 2025
        },
        {
          title: "Cao, Y., Li, H., Jin, X., King, M.T., Norman, R., Cheng, L.J., Yu, H., Huang, W.D., & Luo, N. (2025). Quality of Life Utility-Core 10 Dimensions (QLU-C10D) scores based on cancer patients' health preferences are more sensitive than those based on general public's health preferences.",
          journal: "The European Journal of Health Economics",
          doi: "https://doi.org/10.1007/s10198-025-01848-6",
          year: 2025
        },
        {
          title: "Lam, X.R., Cheng, L.J., Leo, C.Y.L., Hu, R., Toh, Z.A., & He, H.G. (2025). Global prevalence of depression in caregivers of children with autism: A systematic review and meta-analysis.",
          journal: "Journal of Pediatric Nursing",
          doi: "https://doi.org/10.1016/j.pedn.2024.11.020",
          year: 2025
        },
        // ========== 2024 Publications ==========
        {
          title: "Cheng, L.J., Chen, L.A., Cheng, J.Y., Herdman M.J., & Luo, N. (2024). Systematic review reveals that EQ-5D minimally important differences vary with treatment type and may decrease with increasing baseline score.",
          journal: "Journal of Clinical Epidemiology",
          doi: "https://doi.org/10.1016/j.jclinepi.2024.111487",
          year: 2024
        },
        {
          title: "Cheng, L.J., Pan, T., Chen, L.A., Cheng, J.Y., Mulhern, B., Devlin, N., & Luo, N. (2024). The Ceiling Effects of EQ-5D-3L and 5L in General Population Health Surveys: A Systematic Review and Meta-Analysis.",
          journal: "Value in Health",
          doi: "https://doi.org/10.1016/j.jval.2024.02.018",
          year: 2024
        },
        {
          title: "Cheng, L.J., Engel, L., Chen, L.A., Soh, S.Z.Y., Koh, G.C.H., & Luo, N. (2024). Using EQ-5D for Proxy Assessment of Health-Related Quality of Life in Residential Care Facilities: A Systematic Review of Feasibility and Psychometric Properties.",
          journal: "Journal of the American Medical Directors Association",
          doi: "https://doi.org/10.1016/j.jamda.2023.10.020",
          year: 2024
        },
        {
          title: "Mohamed, F.B.M., Cheng, L.J., Chia, X.E.C., Turunen, H., & He, H.G. (2024). Global Prevalence and factors associated with workplace violence against nursing students: a systematic review, meta-analysis, and meta-regression.",
          journal: "Aggression and Violent Behavior",
          doi: "https://doi.org/10.1016/j.avb.2023.101907",
          year: 2024
        },
        {
          title: "Lau, Y., Chew, H.S.J., Ang, W.H.D., Ang, W.W., Yeo, C.Y., Lim, G.Z.Q., Wong, S.H., Lau, S.T., & Cheng, L.J. (2024). Effects of digital health interventions on the psychological outcomes of perinatal women: umbrella review of systematic reviews and meta-analyses.",
          journal: "Health Psychology Review",
          doi: "https://doi.org/10.1080/17437199.2023.2185654",
          year: 2024
        },
        {
          title: "Lau, Y., Wong, S.H., Chee, D.G.H., Ng, B.S.P., Ang, W.W., Han, C.Y., & Cheng, L.J. (2024). Technology-delivered personalized nutrition intervention on dietary outcomes among adults with overweight and obesity: A systematic review, meta-analysis, and meta-regression.",
          journal: "Obesity Reviews",
          doi: "https://doi.org/10.1111/obr.13699",
          year: 2024
        },
        {
          title: "Giang, T.A., Cheng, J.Y., Kwok, H.Y.F., Hay, G.M.S., Koh, J.E.J., Johandi, F., Liew, T.M., Tan, D.G.H., Yap, P.L.K., Wee, S.L., & Cheng, L.J. (2024). Effectiveness of Horticultural Therapy in Older Adults without Dementia: A Systematic Review and Meta-Analysis.",
          journal: "Journal of the American Medical Directors Association",
          doi: "https://doi.org/10.1016/j.jamda.2024.105296",
          year: 2024
        },
        {
          title: "Ng, Y.X., Cheng, L.J., Quek, Y.Y., Yu, R., & Wu, V.X. (2024). The measurement properties and feasibility of FRAIL scale in older adults: A systematic review and meta-analysis.",
          journal: "Ageing Research Reviews",
          doi: "https://doi.org/10.1016/j.arr.2024.102243",
          year: 2024
        },
        {
          title: "Chua, A.P., Janssen, M.F., Cheng, L.J., Busschbach, J., & Luo, N. (2024). An Exploratory Study of Alternative Time Frames and Descriptors for EQ-5D-5L in Obstructive Airway Diseases Using Mixed Methods.",
          journal: "Value in Health",
          doi: "https://doi.org/10.1016/j.jval.2024.07.004",
          year: 2024
        },
        {
          title: "Quek, Y.Y., Cheng, L.J., Ng, Y.X., Hey, H.W.D., & Wu, V.X. (2024). Effectiveness of anthocyanin-rich foods on bone remodeling biomarkers of middle-aged and older adults at risk of osteoporosis: a systematic review, meta-analysis, and meta-regression.",
          journal: "Nutrition Reviews",
          doi: "https://doi.org/10.1093/nutrit/nuad121",
          year: 2024
        },
        {
          title: "Hong, X.L., Cheng, L.J., Feng, R.C., Goh, J., Gyanwali, B., Itoh, S., Tam, W.S.W., & Wu, X.V. (2024). Effect of physio-cognitive dual-task training on cognition in pre-ageing and older adults with neurocognitive disorders: A meta-analysis and meta-regression of randomized controlled trial.",
          journal: "Archives of Gerontology and Geriatrics",
          doi: "https://doi.org/10.1016/j.archger.2023.105161",
          year: 2024
        },
        {
          title: "Cheng, J.Y., Nurul, S.B.M.S., Cheng, L.J., & He, H.G. (2024). Effectiveness of Technology-Delivered Psychosocial Interventions for Family Caregivers of Patients With Dementia: A Systematic Review, Meta-Analysis and Meta-Regression.",
          journal: "International Journal of Mental Health Nursing",
          doi: "https://doi.org/10.1111/inm.13390",
          year: 2024
        },
        {
          title: "Fauzi, N.B.M., Huang, X., Cheng, L.J., Luo, N., & Hilal, S. (2024). Association of a healthy ageing index with health-related outcomes in a multi-ethnic cohort from Singapore.",
          journal: "BMC Geriatrics",
          doi: "https://doi.org/10.1186/s12877-024-05099-7",
          year: 2024
        },
        {
          title: "Leo, C.Y.L., Cheng, L.J., Lam, X.R., & He, H.G. (2024). Global prevalence and factors associated with preoperative depression in women undergoing breast surgery: a meta-analysis and meta-regression.",
          journal: "Breast Cancer Research and Treatment",
          doi: "https://doi.org/10.1007/s10549-023-07216-3",
          year: 2024
        },
        {
          title: "Zhang, Z., Hu, Y., Liu, S., Feng, X., Yang, J., Cheng, L.J., Ramazanu, S., & Wu, X.V. (2024). The effectiveness of e-mental health interventions on stress, anxiety, and depression among healthcare professionals: a systematic review and meta-analysis.",
          journal: "Systematic Reviews",
          doi: "https://doi.org/10.1186/s13643-024-02565-6",
          year: 2024
        },
        {
          title: "Cao, Y., Li, H., Shi, J., Cheng, L.J., King, M.T., Kemmler, G., Cella, D., Jia, Y., Xu, L., Huang, W., Yu, H., & Luo, N. (2024). A comparison of measurement properties between EORTC QLU-C10D and FACT-8D in patients with hematological malignances.",
          journal: "Health Economics Review",
          doi: "https://doi.org/10.1186/s13561-024-00560-0",
          year: 2024
        },
        {
          title: "Cao, Y., Zhang, H., Luo, N., Li, H., Cheng, L.J., & Huang, W. (2024). Assessing the reliability of a novel cancer-specific multi-attribute utility instrument (FACT-8D) and comparing its validity to EQ-5D-5L in colorectal cancer patients.",
          journal: "Quality of Life Research",
          doi: "https://doi.org/10.1007/s11136-024-03774-1",
          year: 2024
        },
        // ========== 2023 Publications ==========
        {
          title: "Cheng, L.J., Bansback, N., Liao, M., Wu, V.X., Wang, W., Liu, G.K.P., Hey, H.W.D., & Luo, N. (2023). Patient decision support interventions for candidates considering elective surgeries: a systematic review and meta-analysis.",
          journal: "International Journal of Surgery",
          doi: "https://doi.org/10.1097/JS9.0000000000000302",
          year: 2023
        },
        {
          title: "Cheng, L.J., Cheng, J.Y., Yen, K.Y., Lau, S.T., & Lau, Y. (2023). Global Prevalence and Factors Related to Intimate Partner Violence Amongst People Living with Human Immunodeficiency Virus/Acquired Immunodeficiency Syndrome: A Systematic Review, Meta-Analysis, and Meta-Regression.",
          journal: "Trauma, Violence & Abuse",
          doi: "https://doi.org/10.1177/15248380221097436",
          year: 2023
        },
        {
          title: "Toh, Z.A., Cheng, L.J., Wu, X.V., De Silva, D.A., Oh, H.X., Ng, S.X., He, H.G., & Pikkarainen, M. (2023). Positive airway pressure therapy for post-stroke sleep-disordered breathing: A systematic review and meta-analysis.",
          journal: "European Respiratory Review",
          doi: "https://doi.org/10.1183/16000617.0169-2022",
          year: 2023
        },
        {
          title: "Hidayah, B.A., Toh, Z.A., Cheng, L.J., Syahzarin, B.D., Zhu, Y., Pölkki, T., He, H.G., & Mali, V.P. (2023). Enhanced recovery after surgery in children undergoing abdominal surgery: A systematic review and meta-analysis.",
          journal: "BJS Open",
          doi: "https://doi.org/10.1093/bjsopen/zrac147",
          year: 2023
        },
        {
          title: "Lau, Y., Wong, S.H., Cheng, L.J., & Lau, S.T. (2023). Exploring experiences and needs of perinatal women in digital healthcare: A meta-ethnography of qualitative evidence.",
          journal: "International Journal of Medical Informatics",
          doi: "https://doi.org/10.1016/j.ijmedinf.2022.104929",
          year: 2023
        },
        {
          title: "Teo, R.H., Cheng, W.H., Cheng, L.J., Lau, Y., & Lau, S.T. (2023). Global prevalence of social isolation among community-dwelling older adults: A systematic review and meta-analysis.",
          journal: "Archives of Gerontology and Geriatrics",
          doi: "https://doi.org/10.1016/j.archger.2022.104904",
          year: 2023
        },
        {
          title: "Mong, M.S.A., Lai, M.Y.C., Cheng, L.J., & Lau, Y. (2023). Novel Spinal Cord Stimulation Waveforms for Treating Back and Leg Pain: A Systematic Review and Meta-Analysis of Randomized Controlled Trials.",
          journal: "Neuromodulation",
          doi: "https://doi.org/10.1016/j.neurom.2022.11.003",
          year: 2023
        },
        {
          title: "Giang, T.A., Koh, J.E.C., Cheng, L.J., Tang, Q.C., Chua, M.J., Liew, T.M., Wee, S.L., & Yap, P.L.K. (2023). Effects of Humanitude Care on People with Dementia and Caregivers: A Scoping Review.",
          journal: "Journal of Clinical Nursing",
          doi: "https://doi.org/10.1111/jocn.16477",
          year: 2023
        },
        {
          title: "Cheng, W.H., Teo, R.H., Cheng, L.J., Lau, Y., & Lau, S.T. (2023). Global prevalence of sleep disturbances among breast cancer survivors: A meta-analysis.",
          journal: "Sleep Health",
          doi: "https://doi.org/10.1016/j.sleh.2023.04.004",
          year: 2023
        },
        {
          title: "Soundararajan, A., Lim, J.X., Ngiam, N.H.W., Tey, A.J.Y., Tang, A., Lim, H.A., Yow, K.S., Cheng, L.J., Ho, J., Teo, Q.X.N., Yee, W.Q., Yoon, S., Low, L.L., Ng, K.Y.Y. (2023). Smartphone Ownership, Digital Literacy, and the Mediating Role of Connectedness and Loneliness in Improving the Wellbeing among Community-Dwelling Singaporean Older Adults of Low Socio-Economic Status.",
          journal: "PLoS ONE",
          doi: "https://doi.org/10.1371/journal.pone.0290557",
          year: 2023
        },
        {
          title: "Chua, J.H., Cheng, C.K.T., Cheng, L.J., Ang, W.H.D., & Lau, Y. (2023). Global prevalence of resilience in higher education students: A systematic review, meta-analysis and meta-regression.",
          journal: "Current Psychology",
          doi: "https://doi.org/10.1007/s12144-022-03366-7",
          year: 2023
        },
        {
          title: "Lai, M.Y.C., Mong, M.S.A., Cheng, L.J., & Lau, Y. (2023). The effect of wearable-delivered sleep interventions on sleep outcomes among adults: A systematic review and meta-analysis of randomized controlled trials.",
          journal: "Nursing & Health Sciences",
          doi: "https://doi.org/10.1111/nhs.13011",
          year: 2023
        },
        {
          title: "Yang, J.H., Zhang, Z., Cheng, L.J., Chen, J., & Wu, V.X. (2023). The Prevalence of Anxiety among Men Who Have Sex with Men: A Protocol for A Systematic Review and Meta-Analysis.",
          journal: "International Journal of Environmental Research and Public Health",
          doi: "https://doi.org/10.3390/ijerph20021315",
          year: 2023
        },
        // ========== 2022 Publications ==========
        {
          title: "Cheng, L.J., Ho, T., Cheng, J.Y., Lau, S.T., & Lau, Y. (2022). The effect of universal voluntary HIV counseling and testing on epidemiological, behavioral, and psychosocial outcomes: An umbrella review of systematic reviews and meta-analyses.",
          journal: "International Journal of Nursing Studies",
          doi: "https://doi.org/10.1016/j.ijnurstu.2022.104234",
          year: 2022
        },
        {
          title: "Lau, Y., Yen, K.Y., Wong, S.H., Cheng, J.Y., & Cheng, L.J. (2022). Effect of digital cognitive behavioral therapy on psychological symptoms among perinatal women in high income-countries: A systematic review and meta-regression.",
          journal: "Journal of Psychiatric Research",
          doi: "https://doi.org/10.1016/j.jpsychires.2021.11.012",
          year: 2022
        },
        {
          title: "Lau, Y., Fang, L., Ho-Lim, S.S.T., Lim, P.I., Chi, C., Wong, S.H., & Cheng, L.J. (2022). Cross-lagged models of health-related quality of life and breastfeeding across different body mass index groups: A three-wave prospective longitudinal study.",
          journal: "Midwifery",
          doi: "https://doi.org/10.1016/j.midw.2022.103413",
          year: 2022
        },
        {
          title: "Ang, W.H.D., Lau, S.T., Cheng, L.J., Chew, H.S.J., Tan, J.H., Shorey, S., & Lau, Y. (2022). Resilience interventions for higher education students: A meta-analysis and meta-regression.",
          journal: "Journal of Educational Psychology",
          doi: "https://doi.org/10.1037/edu0000719",
          year: 2022
        },
        {
          title: "Wong, S.H., Tan, Z., Cheng, L.J., & Lau, S.T. (2022). Wearable technology-delivered lifestyle intervention amongst adults with overweight and obese: A systematic review and meta-regression.",
          journal: "International Journal of Nursing Studies",
          doi: "https://doi.org/10.1016/j.ijnurstu.2021.104163",
          year: 2022
        },
        {
          title: "Lau, Y., Cheng, L.J., Chee, D., Zhao, M., Wong, S.H., Wong, S.N., & Tan, K.L. (2022). High body mass index and sleep problems during pregnancy: A meta-analysis and meta-regression of observational studies.",
          journal: "Journal of Sleep Research",
          doi: "https://doi.org/10.1111/jsr.13443",
          year: 2022
        },
        {
          title: "Tan, J., Cheng, L.J., Chan, E.Y., Lau, Y., & Lau, S.T. (2022). Light therapy for sleep disturbances in older adults with dementia: a systematic review, meta-analysis and meta-regression.",
          journal: "Sleep Medicine",
          doi: "https://doi.org/10.1016/j.sleep.2022.01.013",
          year: 2022
        },
        {
          title: "Lim, S.M., Shiau, C., Cheng, L.J., & Lau, Y. (2022). Chatbot-Delivered Psychotherapy for Adults With Depressive and Anxiety Symptoms: A Systematic Review and Meta-Regression.",
          journal: "Behavior Therapy",
          doi: "https://doi.org/10.1016/j.beth.2021.09.007",
          year: 2022
        },
        {
          title: "Cheng, C., Chua, J.H., Cheng, L.J., Ang, W.H.D., & Lau, Y. (2022). Global prevalence of resilience in health care professionals: A systematic review, meta-analysis and meta-regression.",
          journal: "Journal of Nursing Management",
          doi: "https://doi.org/10.1111/jonm.13558",
          year: 2022
        },
        {
          title: "Zhao, M., Wang, G., Wang, A., Cheng, L.J., & Lau, Y. (2022). Robot-assisted distal training improves upper limb dexterity and function after stroke: a systematic review and meta-regression.",
          journal: "Neurological Sciences",
          doi: "https://doi.org/10.1007/s10072-022-05913-3",
          year: 2022
        },
        {
          title: "Tan, Z.Y.A., Wong, S.H., Cheng, L.J., & Lau, S.T. (2022). Effectiveness of Mobile-Based Mindfulness Interventions in Improving Mindfulness Skills and Psychological Outcomes for Adults: A Systematic Review and Meta-regression.",
          journal: "Mindfulness",
          doi: "https://doi.org/10.1007/s12671-022-01962-z",
          year: 2022
        },
        {
          title: "Choong, S., Tan, X., Cheng, L.J., & Lau, Y. (2022). Effectiveness of Exercise in Improving Sleep Outcomes among Perinatal Women: A Systematic Review and Meta-analysis of randomised Controlled Trials.",
          journal: "Behavioral Sleep Medicine",
          doi: "https://doi.org/10.1080/15402002.2021.1931221",
          year: 2022
        },
        {
          title: "Zhang, Y., Li, R., Miao, X., Cheng, L.J., & Lau, Y. (2022). Virtual motor training to improve the activities of daily living, hand grip, and gross motor function among children with cerebral palsy: Meta-regression analysis.",
          journal: "Gait & Posture",
          doi: "https://doi.org/10.1016/j.gaitpost.2021.10.046",
          year: 2022
        },
        {
          title: "Tan, S.W., Wu, A., Cheng, L.J., Wong, S.H., Lau, Y., & Lau, S.T. (2022). The Effectiveness of Transcranial Stimulation in Improving Swallowing Outcomes in Adults with Poststroke Dysphagia: A Systematic Review and Meta-analysis.",
          journal: "Dysphagia",
          doi: "https://doi.org/10.1007/s00455-022-10424-6",
          year: 2022
        },
        {
          title: "Lau, Y., Cheng, L.J., Chow, X.P., Chee, D., Lim, Z.J., Hamid, Z., Leong, B.S., & Lau, S.T. (2022). Evaluating the effectiveness of interprofessional advanced cardiac life support training: a sequential mixed-methods approach.",
          journal: "Journal of Interprofessional Care",
          doi: "https://doi.org/10.1080/13561820.2021.1892611",
          year: 2022
        },
        // ========== 2021 Publications ==========
        {
          title: "Cheng, L.J., Tan, L.Y.R., & Luo, N. (2021). Measurement Properties of the EQ VAS Around the Globe: A Systematic Review and Meta-Regression Analysis.",
          journal: "Value in Health",
          doi: "https://doi.org/10.1016/j.jval.2021.02.003",
          year: 2021
        },
        {
          title: "Lau, Y., Cheng, J.Y., Wong, S.H., Yen, K.Y., & Cheng, L.J. (2021). Effectiveness of Digital Psychotherapeutic Intervention among Perinatal Women: A Systematic and Meta-Analysis of Randomized Controlled Trials.",
          journal: "World Journal of Psychiatry",
          doi: "https://doi.org/10.5498/wjp.v11.i4.133",
          year: 2021
        },
        {
          title: "Ho, T., Cheng, L.J., & Lau, Y. (2021). School-based interventions for the treatment of childhood obesity: a systematic review, meta-analysis and meta-regression of cluster randomised controlled trials.",
          journal: "Public Health Nutrition",
          doi: "https://doi.org/10.1017/S1368980021001117",
          year: 2021
        },
        {
          title: "Shiau, C., Lim, S.M., Cheng, L.J., & Lau, Y. (2021). Effectiveness of Game-Based Self-Management Interventions for Individuals with Diabetes: A Systematic Review and Meta-analysis of Randomized Controlled Trials.",
          journal: "Games for Health Journal",
          doi: "https://doi.org/10.1089/g4h.2020.0203",
          year: 2021
        },
        {
          title: "Xu, Y., Lau, Y., Cheng, L.J., & Lau, S.T. (2021). Learning experiences of game-based educational intervention in nursing students: A systematic mixed-studies review.",
          journal: "Nurse Education Today",
          doi: "https://doi.org/10.1016/j.nedt.2021.105139",
          year: 2021
        },
        {
          title: "Tan, X., Choong, S., Cheng, L.J., & Lau, Y. (2021). Relaxation interventions for improving sleep outcomes in perinatal women: A systematic review and meta-analysis of randomized controlled trials.",
          journal: "Midwifery",
          doi: "https://doi.org/10.1016/j.midw.2021.103151",
          year: 2021
        },
        // ========== 2020 Publications ==========
        {
          title: "Cheng, L.J., Kumar, P.A., Wong, S.N., & Lau, Y. (2020). Technology-Delivered Psychotherapeutic Interventions in Improving Depressive Symptoms Among People with HIV/AIDS: A Systematic Review and Meta-analysis of Randomised Controlled Trials.",
          journal: "AIDS and Behavior",
          doi: "https://doi.org/10.1007/s10461-019-02691-6",
          year: 2020
        },
        {
          title: "Cheng, L.J., Jiang, Y., Wu, V.X., Wang, W. (2020). A Systematic Review and Meta-analysis: Vinegar Consumption on Glycemic Control in Adults with Type II Diabetes Mellitus.",
          journal: "Journal of Advanced Nursing",
          doi: "https://doi.org/10.1111/jan.14255",
          year: 2020
        },
        {
          title: "Cheng, L.J., & Lau, Y. (2020). The state of the evidence for voluntary home-based human immunodeficiency virus counseling and testing in the community: A proposed model for evidence translation.",
          journal: "Public Health Nursing",
          doi: "https://doi.org/10.1111/phn.12732",
          year: 2020
        },
        {
          title: "Lau, Y., Chee, D.G.H., Chow, X.P., Wong, S.H., Cheng, L.J., & Lau, S.T. (2020). Humanoid robot-assisted interventions among children with diabetes: A systematic scoping review.",
          journal: "International Journal of Nursing Studies",
          doi: "https://doi.org/10.1016/j.ijnurstu.2020.103749",
          year: 2020
        },
        {
          title: "Lau, Y., Chee, D.G.H., Chow, X.P., Cheng, L.J., & Wong, S.N. (2020). Personalized eHealth interventions in adults with overweight and obesity: a systematic review and meta-analysis of randomized controlled trials.",
          journal: "Preventive Medicine",
          doi: "https://doi.org/10.1016/j.ypmed.2020.106001",
          year: 2020
        },
        {
          title: "Goh, Q.L.P., Ser, T.F., Cooper, S., Cheng, L.J., & Liaw, S.Y. (2020). Nursing teamwork in general ward settings: A mixed-methods exploratory study among enrolled and registered nurses.",
          journal: "Journal of Clinical Nursing",
          doi: "https://doi.org/10.1111/jocn.15410",
          year: 2020
        },
        {
          title: "Wang, G., Zhao, M.L., Yang, F., Cheng, L.J., & Lau, Y. (2020). Game-based brain training for improving cognitive function in community-dwelling older adults: A systematic review and meta-regression.",
          journal: "Archives of Gerontology and Geriatrics",
          doi: "https://doi.org/10.1016/j.archger.2020.104260",
          year: 2020
        },
        {
          title: "Zhou, Y., Chia, H.W.A., Tang, H.W.K., Lim, S.Y.J., Toh, W.Y., Lim, X.L., Cheng, L.J., & Lau, Y. (2020). Efficacy of low-level light therapy for improving healing of diabetic foot ulcers: A systematic review and meta-analysis of randomised controlled trials.",
          journal: "Wound Repair and Regeneration",
          doi: "https://doi.org/10.1111/wrr.12871",
          year: 2020
        },
        {
          title: "Soh, Y.X., Nurul Khairani, A.R., Cheng, L.J., & Lau, Y. (2020). Determinants of childbirth self-efficacy among multi-ethnic pregnant women in Singapore: A structural equation modelling approach.",
          journal: "Midwifery",
          doi: "https://doi.org/10.1016/j.midw.2020.102716",
          year: 2020
        },
        // ========== 2019 Publications ==========
        {
          title: "Cheng, L.J., Wang, W., Lim, S.T., & Wu, V.X. (2019). Factors associated with glycaemic control in patients with diabetes mellitus: A systematic literature review.",
          journal: "Journal of Clinical Nursing",
          doi: "https://doi.org/10.1111/jocn.14795",
          year: 2019
        },
        {
          title: "Cheng, L.J., Wu, V.X., Dawkes, S., Lim, S.T., & Wang, W. (2019). Factors influencing diet barriers among outpatients with poorly‐controlled type 2 diabetes: A descriptive correlational study.",
          journal: "Nursing & Health Sciences",
          doi: "https://doi.org/10.1111/nhs.12569",
          year: 2019
        },
        {
          title: "Lau, Y., Fang, L., Cheng, L.J., & Kwong, H.K.D. (2019). Volunteer motivation, social problem solving, self-efficacy, and mental health: a structural equation model approach.",
          journal: "Educational Psychology",
          doi: "https://doi.org/10.1080/01443410.2018.1514102",
          year: 2019
        },
        // ========== 2018 Publications ==========
        {
          title: "Lau, Y., Cheng, L.J., Chi, C., Tsai, C., Ong, K.W., Ho-Lim, S.S.T., & Tan, K.L. (2018). Development of a Healthy Lifestyle Mobile App for Overweight Pregnant Women: Qualitative Study.",
          journal: "JMIR mHealth and uHealth",
          doi: "https://doi.org/10.2196/mhealth.9718",
          year: 2018
        }
      ]
    }
  },
  computed: {
    availableYears() {
      const years = [...new Set(this.publications.map(p => p.year))].sort((a, b) => {
        // Handle string years (Under Review, In Preparation)
        if (typeof a === 'string' && typeof b === 'string') return a.localeCompare(b)
        if (typeof a === 'string') return 1
        if (typeof b === 'string') return -1
        return b - a
      })
      return years
    },
    filteredPublications() {
      let filtered = this.publications

      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase()
        filtered = filtered.filter(pub => 
          pub.title.toLowerCase().includes(term) ||
          pub.journal.toLowerCase().includes(term)
        )
      }

      if (this.selectedYear) {
        filtered = filtered.filter(pub => String(pub.year) === String(this.selectedYear))
      }

      return filtered
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

.search-filter {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.search-input,
.year-filter {
  padding: 10px 12px;
  border: 1.5px solid #cfd8e3;
  border-radius: 6px;
  font-size: 1em;
  background: var(--background-light);
  transition: border-color 0.2s;
}

.search-input {
  flex: 1;
  min-width: 250px;
}

.search-input:focus,
.year-filter:focus {
  border-color: var(--primary-blue);
  outline: none;
}

.year-filter {
  min-width: 120px;
}

.pub-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pub-item {
  margin-bottom: 26px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.4s ease forwards;
}

.pub-title {
  font-weight: bold;
  color: var(--primary-blue);
  font-size: 1.07em;
  line-height: 1.4;
  margin-bottom: 8px;
}

.pub-journal {
  font-style: italic;
  color: var(--text-dark);
  margin-left: 8px;
}

.pub-meta {
  color: var(--text-light);
  font-size: 0.97em;
  margin-top: 4px;
}

.pub-year {
  font-weight: 500;
  color: var(--text-medium);
}

.pub-link {
  color: var(--accent-orange);
  text-decoration: underline;
  font-size: 0.97em;
  margin-left: 12px;
  transition: color 0.2s;
}

.pub-link:hover {
  color: var(--primary-blue);
}

.pub-note {
  margin-top: 32px;
  color: var(--text-light);
  font-size: 0.97em;
  text-align: center;
  font-style: italic;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .search-filter {
    flex-direction: column;
  }
  
  .search-input {
    min-width: auto;
  }
  
  .pub-title {
    font-size: 1em;
  }
}
</style>
