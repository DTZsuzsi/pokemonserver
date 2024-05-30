import express from 'express'
import passwords from './keys';
import mongoose from 'mongoose'


mongoose.connect(passwords)
const app = express();

app.use(express.json());

app.listen(4444, () => console.log('Server started on port 4444'));

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, '../static')));



