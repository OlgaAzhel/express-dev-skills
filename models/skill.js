const skills = [
    { id: 127348, skill: 'HTML', mastered: true },
    { id: 189543, skill: 'CSS', mastered: false },
    { id: 156978, skill: 'JavaScript', mastered: false }
]

function getAll() {
    return skills
}
function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    let idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx,1)
}

function update(id, updatedSkill) {
    id = parseInt(id)
    let skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne, 
    update
}