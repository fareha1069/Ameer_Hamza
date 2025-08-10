import React from "react";
import { GraduationCap, School, BadgeCheck } from "lucide-react";

const EducationCard = ({ icon: Icon, institute, degree, field, grade, duration }) => (
  <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-2xl shadow-md">
    <div className="p-2 bg-blue-100 rounded-full">
      <Icon className="text-blue-600 w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{institute}</h4>
      <p className="text-sm text-gray-700">{degree}, {field}</p>
      <p className="text-sm text-gray-500">{grade} · {duration}</p>
    </div>
  </div>
);

const CertificationCard = ({ icon: Icon, title, issuer, issued, credentialId, details }) => (
  <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-2xl shadow-md">
    <div className="p-2 bg-green-100 rounded-full">
      <Icon className="text-green-600 w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-700">{issuer}</p>
      <p className="text-sm text-gray-500">Issued: {issued}</p>
      {credentialId && (
        <p className="text-sm text-blue-600">Credential ID: {credentialId}</p>
      )}
      {details && (
        <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{details}</p>
      )}
    </div>
  </div>
);

const Pagal = () => {
  return (
    <section id="cv" className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Curriculum Vitae</h2>

      {/* Summary */}
      <div className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Summary</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Passionate and results-driven professional with a strong academic foundation in Criminal Science and Business Management. Known for adaptability, consistent high performance, and commitment to continuous learning. Seeking opportunities that merge analytical thinking with real-world problem-solving.
        </p>
      </div>

      {/* Education */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education</h3>
        <div className="space-y-6">
          <EducationCard
            icon={GraduationCap}
            institute="University of the Punjab"
            degree="Bachelor of Applied Science - BASc"
            field="Criminalistics and Criminal Science"
            grade="A+ (GPA: 3.83/4.0)"
            duration="Dec 2020 - Dec 2024"
          />
          <EducationCard
            icon={School}
            institute="Punjab Group Of Colleges"
            degree="Intermediate"
            field="Business Administration and Management"
            grade="A+ (91%)"
            duration="Jan 2018 - Jan 2020"
          />
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Certifications</h3>
        <div className="space-y-6">
          <CertificationCard
            icon={BadgeCheck}
            title="Certificate of Membership"
            issuer="PAFLA - Pakistan Freelancers Association"
            issued="Mar 2024"
            credentialId="5579039828895916"
          />
          <CertificationCard
            icon={BadgeCheck}
            title="Oracle E-Business Suite R12: Advanced Supply Chain Planning"
            issuer="University of California, Irvine (Coursera)"
            issued="Nov 2023"
          />
          <CertificationCard
            icon={BadgeCheck}
            title="Fellow at Amal Career Prep - Fellowship"
            issuer="Amal Academy"
            issued="Oct 2017 - Present · 7 yrs 11 mos"
            details={`Location: Lahore District, Punjab, Pakistan\n\nAmal Academy is an education initiative funded by Stanford University to prepare students for career development.\n\n• Communication: Learning communication skills, personal development, and professional tools to thrive in the marketplace.\n• Skills: Leadership development, teamwork, problem solving`}
          />
        </div>
      </div>
    </section>
  );
};

export default Pagal;
