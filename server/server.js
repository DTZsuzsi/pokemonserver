import express from 'express';
import passwords from '/Users/Zsuzsi/Documents/pokemon/server/pokemonserver/server/keys.js';
import mongoose from 'mongoose';
import User from '/Users/Zsuzsi/Documents/pokemon/server/pokemonserver/server/model/users.js';

mongoose.connect(passwords[1].mongoconnect);

const app = express();

app.use(express.json());

app.listen(4444, () => console.log('Server started on port 4444'));

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(join(__dirname, '../static')));

app.post('/api/user', (req, res) => {
  const userName = req.body.user_name;
  const password = req.body.password;
  const fullname= req.body.user_fullName;
  const pokemons=req.body.pokemons
  //   const encryptPassword = password.encrypt(password);
  const createdAt = Date.now();

  const user = new User({
    userName,
    password,
    fullname,
    pokemons,
    createdAt,
  });
  user
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ success: false }));

  console.log(user);
});

app.delete('/api/users', async (req, res) => {
  const userName = req.body.user_name;
  try {
    const result = await User.deleteOne({ userName });
    if (result.deletedCount === 0) {
      return res.status(404).json({ succes: false, message: 'User not found' });
    }
    res.json({ success: true, message: `${userName} deleted` });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting user' });
  }
});

app.get('/api/users/:user_name', async (req, res) => {
  try {
    const userName = req.params.user_name;
    const User = await User.exists({ user_name: userName });
    res.json({ succes: true, message: User});

  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching user' });
  }
});
