const express = require('express')
const router = express.Router()

const CommentRepository = require('../database/repositories/comment-repo')

const cRepo = new CommentRepository()


router.get('/', async (req, res) => {
  res.send(await cRepo.findAll())
})

router.get('/:id', async (req, res) => {
  const comment = await cRepo.findById(req.params.id)

  if (comment.length <= 0) {
    res.status(404).send({ error: "Comment not found" })
  }

  res.send(comment)
})

router.post('/', async (req, res) => {
  console.log(req.body)
  obj = req.body

  await cRepo.insert(obj)

  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const comment = await cRepo.findById(id)

  if (comment.length <= 0) {
    res.status(404).send({ error: "Comment not found" })
  }
  
  await cRepo.update(id, req.body)
  res.status(204).send()
})

router.delete('/:id', async (req, res) => {
    cRepo.delete(req.params.id)
    res.status(204).send()
})


module.exports = router