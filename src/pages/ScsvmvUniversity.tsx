
import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const ScsvmvUniversity = () => {
  const universityData = {
    name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya",
    location: "Chennai, Tamil Nadu",
    // tagline: "We built a better online through quality education",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvOBmLRcAe4nPBYeVosAKtyty4x5aqLc9Fg&s",
    logoImage: "https://upload.wikimedia.org/wikipedia/en/4/4c/Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png",
    primaryColor: "text-orange-600",
    gradientColors: "from-orange-600 to-orange-800",
    established: "1993",
    students: "12,000+",
    about: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV), located in Enathur, Kanchipuram, was established in 1993 with the blessings of the revered saints of the Kanchi Kamakoti Peetham. Named after Jagadguru Chandrasekharendra Saraswathi Swamigal, the university beautifully blends traditional Indian values with modern education. Spread over a peaceful 50-acre campus, SCSVMV offers programs in Engineering, Management, Science, Sanskrit, Indian Culture, and Health Sciences. Recognized by UGC, AICTE, and accredited with a NAAC 'A' grade, the university focuses on holistic development through academics, research, and values. It provides a nurturing environment for students to grow intellectually and spiritually.",
    features: [
      {
        icon: Award,
        title: "Approvals",
        description: "Recognized by UGC, AICTE, NAAC 'A' grade accredited.",
        color: "bg-blue-100"
      },
      {
        icon: Building,
        title: "Campus",
        description: "Serene 50-acre campus conducive to holistic growth.",
        color: "bg-green-100"
      },
      {
        icon: Users,
        title: "Faculties",
        description: "Distinguished faculty integrating traditional and contemporary educational methods.",
        color: "bg-orange-100"
      },
      {
        icon: Handshake,
        title: "Collaborations",
        description: "Extensive collaborations in academics, cultural programs, and spiritual initiatives.",
        color: "bg-red-100"
      }
    ],
    courses: [
      { title: "Ayurveda (Medical Sciences)" },
      { title: "Engineering & Technology" },
      { title: "Physiotherapy" },
      { title: "Arts & Humanities (English, Tamil, Sanskrit)" },
      { title: "Management Studies" },
      { title: "Education (B.Ed)" },
      { title: "Indian Culture & Philosophy" },
      { title: "Research (M.Phil & Ph.D.)" }
    ]
  };

  return <UniversityLayout universityData={universityData} />;
};

export default ScsvmvUniversity;
