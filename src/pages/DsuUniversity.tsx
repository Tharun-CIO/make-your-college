
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const DsuUniversity = () => {
  const universityData = {
    name: "Dhanalakshmi Srinivasan University",
    location: "Chennai, Tamil Nadu",
    // tagline: "We built a better online through quality education",
    heroImage: "https://www.dsuniversity.ac.in/slider/DSU-Pic-04.jpg",
    logoImage: "https://www.dsuniversity.ac.in/images/DSU_Logo.png",
    primaryColor: "text-emerald-600",
    gradientColors: "from-emerald-600 to-emerald-800",
    established: "2019",
    students: "15,000+",
    about: "Dhanalakshmi Srinivasan University (DSU), established in 2019, is a proud initiative of the Dhanalakshmi Srinivasan Charitable and Educational Trust, founded by Dr. A. Srinivasan. With campuses in Samayapuram (Tiruchirappalli) and Perambalur, DSU brings together quality education and modern infrastructure under one roof. It's part of a well-known group that runs several colleges across Tamil Nadu in fields like medicine, engineering, agriculture, and pharmacy. Built with a vision to empower students through innovation and research, the university is approved by top bodies like AICTE, NMC, PCI, INC, and UGC, making it a trusted name in higher education.",
    features: [
      {
        icon: Award,
        title: "Approvals",
        description: "Approved by AICTE, NMC, PCI, INC, and UGC.",
        color: "bg-blue-100"
      },
      {
        icon: Building,
        title: "Campus",
        description: "Modern campuses in Samayapuram and Perambalur with advanced infrastructure.",
        color: "bg-green-100"
      },
      {
        icon: Users,
        title: "Faculties",
        description: "Highly qualified, experienced educators promoting research and innovation.",
        color: "bg-orange-100"
      },
      {
        icon: Handshake,
        title: "Collaborations",
        description: "Robust industry-academic partnerships enhancing practical experience.",
        color: "bg-red-100"
      }
    ],
    courses: [
      { title: "Medical & Health Sciences" },
      { title: "Engineering & Technology" },
      { title: "Law" },
      { title: "Physiotherapy" },
      { title: "Pharmacy" },
      { title: "Agriculture" },
      { title: "Design" },
      { title: "Management" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default DsuUniversity;
