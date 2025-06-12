
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Award, BookOpen } from "lucide-react";

const Index = () => {
  const universities = [
    {
      name: "MGR University",
      path: "/mgr-university",
      description: "Leading institution in medical and health sciences",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "DSU University", 
      path: "/dsu-university",
      description: "Innovation in technology and engineering",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      name: "BIHER University",
      path: "/biher-university", 
      description: "Excellence in biotechnology and research",
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "SCSVMV University",
      path: "/scsvmv-university",
      description: "Comprehensive education and development",
      color: "from-orange-600 to-orange-800"
    },
    {
      name: "Saveetha University",
      path: "/saveetha-university",
      description: "Multidisciplinary academic excellence",
      color: "from-red-600 to-red-800"
    },
    {
      name: "Takshashila University",
      path: "/takshashila-university",
      description: "Reviving India's ancient educational excellence",
      color: "from-amber-600 to-amber-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Sairam Tech Incubator</h1>
            </div>
            <div className="text-sm text-gray-600">sairamtechincubator.in</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Discover Your Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in">
            Explore premier universities in Chennai and find the perfect program to launch your career
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-fade-in">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Accredited Programs</h3>
              <p className="text-gray-600">Top-tier academic standards</p>
            </div>
            <div className="text-center animate-fade-in">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Expert Faculty</h3>
              <p className="text-gray-600">Learn from industry leaders</p>
            </div>
            <div className="text-center animate-fade-in">
              <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Modern Campus</h3>
              <p className="text-gray-600">State-of-the-art facilities</p>
            </div>
            <div className="text-center animate-fade-in">
              <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Diverse Programs</h3>
              <p className="text-gray-600">Wide range of specializations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Choose Your University
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <Card key={university.path} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className={`h-32 bg-gradient-to-r ${university.color} rounded-lg mb-4`}>
                  </div>
                  <CardTitle className="text-xl">{university.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {university.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={university.path}>
                    <Button className="w-full hover:scale-105 transition-transform">
                      Explore University
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-8 w-8" />
                <h3 className="text-xl font-bold">Sairam Tech Incubator</h3>
              </div>
              <p className="text-gray-400">
                Connecting students with premier educational opportunities in Chennai.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>Chennai, Tamil Nadu</p>
                <p>Email: info@sairamtechincubator.in</p>
                <p>Phone: +91 44 1234 5678</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sairam Tech Incubator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
