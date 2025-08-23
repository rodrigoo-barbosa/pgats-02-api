// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const {expect} = require('chai');

//Aplicação
const app = require('../../app');

//Mock -  Tem que importar o arquivo "TransferService" para ele servir de referencia
const transferService = require('../../services/transferService');

//Testes
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinatário inexistentes recebo 400', async () => { 
            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Rodrigo",
                    to: "Barbosa",
                    amount: 100
                });

            expect(resposta.status).to.equal(400); //Código de resposta
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.');
        });

        it('Usando Mocks: Quando informo remetente e destinatário inexistentes recebo 400', async () => { 
            //Mocar apenas a função transfer do Service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.returns({ error: 'Remetente, destinatário e valor são obrigatórios.' });

            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Rodrigo",
                    to: "Barbosa",
                    amount: 100
                });

            expect(resposta.status).to.equal(400); //Código de resposta
            expect(resposta.body).to.have.property('error', 'Remetente, destinatário e valor são obrigatórios.');

            //Reseta o Mock
            sinon.restore();
        });
        
    });

    describe('GET /api/transfers',() =>{
        //Its ficam aqui
    })
});
