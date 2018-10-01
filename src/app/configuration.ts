import { PLATFORM_SERVER_ID } from "@angular/common/src/platform_id";

export const configuration = {
    header: {
        heading: 'My website',
        headingtext: 'This is my first website created using Angular 6. Hope you like it. Thank you for visiting. Enjoy!',
        buttontext: 'Lets do it together!',
        buttonlink: '\home'
    },
    intro: {
        tagline: 'SUCESS',
        title: 'How us to build this type of website and support us :)',
        description: 'Angular 6 is a new web based technology discovered in April 2018.\n All the credits goes to Krishanu Da and Youtube for helping me in creating this website.',
        features: [
            {icon:'html5', title:'HTML5 & CSS3', description:''},
            {icon:'bolt', title:'Easy to Use', description:''},
            {icon:'tablet', title:'Fully Responsive', description:''},
            {icon:'rocket', title:'Single Page Application No Buffering Time', description:''},
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focus on What You Love to do and go for it',
        description: ''
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'Do you like it? Then spend a little amount of time to give us a feedback.',
        description: '',
        feedbacks : [
            {name: 'Amit Sinha', userimage: 'user-1.jpg', comments:'', company: ''},
            {name: 'Soumeli Gupta', userimage: 'user-2.jpg', comments:'', company: ''},
            {name: 'ALex', userimage: 'user-3.jpg', comments:'', company: ''},
        ]
    },
    clients: {
        tagline: 'YOUR TRUST HELPS ME TO GROW',
        title: 'Want to show your company logo here? Join us or donate me. Thanks..☺',
        description: '',
        companies: [
            {name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
            {name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
            {name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
            {name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
            {name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
            {name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
            {name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
            {name: 'Goggles', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
            {name: 'Apple', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            {title: 'PERSONAL', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '₹',
                downloads:'5 Downloads', extensions:'2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates:'1 year free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            {title: 'STUDENT', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '₹', 
                downloads:'15 Downloads', extensions:'5 Extensions', tutorials: 'Tutorials with files', support: 'Forum Support', updates:'2 year free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            {title: 'BUSINESS', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '₹', 
                downloads:'Unlimited Downloads', extensions:'Unlimited Downloads', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates:'Lifetime free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    footer: {
        copyrighttext: 'Made with ❤ by',
        developer: 'Amit Sinha',
        developerlink: '',
    },
    socialsites: [
        {title: 'Facebook', target: '_blank', username: 'Amit', icon: 'facebook'},
        {title: 'Google+', target: '_blank', username: '+Amit', icon: 'google-plus'},
        {title: 'Twitter', target: '_blank', username: 'Amit', icon: 'twitter'},
        {title: 'Instagram', target: '_blank', username: 'Amit', icon: 'instagram'},
    ],
    blog: {
        tagline: 'MY BLOG',
        title: 'Thoughts become things..'
        
    }
};
