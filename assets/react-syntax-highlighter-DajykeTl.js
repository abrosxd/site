import { c as core } from "./lowlight-Dlp8kLns.js";
import { a as React } from "./react-DzdCQBZn.js";
import { _ as _extends, a as _defineProperty, b as _objectWithoutProperties, d as _toConsumableArray } from "./@babel-CnC3wJ3w.js";
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join(".");
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread$1(_objectSpread$1({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
  if (type === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split(".").forEach(function(className2) {
          if (!classes.includes(className2)) classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(className) || void 0,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ React.createElement(TagName, _extends({
      key
    }, props), children);
  }
}
const checkForListedLanguage = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};
var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
  return lines.map(function(_, i) {
    var number = i + startingLineNumber;
    return /* @__PURE__ */ React.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === "function" ? style(number) : style
    }, "".concat(number, "\n"));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
    "float": "left",
    paddingRight: "10px"
  } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return /* @__PURE__ */ React.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, "").split("\n"),
    style: numberStyle,
    startingLineNumber
  }));
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: inlineLineNumberStyle
    },
    children: [{
      type: "text",
      value: lineNumber
    }]
  };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = {
    display: "inline-block",
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  };
  var customLineNumberStyle = typeof lineNumberStyle === "function" ? lineNumberStyle(lineNumber) : lineNumberStyle;
  var assembledStyle = _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === "function" ? lineProps(lineNumber) : lineProps;
  properties["className"] = className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread(_objectSpread({}, properties.style), {}, {
      display: "flex"
    });
  }
  return {
    type: "element",
    tagName: "span",
    properties,
    children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === "text") {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function(i2) {
        return newTree.push(i2);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines
    });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  var _loop = function _loop2() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split("\n");
      splitValue.forEach(function(text, i) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: "text",
          value: "".concat(text, "\n")
        };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          var _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          var lastLineInPreviousSpan = {
            type: "text",
            value: "".concat(text)
          };
          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];
            var _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== "undefined";
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);
    if (language === "text") {
      return {
        value: defaultCodeValue,
        language: "text"
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== "text" ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
function highlight(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter2(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : void 0,
      style: _objectSpread(_objectSpread({}, style['code[class*="language-"]']), style['code[class*="language-'.concat(language, '"]')])
    } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /* @__PURE__ */ React.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    };
    var generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs";
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: "pre-wrap"
      });
    } else {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: "pre"
      });
    }
    if (!astGenerator) {
      return /* @__PURE__ */ React.createElement(PreTag, preProps, allLineNumbers, /* @__PURE__ */ React.createElement(CodeTag, codeTagProps, code));
    }
    if (wrapLines === void 0 && renderer || wrapLongLines) wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: "text",
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return /* @__PURE__ */ React.createElement(PreTag, preProps, /* @__PURE__ */ React.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows,
      stylesheet: style,
      useInlineStyles
    })));
  };
}
var SyntaxHighlighter = highlight(core, {});
SyntaxHighlighter.registerLanguage = core.registerLanguage;
const arta = {
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0.5em",
    "background": "#222",
    "color": "#aaa"
  },
  "hljs-subst": {
    "color": "#aaa"
  },
  "hljs-section": {
    "color": "#fff",
    "fontWeight": "bold"
  },
  "hljs-comment": {
    "color": "#444"
  },
  "hljs-quote": {
    "color": "#444"
  },
  "hljs-meta": {
    "color": "#444"
  },
  "hljs-string": {
    "color": "#ffcc33"
  },
  "hljs-symbol": {
    "color": "#ffcc33"
  },
  "hljs-bullet": {
    "color": "#ffcc33"
  },
  "hljs-regexp": {
    "color": "#ffcc33"
  },
  "hljs-number": {
    "color": "#00cc66"
  },
  "hljs-addition": {
    "color": "#00cc66"
  },
  "hljs-built_in": {
    "color": "#32aaee"
  },
  "hljs-builtin-name": {
    "color": "#32aaee"
  },
  "hljs-literal": {
    "color": "#32aaee"
  },
  "hljs-type": {
    "color": "#32aaee"
  },
  "hljs-template-variable": {
    "color": "#32aaee"
  },
  "hljs-attribute": {
    "color": "#32aaee"
  },
  "hljs-link": {
    "color": "#32aaee"
  },
  "hljs-keyword": {
    "color": "#6644aa"
  },
  "hljs-selector-tag": {
    "color": "#6644aa"
  },
  "hljs-name": {
    "color": "#6644aa"
  },
  "hljs-selector-id": {
    "color": "#6644aa"
  },
  "hljs-selector-class": {
    "color": "#6644aa"
  },
  "hljs-title": {
    "color": "#bb1166"
  },
  "hljs-variable": {
    "color": "#bb1166"
  },
  "hljs-deletion": {
    "color": "#bb1166"
  },
  "hljs-template-tag": {
    "color": "#bb1166"
  },
  "hljs-doctag": {
    "fontWeight": "bold"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  }
};
export {
  SyntaxHighlighter as S,
  arta as a
};
