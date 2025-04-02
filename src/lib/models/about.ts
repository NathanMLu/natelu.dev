import AboutCode from '$lib/images/about/about-code.svg';
import AboutEntrepreneur from '$lib/images/about/about-entrepreneur.svg';
import AboutSchool from '$lib/images/about/about-school.svg';

export const AboutDescription = 'I am a creative problem solver with a passion for using technology to make a positive impact. ' +
    'Through my experience in full-stack development, machine learning, and cloud computing, I strive to create ' +
    'innovative solutions that push boundaries and make a difference in people\'s lives.';

export const About = [
    {
        name: 'corelogic',
        image: AboutCode,
        headline: 'Software Engineer',
        text: 'I have had the opportunity to intern at Tesla, AMD, and CoreLogic, while building on my own startup in my free time.',
        // link: 'https://www.corelogic.com/',
        // linkText: 'CoreLogic'
    },
    {
        name: 'ut',
        image: AboutSchool,
        headline: 'Student',
        text: 'I am a senior at UT Austin studying Electrical and Computer Engineering & Entrepreneurship, with a focus on Data Science.',
        link: 'https://www.ece.utexas.edu/',
        linkText: 'UT Austin'
    },
    {
        name: 'neurofix',
        image: AboutEntrepreneur,
        headline: 'Entrepreneur',
        text: 'I manage Neurofix - an ecommerce business that refurbishes used consumer electronics with over $100,000 in sales.',
    }
]

