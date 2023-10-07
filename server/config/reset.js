import { pool } from '../config/database.js'
import '../config/dotenv.js'
import Data from '../data/events.js'

console.log('🌱 seeding events table...')
console.log(Data)
console.log(pool)
const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      date VARCHAR(50) NOT NULL,
      time VARCHAR(10) NOT NULL,
      location VARCHAR(255) NOT NULL,
      img_url VARCHAR(255) NOT NULL,
      locationid SERIAL NOT NULL,
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedEventsTable = async () => {
  await createEventsTable()

  Data.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO events (name, date, time, location, img_url,locationid) VALUES ($1, $2, $3, $4, $5,$6)'
    }

    const values = [
      event.name,
      event.date,
      event.time,
      event.location,
      event.img_url,
      event.locationid
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${event.name} added successfully`)
    })
  })
}

seedEventsTable();