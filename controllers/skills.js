const Skill = require('../models/skill')

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: "All skills"
    })
}

function show(req,res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'

    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add New Skill below:'
    })
}

function create(req, res) {
    Skill.create(req.body)
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

module.exports = {
    index, 
    show,
    new: newSkill, 
    create, 
    delete: deleteSkill
}