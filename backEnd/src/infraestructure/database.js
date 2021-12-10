const mongoose = require('mongoose');

const uri = `mongodb+srv://sistema-chamados:admin@cluster-chamados.u1wbp.mongodb.net/test`;

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
    email: {
        type: String,
        unique: true,
    },
    nome: String,
    senha: String,
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
    created: String,
    status: String,
});

const ChamadosModel = mongoose.model('ChamadosModel', ChamadosSchema);

module.exports = {
    UsersModel,
    CustomersModel,
    ChamadosModel,
    mongoose,
};