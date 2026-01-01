import React from 'react';
import { siteData } from '../data/content';
import { ExternalLink, FileText, BookOpen, Calendar } from 'lucide-react';
import { typeLabels } from '../data/publications';

export const Publications: React.FC = () => {
    return (
        <section id="publications" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Selected Publications</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {siteData.publications.sort((a, b) => {
                        if (a.year !== b.year) return b.year - a.year;

                        const months: Record<string, number> = {
                            "January": 1, "February": 2, "March": 3, "April": 4,
                            "May": 5, "June": 6, "July": 7, "August": 8,
                            "September": 9, "October": 10, "November": 11, "December": 12
                        };

                        const monthA = a.month ? months[a.month] || 0 : 0;
                        const monthB = b.month ? months[b.month] || 0 : 0;

                        return monthB - monthA;
                    }).map((pub) => (
                        <div key={pub.id} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col">
                            <div className="flex flex-col gap-4 h-full">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded uppercase tracking-wide
                      ${pub.type === 'journal' ? 'bg-purple-100 text-purple-700' :
                                                pub.type === 'conference' ? 'bg-blue-100 text-blue-700' :
                                                    pub.type === 'report' ? 'bg-green-100 text-green-700' :
                                                        'bg-gray-100 text-gray-700'}`}>
                                            {typeLabels[pub.type]}
                                        </span>
                                        <span className="flex items-center text-slate-500 text-sm">
                                            <Calendar size={14} className="mr-1" />
                                            {pub.month ? `${pub.month} ` : ''}{pub.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                                        {pub.title}
                                    </h3>

                                    <p className="text-slate-600 mb-3">{pub.authors.join(", ")}</p>

                                    <div className="flex items-center text-slate-500 text-sm italic mb-4">
                                        <BookOpen size={14} className="mr-1.5" />
                                        {pub.venue}
                                    </div>

                                    {pub.abstract && (
                                        <p className="text-slate-600/90 text-sm mb-4 leading-relaxed">
                                            {pub.abstract}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {pub.tags?.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {pub.url && (
                                            <a
                                                href={pub.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-blue-700 transition-colors whitespace-nowrap"
                                            >
                                                <ExternalLink size={16} />
                                                View Paper
                                            </a>
                                        )}
                                        {pub.pdf && (
                                            <a
                                                href={pub.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors whitespace-nowrap"
                                            >
                                                <FileText size={16} />
                                                PDF
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
