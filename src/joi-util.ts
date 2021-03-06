import { error } from '@beecode/msh-node-error'
import { ObjectSchema, Schema, ValidationOptions } from 'joi'

export type joiUtilOptions = {
  logger: any
}

export const joiUtil = {
  /**
   * Validate and clean object
   * @param {Partial<T>} objectToValidate
   * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
   * @param {joiUtilOptions | undefined} joiUtilOptions
   * @returns {T} expected object after validation
   */
  sanitize: <T>(objectToValidate: Partial<T>, schema: Schema | ObjectSchema<T>, joiUtilOptions?: joiUtilOptions): T => {
    return joiUtil._validate<T>(objectToValidate, schema, { stripUnknown: true }, joiUtilOptions)
  },
  /**
   * Only validate properties specified in validation schema
   * @param {Partial<T>} objectToValidate
   * @param {Joi.Schema | ObjectSchema<T>} schema
   * @param {joiUtilOptions | undefined} joiUtilOptions
   * @returns {T} expected object after validation
   */
  validate: <T>(objectToValidate: Partial<T>, schema: Schema | ObjectSchema<T>, joiUtilOptions?: joiUtilOptions): T => {
    return joiUtil._validate<T>(objectToValidate, schema, {}, joiUtilOptions)
  },
  _validate: <T>(
    objectToValidate: Partial<T>,
    schema: Schema | ObjectSchema<T>,
    validationOptions: ValidationOptions,
    options?: joiUtilOptions
  ): T => {
    const { error: validationError, value, warning } = schema.validate(objectToValidate, validationOptions)
    if (validationError) throw error.client.badRequest(validationError.message.split('"').join("'"))
    if (warning && options?.logger?.warn) options.logger.warn('joiValidationUtil._validate', warning)
    return value as T
  },
}
