import React from 'react';
import mail from '../../assets/img/mail.png';
import phone from '../../assets/img/phone.png';
import home from '../../assets/img/home.png';
const Portfolio = () => {
    return (
        <div>
            <body className="font-sans antialiased w-full">
                <div className="container mx-auto max-w-screen-xl">
                    <main
                        id="wrapper"
                        className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
                    >
                        <div
                            id="sidebar"
                            className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
                        >
                            <div className="px-2 mb-12">
                                <img
                                    src="https://i.ibb.co/D71h7dM/1640362699202.jpg"
                                    alt="Profile Picture"
                                    className="rounded-full w-48 mx-auto mb-2"
                                />
                                <h1 className="text-center text-3xl font-semibold mb-2">Md.Zehadul Islam Raju</h1>
                            </div>

                            <div className="font-light text-lg px-2 mb-12">
                                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                                <div className="flex items-center my-3">
                                    <img
                                        src={mail}
                                        className="inline w-6 mr-4"
                                        alt="Mail icon"
                                    />
                                    <a href="mailto:">zehadul925@gmail.com</a>
                                </div>
                                <div className="flex items-center my-3">
                                    <img
                                        src={phone}
                                        className="inline w-6 mr-4"
                                        alt="Phone icon"
                                    />
                                    <a href="tel:">01621074325</a>
                                </div>
                                <div className="flex items-center my-3">
                                    <img
                                        src={home}
                                        className="inline w-6 pb-1 mr-4"
                                        alt="House icon"
                                    />
                                    <div>
                                        <p>Mirpur,Dhaka</p>

                                    </div>
                                </div>
                            </div>

                            <div className="font-light text-lg px-2 mb-12">
                                <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
                                <ul className="list-none">
                                    <li className='flex items-center'>
                                        <label for="js-skill">Html</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="80" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Css</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="80" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Bootstrap</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="90" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Tailwind</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="70" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">JavaScript</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="70" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">React</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="70" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Node.js</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="50" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Mongodb</label>
                                        <progress className="progress progress-secondary w-56 h-6" value="50" max="100"></progress>
                                    </li>
                                    <li>
                                        <div> Hosting</div>
                                        <p className="leading-8">
                                            <span className="rounded-xl bg-gray-300 px-3">Netlify</span>
                                            <span className="rounded-xl bg-gray-300 px-3">Firebase</span>
                                            <span className="rounded-xl bg-gray-300 px-3">Heroku</span>

                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="font-light text-lg px-2 mb-12">
                                <h2 className="text-xl font-semibold mb-4">Education</h2>
                                <h3 className="font-semibold">BSc Computer Science</h3>
                                <p>Southeast University</p>
                            </div>
                        </div>
                        <div className="content w-full p-12">
                            <div id="profile" className="prose">
                                <h2 className="section-headline font-bold">Profile</h2>
                                <p>
                                    I'm a self-taught web developer focusing on the core web
                                    fundamentals - HTML, CSS and JS. I'm learning in frontend
                                    frameworks like  React . I use CSS frameworks like
                                    TailwindCSS, Bootstrap to speed up styling of my
                                    projects.
                                </p>
                                <p>
                                    I am highly motivated in expanding my horizons day by day for
                                    better performance, testing and user experience.
                                </p>
                            </div>
                            <hr className="mt-8 mb-12" />
                            <h2 className='text-3xl text-orange-800 text-center font-bold'>My Recent Three Project Live link</h2>
                            <hr className="mt-8 mb-12" />
                            <ul>
                                <li className='font-bold text-orange-800 text-2xl'><a href="https://bd-tools-d0f55.web.app/" target="_blank" rel="noopener noreferrer">1. BD Tools</a></li>
                                <li className='font-bold text-orange-800 text-2xl'><a href="https://car-store-34d66.web.app/" target="_blank" rel="noopener noreferrer">2. Car Store</a></li>
                                <li className='font-bold text-orange-800 text-2xl'><a href="https://weeding-photography-d73f2.web.app/" target="_blank" rel="noopener noreferrer">3. Weeding Photography</a></li>

                            </ul>
                        </div>
                    </main>
                </div>

            </body>

        </div>
    );
};

export default Portfolio;