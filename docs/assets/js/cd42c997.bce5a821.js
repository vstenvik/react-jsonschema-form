"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[730],{876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,u=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7896),r=(a(2784),a(876));const i={},o="Internals",s={unversionedId:"advanced-customization/internals",id:"version-4.2.3/advanced-customization/internals",title:"Internals",description:"Miscellaneous internals of react-jsonschema-form are listed here.",source:"@site/versioned_docs/version-4.2.3/advanced-customization/internals.md",sourceDirName:"advanced-customization",slug:"/advanced-customization/internals",permalink:"/react-jsonschema-form/docs/version-4.2.3/advanced-customization/internals",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-4.2.3/advanced-customization/internals.md",tags:[],version:"4.2.3",frontMatter:{},sidebar:"docs",previous:{title:"Custom Widgets and Fields",permalink:"/react-jsonschema-form/docs/version-4.2.3/advanced-customization/custom-widgets-fields"},next:{title:"Customizing material-ui fields and widgets",permalink:"/react-jsonschema-form/docs/version-4.2.3/advanced-customization/material-ui/customizing-material-ui"}},l={},d=[{value:"JSON Schema supporting status",id:"json-schema-supporting-status",level:2},{value:"Handling of schema defaults",id:"handling-of-schema-defaults",level:2},{value:"Merging of defaults into the form data",id:"merging-of-defaults-into-the-form-data",level:3},{value:"Merging of defaults within the schema",id:"merging-of-defaults-within-the-schema",level:3},{value:"Custom array field buttons",id:"custom-array-field-buttons",level:2},{value:"Submit form programmatically",id:"submit-form-programmatically",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"internals"},"Internals"),(0,r.kt)("p",null,"Miscellaneous internals of react-jsonschema-form are listed here."),(0,r.kt)("h2",{id:"json-schema-supporting-status"},"JSON Schema supporting status"),(0,r.kt)("p",null,"This component follows ",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/documentation.html"},"JSON Schema")," specs. We currently support JSON Schema-07 by default, but we also support other JSON schema versions through the ",(0,r.kt)("a",{parentName:"p",href:"../usage/validation/#custom-schema-validation"},"custom schema validation")," feature. Due to the limitation of form widgets, there are some exceptions as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," keyword for arrays"),(0,r.kt)("p",{parentName:"li"},"  This keyword works when ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," is an array. ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems: true")," is not supported because there's no widget to represent an item of any type. In this case it will be treated as no additional items allowed. ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," being a valid schema is supported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"anyOf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"allOf"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf"),", or multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": ["string", "array"]'),")"),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf")," keywords are supported; however, properties declared inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf/oneOf"),' should not overlap with properties "outside" of the ',(0,r.kt)("inlineCode",{parentName:"p"},"anyOf/oneOf"),"."),(0,r.kt)("p",{parentName:"li"},"  You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf")," with ",(0,r.kt)("a",{parentName:"p",href:"../usage/dependencies/#schema-dependencies"},"schema dependencies")," to dynamically add schema properties based on input data."),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"allOf")," keyword is supported; it uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mokkabonna/json-schema-merge-allof"},"json-schema-merge-allof")," to merge subschemas to render the final combined schema in the form. When these subschemas are incompatible, though (or if the library has an error merging it), the ",(0,r.kt)("inlineCode",{parentName:"p"},"allOf")," keyword is dropped from the schema.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"additionalProperties":false')," produces incorrect schemas when used with ",(0,r.kt)("a",{parentName:"p",href:"../usage/dependencies/#schema-dependencies"},"schema dependencies"),". This library does not remove extra properties, which causes validation to fail. It is recommended to avoid setting ",(0,r.kt)("inlineCode",{parentName:"p"},'"additionalProperties":false')," when you use schema dependencies. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/issues/848"},"#848")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/rjsf-team/issues/902"},"#902")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/rjsf-team/issues/992"},"#992")))),(0,r.kt)("h2",{id:"handling-of-schema-defaults"},"Handling of schema defaults"),(0,r.kt)("p",null,"This library automatically fills default values defined in the ",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/documentation.html"},"JSON Schema")," as initial values in your form. This also works for complex structures in the schema. If a field has a default defined, it should always appear as default value in form. This also works when using ",(0,r.kt)("a",{parentName:"p",href:"../usage/dependencies/#schema-dependencies"},"schema dependencies"),"."),(0,r.kt)("p",null,"Since there is a complex interaction between any supplied original form data and any injected defaults, this library tries to do the injection in a way which keeps the original intention of the original form data."),(0,r.kt)("p",null,"Check out the defaults example on the ",(0,r.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/"},"live playground")," to see this in action."),(0,r.kt)("h3",{id:"merging-of-defaults-into-the-form-data"},"Merging of defaults into the form data"),(0,r.kt)("p",null,"There are three different cases which need to be considered for the merging. Objects, arrays and scalar values. This library always deeply merges any defaults with the existing form data for objects."),(0,r.kt)("p",null,"This are the rules which are used when injecting the defaults:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When there is a scalar in the form data, nothing is changed."),(0,r.kt)("li",{parentName:"ul"},"When the value is ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," in the form data, the default is created in the form data."),(0,r.kt)("li",{parentName:"ul"},"When the value is an object in the form data, the defaults are deeply merged into the form data, using the rules defined here for the deep merge."),(0,r.kt)("li",{parentName:"ul"},"Then the value is an array in the form data, defaults are only injected in existing array items. No new array items will be created, even if the schema has minItems or additional items defined.")),(0,r.kt)("h3",{id:"merging-of-defaults-within-the-schema"},"Merging of defaults within the schema"),(0,r.kt)("p",null,'In the schema itself, defaults of parent elements are propagated into children. So when you have a schema which defines a deeply nested object as default, these defaults will be applied to children of the current node. This also merges objects defined at different levels together with the "deeper" not having precedence. If the parent node defines properties, which are not defined in the child, they will be merged so that the default for the child will be the merged defaults of parent and child.'),(0,r.kt)("p",null,"For arrays this is not the case. Defining an array, when a parent also defines an array, will be overwritten. This is only true when arrays are used in the same level, for objects within these arrays, they will be deeply merged again."),(0,r.kt)("h2",{id:"custom-array-field-buttons"},"Custom array field buttons"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayField")," component provides a UI to add, remove and reorder array items, and these buttons use ",(0,r.kt)("a",{parentName:"p",href:"http://getbootstrap.com/components/#glyphicons"},"Bootstrap glyphicons"),". If you don't use glyphicons but still want to provide your own icons or texts for these buttons, you can easily do so using CSS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"i.glyphicon { display: none; }\n.btn-add::after { content: 'Add'; }\n.array-item-move-up::after { content: 'Move Up'; }\n.array-item-move-down::after { content: 'Move Down'; }\n.array-item-remove::after { content: 'Remove'; }\n")),(0,r.kt)("h2",{id:"submit-form-programmatically"},"Submit form programmatically"),(0,r.kt)("p",null,"You can use the reference to get your ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," component and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"submit")," method to submit the form programmatically without a submit button.\nThis method will dispatch the ",(0,r.kt)("inlineCode",{parentName:"p"},"submit")," event of the form, and the function, that is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," props, will be called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);\nlet yourForm;\n\nconst schema = {\n    type: "string"\n};\n\nrender((\n  <Form schema={schema}\n        onSubmit={onSubmit} ref={(form) => {yourForm = form;}}/>\n), document.getElementById("app"));\n\nyourForm.submit();\n')))}c.isMDXComponent=!0}}]);