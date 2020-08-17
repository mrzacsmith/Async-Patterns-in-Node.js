const express = require('express')
const fs = require('fs')
const fsPromises = require('fs').promises
const datafile = 'server/data/clothing.json'
const router = express.Router()

/* GET all clothing */
router.route('/').get(async function (req, res) {
  try {
    let data = await getClothingData()
    console.log('returning data')
    res.send(data)
  } catch (error) {
    res.status(500).send(error)
  }

  console.log('Doing more work')
})

const getClothingData = async () => {
  let rawData = await fsPromises.readFile(datafile, 'utf8')
  let clothingData = JSON.parse(rawData)

  console.log(clothingData)
  return clothingData
}

module.exports = router
