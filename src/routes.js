const express = require('express');
const router = express.Router();
const user = require('./models/user');

router.post('/create', async (req, res)=>{
  const {nome, login, senha} = req.body;
  const novo_usuario = await user.create(nome, login, senha);
  res.json(novo_usuario).status(201);
})

router.get('/all', async (req, res)=>{
  const users = await user.findAll({raw: true});
  res.json(user).status(200);
})

router.put('/update', async (req, res)=>{
  const {id, nome, login, senha} = req.body;
  const update = await user.update({nome, login, senha}, { where: { id: id } });
  res.json(update).status(200);
})

router.delete('/delete/:id', async (req, res)=>{
  const id = req.params.id;
  user.destroy({where: {id: id}});
  res.json({message: 'Usuário removido'}).status(200);
  
})

module.exports = router;