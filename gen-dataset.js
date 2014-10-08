var nodes = [
  ['00', '01', '02', '03', '04', '05'],
  ['ff', '11', '12', 'ff', 'ff', '31'],
  ['ff', 'ff', '21', '22', '23', '24']
];

var data = {
  _id: id,
  slug: slugify(content.title),
  parents: parent,
  children: [],
  data: {
    title: content.title,
    subtitle: content.subtitle,
    img: content.img,
    href: content.href,
    contributors: [{
      name: 'Trevor Starick',
      twitter: '@trevorstarick',
      email: 'trevor.starick@gmail.com'
    }]
  },
  event: {
    id: event.id,
    slug: event.slug
  }
};

nodes.forEach(function(r,i) {
  r.forEach(function(c) {
    console.log(i,c);
  });
});