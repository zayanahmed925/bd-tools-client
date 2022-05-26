import React from 'react';
import mail from '../../assets/img/mail.png';
import phone from '../../assets/img/phone.png';
import home from '../../assets/img/home.png';
const Portfolio = () => {
    return (
        <div>
            <body class="font-sans antialiased w-full">
                <div class="container mx-auto max-w-screen-xl">
                    <main
                        id="wrapper"
                        class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
                    >
                        <div
                            id="sidebar"
                            class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
                        >
                            <div class="px-2 mb-12">
                                <img
                                    src="https://i.ibb.co/D71h7dM/1640362699202.jpg"
                                    alt="Profile Picture"
                                    class="rounded-full w-48 mx-auto mb-2"
                                />
                                <h1 class="text-center text-3xl font-semibold mb-2">Md.Zehadul Islam Raju</h1>
                            </div>

                            <div class="font-light text-lg px-2 mb-12">
                                <h2 class="text-xl font-semibold mb-4">Contact</h2>
                                <div class="flex items-center my-3">
                                    <img
                                        src={mail}
                                        class="inline w-6 mr-4"
                                        alt="Mail icon"
                                    />
                                    <a href="mailto:">zehadul925@gmail.com</a>
                                </div>
                                <div class="flex items-center my-3">
                                    <img
                                        src={phone}
                                        class="inline w-6 mr-4"
                                        alt="Phone icon"
                                    />
                                    <a href="tel:">01621074325</a>
                                </div>
                                <div class="flex items-center my-3">
                                    <img
                                        src={home}
                                        class="inline w-6 pb-1 mr-4"
                                        alt="House icon"
                                    />
                                    <div>
                                        <p>Mirpur,Dhaka</p>

                                    </div>
                                </div>
                            </div>

                            <div class="font-light text-lg px-2 mb-12">
                                <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
                                <ul class="list-none">
                                    <li className='flex items-center'>
                                        <label for="js-skill">Html</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="80" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Css</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="80" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Bootstrap</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="90" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Tailwind</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="70" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">JavaScript</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="70" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">React</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="70" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Node.js</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="50" max="100"></progress>
                                    </li>
                                    <li className='flex items-center'>
                                        <label for="js-skill">Mongodb</label>
                                        <progress class="progress progress-secondary w-56 h-6" value="50" max="100"></progress>
                                    </li>
                                    <li>
                                        <div> Hosting</div>
                                        <p class="leading-8">
                                            <span class="rounded-xl bg-gray-300 px-3">Netlify</span>
                                            <span class="rounded-xl bg-gray-300 px-3">Firebase</span>
                                            <span class="rounded-xl bg-gray-300 px-3">Heroku</span>

                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div class="font-light text-lg px-2 mb-12">
                                <h2 class="text-xl font-semibold mb-4">Education</h2>
                                <h3 class="font-semibold">BSc Computer Science</h3>
                                <p>Southeast University</p>
                            </div>
                        </div>
                        <div class="content w-full p-12">
                            <div id="profile" class="prose">
                                <h2 class="section-headline">Profile</h2>
                                <p>
                                    I'm a self-taught web developer focusing on the core web
                                    fundamentals - HTML, CSS and JS. I'm experienced in frontend
                                    frameworks like Vue and React and static site generators like
                                    Next.js and Eleventy. I write SCSS or use CSS frameworks like
                                    TailwindCSS, Bootstrap or Bulma to speed up styling of my
                                    projects.
                                </p>
                                <p>
                                    I am highly motivated in expanding my horizons day by day for
                                    better performance, testing and user experience.
                                </p>
                            </div>
                            <hr class="mt-8 mb-12" />
                            <h2 className='text-3xl text-orange-800 text-center font-bold'>My Best Three Project Live link</h2>
                            <hr class="mt-8 mb-12" />
                            <ul>
                                <li className='font-bold text-orange-800 text-2xl'><a href="https://car-store-34d66.web.app/" target="_blank" rel="noopener noreferrer">1. Car Store</a></li>
                                <li className='font-bold text-orange-800 text-2xl'><a href="https://weeding-photography-d73f2.web.app/" target="_blank" rel="noopener noreferrer">2. Weeding Photography</a></li>
                                <li className='font-bold text-orange-800 text-2xl'><a href="https://car-store-34d66.web.app/" target="_blank" rel="noopener noreferrer">3.Car Store</a></li>

                            </ul>
                        </div>
                    </main>
                </div>

            </body>

        </div>
    );
};

export default Portfolio;