/**
 * Created by innovaapps on 14/03/2017.
 */

import {Router, Request , Response} from 'express';
import ws = require ('../controllers/ws/ws');
var router = Router();
// private static instance : ws = new ws();

// console.log('servidor escuchando en el puerto 3000..');

router.get('/ws', (req : Request, res : Response) =>
{
    res.render('index');

    // res.send('signup called');
    // res.status(404).send('disculpa, no se encontró la página.')
});

router.post('/ws', (req : Request, res : Response) =>
{
    res.send('signup called');
    // res.status(404).send('disculpa, no se encontró la página.')
});


export default router;