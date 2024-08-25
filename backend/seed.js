// backend/seed.js
import Student from './models/student.js';

const seedStudents = async () => {
  // Dummy student data
  const students = [
    { id: 1, name: 'Alice Johnson', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 2, name: 'Bob Smith', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 3, name: 'Charlie Brown', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 4, name: 'David Williams', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 5, name: 'Eva Davis', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 6, name: 'Fiona Martinez', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 7, name: 'George Anderson', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 8, name: 'Hannah Thomas', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 9, name: 'Isaac Lee', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 10, name: 'Jasmine Harris', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 11, name: 'Kevin Clark', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 12, name: 'Lily Lewis', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 13, name: 'Mason Walker', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 14, name: 'Nina Robinson', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 15, name: 'Oliver Young', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 16, name: 'Paige Scott', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 17, name: 'Quincy Green', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 18, name: 'Rachel Adams', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 19, name: 'Samuel Baker', totalMarks: Math.floor(Math.random() * 100) + 1 },
    { id: 20, name: 'Tina Hall', totalMarks: Math.floor(Math.random() * 100) + 1 }
  ];

  try {
    // Clear existing data
    await Student.deleteMany({});

    // Insert new data
    await Student.insertMany(students);

    console.log('Database seeded with dummy student data.');
  } catch (err) {
    console.error(err.message);
  }
};

export default seedStudents;
