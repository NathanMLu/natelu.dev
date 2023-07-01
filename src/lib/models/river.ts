import nemo from '$lib/images/river/nemo.png'

export const SHOP_ITEMS: ShopItem[] = [
    {
        name: 'nemo',
        prettyName: 'Nemo',
        image: nemo,
        price: 15,
        description: 'I love fishing during my spare time!'
    },
    {
        name: 'nemoz',
        prettyName: 'Nemoz',
        image: nemo,
        price: 1,
        description: 'I love fishing during my spare time!'
    },
    {
        name: 'nemos',
        prettyName: 'Nemos',
        image: nemo,
        price: 20,
        description: 'I love fishing during my spare time!'
    },
    {
        name: 'nemosssssss',
        prettyName: 'Nemossssss',
        image: nemo,
        price: 200,
        description: 'I love fishing during my spare time!'
    }
]

export const MESSAGE_PLACEHOLDERS = [
    "i like this website",
    "wow this is cool",
    "i love this",
    "i'm famous now",
    "i'm on the riverbed",
]

export const SHOP_DESCRIPTION = "Spend your tokens and buy items to place on the riverbed forever!"

export const MAX_MESSAGE_LENGTH = 25;

export interface CartItem {
    name: string;
    customMessage: string;
    price: number;
}

export interface ShopItem {
    name: string;
    prettyName: string;
    image: string;
    price: number;
    description: string;
}