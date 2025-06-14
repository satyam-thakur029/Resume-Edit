import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";
import { SparklesCore } from "../components/ui/sparkles";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="Free Resume Maker"
          description="free resume maker for humanity."
          keywords="ATS-friendly, Resume optimization, Keyword-rich resume, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker"
        />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-full md:mx-auto md:h-screen">
          {!formClose && (
            <div className="relative w-full h-full md:overflow-y-scroll exclude-print bg-black">
              <div className="w-full absolute inset-0 z-0">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <form className="relative z-10 p-6 space-y-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Resume Builder
                  </h1>
                  <p className="text-gray-300 text-sm">Create your professional resume in minutes</p>
                </div>

                {/* Form Sections with Enhanced Styling */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20">
                  <LoadUnload/>
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Personal Information</h2>
                  </div>
                  <PersonalInformation />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Social Media</h2>
                  </div>
                  <SocialMedia />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Professional Summary</h2>
                  </div>
                  <Summary />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Education</h2>
                  </div>
                  <Education />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-indigo-400 to-blue-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Work Experience</h2>
                  </div>
                  <WorkExperience />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Projects</h2>
                  </div>
                  <Projects />
                </div>

                {/* Skills Section with Dynamic Cards */}
                <div className="backdrop-blur-md bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-violet-400 to-purple-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Skills</h2>
                  </div>
                  <div className="space-y-4">
                    {resumeData.skills.map((skill, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
                        <Skill title={skill.title} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-rose-400 to-pink-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Languages</h2>
                  </div>
                  <Language />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-semibold text-white">Certifications</h2>
                  </div>
                  <Certification />
                </div>

                {/* Footer Decoration */}
                <div className="text-center pt-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
              </form>
            </div>
          )}
          <Preview className="w-full h-full" />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };