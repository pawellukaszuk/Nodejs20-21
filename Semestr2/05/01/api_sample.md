### CRUD dla Studenta

CREATE

	POST /students

READ

	GET /students
	GET /students/:id

UPDATE

	PATCH /students/:id

DELETE

	DELETE /students/:id

### CRUD dla Szkoły

CREATE

	POST /schools
READ

	GET /schools
	GET /schools/:id

UPDATE

	PATCH /schools/:id

DELETE

	DELETE /schools/:id

### Dodawanie kursów do szkoły
	POST /schools/:id/courses

### Listowanie kursów w danej szkole, z wyszukiwaniem po nazwie i roku startu
	GET /schools/:id/courses	
	GET /schools/:id/courses/:id
	GET /schools/:id/courses?startYear={query_start_year}&name={query_name}

### Dodawania wykładów do kursów
	POST /schools/:schoolId/courses/:courseId/lectures

### Listowanie wykładów w ramach kursu w danej szkole
	GET /schools/:schooldId/courses/:courseId/lectures

### Zapisywanie studentów na kurs w danej szkole
	POST /schools/:schoolId/courses/:courseId/students
