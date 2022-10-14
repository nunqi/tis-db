const express = require('express')
const router = express.Router()

const UserRepository = require('../database/repositories/user-repo')

const uRepo = new UserRepository()


router.get('/', async (req, res) => {
  res.send(await uRepo.findAll())
})

router.get('/:id', async (req, res) => {
  const user = await uRepo.findById(req.params.id)

  if (user.length <= 0) {
    res.status(404).send({ error: "User not found" })
  }

  res.send(user)
})

router.post('/', async (req, res) => {
  console.log(req.body)
  obj = req.body

  await uRepo.insert(obj)

  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const user = await uRepo.findById(id)

  if (user.length <= 0) {
    res.status(404).send({ error: "User not found" })
  }
  
  await uRepo.update(id, req.body)
  res.status(204).send()
})

router.delete('/:id', async (req, res) => {
    uRepo.delete(req.params.id)
    res.status(204).send()
})


module.exports = router