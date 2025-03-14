document.addEventListener("DOMContentLoaded", function () {
    // Image Slideshow
    const images = [
        "./img/career31.jpg",
        "./img/career3.jpg",
        "./img/career21.jpg",
        "./img/career4.jpg"
    ];
    let index = 0;
    const careerImage = document.getElementById("careerImage");

    function changeImage() {
        if (careerImage) {
            careerImage.src = images[index];
            index = (index + 1) % images.length;
            setTimeout(changeImage, 3000); // Change image every 3 seconds
        }
    }
    if (careerImage) changeImage();

    // Course Search and Redirect
    const searchBtn = document.getElementById("search-btn");
    const careerField = document.getElementById("career-field");
    const otherCourseInput = document.getElementById("other-course");

    if (careerField) {
        careerField.addEventListener("change", function () {
            if (otherCourseInput) {
                otherCourseInput.classList.toggle("hidden", careerField.value !== "Other");
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            let query = careerField?.value.trim() || "";
            if (query === "Other" && otherCourseInput) {
                query = otherCourseInput.value.trim() || "";
            }
            if (query) {
                window.location.href = `Course_details.html?course=${encodeURIComponent(query)}`;
            } else {
                alert("Please select or enter a course before searching.");
            }
        });
    }

    // Display Course Details on Course_details.html
    const params = new URLSearchParams(window.location.search);
    const selectedCourse = params.get("course");

    const coursesData = {
        "BCA": {
            "title": "Bachelor of Computer Applications (BCA)",
            "details": "Duration: 3 Years\nFocus: Computer Applications, Programming, Software Development.\n\nBCA stands for Bachelor of Computer Applications. It is a professional undergraduate degree designed for students who want to pursue a career in IT, software development, and data management. The BCA syllabus includes programming languages like Java, Python, and C++, database management systems (DBMS), web development, operating systems, and networking concepts. The course also covers data structures, artificial intelligence, cloud computing, and cybersecurity.\n\nBCA Eligibility Criteria:\n- Candidates must have completed Class 12 from a recognized board in any stream (Science/Commerce/Arts).\n- Some universities require Mathematics as a compulsory subject.\n- The minimum aggregate score requirement is 50% to 60% (varies by university).\n- Admission is either merit-based or through entrance exams like IPU CET, SET, CUET, etc.\n\nBCA Course Fees:\n- The fees for the BCA course range between INR 50,000 and INR 3 Lakh, depending on the institution.\n- Government colleges have lower fees compared to private institutions.\n\nBCA Entrance Exams:\n- CUET\n- IPU CET\n- SET (Symbiosis Entrance Test)\n- AIMA UGAT\n\nTop BCA Colleges in India:\n- Christ University, Bangalore\n- Loyola College, Chennai\n- Symbiosis Institute of Computer Studies and Research (SICSR), Pune\n- Amity University, Noida\n- NITs offering BCA\n\nBCA Career Options & Job Roles:\nGraduates can work in multiple domains, including IT companies, banking, e-commerce, and government sectors. Job roles include:\n- Software Developer\n- Web Developer\n- Database Administrator\n- Network Engineer\n- Cybersecurity Analyst\n- Cloud Computing Expert\n\nBCA Salary & Job Opportunities:\n- The average salary after BCA is INR 3 LPA to INR 10 LPA.\n- Top recruiters include Infosys, TCS, Wipro, Accenture, Capgemini, IBM, and HCL.\n\nGraduates can also pursue higher studies like MCA (Master of Computer Applications), MBA in IT, or certification courses in Data Science, AI, and Machine Learning.\n\nFor more details, candidates can explore the BCA syllabus, admission process, and career opportunities."
        },
        "B.Tech": {
            "title": "Bachelor of Technology (B.Tech)",
            "details": "Duration: 4 Years\nFocus: Engineering, Technology, and Specializations like CSE, ECE, Mechanical, Civil, and AI & Data Science.\n\nB.Tech, or Bachelor of Technology, is a professional undergraduate degree designed for students specializing in various engineering fields such as Computer Science, Mechanical, Electrical, Civil, and Electronics Engineering. The curriculum includes engineering mathematics, programming, circuit analysis, mechanics, artificial intelligence, and industrial applications. Students gain practical exposure through real-world projects, internships, and industrial training.\n\nEligibility Criteria:\n- Must have completed Class 12 with Science (PCM) from a recognized board.\n- Minimum aggregate score required: 50% to 75% (varies by university).\n- Admission is based on entrance exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, and SRMJEEE.\n\nCourse Fees:\n- Fees range from INR 1 Lakh to INR 10 Lakh, depending on the institution.\n- Government colleges (IITs, NITs) have lower fees compared to private institutions (BITS, VIT, SRM).\n\nEntrance Exams:\n- JEE Main – For NITs, IIITs, and GFTIs.\n- JEE Advanced – For IITs.\n- BITSAT – For BITS Pilani, Goa, Hyderabad.\n- VITEEE – For VIT University.\n- SRMJEEE – For SRM University.\n\nTop Colleges in India:\n- Indian Institutes of Technology (IITs)\n- National Institutes of Technology (NITs)\n- BITS Pilani\n- VIT Vellore\n- SRM Institute of Science and Technology\n- Delhi Technological University (DTU)\n\nCareer Options & Job Roles:\nB.Tech graduates have diverse career opportunities in software development, data science, artificial intelligence, and core engineering domains such as mechanical, electrical, and civil engineering. Common job roles include:\n- Software Engineer\n- Data Scientist\n- AI Engineer\n- Civil Engineer\n- Mechanical Engineer\n- Electronics Engineer\n\nSalary & Job Opportunities:\n- Average salary: INR 4 LPA to INR 25 LPA.\n- Top recruiters: Google, Microsoft, Amazon, Infosys, TCS, L&T, Tata Motors, and Bosch.\n\nGraduates can also pursue higher studies like M.Tech, MBA, or certification courses in emerging fields such as AI, Data Science, and Cyber Security."
        },
        "BBA": {
            "title": "Bachelor of Business Administration (BBA)",
            "details": "Duration: 3 Years\nFocus: Business Management, Marketing, Finance, Entrepreneurship.\n\nBBA full form is Bachelor of Business Administration. This undergraduate program is designed for students interested in management, business strategy, and financial decision-making. The BBA course covers subjects like Business Economics, Marketing Management, Organizational Behavior, and Financial Accounting. It prepares students for managerial roles in various industries.\n\nBBA Eligibility Criteria:\n- Candidates must have completed Class 12 from a recognized board.\n- Some universities may have entrance exams like IPU CET, DU JAT, or NPAT.\n\nBBA Course Fees:\n- Fees range from INR 50,000 to INR 5 Lakh, depending on the institute.\n\nTop BBA Colleges in India:\n- Shaheed Sukhdev College of Business Studies, DU\n- NMIMS, Mumbai\n- Christ University, Bangalore\n- Symbiosis Centre for Management Studies\n\nBBA Career Options & Salary:\n- Marketing Manager (INR 4-10 LPA)\n- HR Manager (INR 5-12 LPA)\n- Business Development Executive (INR 3-7 LPA)\n- Entrepreneur\n\nGraduates can also pursue an MBA for higher managerial roles."
        },
        "BA": {
            "title": "Bachelor of Arts (BA)",
            "details": "Duration: 3 Years\nFocus: Humanities, Social Sciences, Literature, Political Science, Psychology.\n\nBA full form is Bachelor of Arts. This undergraduate degree focuses on liberal arts and social sciences, preparing students for careers in education, journalism, public administration, and research. Specializations include History, Political Science, Sociology, and Psychology.\n\nBA Eligibility Criteria:\n- Class 12 completion from a recognized board.\n- Admission is merit-based or through university entrance exams.\n\nBA Course Fees:\n- Fees range from INR 10,000 to INR 2 Lakh.\n\nTop BA Colleges in India:\n- St. Stephen’s College, Delhi\n- Lady Shri Ram College, Delhi\n- Presidency University, Kolkata\n- Loyola College, Chennai\n\nBA Career Options & Salary:\n- Teacher (INR 3-6 LPA)\n- Journalist (INR 4-8 LPA)\n- Civil Services (IAS, IPS, UPSC Exams)\n- Content Writer (INR 3-7 LPA)\n\nBA graduates can pursue MA, MBA, or professional certifications."
        },
        "B.Sc": {
            "title": "Bachelor of Science (B.Sc)",
            "details": "Duration: 3 Years\nFocus: Science, Research, and Specialized Areas like Physics, Chemistry, Biology, Mathematics, IT.\n\nB.Sc full form is Bachelor of Science. This course is designed for students interested in research, healthcare, and technical sciences. It includes subjects like Microbiology, Environmental Science, and Computer Science.\n\nB.Sc Eligibility Criteria:\n- Class 12 in Science stream (PCM/PCB) from a recognized board.\n- Some universities require entrance exams.\n\nB.Sc Course Fees:\n- Fees range from INR 20,000 to INR 3 Lakh.\n\nTop B.Sc Colleges in India:\n- IISc Bangalore\n- St. Xavier’s College, Mumbai\n- Miranda House, Delhi\n- Christ University, Bangalore\n\nB.Sc Career Options & Salary:\n- Research Scientist (INR 6-12 LPA)\n- Lab Technician (INR 3-6 LPA)\n- Data Analyst (INR 5-10 LPA)\n\nGraduates can pursue M.Sc, MCA, or specialized certifications in AI, ML, or Data Science."
        },
        "B.Com": {
            "title": "Bachelor of Commerce (B.Com)",
            "details": "Duration: 3 Years\nFocus: Business, Accounting, Finance, Economics, Banking.\n\nB.Com full form is Bachelor of Commerce. This degree prepares students for careers in finance, banking, and taxation. It covers subjects like Corporate Accounting, Business Law, and Financial Management.\n\nB.Com Eligibility Criteria:\n- Class 12 completion from a recognized board (preferably Commerce stream).\n- Admission can be merit-based or through university entrance exams.\n\nB.Com Course Fees:\n- Fees range from INR 15,000 to INR 3 Lakh.\n\nTop B.Com Colleges in India:\n- Shri Ram College of Commerce (SRCC), Delhi\n- Christ University, Bangalore\n- Narsee Monjee College, Mumbai\n- Loyola College, Chennai\n\nB.Com Career Options & Salary:\n- Accountant (INR 3-6 LPA)\n- Financial Analyst (INR 4-10 LPA)\n- Tax Consultant (INR 4-8 LPA)\n\nGraduates can pursue M.Com, CA, CFA, or MBA in Finance."
        },
        "MBA": {
            "title": "Master of Business Administration (MBA)",
            "details": "Duration: 2 Years\nFocus: Business Management, Finance, Marketing, HR, Strategy, Analytics.\n\nMBA full form is Master of Business Administration. This postgraduate program is designed for professionals who want to develop business leadership skills. It offers specializations like Finance, HR, Marketing, Operations, and Business Analytics.\n\nMBA Eligibility Criteria:\n- Bachelor's degree with minimum 50% aggregate.\n- Qualifying scores in CAT, XAT, GMAT, or MAT.\n\nMBA Course Fees:\n- Fees range from INR 2 Lakh to INR 25 Lakh.\n\nTop MBA Colleges in India:\n- IIM Ahmedabad\n- IIM Bangalore\n- XLRI Jamshedpur\n- FMS Delhi\n- ISB Hyderabad\n\nMBA Career Options & Salary:\n- Marketing Manager (INR 8-20 LPA)\n- Investment Banker (INR 10-25 LPA)\n- HR Manager (INR 7-18 LPA)\n- Business Consultant (INR 12-30 LPA)\n\nMBA graduates have opportunities in corporate leadership, entrepreneurship, and global business consulting."
        },
        "MCA": {
            "title": "Master of Computer Applications (MCA)",
            "details": "Duration: 2 Years\nFocus: Advanced Computer Science, Software Development, AI, Data Science, Cloud Computing.\n\nMCA full form is Master of Computer Applications. This postgraduate program is designed for students who want to specialize in programming, software engineering, cybersecurity, and IT consulting. MCA is ideal for those with a BCA, B.Sc (CS), or B.Tech background.\n\nMCA Eligibility Criteria:\n- Bachelor's degree in Computer Science, BCA, or equivalent with at least 50% aggregate.\n- Some universities require entrance exams like NIMCET, MAH MCA CET, IPU CET.\n\nMCA Course Fees:\n- Fees range from INR 50,000 to INR 5 Lakh, depending on the institute.\n\nTop MCA Colleges in India:\n- NIT Trichy\n- JNU, Delhi\n- NIT Warangal\n- VIT Vellore\n- Christ University, Bangalore\n\nMCA Career Options & Salary:\n- Software Developer (INR 5-15 LPA)\n- Data Scientist (INR 7-20 LPA)\n- Cloud Engineer (INR 6-18 LPA)\n- IT Consultant (INR 10-30 LPA)\n\nGraduates can also pursue a PhD or certifications in AI, ML, and Data Analytics."
        },
        "LLB": {
            "title": "Bachelor of Laws (LLB)",
            "details": "Duration: 3 Years\nFocus: Legal Studies, Judiciary, Corporate Law, Civil & Criminal Law.\n\nLLB full form is Bachelor of Laws. This professional degree is essential for becoming a lawyer, legal advisor, or judge. The course covers subjects like Constitutional Law, Criminal Law, and Business Law.\n\nLLB Eligibility Criteria:\n- A bachelor's degree in any discipline with at least 45% marks.\n- Some universities require entrance exams like CLAT, AILET, LSAT India.\n\nLLB Course Fees:\n- Fees range from INR 20,000 to INR 3 Lakh.\n\nTop LLB Colleges in India:\n- National Law School of India University (NLSIU), Bangalore\n- Faculty of Law, Delhi University\n- NALSAR Hyderabad\n- Symbiosis Law School, Pune\n\nLLB Career Options & Salary:\n- Lawyer (INR 5-20 LPA)\n- Legal Advisor (INR 6-15 LPA)\n- Judge (After clearing Judicial Services Exam, salary INR 10-30 LPA)\n- Corporate Legal Consultant (INR 8-25 LPA)\n\nGraduates can pursue an LLM or appear for judicial exams like PCS(J), UPSC Law Services."
        },
        "PGDM": {
            "title": "Post Graduate Diploma in Management (PGDM)",
            "details": "Duration: 2 Years\nFocus: Business Management, Leadership, Finance, Marketing, HR.\n\nPGDM full form is Post Graduate Diploma in Management. This is an industry-focused alternative to an MBA, often offered by autonomous institutes like IIMs. The curriculum is designed for those aiming for leadership roles in business, consulting, and entrepreneurship.\n\nPGDM Eligibility Criteria:\n- Bachelor's degree with at least 50% aggregate.\n- Entrance exams like CAT, XAT, MAT, CMAT, GMAT.\n\nPGDM Course Fees:\n- Fees range from INR 5 Lakh to INR 25 Lakh.\n\nTop PGDM Colleges in India:\n- IIM Ahmedabad\n- IIM Bangalore\n- XLRI Jamshedpur\n- SPJIMR Mumbai\n\nPGDM Career Options & Salary:\n- Business Consultant (INR 10-25 LPA)\n- Marketing Manager (INR 8-20 LPA)\n- Investment Banker (INR 12-30 LPA)\n- Operations Manager (INR 7-18 LPA)\n\nGraduates can pursue international certifications like CFA, PMP, or expand into entrepreneurship."
        },
        "D.El.Ed": {
            "title": "Diploma in Elementary Education (D.El.Ed)",
            "details": "Duration: 2 Years\nFocus: Teacher Training for Primary & Elementary Education.\n\nD.El.Ed full form is Diploma in Elementary Education. This program trains candidates to become primary school teachers, focusing on pedagogy, child psychology, and classroom management.\n\nD.El.Ed Eligibility Criteria:\n- Class 12 pass with at least 50% marks.\n- Admission through merit or state-level entrance exams.\n\nD.El.Ed Course Fees:\n- Fees range from INR 10,000 to INR 1.5 Lakh.\n\nTop D.El.Ed Colleges in India:\n- Jamia Millia Islamia, Delhi\n- IGNOU (Distance Mode)\n- Lady Irwin College, Delhi\n- DIET (District Institutes of Education & Training)\n\nD.El.Ed Career Options & Salary:\n- Primary School Teacher (INR 2-5 LPA)\n- Education Administrator (INR 3-8 LPA)\n- Curriculum Designer (INR 4-10 LPA)\n\nGraduates can pursue a B.Ed for higher teaching roles or prepare for government teaching exams like CTET, TET."
        },
        "B.Ed": {
            "title": "Bachelor of Education (B.Ed)",
            "details": "Duration: 2 Years\nFocus: Secondary & Higher Secondary Teacher Training.\n\nB.Ed full form is Bachelor of Education. This course is a professional qualification for individuals aiming to become teachers at the high school and higher secondary levels.\n\nB.Ed Eligibility Criteria:\n- A bachelor's degree in any discipline with at least 50% marks.\n- Entrance exams like DU B.Ed, IGNOU B.Ed, MAH B.Ed CET.\n\nB.Ed Course Fees:\n- Fees range from INR 20,000 to INR 2 Lakh.\n\nTop B.Ed Colleges in India:\n- Banaras Hindu University (BHU)\n- Delhi University (DU)\n- Jamia Millia Islamia\n- Lady Irwin College\n\nB.Ed Career Options & Salary:\n- High School Teacher (INR 4-8 LPA)\n- Principal (INR 8-15 LPA)\n- Educational Consultant (INR 6-12 LPA)\n\nB.Ed graduates can appear for TET, CTET, or NET exams for government teaching jobs."
        },
        "Hotel Management": {
            "title": "Bachelor in Hotel Management (BHM)",
            "details": "Duration: 3-4 Years\nFocus: Hospitality Management, Food & Beverage Service, Tourism, Hotel Operations.\n\nBHM full form is Bachelor in Hotel Management. This program focuses on hospitality management, event planning, catering, and customer service, preparing students for careers in the tourism and hospitality sector.\n\nHotel Management Eligibility Criteria:\n- Class 12 pass with at least 50% marks.\n- Some institutes require entrance exams like NCHM JEE, AIMA UGAT, IIHM eCHAT.\n\nHotel Management Course Fees:\n- Fees range from INR 1 Lakh to INR 5 Lakh.\n\nTop Hotel Management Colleges in India:\n- Institute of Hotel Management (IHM), Mumbai\n- IHM Pusa, New Delhi\n- Welcomgroup Graduate School of Hotel Administration (WGSHA), Manipal\n- IIHM, Kolkata\n\nHotel Management Career Options & Salary:\n- Hotel Manager (INR 6-15 LPA)\n- Event Manager (INR 5-12 LPA)\n- Food & Beverage Manager (INR 4-10 LPA)\n- Travel & Tourism Manager (INR 5-12 LPA)\n\nGraduates can pursue an MBA in Hospitality Management or specialize in luxury brand management."
        },
        "BAMS": {
            "title": "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
            "details": "Duration: 5.5 Years (including 1-year internship)\nFocus: Ayurvedic Medicine, Surgery, Panchakarma, Herbal Treatment.\n\nBAMS full form is Bachelor of Ayurvedic Medicine and Surgery. It is a professional degree in Ayurveda, an alternative medicine system that focuses on natural healing, herbal medicine, and ancient treatment methods.\n\nBAMS Eligibility Criteria:\n- Class 12 with Physics, Chemistry, Biology (PCB) with at least 50% marks.\n- Admission through NEET-UG.\n\nBAMS Course Fees:\n- Fees range from INR 50,000 to INR 4 Lakh.\n\nTop BAMS Colleges in India:\n- Banaras Hindu University (BHU), Varanasi\n- National Institute of Ayurveda, Jaipur\n- Gujarat Ayurved University, Jamnagar\n- Patanjali Ayurved College, Haridwar\n\nBAMS Career Options & Salary:\n- Ayurvedic Doctor (INR 6-15 LPA)\n- Ayurvedic Researcher (INR 5-12 LPA)\n- Medical Consultant (INR 8-20 LPA)\n- Panchakarma Therapist (INR 4-10 LPA)\n\nGraduates can pursue MD in Ayurveda or work in wellness centers, pharmaceutical companies, and government hospitals."
        },
        "B.Sc Nursing": {
            "title": "Bachelor of Science in Nursing (B.Sc Nursing)",
            "details": "Duration: 4 Years\nFocus: Nursing, Patient Care, Healthcare Services, Medical Assistance.\n\nB.Sc Nursing full form is Bachelor of Science in Nursing. This program trains students to become registered nurses (RNs) and healthcare professionals, focusing on medical care, emergency response, and patient management.\n\nB.Sc Nursing Eligibility Criteria:\n- Class 12 with Physics, Chemistry, Biology (PCB) with at least 50% marks.\n- Admission through NEET-UG, AIIMS B.Sc Nursing, JIPMER Nursing Entrance.\n\nB.Sc Nursing Course Fees:\n- Fees range from INR 20,000 to INR 2 Lakh.\n\nTop B.Sc Nursing Colleges in India:\n- AIIMS, New Delhi\n- Christian Medical College (CMC), Vellore\n- Armed Forces Medical College (AFMC), Pune\n- Manipal College of Nursing, Manipal\n\nB.Sc Nursing Career Options & Salary:\n- Registered Nurse (INR 4-10 LPA)\n- Nursing Officer (INR 6-12 LPA)\n- Healthcare Administrator (INR 5-15 LPA)\n- Medical Researcher (INR 7-18 LPA)\n\nGraduates can pursue an M.Sc in Nursing, PG Diploma in Critical Care Nursing, or specialize in neonatal, oncology, and psychiatric nursing."
        },
        "B.Pharm": {
            "title": "Bachelor of Pharmacy (B.Pharm)",
            "details": "Duration: 4 Years\nFocus: Pharmaceutical Sciences.\nFuture Prospects: Careers in pharmaceutical sales, drug formulation, and research.\n\nBAMS full form in medical is Bachelor of Ayurveda Medicine and Surgery. The BAMS course is a professional UG degree in Ayurveda, the traditional system of medicine in India. Also called an Ayurvedic Doctor course, the BAMS degree covers subjects like Ayurvedic principles, modern medical sciences, herbal medicine, and therapeutic techniques. The BAMS course duration is 5.5 years, including a one-year internship.\n\nThe BAMS eligibility states that candidates must have passed Class 12 in Science (PCB) with 50% to 60% aggregate scores. Candidates must also pass NEET to be admitted to the BAMS course. Only the NEET scores are accepted for BAMS courses. The BAMS course fees range between INR 20,000 and INR 3 Lakh. The popular colleges that offer BAMS courses are DMIHER, Parul University, SGT University, MUHS, Kerala University of Health Sciences, etc.\n\nOn graduating with a BAMS course, candidates can opt for job profiles such as Business Development Officers, Ayurvedic Doctors, Category Managers, etc. The average salary that a BAMS course graduate earns ranges between INR 3 LPA and INR 15 LPA.\n\nCandidates can continue reading further to learn more about the BAMS course details such as BAMS full form in Medical, BAMS course fees, BAMS syllabus, BAMS eligibility criteria, BAMS colleges, etc."
        },
        "BUPHS": {
            "title": "Bachelors in Urban Planning and Housing Studies (BUPHS)",
            "details": "Duration: 4 Years\nFocus: Urban Development, Smart City Planning, Real Estate Development, Architecture.\n\nBUPHS full form is Bachelors in Urban Planning and Housing Studies. This program focuses on city infrastructure, land use, housing policies, and sustainable urban design.\n\nBUPHS Eligibility Criteria:\n- Class 12 with Physics, Chemistry, and Mathematics (PCM).\n- Admission via NATA, JEE Paper 2, or university-specific entrance exams.\n\nBUPHS Course Fees:\n- Fees range from INR 1.5 Lakh to INR 4 Lakh.\n\nTop BUPHS Colleges in India:\n- School of Planning and Architecture (SPA), Delhi\n- CEPT University, Ahmedabad\n- IIT Kharagpur (Department of Architecture & Regional Planning)\n- National Institute of Urban Affairs (NIUA), Delhi\n\nBUPHS Career Options & Salary:\n- Urban Planner (INR 6-12 LPA)\n- Real Estate Consultant (INR 5-10 LPA)\n- Town Planner (INR 6-15 LPA)\n- GIS Analyst (INR 5-12 LPA)\n\nGraduates can pursue a Master's in Urban Planning (MUP), Housing Policy, or specialize in Smart Cities and Sustainable Development."
        },
        "M.Tech": {
            "title": "Master of Technology (M.Tech)",
            "details": "Duration: 2 Years\nFocus: Advanced Engineering, Research, Technology Development.\n\nM.Tech full form is Master of Technology. This program offers specialization in areas like Artificial Intelligence, Data Science, Civil Engineering, Electrical Engineering, and more.\n\nM.Tech Eligibility Criteria:\n- B.Tech/B.E. degree with at least 55% marks.\n- Admission via GATE, university-specific entrance exams.\n\nM.Tech Course Fees:\n- Fees range from INR 50,000 to INR 3 Lakh.\n\nTop M.Tech Colleges in India:\n- IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur\n- NIT Trichy, NIT Surathkal, NIT Warangal\n- BITS Pilani, IIIT Hyderabad\n\nM.Tech Career Options & Salary:\n- Data Scientist (INR 12-25 LPA)\n- Software Engineer (INR 8-20 LPA)\n- Research Scientist (INR 10-22 LPA)\n- Robotics Engineer (INR 8-18 LPA)\n\nGraduates can pursue a PhD, move into research, or enter high-paying tech roles in MNCs and startups."
        },
        "B.Sc Agriculture": {
            "title": "Bachelor of Science in Agriculture (B.Sc Agriculture)",
            "details": "Duration: 4 Years\nFocus: Agricultural Sciences, Crop Production, Soil Science, Agronomy.\n\nB.Sc Agriculture full form is Bachelor of Science in Agriculture. This program covers farming techniques, biotechnology, agribusiness, and rural development.\n\nB.Sc Agriculture Eligibility Criteria:\n- Class 12 with Physics, Chemistry, Biology (PCB) or Agriculture stream.\n- Admission via ICAR AIEEA, state-level entrance exams.\n\nB.Sc Agriculture Course Fees:\n- Fees range from INR 20,000 to INR 2 Lakh.\n\nTop B.Sc Agriculture Colleges in India:\n- Punjab Agricultural University (PAU), Ludhiana\n- Tamil Nadu Agricultural University (TNAU), Coimbatore\n- Acharya N.G. Ranga Agricultural University (ANGRAU), Andhra Pradesh\n- Indian Agricultural Research Institute (IARI), New Delhi\n\nB.Sc Agriculture Career Options & Salary:\n- Agricultural Scientist (INR 6-15 LPA)\n- Agribusiness Manager (INR 5-12 LPA)\n- Soil Conservationist (INR 6-10 LPA)\n- Horticulturist (INR 5-10 LPA)\n\nGraduates can pursue an M.Sc in Agriculture, work in government agricultural research agencies, or join agro-industries."
        },
        "GNM": {
            "title": "General Nursing and Midwifery (GNM)",
            "details": "Duration: 3 Years\nFocus: Clinical Nursing, Midwifery, and Patient Care.\n\nGNM full form is General Nursing and Midwifery. This diploma program focuses on patient care, medical ethics, maternal care, and nursing practices.\n\nGNM Eligibility Criteria:\n- Class 12 with Science (PCB) or any stream with at least 40-50% marks.\n- Admission via state-level entrance exams or merit-based selection.\n\nGNM Course Fees:\n- Fees range from INR 50,000 to INR 2 Lakh.\n\nTop GNM Colleges in India:\n- AIIMS, New Delhi\n- Christian Medical College (CMC), Vellore\n- Rajkumari Amrit Kaur College of Nursing, Delhi\n- Armed Forces Medical College (AFMC), Pune\n\nGNM Career Options & Salary:\n- Staff Nurse (INR 3-6 LPA)\n- Nursing Supervisor (INR 4-8 LPA)\n- Midwife (INR 3-7 LPA)\n- Home Healthcare Nurse (INR 3-6 LPA)\n\nGraduates can pursue a B.Sc Nursing for higher studies and better career prospects."
        },
        "ANM": {
            "title": "Auxiliary Nursing and Midwifery (ANM)",
            "details": "Duration: 2 Years\nFocus: Primary Healthcare, Community Nursing, and Basic Medical Services.\n\nANM full form is Auxiliary Nursing and Midwifery. This diploma focuses on maternal care, vaccinations, rural healthcare, and first aid training.\n\nANM Eligibility Criteria:\n- Class 12 with any stream (Science preferred) and minimum 40-50% marks.\n- Admission based on merit or state-level nursing entrance exams.\n\nANM Course Fees:\n- Fees range from INR 30,000 to INR 1.5 Lakh.\n\nTop ANM Colleges in India:\n- AIIMS, New Delhi\n- Apollo School of Nursing, Hyderabad\n- Tata Memorial Hospital, Mumbai\n- Safdarjung Hospital, Delhi\n\nANM Career Options & Salary:\n- Community Health Worker (INR 2.5-5 LPA)\n- Rural Healthcare Nurse (INR 2-5 LPA)\n- Midwife in Government Hospitals (INR 3-6 LPA)\n- Primary Health Centre Nurse (INR 3-5 LPA)\n\nANM graduates can upgrade to GNM or B.Sc Nursing for better opportunities."
        },
        "BPT": {
            "title": "Bachelor of Physiotherapy (BPT)",
            "details": "Duration: 4.5 Years (Includes 6-month Internship)\nFocus: Physiotherapy, Rehabilitation, and Movement Therapy.\n\nBPT full form is Bachelor of Physiotherapy. This program covers anatomy, musculoskeletal rehabilitation, neurology, and exercise therapy.\n\nBPT Eligibility Criteria:\n- Class 12 with Physics, Chemistry, and Biology (PCB) with minimum 50% marks.\n- Admission via NEET, state-level entrance exams, or university-specific tests.\n\nBPT Course Fees:\n- Fees range from INR 1 Lakh to INR 5 Lakh.\n\nTop BPT Colleges in India:\n- Christian Medical College (CMC), Vellore\n- Manipal College of Allied Health Sciences, Manipal\n- Sri Ramachandra Institute of Higher Education, Chennai\n- AIIMS, New Delhi\n\nBPT Career Options & Salary:\n- Physiotherapist (INR 5-12 LPA)\n- Rehabilitation Specialist (INR 6-15 LPA)\n- Sports Physiotherapist (INR 7-18 LPA)\n- Orthopedic Physiotherapist (INR 6-14 LPA)\n\nBPT graduates can pursue MPT (Master of Physiotherapy) for specialization in Neurology, Cardiorespiratory, or Sports Physiotherapy."
        },
        "BJMC": {
            "title": "Bachelor of Journalism and Mass Communication (BJMC)",
            "details": "Duration: 3 Years\nFocus: Journalism, Media Studies, Public Relations, and Digital Media.\n\nBJMC full form is Bachelor of Journalism and Mass Communication. The course covers news reporting, media ethics, advertising, radio, television, and digital journalism.\n\nBJMC Eligibility Criteria:\n- Class 12 with any stream and minimum 50% marks.\n- Admission via CUET, IPU CET, or university-specific entrance exams.\n\nBJMC Course Fees:\n- Fees range from INR 50,000 to INR 3 Lakh.\n\nTop BJMC Colleges in India:\n- Indian Institute of Mass Communication (IIMC), Delhi\n- Jamia Millia Islamia (JMI), Delhi\n- Symbiosis Institute of Media and Communication, Pune\n- Xavier Institute of Communication, Mumbai\n\nBJMC Career Options & Salary:\n- Journalist (INR 4-12 LPA)\n- News Anchor (INR 6-15 LPA)\n- Digital Content Creator (INR 5-12 LPA)\n- Public Relations Officer (INR 4-10 LPA)\n\nBJMC graduates can pursue an MJMC (Master of Journalism & Mass Communication) for specialization in Print, Digital, or Investigative Journalism."
        },
        "Other": {
            "title": "Other Course",
            "details": "Contact us at 79036517757 or 343rohi@gmail.com for more details.\nWe are happy to assist you with any queries related to other courses."
        }
    };

    const courseTitle = document.getElementById("course-title");
    const courseDetails = document.getElementById("course-details");

    if (courseTitle && courseDetails) {
        const courseInfo = coursesData[selectedCourse] || {
            title: "Course Not Found",
            details: "The course details are not available. Please contact us for more information."
        };
        courseTitle.innerText = courseInfo.title;
        courseDetails.innerText = courseInfo.details;
    }

    // EmailJS Initialization
    if (window.emailjs) {
        emailjs.init("xI4ROJaj9deFJuzUM"); // Replace with your EmailJS Public Key
    } else {
        console.error("EmailJS is not loaded.");
    }

    // Appointment Form Handling
    const appointmentForm = document.getElementById("appointmentForm");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById("name")?.value.trim(),
                email: document.getElementById("email")?.value.trim(),
                phone: document.getElementById("phone")?.value.trim(),
                date: document.getElementById("date")?.value.trim(),
                education: document.getElementById("education")?.value.trim(),
                interest: document.getElementById("interest")?.value.trim(),
                goals: document.getElementById("goals")?.value.trim(),
                queries: document.getElementById("queries")?.value.trim()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.phone || !formData.date) {
                alert("Please fill in all required fields.");
                return;
            }

            // Send emails separately and handle errors
            let userEmailSent = emailjs.send("service_2syb9eq", "template_bc8k2xs", formData);
            let adminEmailSent = emailjs.send("service_2syb9eq", "template_ghkc6g5", formData);

            Promise.allSettled([userEmailSent, adminEmailSent])
                .then(results => {
                    const userResult = results[0];
                    const adminResult = results[1];

                    if (userResult.status === "fulfilled" && adminResult.status === "fulfilled") {
                        alert("Your appointment request has been sent successfully!");
appointmentForm.reset();
window.location.href = "index.html"; // Redirect to the home page

                    } else {
                        alert("Failed to send the request. Please try again.");
                    }
                })
                .catch(error => {
                    console.error("Error Sending Email:", error);
                    alert("Failed to send request. Please try again.");
                });
        });
    }
});