
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const BiherUniversity = () => {
  const universityData = {
    name: "Bharath Institute of Higher Education and Research",
    location: "Chennai, Tamil Nadu",
    // tagline: "We built a better online through quality education",
    heroImage: "https://img.jagranjosh.com/images/2022/December/1122022/Bharath-Institute-of-Higher-Education-and-Research-Chennai-Campus-View-3.jpg",
    logoImage: "https://upload.wikimedia.org/wikipedia/en/c/cb/Bharath_University_Logo.png",
    primaryColor: "text-purple-600",
    gradientColors: "from-purple-600 to-purple-800",
    established: "1984",
    students: "20,000+",
    about: "Bharath Institute of Higher Education and Research (BIHER), formerly known as Bharath University, was founded in 1984 by Dr. S. Jagathrakshakan under the Sri Lakshmi Ammal Educational Trust. Located in Chennai, Tamil Nadu, the university was granted deemed-to-be status in 2002. Spread across a 305-acre urban campus, BIHER offers a wide range of programs in engineering, medicine, dentistry, law, management, and sciences. Known for its commitment to excellence in education and research, the university holds an NAAC 'A' grade accreditation. With modern infrastructure and a focus on innovation, Bharath University continues to shape skilled professionals across various fields.",
    features: [
      {
        icon: Award,
        title: "Approvals",
        description: "NAAC 'A' grade accreditation, recognized by UGC.",
        color: "bg-blue-100"
      },
      {
        icon: Building,
        title: "Campus",
        description: "Expansive 305-acre urban campus with comprehensive facilities.",
        color: "bg-green-100"
      },
      {
        icon: Users,
        title: "Faculties",
        description: "Renowned and experienced faculty dedicated to research and teaching.",
        color: "bg-orange-100"
      },
      {
        icon: Handshake,
        title: "Collaborations",
        description: "International partnerships providing global academic and research opportunities.",
        color: "bg-red-100"
      }
    ],
    courses: [
      { title: "Medicine" },
      { title: "Dental" },
      { title: "Engineering & Technology" },
      { title: "Nursing" },
      { title: "Allied Health" },
      { title: "Law" },
      { title: "Pharmacy" },
      { title: "Agriculture" },
      { title: "Arts & Humanities" },
      { title: "Management & Commerce" },
      { title: "Architecture & Design" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default BiherUniversity;
