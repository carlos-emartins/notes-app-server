const express = require('express')
const router = express.Router()

const { Notes } = require('../models')

router.get('/', async (req, res) => {
  const allNotes = await Notes.findAll()

  res.json(allNotes)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const note = await Notes.findByPk(id)

  res.json(note)
})

router.post('/', async (req, res) => {
  const note = req.body
  await Notes.create(note)

  return res.json('Successfully created.')
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const { newBody } = req.body
  await Notes.update(
    {
      body: newBody,
    },
    {
      where: { id: id },
    }
  )

  res.json('Successfully updated.')
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  await Notes.destroy({
    where: { id: id },
  })

  res.json('Successfully deleted.')
})

module.exports = router
