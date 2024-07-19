export const mdsData = [
  {
    name: "Total Beds",
    icon: "bedroom-parent-outline",
    value: "300",
    types: [
      {
        typeIcon: "mdi:bed",
        name: "Delux Room",
        value: "100",
      },
      {
        typeIcon: "mdi:bed",
        name: "General Ward",
        value: "100",
      },
      {
        typeIcon: "mdi:bed",
        name: "VIP Room",
        value: "100",
      },
    ],
  },
  {
    name: "Total Patients",
    icon: "person-outline",
    value: "150",
    types: [
      {
        name: "Brain Tumor",
        value: "35",
        typeIcon: "medical-icon:i-outpatient",
      },
      {
        name: "Viral Infection",
        value: "105",
        typeIcon: "medical-icon:i-outpatient",
      },
      {
        name: "Cancer",
        value: "10",
        typeIcon: "medical-icon:i-outpatient",
      },
    ],
  },
  {
    name: "Total Staff",
    icon: "account-child-invert",
    value: "50",
    types: [
      {
        name: "Doctors",
        value: "20",
        typeIcon: "medical-icon:i-care-staff-area",
      },
      {
        name: "Nurses",
        value: "30",
        typeIcon: "medical-icon:i-care-staff-area",
      },
      {
        name: "Guards",
        value: "10",
        typeIcon: "medical-icon:i-care-staff-area",
      },
    ],
  },
  {
    name: "Total Revenue",
    icon: "altitude-outline",
    value: "60000",
    types: [
      {
        name: "Insurance",
        value: "$30000",
        typeIcon: "game-icons:profit",
      },
      {
        name: "Out-of-Pocket",
        value: "$20000",
        typeIcon: "game-icons:profit",
      },
      {
        name: "Other",
        value: "$10000",
        typeIcon: "game-icons:profit",
      },
    ],
  },
];
export const DashAnalyticData = [
  {
    name: "Organic Search",
    users: 231,
    value: "0%",
    color: "cyan-500",
    width: "80%",
  },
  {
    name: "Social Media",
    users: 122,
    value: "10%",
    color: "pink-600",
    width: "10%",
  },
  {
    name: "email",
    users: 63,
    value: "0%",
    color: "cyan-600",
    width: "50%",
  },
  {
    name: "Referral",
    users: 421,
    value: "90%",
    color: "indigo-600",
  },
  {
    name: "Direct",
    users: 122,
    value: "70%",
    color: "green-600",
    width: "70%",
  },
  {
    name: "Other",
    users: 323,
    value: "40%",
    color: "cyan-600",
    width: "40%",
  },
];
export const TopRatedDocData = [
  {
    img: "/images/doc1.jpg",
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    // rating:"5.5",
    stars: "★★★★★",
  },
  {
    img: "/images/doc2.jpg",
    name: "Dr. Jane Smith",
    speciality: "Dermatologist",
    // rating:"5.4",
    stars: "★★★★☆",
  },
  {
    img: "/images/doc3.png",
    name: "Dr. Michael Johnson",
    speciality: "Orthopedic Surgeon",
    // rating:"5.4",
    stars: "★★★★☆",
  },
  {
    img: "/images/doc4.jpg",
    name: "Dr. Emily Davis",
    speciality: "Neurologist",
    // rating:"5.3",
    stars: "★★★☆☆",
  },
  {
    img: "/images/doc5.png",
    name: "Dr. David Brown",
    speciality: "Pediatrician",
    // rating:"5.5",
    stars: "★★★★★",
  },
  {
    img: "/images/doc6.png",
    name: "Dr. Sarah Wilson",
    speciality: "Gastroenterologist",
    // rating:"5.4",
    stars: "★★★★☆",
  },
  {
    img: "/images/doc7.png",
    name: "Dr. James Anderson",
    speciality: "Oncologist",
    // rating:"5.4",
    stars: "★★★★☆",
  },
  {
    img: "/images/doc8.png",
    name: "Dr. Rachel Taylor",
    speciality: "Urologist",
    // rating:"5.4",
    stars: "★★★☆☆",
  },
];
export const RecentPatientData = [
  {
    name: "John Doe",
    age: "35 years",
    status: "Pending",
    image: "/images/patient1.jpg",
  },
  {
    name: "Jane Smith",
    age: "35 years",
    status: "Recover",
    image: "/images/patient2.jpg",
  },
  {
    name: "Michael Johnson",
    age: "24 years",
    status: "On Recovery",
    image: "/images/patient3.jpg",
  },
  {
    name: "Emily Davis",
    age: "32 years",
    status: "Rejected",
    image: "/images/patient4.jpg",
  },
  {
    name: "David Smith",
    age: "32 years",
    status: "Recover",
    image: "/images/patient5.jpg",
  },
];

export const patients = [
  {
    checkIn: "2024-06-01",
    patientName: "John Doe",
    doctorAssigned: "Dr. Smith",
    diseases: "Hypertension",
    status: "Stable",
    roomNo: "101",
  },
  {
    checkIn: "2024-06-02",
    patientName: "Jane Smith",
    doctorAssigned: "Dr. Brown",
    diseases: "Diabetes",
    status: "Under Observation",
    roomNo: "102",
  },
  {
    checkIn: "2024-06-03",
    patientName: "Alice Johnson",
    doctorAssigned: "Dr. Green",
    diseases: "Asthma",
    status: "Stable",
    roomNo: "103",
  },
  {
    checkIn: "2024-06-04",
    patientName: "Bob Williams",
    doctorAssigned: "Dr. White",
    diseases: "Pneumonia",
    status: "Critical",
    roomNo: "104",
  },
  {
    checkIn: "2024-06-05",
    patientName: "Charlie Brown",
    doctorAssigned: "Dr. Black",
    diseases: "COVID-19",
    status: "Stable",
    roomNo: "105",
  },
  {
    checkIn: "2024-06-06",
    patientName: "David Davis",
    doctorAssigned: "Dr. Adams",
    diseases: "Fracture",
    status: "Recovering",
    roomNo: "106",
  },
  {
    checkIn: "2024-06-07",
    patientName: "Emma Wilson",
    doctorAssigned: "Dr. Johnson",
    diseases: "Migraine",
    status: "Stable",
    roomNo: "107",
  },
  {
    checkIn: "2024-06-08",
    patientName: "Frank Miller",
    doctorAssigned: "Dr. Lee",
    diseases: "Heart Disease",
    status: "Critical",
    roomNo: "108",
  },
  {
    checkIn: "2024-06-09",
    patientName: "Grace Lee",
    doctorAssigned: "Dr. Clark",
    diseases: "Cancer",
    status: "Under Treatment",
    roomNo: "109",
  },
  {
    checkIn: "2024-06-10",
    patientName: "Hannah Taylor",
    doctorAssigned: "Dr. Walker",
    diseases: "Arthritis",
    status: "Stable",
    roomNo: "110",
  },
  {
    checkIn: "2024-06-11",
    patientName: "Isaac White",
    doctorAssigned: "Dr. Hall",
    diseases: "Kidney Stones",
    status: "Recovering",
    roomNo: "111",
  },
  {
    checkIn: "2024-06-12",
    patientName: "Jack Harris",
    doctorAssigned: "Dr. King",
    diseases: "Bronchitis",
    status: "Under Observation",
    roomNo: "112",
  },
  {
    checkIn: "2024-06-13",
    patientName: "Katie Martin",
    doctorAssigned: "Dr. Wright",
    diseases: "Liver Disease",
    status: "Critical",
    roomNo: "113",
  },
  {
    checkIn: "2024-06-14",
    patientName: "Leo Scott",
    doctorAssigned: "Dr. Lopez",
    diseases: "Ulcer",
    status: "Stable",
    roomNo: "114",
  },
  {
    checkIn: "2024-06-15",
    patientName: "Mia Thompson",
    doctorAssigned: "Dr. Hill",
    diseases: "Allergy",
    status: "Stable",
    roomNo: "115",
  },
];
export const Doctors = [
  {
    dateOfJoining: "2024-06-01",
    doctorName: "John Doe",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "Available",
  },
  {
    dateOfJoining: "2024-06-02",
    doctorName: "Jane Smith",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "UnAvailable",
  },
  {
    dateOfJoining: "2024-06-03",
    doctorName: "Alice Johnson",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "UnAvailable",
  },
  {
    dateOfJoining: "2024-06-04",
    doctorName: "Bob Williams",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "Available",
  },
  {
    dateOfJoining: "2024-06-05",
    doctorName: "Charlie Brown",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "Available",
  },
  {
    dateOfJoining: "2024-06-06",
    doctorName: "David Davis",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "Available",
  },
  {
    dateOfJoining: "2024-06-07",
    doctorName: "Emma Wilson",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "Available",
  },
  {
    dateOfJoining: "2024-06-08",
    doctorName: "Frank Miller",
    specialization: "Dentist ",
    schedule: "2 Appointments",
    contact: "+98033450234",
    status: "Available",
  },
];

export const appointments = [
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "dateOfAppointment": "2024-07-10",
    "from": "10:00",
    "to": "11:00",
    "mobile": "123-456-7890",
    "consulting": "Dr. Smith",
    "disease": "Flu"
  },
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "dateOfAppointment": "2024-07-11",
    "from": "11:00",
    "to": "12:00",
    "mobile": "234-567-8901",
    "consulting": "Dr. Jones",
    "disease": "Cold"
  },
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "dateOfAppointment": "2024-07-12",
    "from": "12:00",
    "to": "13:00",
    "mobile": "345-678-9012",
    "consulting": "Dr. Brown",
    "disease": "Asthma"
  },
  {
    "name": "Bob Brown",
    "email": "bob.brown@example.com",
    "dateOfAppointment": "2024-07-13",
    "from": "13:00",
    "to": "14:00",
    "mobile": "456-789-0123",
    "consulting": "Dr. White",
    "disease": "Diabetes"
  },
  {
    "name": "Charlie Davis",
    "email": "charlie.davis@example.com",
    "dateOfAppointment": "2024-07-14",
    "from": "14:00",
    "to": "15:00",
    "mobile": "567-890-1234",
    "consulting": "Dr. Green",
    "disease": "Hypertension"
  },
  {
    "name": "Diana Evans",
    "email": "diana.evans@example.com",
    "dateOfAppointment": "2024-07-15",
    "from": "15:00",
    "to": "16:00",
    "mobile": "678-901-2345",
    "consulting": "Dr. Black",
    "disease": "Arthritis"
  },
  {
    "name": "Eve Foster",
    "email": "eve.foster@example.com",
    "dateOfAppointment": "2024-07-16",
    "from": "16:00",
    "to": "17:00",
    "mobile": "789-012-3456",
    "consulting": "Dr. White",
    "disease": "Migraine"
  },
  {
    "name": "Frank Harris",
    "email": "frank.harris@example.com",
    "dateOfAppointment": "2024-07-17",
    "from": "17:00",
    "to": "18:00",
    "mobile": "890-123-4567",
    "consulting": "Dr. Green",
    "disease": "Allergy"
  },
  {
    "name": "Grace Lee",
    "email": "grace.lee@example.com",
    "dateOfAppointment": "2024-07-18",
    "from": "18:00",
    "to": "19:00",
    "mobile": "901-234-5678",
    "consulting": "Dr. Brown",
    "disease": "Depression"
  },
  {
    "name": "Henry Miller",
    "email": "henry.miller@example.com",
    "dateOfAppointment": "2024-07-19",
    "from": "19:00",
    "to": "20:00",
    "mobile": "012-345-6789",
    "consulting": "Dr. Black",
    "disease": "Insomnia"
  }
]

export const staff = [
  {
      name: "John Doe",
      designation: "Software Engineer",
      address: "123 Main St, Springfield",
      email: "john.doe@example.com",
      joiningdate: "2020-01-15"
  },
  {
      name: "Jane Smith",
      designation: "Product Manager",
      address: "456 Oak Ave, Metropolis",
      email: "jane.smith@example.com",
      joiningdate: "2019-03-22"
  },
  {
      name: "Alice Johnson",
      designation: "Data Analyst",
      address: "789 Pine Rd, Gotham",
      email: "alice.johnson@example.com",
      joiningdate: "2018-07-30"
  },
  {
      name: "Robert Brown",
      designation: "UX Designer",
      address: "101 Maple Ln, Star City",
      email: "robert.brown@example.com",
      joiningdate: "2021-11-05"
  },
  {
      name: "Michael Williams",
      designation: "DevOps Engineer",
      address: "202 Birch St, Central City",
      email: "michael.williams@example.com",
      joiningdate: "2017-09-12"
  },
  {
      name: "Emily Davis",
      designation: "QA Engineer",
      address: "303 Cedar Dr, Coast City",
      email: "emily.davis@example.com",
      joiningdate: "2020-06-18"
  },
  {
      name: "Christopher Wilson",
      designation: "Technical Writer",
      address: "404 Willow Blvd, Smallville",
      email: "christopher.wilson@example.com",
      joiningdate: "2019-12-01"
  },
  {
      name: "Jessica Miller",
      designation: "HR Manager",
      address: "505 Cherry Ct, Bludhaven",
      email: "jessica.miller@example.com",
      joiningdate: "2016-02-20"
  },
  {
      name: "David Taylor",
      designation: "Systems Architect",
      address: "606 Redwood St, Atlantis",
      email: "david.taylor@example.com",
      joiningdate: "2018-08-24"
  },
  {
      name: "Sophia Anderson",
      designation: "Marketing Specialist",
      address: "707 Aspen Ave, New York",
      email: "sophia.anderson@example.com",
      joiningdate: "2021-05-17"
  }
];


export const departments = [
  {
      url: "/images/departments/1.jpg",
      title: "Cardiology",
      description: "The Cardiology department specializes in the diagnosis and treatment of heart conditions, including coronary artery disease, heart rhythm disorders, and heart failure."
  },
  {
      url: " /images/departments/2.jpg",
      title: "Neurology",
      description: "The Neurology department focuses on disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Conditions treated include stroke, epilepsy, and multiple sclerosis."
  },
  {
      url: " /images/departments/3.jpg",
      title: "Orthopedics",
      description: "The Orthopedics department provides care for musculoskeletal system conditions, including fractures, joint replacements, and sports injuries. Treatment options range from surgical to non-surgical interventions."
  },
  {
      url: " /images/departments/4.jpg",
      title: "Pediatrics",
      description: "The Pediatrics department offers comprehensive medical care for infants, children, and adolescents. Services include routine check-ups, vaccinations, and treatment of acute and chronic illnesses."
  },
  {
      url: " /images/departments/5.jpg " ,
      title: "Oncology",
      description: "The Oncology department specializes in the diagnosis and treatment of cancer. Services include chemotherapy, radiation therapy, and surgical oncology, as well as support for patients and families."
  },
  {
      url: " /images/departments/6.jpg",
      title: "Dermatology",
      description: "The Dermatology department addresses conditions related to the skin, hair, and nails. Common treatments include management of acne, eczema, psoriasis, and skin cancer screenings."
  },
  {
      url: " /images/departments/7.jpg",
      title: "Gynecology",
      description: "The Gynecology department provides care for women's reproductive health. Services include routine gynecological exams, contraceptive management, and treatment of conditions such as endometriosis and ovarian cysts."
  },
  {
      url: " /images/departments/8.jpg",
      title: "Psychiatry",
      description: "The Psychiatry department focuses on the diagnosis and treatment of mental health disorders, including depression, anxiety, schizophrenia, and bipolar disorder. Services include therapy, medication management, and crisis intervention."
  }
];

export const reviewsData = [
  {
    clientName: "John Doe",
    reviews:
      "I am very satisfied with the service provided by this company. The staff was professional, knowledgeable, and friendly. The communication was clear and timely. Overall, it was a great experience, and I would definitely recommend it to others.",
    ratingStar: 5,
  },
  {
    clientName: "Emily Smith",
    reviews:
      "I was impressed by the professionalism and attention to detail of the team. They listened to my needs and provided excellent solutions. Throughout the process, they kept me informed and addressed any concerns promptly. I highly recommend their services.",
    ratingStar: 2,
  },
  {
    clientName: "Michael Johnson",
    reviews:
      "The quality of work delivered by this company is exceptional. From start to finish, they exceeded my expectations. The team was responsive, skilled, and dedicated to ensuring customer satisfaction. I am very pleased with the outcome and would definitely use their services",
    ratingStar: 3,
  },
  {
    clientName: "Sarah Brown",
    reviews:
      "I appreciate the quick response times and the thoroughness of the work done by this company. They paid attention to every detail and ensured that everything was completed to my satisfaction. The level of professionalism displayed throughout the process was impressive. Highly recommended.",
    ratingStar: 5,
  },
  {
    clientName: "David Wilson",
    reviews:
      "I cannot say enough good things about the service I received from this company. They went above and beyond to meet my needs and deliver exceptional results. The team was friendly, efficient, and attentive to every detail. I am extremely satisfied and would highly recommend them.",
    ratingStar: 1,
  },
  {
    clientName: "Jessica Taylor",
    reviews:
      "Working with this company was a pleasure from start to finish. The team was friendly, knowledgeable, and professional. They took the time to understand my requirements and delivered exactly what I was looking for. I would not hesitate to work with them again in the future.",
    ratingStar: 4,
  },
  {
    clientName: "Daniel Martinez",
    reviews:
      "I had a fantastic experience with this company. They provided excellent service, and I was impressed by their attention to detail and commitment to customer satisfaction. The team was responsive, reliable, and went above and beyond to meet my needs. I highly recommend their services.",
    ratingStar: 2,
  },
  {
    clientName: "Lisa Rodriguez",
    reviews:
      "I am extremely satisfied with the service provided by this company. They were professional, efficient, and courteous throughout the entire process. The quality of their work exceeded my expectations, and I would not hesitate to recommend them to others. Thank you for a job well done!",
    ratingStar: 6,
  },
  {
    clientName: "Kevin Anderson",
    reviews:
      "I cannot express how happy I am with the service provided by this company. They were prompt, professional, and went the extra mile to ensure my satisfaction. The quality of their workmanship was outstanding, and I would recommend them without hesitation. Thank you for a job well done!",
    ratingStar: 5,
  },
  {
    clientName: "Amanda Thomas",
    reviews:
      "I am thoroughly impressed by the level of professionalism and dedication displayed by this company. They listened to my needs and provided tailored solutions that exceeded my expectations. The attention to detail and personalized approach made all the difference. I highly recommend their services.",
    ratingStar: 3,
  },
];