(function(){var t=CKEDITOR.tools.cssLength,s=CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks||CKEDITOR.env.version<7);function r(a){return CKEDITOR.env.ie?a.$.clientWidth:parseInt(a.getComputedStyle("width"),10)}function q(c,b){var a=c.getComputedStyle("border-"+b+"-width"),d={thin:"0px",medium:"1px",thick:"2px"};if(a.indexOf("px")<0){if(a in d&&c.getComputedStyle("border-style")!="none"){a=d[a]}else{a=0}}return parseInt(a,10)}function p(c){var b=c.$.rows,a=0,h,g,f;for(var e=0,d=b.length;e<d;e++){f=b[e];h=f.cells.length;if(h>a){a=h;g=f}}return g}function o(h){var g=[],f=-1,e=h.getComputedStyle("direction")=="rtl",d=p(h),c=new CKEDITOR.dom.element(h.$.tBodies[0]),b=c.getDocumentPosition();for(var a=0,D=d.cells.length;a<D;a++){var C=new CKEDITOR.dom.element(d.cells[a]),B=d.cells[a+1]&&new CKEDITOR.dom.element(d.cells[a+1]);f+=C.$.colSpan||1;var A,z,j,i=C.getDocumentPosition().x;e?z=i+q(C,"left"):A=i+C.$.offsetWidth-q(C,"right");if(B){i=B.getDocumentPosition().x;e?A=i+B.$.offsetWidth-q(B,"right"):z=i+q(B,"left")}else{i=h.getDocumentPosition().x;e?A=i:z=i+h.$.offsetWidth}j=Math.max(z-A,3);g.push({table:h,index:f,x:A,y:b.y,width:j,height:c.$.offsetHeight,rtl:e})}return g}function n(c,b){for(var a=0,e=c.length;a<e;a++){var d=c[a];if(b>=d.x&&b<=d.x+d.width){return d}}return null}function m(a){(a.data||a).preventDefault()}function l(L){var K,J,I,H,G,E,j,h,g,f;function e(){K=null;E=0;H=0;J.removeListener("mouseup",F);I.removeListener("mousedown",a);I.removeListener("mousemove",D);J.getBody().setStyle("cursor","auto");s?I.remove():I.hide()}function d(){var u=K.index,R=CKEDITOR.tools.buildTableMap(K.table),Q=[],P=[],C=Number.MAX_VALUE,B=C,A=K.rtl;for(var z=0,y=R.length;z<y;z++){var x=R[z],w=x[u+(A?1:0)],v=x[u+(A?0:1)];w=w&&new CKEDITOR.dom.element(w);v=v&&new CKEDITOR.dom.element(v);if(!w||!v||!w.equals(v)){w&&(C=Math.min(C,r(w)));v&&(B=Math.min(B,r(v)));Q.push(w);P.push(v)}}j=Q;h=P;g=K.x-C;f=K.x+B;I.setOpacity(0.5);G=parseInt(I.getStyle("left"),10);E=0;H=1;I.on("mousemove",D);J.on("dragstart",m)}function c(){H=0;I.setOpacity(0);E&&b();var u=K.table;setTimeout(function(){u.removeCustomData("_cke_table_pillars")},0);J.removeListener("dragstart",m)}function b(){var z=K.rtl,y=z?h.length:j.length;for(var x=0;x<y;x++){var w=j[x],v=h[x],u=K.table;CKEDITOR.tools.setTimeout(function(C,B,A,R,Q,P){C&&C.setStyle("width",t(Math.max(B+P,0)));A&&A.setStyle("width",t(Math.max(R-P,0)));if(Q){u.setStyle("width",t(Q+P*(z?-1:1)))}},0,this,[w,w&&r(w),v,v&&r(v),(!w||!v)&&r(u)+q(u,"left")+q(u,"right"),E])}}function a(u){m(u);d();J.on("mouseup",F,this)}function F(u){u.removeListener();c()}function D(u){i(u.data.getPageOffset().x)}J=L.document;I=CKEDITOR.dom.element.createFromHtml('<div data-cke-temp=1 contenteditable=false unselectable=on style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>',J);if(!s){J.getDocumentElement().append(I)}this.attachTo=function(u){if(H){return}if(s){J.getBody().append(I);E=0}K=u;I.setStyles({width:t(u.width),height:t(u.height),left:t(u.x),top:t(u.y)});s&&I.setOpacity(0.25);I.on("mousedown",a,this);J.getBody().setStyle("cursor","col-resize");I.show()};var i=this.move=function(v){if(!K){return 0}if(!H&&(v<K.x||v>K.x+K.width)){e();return 0}var u=v-Math.round(I.$.offsetWidth/2);if(H){if(u==g||u==f){return 1}u=Math.max(u,g);u=Math.min(u,f);E=u-G}I.setStyle("left",t(u));return 1}}function k(c){var b=c.data.getTarget();if(c.name=="mouseout"){if(!b.is("table")){return}var a=new CKEDITOR.dom.element(c.data.$.relatedTarget||c.data.$.toElement);while(a&&a.$&&!a.equals(b)&&!a.is("body")){a=a.getParent()}if(!a||a.equals(b)){return}}b.getAscendant("table",1).removeCustomData("_cke_table_pillars");c.removeListener()}CKEDITOR.plugins.add("tableresize",{requires:["tabletools"],init:function(a){a.on("contentDom",function(){var b;a.document.getBody().on("mousemove",function(c){c=c.data;var h=c.getPageOffset().x;if(b&&b.move(h)){m(c);return}var g=c.getTarget(),f,e;if(!g.is("table")&&!g.getAscendant("tbody",1)){return}f=g.getAscendant("table",1);if(!(e=f.getCustomData("_cke_table_pillars"))){f.setCustomData("_cke_table_pillars",e=o(f));f.on("mouseout",k);f.on("mousedown",k)}var d=n(e,h);if(d){!b&&(b=new l(a));b.attachTo(d)}})})}})})();