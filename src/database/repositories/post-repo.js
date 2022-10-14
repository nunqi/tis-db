const Post = require('../../model/post')

class PostRepository {

    insert(obj) {

        return Post.create({ ...obj })

    }

    update(id, obj) {

        return Post.update({ ...obj }, {
            where: { id: id }
        })

    }

    delete(id) {

        Post.destroy({
            where: { id: id }
        })

    }

    findById(id) {

        return Post.findAll({
            where: { id: id }
        })

    }

    findByUser() {

        return undefined

    }

    findAll() {
        
        return Post.findAll()

    }

}

module.exports = PostRepository