const moment = require('moment');

const articles = [
  {
    id: 5,
    createdOn: moment()
      .format('YYYY-MM-DD HH:mm:ss'),
    category_id: 1,
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://ecsuabroad.files.wordpress.com/2012/11/jamaica_beach_desktop_1024x768_wallpaper-152705.jpg',
    authorId: 1,
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit amet. Non diam phasellus vestibulum lorem. Eros in cursus turpis massa. Morbi tristique senectus et netus et malesuada fames ac. Tortor posuere ac ut consequat. Auctor eu augue ut lectus. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Eu volutpat odio facilisis mauris sit amet massa. Id leo in vitae turpis massa sed elementum tempus. Amet aliquam id diam maecenas ultricies mi eget. Felis eget nunc lobortis mattis aliquam. Lacinia quis vel eros donec ac odio tempor orci dapibus. Augue interdum velit euismod in pellentesque massa placerat. Sed augue lacus viverra vitae congue eu consequat ac. Pulvinar etiam non quam lacus. Est velit egestas dui id ornare arcu odio ut sem. Sed odio morbi quis commodo odio. Vestibulum sed arcu non odio. Magna eget est lorem ipsum dolor sit.\n'
      + '\n'
      + 'Augue neque gravida in fermentum et sollicitudin ac. Ornare quam viverra orci sagittis eu volutpat odio. Est placerat in egestas erat imperdiet sed euismod nisi. Cursus sit amet dictum sit amet justo donec enim. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Eget aliquet nibh praesent tristique magna. Tortor aliquam nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Egestas pretium aenean pharetra magna. Tempor nec feugiat nisl pretium. Augue lacus viverra vitae congue eu consequat ac felis. Suspendisse ultrices gravida dictum fusce ut placerat. Tincidunt id aliquet risus feugiat in. Potenti nullam ac tortor vitae purus. Lectus quam id leo in vitae turpis massa. Elementum nibh tellus molestie nunc non blandit massa enim. Viverra nibh cras pulvinar mattis nunc sed blandit. Facilisis volutpat est velit egestas. Euismod in pellentesque massa placerat.',
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
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://www.riu.com/blog/wp-content/uploads/2016/03/JAMAICA_04_027_1156x800.jpg',
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

module.exports = articles;