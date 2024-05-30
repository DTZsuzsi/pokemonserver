import express from 'express'
import passwords from '/Users/Zsuzsi/Documents/pokemon/server/pokemonserver/server/keys.js';
import mongoose from 'mongoose'
import encrypt from 'encrypt-with-password'


mongoose.connect(passwords[1].mongoconnect)

// ('mongodb+srv://pokeserver:rattata2@pokecluster.olee5ij.mongodb.net/')

// 
const app = express();

app.use(express.json());

app.listen(4444, () => console.log('Server started on port 4444'));

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(join(__dirname, '../static')));


app.post('/api/user', (req,res)=>{
    const userName = req.body.user_name;
  const password = req.body.password;
  const encryptPassword=password.encrypt(password)
  const createdAt = Date.now();
  

  const User = new User({
    userName,
    encryptPassword,
    createdAt,
  });
  User
    .save()
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json({ success: false }));

    console.log(User)
});



/