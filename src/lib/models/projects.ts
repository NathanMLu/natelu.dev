import LiquidOverlay from '$lib/images/projects/liquid-overlay.jpg';
import Trackr from '$lib/images/projects/trackr.png';
import OmniChat from '$lib/images/projects/omni-chat.png';
import Smilio from '$lib/images/projects/smilio.png';
import Trading from '$lib/images/projects/trading.png';

export const Projects = [
    {
        image: LiquidOverlay,
        title: 'Liquid Overlay',
        description: 'Liquid Overlay is a first-person shooter game overlay that improves accessibility for the disabled community, transcribing voice chat, displaying game sounds as visual cues, and enabling auto-translation for users who speak different languages. This project won 1st place at Liquid Hacks, and was developed using audio manipulation techniques in collaboration with an amazing team of four.',
        githubLink: 'https://github.com/NathanMLu/LiquidOverlay',
        devpostLink: 'https://devpost.com/software/liquidoverlay',
        youtubeLink: 'https://youtu.be/-OF2GF7EBwA',
        languages: ['google cloud', 'figma', 'c', 'kotlin', 'compose', 'winAPI']
    },
    {
        image: Trackr,
        title: 'Trackr',
        description: 'Trackr is a blockchain-based logistics dApp that leverages smart contracts on NEAR\'s blockchain for secure item tracking. It also features a mobile interface that allows users to conveniently access item metadata through QR codes or ID searches. The project was entered into HackTX 2022, where it won 1st place in the NEAR blockchain track and received a $5000 prize.',
        githubLink: 'https://github.com/Unnanmed-HackTX-Team/Trackr',
        devpostLink: 'https://devpost.com/software/trackr-olby1r',
        liveLink: 'http://trackyourstuffbecause.theworldisonfire.tech/',
        languages: ['react', 'near api', 'typescript', 'html/css', 'bootstrap']
    },
    {
        image: OmniChat,
        title: 'OmniChat',
        description: 'Omni Chat is an innovative platform that simplifies social messaging by consolidating various messaging apps into one user interface. By importing contacts from different platforms, it allows you to talk to anyone on different social media sites without the hassle of signing up for various apps. The platform won awards for innovative use of Twilio API and creating positive change at SB Hacks, impressing the judges.',
        githubLink: 'https://github.com/NathanMLu/OmniChat',
        devpostLink: 'https://devpost.com/software/omnichat',
        youtubeLink: 'https://youtu.be/f7L-WkwYhsc',
        languages: ['twilio api', 'webhooks', 'react', '.net core', 'c#', 'html/css', 'bootstrap']
    },
    {
        image: Smilio,
        title: 'Smilio',
        description: 'Smilio is a popular Fitbit OS game that encourages players to smile by tapping on a smiling face before the timer runs out. Developed and published by me, it has over 1000 downloads and a 4.8-star rating on the Fitbit App Gallery. With its simple yet engaging gameplay, Smilio is a fun and effective way to add a little more happiness to your day.',
        githubLink: 'https://github.com/NathanMLu/Smilio',
        liveLink: 'https://gallery.fitbit.com/details/9e846e9a-151c-45c2-90a5-a124e084b6e2',
        languages: ['fitbit sdk', 'javascript', 'animations', 'html/css', 'game loops']
    },
    {
        image: Trading,
        title: 'Stocks Trading Dashboard',
        description: 'After authenticating the user via OAuth flow, this stocks trading dashboard transmits and receives stock trading webhooks to train an LSTM neural network. In addition to an encrypted login system with sessions and cookies, the application features a secure admin panel with real-time metrics, graphs, and notifications for detailed monitoring. This project has since been closed sourced, but development continues to improve the dashboard\'s features.',
        languages: ['oauth', 'postman', 'flask', 'python', 'html/css', 'bootstrap', 'sqlAlchemy']
    }
]