import { Router } from 'express';
import connection from '../../../database/connection.js';
const router = Router();

let query = connection()

router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM Users';
    connection().query(sql, (err, result) => {
        res.json(result)
    })
})

router.get('/:id', async (req, res) => {
    const sql = 'SELECT * FROM Users WHERE id = ?';
    query.execute(sql, [req.params.id], (err, result) => {
        res.json(result)
    })
})

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    query.execute('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [ name, email, password ], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
            return;
        }
        res.json(result)
    })
})


router.put('/:id', async (req, res) => {
    const { name, email, password } = req.body;
    query.execute('UPDATE Users SET ? WHERE id = ?', [{ name, email, password }, req.params.id], (err, result) => {
        res.json(result)
    })
})


router.delete('/:id', async (req, res) => {
    const sql = 'DELETE FROM Users WHERE id = ?';
    query.execute(sql, [req.params.id], (err, result) => {
        res.json(result)
    })
})

export default router
