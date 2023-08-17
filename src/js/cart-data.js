import { storageFunction } from 'storage-function';
import blackTee from '../assets/blackmerch.png';
import whiteTee from '../assets/whitemerch.png';
import navyTee from '../assets/navymerch.png';

const cartData = [
    {
        id: '0',
        img: blackTee,
        label: 'Black T-shirt with Logo',
        price: 19.9,
        stars: 3,
        otherOptions: [
            {
                id: 0,
                img: blackTee
            },
            {
                id: 1,
                img: whiteTee
            },
            {
                id: 2,
                img: navyTee
            }
        ],
        sizes: {
            options: ['XS', 'SM', 'MD', 'LG', 'XL'],
            selected: 'XL'
        },
        numberOfItems: 1,
        isAddedToCard: false
    },
    {
        id: '1',
        img: whiteTee,
        label: 'White T-shirt with Logo',
        price: 19.9,
        stars: 2,
        otherOptions: [
            {
                id: 0,
                img: blackTee
            },
            {
                id: 1,
                img: whiteTee
            },
            {
                id: 2,
                img: navyTee
            }
        ],
        sizes: {
            options: ['XS', 'SM', 'MD', 'LG', 'XL'],
            selected: 'MD'
        },
        numberOfItems: 1,
        isAddedToCard: false
    },
    {
        id: '2',
        img: navyTee,
        label: 'Navy T-shirt with Logo',
        price: 19.9,
        stars: 5,
        otherOptions: [
            {
                id: 0,
                img: blackTee
            },
            {
                id: 1,
                img: whiteTee
            },
            {
                id: 2,
                img: navyTee
            }
        ],
        sizes: {
            options: ['XS', 'SM', 'MD', 'LG', 'XL'],
            selected: 'MD'
        },
        numberOfItems: 1,
        isAddedToCard: false
    }
];

export class CartData {
    dump () {
        if (!storageFunction.fromSessionStorage('cart')) {
            storageFunction.toSessionStorage('cart', cartData);
        }        
    }

    getAll () {
        return JSON.parse(storageFunction.fromSessionStorage('cart'));
    }

    getOne (id) {
        const items = JSON.parse(storageFunction.fromSessionStorage('cart'));
        
        return items.find(i => i.id === id);
    }

    insert (item) {
        const items = [...JSON.parse(storageFunction.fromSessionStorage('cart'))];
        
        let elementIndex;

        items.map((i, index) => {
            if (i.id === item.id) {
                elementIndex = index;
            }

            return i;
        });

        items.splice(elementIndex, 1, item);

        storageFunction.toSessionStorage('cart', items);
    }

    getAddedToCart () {
        const items = [...JSON.parse(storageFunction.fromSessionStorage('cart'))];
        const added = [];

        items.forEach(i => {
            if (i.isAddedToCard) {
                added.push(i);
            }
        });

        return added;
    }
}