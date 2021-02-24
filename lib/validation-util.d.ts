import { ObjectSchema, Schema, ValidationOptions } from 'joi';
export declare type validationUtilOptions = {
    logger: any;
};
export declare const validationUtil: {
    /**
     * Validate and clean object
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {validationUtilOptions | undefined} validationUtilOptions
     * @returns {T} expected object after validation
     */
    sanitize: <T>(objectToValidate: Partial<T>, schema: import("joi").AnySchema | import("joi").ArraySchema | import("joi").AlternativesSchema | import("joi").BinarySchema | import("joi").BooleanSchema | import("joi").DateSchema | import("joi").FunctionSchema | import("joi").NumberSchema | import("joi").StringSchema | import("joi").LinkSchema | import("joi").SymbolSchema | ObjectSchema<any> | ObjectSchema<T>, validationUtilOptions?: validationUtilOptions | undefined) => T;
    /**
     * Only validate properties specified in validation schema
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | ObjectSchema<T>} schema
     * @param {validationUtilOptions | undefined} validationUtilOptions
     * @returns {T} expected object after validation
     */
    validate: <T_1>(objectToValidate: Partial<T_1>, schema: import("joi").AnySchema | import("joi").ArraySchema | import("joi").AlternativesSchema | import("joi").BinarySchema | import("joi").BooleanSchema | import("joi").DateSchema | import("joi").FunctionSchema | import("joi").NumberSchema | import("joi").StringSchema | import("joi").LinkSchema | import("joi").SymbolSchema | ObjectSchema<any> | ObjectSchema<T_1>, validationUtilOptions?: validationUtilOptions | undefined) => T_1;
    _validate: <T_2>(objectToValidate: Partial<T_2>, schema: import("joi").AnySchema | import("joi").ArraySchema | import("joi").AlternativesSchema | import("joi").BinarySchema | import("joi").BooleanSchema | import("joi").DateSchema | import("joi").FunctionSchema | import("joi").NumberSchema | import("joi").StringSchema | import("joi").LinkSchema | import("joi").SymbolSchema | ObjectSchema<any> | ObjectSchema<T_2>, validationOptions?: ValidationOptions, options?: validationUtilOptions | undefined) => T_2;
};
//# sourceMappingURL=validation-util.d.ts.map