import React from 'react'
import Head from 'next/head'
import TextShuffler from '../components/actions/TextShuffler'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'
import threeJsAnimations from '../functions/frontend/threeJsAnimations'

const about = () => {

    return (
        <GeneralLayout pageName="about">
            <Head>
                <title>About Me</title>
                <meta name="description" content="Ben of all trade, master of all! Learn more about me" />
            </Head>
            <h1><TextShuffler textInput="Ben of all trade, master of all!" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Quick learner, adaptable, problem solver, curious. I strive to know the system, rather than the status quo. My credo is: no problem too great, no knowledge too vast, no logic too complex. I thrive in difficult situations and complex hurdles: problem solving is now second nature to me: if you can think it, it can be done." delay={ 500 } />
            </span>

            <div className='w-full h-6'></div>

            <section>
                <h2><TextShuffler textInput="Web Dev Tech Stack" /></h2>
                <ul style={ { maxWidth: "800px" } }>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="HTML, CSS, Javascript" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="The basics, the bedrock of all websites." />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="React JS" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput=" JavaScript library for high-performance web applications" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Next JS" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="High performance React and Node js web framework for building blazing flast and performant web applications" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Tailwind CSS" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Lighting fast mobile first styling" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Node JS" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="JavaScript runtime for the server. For creating backend architectures and APIs" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Ubuntu Linux" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Secure server management with ubuntu and Linux" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Nginx" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Super secure web server, reverse proxy and load balancer" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="MySQL" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Tried and tested data storage, querying, and management." />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Git and Github" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Version control" />
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <h2><TextShuffler textInput="UI/UX tech Stack" /></h2>
                <ul style={ { maxWidth: "800px" } }>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Adobe Photoshop" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Web design, image manipulation, image compositing, and more" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Adobe Illustrator" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Vector graphic of all types" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Figma" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Web, UI, UX design." />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Affinity Designer" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Vector graphics." />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="After Effects" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Motion graphics and animation" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Adobe XD" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="UI/UX design" />
                        </span>
                    </li>
                    <li>
                        <h3 className="tech-stack-header"><TextShuffler textInput="Webflow" /></h3>
                        <span className='opacity-50'>
                            <TextShuffler textInput="Visual Web coding" />
                        </span>
                    </li>
                </ul>
            </section>


            <div className="hero-ctas-section">
                <a href='/documents/Benjamin_Toby_CV-updated.pdf' download={ true }>See my resume</a>
                <a href='https://www.linkedin.com/in/benjamin-toby/' target="_blank">Linkedin</a>
            </div>
        </GeneralLayout>
    )
}

export default about
