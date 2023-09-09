"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[6591],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7896),r=(a(2784),a(876));const o={},i="Validation",s={unversionedId:"usage/validation",id:"version-3.2.1/usage/validation",title:"Validation",description:"When the form is submitted, the form data is validated to conform to the given JSON schema; this library uses the ajv validator by default.",source:"@site/versioned_docs/version-3.2.1/usage/validation.md",sourceDirName:"usage",slug:"/usage/validation",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/validation",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-3.2.1/usage/validation.md",tags:[],version:"3.2.1",frontMatter:{},sidebar:"docs",previous:{title:"Themes",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/themes"},next:{title:"Widgets",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/widgets"}},l={},m=[{value:"Live validation",id:"live-validation",level:2},{value:"HTML5 Validation",id:"html5-validation",level:2},{value:"Custom validation rules",id:"custom-validation-rules",level:2},{value:"Custom error messages",id:"custom-error-messages",level:2},{value:"Error List Display",id:"error-list-display",level:2},{value:"The case of empty strings",id:"the-case-of-empty-strings",level:2},{value:"Custom meta schema validation",id:"custom-meta-schema-validation",level:2},{value:"additionalMetaSchemas",id:"additionalmetaschemas",level:3},{value:"customFormats",id:"customformats",level:2},{value:"Async validation",id:"async-validation",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation"},"Validation"),(0,r.kt)("p",null,"When the form is submitted, the form data is validated to conform to the given JSON schema; this library uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"ajv")," validator by default."),(0,r.kt)("h2",{id:"live-validation"},"Live validation"),(0,r.kt)("p",null,"By default, form data are only validated when the form is submitted or when a new ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," prop is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component."),(0,r.kt)("p",null,"You can enable live form data validation by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"liveValidate")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component, and set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Then, every time a value changes within the form data tree (e.g. the user entering a character in a field), a validation operation is performed, and the validation results are reflected into the form state."),(0,r.kt)("p",null,"Be warned that this is an expensive strategy, with possibly strong impact on performances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: ["string"],\n  const: "test"\n};\n\nconst formData = "a";\n\nrender((\n  <Form schema={schema} formData={formData} liveValidate />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"html5-validation"},"HTML5 Validation"),(0,r.kt)("p",null,"By default, the form uses HTML5 validation. This may cause unintuitive results because the HTML5 validation errors (such as when a field is ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),") may be displayed before the form is submitted, and thus these errors will display differently from the react-jsonschema-form validation errors. You can turn off HTML validation by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"noHtml5Validate")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "object",\n  properties: {\n    name: {\n      type: "string",\n      required: true\n    }\n  }\n};\n\nrender((\n  <Form schema={schema} noHtml5Validate />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"custom-validation-rules"},"Custom validation rules"),(0,r.kt)("p",null,"Form data is always validated against the JSON schema."),(0,r.kt)("p",null,"But it is possible to define your own custom validation rules. This is especially useful when the validation depends on several interdependent fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function validate(formData, errors) {\n  if (formData.pass1 !== formData.pass2) {\n    errors.pass2.addError("Passwords don\'t match");\n  }\n  return errors;\n}\n\nconst schema = {\n  type: "object",\n  properties: {\n    pass1: {type: "string", minLength: 3},\n    pass2: {type: "string", minLength: 3},\n  }\n};\n\nrender((\n  <Form schema={schema}\n        validate={validate} />\n), document.getElementById("app"));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notes:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"validate()")," function must ",(0,r.kt)("strong",{parentName:"li"},"always")," return the ",(0,r.kt)("inlineCode",{parentName:"li"},"errors")," object\nreceived as second argument."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"validate()")," function is called ",(0,r.kt)("strong",{parentName:"li"},"after")," the JSON schema validation."))),(0,r.kt)("h2",{id:"custom-error-messages"},"Custom error messages"),(0,r.kt)("p",null,"Validation error messages are provided by the JSON Schema validation by default. If you need to change these messages or make any other modifications to the errors from the JSON Schema validation, you can define a transform function that receives the list of JSON Schema errors and returns a new list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function transformErrors(errors) {\n  return errors.map(error => {\n    if (error.name === "pattern") {\n      error.message = "Only digits are allowed"\n    }\n    return error;\n  });\n}\n\nconst schema = {\n  type: "object",\n  properties: {\n    onlyNumbersString: {type: "string", pattern: "^\\\\d*$"},\n  }\n};\n\nrender((\n  <Form schema={schema}\n        transformErrors={transformErrors} />\n), document.getElementById("app"));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notes:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"transformErrors()")," function must return the list of errors. Modifying the list in place without returning it will result in an error."))),(0,r.kt)("p",null,"Each element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"errors")," list passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"transformErrors")," has the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),': name of the error, for example, "required" or "minLength"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),': message, for example, "is a required property" or "should NOT be shorter than 3 characters"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),": an object with the error params returned by ajv (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ajv-validator/ajv/tree/6a671057ea6aae690b5967ee26a0ddf8452c6297#error-parameters"},"see doc")," for more info)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"property"),": a string in Javascript property accessor notation to the data path of the field with the error. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},".name")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"['first-name']"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stack"),': full error name, for example ".name is a required property".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaPath"),": JSON pointer to the schema of the keyword that failed validation. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"#/fields/firstName/required"),". (Note: this may sometimes be wrong due to a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ajv-validator/ajv/issues/512"},"bug in ajv"),").")),(0,r.kt)("h2",{id:"error-list-display"},"Error List Display"),(0,r.kt)("p",null,"To take control over how the form errors are displayed, you can define an ",(0,r.kt)("em",{parentName:"p"},"error list template")," for your form. This list is the form global error list that appears at the top of your forms."),(0,r.kt)("p",null,"An error list template is basically a React stateless component being passed errors as props so you can render them as you like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function ErrorListTemplate(props) {\n  const { errors } = props;\n  return (\n    <div>\n      <h2>Custom error list</h2>\n      <ul>\n        {errors.map(error => (\n            <li key={error.stack}>\n              {error.stack}\n            </li>\n          ))}\n      </ul>\n    </div>\n  );\n}\n\nconst schema = {\n  type: "string",\n  const: "test"\n};\n\nrender((\n  <Form schema={schema}\n        showErrorList={true}\n        formData={""}\n        liveValidate\n        ErrorList={ErrorListTemplate} />\n), document.getElementById("app"));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorList")," template will only render when ",(0,r.kt)("inlineCode",{parentName:"p"},"showErrorList")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,"The following props are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorList")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"errors"),": An array of the errors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"errorSchema"),": The errorSchema constructed by ",(0,r.kt)("inlineCode",{parentName:"li"},"Form"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema"),": The schema that was passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"Form"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uiSchema"),": The uiSchema that was passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"Form"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formContext"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"formContext")," object that you passed to Form.")),(0,r.kt)("h2",{id:"the-case-of-empty-strings"},"The case of empty strings"),(0,r.kt)("p",null,"When a text input is empty, the field in form data is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". String fields that use ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," widget will have an empty option at the top of the options list that when selected will result in the field being ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,"One consequence of this is that if you have an empty string in your ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," array, selecting that option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," input will cause the field to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", not an empty string."),(0,r.kt)("p",null,"If you want to have the field set to a default value when empty you can provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:emptyValue")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema")," object."),(0,r.kt)("h2",{id:"custom-meta-schema-validation"},"Custom meta schema validation"),(0,r.kt)("p",null,"To have your schemas validated against any other meta schema than draft-07 (the current version of ",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON Schema"),"), make sure your schema has a ",(0,r.kt)("inlineCode",{parentName:"p"},"$schema")," attribute that enables the validator to use the correct meta schema. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  ...\n}\n')),(0,r.kt)("p",null,"Note that react-jsonschema-form only supports the latest version of JSON Schema, draft-07, by default. To support additional meta schemas pass them through the ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalMetaSchemas")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component."),(0,r.kt)("h3",{id:"additionalmetaschemas"},"additionalMetaSchemas"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalMetaSchemas")," prop allows you to validate the form data against one (or more than one) JSON Schema meta schema, for example, JSON Schema draft-04. You can import a meta schema as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const metaSchemaDraft04 = require("ajv/lib/refs/json-schema-draft-04.json");\n')),(0,r.kt)("p",null,"In this example ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," passed as props to ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component can be validated against draft-07 (default) and by draft-04 (added), depending on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"$schema")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  type: "string"\n};\n\nreturn (<Form schema={schema} \n  additionalMetaSchemas={[metaSchemaDraft04]} />);\n')),(0,r.kt)("h2",{id:"customformats"},"customFormats"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.7"},"Pre-defined semantic formats")," are limited. react-jsonschema-form adds two formats, ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data-url"),", to support certain ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/version-3.2.1/usage/widgets"},"alternative widgets"),". You can add formats of your own through the ",(0,r.kt)("inlineCode",{parentName:"p"},"customFormats")," prop to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const schema = {\n  type: 'string',\n  format: 'phone-us'\n};\n\nconst customFormats = {\n  'phone-us': /\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{4}$/\n};\n\nrender((\n  <Form schema={schema} \n        customFormats={customFormats}/>\n), document.getElementById(\"app\"));\n")),(0,r.kt)("p",null,"Format values can be anything AJV\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv/tree/6a671057ea6aae690b5967ee26a0ddf8452c6297#addformatstring-name-stringregexpfunctionobject-format---ajv"},(0,r.kt)("inlineCode",{parentName:"a"},"addFormat")," method")," accepts."),(0,r.kt)("h2",{id:"async-validation"},"Async validation"),(0,r.kt)("p",null,"Handling async errors is an important part of many applications. Support for this is added in the form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraErrors")," prop."),(0,r.kt)("p",null,"For example, a request could be made to some backend when the user submits the form. If that request fails, the errors returned by the backend should be formatted like in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "object",\n  properties: {\n    foo: {\n      type: "string",\n    },\n    candy: {\n      type: "object",\n      properties: {\n        bar: {\n          type: "string",\n        }\n      }\n    }\n  }\n};\n\nconst extraErrors = {\n  foo: {\n    __errors: ["some error that got added as a prop"],\n  },\n  candy: {\n    bar: {\n    __errors: ["some error that got added as a prop"],\n    }\n  }\n};\n\nrender((\n  <Form schema={schema}\n        extraErrors={extraErrors} />\n), document.getElementById("app"));\n')),(0,r.kt)("p",null,'An important note is that these errors are "display only" and will not block the user from submitting the form again.'))}c.isMDXComponent=!0}}]);