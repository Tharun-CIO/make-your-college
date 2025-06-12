
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const TakshashilaUniversity = () => {
  const universityData = {
    name: "Takshashila University",
    location: "Ongur,Tamil Nadu",
    // tagline: "Reviving India's Ancient Educational Legacy with Modern Excellence",
    heroImage: "https://takshashilauniv.ac.in/wp-content/uploads/2025/03/infrastructure-2.webp",
    logoImage: "https://media.licdn.com/dms/image/v2/C4D0BAQEn2ipthDvaeA/company-logo_200_200/company-logo_200_200/0/1657190027778?e=1755129600&v=beta&t=_Wq4kB0kNAdBl3n1gMC2LupsgXRrzgfc60qQAT8TDcg",
    primaryColor: "text-red-600",
    gradientColors: "from-red-600 to-red-800",
    established: "2022",
    students: "15,000+",
    about: "Takshashila University, established to revive India's ancient educational glory, is situated in Ongur, Tamil Nadu. As part of the prestigious Sri Manakula Vinayagar and Mailam Group with over 25 years of experience, it promotes academic excellence through eminent faculty, hands-on learning, and advanced research. The modern campus features advanced labs, well-equipped classrooms, a comprehensive library, and sustainability initiatives. Takshashila fosters global perspectives via international collaborations, arts, culture, scholarships, and career support services, creating a diverse and inclusive environment. Dedicated to empowering students, the university shapes future leaders, continuing its legacy of transformative education.",
    features: [
      {
        icon: Award,
        title: "Approvals",
        description: "UGC‑recognized under TN Private Universities Act ",
        color: "bg-blue-100"
      },
      {
        icon: Building,
        title: "Campus",
        description: "150‑acre eco‑friendly Ongur campus  ",
        color: "bg-green-100"
      },
      {
        icon: Users,
        title: "Faculties",
        description: "Eminent faculty across engineering, sciences, allied health",
        color: "bg-orange-100"
      },
      {
        icon: Handshake,
        title: "Collaborations",
        description: "MOUs with IBM, Xebia, Cambridge, Vietnam university",
        color: "bg-red-100"
      }
    ],
    courses: [
      { title: "Engineering & Technology" },
      { title: "Pharmacy" },
      { title: "Physiotherapy" },
      { title: "Nursing" },
      { title: "Agriculture" },
      { title: "Allied Health Sciences" },
      { title: "Art & science" },
      { title: "Hotel Management" },
      { title: "Business Management" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default TakshashilaUniversity;
