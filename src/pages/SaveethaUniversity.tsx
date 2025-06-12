
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const SaveethaUniversity = () => {
  const universityData = {
    name: "Saveetha Deemed University",
    location: "Chennai, Tamil Nadu",
    // tagline: "We built a better online through quality education",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVs0OjZjdMSOK_D8q6stw6rjfOPdnb02C7Kw&s",
    logoImage: "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
    primaryColor: "text-red-600",
    gradientColors: "from-red-600 to-red-800",
    established: "1986",
    students: "15,000+",
    about: "The Saveetha Medical and Educational Trust was created in 1986 mainly to provide medical relief, to promote Education and encourage Research. The Trust started a Saveetha Dental College and established an attached General Hospital in the year 1988. Subsequently the Trust established a Nursing College, Physiotherapy College, Occupational Therapy College and an Engineering College in order to comply with our commitment and to serve the people, especially those living in Rural Village in and around Chennai and adjoining districts of Tamilnadu. To fulfil the norms of the University Grants Commission, for the purpose of obtaining 'Deemed to be University' status, Saveetha Medical and Educational Trust has sponsored another Trust (viz.) Saveetha Institute of Medical & Technical Sciences (SIMATS) in the year 2001.",
    features: [
      {
        icon: Award,
        title: "Approvals",
        description: "UGC deemed, NAAC 'A++', AICTE, INC, Nursing Council, BCI approvals",
        color: "bg-blue-100"
      },
      {
        icon: Building,
        title: "Campus",
        description: "245+ acres, 60+ lakh sq.ft build; 15k students, 5k faculty",
        color: "bg-green-100"
      },
      {
        icon: Users,
        title: "Faculties",
        description: "1,100+ PhD faculty, 1:9 student faculty ratio",
        color: "bg-orange-100"
      },
      {
        icon: Handshake,
        title: "Collaborations",
        description: "300 + MOUs, IPR cells, incubators, global industrial partnerships",
        color: "bg-red-100"
      }
    ],
    courses: [
      { title: "Medical" },
      { title: "Dental Sciences" },
      { title: "Engineering & Technology" },
      { title: "Law" },
      { title: "Physiotherapy" },
      { title: "Pharmacy" },
      { title: "Nursing" },
      { title: "Allied Health Sciences" },
      { title: "Management" },
      { title: "Architecture" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default SaveethaUniversity;
