import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

//Log with Morgan
app.use(morgan('dev'));

//accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static files
app.use(express.static(__dirname + '/dist'));


const imageList = [
	{
		key: 0,
		url: "http://nickbinuya.com/images/portfolio/project1-nu.png"
	},
	{
		key: 1,
		url: "http://nickbinuya.com/images/portfolio/project2-nu.png"
	},
	{
		key: 2,
		url: "http://nickbinuya.com/images/portfolio/project3-nu.png"
	},
	{
		key: 3,
		url: "http://nickbinuya.com/images/portfolio/project4-nu.png"
	},
	{
		key: 4,
		url: "http://nickbinuya.com/images/portfolio/project5-nu.png"
	},
	{
		key: 5,
		url: "http://nickbinuya.com/images/portfolio/project6-nu.png"
	}
];

app.route('/image')
	.get((req, res) => res.json(imageList))
	.post((req, res) => {
		const { url } = req.body;
		imageList.push({
			key: imageList.length,
			url
		});
		res.json({
			success: 1,
			message:'Image Successfully added!'
		});
	});

app.listen(port);

console.log(`listening on port ${port}`);
