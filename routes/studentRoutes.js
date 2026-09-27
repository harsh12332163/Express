const express = require('express');
const router = express.Router();

// Placeholder GET route for students (you will add CRUD operations here in step 2/4)
router.get('/', (req, res) => {
    res.status(200).json({ message: "Students route is working" });
});

module.exports = router;