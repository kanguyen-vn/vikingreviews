const express = require('express'); // REST api
const app = express();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

const courses = [
    { id: 1, name: 'fuck'},
    { id: 2, name: 'marry'},
    { id: 3, name: 'kill'}
];

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) // 404
        res.status(404).send('The courses with the given ID was not found');
    res.send(course.name);
});
