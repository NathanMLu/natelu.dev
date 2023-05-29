import Angular from '$lib/images/logos/angular.svg';
import Aws from '$lib/images/logos/aws.svg';
import Bash from '$lib/images/logos/bash.svg';
import Bootstrap from '$lib/images/logos/bootstrap.svg';
import C from '$lib/images/logos/c.svg';
import Confluence from '$lib/images/logos/confluence.svg';
import CPlusPlus from '$lib/images/logos/cplusplus.svg';
import CSharp from '$lib/images/logos/csharp.svg';
import Css from '$lib/images/logos/css.svg';
import Docker from '$lib/images/logos/docker.svg';
import DotNet from '$lib/images/logos/dotnet.svg';
import Figma from '$lib/images/logos/figma.svg';
import Flask from '$lib/images/logos/flask.svg';
import Git from '$lib/images/logos/git.svg';
import Github from '$lib/images/logos/github.svg';
import GoogleCloud from '$lib/images/logos/googlecloud.svg';
import Hibernate from '$lib/images/logos/hibernate.svg';
import Html from '$lib/images/logos/html.svg';
import Java from '$lib/images/logos/java.svg';
import Javascript from '$lib/images/logos/javascript.svg';
import Jira from '$lib/images/logos/jira.svg';
import Jupyter from '$lib/images/logos/jupyter.svg';
import Kotlin from '$lib/images/logos/kotlin.svg';
import Linux from '$lib/images/logos/linux.svg';
import Mongodb from '$lib/images/logos/mongodb.svg';
import Moq from '$lib/images/logos/moq.svg';
import Mysql from '$lib/images/logos/mysql.svg';
import Nodejs from '$lib/images/logos/nodejs.svg';
import Numpy from '$lib/images/logos/numpy.svg';
import Octopus from '$lib/images/logos/octopus.svg';
import Pandas from '$lib/images/logos/pandas.svg';
import Php from '$lib/images/logos/php.svg';
import Python from '$lib/images/logos/python.svg';
import React from '$lib/images/logos/react.svg';
import Redux from '$lib/images/logos/redux.svg';
import Sass from '$lib/images/logos/sass.svg';
import Selenium from '$lib/images/logos/selenium.svg';
import Spring from '$lib/images/logos/spring.svg';
import Svelte from '$lib/images/logos/svelte.svg';
import Tailwind from '$lib/images/logos/tailwind.svg';
import Typescript from '$lib/images/logos/typescript.svg';
import Webpack from '$lib/images/logos/webpack.svg';

export const defaultUserName = 'NateLu Clone';
export const defaultUserPoints = 10

export const levelPoints: { [key: number]: number } = {
    1: 15,
    2: 20,
    3: 25,
    4: 30,
    5: 35,
    6: 40,
    7: 45,
    8: 50,
    9: 55,
    10: 60,
};

export const congratsMessages = [
    "Way to go!",
    "You did it!",
    "Congratulations!",
    "Great job!",
    "Awesome!",
    "Well played!",
    "Nice work!",
    "Superb!",
    "Excellent!",
    "Brilliant!",
    "Fantastic!",
    "Well deserved!",
    "You're killing it!",
    "Keep it up!",
    "Impressive!",
    "Outstanding!",
    "Terrific job!",
    "You rock!",
    "Amazing work!",
    "Hooray for you!",
    "You're a star!",
    "Well earned!",
    "Thumbs up!",
    "Good going!",
    "Top-notch!",
    "High five!",
    "You're on fire!",
    "Rocking it!",
    "Spectacular!",
    "Kudos to you!",
    "Champion status!",
    "You're unstoppable!",
    "Party time!",
    "Woot woot!",
    "Score!",
    "Bravo!",
    "Celebration time!",
    "Keep it up!",
    "Proud of you!",
    "Hip hip hooray!",
    "You're a winner!",
    "Doing great!",
    "Happy dance!",
    "You're the best!",
    "Cheers to you!",
    "Woohoo!",
    "Victory is yours!",
    "You're amazing!",
    "Mission accomplished!",
    "You earned it!",
];

// 'language',
//     'framework',
//     'library',
//     'tool'
// enum for technology types that we can reference like technologyTypes.language, framework, etc
export const technologyTypes = {
    language: 'language',
    framework: 'framework',
    library: 'library',
    tool: 'tool'
}

export const technologies = [
    {
        name: 'Angular',
        logo: Angular,
        type: technologyTypes.framework,
        facts: [
            'As a Software Engineer at CoreLogic, I utilized Angular to implement modern UI components, architect services, and integrate OAuth flow with user identity for secure login and user state management, contributing to a seamless user experience within the proprietary design framework.',
            'In personal projects, I used Angular along with NgRx to develop scalable and maintainable state management systems, enabling the creation of multiplayer experiences and admin portals for efficient management of metrics and other data.'
        ]
    },
    {
        name: 'AWS',
        logo: Aws,
        type: technologyTypes.tool,
        facts: [
            'In my personal projects, I have utilized AWS Lambda functions to develop custom skills for Alexa, enabling voice-enabled interactions and personalized experiences.',
            'I have explored AWS solutions for database management, leveraging services like Amazon RDS, to ensure quick and efficient deployment of relational databases, ensuring data integrity and scalability.'
        ]
    },
    {
        name: 'Bash',
        logo: Bash,
        type: technologyTypes.language,
        facts: [
            'At CoreLogic, I leveraged Bash scripting to load test various API endpoints, automating the process and ensuring optimal performance and reliability of the system.',
            'In personal tasks, I used Bash scripting to automate repetitive tasks, including sending automated emails when files in my personal photo album directory were modified, providing real-time updates while ensuring file security through backups.'
        ]
    },
    {
        name: 'Bootstrap',
        logo: Bootstrap,
        type: technologyTypes.library,
        facts: [
            'In projects, Bootstrap is my go-to design framework, extensively used in most of my hackathon projects for creating responsive and visually appealing user interfaces with a mobile-first approach.',
            'At CoreLogic, I integrated Bootstrap and contributed to the internal design library by implementing custom components and styles, ensuring consistent and efficient UI development across applications.'
        ]
    },
    {
        name: 'C',
        logo: C,
        type: technologyTypes.language,
        facts: [
            'In my Embedded Systems course, I utilized C to develop firmware for the TM4C board, creating a final game that showcased the practical application of ADC, DAC, I/O device drivers, and debugging.',
            'In my data structures and algorithms (DSA) class, I employed C to build custom data structures, implement efficient algorithms, and optimize code, gaining practical experience in designing and manipulating complex data systems.'
        ]
    },
    {
        name: 'Confluence',
        logo: Confluence,
        type: technologyTypes.tool,
        facts: [
            'During my internship, I utilized Confluence to create a comprehensive documentation page for my project, incorporating relevant information for developers, business analysts, and stakeholders.',
            'At CoreLogic, Confluence was used by my team for collaborative documentation, facilitating communication and knowledge sharing.'
        ]
    },
    {
        name: 'C++',
        logo: CPlusPlus,
        type: technologyTypes.language,
        facts: [
            'In my data structures and algorithms (DSA) course, I extensively used C++ to implement and analyze various data structures and algorithms, gaining a strong understanding of their fundamental concepts and practical applications.',
            'In Liquid Overlay, our team used C++ to manipulate window elements, extract system information, and leverage audio drivers to make video games accessible to deaf individuals.'
        ]
    },
    {
        name: 'C#',
        logo: CSharp,
        type: technologyTypes.language,
        facts: [
            'In my position as a part-time Software Engineer at CoreLogic, I utilized C# to develop scalable and efficient API endpoints, optimizing client applications and modernizing UI components.',
            'In my hackathon project OmniChat, I used C# as the primary language for server-side development, leveraging its robust libraries and frameworks to create a seamless universal chat platform that consolidated messaging platforms into a single user interface.'
        ]
    },
    {
        name: 'CSS',
        logo: Css,
        type: technologyTypes.language,
        facts: [
            'At CoreLogic, I utilized custom CSS elements to enhance the user interface, contributing to the development of a proprietary design framework that ensured consistency and visual appeal.',
            'In my design workflow, I seamlessly integrated CSS with Figma, prioritizing a mobile-first approach to create responsive and user-friendly prototypes for hackathon projects.'
        ]
    },
    {
        name: 'Docker',
        logo: Docker,
        type: technologyTypes.tool,
        facts: [
            'Docker has been a valuable asset in my development workflow, allowing for easy application deployment, enhanced portability, scalability, and simplified management of dependencies in a variety of personal projects.',
            'In the development of drone cartography automation tools, I utilized Docker to containerize applications, ensuring efficient image stitching and enabling automated processes for accurate and streamlined cartography.'
        ]
    },
    {
        name: '.NET',
        logo: DotNet,
        type: technologyTypes.framework,
        facts: [
            'At CoreLogic, I utilized .NET with NHibernate for database binding, Moq for unit testing, and other related technologies to develop robust and reliable backend applications and services.',
            'In personal projects, I utilized .NET to manage Raspberry Pi hardware connections from a web application, enabling seamless integration of hardware components.'
        ]
    },
    {
        name: 'Figma',
        logo: Figma,
        type: technologyTypes.tool,
        facts: [
            'At CoreLogic, I used Figma designs as a reference to ensure accurate implementation of UI/UX elements, maintaining consistency and fidelity throughout the development process.',
            'For my personal portfolio website (this website!), I utilized Figma to create the entire design, leveraging its powerful features for visual prototyping and refining the user experience.'
        ]
    }
];