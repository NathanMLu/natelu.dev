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
import Near from '$lib/images/logos/near.svg';
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
import Sklearn from '$lib/images/logos/sklearn.svg';
import Spring from '$lib/images/logos/spring.svg';
import Svelte from '$lib/images/logos/svelte.svg';
import Tailwind from '$lib/images/logos/tailwind.svg';
import Tensorflow from '$lib/images/logos/tensorflow.svg';
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
    },
    {
        name: 'Flask',
        logo: Flask,
        type: technologyTypes.framework,
        facts: [
            'In my contract work with C3 Investments, I utilized Flask to build a REST API with login functionality, session handling, and an admin dashboard, enabling secure user authentication, seamless user experiences, and efficient data management.',
            'In personal projects, I leveraged Flask to implement webhooks for real-time data integration, integrated mobile notifications for timely updates, and integrated with various APIs to automate everyday tasks.'
        ]
    },
    {
        name: 'Git',
        logo: Git,
        type: technologyTypes.tool,
        facts: [
            'At CoreLogic, I utilized Git for version control, employing branching strategies and pull request workflows to facilitate collaboration and ensure seamless code integration.',
            'During various hackathon projects, I used Git to manage team collaboration and easy rollbacks to previous versions, ensuring a well-organized and efficient development workflow.'
        ]
    },
    {
        name: 'GitHub',
        logo: Github,
        type: technologyTypes.tool,
        facts: [
            'In my work at CoreLogic, we utilized GitHub as our primary version control system, adopting a comprehensive branching strategy that directly impacted our deployment process and closely integrated with our Jira issue tracking system.',
            'In hackathon projects and club websites, I used GitHub to manage team collaboration, ensuring seamless integration of code with multiple contributors.'
        ]
    },
    {
        name: 'Google Cloud Platform',
        logo: GoogleCloud,
        type: technologyTypes.tool,
        facts: [
            'At CoreLogic, I utilized Google Cloud Platform\'s Cloud Storage service to store image data and seamlessly integrate image upload and download functionalities into existing applications, ensuring efficient management and retrieval of image assets through APIs.',
            'In my hackathon project Liquid Overlay, I leveraged Google Cloud Platform\'s Speech-to-Text service to transcribe voice chat in real-time, enhancing accessibility and providing a text-based alternative for communication within the gaming community.'
        ]
    },
    {
        name: 'Hibernate',
        logo: Hibernate,
        type: technologyTypes.library,
        facts: [
            'At CoreLogic, I architected the integration between our application and the database using NHibernate, leveraging its capabilities to design an efficient and scalable data access layer for a green fields application.',
            'In my Advanced Java course, I utilized Hibernate to implement a data access layer for a basic web browser application, seamlessly integrating the application with a MySQL database and employing caching strategies to optimize load time.'
        ]
    },
    {
        name: 'HTML',
        logo: Html,
        type: technologyTypes.language,
        facts: [
            'In numerous hackathon projects, I demonstrated strong front-end skills by utilizing HTML for dynamic page templating to create interactive user interfaces, ensuring a seamless user experience.',
            'In my project Smilio, I employed HTML and SVG animations to create a popular smartwatch game for Fitbit OS, gaining experience in creating responsive and user-friendly interfaces for wearable devices.'
        ]
    },
    {
        name: 'Java',
        logo: Java,
        type: technologyTypes.language,
        facts: [
            'In my Advanced Java course, I utilized Java to develop a simple web browser, showcasing my proficiency in object-oriented programming and application development using Java.',
            'In my personal projects, I utilized Spring Boot, Hibernate, and Gradle to develop scalable Java applications with seamless database integration, efficient build automation, and dependency management.'
        ]
    },
    {
        name: 'JavaScript',
        logo: Javascript,
        type: technologyTypes.language,
        facts: [
            'In various hackathon projects and personal initiatives, I leveraged JavaScript as the primary language to create dynamic web applications, employing frameworks like React, Angular, and Svelte for interactive interfaces and real-time updates.',
            'In "Smilio", I created a JavaScript-based Fitbit OS watch app with a game loop for smooth animations and interactions, showcasing its versatility and integrating with the Fitbit OS API for seamless hardware integration.'
        ]
    },
    {
        name: 'Jira',
        logo: Jira,
        type: technologyTypes.tool,
        facts: [
            'At CoreLogic, I actively participated in agile development methodologies, specifically sprint-based development, where I collaborated with cross-functional teams to plan, execute, and deliver software projects in iterative cycles.',
            'In school clubs, I have effectively utilized Jira for project management and collaboration purposes when working on designing club websites and other tech-related projects.'
        ]
    },
    {
        name: 'Jupyter Notebooks',
        logo: Jupyter,
        type: technologyTypes.tool,
        facts: [
            'In my work with C3 Investments, I utilized Jupyter Notebooks to create interactive data visualizations and perform exploratory data analysis, gaining valuable insights into the data and enabling effective decision-making.',
            'In my personal projects and kaggle competitions, I frequently utilized Jupyter Notebook as a versatile environment for machine learning tasks, such as data preprocessing, feature engineering, model training, and evaluation.'
        ]
    },
    {
        name: 'Kotlin',
        logo: Kotlin,
        type: technologyTypes.language,
        facts: [
            'Developed an in-game overlay in Kotlin for the "Liquid Overlay" project, incorporating voice and audio manipulation techniques, as well as a Foreign Function Interface (FFI) with C libraries for real-time audio processing.',
            'Utilized Kotlin and Jetpack Compose in the "True Cost" hackathon project to create a cross-platform mobile app, showcasing Kotlin\'s versatility and seamless integration with external APIs and design frameworks.'
        ]
    },
    {
        name: 'Linux',
        logo: Linux,
        type: technologyTypes.tool,
        facts: [
            'Employed Linux as the foundation for various personal projects, including Raspberry Pi OS, where I set up lightweight scripts and managed remote servers for seamless automation and remote access.',
            'Utilized Kali Linux, a specialized Linux distribution for ethical hacking, to perform penetration testing on various personal projects, gaining valuable insights into security vulnerabilities and best practices.'
        ]
    },
    {
        name: 'MongoDB',
        logo: Mongodb,
        type: technologyTypes.tool,
        facts: [
            'Implemented MongoDB as the backend database in UniverSafe, enabling efficient storage and retrieval of user information for incident reporting and prevention.',
            'As a Contract Machine Learning Engineer at C3 Investments LLC, I utilized MongoDB as a data storage solution to store and analyze large volumes of trading data, enabling efficient data processing and improved accuracy in creating custom trading indicators.'
        ]
    },
    {
        name: 'Moq',
        logo: Moq,
        type: technologyTypes.library,
        facts: [
            'At CoreLogic, I utilized Moq to create mock objects for unit testing, ensuring that the application was functioning as expected and that all components were working as intended.',
            'During my internship, I followed TDD principles and utilized Moq to create mock objects to test backend services and MSTest to load test API endpoints and ensure that the application was functioning as expected.'
        ]
    },
    {
        name: 'MySQL',
        logo: Mysql,
        type: technologyTypes.language,
        facts: [
            'In my advanced web development course, I integrated MySQL with PHP to create a dynamic drone images website, allowing users to upload, store, and retrieve images from the database, providing a seamless user experience.',
            'In my personal projects, I leveraged MySQL as the backend database to store and manage data for various applications, ensuring data integrity, efficient querying, and scalability.'
        ]
    },
    {
        name: 'Near',
        logo: Near,
        type: technologyTypes.framework,
        facts: [
            'In my hackathon project Trackr, our team leveraged NEAR\'s JavaScript SDK a create a supply chain logistics dApp, enabling users to track the location of their packages in real-time and ensuring transparency in the supply chain.',
            'Our team developed a smart contract factory to create and deploy smart contracts for each package, and provided easy access through a web interface and QR code scanning, ensuring all package information was stored on chain.'
        ]
    },
    {
        name: 'Node.js',
        logo: Nodejs,
        type: technologyTypes.tool,
        facts: [
            'Implemented a RESTful API using Node.js, React, and MongoDB for a personal project, allowing users to perform CRUD operations on data and ensuring efficient data handling and scalability.',
            'Scripted bots for various online games by leveraging Node.js and reverse engineering techniques, enabling automated gameplay through WebSocket connections within a Chrome extension browser script.'
        ]
    },
    {
        name: 'Numpy',
        logo: Numpy,
        type: technologyTypes.library,
        facts: [
            'In my work with C3 Investments, I utilized Numpy to perform exploratory data analysis and data preprocessing, gaining valuable insights into the data and enabling effective decision-making.',
            'In my personal project "Dino Jump", I used numpy to explore the use of reinforcement learning in game development, creating a simple game environment and training a NEAT (NeuroEvolution of Augmenting Topologies) model to play the game.'
        ]
    },
    {
        Name: 'Octopus Deploy',
        logo: Octopus,
        type: technologyTypes.tool,
        facts: [
            'At CoreLogic, I utilized Octopus Deploy to automate the deployment of software applications, ensuring that the application was deployed to the correct environment and that all components were working as intended.',
            'During my internship, I followed CI/CD principles and utilized Octopus Deploy to automate the deployment of backend services and ensure that the application was functioning as expected.'
        ]
    },
    {
        name: 'Pandas',
        logo: Pandas,
        type: technologyTypes.library,
        facts: [
            'In my position as a Contract Machine Learning Engineer at C3 Investments LLC, I leveraged the power of pandas to preprocess and cleanse intricate financial datasets, empowering accurate analysis and modeling for the creation of customized trading indicators.',
            'In my personal projects and kaggle competitions, I frequently utilized pandas as a versatile tool for data preprocessing, feature engineering, and data analysis, enabling effective decision-making and improved accuracy in machine learning models.'
        ]
    },
    {
        name: 'PHP',
        logo: Php,
        type: technologyTypes.language,
        facts: [
            'In my advanced web development course, I utilized PHP to create a dynamic drone images website, allowing users to upload, store, and retrieve images from the database, providing a seamless user experience.',
            'I used PHP to develop a custom email server, allowing users to send and receive emails through a custom domain, and using slug URLs to access emails through a web browser.'
        ]
    },
    {
        name: 'Python',
        logo: Python,
        type: technologyTypes.language,
        facts: [
            'In my work with C3 Investments, I utilized Python to create custom trading indicators, leveraging the power of pandas and numpy to preprocess and cleanse intricate financial datasets, empowering accurate analysis and modeling.',
            'In my personal trading bot project, I used Python with Flask and SqlAlchemy to develop a web portal with real-time trade metrics, allowing users to monitor their trading bot\'s performance and make informed decisions.'
        ]
    },
    {
        name: 'React',
        logo: React,
        type: technologyTypes.framework,
        facts: [
            'In Trackr, a supply chain logistics dApp, I utilized React along with a QR code library to implement a QR code scanning feature and web portal, allowing users to scan QR codes and view package information.',
            'I utilized React to develop a universal chat platform called OmniChat, integrating various messaging platforms into a single UI through various APIs, allowing users to communicate with their friends on different platforms through a single interface.'
        ]
    },
    {
        name: 'Redux',
        logo: Redux,
        type: technologyTypes.library,
        facts: [
            'As an Associate Software Engineer at CoreLogic, I utilized Redux to manage the state of the application, including user information, authentication, and application settings, ensuring that the application was synced with the backend in real-time.',
            'In personal projects, I leveraged Redux and similar state management libraries such as Flask-Login to manage user state and session information.'
        ]
    },
    {
        name: 'Sass',
        logo: Sass,
        type: technologyTypes.tool,
        facts: [
            'In my advanced web development course, I utilized Sass to create a dynamic drone images website, including mixins and functions to ensure responsive design while maintaining customizability',
            'In various personal projects, I used Sass variables and fonts to ensure consistency in styling and nesting to improve readability and maintainability of code.'
        ]
    },
    {
        name: 'Selenium',
        logo: Selenium,
        type: technologyTypes.library,
        facts: [
            'In a personal project, I utilized Selenium to create a web scraper to automate online shopping, allowing users to automatically search for items on outdated websites and integrating with a chrome extension to create a custom results page.',
            'In my internship at Corelogic, I used Selenium to create test site functionality, such as logging in, navigating to a page, and filling out a form, ensuring that the application was functioning as expected.'
        ]
    },
    {
        name: 'Sklearn',
        logo: Sklearn,
        type: technologyTypes.library,
        facts: [
            'In my work with C3 Investments, I utilized Sklearn to create custom trading indicators, leveraging the power of pandas and numpy to preprocess and cleanse intricate financial datasets, empowering accurate analysis and modeling.',
            'In my personal projects and kaggle competitions, I frequently utilized Sklearn as a versatile tool for data preprocessing, feature engineering, and data analysis, enabling effective decision-making and improved accuracy in machine learning models.'
        ]
    },
    {
        name: 'Spring',
        logo: Spring,
        type: technologyTypes.framework,
        facts: [
            'In my Advanced Java course, I utilized Spring to create a complex web application to manage mock data for a fictional company, including a RESTful API, a web portal, and a database, ensuring data integrity and efficient querying.',
            'In personal projects, I have used Spring\'s inversion of control to create loosely coupled components, allowing for easy integration of new features and improved maintainability.'
        ]
    },
    {
        name: 'Svelte',
        logo: Svelte,
        type: technologyTypes.framework,
        facts: [
            'In my personal website (you\'re on it right now) I utilized Svelte to create a responsive and interactive UI, including animations and transitions, ensuring a seamless user experience.',
            'I used Svelte to develop a simple multiplayer game and utilized websockets and a Redis KV store to enable real-time communication between players.'
        ]
    },
    {
        name: 'Tailwind',
        logo: Tailwind,
        type: technologyTypes.framework,
        facts: [
            'In my personal website (you\'re on it right now) I utilized Tailwind to create a responsive and interactive UI, including various custom components and animations, ensuring a seamless user experience.',
            'In various personal projects, I used tailwind to customize the styling of components, creating a consistent and visually appealing UI.'
        ]
    },
    {
        name: 'Tensorflow',
        logo: Tensorflow,
        type: technologyTypes.library,
        facts: [
            'In my personal project "Dino Jump", I used Tensorflow to explore the use of reinforcement learning in game development, creating a simple game environment and training a NEAT (NeuroEvolution of Augmenting Topologies) model to play the game.',
            'In my work with C3 Investments, I utilized Tensorflow to create custom trading indicators, leveraging the power of pandas and numpy to preprocess and cleanse intricate financial datasets, empowering accurate analysis and modeling.'
        ]
    },
    {
        name: 'Typescript',
        logo: Typescript,
        type: technologyTypes.language,
        facts: [
            'During my time at CoreLogic, I utilized Typescript and Angular to develop a web application to manage the company\'s internal data, including a RESTful API, a web portal, and a database, ensuring data integrity and efficient querying.',
            'In my personal projects, I used Typescript to create a chrome extension to automate online eBay stores, allowing users to automatically fulfill orders, update inventory, and manage listings.'
        ]
    },
    {
        name: 'Webpack',
        logo: Webpack,
        type: technologyTypes.library,
        facts: [
            'In my project Sellomatr, I utilized Webpack to bundle the various components of the application, ensuring that the application was optimized for production.',
            'In various personal projects, I used Webpack to bundle modules and assets, especially when using frameworks such as React and Svelte.'
        ]
    }
];