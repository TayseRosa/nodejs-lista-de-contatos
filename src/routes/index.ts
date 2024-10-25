import express from 'express'
import { readFile, writeFile } from 'fs/promises';

const dataSource = './data/list.txt'
const router = express.Router()

//Rotas here...
router.post('/contato', async (req, res) => {
    const { name } = req.body;

    if( !name || name.length < 2 ){
        res.json({ error: "Nome precisa ter pelo menos 2 caracteres. " })
        return;
    }

    //Processamento dos dados - inserir os dados no arquivo
    //Leitura da lista para verificar se ela existe ou nao
    let list: string[] = []

    try{
        const data = await readFile(dataSource, {encoding:'utf8'})
        list = data.split('\n')//vai criar um array com um item em cada linha.
    }catch(err){ }

    //Add item no array
    list.push(name)
    //Escreveu o arquivo
    await writeFile(dataSource, list.join('\n')) //converte o array em "cada item em sua linha separado"

    //retorno que esta tudo certo
    res.status(201).json({ contato: name })
});

router.get('/contatos', async (req, res) => {
    //Ler a lista
    let list: string[] = []

    try{
        const data = await readFile(dataSource, {encoding:'utf8'})
        list = data.split('\n')//vai criar um array com um item em cada linha.
    }catch(err){ }

    //Retorna essa lista
    res.json({ contatos: list })
});

router.delete('/contato', async(req, res) => {
    const { name } = req.query;

    if( !name ){
        return res.json({ error: 'Precisa mandar um nome para excluir' })
    }

    let list: string[] = [];
    try {
        const data = await readFile(dataSource, { encoding:'utf8' });
        list = data.split('\n');
    } catch (err) { }

    list = list.filter( item=>item.toLowerCase() !== (name as string).toLocaleLowerCase() )
    await writeFile(dataSource, list.join('\n'))
    res.json({ contato: name });

})
export default router;