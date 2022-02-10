import { 
    Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure
} from "vee-validate"

import {
    required, min, max, alpha_spaces as alphaSpaces, email, 
    min_value as minVal, max_value as maxValue, confirmed,
    not_one_of as excluded,
} from '@vee-validate/rules'

export default {
    install(app){
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('tos', required)
        defineRule('min', min)
        defineRule('max',max)
        defineRule('alpha_spaces', alphaSpaces)
        defineRule('email', email)
        defineRule('min_value', minVal)
        defineRule('max_value', maxValue)
        defineRule('passwords_mismatch', confirmed)
        defineRule('excluded', excluded)
        defineRule('country_excluded', excluded)

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `the field ${ctx.field} is required`,
                    min: `the fiel ${ctx.field} is invalid`,
                    max: `the fiel ${ctx.field} is invalid`,
                    alpha_spaces: `the fiel ${ctx.field} is invalid`,
                    email: `the fiel ${ctx.field} is invalid`,
                    min_value: `the fiel ${ctx.field} is invalid`,
                    max_value: `the fiel ${ctx.field} is invalid`,
                    excluded: `the fiel ${ctx.field} is invalid`,
                    country_excluded: `We dont accepts users from this location!`,
                    passwords_mismatch: `password dont match`,
                    tos: `you must accept the terms of service`
                };
                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `the field ${ctx.field} is invalid`
                return message
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true

        })
    }
}