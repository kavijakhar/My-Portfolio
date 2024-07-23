import React from 'react';

const ProfessionalExperience = () => {
    return (
        <div
            name="ProfessionalExperience"
            className="bg-gradient-to-b from-gray-900 to-gray-900 w-full h-full text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold text-blue-300 inline border-b-4 border-blue-300">
                        Professional Experience
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Experience 1: React.js/Next.js Developer at Grand View Research */}
                    <div className="justify-between">
                        <div className='flex justify-between'>
                            <p className="text-xl font-bold text-gray-100">React.js/Next.js Developer | Grand View Research, Inc.</p>
                            <p className="text-lg font-bold text-blue-300">Jan 2023 - Jun 2024</p>
                        </div>
                        <div>
                            <p className='text-xl font-bold mt-2 text-blue-300'>Projects:</p>
                            <div className='flex justify-between'>
                                <p className="text-base font-bold mt-2 text-gray-300">CRM System Development</p>
                                <p className="text-base font-bold text-gray-300">May 2023 - Jun 2024</p>
                            </div>
                            <ul className="list-disc list-inside mt-1">
                                <li>Multiple Account Management: Efficient handling of multiple user accounts.</li>
                                <li>Role-Based Company Switching: Seamless company switching based on user roles and permissions.</li>
                                <li>Comprehensive Oversight: Manage projects, tasks, clients, employees, leads, contracts, orders, invoicing, and payments.</li>
                                <li>User Invitation System: Invite users based on specific roles.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience 2: Real Time Chat Application */}
                    <div className="flex justify-between">
                        <div>
                            <p className="text-base font-bold text-gray-300">Real Time Chat Application</p>
                            <p className='mt-1'>Developed a real-time chat application layout utilizing Next.js.</p>
                        </div>
                        <p className="text-base font-bold text-gray-300">Jan 2023 - April 2023</p>
                    </div>

                    {/* Experience 3: Frontend Developer at bizgrow */}
                    <div>
                        <div className='flex justify-between'>
                            <p className="text-xl font-bold text-gray-100">Frontend Developer | bizgrow</p>
                            <p className='text-lg font-bold text-blue-300'>Feb 2022 - Sep 2022</p>
                        </div>
                        <div>
                            <p>Developed user-facing features, ensuring optimal performance and responsiveness of web applications using React JS/Next JS and handled API integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;
