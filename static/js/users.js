let users ={
    name: 'Vadim',
    lastName: 'Ostapets',
    phone: '0509216918',
    address: 'Dnipropetrovsk Region',
    email: 'VV342915007@gmail.com',
    photoUrl:"./static/images/Photo.jpg",
    authentication: {
        first: 'vadim', 
        second: '1010'
    },
    backgroundBody:{
        first: {background: 'url("./static/images/background/Bg.jpg")'},
        second: {background: 'url("./static/images/background/Volcano.jpg")'},
        third: {background: 'url("./static/images/background/space.jpg")'},
        fourth: {background: 'url("./static/images/background/world.jpg")'},
        fifth: {background: 'url("./static/images/background/3D.jpg")'}
    },
    colorText:{
        colorWhite:{color: 'white'},
        colorGreen:{color: 'green'},
        colorRed:{color: 'red'},
        colorBlue:{color: 'blue'},
        colorYellow:{color: 'yellow'},
        colorNon:{color: 'black'}
    },
    home: {
        hi: 'Hi, my name is Vadim',
        about: "I'm a programmer a beginner with a good base and programming skills. My aim is to continue developing myself with the company which works for the result. I am a purposeful person. I learn new things very quickly. I always try to look for new information to improve my knowledge in various fields.",
    },
    about: {
        education: {
            hed: 'My education',
            school: [{
                schoolName: 'Level Up training center',
                specialty: 'Front-end Developer'
                },
                {schoolName: 'Hi5 School',
                specialty: 'Development of HTML5, CSS3 and JasaScript'}
            ]
        },
        skills: [{skill : 'HTML5', lvl: 'Junior'},
            {skill : 'CSS3', lvl: 'Junior'},
            {skill : 'SCSS', lvl: 'Junior'},
            {skill : 'JavaScript', lvl: 'Junior'},
            {skill : 'Bootstrap', lvl: 'Junior'},
            {skill : 'AngularJs 1.5', lvl: 'Junior'},
            {skill : 'AngularJs 2', lvl: 'Junior'},
            {skill : 'JQuery', lvl: 'Junior'},
            {skill : 'JQuery UI', lvl: 'Junior'},
            {skill : 'Webpack', lvl: 'Junior'},
            {skill : 'WordPress', lvl: 'Junior'}
        ]
    },
    portfolio: {
        aboutPortfolio: 'The works that I did during my studies and after',
        items: [
            {src: "/static/images/slider/1.jpg", description: "description Project", link: '#'},
            {src: "/static/images/slider/2.jpg", description: "description Project", link: '#'},
            {src: "/static/images/slider/3.jpg", description: "description Project", link: '#'},
            {src: "/static/images/slider/4.jpg", description: "description Project", link: '#'},
            {src: "/static/images/slider/5.jpg", description: "description Project", link: '#'},
            {src: "/static/images/slider/6.jpg", description: "description Project", link: '#'},
            {src: "/static/images/slider/7.jpg", description: "description Project", link: '#'}
        ] 
    },
    nav: {

        background:{
            colorWhite:{background:'white'},
            colorBlue:{background:'blue'},
            colorYellow:{background:'yellow'},
            colorNon:{background:'transparent'}
        }
    }
    
};

export {users};