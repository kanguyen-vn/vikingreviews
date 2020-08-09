### Users:
```
	POST			uri/api/users
```
Sign up. `req.body` includes `name, email, password, class, major`, and `isAdmin`.
Example: 	
``` json
{
    "name": "Mark Burstein", 
    "email": "burstem@lawrence.edu", 
    "password": "immarkburstein", 
    "class": 2020, 
    "major": "President", 
    "isAdmin": false
}
```
Notes: email has to end with `@lawrence.edu`. Apart from this request, all other requests need a JSON web token in the header.
```
	GET			    uri/api/users				admin
```
Get list of users.

```
	GET				uri/api/users/me
```
Get information of current user.

### Logging in:
```
	POST			uri/api/auth
```
`req.body` includes `email` and `password`.

Example: 	
``` json
{
    "email": "burstem@lawrence.edu", 
    "password": "immarkburstein"
}
```

#### Departments:
```
	GET				uri/api/departments
```
Get all departments.
```
	POST			uri/api/departments			admin
```

Post a new department. `req.body` includes `name`.
Example:	
```  json
{
    "name": "Computer Science"
}
```
```
	GET				uri/api/departments/:id
```
Get department with the specific `id`.	

```
	PUT				uri/api/departments/:id		admin
```	
Update a department. `req.body` includes content, date, and/or `likes, dislikes`.

```
	DELETE			uri/api/departments/:id		admin
```
Delete a department.

### Courses:
```
	GET				uri/api/courses
```
Get all courses.

```
	POST			uri/api/courses				admin
```	

Post a new course. req.body includes title, department, units, and user.
```
	GET				uri/api/courses/:id
```	


Get course with the specific id.	
```
	PUT				uri/api/courses/:id			admin
```	
Update a course.

```
	DELETE			uri/api/courses/:id			admin
```
Delete a course.

### Reviews:
```
	GET				uri/api/reviews
```
Get all reviews.
```
	POST			uri/api/reviews				admin
```
Post a new review. `req.body` includes `content, rating, course, instructor, term, year, anonymous, user,` and `time`.
```
	GET				uri/api/reviews/:id
```
Get review with the specific id.	
```
	PUT				uri/api/reviews/:id			admin
```
Update a review. `req.body` includes `content, rating, anonymous,` and `time`.

```
	DELETE			uri/api/reviews/:id			admin
```
Delete a review.