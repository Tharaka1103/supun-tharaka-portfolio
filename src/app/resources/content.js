import { Icon, InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Supun',
    lastName:  'Tharaka',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Colombo',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Sinhala']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Tharaka1103',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'supuntharakapro999@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer</>,
    subline: <>I'm Supun Tharaka, a design engineer at <InlineCode>SKYREK (PVT) LTD.</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a third-year student at SLIIT University pursuing a Bachelor of Science (Hons) in Information Technology. I have a strong desire to learn and grow, and I am excited to contribute to worthwhile projects while always bettering myself. </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'SKYREK (PVT) LTD.',
                timeframe: '2024 - Present',
                role: 'Software Engineer',
                achievements: [
                    <>Doing a Software Engineering Internship at Skyrek (Pvt) Ltd.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/skyrek.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Sri Lanka Institute of Information Technology',
                description: <>Bachelor of Science (Hons) in Information Technology</>,
            },
            {
                name: 'Royal College Polonnaruwa',
                description: <>GCE Advanced Level (2021)</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                icon: <Icon name="figma" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                icon: <Icon name="nextjs" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'HTML',
                description: <>Proficient in writing semantic and accessible HTML markup.</>,
                icon: <Icon name="html" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'CSS',
                description: <>Strong understanding of CSS layouts, animations and responsive design.</>,
                icon: <Icon name="css" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'JavaScript',
                description: <>Expert in modern JavaScript development.</>,
                icon: <Icon name="javascript" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'PHP',
                description: <>Experience in building web applications using PHP and MySQL.</>,
                icon: <Icon name="php" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'React',
                description: <>Skilled in building interactive UIs with React and its ecosystem.</>,
                icon: <Icon name="react" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'MongoDB',
                description: <>Experienced in NoSQL database design and MongoDB operations.</>,
                icon: <Icon name="mongodb" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'Python',
                description: <>Proficient in Python programming for web and data applications.</>,
                icon: <Icon name="python" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'C#',
                description: <>Skilled in C# development for desktop and web applications.</>,
                icon: <Icon name="csharp" size="l" onBackground="neutral-weak"/>,
            }
        ]
    },
    softSkills: {
        display: true,
        title: 'Soft skills',
        skills: [
            {
                title: 'Communication',
                description: <>Strong verbal and written communication skills with ability to explain complex concepts clearly.</>,
                icon: <Icon name="chat" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'Teamwork',
                description: <>Excellent collaboration abilities and experience working in cross-functional teams.</>,
                icon: <Icon name="users" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'Problem Solving',
                description: <>Analytical mindset with strong problem-solving and critical thinking abilities.</>,
                icon: <Icon name="puzzle" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'Leadership',
                description: <>Experience in leading small teams and mentoring junior developers.</>,
                icon: <Icon name="star" size="l" onBackground="neutral-weak"/>,
            },
            {
                title: 'Time Management',
                description: <>Efficient in managing multiple projects and meeting deadlines consistently.</>,
                icon: <Icon name="clock" size="l" onBackground="neutral-weak"/>,
            }
        ]
    },
    newprojects: {
        display: true, // set to false to hide this section
        title: 'Latest Projects',
        newprojects: [
            {
                title: 'E-Commerce Website',
                description: 'An e-commerce website built using HTML, CSS, and JavaScript.',
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/project1.mp4',
                        alt: 'Project1',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Fitness Website',
                description: 'An fitness website built using HTML, CSS, and JavaScript.',
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/project3.png',
                        alt: 'Project1',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Solar Website',
                description: 'An solar website built using HTML, CSS, and JavaScript.',
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/project2.png',
                        alt: 'Project1',
                        width: 16,
                        height: 9
                    }
                ]
            }
            
        ]
    },   
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };