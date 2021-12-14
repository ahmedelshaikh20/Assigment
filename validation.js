const Joi = require('joi');
const { Fedex, Ups } = require('./constants');
const errorMessages = require('./error_custom_messages');

const schemas = {
  FedexBody: Joi.object().keys({
    serviceId: Joi.string()
      .valid('fedexAir', 'fedexGround')
      .required()
      .messages({
        'string.empty': errorMessages('ServiceId').EmptyString,
        'any.required': errorMessages('ServiceId').Required,
        'any.only': errorMessages('ServiceId').InvalidString,
      }),
    packageDimensions: Joi.object().keys({
      width: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Width').EmptyString,
          'any.required': errorMessages('Width').EmptyString,
          'number.min': errorMessages('Width').MinRequired,
        }),
      height: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Height').EmptyString,
          'any.required': errorMessages('Height').Required,
          'number.min': errorMessages('Height').MinRequired,
        }),
      length: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Length').EmptyString,
          'any.required': errorMessages('Length').Required,
          'number.min': errorMessages('Length').MinRequired,
        }),
      unit: Joi.string()
        .valid('cm')
        .required()
        .messages({
          'any.empty': errorMessages('Unit in dimensions').EmptyString,
          'any.required': errorMessages('Unit in dimensions').Required,
          'any.only': errorMessages('Unit in dimensions').InvalidUnit,
        }),
    }),
    packageWeight: Joi.object().keys({
      weight: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Weight').EmptyString,
          'any.required': errorMessages('Weight').Required,
          'any.only ': errorMessages('Weight').InvalidUnit,
          'number.min': errorMessages('Weight').MinRequired,
        }),
      unit: Joi.string()
        .valid('gram')
        .required()
        .messages({
          'any.empty': errorMessages('Unit in Weight').EmptyString,
          'any.required': errorMessages('Unit in Weight').Required,
          'any.only': errorMessages('Unit in Weight').InvalidUnit,
        }),
    }),
  }),
  UpsBody: Joi.object().keys({
    serviceId: Joi.string()
      .valid('UPSExpress', 'UPS2DAY')
      .required()
      .messages({
        'string.empty': errorMessages('ServiceId').EmptyString,
        'any.required': errorMessages('ServiceId').Required,
        'any.only': errorMessages('ServiceId').InvalidString,
      }),
    packageDimensions: Joi.object().keys({
      width: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Width').EmptyString,
          'any.required': errorMessages('Width').EmptyString,
          'any.only ': errorMessages('Width').InvalidString,
          'any.min': errorMessages('Width').MinRequired,
        }),
      height: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Height').EmptyString,
          'any.required': errorMessages('Height').Required,
          'any.only ': errorMessages('Height').InvalidString,
          'any.min': errorMessages('Height').MinRequired,
        }),
      length: Joi.number()
        .required()
        .min(1)
        .messages({
          'any.empty': errorMessages('Length').EmptyString,
          'any.required': errorMessages('Length').Required,
          'any.only ': errorMessages('Length').InvalidString,
          'any.min': errorMessages('Length').MinRequired,
        }),
      unit: Joi.string()
        .valid('inch')
        .required()
        .messages({
          'any.empty': errorMessages('Unit in dimensions').EmptyString,
          'any.required': errorMessages('Unit in dimensions').Required,
          'any.only': errorMessages('Unit in dimensions').InvalidUnit,
        }),
    }),
    packageWeight: Joi.object().keys({
      weight: Joi.number()
        .min(1)
        .required()
        .messages({
          'any.empty': errorMessages('Unit').EmptyString,
          'any.required': errorMessages('Unit').Required,
          'any.only ': errorMessages('Unit').InvalidString,
          'any.min': errorMessages('Weight').MinRequired,
        }),
      unit: Joi.string()
        .valid('pound')
        .required()
        .messages({
          'any.empty': errorMessages('Unit in Weight').EmptyString,
          'any.required': errorMessages('Unit in Weight').Required,
          'any.only': errorMessages('Unit in Weight').InvalidUnit,
        }),
    }),
  }),
};
module.exports = schemas;
