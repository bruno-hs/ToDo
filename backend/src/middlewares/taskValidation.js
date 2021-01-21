const taskModel = require('../model/taskModel');
const { isPast } = require('date-fns');

const taskValidation = async (req, res, next) => {

    const { macaddress, type, title, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatório' });
    else if (!type)
        return res.status(400).json({ error: 'tipo é obrogatório' });
    else if (!title)
        return res.status(400).json({ error: 'Título é obrigatório' });
    else if (!description)
        return res.status(400).json({ error: 'Descrição é obrigatória' });
    else if (!when)
        return res.status(400).json({ error: 'Data e Hora são obrigatórias' });
    else {
        let exists;

        if (req.params.id) {
            exists = await taskModel.
                findOne(
                    {
                        '_id': { '$ne': req.params.id },
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    })
        } else {
            if (isPast(new Date(when)))
                return res.status(400).json({ error: 'Escolha uma Data e Hora futura' });
            exists = await taskModel.
                findOne(
                    {
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    });
        }

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma tarefa nesse dia e horário.' });
        }

        next();
    }

}

module.exports = taskValidation;