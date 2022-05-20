// Function for validation a give payload for give keys
// @param {Object} payload - Payload to verify
// @param {String/Array} keysToValidate - Keys which have to be validated for param
//    payload, can be String for single key or an array of keys
// @param {Function} cb - Callback which receives a single param which is true if
//    validation was successful and false if validation failed
// @return true if validation is successful or false if validation failed
export default function validatePayload(payload, keysToValidate, cb) {
  const validate = [];
  let isValid = false;

  // Check if payload has been passed
  if (payload === undefined) {
    if (cb !== undefined) cb(isValid);
    return isValid;
  }

  // Check if param keysToValidate is passed as an array of keys
  if (Array.isArray(keysToValidate)) validate.push(...keysToValidate);
  else validate.push(keysToValidate);

  // Check if key is included in payload
  isValid = validate.every((key) => Object.keys(payload).includes(key));

  if (isValid === false && process.env.NODE_ENV !== 'production') console.warn('Payload validation failed');

  // Check for callback and pass params
  if (cb !== undefined) cb(isValid);

  return isValid;
}
