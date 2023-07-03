import nemo from '$lib/images/river/nemo.png'
import tree from '$lib/images/river/tree.png'
import trout from '$lib/images/river/trout.png'
import drone from '$lib/images/river/drone.png'
import sprout from '$lib/images/river/sprout.png'
import rock from '$lib/images/river/rock.png'

export enum RiverItemType {
    fish = 'fish',
    other = 'other'
}

export const SHOP_ITEMS: ShopItem[] = [
    {
        name: 'nemo',
        prettyName: 'Nemo',
        image: nemo,
        price: 15,
        description: 'My aquarium doesn\'t have any tropical fish!',
        width: 65,
        height: 65,
        type: RiverItemType.fish
    },
    {
        name: 'tree',
        prettyName: 'Tree',
        image: tree,
        price: 12,
        description: 'I started planting fruit trees!',
        width: 75,
        height: 75,
        type: RiverItemType.other
    },
    {
        name: 'trout',
        prettyName: 'Trout',
        image: trout,
        price: 20,
        description: 'I love fishing during my spare time!',
        width: 75,
        height: 75,
        type: RiverItemType.fish
    },
    {
        name: 'drone',
        prettyName: 'Drone',
        image: drone,
        price: 75,
        description: 'My first drone only cost me $35!',
        width: 75,
        height: 75,
        type: RiverItemType.other
    },
    {
        name: 'sprout',
        prettyName: 'Sprout',
        image: sprout,
        price: 10,
        description: 'Gardening is one of my favorite hobbies!',
        width: 50,
        height: 50,
        type: RiverItemType.other
    },
    {
        name: 'rock',
        prettyName: 'Rock',
        image: rock,
        price: 5,
        description: 'My backyard is full of limestone!',
        width: 75,
        height: 75,
        type: RiverItemType.other
    }
]

export const MESSAGE_PLACEHOLDERS = [
    "i like this website",
    "wow this is cool",
    "i love this",
    "i'm famous now",
    "i'm on the riverbed",
]
export const SCALE_RIVER_HEIGHT = 0.7;

export const SHOP_DESCRIPTION = "Spend your coins and buy items to place on the riverbed forever!"

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
    width: number;
    height: number;
    type: RiverItemType;
}

export interface RiverItem {
    name: string;
    customMessage: string;
    image: string;
    x: number;
    y: number;
    width: number;
    height: number;
    showTooltip: boolean;
}
