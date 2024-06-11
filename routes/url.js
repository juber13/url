import { Router } from "express";

const router = Router();

import { handelReuqestUrl, sendShortUrl } from '../controller/url.js'

router.post('/url', handelReuqestUrl);
router.get('/:id', sendShortUrl);


export {router};