const decoratorValidator = (fn, schema, argsType) => {
    return async function (event) {
        const data = JSON.parse(event[argsType])
        // abortEarly === mostra todos os erros de uma vez
        const { error, value } = schema.validate(data, { abortEarly: true })

        // isso faz alterar a instancia do objeto para o valor validado
        event[argsType] = value

        if (!error) return fn.apply(this, arguments);

        return {
            statusCode: 422, // Unprocessable Entity
            body: error.message
        }
    }
}
module.exports = decoratorValidator;