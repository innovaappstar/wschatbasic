/**
 * Created by kenny on 30/03/2017.
 */
import {Router, Request , Response} from 'express';
var router = Router();

router.get('/', (req : Request, res : Response) =>
{
    res.render('index');
});

router.post('/', (req : Request, res : Response) =>
{
    res.send('signup called');
});

export default router;