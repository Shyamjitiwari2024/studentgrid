import express from 'express';
import Student from '../models/student.js';

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
    const { page = 1, pageSize = 10, name, minMarks, maxMarks } = req.query;

    // Build the query based on filters
    let query = {};
    if (name) query.name = new RegExp(name, 'i');
    if (minMarks) query.totalMarks = { $gte: minMarks };
    if (maxMarks) query.totalMarks = { ...query.totalMarks, $lte: maxMarks };

    const students = await Student.find(query)
      .skip((page - 1) * pageSize)
      .limit(parseInt(pageSize));

    const total = await Student.countDocuments(query);

    res.json({ students, total });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default router;
