const express = require('express');
const db=require('./db.js');

const apiRouter = express.Router();

apiRouter.get('/minions', (req, res) => {
    db.getAllFromDatabase('minions')
    .then(minions => {
        res.status(200).send(minions);
    })
    .catch(console.error.bind(console));
})
apiRouter.post('/minions', (req, res) => {
    try{
        const newMinion = db.addToDatabase('minions', req.body);
        if(newMinion){
            res.status(201).send(newMinion);
        }else{
            res.status(404).send({ error: 'error in adding' });
        }
    }catch (error) {
        console.error('Error updating minion:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
    
})
apiRouter.put('/minions/:id', (req, res) => {
    try {
        const updatedMinion = db.updateInstanceInDatabase('minions', req.params.id);
        if (updatedMinion) {
            res.status(200).send(updatedMinion);
        } else {
            res.status(404).send({ error: 'Minion not found' });
        }
    } catch (error) {
        console.error('Error updating minion:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});


module.exports = apiRouter;
