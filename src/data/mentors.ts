import avatar from "@/assets/hero/hero6.webp";
import { 
  dhanya, hajisha, ashitha, akhila, aruna, amal, afsal_niyas, kadheeja_minha, 
  arya, ayisha, rabih, renjitha, chandini, jayakrishnan, sanooba, nidal, 
  lukman, ansad, deepa, ashique, najumuneesa, rashid, farhan, aishwrya, 
  ashwathi, priyesh, noorbina, sebin, junaid, jasmin, anusree, kavya, 
  dimble, dinkle, praseetha, bhavya, sujil, shijin, sooraj, swathy, 
  dilrooba, thasmiya, thamannah, thaliya, swalih, shabab, sreelekshmi,
  sreevignesh,hashir
} from "@/assets/mentors";

export interface Mentor {
  name: string;
  role: string;
  qualification: string;
  image: string;
  courses: ('nios' | 'degree' | 'academic')[];
}

export const mentors: Mentor[] = [
  {
    name: "DHANYA",
    role: "COMMERCE",
    qualification: "M. Com, MBA, Ph.D Scholar, UGC NET",
    image: dhanya,
    courses: ['degree']
  },
  {
    name: "SUJIL",
    role: "COMMERCE",
    qualification: "B. Com, M. Com, B. Ed, SET, UGC NET, 7 Years Teaching Experience",
    image: sujil,
    courses: ['degree']
  },
  {
    name: "HASHIR",
    role: "COMMERCE",
    qualification: "B. Com, M.com, UGC NET",
    image: hashir,
    courses: ['degree']
  },
  {
    name: "SHIJIN",
    role: "COMMERCE",
    qualification: "B. Com, M. com, B.Ed, UGC NET",
    image: shijin,
    courses: ['degree']
  },
  {
    name: "HAJISHA",
    role: "COMMERCE",
    qualification: "B.Com, M.Com, MBA, B.Ed, UGC NET, SET, JRF 2025",
    image: hajisha,
    courses: ['degree']
  },
  {
    name: "DR. ASHITHA",
    role: "COMMERCE",
    qualification: "NMMS Scholarship - 2009, Central Sector Scholarship - 2012, Kerala State Higher Education Council Scholarship - 2012, UGC NET - 2017, M.com First Rank in Calicut University Department - 2017, Phd, UGC JRF - 2019, Best Paper Awards - 2019 two times",
    image: ashitha,
    courses: ['degree']
  },
  {
    name: "AKHILA",
    role: "COMMERCE",
    qualification: "B. Com, M.Com Finance, UGC NET (2023), JRF (2025)",
    image: akhila,
    courses: ['degree']
  },
  {
    name: "SOORAJ",
    role: "MALAYALAM",
    qualification: "MA Malayalam 1ST RANK HOLDER (UNIVERSITY OF MADRAS-2022), G.PADMA RAO NATIONAL AWARD- 2022, B. Ed, UGC Net, SET",
    image: sooraj,
    courses: ['degree']
  },
  {
    name: "DR. ARUNA",
    role: "MALAYALAM",
    qualification: "Ma MALAYALAM 1st Rank MADRAS UNIVERSITY, M. Phil, B.Ed, PHD, Ugc NET (2019)",
    image: aruna,
    courses: ['degree']
  },
  {
    name: "AMAL",
    role: "MALAYALAM",
    qualification: "Second Rank – M.A. Malayalam, University of Madras, B.A., M.A., B.Ed. in Malayalam, Qualified UGC NET (2023) SET, KTET, CTET",
    image: amal,
    courses: ['degree']
  },
  {
    name: "SWATHY",
    role: "MALAYALAM",
    qualification: "2ND RANK HOLDER IN MALAYALAM MADRAS UNIVERSITY, BA MALAYALAM, Ph.D SCHOLAR",
    image: swathy,
    courses: ['degree']
  },
  {
    name: "NIYAS",
    role: "ENGLISH",
    qualification: "MA English Language and Literature, BA English, UGC NET (2019, 2020), JRF 2020",
    image: afsal_niyas,
    courses: ['degree']
  },
  {
    name: "KADHEEJA MINHA",
    role: "ENGLISH",
    qualification: "MA English Language and Literature, BA English, UGC NET",
    image: kadheeja_minha,
    courses: ['degree']
  },
  {
    name: "ARYA K",
    role: "ENGLISH",
    qualification: "MA English, BA English, UGC NET",
    image: arya,
    courses: ['degree']
  },
  {
    name: "AYISHA JULKHA",
    role: "ENGLISH",
    qualification: "MA English, BA English, UGC NET",
    image: ayisha,
    courses: ['degree']
  },
  {
    name: "DILRUBA. K",
    role: "ENGLISH",
    qualification: "MA English, BA English, UGC NET",
    image: dilrooba,
    courses: ['degree']
  },
  {
    name: "THASMIYA RASHEED",
    role: "ENGLISH",
    qualification: "MA English, SET, UGC NET (2022, 23, 24, 25)",
    image: thasmiya,
    courses: ['degree']
  },
  {
    name: "THAMANNAH",
    role: "ENGLISH",
    qualification: "MA English, TET, Communicative English Trainer",
    image: thamannah,
    courses: ['degree']
  },
  {
    name: "RABEEH",
    role: "ENGLISH",
    qualification: "MA English, B. Ed, KTET, CTET, SET, GATE, UGC NET",
    image: rabih,
    courses: ['degree']
  },
  {
    name: "RENJITHA. K. R",
    role: "ENGLISH",
    qualification: "MA English, BA English, M.Phil, UGC NET 2024",
    image: renjitha,
    courses: ['degree']
  },
  {
    name: "CHANDINI",
    role: "HISTORY",
    qualification: "MA HISTORY 1ST RANK KERALA UNIVERSITY, UGC NET (2023, 2024), Ph.D SCHOLAR",
    image: chandini,
    courses: ['degree']
  },
  {
    name: "JAYA KRISHNAN",
    role: "HISTORY",
    qualification: "MA History 1ST RANK KANNUR UNIVERSITY, B.Ed, SET, KTET, UGC NET, 5 YEARS TEACHING EXPERIENCE",
    image: jayakrishnan,
    courses: ['degree']
  },
  {
    name: "FATHIMA SANOOBA",
    role: "HISTORY",
    qualification: "MA History, CTET, KTET, SET, UGC NET, JRF (2019)",
    image: sanooba,
    courses: ['degree']
  },
  {
    name: "AHMAD NIDAL",
    role: "HISTORY",
    qualification: "BA HISTORY, BA ENGLISH, MA HISTORY (2), MA ENGLISH, MA SOCIOLOGY, B.Ed, KTET, CTET, SET, UGC NET (4 SUBJECT)",
    image: nidal,
    courses: ['degree']
  },
  {
    name: "DR. LUKMAN",
    role: "HISTORY",
    qualification: "MA History, BA History, Ph.D in History (2025), UGC NET 2014",
    image: lukman,
    courses: ['degree']
  },
  {
    name: "DR. ANSAD",
    role: "HISTORY",
    qualification: "MA History, BA History, PhD in History, UGC Net June 2015",
    image: ansad,
    courses: ['degree']
  },
  {
    name: "DEEPA",
    role: "MANAGEMENT",
    qualification: "MBA, B. Com, PG Diploma, UGC NET, 13 Years Teaching Experience",
    image: deepa,
    courses: ['degree']
  },
  {
    name: "ASHIQUE",
    role: "MANAGEMENT",
    qualification: "BBA, M.Com, B.Ed, SET, UGC NET",
    image: ashique,
    courses: ['degree']
  },
  {
    name: "NAJUMUNNEESA",
    role: "SOCIOLOGY",
    qualification: "MA Sociology 3rd RANK (Jamia Millia Islamiya), BA Sociology, 7 Years Exp",
    image: najumuneesa,
    courses: ['degree']
  },
  {
    name: "THALIYA",
    role: "SOCIOLOGY",
    qualification: "MA Sociology 1st Rank (University of Calicut), BEd, UGC NET, SET",
    image: thaliya,
    courses: ['degree']
  },
  {
    name: "RSHID",
    role: "SOCIOLOGY",
    qualification: "MA Sociology, BA Sociology, UGC NET 2023",
    image: rashid,
    courses: ['degree']
  },
  {
    name: "FARHAN",
    role: "SOCIOLOGY",
    qualification: "MA Sociology, BA Sociology, UGC NET 2023",
    image: farhan,
    courses: ['degree']
  },
  {
    name: "AISHWRYA",
    role: "SOCIOLOGY",
    qualification: "MA Sociology",
    image: aishwrya,
    courses: ['degree']
  },
  {
    name: "ASWATHI",
    role: "CRIMINOLOGY",
    qualification: "2nd rank holder in MSc Psychology (2020), Manonmaniam Sundaranar University, Bsc psychology, All kerala Psychological Counsellor",
    image: ashwathi,
    courses: ['degree']
  },
  {
    name: "PRIYESH",
    role: "ECONOMICS",
    qualification: "MA Economics, BA Economics, B.Ed, UGC NET",
    image: priyesh,
    courses: ['degree']
  },
  {
    name: "NOORBINA",
    role: "ECONOMICS",
    qualification: "MA Economics, BA Economics, UGC NET (Multiple times), 5 Years Exp",
    image: noorbina,
    courses: ['degree']
  },
  {
    name: "SEBIN",
    role: "DIGITAL MARKETING",
    qualification: "MA, BA, University Rank Holder, PHD Scholar, UGC NET, Tech Expert",
    image: sebin,
    courses: ['degree']
  },
  {
    name: "JUNAID",
    role: "MASS COMMUNICATION",
    qualification: "BMMC, MA Journalism and Mass Communication, UGC NET, 5 Years Exp",
    image: junaid,
    courses: ['degree']
  },
  {
    name: "JASMIN",
    role: "MATHEMATICS",
    qualification: "BCA, MCA, UNIVERSITY LEVEL SYLLABUS MAKING SPECIALIST, MATHEMATICS EXPERT",
    image: jasmin,
    courses: ['degree']
  },
  {
    name: "ANUSREE",
    role: "MACHINE LEARNING",
    qualification: "BCA, MCA, TECHNICAL EXPERT, ONLINE TEACHING EXPERT",
    image: anusree,
    courses: ['degree']
  },
  {
    name: "SWALIH",
    role: "ARABIC",
    qualification: "Double MA, NET",
    image: swalih,
    courses: ['degree']
  },
  {
    name: "SHABAB",
    role: "HINDI",
    qualification: "MA Hindi, PGDT, UGC NET, JRF 2020, SRF 2022, PhD (EFLU Hyderabad)",
    image: shabab,
    courses: ['degree']
  },
  {
    name: "KAVYA",
    role: "SANSKRIT",
    qualification: "MA Sanskrit Vyakarana, KTET, SET, UGC Net 2024",
    image: kavya,
    courses: ['degree']
  },
  {
    name: "SHREE LAKSHMI",
    role: "INDIAN KNOWLEDGE SYSTEM",
    qualification: "MA PHILOSOPHY First Rank in SREE SANKARACHRYA University of Sanskrit, M. phil, Ph.D Scholar",
    image: sreelekshmi,
    courses: ['degree']
  },
  {
    name: "DIMPLE K VIJAYAN",
    role: "POLITICAL SYSTEM",
    qualification: "Indian Political System and Democracy Specialist",
    image: dimble,
    courses: ['degree']
  },
  {
    name: "DINKLE K VIJAYAN",
    role: "LEGAL LITERACY",
    qualification: "Legal Literacy Expert",
    image: dinkle,
    courses: ['degree']
  },
  {
    name: "PRASEETHA",
    role: "ENGLISH",
    qualification: "BA English, MA English, PGDHE, PGCA, UGC NET 2025",
    image: praseetha,
    courses: ['nios']
  },
  {
    name: "BHAVYA",
    role: "MALAYALAM",
    qualification: "MA MALAYALAM, BA MALAYALAM, B.Ed, KTET, SET, UGC NET 2025",
    image: bhavya,
    courses: ['nios']
  },
  {
    name: "SREEVIGNESH M",
    role: "BUSINESS STUDIES",
    qualification: "M.Com, B.Com, Ph.D SCHOLAR, UGC NET (2022 JUN & DEC, 2024 MANAGEMENT ), JRF 2022",
    image: sreevignesh,
    courses: ['nios']
  },
  {
    name: "JASMIN",
    role: "MATHEMATICS",
    qualification: "BCA, MCA, UNIVERSITY LEVEL SYLLABUS MAKING SPECIALIST, MATHEMATICS EXPERT",
    image: jasmin,
    courses: ['nios']
  }
];
