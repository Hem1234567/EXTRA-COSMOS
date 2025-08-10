import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const PartnersSection = () => {
  const partnerCategories = [
    {
      title: "Tech Partners",
      companies: ["TechFlow", "NeoSoft", "CyberCore"],
    },
    {
      title: "Innovation Partners",
      companies: ["DataVault", "CloudSync", "AI Dynamics"],
    },
    {
      title: "Community Partners",
      companies: ["DevHub", "TechTalks", "InnoSpace"],
    },
  ];

  // Inline CSS for animations and effects
  const styles = `
    .gradient-text {
      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    .cyber-border {
      border: 1px solid rgba(59, 130, 246, 0.3);
      position: relative;
    }
    
    .cyber-border::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
      z-index: -1;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .cyber-border:hover::before {
      opacity: 0.3;
    }
    
    .glow-red {
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.7);
    }
    
    .glow-red:hover {
      box-shadow: 0 0 20px rgba(239, 68, 68, 0.9);
    }
    
    .hover-scale:hover {
      transform: scale(1.05);
    }
    
    @keyframes glow-pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }
    
    .animate-glow-pulse {
      animation: glow-pulse 2s infinite;
    }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-marquee {
      animation: marquee 15s linear infinite;
    }
    
    .partner-logos {
      background: linear-gradient(135deg, #3b82f620, #8b5cf620, #ec489920);
    }
  `;

  return (
    <section
      id="partners"
      className="relative py-20 bg-gray-50 overflow-hidden"
    >
      <style>{styles}</style>

      {/* Glowing background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Become a <span className="gradient-text">Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hands with Tamil Nadu's most prestigious hackathon. Partner
            with us to showcase your brand, connect with brilliant minds, and be
            part of the innovation revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Partnership info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400">
                Why Partner With Us?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl cyber-border hover:bg-blue-500/10 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 animate-glow-pulse" />
                  <div>
                    <h4 className="font-semibold text-lg">Brand Visibility</h4>
                    <p className="text-gray-600">
                      Showcase your brand to 1000+ participants and tech
                      enthusiasts
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl cyber-border hover:bg-purple-500/10 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-3 animate-glow-pulse" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Talent Acquisition
                    </h4>
                    <p className="text-gray-600">
                      Connect directly with top engineering talent and
                      innovators
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl cyber-border hover:bg-pink-500/10 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-3 animate-glow-pulse" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Innovation Insight
                    </h4>
                    <p className="text-gray-600">
                      Get early access to cutting-edge solutions and ideas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="space-y-4">
              <button className="group w-full sm:w-auto px-8 py-4 bg-red-500 text-white rounded-full font-bold text-lg glow-red hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <FaEnvelope size={20} />
                  <span>Contact Partnership Team</span>
                  <FaArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaPhone size={16} />
                  <span>+91 98765 43210</span>
                </div>
                <span>•</span>
                <span>partnerships@pechacks.in</span>
              </div>
            </div>

            {/* Contact form */}
            <form className="space-y-4 p-6 rounded-2xl cyber-border bg-white/40 backdrop-blur">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg border border-blue-400/40 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg border border-blue-400/40 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Tell us about your partnership idea"
                className="w-full px-4 py-2 rounded-lg border border-blue-400/40 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              <button
                type="button"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover-scale"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right side - Partners */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">
                Our Amazing Partners
              </h3>

              {/* Partner categories */}
              <div className="space-y-6">
                {partnerCategories.map((category, index) => (
                  <div
                    key={index}
                    className="cyber-border rounded-xl p-6 bg-white/30 backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-lg mb-3 text-blue-500">
                      {category.title === "Tech Partners" && (
                        <FaCode className="inline mr-2" />
                      )}
                      {category.title === "Innovation Partners" && (
                        <FaLightbulb className="inline mr-2" />
                      )}
                      {category.title === "Community Partners" && (
                        <FaUsers className="inline mr-2" />
                      )}
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.companies.map((company, companyIndex) => (
                        <span
                          key={companyIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner logos showcase */}
            <div className="relative">
              <div className="cyber-border rounded-xl p-6 partner-logos backdrop-blur-sm">
                <div className="w-full h-48 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">
                    Partner Logos Showcase
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-xl" />
              </div>

              {/* Scrolling marquee effect simulation */}
              <div className="mt-4 overflow-hidden">
                <div className="flex space-x-8 animate-marquee">
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    TechFlow
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    NeoSoft
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    CyberCore
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    DataVault
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    CloudSync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
