
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const MgrUniversity = () => {
  const universityData = {
    name: "Dr.M.G.R.Educational and Research Institute",
    location: "Chennai, Tamil Nadu",
    // tagline: "We built a better online through quality education",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXL8WpQPT0QRC84zDlL5rHThqw0BdhWRzWA&s",
    logoImage: "https://www.drmgrdu.ac.in/images/logo/logo_main.png",
    primaryColor: "text-blue-600",
    gradientColors: "from-blue-600 to-blue-800",
    established: "1988",
    students: "25,000+",
    about: "Established in 1988 by the Tmt.Kannammal Educational Trust, Dr. M.G.R. Educational and Research Institute attained deemed university status in 2003. The university emphasizes technical proficiency, confidence-building, and holistic development to prepare students for global challenges. Recognized by the University Grants Commission (UGC) and the Ministry of Human Resources Development (MHRD), it offers diverse academic programs in engineering, medical sciences, dental studies, and other disciplines, fostering a research-oriented and innovation-driven educational environment.",
    features: [
      {
        icon: Award,
        title: "Approvals",
        description: "Recognized by UGC, Medical Council of India, Pharmacy Council.",
        color: "bg-blue-100"
      },
      {
        icon: Building,
        title: "Campus",
        description: "Central location in Chennai, equipped with modern facilities.",
        color: "bg-green-100"
      },
      {
        icon: Users,
        title: "Faculties",
        description: "Experienced healthcare educators with extensive practical knowledge.",
        color: "bg-orange-100"
      },
      {
        icon: Handshake,
        title: "Collaborations",
        description: "Strong ties with leading hospitals and healthcare institutions.",
        color: "bg-red-100"
      }
    ],
    courses: [
      { title: "Medical" },
      { title: "Dental" },
      { title: "Health Science" },
      { title: "Engineering & Technology" },
      { title: "Law" },
      { title: "Paramedical" },
      { title: "Pharmacy" },
      { title: "Nursing" },
      { title: "Agriculture" },
      { title: "Arts & Science" },
      { title: "Management" },
      { title: "Architecture" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default MgrUniversity;
