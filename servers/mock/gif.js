import moment from 'moment';

const gifs = [
  {
    gifId: 5,
    createdOn: moment()
      .format('YYYY-MM-DD HH:mm:ss'),
    category_id: 1,
    title: 'Maecenas volutpat blandit aliquam',
    imageUrl: 'https://source.unsplash.com/collection/2186949',
    authorId: 1,
    comments: {},
    tags: [
      {
        id: 2,
        tag: 'tag 2',
      },
    ],
  },
  {
    gifId: 4,
    createdOn: moment()
      .format('YYYY-MM-DD HH:mm:ss'),
    category_id: 1,
    title: 'Maecenas volutpat blandit aliquam',
    imageUrl:'https://source.unsplash.com/collection/2186949',
    authorId: 1,
    comments: {},
    tags: [
      {
        id: 1,
        tag: 'tag 1',
      },
      {
        id: 2,
        tag: 'tag 3',
      },
    ],
  },
];

export default gifs;