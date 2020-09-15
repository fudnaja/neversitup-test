const express =  require('express');
const router = express.Router();
const Register = require('../models/Register');

router.get('/', async (req, res) => {
  try{
      const register = await Register.find();
      res.json(register);
      console.log(register);
  // res.send('Never Situp');
  }catch(err){
    res.json({message: err });
  }
});


router.post('/', async (req, res) => {
  //console.log(req.body);

  const register = new Register({
    name: req.body.name,
    age: req.body.age,
    mobile: req.body.mobile,
    account: req.body.account,
    pwd: req.body.pwd
  });

  try{
      const save = await register.save();
      res.json(save);
  }catch(err){
      res.json({message: err });
      console.log({message: err });
  }
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err =>{
    //     res.json({message: err });
    // });
});

router.get('/:id',async (req, res) => {
  console.log(req.params.id);
  try{
    const data=await Register.findById(req.params.id);
    res.json(data);
}catch(err){
  res.json({message: err });
}
})

module.exports = router;