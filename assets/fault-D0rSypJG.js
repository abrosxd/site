import { f as formatExports } from "./format-CP-d5KQu.js";
var formatter = formatExports;
var fault = create(Error);
var fault_1 = fault;
fault.eval = create(EvalError);
fault.range = create(RangeError);
fault.reference = create(ReferenceError);
fault.syntax = create(SyntaxError);
fault.type = create(TypeError);
fault.uri = create(URIError);
fault.create = create;
function create(EConstructor) {
  FormattedError.displayName = EConstructor.displayName || EConstructor.name;
  return FormattedError;
  function FormattedError(format) {
    if (format) {
      format = formatter.apply(null, arguments);
    }
    return new EConstructor(format);
  }
}
export {
  fault_1 as f
};
