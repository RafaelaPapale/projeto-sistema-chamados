const mongoose = require('mongoose');

const uri = `mongodb+srv://sistema-chamados:${adminadmin}@cluster-chamados.u1wbp.mongodb.net/test`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UsersSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    avatarUrl: String,
});

const UsersModel = mongoose.model('UsersModel', UsersSchema);

const CustomersSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nomeFantasia: {
        type: String,
        unique: true,
    },
    endereco: String,
    cnpj: String,
});

const CustomersModel = mongoose.model('CustomersModel', CustomersSchema);

const ChamadosSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    assunto:  String,
    cliente: String,
    clientId: String,
    userId: String,
    complemento: String, 
    created: Date,
    status: String,
});

const ChamadosModel = mongoose.model('ChamadosModel', ChamadosSchema);

module.exports = {
    UsersModel,
    CustomersModel,
    ChamadosModel,
    mongoose,
};