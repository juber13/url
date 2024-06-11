

import { nanoid } from "nanoid";
import urlModel from "../models/url.js";

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

const handelReuqestUrl = async (req, res) => {
    const  longUrl = req.body.url;
    const shortId = nanoid(6);
    if (!longUrl) return res.status(400).json({ error: "Long Url required" });
    const entry = await urlModel.create({ longUrl , shortId });

    return res.status(200).json({
        entry
    })
}


const sendShortUrl = async (req, res) => {
    const { id } = req.params;
    const findUrl = await urlModel.findOne({id});
    if(!findUrl) return res.status(404).json({error : "Not found"});
    res.redirect(findUrl.longUrl)
}

export { handelReuqestUrl, sendShortUrl };