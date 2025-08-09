// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const {expect} = require('chai');

//Aplicação
const app = require('../../app');

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
            //expect(resposta.body).to.have.property('error', 'Erro na transferência')
            
        });
    });

    describe('GET /api/transfers',() =>{
        //Its ficam aqui
    })
});




