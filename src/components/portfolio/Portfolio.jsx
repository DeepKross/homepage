import React from 'react';
import projects from '../portfolio/projects.js';
import {useTranslation} from "react-i18next";
const Portfolio = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id={`portfolio`} className="p-4 md:p-8">
            <h2 className="text-2xl font-bold mb-6">{t(`portfolio_title`)}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                        <img className="h-64 w-full object-cover" src={project.image} alt={project.title}/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{i18n.language === "en" ? project.description : project.descriptionUA}</p>
                            <div className="mt-auto">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                   className={`btn m-2 ${project.gitHub ?
                                       `bg-red-600 pointer-events-none` : ''}`}>GitHub</a>
                                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer"
                                   className={`btn m-2 ${project.isDisabled ? 
                                       `bg-red-600 pointer-events-none` : ''}`}>{t(`website`)}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

