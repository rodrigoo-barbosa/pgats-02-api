// Bibliotecas
const request = require('supertest');
const {expect} = require('chai');


// const sinon = require('sinon');  
//NÃO VAMOS UTILIZAR O MOCK ABAIXO, POIS QUANDO USAMOS O SERVIDOR LIGADO,
//NÃO TEM NECESSIDADE DE MOCKAR O SERVICE, POIS ESTAMOS TESTANDO A APLICAÇÃO INTEIRA

//const transferService = require('../../services/transferService');

//Aplicação não mais necessária, pois estamos testando com o servidor ligado
//const app = require('../../app');

//NÃO VAMOS UTILIZAR O MOCK ABAIXO, POIS QUANDO USAMOS O SERVIDOR LIGADO,
//NÃO TEM NECESSIDADE DE MOCKAR O SERVICE, POIS ESTAMOS TESTANDO A APLICAÇÃO INTEIRA  


//Testes
describe('Transfer', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinatário inexistentes recebo 400', async () => { 
            const resposta = await request('http://localhost:3000')
                .post('/api/transfers')
                .send({
                    from: "Rodrigo",
                    to: "Barbosa",
                    amount: 100
                });

            expect(resposta.status).to.equal(400); //Código de resposta
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.');
        });
    });
});    