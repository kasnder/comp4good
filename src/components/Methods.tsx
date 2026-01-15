import React from 'react';
import { siteData } from '../data/content';
import { publications } from '../data/publications';
import { Database, Scale, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    "Technical Methods": <Database size={28} />,
    "Legal & Policy Analysis": <Scale size={28} />,
    "Qualitative Methods": <Users size={28} />
};

export const Methods: React.FC = () => {
    const getPublicationById = (id: number) => publications.find(p => p.id === id);

    return (
        <section id="methods" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Our Approach</h2>
                <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                    {siteData.methods.intro}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {siteData.methods.categories.map((category) => (
                        <div key={category.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary mr-4">
                                    {iconMap[category.title]}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                            </div>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {category.description}
                            </p>

                            {category.examples && category.examples.length > 0 && (
                                <div className="border-t border-slate-100 pt-4">
                                    <p className="text-sm font-semibold text-slate-500 mb-2">Example Research:</p>
                                    <ul className="space-y-2">
                                        {category.examples.map((id) => {
                                            const pub = getPublicationById(id);
                                            return pub ? (
                                                <li key={id}>
                                                    <a
                                                        href={`#pub-${pub.id}`}
                                                        className="text-sm text-primary hover:underline line-clamp-2"
                                                    >
                                                        {pub.title}
                                                    </a>
                                                </li>
                                            ) : null;
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
