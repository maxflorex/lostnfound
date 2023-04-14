export const categories = ['ALL', 'HOME', 'ENTERTAINMENT', 'CLOTHING', 'FAMILY', 'ELECTRONICS', 'HOBBIES', 'MISCELLANEOUS', 'VEHICLES'];

export interface Item {
	title: string;
	category: string;
	where: {
		city: string;
		country: string;
	};
	when: string;
	picture: string;
	status: string;
	contact: string;
}


export const fakeData = [
    {
        title: 'Pepperoni Pizza',
        category: 'HOME',
        where: {
            city: 'Olanchito',
            country: 'Yoro'
        },
        when: '20 - 04 - 2023',
        picture: 'https://th.bing.com/th/id/R.42371f428400947fdfb68cb9d4860494?rik=2AeIFJq8Oz1W5w&riu=http%3a%2f%2fthelistlove.com%2fwp-content%2fuploads%2f2014%2f12%2fdominos-pepperoni-pizza.jpg&ehk=Oef4qishiYTTxr6AwemwDV6YmhgcdIt%2fK7et5vN8Hks%3d&risl=&pid=ImgRaw&r=0',
        status: 'FOUND',
        contact: '7879820403432'
    },
    {
        title: 'Guitar',
        category: 'HOBBIES',
        where: {
            city: 'Osaka',
            country: 'Japon'
        },
        when: '20 - 04 - 2023',
        picture: 'https://cdn.stamped.io/tr:h-800,/uploads/photos/139143_6571208507527_fb49348a_261c_435f_bbfa_d7193d0b00a6.jpg?',
        status: 'LOST',
        contact: '7879820403432'
    },
    {
        title: 'iPhone 20',
        category: 'ELECTRONICS',
        where: {
            city: 'La Ceiba',
            country: 'Atlantida'
        },
        when: '20 - 04 - 2023',
        picture: 'https://www.digitaltrends.com/wp-content/uploads/2022/09/apple-iphone-14-review-11.jpg?resize=625%2C417&p=1',
        status: 'FOUND',
        contact: '7879820403432'
    }
]