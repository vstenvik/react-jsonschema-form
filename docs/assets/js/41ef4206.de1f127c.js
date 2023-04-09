"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={title:"<Form /> Props"},i="&lt;Form /> props",l={unversionedId:"api-reference/form-props",id:"api-reference/form-props",title:"<Form /> Props",description:"acceptcharset",source:"@site/docs/api-reference/form-props.md",sourceDirName:"api-reference",slug:"/api-reference/form-props",permalink:"/react-jsonschema-form/docs/api-reference/form-props",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/api-reference/form-props.md",tags:[],version:"current",frontMatter:{title:"<Form /> Props"},sidebar:"docs",previous:{title:"Chakra-UI Customization",permalink:"/react-jsonschema-form/docs/api-reference/themes/chakra-ui/uiSchema"},next:{title:"RJSF utility functions, constants and types",permalink:"/react-jsonschema-form/docs/api-reference/utility-functions"}},s={},m=[{value:"acceptcharset",id:"acceptcharset",level:2},{value:"action",id:"action",level:2},{value:"autoComplete",id:"autocomplete",level:2},{value:"autocomplete",id:"autocomplete-1",level:2},{value:"className",id:"classname",level:2},{value:"children",id:"children",level:2},{value:"customValidate",id:"customvalidate",level:2},{value:"disabled",id:"disabled",level:2},{value:"readonly",id:"readonly",level:2},{value:"enctype",id:"enctype",level:2},{value:"extraErrors",id:"extraerrors",level:2},{value:"ErrorList",id:"errorlist",level:2},{value:"fields",id:"fields",level:2},{value:"focusOnFirstError",id:"focusonfirsterror",level:2},{value:"formContext",id:"formcontext",level:2},{value:"formData",id:"formdata",level:2},{value:"id",id:"id",level:2},{value:"idPrefix",id:"idprefix",level:2},{value:"idSeparator",id:"idseparator",level:2},{value:"liveOmit",id:"liveomit",level:2},{value:"liveValidate",id:"livevalidate",level:2},{value:"method",id:"method",level:2},{value:"name",id:"name",level:2},{value:"noHtml5Validate",id:"nohtml5validate",level:2},{value:"noValidate",id:"novalidate",level:2},{value:"omitExtraData",id:"omitextradata",level:2},{value:"onBlur",id:"onblur",level:2},{value:"onChange",id:"onchange",level:2},{value:"onError",id:"onerror",level:2},{value:"onFocus",id:"onfocus",level:2},{value:"onSubmit",id:"onsubmit",level:2},{value:"schema",id:"schema",level:2},{value:"showErrorList",id:"showerrorlist",level:2},{value:"tagName",id:"tagname",level:2},{value:"target",id:"target",level:2},{value:"templates",id:"templates",level:2},{value:"transformErrors",id:"transformerrors",level:2},{value:"translateString",id:"translatestring",level:2},{value:"uiSchema",id:"uischema",level:2},{value:"validator",id:"validator",level:2},{value:"widgets",id:"widgets",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form--props"},"<","Form /> props"),(0,r.kt)("h2",{id:"acceptcharset"},"acceptcharset"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"accept-charset")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-accept-charset"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"action"},"action"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action"},"HTML attribute on the form"),"."),(0,r.kt)("p",null,"Note that this just renders the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," attribute in the HTML markup. There is no real network request being sent to this ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on submit. Instead, react-jsonschema-form catches the submit event with ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," and then calls the ",(0,r.kt)("a",{parentName:"p",href:"#onSubmit"},(0,r.kt)("inlineCode",{parentName:"a"},"onSubmit"))," function, where you could send a request programmatically with ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," or similar."),(0,r.kt)("h2",{id:"autocomplete"},"autoComplete"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"autocomplete")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"autocomplete-1"},"autocomplete"),(0,r.kt)("p",null,"Deprecated, same functionality as ",(0,r.kt)("inlineCode",{parentName:"p"},"autoComplete")),(0,r.kt)("h2",{id:"classname"},"className"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"children"},"children"),(0,r.kt)("p",null,"You can provide custom buttons to your form via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component's ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),". If no children are provided, by default a ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit")," button will be rendered."),(0,r.kt)("p",null,"For other ways to modify the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit")," button, see both the ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/api-reference/uiSchema#submitbuttonoptions"},"Submit Button Options")," and the ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-templates#submitbutton"},"SubmitButton Template")," documentation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nrender(\n  <Form schema={schema} validator={validator}>\n    <div>\n      <button type='submit'>Submit</button>\n      <button type='button'>Cancel</button>\n    </div>\n  </Form>,\n  document.getElementById('app')\n);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," There needs to be a button or an input with ",(0,r.kt)("inlineCode",{parentName:"p"},'type="submit"')," to trigger the form submission (and then the form validation).")),(0,r.kt)("h2",{id:"customvalidate"},"customValidate"),(0,r.kt)("p",null,"Formerly the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," prop.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"customValidate")," prop requires a function that specifies custom validation rules for the form.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/usage/validation"},"Validation")," for more information."),(0,r.kt)("h2",{id:"disabled"},"disabled"),(0,r.kt)("p",null,"It's possible to disable the whole form by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop. The ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop is then forwarded down to each field of the form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nrender(<Form schema={schema} validator={validator} disabled />, document.getElementById('app'));\n")),(0,r.kt)("p",null,"If you just want to disable some fields, see the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:disabled")," parameter in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),"."),(0,r.kt)("h2",{id:"readonly"},"readonly"),(0,r.kt)("p",null,"It's possible to make the whole form read-only by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," prop. The ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," prop is then forwarded down to each field of the form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nrender(<Form schema={schema} validator={validator} readonly />, document.getElementById('app'));\n")),(0,r.kt)("p",null,"If you just want to make some fields read-only, see the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:readonly")," parameter in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),"."),(0,r.kt)("h2",{id:"enctype"},"enctype"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"enctype")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"extraerrors"},"extraErrors"),(0,r.kt)("p",null,"This prop allows passing in custom errors that are augmented with the existing JSON Schema errors on the form; it can be used to implement asynchronous validation. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/usage/validation"},"Validation")," for more information."),(0,r.kt)("h2",{id:"errorlist"},"ErrorList"),(0,r.kt)("p",null,"You can pass a React component to this prop to customize how form errors are displayed. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/usage/validation"},"Validation")," for more information."),(0,r.kt)("h2",{id:"fields"},"fields"),(0,r.kt)("p",null,"Dictionary of registered fields in the form. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields"},"Custom Widgets and Fields")," for more information."),(0,r.kt)("h2",{id:"focusonfirsterror"},"focusOnFirstError"),(0,r.kt)("p",null,"If set to true, then the first field with an error will receive the focus when the form is submitted with errors."),(0,r.kt)("p",null,"You can also provide a custom callback function to handle what happens when this function is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, RJSFValidationError } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nconst focusOnError = (error: RJSFValidationError) => {\n  console.log('I need to handle focusing this error');\n};\n\nrender(<Form schema={schema} focusOnFirstError={focusOnError} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"formcontext"},"formContext"),(0,r.kt)("p",null,"You can provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"formContext")," object to the Form, which is passed down to all fields and widgets. Useful for implementing context aware fields and widgets."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/api-reference/themes/antd/uiSchema#formcontext"},"AntD Customization")," for formContext customizations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"antd")," theme.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema#formcontext"},"Semantic UI Customization")," for formContext customizations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"semantic-ui")," theme."),(0,r.kt)("h2",{id:"formdata"},"formData"),(0,r.kt)("p",null,"Often you'll want to prefill a form with existing data; this is done by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," prop object matching the schema."),(0,r.kt)("h2",{id:"id"},"id"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"idprefix"},"idPrefix"),(0,r.kt)("p",null,"To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids (the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nrender(<Form schema={schema} validator={validator} idPrefix={'rjsf_prefix'} />, document.getElementById('app'));\n")),(0,r.kt)("p",null,"This will render ",(0,r.kt)("inlineCode",{parentName:"p"},'<input id="rjsf_prefix_key">')," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'<input id="root_key">')),(0,r.kt)("h2",{id:"idseparator"},"idSeparator"),(0,r.kt)("p",null,"To avoid using a path separator that is present in field names, it is possible to change the separator used for ids (the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  properties: {\n    first: {\n      type: 'string',\n    },\n  },\n};\n\nrender(<Form schema={schema} validator={validator} idSeparator={'/'} />, document.getElementById('app'));\n")),(0,r.kt)("p",null,"This will render ",(0,r.kt)("inlineCode",{parentName:"p"},'<input id="root/first">')," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'<input\nid="root_first">')," when rendering ",(0,r.kt)("inlineCode",{parentName:"p"},"first"),"."),(0,r.kt)("h2",{id:"liveomit"},"liveOmit"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"omitExtraData")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"liveOmit")," are both set to true, then extra form data values that are not in any form field will be removed whenever ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," is called. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,r.kt)("h2",{id:"livevalidate"},"liveValidate"),(0,r.kt)("p",null,"If set to true, the form will perform validation and show any validation errors whenever the form data is changed, rather than just on submit."),(0,r.kt)("h2",{id:"method"},"method"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"name"},"name"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-name"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"nohtml5validate"},"noHtml5Validate"),(0,r.kt)("p",null,"If set to true, turns off HTML5 validation on the form. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,r.kt)("h2",{id:"novalidate"},"noValidate"),(0,r.kt)("p",null,"If set to true, turns off all validation. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,r.kt)("h2",{id:"omitextradata"},"omitExtraData"),(0,r.kt)("p",null,"If set to true, then extra form data values that are not in any form field will be removed whenever ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," is called. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,r.kt)("h2",{id:"onblur"},"onBlur"),(0,r.kt)("p",null,"Sometimes you may want to trigger events or modify external state when a field has been touched, so you can pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"onBlur")," handler, which will receive the id of the input that was blurred and the field value."),(0,r.kt)("h2",{id:"onchange"},"onChange"),(0,r.kt)("p",null,"If you plan on being notified every time the form data are updated, you can pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," handler, which will receive the same first argument as ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," any time a value is updated in the form.\nIt will also receive, as the second argument, the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the field which experienced the change.\nGenerally, this will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the field for which input data is modified.\nIn the case of adding/removing of new fields in arrays or objects with ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalProperties")," and the rearranging of items in arrays, the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," will be that of the array or object itself, rather than the item/field being added, removed or moved."),(0,r.kt)("h2",{id:"onerror"},"onError"),(0,r.kt)("p",null,"To react when submitted form data are invalid, pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," handler. It will be passed the list of encountered errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\nconst onError = (errors) => console.log('I have', errors.length, 'errors to fix');\n\nrender(<Form schema={schema} validator={validator} onError={onError} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"onfocus"},"onFocus"),(0,r.kt)("p",null,"Sometimes you may want to trigger events or modify external state when a field has been focused, so you can pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"onFocus")," handler, which will receive the id of the input that is focused and the field value."),(0,r.kt)("h2",{id:"onsubmit"},"onSubmit"),(0,r.kt)("p",null,"You can pass a function as the ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," prop of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component to listen to when the form is submitted and its data are valid.\nIt will be passed a result object having a ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," attribute, which is the valid form data you're usually after.\nThe original event will also be passed as a second parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\nconst onSubmit = ({ formData }, e) => console.log('Data submitted: ', formData);\n\nrender(<Form schema={schema} validator={validator} onSubmit={onSubmit} />, document.getElementById('app'));\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If there are fields in the ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," that are not represented in the schema, they will be retained by default. If you would like to remove those extra values on form submission, you may need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"omitExtraData")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"liveOmit")," props.")),(0,r.kt)("h2",{id:"schema"},"schema"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Required"),"! Form schema. We support JSON schema draft-07 by default. See ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/draft-07/json-schema-release-notes.html"},"Schema Reference")," for more information."),(0,r.kt)("h2",{id:"showerrorlist"},"showErrorList"),(0,r.kt)("p",null,"When this prop is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),", a list of errors (or the custom error list defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorList"),") will also show at the ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," of the form. When set to false, only inline input validation errors will be shown. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," by default. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/usage/validation"},"Validation")," for more information."),(0,r.kt)("h2",{id:"tagname"},"tagName"),(0,r.kt)("p",null,"It's possible to change the default ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," tag name to a different HTML tag, which can be helpful if you are nesting forms. However, native browser form behaviour, such as submitting when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," key is pressed, may no longer work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Form\n  tagName="div"\n  ...\n/>\n')),(0,r.kt)("p",null,"You can also provide a class/function component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const CustomForm = props => <form {...props} style={...} className={...} />\n// ...\n<Form\n  tagName={CustomForm}\n  ...\n/>\n")),(0,r.kt)("h2",{id:"target"},"target"),(0,r.kt)("p",null,"The value of this prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target"},"HTML attribute on the form"),"."),(0,r.kt)("h2",{id:"templates"},"templates"),(0,r.kt)("p",null,"Dictionary of registered templates in the form. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-templates"},"Custom Templates")," for more information."),(0,r.kt)("h2",{id:"transformerrors"},"transformErrors"),(0,r.kt)("p",null,"A function can be passed to this prop in order to make modifications to the default errors resulting from JSON Schema validation. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/usage/validation"},"Validation")," for more information."),(0,r.kt)("h2",{id:"translatestring"},"translateString"),(0,r.kt)("p",null,"Optional string translation function, if provided, allows users to change the translation of the RJSF internal strings.\nSome strings contain replaceable parameter values as indicated by ",(0,r.kt)("inlineCode",{parentName:"p"},"%1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%2"),", etc.\nThe number after the ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," indicates the order of the parameter.\nThe ordering of parameters is important because some languages may choose to put the second parameter before the first in its translation. In addition to replaceable parameters, some of the strings support the use of markdown and simple html."),(0,r.kt)("p",null,"One can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/utils/src/enums.ts"},"documentation")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslatableString")," enums to determine which enum values contain replaceable parameters and which support markdown and simple html."),(0,r.kt)("p",null,"One could use this function to alter one or more of the existing english strings to better suit one's application or fully translate all strings into a different language.\nBelow is an example of changing a few of the english strings to something else:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TranslatableString, englishStringTranslator, replaceStringParameters } from '@rjsf/utils';\n\nfunction fixupSomeEnglishStrings(stringToTranslate: TranslatableString, params?: string[]): string {\n  switch (stringToTranslate) {\n    case TranslatableString.NewStringDefault:\n      return ''; // Use an empty string for the new additionalProperties string default value\n    case TranslatableString.KeyLabel:\n      return replaceStringParameters('%1 Key Name', params); // Add \"Name\" onto the end of the WrapIfAdditionalTemplate key label\n    default:\n      return englishStringTranslator(stringToTranslate, params); // Fallback to the default english\n  }\n}\n")),(0,r.kt)("h2",{id:"uischema"},"uiSchema"),(0,r.kt)("p",null,"Form uiSchema. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/api-reference/uiSchema"},"uiSchema Reference")," for more information."),(0,r.kt)("h2",{id:"validator"},"validator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Required"),"! An implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorType")," interface that is needed for form validation to work.\n",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/validator-ajv8")," exports the implementation of this interface from RJSF version 4."),(0,r.kt)("h2",{id:"widgets"},"widgets"),(0,r.kt)("p",null,"Dictionary of registered widgets in the form. See ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields"},"Custom Widgets and Fields")," for more information."))}d.isMDXComponent=!0}}]);