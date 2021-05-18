const pool = require('./pool')

pool.on('connect', () => {
    console.log('connected to the db')
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

    pool.query(createStudentQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
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

    pool.query(createTeacherQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
}

// Create course model with teacher_id, name, subject, start_date, duration
// Associations: belongs_to teacher, has_many students through student_courses

const createCourseTable = ()  => {
    const createCourseQuery = `CREATE TABLE IF NOT EXISTS courses
    (id SERIAL PRIMARY KEY, 
    teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,  
    subject VARCHAR(50), 
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_on DATE NOT NULL)`;

    pool.query(createCourseQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
}

// Create group model with name, type
// Assocations: has_many students through student_group, has_many forums

const createGroupTable = ()  => {
  const createGroupQuery = `CREATE TABLE IF NOT EXISTS groups
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) NOT NULL, 
  type VARCHAR(100) NOT NULL,
  created_on DATE NOT NULL)`;

  pool.query(createGroupQuery, (error, results) => {
    if(error){
        throw error
    }
    console.log(results.rows)
  })
}

// Create student course model with student_id, course_id, completion percentage, score
// Assocations: belongs_to student, belongs_to course

const createStudentCourseTable = ()  => {
    const createStudentCourseQuery = `CREATE TABLE IF NOT EXISTS student_courses
    (id SERIAL PRIMARY KEY, 
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE)`;

    pool.query(createStudentCourseQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
}

// Create student group model with student_id, group_id
// Assocations: belongs_to student, belongs_to group

const createStudentGroupTable = ()  => {
    const createStudentGroupQuery = `CREATE TABLE IF NOT EXISTS student_groups
    (id SERIAL PRIMARY KEY, 
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE)`;

    pool.query(createStudentGroupQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
}

// Create forum model with group_id
// Assocations: belongs_to group, has_many posts

const createForumTable = () => {
    const createForumQuery = `CREATE TABLE IF NOT EXISTS forums
    (id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE)`;

    pool.query(createForumQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
}

// Create post model with forum_id, content, title, date
// Assocations: belongs_to student, belongs_to forum

const createPostTable = ()  => {
    const createPostQuery = `CREATE TABLE IF NOT EXISTS posts
    (id SERIAL PRIMARY KEY, 
    forum_id INTEGER REFERENCES forums(id) ON DELETE CASCADE,
    title VARCHAR(100),
    content VARCHAR(10000),
    created_on DATE NOT NULL)`;

    pool.query(createPostQuery,  (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
}

// Drop functions for all tables
const dropStudentTable = () => {
    const studentDropQuery = 'DROP TABLE IF EXISTS students';
    pool.query(studentDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropTeacherTable = () => {
    const teacherDropQuery = 'DROP TABLE IF EXISTS teachers';
    pool.query(teacherDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropCourseTable = () => {
    const courseDropQuery = 'DROP TABLE IF EXISTS courses';
    pool.query(courseDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropStudentCourseTable = () => {
    const studentCourseDropQuery = 'DROP TABLE IF EXISTS student_courses';
    pool.query(studentCourseDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropStudentGroupTable = () => {
    const studentGroupDropQuery = 'DROP TABLE IF EXISTS student_groups';
    pool.query(studentGroupDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropForumTable = () => {
    const forumDropQuery = 'DROP TABLE IF EXISTS forums';
    pool.query(forumDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropGroupTable = () => {
    const groupDropQuery = 'DROP TABLE IF EXISTS groups';
    pool.query(groupDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

const dropPostTable = () => {
    const postDropQuery = 'DROP TABLE IF EXISTS posts';
    pool.query(postDropQuery, (error, results) => {
      if(error){
          throw error
      }
      console.log(results.rows)
    })
};

// Delayed table creation

const delayOneSecond = (callback) => {
  console.log('hit')
  setTimeout(function(){
    callback()
  }, 1000)
}

// Create all tables

const createAllTables = async() => {
    await delayOneSecond(() => createStudentTable());
    await delayOneSecond(() => createTeacherTable());
    await delayOneSecond(() => createGroupTable());
    await delayOneSecond(() => createCourseTable());
    await delayOneSecond(() => createStudentGroupTable());
    await delayOneSecond(() => createStudentCourseTable());
    await delayOneSecond(() => createForumTable());
    await delayOneSecond(() => createPostTable());
}

// Drop all tables

const dropAllTables = async () => {
  await dropPostTable();
  await dropStudentCourseTable();
  await dropStudentGroupTable();
  await dropForumTable();
  await dropGroupTable();
  await dropCourseTable();
  await dropTeacherTable();
  await dropStudentTable();
  await dropPostTable();
}

module.exports = {
    createAllTables,
    dropAllTables
}

require('make-runnable')