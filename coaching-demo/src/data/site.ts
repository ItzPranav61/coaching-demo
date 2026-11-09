export type Course = {
  id: string;
  title: string;
  shortTitle: string;
  audience: string;
  batch: string;
  batchValue: string;
  classValue: string;
  seatsTaken: number;
  seatsTotal: number;
  includes: string[];
  fee: string;
  feeNote: string;
};

// DEMO CONTENT: Aarambh Academy is fictional. Every name, credential, mark,
// testimonial, fee, seat count, timing, promise and address is sample content.
// Contact numbers are dummy values. No live availability or outcome is claimed.
export const site = {
  brand: "Aarambh Academy",
  monogram: "Aa",
  tagline: "Strong basics. Confident results.",
  primaryCta: "Book a Free Demo Class",
  demoNote: "A fictional academy. A working website demo.",
  metadata: {
    title: "Aarambh Academy | The report card demo",
    description: "Fictional Std 8–12 coaching demo with sample fees, progress reports and a free class enquiry. All content is illustrative.",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "Why us", href: "#why-us" },
    { label: "Faculty", href: "#faculty" },
    { label: "Results", href: "#results" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  labels: {
    menu: "Menu", navigation: "Main navigation", skip: "Skip to content",
    call: "Call", whatsapp: "WhatsApp", enquire: "Enquire", viewCourses: "See batches & fees",
  },
  hero: {
    audience: "For Std 8–12 students & their parents",
    title: "The marks matter. So does the way there.",
    description: "Maths that clicks. Science you can explain. A weekly report that tells parents more than ‘doing fine’.",
    promises: "One free class. Fees before enrolment. A parent update every Friday.",
    photoLabel: "Classroom photo here",
    disclaimer: "Demo only. Academy, student, marks and programme details are fictional.",
    stamp: ["Demo class", "Free"],
    stats: [
      { value: "20", context: "students per batch" },
      { value: "1 / week", context: "test, followed by a review" },
      { value: "7 days", context: "between parent progress updates" },
    ],
    report: {
      title: "A little progress, on paper.",
      studentLabel: "Student", student: "Isha M. / Std 10",
      period: "June → August",
      headings: ["Subject", "June / 100", "August / 100"],
      subjects: [
        { name: "Maths", before: 62, after: 78 },
        { name: "Science", before: 68, after: 82 },
        { name: "English", before: 71, after: 79 },
      ],
      attendanceLabel: "Attendance", attendance: "94%", attendanceContext: "47 of 50 sessions",
      note: "Teacher’s note", teacherNote: "Algebra is steadier. Next: 15 minutes of geometry practice each day.",
    },
  },
  courses: {
    title: "A batch that fits your school day.",
    description: "Compare the subjects, timings and full monthly fee before leaving a number. Choose a batch to carry it into your demo enquiry.",
    selectorLabel: "Choose your class group", allLabel: "All batches", sampleNote: "Sample fees & seats · No live availability",
    seatsLabel: "seats taken", seatJoin: "of", seatAria: "Sample seats taken",
    includesLabel: "Included each month", cta: "Try this batch free", selectedLabel: "Selected for your enquiry",
    items: [
      {
        id: "school", title: "Std 8–10", shortTitle: "Std 8–10", classValue: "Std 8–10", batchValue: "Weekday",
        audience: "Maths, Science & English for school students.", batch: "Mon / Wed / Fri · 5–7 pm",
        seatsTaken: 14, seatsTotal: 20, includes: ["12 taught sessions + printed notes", "4 topic tests + Friday parent reports"],
        fee: "₹2,400", feeNote: "per month · Notes & tests included. No registration fee.",
      },
      {
        id: "science", title: "Std 11–12 Science", shortTitle: "11–12 Science", classValue: "Std 11–12 Science", batchValue: "Weekday",
        audience: "PCM or PCB, with board-style written practice.", batch: "Mon–Thu · 6–8 pm",
        seatsTaken: 12, seatsTotal: 20, includes: ["16 subject sessions + revision notes", "4 topic tests + one doubt clinic a week"],
        fee: "₹3,600", feeNote: "per month · Notes & tests included. No registration fee.",
      },
      {
        id: "commerce", title: "Std 11–12 Commerce", shortTitle: "11–12 Commerce", classValue: "Std 11–12 Commerce", batchValue: "Weekday",
        audience: "Accounts, Economics & Maths, one worked example at a time.", batch: "Tue / Thu / Sat · 5–7 pm",
        seatsTaken: 10, seatsTotal: 20, includes: ["12 subject sessions + worked problem sets", "4 topic tests + Friday parent reports"],
        fee: "₹2,800", feeNote: "per month · Notes & tests included. No registration fee.",
      },
      {
        id: "foundation", title: "JEE / NEET / CET foundation", shortTitle: "Foundation", classValue: "JEE / NEET / CET foundation", batchValue: "Weekend",
        audience: "Std 9–12 students starting entrance-exam concepts.", batch: "Sat / Sun · 9 am–12 pm",
        seatsTaken: 16, seatsTotal: 20, includes: ["8 concept sessions + practice sets", "4 topic tests + one study-plan review"],
        fee: "₹3,200", feeNote: "per month · Notes & tests included. No registration fee.",
      },
    ] satisfies Course[],
  },
  why: {
    title: "You shouldn’t have to ask, ‘How’s it going?’",
    description: "Every Friday, the sample programme turns attendance, test scores and the next step into one short parent report.",
    items: [
      { title: "20 students. Room for questions.", description: "Each batch is capped at 20, with a 30-minute doubt clinic every week." },
      { title: "A test is the start of a conversation.", description: "One topic test a week, then corrections with the teacher before the next lesson." },
      { title: "A plan for the next seven days.", description: "Printed practice sheets and one specific task in the Friday parent note." },
      { title: "A monthly check-in, not a surprise.", description: "A 15-minute mentor review to adjust the student’s study plan." },
    ],
    preview: {
      title: "What parents see", label: "Sample weekly report · Isha M., Std 10", period: "Week ending 14 August · Fictional",
      rows: [
        { label: "Attendance", value: "3 / 3 classes" },
        { label: "Maths topic test", value: "18 / 25 → 21 / 25" },
        { label: "Science practice", value: "4 of 5 tasks complete" },
      ],
      noteLabel: "From Anaya, Maths teacher",
      note: "Linear equations are improving. This week, practise 5 geometry problems a day; we’ll review them on Friday.",
      caption: "One note. Attendance, scores and what to practise next.",
    },
  },
  faculty: {
    photoLabel: "Your photo here",
    title: "Ask the person who’ll teach the class.",
    description: "Your free demo is a regular lesson with a subject teacher. These four profiles and their credentials are fictional.",
    note: "4 sample profiles / No stock photographs",
    items: [
      { initials: "AK", name: "Anaya Kulkarni", subject: "Mathematics", experience: "8 years", bio: "M.Sc. Mathematics. Teaches algebra through worked steps, then independent practice." },
      { initials: "RD", name: "Rohan Deshmukh", subject: "Physics & Science", experience: "6 years", bio: "M.Sc. Physics. Starts each topic with an everyday example and a written explanation." },
      { initials: "MS", name: "Meera Shah", subject: "Biology & Chemistry", experience: "7 years", bio: "M.Sc. Life Sciences. Uses labelled diagrams, recall exercises and topic tests." },
      { initials: "SP", name: "Sahil Patil", subject: "Commerce & English", experience: "5 years", bio: "M.Com., B.Ed. Pairs Accounts practice with structured written answers." },
    ],
  },
  results: {
    title: "Read the whole result.", note: "Sample content for demo purposes",
    description: "A percentage needs a cohort. These invented figures show the kind of context a parent should be able to check.",
    caption: "Illustrative Std 10 cohort · 40 students · Sample academic year",
    headings: ["Measure", "Students", "Context"],
    rows: [
      { measure: "90%+ overall", students: "12 of 40", context: "Illustrative final board scores" },
      { measure: "Maths score improved", students: "32 of 40", context: "Between two sample term tests" },
      { measure: "Revision completed", students: "36 of 40", context: "All 8 sample revision units" },
    ],
    testimonialLabel: "Three fictional voices, not verified reviews",
    testimonials: [
      { quote: "The Friday corrections showed me which algebra steps I was skipping.", name: "Isha M.", context: "Fictional Std 10 student" },
      { quote: "The weekly note told me the test score and exactly what to practise at home.", name: "Nilesh R.", context: "Fictional parent, Std 9" },
      { quote: "The 30-minute doubt clinic gave me time to go back over Physics numericals.", name: "Dev A.", context: "Fictional Std 12 student" },
    ],
  },
  faqs: {
    title: "Before you commit a school year.",
    note: "6 answers / No small print",
    items: [
      { question: "What will we pay?", answer: "The sample monthly fees are ₹2,400 for Std 8–10, ₹3,600 for Science, ₹2,800 for Commerce and ₹3,200 for Foundation. Printed notes and tests are included, with no registration fee. These are fictional prices; a real enrolment would require written fee and cancellation terms first." },
      { question: "Will the timing fit around school?", answer: "School batches run Mon/Wed/Fri, 5–7 pm; Science Mon–Thu, 6–8 pm; Commerce Tue/Thu/Sat, 5–7 pm; Foundation Sat/Sun, 9 am–12 pm. All timings are samples in IST and would be reconfirmed before enrolment." },
      { question: "Is the free demo a real class?", answer: "The sample offer is one regular lesson with the subject teacher, not a sales presentation. There is no payment or enrolment obligation. This demo website does not reserve a seat or send messages." },
      { question: "How many students share a batch?", answer: "The sample limit is 20 students. Seat meters show invented counts, not live availability. The coordinator would confirm the actual batch size before you enrol." },
      { question: "What happens after a weekly test?", answer: "Each sample subject has one topic test per week. Teachers review errors in the next lesson and use the 30-minute weekly doubt clinic for questions that need more time." },
      { question: "How will I know if my child is struggling?", answer: "The sample Friday report includes attendance, test scores and a teacher’s next-step note. A 15-minute monthly mentor conversation reviews the study plan with the parent." },
    ],
  },
  contact: {
    title: "One class before a whole year.",
    description: "Choose a batch, meet the teacher and ask about the fee. The sample demo has no payment or enrolment obligation.",
    coordinator: { initials: "PJ", name: "Priya Joshi", role: "Demo-class coordinator · Fictional", message: "I’ll help you find the right subject teacher and a slot around school.", cta: "WhatsApp Priya" },
    phone: "+910000000000", whatsapp: "910000000000",
    whatsappMessage: "Hello Priya, I would like to enquire about one free demo class.",
    email: "hello@aarambh.example",
    address: "First floor, Sample Learning Centre, Example Road, Demo Nagar, India · Fictional address",
    timings: "Mon–Sat · 9 am–7 pm IST · Sample hours",
    detailsLabels: { address: "Find the classroom", timings: "When Priya is available", email: "Write to Priya" },
    placeholderNote: "Demo contact details only. The phone and WhatsApp numbers do not reach this fictional academy.",
    form: {
      title: "Demo-class admission slip", reference: "Enquiry only / No payment",
      name: "Student name", phone: "Parent phone", class: "Class group", batch: "Preferred batch",
      chooseClass: "Choose a class group", chooseBatch: "Choose a batch",
      classes: ["Std 8–10", "Std 11–12 Science", "Std 11–12 Commerce", "JEE / NEET / CET foundation"],
      batches: ["Weekday", "Weekend", "Please help me choose"],
      submit: "Book a Free Demo Class",
      notice: "Demo only: these 4 fields stay in your browser. No enquiry is sent and no seat is reserved.",
      confirmation: "Demo preview: here’s what would happen next.",
      nextTitle: "What happens next",
      steps: [
        { title: "Within 2 working hours", description: "Priya would WhatsApp you during Mon–Sat, 9 am–7 pm IST. After-hours enquiries would wait until the next working day." },
        { title: "Choose your demo slot", description: "You would confirm the subject, batch time and teacher before any visit." },
        { title: "Meet the faculty", description: "Attend one regular lesson, then decide whether to enrol. No payment for the demo." },
      ],
      nextNote: "Illustrative process only. This website sends no WhatsApp message or confirmation.",
    },
  },
  footer: {
    year: 2026, linksLabel: "Quick links",
    blurb: "Std 8–12. One test a week. One clear parent note every Friday. A fictional programme, shown in full.",
    copyright: "Aarambh Academy. Fictional demo content.",
    note: "Demo website · All names, credentials, fees, seats, results and testimonials are fictional.",
  },
};

export const contactLinks = {
  call: `tel:${site.contact.phone}`,
  whatsapp: `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`,
};
