"use client";

import { Calendar, FileText, Award, Users } from "lucide-react";

export default function CallForPapers() {
  return (
    <section id="papers" className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Call for Papers
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0 bg-[#1EBDD1] animate-pulse"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/50 p-4 rounded-lg border border-[#1EBDD1]/20">
                  <FileText className="text-[#1EBDD1] mb-2" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Paper Guidelines</h3>
                  <p className="text-gray-300 text-sm">Submit your original research, case studies, or technical experiences in DevOps practices.</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-[#1EBDD1]/20">
                  <Award className="text-[#8C51BF] mb-2" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Recognition</h3>
                  <p className="text-gray-300 text-sm">Selected papers will be published and authors will present at the conference.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                    <Calendar className="mr-2" size={20} />
                    Important Dates
                  </h3>
                  <ul className="space-y-4 bg-black/50 p-4 rounded-lg border border-[#1EBDD1]/20">
                    <li className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Submission Deadline: April 1, 2024</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Notification: May 1, 2024</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Camera Ready: May 15, 2024</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                    <Users className="mr-2" size={20} />
                    Topics
                  </h3>
                  <ul className="space-y-2 bg-black/50 p-4 rounded-lg border border-[#1EBDD1]/20">
                    <li className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#1EBDD1]"></div>
                      <span>DevOps Practices and Culture</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#1EBDD1]"></div>
                      <span>CI/CD Pipelines</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#1EBDD1]"></div>
                      <span>Container Orchestration</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#1EBDD1]"></div>
                      <span>Infrastructure as Code</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#1EBDD1]"></div>
                      <span>Cloud Native Technologies</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#1EBDD1]"></div>
                      <span>Site Reliability Engineering</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-[#1EBDD1] to-[#8C51BF] text-white rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105 duration-300">
                  Submit Your Paper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}