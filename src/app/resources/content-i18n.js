import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Tharaka',
        lastName:  'Dharmasiri',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Asia/Colombo',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Sinhala']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
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
            link: 'https://www.linkedin.com/in/tharaka-dharmasiri-3ba950204/',
        },
        {
            name: 'Facebook',
            icon: 'facebook',
            link: 'https://web.facebook.com/supun.tharaka.9277/',
        },
        {
            name: 'Whatsapp',
            icon: 'whatsapp',
            link: 'mhttps://wa.me/94714310048',
        },
        {
            name: 'Skype',
            icon: 'skype',
            link: 'https://join.skype.com/invite/xm0tlzMujUcc',
        },
        {
            name: 'View CV',
            icon: 'eye',
            link: '/Supun-Tharaka-SE.pdf',  // Update this path to match your CV filename in public folder
            download: true  // This will trigger download instead of navigation
        }
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://wa.me/94714310048'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'SKYREK (PVT) LTD.',
                    timeframe: t("about.work.experiences.SKYREK.timeframe"),
                    role: t("about.work.experiences.FLY.role"),
                    achievements: t("about.work.experiences.FLY.achievements").split(";"),
                    images: [ // optional: leave the array empty if you don't want to display images
                        {
                            src: '/images/skyrek.png',
                            alt: 'Once UI Project',
                            width: 16,
                            height: 9
                        }
                    ]
                }
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
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
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
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        // Images from https://pexels.com
        images: [
            { 
                src: '/images/gallery/img-01.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-02.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-03.jpg', 
                alt: 'image',
                orientation: 'horizontal'
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
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-07.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/cover-01.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/cover-02.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/cover-03.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/cover-04.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-08.jpg', 
                alt: 'image',
                orientation: 'horizontal'
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
                orientation: 'horizontal'
            }           
        ]
    }
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };