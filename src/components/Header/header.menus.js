import { generateUUID } from '../../utils/generateUUID';

export const menuData = [
    {
        id: generateUUID(),
        title: 'Demos',
        isExpanded: false,
        nested: [
            {
                id: generateUUID(),
                title: 'Post Header',
            },
            {
                id: generateUUID(),
                title: 'Post Layout',
            },
            {
                id: generateUUID(),
                title: 'Share Buttons ',
            },
            {
                id: generateUUID(),
                title: 'Features',
            },
            {
                id: generateUUID(),
                title: 'Categories',
            },
            {
                id: generateUUID(),
                title: 'Shop',
            },
        ],
    },
    {
        id: generateUUID(),
        title: 'Post',
        isExpanded: false,
        nested: [
            {
                id: generateUUID(),
                title: 'Post Header',
            },
            {
                id: generateUUID(),
                title: 'Post Layout',
            },
            {
                id: generateUUID(),
                title: 'Share Buttons ',
            },
            {
                id: generateUUID(),
                title: 'Gallery Post',
            },
            {
                id: generateUUID(),
                title: 'Video Post',
            },
        ],
    },
    {
        id: generateUUID(),
        title: 'Features',
        isExpanded: false,
        nested: [
            {
                id: generateUUID(),
                title: 'Post Header',
            },
            {
                id: generateUUID(),
                title: 'Post Layout',
            },
            {
                id: generateUUID(),
                title: 'Share Buttons ',
            },
            {
                id: generateUUID(),
                title: 'Gallery Post',
            },
            {
                id: generateUUID(),
                title: 'Video Post',
            },
        ],
    },
    {
        id: generateUUID(),
        title: 'Categories',
        isExpanded: false,
        nested: [
            {
                id: generateUUID(),
                title: 'Post Header',
            },
            {
                id: generateUUID(),
                title: 'Post Layout',
            },
            {
                id: generateUUID(),
                title: 'Share Buttons ',
            },
            {
                id: generateUUID(),
                title: 'Gallery Post',
            },
            {
                id: generateUUID(),
                title: 'Video Post',
            },
        ],
    },
    {
        id: generateUUID(),
        title: 'Shop',
        isExpanded: false,
        nested: [
            {
                id: generateUUID(),
                title: 'Post Header',
            },
            {
                id: generateUUID(),
                title: 'Post Layout',
            },
            {
                id: generateUUID(),
                title: 'Share Buttons ',
            },
            {
                id: generateUUID(),
                title: 'Gallery Post',
            },
            {
                id: generateUUID(),
                title: 'Video Post',
            },
        ],
    },
    {
        id: generateUUID(),
        title: 'Buy Now',
    },
];
