import {body} from "express-validator"

export const PostValidate = [
    body("title","պետք է լրացնել առնվազն 3 տառ").isLength({min:3})
]