const skills = [
    { id: 12001, skill: 'HTML', mastered: true },
    { id: 12002, skill: 'CSS', mastered: false },
    { id: 12003, skill: 'JavaScript', mastered: false }
]

function getAll() {
    return skills
}
function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

module.exports = {
    getAll,
    getOne
}