const express = require('express');

const Students = require('./studentsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Students.find()
  .then(students => {
    res.json(students);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get students' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Students.findById(id)
  .then(student => {
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Could not find student with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get students' });
  });
});

router.post('/', (req, res) => {
  const studentData = req.body;

  Students.add(studentData)
  .then(student => {
    res.status(201).json(student);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new student' });
  });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Students.findById(id)
  .then(student => {
    if (student) {
        Students.update(changes, id)
      .then(updatedStudent => {
        res.json(updatedStudent);
      });
    } else {
      res.status(404).json({ message: 'Could not find student with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update student' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Students.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find student with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete student' });
  });
});

module.exports = router;