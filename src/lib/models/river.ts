import nemo from '$lib/images/river/nemo.png'
import tree from '$lib/images/river/tree.png'
import trout from '$lib/images/river/trout.png'
import drone from '$lib/images/river/drone.png'
import sprout from '$lib/images/river/sprout.png'
import rock from '$lib/images/river/rock.png'

export const SHOP_ITEMS: ShopItem[] = [
    {
        name: 'nemo',
        prettyName: 'Nemo',
        image: nemo,
        price: 15,
        description: 'My aquarium doesn\'t have any tropical fish!'
    },
    {
        name: 'tree',
        prettyName: 'Tree',
        image: tree,
        price: 12,
        description: 'I started planting fruit trees!'
    },
    {
        name: 'trout',
        prettyName: 'Trout',
        image: trout,
        price: 20,
        description: 'I love fishing during my spare time!'
    },
    {
        name: 'drone',
        prettyName: 'Drone',
        image: drone,
        price: 35,
        description: 'My first drone only cost me $35!'
    },
    {
        name: 'sprout',
        prettyName: 'Sprout',
        image: sprout,
        price: 10,
        description: 'Gardening is one of my favorite hobbies!'
    },
    {
        name: 'rock',
        prettyName: 'Rock',
        image: rock,
        price: 5,
        description: 'My backyard is full of limestone!'
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

export interface RiverItem {
    name: string;
    customMessage: string;
    image: string;
    x: number;
    y: number;
}