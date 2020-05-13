const mongoose = require('mongoose');

const { GSL_BASIC_HOST,GSL_BASIC_DATABASE} = process.env;
const MONGODB_URI=`mongodb://${GSL_BASIC_HOST}/${GSL_BASIC_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

.then(db => console.log('La base de datos esta Conectada'))
.catch(err => console.log(err));