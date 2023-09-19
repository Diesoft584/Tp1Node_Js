import { NextFunction,Request,Response } from "express";
import joi from 'joi'

export function validateEstrellaBody(req: Request, res: Response, next: NextFunction){
    const {body} = req
    const schema = joi.object({
        id:joi.number().integer().required(),
        name: joi.string(). required(),
        type:joi.string(). required(),
        distance:joi.string(). required(),
        mass:joi.string(). required(),
        radius:joi.string(). required(),
        temperature:joi.string(). required(),
        luminosity:joi.string(). required(),
        age:joi.string(). required(),
        composition:joi.object({
            hydrogen: joi.string().required(),
            helium: joi.string().required(),
            otros_elementos: joi.string().required()
        }).required(),              
        stellar_history:joi.string(). required(),
        alias: joi.string(),
    })

    const {error, value} =  schema.validate(body)
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }
      next()
}