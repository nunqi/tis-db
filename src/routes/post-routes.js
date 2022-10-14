const express = require('express')
const router = express.Router()

const PostRepository = require('../database/repositories/post-repo')

const pRepo = new PostRepository()


router.get('/', async (req, res) => {
  res.send(await pRepo.findAll())
})

router.get('/:id', async (req, res) => {
  const post = await pRepo.findById(req.params.id)

  if (post.length <= 0) {
    res.status(404).send({ error: "Post not found" })
  }

  res.send(post)
})

router.post('/', async (req, res) => {
  console.log(req.body)
  obj = req.body

  if (!obj.UserId) {
    res.status(400).send({ error: "UserId required" })
    return
  }

  await pRepo.insert(obj)

  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const post = await pRepo.findById(id)

  if (post.length <= 0) {
    res.status(404).send({ error: "Post not found" })
  }
  
  await pRepo.update(id, req.body)
  res.status(204).send()
})

router.delete('/:id', async (req, res) => {
    pRepo.delete(req.params.id)
    res.status(204).send()
})


module.exports = router