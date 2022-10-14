const express = require('express')
const router = express.Router()

const TagRepository = require('../database/repositories/tag-repo')

const tRepo = new TagRepository()


router.get('/', async (req, res) => {
  res.send(await tRepo.findAll())
})

router.get('/:id', async (req, res) => {
  const tag = await tRepo.findById(req.params.id)

  if (tag.length <= 0) {
    res.status(404).send({ error: "Tag not found" })
  }

  res.send(tag)
})

router.post('/', async (req, res) => {
  console.log(req.body)
  obj = req.body

  await tRepo.insert(obj)

  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const tag = await tRepo.findById(id)

  if (tag.length <= 0) {
    res.status(404).send({ error: "Tag not found" })
  }
  
  await tRepo.update(id, req.body)
  res.status(204).send()
})

router.delete('/:id', async (req, res) => {
    tRepo.delete(req.params.id)
    res.status(204).send()
})


module.exports = router