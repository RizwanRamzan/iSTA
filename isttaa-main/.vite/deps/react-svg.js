import {
  _extends,
  _objectWithoutPropertiesLoose,
  _setPrototypeOf,
  require_react_is
} from "./chunk-CU63ZIAF.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/content-type/index.js
var require_content_type = __commonJS({
  "node_modules/content-type/index.js"(exports) {
    "use strict";
    var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
    var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/;
    var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;
    var QUOTE_REGEXP = /([\\"])/g;
    var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    exports.format = format;
    exports.parse = parse2;
    function format(obj) {
      if (!obj || typeof obj !== "object") {
        throw new TypeError("argument obj is required");
      }
      var parameters = obj.parameters;
      var type = obj.type;
      if (!type || !TYPE_REGEXP.test(type)) {
        throw new TypeError("invalid type");
      }
      var string2 = type;
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          if (!TOKEN_REGEXP.test(param)) {
            throw new TypeError("invalid parameter name");
          }
          string2 += "; " + param + "=" + qstring(parameters[param]);
        }
      }
      return string2;
    }
    function parse2(string2) {
      if (!string2) {
        throw new TypeError("argument string is required");
      }
      var header = typeof string2 === "object" ? getcontenttype(string2) : string2;
      if (typeof header !== "string") {
        throw new TypeError("argument string is required to be a string");
      }
      var index = header.indexOf(";");
      var type = index !== -1 ? header.slice(0, index).trim() : header.trim();
      if (!TYPE_REGEXP.test(type)) {
        throw new TypeError("invalid media type");
      }
      var obj = new ContentType(type.toLowerCase());
      if (index !== -1) {
        var key;
        var match;
        var value;
        PARAM_REGEXP.lastIndex = index;
        while (match = PARAM_REGEXP.exec(header)) {
          if (match.index !== index) {
            throw new TypeError("invalid parameter format");
          }
          index += match[0].length;
          key = match[1].toLowerCase();
          value = match[2];
          if (value.charCodeAt(0) === 34) {
            value = value.slice(1, -1);
            if (value.indexOf("\\") !== -1) {
              value = value.replace(QESC_REGEXP, "$1");
            }
          }
          obj.parameters[key] = value;
        }
        if (index !== header.length) {
          throw new TypeError("invalid parameter format");
        }
      }
      return obj;
    }
    function getcontenttype(obj) {
      var header;
      if (typeof obj.getHeader === "function") {
        header = obj.getHeader("content-type");
      } else if (typeof obj.headers === "object") {
        header = obj.headers && obj.headers["content-type"];
      }
      if (typeof header !== "string") {
        throw new TypeError("content-type header is missing from object");
      }
      return header;
    }
    function qstring(val) {
      var str = String(val);
      if (TOKEN_REGEXP.test(str)) {
        return str;
      }
      if (str.length > 0 && !TEXT_REGEXP.test(str)) {
        throw new TypeError("invalid parameter value");
      }
      return '"' + str.replace(QUOTE_REGEXP, "\\$1") + '"';
    }
    function ContentType(type) {
      this.parameters = /* @__PURE__ */ Object.create(null);
      this.type = type;
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/tslib/tslib.es6.mjs
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/@tanem/svg-injector/dist/svg-injector.esm.js
var import_content_type = __toESM(require_content_type());
var cache = /* @__PURE__ */ new Map();
var cloneSvg = function cloneSvg2(sourceSvg) {
  return sourceSvg.cloneNode(true);
};
var isLocal = function isLocal2() {
  return window.location.protocol === "file:";
};
var makeAjaxRequest = function makeAjaxRequest2(url, httpRequestWithCredentials, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    try {
      if (!/\.svg/i.test(url) && httpRequest.readyState === 2) {
        var contentType = httpRequest.getResponseHeader("Content-Type");
        if (!contentType) {
          throw new Error("Content type not found");
        }
        var type = (0, import_content_type.parse)(contentType).type;
        if (!(type === "image/svg+xml" || type === "text/plain")) {
          throw new Error("Invalid content type: ".concat(type));
        }
      }
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 404 || httpRequest.responseXML === null) {
          throw new Error(isLocal() ? "Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver." : "Unable to load SVG file: " + url);
        }
        if (httpRequest.status === 200 || isLocal() && httpRequest.status === 0) {
          callback(null, httpRequest);
        } else {
          throw new Error("There was a problem injecting the SVG: " + httpRequest.status + " " + httpRequest.statusText);
        }
      }
    } catch (error) {
      httpRequest.abort();
      if (error instanceof Error) {
        callback(error, httpRequest);
      } else {
        throw error;
      }
    }
  };
  httpRequest.open("GET", url);
  httpRequest.withCredentials = httpRequestWithCredentials;
  if (httpRequest.overrideMimeType) {
    httpRequest.overrideMimeType("text/xml");
  }
  httpRequest.send();
};
var requestQueue = {};
var queueRequest = function queueRequest2(url, callback) {
  requestQueue[url] = requestQueue[url] || [];
  requestQueue[url].push(callback);
};
var processRequestQueue = function processRequestQueue2(url) {
  var _loop_1 = function _loop_12(i2, len2) {
    setTimeout(function() {
      if (Array.isArray(requestQueue[url])) {
        var cacheValue = cache.get(url);
        var callback = requestQueue[url][i2];
        if (cacheValue instanceof SVGSVGElement) {
          callback(null, cloneSvg(cacheValue));
        }
        if (cacheValue instanceof Error) {
          callback(cacheValue);
        }
        if (i2 === requestQueue[url].length - 1) {
          delete requestQueue[url];
        }
      }
    }, 0);
  };
  for (var i = 0, len = requestQueue[url].length; i < len; i++) {
    _loop_1(i);
  }
};
var loadSvgCached = function loadSvgCached2(url, httpRequestWithCredentials, callback) {
  if (cache.has(url)) {
    var cacheValue = cache.get(url);
    if (cacheValue === void 0) {
      queueRequest(url, callback);
      return;
    }
    if (cacheValue instanceof SVGSVGElement) {
      callback(null, cloneSvg(cacheValue));
      return;
    }
  }
  cache.set(url, void 0);
  queueRequest(url, callback);
  makeAjaxRequest(url, httpRequestWithCredentials, function(error, httpRequest) {
    var _a;
    if (error) {
      cache.set(url, error);
    } else if (((_a = httpRequest.responseXML) === null || _a === void 0 ? void 0 : _a.documentElement) instanceof SVGSVGElement) {
      cache.set(url, httpRequest.responseXML.documentElement);
    }
    processRequestQueue(url);
  });
};
var loadSvgUncached = function loadSvgUncached2(url, httpRequestWithCredentials, callback) {
  makeAjaxRequest(url, httpRequestWithCredentials, function(error, httpRequest) {
    var _a;
    if (error) {
      callback(error);
    } else if (((_a = httpRequest.responseXML) === null || _a === void 0 ? void 0 : _a.documentElement) instanceof SVGSVGElement) {
      callback(null, httpRequest.responseXML.documentElement);
    }
  });
};
var idCounter = 0;
var uniqueId = function uniqueId2() {
  return ++idCounter;
};
var injectedElements = [];
var ranScripts = {};
var svgNamespace = "http://www.w3.org/2000/svg";
var xlinkNamespace = "http://www.w3.org/1999/xlink";
var injectElement = function injectElement2(el, evalScripts, renumerateIRIElements, cacheRequests, httpRequestWithCredentials, beforeEach, callback) {
  var elUrl = el.getAttribute("data-src") || el.getAttribute("src");
  if (!elUrl) {
    callback(new Error("Invalid data-src or src attribute"));
    return;
  }
  if (injectedElements.indexOf(el) !== -1) {
    injectedElements.splice(injectedElements.indexOf(el), 1);
    el = null;
    return;
  }
  injectedElements.push(el);
  el.setAttribute("src", "");
  var loadSvg = cacheRequests ? loadSvgCached : loadSvgUncached;
  loadSvg(elUrl, httpRequestWithCredentials, function(error, svg) {
    if (!svg) {
      injectedElements.splice(injectedElements.indexOf(el), 1);
      el = null;
      callback(error);
      return;
    }
    var elId = el.getAttribute("id");
    if (elId) {
      svg.setAttribute("id", elId);
    }
    var elTitle = el.getAttribute("title");
    if (elTitle) {
      svg.setAttribute("title", elTitle);
    }
    var elWidth = el.getAttribute("width");
    if (elWidth) {
      svg.setAttribute("width", elWidth);
    }
    var elHeight = el.getAttribute("height");
    if (elHeight) {
      svg.setAttribute("height", elHeight);
    }
    var mergedClasses = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], (svg.getAttribute("class") || "").split(" "), true), ["injected-svg"], false), (el.getAttribute("class") || "").split(" "), true))).join(" ").trim();
    svg.setAttribute("class", mergedClasses);
    var elStyle = el.getAttribute("style");
    if (elStyle) {
      svg.setAttribute("style", elStyle);
    }
    svg.setAttribute("data-src", elUrl);
    var elData = [].filter.call(el.attributes, function(at) {
      return /^data-\w[\w-]*$/.test(at.name);
    });
    Array.prototype.forEach.call(elData, function(dataAttr) {
      if (dataAttr.name && dataAttr.value) {
        svg.setAttribute(dataAttr.name, dataAttr.value);
      }
    });
    if (renumerateIRIElements) {
      var iriElementsAndProperties_1 = {
        clipPath: ["clip-path"],
        "color-profile": ["color-profile"],
        cursor: ["cursor"],
        filter: ["filter"],
        linearGradient: ["fill", "stroke"],
        marker: ["marker", "marker-start", "marker-mid", "marker-end"],
        mask: ["mask"],
        path: [],
        pattern: ["fill", "stroke"],
        radialGradient: ["fill", "stroke"]
      };
      var element_1;
      var elements_1;
      var properties_1;
      var currentId_1;
      var newId_1;
      Object.keys(iriElementsAndProperties_1).forEach(function(key) {
        element_1 = key;
        properties_1 = iriElementsAndProperties_1[key];
        elements_1 = svg.querySelectorAll(element_1 + "[id]");
        var _loop_1 = function _loop_12(a2, elementsLen2) {
          currentId_1 = elements_1[a2].id;
          newId_1 = currentId_1 + "-" + uniqueId();
          var referencingElements;
          Array.prototype.forEach.call(properties_1, function(property) {
            referencingElements = svg.querySelectorAll("[" + property + '*="' + currentId_1 + '"]');
            for (var b = 0, referencingElementLen = referencingElements.length; b < referencingElementLen; b++) {
              var attrValue = referencingElements[b].getAttribute(property);
              if (attrValue && !attrValue.match(new RegExp('url\\("?#' + currentId_1 + '"?\\)'))) {
                continue;
              }
              referencingElements[b].setAttribute(property, "url(#" + newId_1 + ")");
            }
          });
          var allLinks = svg.querySelectorAll("[*|href]");
          var links = [];
          for (var c = 0, allLinksLen = allLinks.length; c < allLinksLen; c++) {
            var href = allLinks[c].getAttributeNS(xlinkNamespace, "href");
            if (href && href.toString() === "#" + elements_1[a2].id) {
              links.push(allLinks[c]);
            }
          }
          for (var d = 0, linksLen = links.length; d < linksLen; d++) {
            links[d].setAttributeNS(xlinkNamespace, "href", "#" + newId_1);
          }
          elements_1[a2].id = newId_1;
        };
        for (var a = 0, elementsLen = elements_1.length; a < elementsLen; a++) {
          _loop_1(a);
        }
      });
    }
    svg.removeAttribute("xmlns:a");
    var scripts = svg.querySelectorAll("script");
    var scriptsToEval = [];
    var script;
    var scriptType;
    for (var i = 0, scriptsLen = scripts.length; i < scriptsLen; i++) {
      scriptType = scripts[i].getAttribute("type");
      if (!scriptType || scriptType === "application/ecmascript" || scriptType === "application/javascript" || scriptType === "text/javascript") {
        script = scripts[i].innerText || scripts[i].textContent;
        if (script) {
          scriptsToEval.push(script);
        }
        svg.removeChild(scripts[i]);
      }
    }
    if (scriptsToEval.length > 0 && (evalScripts === "always" || evalScripts === "once" && !ranScripts[elUrl])) {
      for (var l = 0, scriptsToEvalLen = scriptsToEval.length; l < scriptsToEvalLen; l++) {
        new Function(scriptsToEval[l])(window);
      }
      ranScripts[elUrl] = true;
    }
    var styleTags = svg.querySelectorAll("style");
    Array.prototype.forEach.call(styleTags, function(styleTag) {
      styleTag.textContent += "";
    });
    svg.setAttribute("xmlns", svgNamespace);
    svg.setAttribute("xmlns:xlink", xlinkNamespace);
    beforeEach(svg);
    if (!el.parentNode) {
      injectedElements.splice(injectedElements.indexOf(el), 1);
      el = null;
      callback(new Error("Parent node is null"));
      return;
    }
    el.parentNode.replaceChild(svg, el);
    injectedElements.splice(injectedElements.indexOf(el), 1);
    el = null;
    callback(null, svg);
  });
};
var SVGInjector = function SVGInjector2(elements, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.afterAll, afterAll = _c === void 0 ? function() {
    return void 0;
  } : _c, _d = _b.afterEach, afterEach = _d === void 0 ? function() {
    return void 0;
  } : _d, _e = _b.beforeEach, beforeEach = _e === void 0 ? function() {
    return void 0;
  } : _e, _f = _b.cacheRequests, cacheRequests = _f === void 0 ? true : _f, _g = _b.evalScripts, evalScripts = _g === void 0 ? "never" : _g, _h = _b.httpRequestWithCredentials, httpRequestWithCredentials = _h === void 0 ? false : _h, _j = _b.renumerateIRIElements, renumerateIRIElements = _j === void 0 ? true : _j;
  if (elements && "length" in elements) {
    var elementsLoaded_1 = 0;
    for (var i = 0, j = elements.length; i < j; i++) {
      injectElement(elements[i], evalScripts, renumerateIRIElements, cacheRequests, httpRequestWithCredentials, beforeEach, function(error, svg) {
        afterEach(error, svg);
        if (elements && "length" in elements && elements.length === ++elementsLoaded_1) {
          afterAll(elementsLoaded_1);
        }
      });
    }
  } else if (elements) {
    injectElement(elements, evalScripts, renumerateIRIElements, cacheRequests, httpRequestWithCredentials, beforeEach, function(error, svg) {
      afterEach(error, svg);
      afterAll(1);
      elements = null;
    });
  } else {
    afterAll(0);
  }
};

// node_modules/react-svg/dist/react-svg.esm.js
var PropTypes = __toESM(require_prop_types());
var React = __toESM(require_react());
var ownerWindow = function ownerWindow2(node) {
  var doc = (node == null ? void 0 : node.ownerDocument) || document;
  return doc.defaultView || window;
};
var shallowDiffers = function shallowDiffers2(a, b) {
  for (var i in a) {
    if (!(i in b)) {
      return true;
    }
  }
  for (var _i in b) {
    if (a[_i] !== b[_i]) {
      return true;
    }
  }
  return false;
};
var _excluded = ["afterInjection", "beforeInjection", "desc", "evalScripts", "fallback", "httpRequestWithCredentials", "loading", "renumerateIRIElements", "src", "title", "useRequestCache", "wrapper"];
var svgNamespace2 = "http://www.w3.org/2000/svg";
var xlinkNamespace2 = "http://www.w3.org/1999/xlink";
var ReactSVG = function(_React$Component) {
  _inheritsLoose(ReactSVG2, _React$Component);
  function ReactSVG2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.initialState = {
      hasError: false,
      isLoading: true
    };
    _this.state = _this.initialState;
    _this._isMounted = false;
    _this.reactWrapper = void 0;
    _this.nonReactWrapper = void 0;
    _this.refCallback = function(reactWrapper) {
      _this.reactWrapper = reactWrapper;
    };
    return _this;
  }
  var _proto = ReactSVG2.prototype;
  _proto.renderSVG = function renderSVG() {
    var _this2 = this;
    if (this.reactWrapper instanceof ownerWindow(this.reactWrapper).Node) {
      var _this$props = this.props, desc = _this$props.desc, evalScripts = _this$props.evalScripts, httpRequestWithCredentials = _this$props.httpRequestWithCredentials, renumerateIRIElements = _this$props.renumerateIRIElements, src = _this$props.src, title = _this$props.title, useRequestCache = _this$props.useRequestCache;
      var onError2 = this.props.onError;
      var beforeInjection2 = this.props.beforeInjection;
      var afterInjection2 = this.props.afterInjection;
      var wrapper = this.props.wrapper;
      var nonReactWrapper;
      var nonReactTarget;
      if (wrapper === "svg") {
        nonReactWrapper = document.createElementNS(svgNamespace2, wrapper);
        nonReactWrapper.setAttribute("xmlns", svgNamespace2);
        nonReactWrapper.setAttribute("xmlns:xlink", xlinkNamespace2);
        nonReactTarget = document.createElementNS(svgNamespace2, wrapper);
      } else {
        nonReactWrapper = document.createElement(wrapper);
        nonReactTarget = document.createElement(wrapper);
      }
      nonReactWrapper.appendChild(nonReactTarget);
      nonReactTarget.dataset.src = src;
      this.nonReactWrapper = this.reactWrapper.appendChild(nonReactWrapper);
      var handleError = function handleError2(error) {
        _this2.removeSVG();
        if (!_this2._isMounted) {
          onError2(error);
          return;
        }
        _this2.setState(function() {
          return {
            hasError: true,
            isLoading: false
          };
        }, function() {
          onError2(error);
        });
      };
      var afterEach = function afterEach2(error, svg) {
        if (error) {
          handleError(error);
          return;
        }
        if (_this2._isMounted) {
          _this2.setState(function() {
            return {
              isLoading: false
            };
          }, function() {
            try {
              afterInjection2(svg);
            } catch (afterInjectionError) {
              handleError(afterInjectionError);
            }
          });
        }
      };
      var beforeEach = function beforeEach2(svg) {
        svg.setAttribute("role", "img");
        if (desc) {
          var originalDesc = svg.querySelector(":scope > desc");
          if (originalDesc) {
            svg.removeChild(originalDesc);
          }
          var newDesc = document.createElement("desc");
          newDesc.innerHTML = desc;
          svg.prepend(newDesc);
        }
        if (title) {
          var originalTitle = svg.querySelector(":scope > title");
          if (originalTitle) {
            svg.removeChild(originalTitle);
          }
          var newTitle = document.createElement("title");
          newTitle.innerHTML = title;
          svg.prepend(newTitle);
        }
        try {
          beforeInjection2(svg);
        } catch (error) {
          handleError(error);
        }
      };
      SVGInjector(nonReactTarget, {
        afterEach,
        beforeEach,
        cacheRequests: useRequestCache,
        evalScripts,
        httpRequestWithCredentials,
        renumerateIRIElements
      });
    }
  };
  _proto.removeSVG = function removeSVG() {
    var _this$nonReactWrapper;
    if ((_this$nonReactWrapper = this.nonReactWrapper) != null && _this$nonReactWrapper.parentNode) {
      this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper);
      this.nonReactWrapper = null;
    }
  };
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.renderSVG();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this3 = this;
    if (shallowDiffers(_extends({}, prevProps), this.props)) {
      this.setState(function() {
        return _this3.initialState;
      }, function() {
        _this3.removeSVG();
        _this3.renderSVG();
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.removeSVG();
  };
  _proto.render = function render() {
    var _this$props2 = this.props;
    _this$props2.afterInjection;
    _this$props2.beforeInjection;
    _this$props2.desc;
    _this$props2.evalScripts;
    var Fallback = _this$props2.fallback;
    _this$props2.httpRequestWithCredentials;
    var Loading = _this$props2.loading;
    _this$props2.renumerateIRIElements;
    _this$props2.src;
    _this$props2.title;
    _this$props2.useRequestCache;
    var wrapper = _this$props2.wrapper, rest = _objectWithoutPropertiesLoose(_this$props2, _excluded);
    var Wrapper = wrapper;
    return React.createElement(Wrapper, _extends({}, rest, {
      ref: this.refCallback
    }, wrapper === "svg" ? {
      xmlns: svgNamespace2,
      xmlnsXlink: xlinkNamespace2
    } : {}), this.state.isLoading && Loading && React.createElement(Loading, null), this.state.hasError && Fallback && React.createElement(Fallback, null));
  };
  return ReactSVG2;
}(React.Component);
ReactSVG.defaultProps = {
  afterInjection: function afterInjection() {
    return void 0;
  },
  beforeInjection: function beforeInjection() {
    return void 0;
  },
  desc: "",
  evalScripts: "never",
  fallback: null,
  httpRequestWithCredentials: false,
  loading: null,
  onError: function onError() {
    return void 0;
  },
  renumerateIRIElements: true,
  title: "",
  useRequestCache: true,
  wrapper: "div"
};
ReactSVG.propTypes = {
  afterInjection: PropTypes.func,
  beforeInjection: PropTypes.func,
  desc: PropTypes.string,
  evalScripts: PropTypes.oneOf(["always", "once", "never"]),
  fallback: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  httpRequestWithCredentials: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  onError: PropTypes.func,
  renumerateIRIElements: PropTypes.bool,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  useRequestCache: PropTypes.bool,
  wrapper: PropTypes.oneOf(["div", "span", "svg"])
};
export {
  ReactSVG
};
/*! Bundled license information:

content-type/index.js:
  (*!
   * content-type
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-svg.js.map