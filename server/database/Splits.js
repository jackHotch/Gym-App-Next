import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345',
    database: 'gym_app',
  }).promise()


export async function getAllSplits() {
  const [rows] = await pool.query(`SELECT * FROM splits`)
  return rows
}

export async function getCurrentSplit() {
    const [row] = await pool.query(`
    SELECT name
    FROM splits
    WHERE active = 1
    `)
    return row[0]
}