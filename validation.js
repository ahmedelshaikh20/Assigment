const Joi = require('joi'); 
const {Fedex , Ups}=require('./constants')
const errorMessages = require('./error_custom_messages')

const schemas={
FedexBody:
Joi.object().keys({
    serviceType:Joi.string().valid('Fedex').required().messages({
        'string.empty': errorMessages("ServiceType").EmptyString,
        'any.required': errorMessages("ServiceType").Required,
        'any.invalid ':errorMessages("ServiceType").InvalidString
      }),
    serviceId: Joi.string().valid('fedexAir','fedexGround').required().messages({
        'string.empty': errorMessages("ServiceId").EmptyString,
        'any.required': errorMessages("ServiceId").Required,
        'any.invalid ':errorMessages("ServiceId").InvalidString
      }),
    packageDimensions:Joi.object().keys({
        width: Joi.number().required().messages({
            'any.empty': errorMessages("Width").EmptyString,
            'any.required': errorMessages("Width").EmptyString,
            'any.invalid ':errorMessages("Width").InvalidString
          }),
        height:Joi.number().required().messages({
            'any.empty': errorMessages("Height").EmptyString,
            'any.required': errorMessages("Height").Required,
            'any.invalid ':errorMessages("Height").InvalidString
          }),
        length:Joi.number().required().messages({
            'any.empty': errorMessages("Length").EmptyString,
            'any.required': errorMessages("Length").Required,
            'any.invalid ':errorMessages("Length").InvalidString
          }),
        unit:Joi.string().valid('cm').required().messages({
            'any.empty': errorMessages("Unit in dimensions").EmptyString,
            'any.required': errorMessages("Unit in dimensions").Required,
            'any.invalid ':errorMessages("Unit in dimensions").InvalidUnit
          })
    }),
    packageWeight:Joi.object().keys({
        weight:Joi.number().required().messages({
            'any.empty': errorMessages("Unit in Weight").EmptyString,
            'any.required': errorMessages("Unit in Weight").Required,
            'any.invalid ':errorMessages("Unit in Weight").InvalidUnit
          })
    })
  }),
  UpsBody:
  Joi.object().keys({
      serviceType:Joi.string().valid('Ups').required().messages({
          'string.empty': errorMessages("ServiceType").EmptyString,
          'any.required': errorMessages("ServiceType").Required,
          'any.invalid ':errorMessages("ServiceType").InvalidString
        }),
      serviceId: Joi.string().valid('UPSExpress','UPS2DAY').required().messages({
          'string.empty': errorMessages("ServiceId").EmptyString,
          'any.required': errorMessages("ServiceId").Required,
          'any.invalid ':errorMessages("ServiceId").InvalidString
        }),
      packageDimensions:Joi.object().keys({
          width: Joi.number().required().messages({
              'any.empty': errorMessages("Width").EmptyString,
              'any.required': errorMessages("Width").EmptyString,
              'any.invalid ':errorMessages("Width").InvalidString
            }),
          height:Joi.number().required().messages({
              'any.empty': errorMessages("Height").EmptyString,
              'any.required': errorMessages("Height").Required,
              'any.invalid ':errorMessages("Height").InvalidString
            }),
          length:Joi.number().required().messages({
              'any.empty': errorMessages("Length").EmptyString,
              'any.required': errorMessages("Length").Required,
              'any.invalid ':errorMessages("Length").InvalidString
            }),
          unit:Joi.string().valid('inch').required().messages({
              'any.empty': errorMessages("Unit in dimensions").EmptyString,
              'any.required': errorMessages("Unit in dimensions").Required,
              'any.invalid ':errorMessages("Unit in dimensions").InvalidUnit
            })
      }),
      packageWeight:Joi.object().keys({
          weight:Joi.number().required().messages({
              'any.empty': errorMessages("Unit").EmptyString,
              'any.required': errorMessages("Unit").Required,
              'any.invalid ':errorMessages("Unit").InvalidString
            }),
            unit:Joi.string().valid('pound').required().messages({
                'any.empty': errorMessages("Unit in Weight").EmptyString,
                'any.required': errorMessages("Unit in Weight").Required,
                'any.invalid ':errorMessages("Unit in Wegiht").InvalidUnit
              })
      })
    })}
module.exports = schemas


