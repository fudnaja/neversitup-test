const express =  require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try{
      const product = await Product.find();
      res.json(product);
      console.log(product);
  }catch(err){
    res.json({message: err });
  }
});


router.post('/', async (req, res) => {
  const product = new Product({
    product_ame: req.body.product_ame,
    description: req.body.description,
    price: req.body.price,
  });

  try{
      const save = await product.save();
      res.json(save);
  }catch(err){
      res.json({message: err });
      console.log({message: err });
  }
});

router.get('/:id',async (req, res) => {
  console.log(req.params.id);
  try{
    const data = await Product.findById(req.params.id);
    res.json(data);
}catch(err){
  res.json({message: err });
}
})

module.exports = router;