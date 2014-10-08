var mongoose = require('mongoose');
var _ = require('lodash');
// mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/wikicause');

var ObjectId = mongoose.Schema.Types.ObjectId;

var Id = mongoose.Types.ObjectId;

var Dataset = mongoose.model('leafs', {
  _id: ObjectId,
  slug: String,
  parents: Array,
  children: Array,
  data: Object,
  event: Object
});

var id = null;
var root = null;

var DOMAIN = 'http://example.org/';

function slugify(string) {
  return string
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function forge(parent, content, event) {
	id = Id();

	if(!parent) {
		root = id;
	}

  if (!content.img) {
    content.img = DOMAIN + slugify(content.title) + '.png';
  }

  if (!content.href) {
    content.href = DOMAIN + slugify(content.title);
  }

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

  new Dataset(data).save(function(err){
  	if (err) throw err;

  	if(parent) {
	  	Dataset.update({
	  		_id: parent
			}, {
				$push: {
					children: data._id
				}
			}, {
				upsert: true
			}, function(err) {
				if(err) console.log(err);
			});
	  }
  });
}

var e = {
  id: 0,
  slug: 'life-the-universe-and-everything'
};

function main() {
	var a = [];
	var b = [];
	var c = [];
	var d = [];

	Dataset.find().remove(function(err) {
	  if (err) throw err;
	});

  console.log(a,b,c,d);
}

main();