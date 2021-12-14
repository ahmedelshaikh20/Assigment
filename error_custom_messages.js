const ErrorMessage = (name) => {
  const typeofErrors = {
    EmptyString: name + ' should be a type of text and not empty',
    InvalidString: name + ' is not valid,You Should enter a valid ' + name,
    Required: name + ' is required',
    InvalidUnit: name + ' is not valid unit for this shipment service',
    Notnumber: name + ' isnot valid number,You should enter valid number',
    MinRequired: name + ' can not be less than 1',
  };
  return typeofErrors;
};

module.exports = ErrorMessage;
