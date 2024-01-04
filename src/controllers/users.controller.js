    const pool = require('../db/db');

    async function getUsers(req,res){
        try {
            const [rows]  = await pool.query('Select * from users ');
            if(rows.length === 0) return res.status(404).json({message:"Failed getting users"});
            res.json(rows);
        } catch (error) {
        return res.status(500).json({
                message:"Something happened while getting users"
            });
        }

    }
    async function getOneUser(req, res){
        const {id} = req.params
        try {
        const [rows] = await pool.query('Call getOneUser(?)',[id]);
        if(rows.length<=0 )return res.status(404).json({message:"Failed getting the user"});
        res.json(rows);
        } catch (error) {
        return res.status(500).json({
                message:"Something happened while getting the user"
            })
        }
    
    }
    async function createUser(req,res){
        const {username,age,email} = req.body
        try {
        const [rows]  = await pool.query('Call createUser(?,?,?)',[username,age,email]);
        res.send({
            id:rows.insertId,
            username,
            age,
            email
        });
        } catch (error) {
            return res.status(500).json({message:'Something happened while creating the user'})
        }

    }
    async function updateUser(req,res){
    const {id} = req.params
    const {username,age,email} = req.body
        try {
        const [result]  = await pool.query('Call updateUser(?,?,?,?)',[id,username,age,email]);
        if(result.affectedRows === 0 )return res.status(404).json({message:"Employee not found"})
        const [rows] = await pool.query('Call getOneUser(?)',[id]);
        res.json(rows[0])
        } catch (error) {
            return res.status(500).json({message:"Something happened while updating the user"})
        }
    }
    async function deleteUser(req,res){
        const {id} = req.params;
        try {
        const [result]  = await pool.query('Call deleteUser(?)',[id]);
        if(result.affectedRows<=0)return res.status(404).json({
            message:"Employee not found"
        })
        res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({message:"Something happened while deleting the user"})
        }
        }

module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}