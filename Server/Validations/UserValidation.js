import {body} from "express-validator"

export const UserValidation = [
    body("username","Անունը պետք է պարունակի առնվազն 3 սիմվոլ").isLength({min:3}),
    body("password","Գախտնավբառը պետք է պարունակի առնվազն 8 սիմվոլ").isLength({min:8})
]