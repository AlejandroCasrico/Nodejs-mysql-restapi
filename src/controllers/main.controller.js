const pool = require('../db/db');

async function getProducts(req,res){
try {
    const [rows] = await pool.query('Call getProducts()');
    res.json({rows})
} catch (error) {
    return res.status(500).json({message:"Something happened"})
}
}
async function getOneProduct(req,res){
    const {id} = req.params;
    try {
        const [rows] = await pool.query('Call getOneProduct(?)',[id]);
        if(!rows[1] || rows[1].length) {
           return res.status(404).json({message:"Failed obtaining the product"}); 
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        return res.status(500).json({message:"Something happened"})
    }
}


async function addProduct(req, res){
     const {product, price} = req.body;
    try {
         const [rows] = await pool.query('Call altaProducts(?,?)',[product,price]);
         console.log(rows)
    res.send({
        id: rows.insertId,
        product,
        price
    })
    } catch (error) {
        return res.status(500).json({message:"Something happened"})
    }

}
async function updateProduct(req,res){
    const {id} = req.params;
    const {product,price} = req.body;
    try{
        const [result]= await pool.query('Call updateProduct(?,?,?)',[id,product,price])
        if(result.affectedRows === 0){
            return res.status(404).json({message:"Product not updated"})
        }
        res.status(200).json(result)
    }catch{
        return res.status(500).json({message:"Something happened"})
    }
}

  async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        const [result] = await pool.query('Call deleteProduct(?)', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something happened" });
    }
}


module.exports = {
    addProduct,
    getOneProduct,
    getProducts,
    deleteProduct,
    updateProduct
}