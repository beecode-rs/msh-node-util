"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUtil = void 0;
const msh_node_error_1 = require("@beecode/msh-node-error");
exports.validationUtil = {
    /**
     * Validate and clean object
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {validationUtilOptions | undefined} validationUtilOptions
     * @returns {T} expected object after validation
     */
    sanitize: (objectToValidate, schema, validationUtilOptions) => {
        return exports.validationUtil._validate(objectToValidate, schema, { stripUnknown: true }, validationUtilOptions);
    },
    /**
     * Only validate properties specified in validation schema
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | ObjectSchema<T>} schema
     * @param {validationUtilOptions | undefined} validationUtilOptions
     * @returns {T} expected object after validation
     */
    validate: (objectToValidate, schema, validationUtilOptions) => {
        return exports.validationUtil._validate(objectToValidate, schema, {}, validationUtilOptions);
    },
    _validate: (objectToValidate, schema, validationOptions = {}, options) => {
        var _a;
        const { error: validationError, value, warning } = schema.validate(objectToValidate, validationOptions);
        if (validationError)
            throw msh_node_error_1.error.client.badRequest(validationError.message.split('"').join("'"));
        if (warning && ((_a = options === null || options === void 0 ? void 0 : options.logger) === null || _a === void 0 ? void 0 : _a.warn))
            options.logger.warn('validationUtil._validate', warning);
        return value;
    },
};
//# sourceMappingURL=validation-util.js.map