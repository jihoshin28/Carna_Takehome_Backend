import pool from './pool'

pool.on('connect', () => {
    console.group('connected to the db')
})

// Create student model with first_name, last_name, email, password, birthday, city, state
// Associations: has_many courses through student_courses, has_many student_groups through student_groups, has_many posts 

const createStudentTable = ()  => {
    const createStudentQuery = `CREATE TABLE IF NOT EXISTS students
    (id SERIAL PRIMARY KEY, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    first_name VARCHAR(100), 
    last_name VARCHAR(100), 
    birthday DATE, 
    city VARCHAR(30),
    state VARCHAR(2),
    password VARCHAR(100) NOT NULL,
    created_on DATE NOT NULL
    )`;

    pool.query(createStudentQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create teacher model with first_name, last_name, email, password, birthday, language, city, state
// Associatons: has_many courses

const createTeacherTable = ()  => {
    const createTeacherQuery = `CREATE TABLE IF NOT EXISTS teachers
        (id SERIAL PRIMARY KEY, 
        email VARCHAR(100) UNIQUE NOT NULL, 
        first_name VARCHAR(100), 
        last_name VARCHAR(100), 
        birthday DATE, 
        city VARCHAR(30),
        state VARCHAR(2),
        password VARCHAR(100) NOT NULL,
        created_on DATE NOT NULL
        )`;

    pool.query(createTeacherQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create course model with teacher_id, name, subject, start_date, duration
// Associations: belongs_to teacher, has_many students through student_courses

const createCourseTable = ()  => {
    const createCourseQuery = `CREATE TABLE IF NOT EXISTS courses
    (id SERIAL PRIMARY KEY, 
    teacher_id INTEGER REFERENCES teacher(id) ON DELETE CASCADE,  
    subject VARCHAR(50), 
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_on DATE NOT NULL)`;

    pool.query(createCourseQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create student course model with student_id, course_id, completion percentage, score
// Assocations: belongs_to student, belongs_to course

const createStudentCourseTable = ()  => {
    const createStudentCourseQuery = `CREATE TABLE IF NOT EXISTS student_courses
    (id SERIAL PRIMARY KEY, 
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    course_id INTEGER REFERENCES course(id) ON DELETE CASCADE)`;

    pool.query(createStudentCourseQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create student group model with student_id, group_id
// Assocations: belongs_to student, belongs_to group

const createStudentGroupTable = ()  => {
    const createStudentGroupQuery = `CREATE TABLE IF NOT EXISTS student_groups
    (id SERIAL PRIMARY KEY, 
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    group_id INTEGER REFERENCES group(id) ON DELETE CASCADE)`;

    pool.query(createStudentGroupQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create forum model with group_id
// Assocations: belongs_to group, has_many posts

const createForumTable = ()  => {
    const createForumQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    group_id INTEGER REFERENCES group(id) ON DELETE CASCADE)`;

    pool.query(createForumQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create group model with name, type
// Assocations: has_many students through student_group, has_many forums

const createGroupTable = ()  => {
    const createGroupQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL, 
    type VARCHAR(100) NOT NULL,
    created_on DATE NOT NULL)`;

    pool.query(createGroupQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

// Create post model with forum_id, content, title, date
// Assocations: belongs_to student, belongs_to forum

const createPostTable = ()  => {
    const createPostQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    forum_id INTEGER REFERENCES forum(id) ON DELETE CASCADE,
    title VARCHAR(100),
    content VARCHAR(10000),
    created_on DATE NOT NULL)`;

    pool.query(createPostQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}
