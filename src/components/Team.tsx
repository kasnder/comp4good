import React from 'react';
import { siteData } from '../data/content';
import { User } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Team</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {siteData.team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={40} />
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
            </div>
          ))}
        </div>

        <div id="partners" className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Partners & Collaborators</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {siteData.partners.map((partner, index) => (
              <div key={index} className="text-slate-600 font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
