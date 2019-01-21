const express = require('express');
const dao = require('./dao');
const router = express.Router({
	caseSensitive: true,
	strict: true
});

//Get all grades
router.route('/grades').get(function (req, resp) {
	const grades = dao.read();
	if (grades === false) {
		resp.status(200).json({
			code: 0,
			data: null
		});
	} else {
		resp.status(200).json({
			code: 1,
			data: grades
		});
	}
});

//Get grade by id
router.route('/grades/:id').get(function (req, resp) {
	const id = req.params.id;
	const grade = dao.read(parseInt(id));
	if (grade === false) {
		resp.status(500).json({
			code: 0,
			data: null
		});
	} else {
		resp.status(200).json({
			code: 1,
			data: grade
		});
	}
});

//New grade
router.route('/grades').post(function (req, resp) {
	const grade = req.body;
	console.log('-----');
	console.log(grade);
	if (!grade) {
		resp.status(200).json({
			code: 0
		});
	} else {
		const result = dao.write(grade);
		if (result) {
			resp.status(200).json({
				code: 1
			});
		} else {
			resp.status(200).json({
				code: 0
			});
		}
	}
});

//Update grade
router.route('/grades/:id').put(function (req, resp) {
	const id = req.params.id;
	const grade = req.body;
	grade.id = parseInt(id);
	console.log(grade);
	const result = dao.update(grade);
	if (result) {
		resp.status(200).json({
			code: 1
		});
	} else {
		resp.status(200).json({
			code: 0
		});
	}
});

//Delete grade
router.route('/grades/:id').delete(function (req, resp) {
	const id = req.params.id;
	if (id) {
		const result = dao.delete(parseInt(id));
		if (result) {
			resp.status(200).json({
				code: 1
			});
		} else {
			resp.status(200).json({
				code: 0
			});
		}
	} else {
		resp.status(200).json({
			code: 0
		});
	}
});

module.exports = router;