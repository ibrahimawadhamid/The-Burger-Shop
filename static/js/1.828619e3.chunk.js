(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{112:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(113),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},113:function(e,t,a){e.exports={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},115:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx"}},117:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__1whvJ"}},126:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),l=a(8),i=a(7),o=a(9),c=a(0),u=a.n(c),d=a(124),s=a(80),p=a(14),m=a(48),h=a(32),v=a(115),g=a.n(v),f=function(e){return u.a.createElement("div",{className:g.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(m.a,{ingredients:e.ingredients})),u.a.createElement(h.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(h.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},C=a(22),b=a(39),y=a(117),E=a.n(y),k=a(18),O=a(112),j=a(40),_=a(15),I=a(3),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(I.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(I.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(I.b)(a.state.orderForm,Object(C.a)({},t,n)),l=!0;for(var i in r)l=r[i].valid&&l;a.setState({orderForm:r,formIsValid:l})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(O.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),u.a.createElement(h.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=u.a.createElement(b.a,null)),u.a.createElement("div",{className:E.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),N=Object(p.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(_.g(t,a))}}})(Object(j.a)(T,k.a)),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(f,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(s.a,{path:this.props.match.path+"/contact-data",component:N}))}return e}}]),t}(c.Component);t.default=Object(p.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(w)}}]);
//# sourceMappingURL=1.828619e3.chunk.js.map