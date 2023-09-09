"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[8136],{876:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(r),h=o,u=l["".concat(m,".").concat(h)]||l[h]||c[h]||a;return r?n.createElement(u,s(s({ref:t},d),{},{components:r})):n.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7896),o=(r(2784),r(876));const a={},s="Custom Themes",i={unversionedId:"advanced-customization/custom-themes",id:"advanced-customization/custom-themes",title:"Custom Themes",description:"The withTheme component provides an easy way to extend the functionality of react-jsonschema-form by passing in a theme object that defines custom/overridden widgets and fields, as well as any of the other possible properties of the standard rjsf Form component.",source:"@site/docs/advanced-customization/custom-themes.md",sourceDirName:"advanced-customization",slug:"/advanced-customization/custom-themes",permalink:"/react-jsonschema-form/docs/advanced-customization/custom-themes",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/advanced-customization/custom-themes.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Custom Templates",permalink:"/react-jsonschema-form/docs/advanced-customization/custom-templates"},next:{title:"Custom Widgets and Fields",permalink:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Theme object properties",id:"theme-object-properties",level:2},{value:"Widgets and fields",id:"widgets-and-fields",level:3},{value:"Templates",id:"templates",level:3},{value:"Overriding other Form props",id:"overriding-other-form-props",level:2}],d={toc:p},l="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-themes"},"Custom Themes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"withTheme")," component provides an easy way to extend the functionality of react-jsonschema-form by passing in a theme object that defines custom/overridden widgets and fields, as well as any of the other possible properties of the standard rjsf ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component.\nThis theme-defining object is passed as the only parameter to the HOC (",(0,o.kt)("inlineCode",{parentName:"p"},"withTheme(ThemeObj)"),"), and the HOC will return a themed-component which you use instead of the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { Component } from 'react';\nimport validator from '@rjsf/validator-ajv8';\nimport { withTheme, ThemeProps } from '@rjsf/core';\n\nconst theme: ThemeProps = { widgets: { test: () => <div>test</div> } };\n\nconst ThemedForm = withTheme(theme);\n\nconst Demo = () => <ThemedForm schema={schema} uiSchema={uiSchema} validator={validator} />;\n")),(0,o.kt)("h2",{id:"theme-object-properties"},"Theme object properties"),(0,o.kt)("p",null,"The Theme object consists of the same properties as the rjsf ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component (such as ",(0,o.kt)("strong",{parentName:"p"},"widgets"),", ",(0,o.kt)("strong",{parentName:"p"},"fields")," and ",(0,o.kt)("strong",{parentName:"p"},"templates"),").\nThe themed-Form component merges together any theme-specific ",(0,o.kt)("strong",{parentName:"p"},"widgets"),", ",(0,o.kt)("strong",{parentName:"p"},"fields")," and ",(0,o.kt)("strong",{parentName:"p"},"templates")," with the default ",(0,o.kt)("strong",{parentName:"p"},"widgets"),", ",(0,o.kt)("strong",{parentName:"p"},"fields")," and ",(0,o.kt)("strong",{parentName:"p"},"templates"),".\nFor instance, providing a single widget in ",(0,o.kt)("strong",{parentName:"p"},"widgets")," will merge this widget with all the default widgets of the rjsf ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component, but overrides the default if the theme's widget's name matches the default widget's name.\nThus, for each default widget or field not specified/overridden, the themed-form will rely on the defaults from the rjsf ",(0,o.kt)("inlineCode",{parentName:"p"},"Form"),".\nNote that you are not required to pass in either custom ",(0,o.kt)("strong",{parentName:"p"},"widgets"),", ",(0,o.kt)("strong",{parentName:"p"},"fields")," or ",(0,o.kt)("strong",{parentName:"p"},"templates")," when using the custom-themed HOC component;\nyou can essentially redefine the default Form by simply doing ",(0,o.kt)("inlineCode",{parentName:"p"},"const Form = withTheme({});"),"."),(0,o.kt)("h3",{id:"widgets-and-fields"},"Widgets and fields"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"widgets")," and ",(0,o.kt)("strong",{parentName:"p"},"fields")," should be in the same format as shown ",(0,o.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields"},"here"),"."),(0,o.kt)("p",null,"Example theme with custom widget:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { WidgetProps, RegistryWidgetsType } from '@rjsf/utils';\nimport { ThemeProps } from '@rjsf/core';\n\nconst MyCustomWidget = (props: WidgetProps) => {\n  return (\n    <input\n      type='text'\n      className='custom'\n      value={props.value}\n      required={props.required}\n      onChange={(event) => props.onChange(event.target.value)}\n    />\n  );\n};\n\nconst myWidgets: RegistryWidgetsType = {\n  myCustomWidget: MyCustomWidget,\n};\n\nconst ThemeObject: ThemeProps = { widgets: myWidgets };\nexport default ThemeObject;\n")),(0,o.kt)("p",null,"The above can be similarly done for ",(0,o.kt)("strong",{parentName:"p"},"fields")," and ",(0,o.kt)("strong",{parentName:"p"},"templates"),"."),(0,o.kt)("h3",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Each template should be passed into the theme object via the ",(0,o.kt)("strong",{parentName:"p"},"templates")," object just as you would into the rjsf Form component. Here is an example of how to use a custom ",(0,o.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-templates#arrayfieldtemplate"},"ArrayFieldTemplate")," and ",(0,o.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-templates#errorlisttemplate"},"ErrorListTemplate")," in the theme object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ArrayFieldTemplateProps, ErrorListProps } from '@rjsf/utils';\nimport { ThemeProps } from '@rjsf/core';\n\nfunction MyArrayFieldTemplate(props: ArrayFieldTemplateProps) {\n  return (\n    <div>\n      {props.items.map((element) => element.children)}\n      {props.canAdd && <button type='button' onClick={props.onAddClick}></button>}\n    </div>\n  );\n}\n\nfunction MyErrorListTemplate(props: ErrorListProps) {\n  const { errors } = props;\n  return (\n    <ul>\n      {errors.map((error) => (\n        <li key={error.stack}>{error.stack}</li>\n      ))}\n    </ul>\n  );\n}\n\nconst ThemeObject: ThemeProps = {\n  templates: {\n    ArrayFieldTemplate: MyArrayFieldTemplate,\n    ErrorListTemplate: MyErrorListTemplate,\n  },\n  widgets: myWidgets,\n};\n\nexport default ThemeObject;\n")),(0,o.kt)("h2",{id:"overriding-other-form-props"},"Overriding other Form props"),(0,o.kt)("p",null,"Just as the theme can override ",(0,o.kt)("strong",{parentName:"p"},"widgets"),", ",(0,o.kt)("strong",{parentName:"p"},"fields"),", any of the ",(0,o.kt)("strong",{parentName:"p"},"templates"),", and set default values to properties like ",(0,o.kt)("strong",{parentName:"p"},"showErrorList"),", you can do the same with the instance of the withTheme() Form component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProps } from '@rjsf/core';\n\nconst ThemeObject: ThemeProps = {\n  templates: {\n    ArrayFieldTemplate: MyArrayFieldTemplate,\n  },\n  fields: myFields,\n  showErrorList: false,\n  widgets: myWidgets,\n};\n")),(0,o.kt)("p",null,"Thus, the user has higher priority than the withTheme HOC, and the theme has higher priority than the default values of the rjsf Form component (",(0,o.kt)("strong",{parentName:"p"},"User")," > ",(0,o.kt)("strong",{parentName:"p"},"Theme")," > ",(0,o.kt)("strong",{parentName:"p"},"Defaults"),")."))}c.isMDXComponent=!0}}]);