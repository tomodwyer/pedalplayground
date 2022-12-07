(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var m="images/pedals/",g="images/pedalboards/";document.location.hostname==="www.pedalplayground.com"&&(function(a,e,t,d,s,i,o){a.GoogleAnalyticsObject=s,a[s]=a[s]||function(){(a[s].q=a[s].q||[]).push(arguments)},a[s].l=1*new Date,i=e.createElement(t),o=e.getElementsByTagName(t)[0],i.async=1,i.src=d,o.parentNode.insertBefore(i,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-92858206-1","auto"),ga("send","pageview"));$(document).ready(function(){GetPedalData(),GetPedalBoardData(),$(".pedal-list").select2({placeholder:"Select a pedal",width:"style"}),$(".pedal-list").on("select2:select",function(a){$("#add-selected-pedal").click(),$(this).trigger("change").focus()}),$(".pedalboard-list").select2({placeholder:"Select a pedalboard",width:"style"}),$(".pedalboard-list").on("select2:select",function(a){$("#add-selected-pedalboard").click(),$(this).trigger("change").focus()}),$(function(){if(localStorage.pedalCanvas!=null){var a=JSON.parse(localStorage.pedalCanvas);$(".canvas").html(a),p()}if($("#multiplier").length==0){$(".canvas").append('<input id="multiplier" type="hidden" value="25">');var e=25}else var e=$("#multiplier").val();$("#canvas-scale").val(e),$(".canvas").css("background-size",e+"px")}),$("#canvas-scale").change(function(){var a=$(this).val();$("#multiplier").val(a),$(".canvas").css("background-size",a+"px"),$(".item").each(function(){$(this).attr("data-scale",a)}),$(".pedalboard").each(function(){var e=$(this).data("width")*a,t=$(this).data("height")*a;$(this).find(".artwork").css("width",e).css("height",t)}),$(".pedal, .pedalboard").each(function(){var e=$(this).data("width")*a,t=$(this).data("height")*a;$(this).find(".artwork").css("width",e).css("height",t)}),$(".pedal--custom, .pedalboard--custom").each(function(){var e=$(this).data("width")*a,t=$(this).data("height")*a;$(this).css("width",e).css("height",t)}),$(".pedalboard--custom").each(function(){var e=$(this).data("width")*a,t=$(this).data("height")*a;$(this).css({width:e,height:t,borderWidth:a*.5})}),l()}),$("body").on("click",".sidebar-open",function(a){$(".site-body").addClass("is-slid"),a.preventDefault()}),$("body").on("click",".sidebar-close",function(a){$(".site-body").removeClass("is-slid"),a.preventDefault()}),$("body").on("click","#clear-canvas-confirmation",function(){$(".canvas").empty(),$("#clear-canvas-modal").modal("hide"),l()}),$("body").on("click","#add-pedal button",function(a){var e=$("#canvas-scale").val(),t=v.Job(),d=$("#add-pedal").find(":selected"),s=$(d).text(),i=$(d).attr("id"),o=$(d).data("width"),n=$(d).data("height"),c=$(d).data("width")*e,r=$(d).data("height")*e,h=$(d).data("image"),u='<div id="item-'+t+'" class="item pedal '+i+'" title="'+s+'" data-width="'+o+'" data-height="'+n+'" data-scale="'+e+'">	<div class="artwork" style="width:'+c+"px;height:"+r+"px; background-image:url("+m+h+')"></div>	<div class="shadow"></div>	<div class="actions">		<a class="rotate"></a>		<a class="delete"></a>	</div></div>';$(".canvas").append(u),p(),ga("send","event","Pedal","added",s),a.preventDefault()}),$("body").on("click","#add-pedalboard button",function(a){var e=v.Job(),t=$("#canvas-scale").val(),d=$("#add-pedalboard").find(":selected"),s=$(d).text(),i=$(d).attr("id"),o=$(d).data("width"),n=$(d).data("height"),c=$(d).data("width")*t,r=$(d).data("height")*t,h=$(d).data("image"),u='<div id="item-'+e+'" class="item pedalboard '+i+'" title="'+s+'" data-width="'+o+'" data-height="'+n+'" data-scale="'+t+'">	<div class="artwork" style="width:'+c+"px;height:"+r+"px; background-image:url("+g+h+')"></div>	<div class="actions">		<a class="rotate"></a>		<a class="delete"></a>	</div></div>';$(".canvas").prepend(u),p(),ga("send","event","Pedalboard","added",s),a.preventDefault()}),$(".custom-color-block").colorpicker({color:"#41C74D"}),$("body").on("click","#add-custom-pedal .btn",function(a){var e=v.Job(),t=$("#canvas-scale").val(),d=$("#add-custom-pedal .custom-width").val(),s=$("#add-custom-pedal .custom-height").val(),i=d*t,o=s*t,n=d+'" x '+s+'"',c=$("#add-custom-pedal .custom-name").val(),r=$("#add-custom-pedal .custom-color").val(),h='<div id="item-'+e+'" class="item pedal pedal--custom" style="width:'+i+"px;height:"+o+'px;" title="'+c+'" data-width="'+d+'" data-height="'+s+'" data-scale="'+t+'">	<span class="pedal__box" style="background-color:'+r+';"></span>	<span class="pedal__name">'+c+'</span>	<span class="pedal__jack1"></span>	<span class="pedal__jack2"></span>	<span class="pedal__knob1"></span>	<span class="pedal__knob2"></span>	<span class="pedal__led"></span>	<span class="pedal__switch"></span>	<div class="actions">		<a class="rotate"></a>		<a class="delete"></a>	</div></div>';$("#add-custom-pedal .invalid").removeClass("invalid"),d==""||s==""?($("#add-custom-pedal .custom-height, #add-custom-pedal .custom-width").addClass("invalid"),$("#add-custom-pedal .custom-width").focus()):d==""?$("#add-custom-pedal .custom-width").addClass("invalid").focus():s==""?$("#add-custom-pedal .custom-height").addClass("invalid").focus():(console.log("add custom pedal..."),$(".canvas").append(h),p(),ga("send","event","CustomPedal","added",n+" "+c),a.preventDefault())}),$("body").on("click","#add-custom-pedalboard .btn",function(a){var e=v.Job(),t=$("#canvas-scale").val(),d=$("#add-custom-pedalboard .custom-width").val(),s=$("#add-custom-pedalboard .custom-height").val(),i=d*t,o=s*t;if($("#add-custom-pedalboard .invalid").removeClass("invalid"),d==""||s=="")$("#add-custom-pedalboard .custom-height, #add-custom-pedalboard .custom-width").addClass("invalid"),$("#add-custom-pedalboard .custom-width").focus();else if(d=="")$("#add-custom-pedalboard .custom-width").addClass("invalid").focus();else if(s=="")$("#add-custom-pedalboard .custom-height").addClass("invalid").focus();else{console.log("add custom pedalboard...");var n=d+'" x '+s+'"',c='<div id="item-'+e+'" class="item pedalboard pedalboard--custom" style="width:'+i+"px;height:"+o+"px; border-width:"+t/2+'px" title="Custom Pedalboard" data-width="'+d+'" data-height="'+s+'" data-scale="'+t+'">			<div class="actions">			<a class="delete"></a>			<a class="rotate"></a>			</div>			</div>';$(".canvas").prepend(c),p(),ga("send","event","CustomPedalboard","added",n+" "+name),a.preventDefault()}}),$("body").on("keydown keyup",function(a){(a.which==68||a.which==8)&&(b(),$(".site-body > .panel").remove(),l())}),$("body").on("keydown keyup",function(a){a.which==219&&($(".panel a[href='#back']").click(),l())}),$("body").on("keydown keyup",function(a){a.which==221&&($(".panel a[href='#front']").click(),l())}),$("body").on("keydown",function(a){if(a.which==37){var e=parseInt($(".canvas .selected").css("left"));$(".canvas .selected").css("left",e-1),l()}}),$("body").on("keydown",function(a){if(a.which==38){var e=parseInt($(".canvas .selected").css("top"));$(".canvas .selected").css("top",e-1),a.preventDefault(),l()}}),$("body").on("keydown",function(a){if(a.which==39){var e=parseInt($(".canvas .selected").css("left"));$(".canvas .selected").css("left",e+1),l()}}),$("body").on("keydown",function(a){if(a.which==40){var e=parseInt($(".canvas .selected").css("top"));$(".canvas .selected").css("top",e+1),a.preventDefault(),l()}}),$("body").on("keydown",function(a){a.stopPropagation(),a.stopImmediatePropagation(),a.which==82&&($(".canvas .selected").hasClass("rotate-90")?($(".canvas .selected").removeClass("rotate-90"),$(".canvas .selected").addClass("rotate-180")):$(".canvas .selected").hasClass("rotate-180")?($(".canvas .selected").removeClass("rotate-180"),$(".canvas .selected").addClass("rotate-270")):$(".canvas .selected").hasClass("rotate-270")?$(".canvas .selected").removeClass("rotate-270"):$(".canvas .selected").addClass("rotate-90"),l())})});function p(a){var e=$(".canvas .pedal, .canvas .pedalboard").draggabilly({containment:".canvas"});$(".canvas .pedal, .canvas .pedalboard").draggabilly({containment:".canvas"}),e.on("dragEnd",function(t){console.log("dragEnd"),ga("send","event","Canvas","moved","dragend"),l()}),e.on("staticClick",function(t){var d=$(t.target);d.is(".delete")?(w(this),f(),$("body").click()):d.is(".rotate")&&(t.stopPropagation(),t.stopImmediatePropagation(),$(this).hasClass("rotate-90")?($(this).removeClass("rotate-90"),$(this).addClass("rotate-180")):$(this).hasClass("rotate-180")?($(this).removeClass("rotate-180"),$(this).addClass("rotate-270")):$(this).hasClass("rotate-270")?$(this).removeClass("rotate-270"):$(this).addClass("rotate-90"),l())}),l()}function l(){console.log("Canvas Saved!"),localStorage.pedalCanvas=JSON.stringify($(".canvas").html())}function w(a){$(a).remove(),f(),l()}function f(){$(".canvas .panel").remove(),$(".canvas .selected").removeClass("selected"),l()}function b(){$(".canvas .selected").remove(),$(".canvas .panel").remove(),l()}window.Pedal=function(a,e,t,d,s,i){this.Type=a||"",this.Brand=e||"",this.Name=t||"",this.Width=d||"",this.Height=s||"",this.Image=i||""};window.GetPedalData=function(){$.ajax({url:"/data/pedals.json",dataType:"text",type:"GET",success:function(a){a=$.parseJSON(a.replace(/\r\n/g,"").replace(/\t/g,""));var e=[];for(var t in a)e.push(new Pedal(a[t].Type||"",a[t].Brand||"",a[t].Name||"",a[t].Width||"",a[t].Height||"",a[t].Image||""));e.sort(function(d,s){return d.Brand<s.Brand?-1:s.Brand<d.Brand?1:d.Name<s.Name?-1:s.Name<d.Name?1:0}),e.forEach(RenderPedals),listPedals(e)}})};window.RenderPedals=function(a){var{Type:e,Brand:t,Name:d,Width:s,Height:i,Image:o}=a,n=$("<option>",{text:`${t} ${d}`,data:{width:s,height:i,image:o}});$("optgroup").is(`[label="${t}"]`)?$(`optgroup[label="${t}"]`).append(n):$("<optgroup>",{label:t,html:n}).appendTo(".pedal-list")};window.PedalBoard=function(a,e,t,d,s){this.Brand=a||"",this.Name=e||"",this.Width=t||"",this.Height=d||"",this.Image=s||""};window.GetPedalBoardData=function(){$.ajax({url:"/data/pedalboards.json",dataType:"text",type:"GET",success:function(a){a=$.parseJSON(a.replace(/\r\n/g,"").replace(/\t/g,""));var e=[];for(var t in a)e.push(new PedalBoard(a[t].Brand||"",a[t].Name||"",a[t].Width||"",a[t].Height||"",a[t].Image||""));console.log("Pedalboard data loaded"),e.sort(function(d,s){return d.Brand<s.Brand?-1:s.Brand<d.Brand?1:d.Name<s.Name?-1:s.Name<d.Name?1:0}),RenderPedalBoards(e)}})};window.RenderPedalBoards=function(a){for(var e in a){var t=$("<option>"+a[e].Brand+" "+a[e].Name+"</option>");t.data("width",a[e].Width),t.data("height",a[e].Height),t.data("height",a[e].Height),t.data("image",a[e].Image),t.appendTo(".pedalboard-list")}};window.listPedals=function(a){if($("#list-pedals").length)for(var e in a){const s=a[e].Width*40,i=a[e].Height*40;var t=$('<div class="pedal-listing">				<img src="'+m+a[e].Image+'" alt="'+a[e].Brand+" "+a[e].Name+'" width="'+s+'" height="'+i+'"/>				<p class="pedal-brand">'+a[e].Brand+'</p>				<p class="pedal-name">'+a[e].Name+"</p>			</div>");t.appendTo("#list-pedals")}};var v={Stored:[],Job:function(){var a=Date.now().toString().substr(3);return this.Check(a)?this.Job():(this.Stored.push(a),a)},Check:function(a){for(var e=0;e<this.Stored.length;e++)if(this.Stored[e]==a)return!0;return!1}};$("body").on("click",".item",function(a){var e=$(this),t=$(this).attr("id"),d=$(this).attr("title"),s=$(this).attr("data-width"),i=$(this).attr("data-height"),o='<div class="panel" data-id="#'+t+'">    <div class="panel__name">'+d+'<br><span class="panel__dimensions">('+s+" x "+i+')</span>    </div>		<a href="#rotate" class="panel__action">Rotate <i>R</i></a>		<a href="#front" class="panel__action">Move Front <i>]</i></a>		<a href="#back" class="panel__action">Move Back <i>[</i></a>		<a href="#delete" class="panel__action">Delete <i>D</i></a>	</div>';$(".panel").remove(),$(".canvas .selected").removeClass("selected"),$(e).addClass("selected"),$(".canvas").after(o),a.stopPropagation()});$("body").on("click",'a[href="#rotate"]',function(a){a.stopPropagation(),a.stopImmediatePropagation();var e=$(this).parents(".panel").data("id");$(e).hasClass("rotate-90")?($(e).removeClass("rotate-90"),$(e).addClass("rotate-180")):$(e).hasClass("rotate-180")?($(e).removeClass("rotate-180"),$(e).addClass("rotate-270")):$(e).hasClass("rotate-270")?$(e).removeClass("rotate-270"):$(e).addClass("rotate-90"),l()});$("body").on("click",'a[href="#delete"]',function(){var a=$(this).parents(".panel").data("id");$(a).remove(),$(".panel").remove(),l()});$("body").on("click",'a[href="#front"]',function(a){a.stopImmediatePropagation();var e=$(this).parents(".panel").data("id");$(e).next().insertBefore(e),l(),a.stopPropagation()});$("body").on("click",'a[href="#back"]',function(a){a.stopImmediatePropagation();var e=$(this).parents(".panel").data("id");$(e).prev().insertAfter(e),l(),a.stopPropagation()});$("body").click(function(){$(".panel").remove(),$(".canvas .selected").removeClass("selected")});
