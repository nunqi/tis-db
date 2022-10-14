const Comment = require('../../model/comment')

class CommentRepository {

    insert(obj) {

        return Comment.create({ ...obj })

    }

    update(id, obj) {

        return Comment.update({ ...obj }, {
            where: { id: id }
        })

    }

    delete(id) {

        Comment.destroy({
            where: { id: id }
        })

    }

    findById(id) {

        return Comment.findAll({
            where: { id: id }
        })

    }

    findByPost() {

        return undefined

    }

    findByUser() {

        return undefined

    }

    findAll() {
        
        return Comment.findAll()

    }

}

module.exports = CommentRepository