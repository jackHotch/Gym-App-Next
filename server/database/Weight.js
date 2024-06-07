import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345',
    database: 'gym_app',
  }).promise()


export async function getAllWeight() {
    const [rows] = await pool.query("SELECT * FROM weight")
    return rows
}

export async function getWeight(id) {
    const [row] = await pool.query(`
    SELECT * 
    FROM weight
    WHERE id = ?
    `, [id])
    return row
}

export async function createEntry(weight, date) {
    await pool.query("INSERT INTO `weight` (`weight`, `date`) VALUES (?, ?)", [weight, date])
}

export async function deleteEntry(id) {
    await pool.query("DELETE FROM `weight` WHERE id = ?", [id])
}