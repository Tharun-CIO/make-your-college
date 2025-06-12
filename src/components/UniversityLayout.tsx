
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building, Users, Award, BookOpen, X, ChevronRight, Star, Clock, Users2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Course {
  title: string;
  duration?: string;
  category?: string;
  image?: string;
  description?: string;
  highlights?: string[];
  eligibility?: string;
  career?: string[];
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: string;
}

interface UniversityData {
  name: string;
  location?: string;
  tagline?: string;
  heroImage: string;
  logoImage?: string;
  primaryColor: string;
  gradientColors: string;
  about: string;
  features: Feature[];
  courses: Course[];
  established: string;
  students: string;
  link?: string;
}

interface UniversityLayoutProps {
  universityData: UniversityData;
}

// Course images mapping based on domain
const getCourseImage = (courseTitle: string): string => {
  const title = courseTitle.toLowerCase();
  
  if (title.includes('medical') || title.includes('medicine')) {
    return 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80';
  }
  if (title.includes('dental')) {
    return 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80';
  }
  if (title.includes('engineering') || title.includes('technology')) {
    return 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80';
  }
  if (title.includes('law')) {
    return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80';
  }
  if (title.includes('pharmacy')) {
    return 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80';
  }
  if (title.includes('nursing')) {
    return 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80';
  }
  if (title.includes('agriculture')) {
    return 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80';
  }
  if (title.includes('management') || title.includes('commerce')) {
    return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80';
  }
  if (title.includes('architecture') || title.includes('design')) {
    return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80';
  }
  if (title.includes('physiotherapy')) {
    return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80';
  }
  if (title.includes('arts') || title.includes('humanities') || title.includes('culture')) {
    return 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80';
  }
  if (title.includes('health') || title.includes('allied')) {
    return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80';
  }
  if (title.includes('ayurveda')) {
    return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80';
  }
  if (title.includes('education')) {
    return 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80';
  }
  if (title.includes('paramedical')) {
    return 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80';
  }
  
  // Default image for other courses
  return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80';
};

const UniversityLayout = ({ universityData }: UniversityLayoutProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCourseDetailOpen, setIsCourseDetailOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll contact you soon with more information about the course.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setIsContactOpen(false);
    setIsCourseDetailOpen(false);
  };

  const handleCourseClick = (course: Course) => {
    setSelectedCourse({
      ...course,
      description: course.description || `Comprehensive ${course.title} program designed to provide in-depth knowledge and practical skills in the field.`,
      highlights: course.highlights || [
        "Industry-relevant curriculum",
        "Experienced faculty",
        "Practical training",
        "Placement assistance",
        "Modern infrastructure"
      ],
      eligibility: course.eligibility || "12th grade or equivalent",
      career: course.career || ["Research", "Industry", "Academia", "Entrepreneurship"]
    });
    setIsCourseDetailOpen(true);
  };

  const handleApplyNow = () => {
    setFormData({...formData, course: selectedCourse?.title || ""});
    setIsCourseDetailOpen(false);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                {universityData.logoImage ? (
                  <div className="w-16 h-16 p-1 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <img 
                      src={universityData.logoImage} 
                      alt={`${universityData.name} Logo`}
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{universityData.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <div className="font-bold text-gray-900 text-xl uppercase">{universityData.name.split(' ').slice(0, 12).join(' ')}</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Building className="w-3 h-3 mr-1" />
                    {universityData.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${universityData.heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              {universityData.name}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-10 leading-relaxed font-light">
              {universityData.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-10 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <Award className="w-8 h-8 mr-3 text-blue-600" />
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universityData.features.map((feature, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 h-full flex flex-col">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center ${feature.color || 'bg-blue-100'} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon 
                      className={`h-10 w-10 ${
                        index === 0 ? 'text-blue-600' : 
                        index === 1 ? 'text-green-600' : 
                        index === 2 ? 'text-orange-600' : 'text-red-600'
                      }`} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center mt-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programmes Offered
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advance your career with our diverse range of academic programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {universityData.courses.map((course, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 aspect-[4/3] w-full"
                onClick={() => handleCourseClick(course)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={getCourseImage(course.title)} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                  <h3 className="text-white font-bold text-lg leading-tight mb-2">{course.title}</h3>
                  <div className="h-1 w-12 bg-blue-400 mb-2 transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
              <Building className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
              About Us
            </h2>
            <div className="prose prose-lg text-white/90 max-w-none">
              <p className="text-xl leading-relaxed mb-10 font-light">
                {universityData.about}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">{universityData.established}</div>
                <div className="text-gray-300">Established</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">{universityData.students}</div>
                <div className="text-gray-300">Students</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">{universityData.courses.length}+</div>
                <div className="text-gray-300">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">A+</div>
                <div className="text-gray-300">NAAC Grade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Dialog */}
      <Dialog open={isCourseDetailOpen} onOpenChange={setIsCourseDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-base">
              {selectedCourse?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="space-y-6 mt-6">
              {/* Program Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Program Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedCourse.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users2 className="w-4 h-4 mr-2 text-green-500" />
                    Eligibility
                  </h4>
                  <p className="text-gray-600 text-sm">{selectedCourse.eligibility}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    Career Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedCourse.career?.map((career, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button 
                  onClick={handleApplyNow}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCourseDetailOpen(false)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Us Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Contact {universityData.name}</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with more information.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="course">Course Interest</Label>
              <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {universityData.courses.map((course, index) => (
                    <SelectItem key={index} value={course.title}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us more about your interests..."
                className="mt-1"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Submit Application
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsContactOpen(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UniversityLayout;
