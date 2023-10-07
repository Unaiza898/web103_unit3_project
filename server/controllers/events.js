import { pool } from '../config/database.js'
import React, { useState, useEffect } from 'react'
const getEvents= async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId
    const selectQuery = `SELECT name, date, time, location, img_url FROM events WHERE id = ${eventId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}
const getLocation = async (req, res) => {
    try {
        const results = await pool.query('SELECT DISTINCT location FROM events')
        res.status(200).json(results.rows)
      } catch (error) {
        res.status(400).json( { error: error.message } )
      }
  }
  const getEventByLocation = async (req, res) => {

    try {
        const locationId = req.params.locationId
        const selectQuery = `SELECT  DISTINCT name, date, time, location, img_url FROM events WHERE locationid = ${locationId}`
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
      } catch (error) {
        res.status(409).json( { error: error.message } )
      }
  }
  
  ///location = $1', [req.params.locationId]
export default {
  getEvents,
  getEventById,
  getEventByLocation,
  getLocation
}

// Where location = `The Echo Lounge & Music Hall`