# Types of data
## event
```
{
	_id: ObjectId(a),
	slug: 'life-the-universe-and-everything',
	title: 'Life the universe and everything',
	subtitle: 'So long and thanks for all the fish',
	img: 'http://example.org/life-the-universe-and-everything.png',
	href: 'http://example.org/life-the-universe-and-everything',
	contributors: [
		{
			name: 'Trevor Starick',
			twitter: '@trevorstarick',
			email: 'trevor.starick@gmail.com'
		}
	],
	leafs: [
		[ObjectId(leaf.a), ObjectId(leaf.b))],
		[ObjectId(leaf.a),ObjectId(leaf.c)]
	],
	changelog: [
		{
			date: ISODate(today),
			event: 'Fixed',
			description: 'FOOBAR',
			author: 'Trevor Starick'
		}
	]
	
}
```

## user
```
{
	_id: ObjectId(trevorstarick),
	slug: 'trevorstarick',
	name: 'Trevor Starick',
	twitter: '@trevorstarick',
	email: 'trevor.starick@gmail.com',
	contributions: {
		_sum: [allChangelogs]
		ObjectId(event.a): [changelog],
		ObjectId(event.b): [changelog]
	}
}
```

## leaf
```
{
	_id: ObjectId(a),
	slug: 'the-big-bang',
	parents: null,
	children: [ObjectId(b),ObjectId(c)],
	data: {
		title: 'The Big Bang',
		subtitle: 'A bang, it was pretty big.',
		img: 'http://example.org/the-big-bang.png',
		href: 'http://example.org/the-big-bang',
		contributors: [
			{
				name: 'Trevor Starick',
				twitter: '@trevorstarick',
				email: 'trevor.starick@gmail.com'
			}
		]
	},
	event: {
		id: ObjectId(event.a),
		slug: 'life-the-universe-and-everything'
	},
	changelog: [
		{
			date: ISODate(today),
			event: 'Fixed',
			description: 'FOOBAR',
			author: 'Trevor Starick'
		}
	]
}
```

### Of Null Fields and Empty Arrays
If the parent field is null, the item is the root of the event.
If the parent field is an empty array, the item is an orphan and a notification event should be fired.

If the children field is null, the item is the end of the line.
If the children field is an empty array, the item is still open for new events caused by it.

### Order of lineage
Whichever child or parent element appears first in an array is the "true" child or parent. 
"True" children continue the line where as others are forks. "True" parents only exist if more than one parent exists indicating a merge. "True" parents indicate which lineage the item is a decendant of. 

"True" children are more important than their parental counterparts as the data is Child based.

## changelog
```
{
	date: ISODate(today),
	event: 'Fixed',
	description: 'FOOBAR',
	author: 'Trevor Starick'
}
```

#Descriptions of common fields

### slug
A formatted version of the title or name. Should be unique per event scope. Appended at the end of a url for ease of reading.

### title

### subtitle

### img
A image to be used to visualy identify the event, leaf or user.

### href
A link to associate with the title. Used to link to further reading.
