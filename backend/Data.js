import bcrypt from 'bcryptjs'
const Data={
    users:[
        {
            name:'admin',
            email:'admin@gmail.com',
            password:bcrypt.hashSync('123456789'),
            isAdmin:true,
        },
        {
            name:'sudhinsursh',
            email:'sudhinsuresh9526@gmail.com',
            password:bcrypt.hashSync('123456789'),
            isAdmin:false,
        }
    ],
    products:[
        {
            
            name:'Nike Slim shirt',
            slug:'nike-slim-shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countNStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality shirt',
        },
        {
            
            name:'Adidas Fit Shirt',
            slug:'adidas-fit-shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:25,
            countNStock:20,
            brand:'Adidas',
            rating:4.0,
            numReviews:10,
            description:'high quality shirt',
        },
        {
            
            name:'Nike Slim Pant',
            slug:'nike-slim-pant',
            category:'Pants',
            image:'/images/p3.jpg',
            price:40,
            countNStock:20,
            brand:'Nike',
            rating:4.5,
            numReviews:11,
            description:'high quality shirt',
        },
        {
            
            name:'Puma Fit Pant',
            slug:'Puma-fit-pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price:65,
            countNStock:5,
            brand:'Puma',
            rating:4.5,
            numReviews:10,
            description:'high quality shirt',
        },
        

    ]
}

export default Data;