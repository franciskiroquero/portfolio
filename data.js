/* ============ EDIT YOUR CONTENT HERE ============ */

/* PHOTOS: visitors can only view these. Put your image files in the "images" folder,
   then list them here. Keys: home, bio (About Me page),
   f1-f4 (family), s1-s4 (schools), p1-p6 (projects), c1-c37 (classmates), pr1-pr8 (professors). */
const PHOTOS = {
  home: "images/home.jpg",
  bio: "images/home.jpg",
  s1: "images/uic-logo.png",
  s2: "images/ucnhs-logo.png",
  s4: "images/uc-logo.png",
  s3: "images/ice-logo.webp"
  // c1: "images/classmate1.jpg",
};

/* 37 classmates. Plain names are fine. For more detail use an object:
   { name: "Juan Dela Cruz", nickname: "Web designer", info: "Short description", tags: ["HTML","CSS"] } */
const CLASSMATES = [
  "Classmate 1",
  "Classmate 2",
  "Classmate 3",
  "Classmate 4",
  "Classmate 5",
  "Classmate 6",
  "Classmate 7",
  "Classmate 8",
  "Classmate 9",
  "Classmate 10",
  "Classmate 11",
  "Classmate 12",
  "Classmate 13",
  "Classmate 14",
  "Classmate 15",
  "Classmate 16",
  "Classmate 17",
  "Classmate 18",
  "Classmate 19",
  "Classmate 20",
  "Classmate 21",
  "Classmate 22",
  "Classmate 23",
  "Classmate 24",
  "Classmate 25",
  "Classmate 26",
  "Classmate 27",
  "Classmate 28",
  "Classmate 29",
  "Classmate 30",
  "Classmate 31",
  "Classmate 32",
  "Classmate 33",
  "Classmate 34",
  "Classmate 35",
  "Classmate 36",
  "Classmate 37",
];

/* Schools. Click the card on the site to add each school logo. */
const SCHOOLS = [
  {
    level: "Elementary", name: "Urdaneta I Central School", years: "2014 - 2020",
    desc: "Elementary (Grades 1 to 6), Urdaneta City, Pangasinan.", honors: ["With Honors", "Grade 6 average: 91"],
    achievements: [
      {
        title: "Grade 6 with Honors", badge: "General average: 91", date: "Batch 2019-2020",
        desc: "I graduated Grade 6 with Honors and a general average of 91, batch 2019-2020. This completed my elementary years from 2014 to 2020.",
        tags: ["With Honors", "Average 91", "Grade 6", "Batch 2019-2020"],
        photos: [{ src: "images/grade6.jpg", cap: "Grade 6 graduation, with my medals" }],
        files: [], video: ""
      }
    ]
  },
  {
    level: "Junior High", name: "Urdaneta City National High School", years: "2020 - 2024",
    desc: "Junior High School (Grades 7 to 10), Urdaneta City, Pangasinan.", honors: ["With Honors", "Journalism champion"],
    achievements: [
      {
        title: "Grade 8 with Honors", badge: "General average: 91", date: "School Year 2021-2022",
        desc: "I graduated Grade 8 with Honors and a general average of 91 during the Recognition Day of Urdaneta City National High School.",
        tags: ["With Honors", "Average 91", "Grade 8"],
        photos: [{ src: "images/jh8.jpg", cap: "Recognition Day, Grade 8" }],
        files: [], video: ""
      },
      {
        title: "Photojournalist of Tanglaw", badge: "Won Photojournalist", date: "Junior High",
        desc: "I won as Photojournalist of Tanglaw, our school publication, with this photo that I took.",
        tags: ["Tanglaw", "Photojournalism", "Photojournalist"],
        photos: [{ src: "images/jhphoto.jpg", cap: "The photo that won me Photojournalist" }],
        files: [], video: ""
      },
      {
        title: "DSPC Champion", badge: "First Place, Online Publishing", date: "November 2022",
        desc: "Tanglaw won the championship at the Division Schools Press Conference (DSPC) in Online Publishing, in collaboration with our Online Publishing team in Journalism. My roles were Photojournalist and Layout Artist.",
        tags: ["DSPC", "Champion", "Online Publishing", "Photojournalist", "Layout Artist"],
        photos: [
          { src: "images/dspc1.jpg", cap: "Our team with our certificates" },
          { src: "images/dspc2.jpg", cap: "Certificate of Recognition, First Place" },
          { src: "images/dspc3.jpg", cap: "Working on our entry" }
        ],
        files: [], video: ""
      },
      {
        title: "Grade 9 Graduate", badge: "General average: 90", date: "Batch 2022-2023",
        desc: "I graduated Grade 9 with a general average of 90, batch 2022-2023.",
        tags: ["Grade 9", "Average 90", "Batch 2022-2023"],
        photos: [{ src: "images/jh9.jpg", cap: "Recognition Day, Grade 9" }],
        files: [], video: ""
      },
      {
        title: "Grade 10 Graduate", badge: "General average: 92", date: "Batch 2023-2024",
        desc: "I graduated Grade 10 with a general average of 92, batch 2023-2024, and completed Junior High School.",
        tags: ["Grade 10", "Average 92", "Batch 2023-2024", "Completer"],
        photos: [{ src: "images/jh10.jpg", cap: "Grade 10 graduation day" }],
        files: [], video: ""
      }
    ]
  },
  {
    level: "Senior High", name: "International Colleges for Excellence, Inc.", years: "Batch 2024 - 2026 · Graduated May 16, 2026",
    desc: "Academic Track, STEM strand. Urdaneta City, Pangasinan.", honors: ["High Honors", "Average: 97"],
    /* A school can have many achievements. Each one gets its own tab in the pop-up.
       photos: pictures (click to enlarge).  files: documents people can open, e.g. { label: "Read the research paper (PDF)", src: "files/research.pdf" }
       video: a video file such as "videos/defense.mp4" (plays in the page) or a YouTube link (opens in a new tab). */
    achievements: [
      {
        title: "Graduated with High Honors", badge: "General average: 97", date: "May 16, 2026",
        desc: "I graduated from Senior High School (Grade 12) with High Honors and a general average of 97. I finished the Academic Track, STEM strand, with Batch Pagsinta 2026 of International Colleges for Excellence in Urdaneta City.",
        tags: ["High Honors", "Average 97", "STEM", "Batch 2026"],
        photos: [
          { src: "images/grad1.jpg", cap: "On stage at the graduation ceremony" },
          { src: "images/grad2.jpg", cap: "Graduation portrait" },
          { src: "images/grad3.jpg", cap: "My diploma" }
        ],
        files: [], video: ""
      },
      {
        title: "Research Defended", badge: "Defended with my groupmates", date: "School Year 2025-2026",
        desc: "Our research, “Utilizing Aratiles as an Alternative Sugar for Diabetic People in Urdaneta City,” was defended by our STEM 12 group. Even though a study like this usually needs DOST support, we made it possible.\n\nResearchers: Trisha Mae R. Pasol, St.Jhun P. Maling, Jamilla M. Marron, Kelvin Roi O. Montera, Julia Angela P. Miguel, and Francis Rodolf C. Quero.",
        tags: ["Research", "Aratiles", "Alternative sugar", "STEM 12", "Group of 6"],
        photos: [
          { src: "images/res1.jpg", cap: "Our group and teachers after the defense" },
          { src: "images/res2.jpg", cap: "Presenting our research" },
          { src: "images/res3.jpg", cap: "Congratulation notes from our teachers" }
        ],
        files: [{ label: "Read the research paper (PDF)", src: "files/research.pdf" }],
        video: "videos/defense.mp4"
      }
    ]
  },
  { level: "College", name: "N/A", years: "N/A", desc: "N/A", honors: ["N/A"] }
];

/* Projects (up to 6 fit nicely). Add a link to show an Open button. */
const PROJECTS = [
  { title: "Project one",   year: "2026", desc: "What it does and what you learned.", tech: ["HTML", "CSS"], link: "" },
  { title: "Project two",   year: "2026", desc: "What it does and what you learned.", tech: ["HTML", "CSS", "JavaScript"], link: "" },
  { title: "Project three", year: "2026", desc: "What it does and what you learned.", tech: ["JavaScript"], link: "" },
  { title: "Project four",  year: "2026", desc: "What it does and what you learned.", tech: ["HTML"], link: "" },
  { title: "Project five",  year: "2026", desc: "What it does and what you learned.", tech: ["CSS"], link: "" },
  { title: "Project six",   year: "2026", desc: "What it does and what you learned.", tech: ["JavaScript"], link: "" }
];

/* Family. Order: Father, Mother, Me, Brother. Click each card on the site to add a photo. */
const FAMILY = [
  { role: "Father",  name: "Father's name",  sub: "Occupation", desc: "Write something about your father and what he taught you.", tags: ["Hardworking", "Supportive"] },
  { role: "Mother",  name: "Mother's name",  sub: "Occupation", desc: "Write something about your mother and what she means to you.", tags: ["Caring", "Strong"] },
  { role: "Me",      name: "Francis Rodolf C. Quero", sub: "BSIT Student", desc: "Write about how your family shaped who you are today.", tags: ["Dreamer", "Learner"] },
  { role: "Brother", name: "Brother's name", sub: "Age / School / Work", desc: "Write something about your brother and your memories together.", tags: ["Funny", "Loyal"] }
];

/* 8 subjects. code = short course code, topics = list shown in the pop-up. */
const SUBJECTS = [
  { code: "CODE 101", name: "Subject 1", prof: "Professor name", units: 3, schedule: "Mon / Wed 8:00 - 9:30", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { code: "CODE 102", name: "Subject 2", prof: "Professor name", units: 3, schedule: "Mon / Wed 9:30 - 11:00", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] },
  { code: "CODE 103", name: "Subject 3", prof: "Professor name", units: 3, schedule: "Tue / Thu 8:00 - 9:30", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] },
  { code: "CODE 104", name: "Subject 4", prof: "Professor name", units: 3, schedule: "Tue / Thu 9:30 - 11:00", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] },
  { code: "CODE 105", name: "Subject 5", prof: "Professor name", units: 3, schedule: "Mon / Wed 1:00 - 2:30", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] },
  { code: "CODE 106", name: "Subject 6", prof: "Professor name", units: 3, schedule: "Tue / Thu 1:00 - 2:30", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] },
  { code: "CODE 107", name: "Subject 7", prof: "Professor name", units: 2, schedule: "Fri 8:00 - 11:00", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] },
  { code: "CODE 108", name: "Subject 8", prof: "Professor name", units: 2, schedule: "Fri 1:00 - 4:00", desc: "What this subject is about.", topics: ["Topic 1", "Topic 2"] }
];

/* Professors this college year. email is optional (shows a button). */
const PROFESSORS = [
  { name: "Professor 1", subject: "Subject 1", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 1"] },
  { name: "Professor 2", subject: "Subject 2", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 2"] },
  { name: "Professor 3", subject: "Subject 3", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 3"] },
  { name: "Professor 4", subject: "Subject 4", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 4"] },
  { name: "Professor 5", subject: "Subject 5", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 5"] },
  { name: "Professor 6", subject: "Subject 6", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 6"] },
  { name: "Professor 7", subject: "Subject 7", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 7"] },
  { name: "Professor 8", subject: "Subject 8", desc: "Write what you learned from this professor.", email: "", tags: ["Subject 8"] }
];
