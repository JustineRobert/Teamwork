import moment from 'moment';

const articles = [
  {
    id: 5,
    createdOn: moment()
      .format('YYYY-MM-DD HH:mm:ss'),
    category_id: 1,
    title: 'Maecenas volutpat blandit aliquam',
    image: 'https://source.unsplash.com/collection/2186949',
    authorId: 1,
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies leo integer. Libero nunc consequat interdum varius sit amet mattis vulputate. Cras ornare arcu dui vivamus arcu felis bibendum. Congue quisque egestas diam in arcu cursus euismod. Diam quis enim lobortis scelerisque. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Lobortis mattis aliquam faucibus purus in massa. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sit amet consectetur adipiscing elit pellentesque habitant. Eget duis at tellus at urna condimentum mattis. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Et pharetra pharetra massa massa ultricies mi quis. Morbi blandit cursus risus at ultrices mi tempus. Lobortis mattis aliquam faucibus purus in. Viverra nam libero justo laoreet sit amet cursus sit. Augue mauris augue neque gravida. Risus nullam eget felis eget nunc lobortis mattis.\n'
      + '\n'
      + 'Sit amet consectetur adipiscing elit ut aliquam. Imperdiet nulla malesuada pellentesque elit. Quisque egestas diam in arcu cursus euismod quis viverra. At quis risus sed vulputate odio ut. Enim eu turpis egestas pretium aenean pharetra magna. Non consectetur a erat nam. Tincidunt eget nullam non nisi. Eros donec ac odio tempor orci dapibus ultrices. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.',
    comments: {},
    tags: [
      {
        id: 2,
        tag: 'tag 2',
      },
    ],
  },
  {
    id: 4,
    createdOn: moment()
      .format('YYYY-MM-DD HH:mm:ss'),
    category_id: 1,
    title: 'Vitae tortor condimentum lacinia',
    image: 'https://source.unsplash.com/collection/2186949',
    authorId: 1,
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.\n'
      + '\n'
      + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.',
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

export default articles;