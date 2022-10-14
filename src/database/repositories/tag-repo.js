const Tag = require('../../model/tag')

class TagRepository {

    insert(obj) {

        return Tag.create({ ...obj })

    }

    update(id, obj) {

        return Tag.update({ ...obj }, {
            where: { id: id }
        })

    }

    delete(id) {

        Tag.destroy({
            where: { id: id }
        })

    }

    findById(id) {

        return Tag.findAll({
            where: { id: id }
        })

    }

    findAll() {
        
        return Tag.findAll()

    }

}

module.exports = TagRepository