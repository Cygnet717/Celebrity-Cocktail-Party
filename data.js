const maleCelebrity = [
    {
        name: 'Brad Pitt', 
        img: 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg'
    }, 
    {
        name: 'Chris Hemsworth', 
        img: 'https://i.pinimg.com/originals/58/17/73/58177316fd360e86e8a51cfc2432936e.jpg'
    }, 
    {
        name: 'Channing Tatum', 
        img:'https://m.media-amazon.com/images/M/MV5BMTc4OTI3Mzg2Nl5BMl5BanBnXkFtZTcwMDAxNTU3OA@@._V1_UX214_CR0,0,214,317_AL_.jpg'
    }, 
    {
        name: 'Leonardo DiCaprio', 
        img: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'
    }, 
    {
        name: 'Johnny Depp', 
        img: 'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg'
    }, 
    {
        name: 'George Clooney', 
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/220px-George_Clooney_2016.jpg'
    }, 
    {
        name: 'Heath Ledger', 
        img: 'https://akns-images.eonline.com/eol_images/Entire_Site/2018019/rs_634x1024-180119144629-634.Heath-Ledger.ms.011918.jpg?fit=inside|900:auto&output-quality=90'
    }, 
    {
        name: 'Alan Rickman', 
        img:'https://m.media-amazon.com/images/M/MV5BMTUwNTc4MTg4Ml5BMl5BanBnXkFtZTcwNDY2MjkxOA@@._V1_.jpg'
    }, 
    {
        name: 'Dwayne Johnson', 
        img: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_.jpg'
    }, 
    {
        name: 'Robin Williams', 
        img: 'https://m.media-amazon.com/images/M/MV5BNTYzMjc2Mjg4MF5BMl5BanBnXkFtZTcwODc1OTQwNw@@._V1_.jpg'
    },
    {
        name: 'Idris Elba',
        img: 'https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
        name: 'Morgan Freeman',
        img: 'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
        name: 'Will Smith',
        img: 'https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg',
    },
    {
        name: 'Samuel L Jackson',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
        name: 'Ryan Reynolds',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/220px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
    },
    {
        name: 'Jake Gyllenhaal',
        img: 'https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_.jpg',
    },
    {
        name: 'Robert Downey, Jr.',
        img: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg',
    },
    {
        name: 'Chris Pratt',
        img: 'https://m.media-amazon.com/images/M/MV5BNzg3MTgwOTgzMV5BMl5BanBnXkFtZTgwODIxMTUwMjE@._V1_.jpg',
    },
    {
        name: 'Denzel Washington',
        img: 'https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_.jpg',
    },
    {
        name: 'Michael B. Jordan',
        img: 'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg',
    },
    {
        name: 'Chris Pine',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM4OTQ4NTU3NV5BMl5BanBnXkFtZTcwNjEwNDU0OQ@@._V1_.jpg',
    },
    {
        name: 'Hugh Jackman',
        img: 'https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpg',
    },
    {
        name: 'Jon Hamm',
        img: 'https://m.media-amazon.com/images/M/MV5BNzg0MzA4MTY5M15BMl5BanBnXkFtZTcwODg2MTIwOQ@@._V1_.jpg',
    },
    {
        name: 'Gerard Butler',
        img: 'https://m.media-amazon.com/images/M/MV5BMjE4NDMwMzc4Ml5BMl5BanBnXkFtZTcwMDg4Nzg4Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg',
    },
    {
        name: 'Jeffrey Dean Morgan',
        img: 'https://i.pinimg.com/originals/bb/6f/b3/bb6fb38140f24249fb9f382ba857e030.jpg',
    },
    {
        name: 'Paul Rudd',
        img: 'https://m.media-amazon.com/images/M/MV5BMTY4NTEwNDg1MV5BMl5BanBnXkFtZTgwODMwMDA0ODE@._V1_.jpg',
    },
    {
        name: 'Tom Cruise',
        img: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg',
    },
    {
        name: 'Jamie Dornan',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jamie_Dornan_January_2013.jpg/220px-Jamie_Dornan_January_2013.jpg',
    },
    {
        name: 'Joseph Gordon-Levitt',
        img: 'https://m.media-amazon.com/images/M/MV5BZTk5ZGQ0OGQtYWYwMy00ZTE1LWE0NWUtMTQ2MmYxMWUxZWM3XkEyXkFqcGdeQXVyMjAyNzk2Nw@@._V1_.jpg',
    },
    {
        name: 'Daniel Craig',
        img: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
        name: 'Justin Timberlake',
        img: 'https://m.media-amazon.com/images/M/MV5BMTUwMjE1MjU2N15BMl5BanBnXkFtZTcwNjk0ODY1NA@@._V1_SY1000_CR0,0,740,1000_AL_.jpg'
    },
    {
        name: 'James Franco',
        img: 'https://m.media-amazon.com/images/M/MV5BMjA4MzMzNDM5MF5BMl5BanBnXkFtZTgwMjQ0MDk0NDM@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    },
    {
        name: 'Bradley Cooper',
        img: 'https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_SY1000_CR0,0,650,1000_AL_.jpg'
    },
    {
        name: 'Chris Evans',
        img: 'https://tvguide1.cbsistatic.com/mediabin/showcards/celebs/c/thumbs/chris-evans_144489_768x1024.png'
    },
    {
        name: 'Christian Bale',
        img: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_SY1000_CR0,0,665,1000_AL_.jpg'
    },
    {
        name: 'John Krasinski',
        img: 'https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_.jpg'
    },
    {
        name: 'Milo Ventimiglia',
        img: 'https://m.media-amazon.com/images/M/MV5BZWFlMjU0OWYtNDI3Mi00MmVmLWFkNjUtNWVkYWJhYjNlMDdiXkEyXkFqcGdeQXVyOTE0NjgwMjY@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    },
    {
        name: 'Henry Cavill',
        img: 'https://m.media-amazon.com/images/M/MV5BODI0MTYzNTIxNl5BMl5BanBnXkFtZTcwNjg2Nzc0NA@@._V1_.jpg'
    },
    {
        name: 'Jason Momoa',
        img: 'https://m.media-amazon.com/images/M/MV5BMTI5MTU5NjM1MV5BMl5BanBnXkFtZTcwODc4MDk0Mw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    },
    {
        name: 'Tom Hardy',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_.jpg'
    },
    {
        name: 'Ryan Gosling',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_SY1000_CR0,0,790,1000_AL_.jpg'
    },
    {
        name: 'Oscar Isaac',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ2ODE2NDQ5OF5BMl5BanBnXkFtZTcwOTU3OTM1OQ@@._V1_SY1000_CR0,0,710,1000_AL_.jpg'
    },
    {
        name: 'Joe Manganiello',
        img: 'https://m.media-amazon.com/images/M/MV5BMjI3NTkyMDYyOF5BMl5BanBnXkFtZTgwNjkyNzc4OTE@._V1_.jpg'
    },
    {
        name: 'Jensen Ackles',
        img: 'https://m.media-amazon.com/images/M/MV5BMTcxMDk3NTgzNl5BMl5BanBnXkFtZTcwMTUzNzY3OQ@@._V1_SY1000_CR0,0,749,1000_AL_.jpg'
    },
    {
        name: 'Jared Padalecki',
        img: 'https://m.media-amazon.com/images/M/MV5BMjA2ODMyMDgxMl5BMl5BanBnXkFtZTcwNjAwMjA3NA@@._V1_SY1000_CR0,0,681,1000_AL_.jpg'
    },
];


const femaleCelebrity = [
    {
        name: 'Jennifer Lawrence', 
        img:'https://timedotcom.files.wordpress.com/2015/01/jennifer-lawrence.jpg'
    }, 
    {
        name: 'Natalie Portman', 
        img: 'https://timedotcom.files.wordpress.com/2015/05/natalie-portman.jpg'
    }, 
    {
        name:'Emma Watson', 
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY317_CR21,0,214,317_AL_.jpg'
    }, 
    {
        name: 'Emma Stone', 
        img: 'https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1..jpg'
    }, 
    {
        name:'Scarlett Johansson', 
        img:'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg'
    }, 
    {
        name:'Meryl Streep', 
        img:'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_UY317_CR6,0,214,317_AL_.jpg'
    }, 
    {
        name:'Charlize Theron', 
        img:'https://pixel.nymag.com/imgs/fashion/daily/2016/04/05/05-charlize-theron.w330.h412.jpg'
    }, 
    {
        name:'Mila Kunis', 
        img:'https://m.media-amazon.com/images/M/MV5BODQyNTQyNzY4MV5BMl5BanBnXkFtZTcwODg5MDA3MQ@@._V1_UY317_CR25,0,214,317_AL_.jpg'
    }, 
    {
        name:'Jennifer Aniston', 
        img:'http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonHWoFFeb2012.jpg/220px-JenniferAnistonHWoFFeb2012.jpg'
    }, 
    {
        name:'Anne Hathaway', 
        img:'https://cdn.newsapi.com.au/image/v1/9348593d5c18dbe8ba0d260b1813b85d'
    },
    {
        name: 'Jennifer Lopez',
        img: 'https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_UY317_CR32,0,214,317_AL_.jpg',
    },
    {
        name: 'Salma Hayek',
        img: 'https://m.media-amazon.com/images/M/MV5BMzkyMTk2NzM2Ml5BMl5BanBnXkFtZTcwNDQ4MjYzMg@@._V1_UY317_CR5,0,214,317_AL_.jpg',
    },
    {
        name: 'Sofía Vergara',
        img: 'https://m.media-amazon.com/images/M/MV5BMTU2MjcyMDg1OV5BMl5BanBnXkFtZTgwMTgwMzQwMDI@._V1_UY317_CR12,0,214,317_AL_.jpg',
    },
    {
        name: 'Penélope Cruz',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM0Mzc1MTc2OF5BMl5BanBnXkFtZTcwMzE4MzQxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
        name: 'Kate Hudson',
        img: 'https://m.media-amazon.com/images/M/MV5BMTA1NTk0MjMyOTFeQTJeQWpwZ15BbWU3MDA4NzEzMTM@._V1_UY317_CR12,0,214,317_AL_.jpgv',
    },
    {
        name: 'Nicole Kidman',
        img: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_.jpg',
    },
    {
        name: 'Sandra Oh',
        img: 'https://m.media-amazon.com/images/M/MV5BMTMyNzYyNDE4MV5BMl5BanBnXkFtZTcwOTkxMDQ2NA@@._V1_.jpg',
    },
    {
        name: 'Eva Mendes',
        img: 'https://m.media-amazon.com/images/M/MV5BMjA0MDQwMDI4NF5BMl5BanBnXkFtZTcwMjc1OTU1NA@@._V1_.jpg',
    },
    {
        name: 'Queen Latifah',
        img: 'https://m.media-amazon.com/images/M/MV5BMjAwNjkxNzkyMF5BMl5BanBnXkFtZTcwNTQ1MTMyMw@@._V1_UY317_CR7,0,214,317_AL_.jpg',
    },
    {
        name: 'Jessica Alba',
        img: 'https://m.media-amazon.com/images/M/MV5BODYxNzE4OTk5Nl5BMl5BanBnXkFtZTcwODYyMDYzMw@@._V1_UY317_CR12,0,214,317_AL_.jpg',
    },
    {
        name: 'Keira Knightley',
        img: 'https://m.media-amazon.com/images/M/MV5BMTYwNDM0NDA3M15BMl5BanBnXkFtZTcwNTkzMjQ3OA@@._V1_.jpg',
    },
    {
        name: 'Helen Mirren',
        img: 'https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_.jpg',
    },
    {
        name: 'Judi Dench',
        img: 'https://m.media-amazon.com/images/M/MV5BOTI5NjQ4NDc5NF5BMl5BanBnXkFtZTcwMTc5OTczNw@@._V1_.jpg',
    },
    {
        name: 'Juilanne Moore',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM5NDI1MjE2Ml5BMl5BanBnXkFtZTgwNDE0Nzk0MDE@._V1_UY317_CR7,0,214,317_AL_.jpg',
    },
    {
        name: 'Emily Blunt',
        img: 'https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg',
    },
    {
        name: 'Catherine Zeta-Jones',
        img: 'https://m.media-amazon.com/images/M/MV5BODQ2MTExNzc1NF5BMl5BanBnXkFtZTYwNzYwODI2._V1_.jpg',
    },
    {
        name: 'Michelle Pfeiffer',
        img: 'https://m.media-amazon.com/images/M/MV5BMTUzNjI0Njc5NF5BMl5BanBnXkFtZTYwOTM2MjYz._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
        name: 'Rachel Weisz',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzM1MDAwMV5BMl5BanBnXkFtZTcwNTU4NzQwMw@@._V1_UY317_CR4,0,214,317_AL_.jpg',
    },
    {
        name: 'Emma Thompson',
        img: 'https://m.media-amazon.com/images/M/MV5BMTMwNTAyOTg0MF5BMl5BanBnXkFtZTcwNTg0MzY1Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg',
    },
    {
        name: 'Reese Witherspoon',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Reese_Witherspoon_at_TIFF_2014.jpg/220px-Reese_Witherspoon_at_TIFF_2014.jpg',
    },
    {
        name: 'Winona Ryder',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_SY1000_CR0,0,734,1000_AL_.jpg'
    },
    {
        name: 'Isla Fisher',
        img: 'https://m.media-amazon.com/images/M/MV5BODY3MDQ4MTQ4Nl5BMl5BanBnXkFtZTgwNDU2NzU1MDE@._V1_SY1000_SX802_AL_.jpg'
    },
    {
        name: 'Lena Headey',
        img: 'https://m.media-amazon.com/images/M/MV5BMzIwMjIwNjg0M15BMl5BanBnXkFtZTgwOTI3MDEzMDE@._V1_SY1000_CR0,0,765,1000_AL_.jpg'
    },
    {
        name: 'Amy Adams',
        img: 'https://m.media-amazon.com/images/M/MV5BMTg2NTk2MTgxMV5BMl5BanBnXkFtZTgwNjcxMjAzMTI@._V1_SY1000_CR0,0,654,1000_AL_.jpg'
    },
    {
        name: 'Anna Paquin',
        img: 'https://m.media-amazon.com/images/M/MV5BMTcxNzM2NjMzNl5BMl5BanBnXkFtZTgwOTE2Njk0MjE@._V1_.jpg'
    },
    {
        name: 'Nicki Minaj',
        img: 'https://m.media-amazon.com/images/M/MV5BMjI4NzgzOTQyMV5BMl5BanBnXkFtZTgwNzY3MTA4ODE@._V1_SY1000_CR0,0,774,1000_AL_.jpg'
    },
    {
        name: 'Audrey Hepburn',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM4MTY3NTQyMF5BMl5BanBnXkFtZTYwMTk2MzQ2._V1_.jpg'
    },
    {
        name: 'Milla Jovovich',
        img: 'https://m.media-amazon.com/images/M/MV5BNzA1Nzc4NjYwNV5BMl5BanBnXkFtZTcwNjA2NjY1Mg@@._V1_SY1000_CR0,0,790,1000_AL_.jpg'
    },
    {
        name: 'Natalie Dormer',
        img: 'https://m.media-amazon.com/images/M/MV5BNjM4NjQwMzE1Ml5BMl5BanBnXkFtZTgwNjg5MTM0NzE@._V1_.jpg'
    },
    {
        name: 'Hayden Panettiere',
        img: 'https://m.media-amazon.com/images/M/MV5BOTY2OTI1NzA0NV5BMl5BanBnXkFtZTcwOTczMTA2Mw@@._V1_.jpg'
    },
    {
        name: 'Rachel McAdams',
        img: 'https://m.media-amazon.com/images/M/MV5BMTY5ODcxMDU4NV5BMl5BanBnXkFtZTcwMjAzNjQyNQ@@._V1_SY1000_CR0,0,689,1000_AL_.jpg'
    },
    {
        name: 'Blake Lively',
        img: 'https://m.media-amazon.com/images/M/MV5BMTU2Njk0NTUyNl5BMl5BanBnXkFtZTcwODE0OTgyNw@@._V1_SY1000_CR0,0,757,1000_AL_.jpg'
    },
    {
        name: 'Olivia Wilde',
        img: 'https://m.media-amazon.com/images/M/MV5BNjRmMThkZTItNGQ3Yy00NDc0LWE5OWMtYzkxMDRkMzI1OTcyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    },
    {
        name: 'Rihanna',
        img: 'https://m.media-amazon.com/images/M/MV5BMzVkMTUzNjMtMjYwNC00MmI4LTk0NWQtMGI0MmM1YzIyZjI3XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg'
    },
    {
        name: 'Kate Beckinsale',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM3MzY2MDYwOF5BMl5BanBnXkFtZTcwODQ3MDA0Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg'
    },
    {
        name: 'Selena Gomez',
        img: 'https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_SY1000_CR0,0,749,1000_AL_.jpg'
    },
    {
        name: 'Gabrielle Union',
        img: 'https://m.media-amazon.com/images/M/MV5BMTkwNjUzMDM2Nl5BMl5BanBnXkFtZTcwNDgyMDY4Mg@@._V1_.jpg'
    },
    {
        name: 'Adriana Lima',
        img: 'https://m.media-amazon.com/images/M/MV5BMTMzNDUwNzM5NF5BMl5BanBnXkFtZTcwNTQwMzE3Mg@@._V1_.jpg'
    },
    {
        name: 'Kate Upton',
        img: 'https://m.media-amazon.com/images/M/MV5BMTk3MTA2ODQ1MF5BMl5BanBnXkFtZTcwMjkwMDYxNw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    },
    {
        name: 'Megan Fox',
        img: 'https://m.media-amazon.com/images/M/MV5BMTc5MjgyMzk4NF5BMl5BanBnXkFtZTcwODk2OTM4Mg@@._V1_.jpg'
    },
    {
        name: 'Cate Blanchett',
        img: 'https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_SY1000_CR0,0,692,1000_AL_.jpg'
    },
    {
        name: 'Kate Winslet',
        img: 'https://cdn.britannica.com/38/130638-050-DBCE19EE/Kate-Winslet-2009.jpg'
    },
    {
        name: 'Jenna Fischer',
        img: 'https://m.media-amazon.com/images/M/MV5BMTMyOTYzODQ5MF5BMl5BanBnXkFtZTcwMjE3MDgzMQ@@._V1_.jpg'
    }
];