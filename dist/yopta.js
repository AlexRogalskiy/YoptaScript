/*! YoptaScript v2.0.0 (https://yopta.space) | Copyright (c) 2016-2021 Yopta.Space project and Contributors | Licensed under the MIT license */(()=>{"use strict";var e={776:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.compile=void 0;var r=n(o(326));function a(e,t){void 0===t&&(t="ys");var o="ys"===t?1:0;return r.default.sort((function(e,t){var n=e[o].length;return t[o].length-n})).forEach((function(t){return n=e,r=t[o],a=t[+!o],i=new RegExp(function(e){return e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),/^\w+$/.test(e)&&(e="\\b"+e+"\\b"),e}(r),"g"),e=n.replace(i,a);var n,r,a,i})),e}function i(e,t){void 0===t&&(t="ys");var o=/((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g,n="ys_"+(new Date).getTime()+"_",r={},i=(e=e.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g,(function(e,t){var o=n+t;return r[o]=e,o}))).match(o)||[];for(var l in e=(e=a(e,t)).replace(o,(function(){return i.shift()||""})),r)e=e.replace(l,r[l]);return e}t.compile=i,(window||o.g).yopta=i},607:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var o,n,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{o=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.yopta=void 0;var a=o(776);function i(e){return n(this,void 0,void 0,(function(){var t,o;return r(this,(function(n){switch(n.label){case 0:return null===e.parentNode?[3,3]:(o=e.textContent)?[3,2]:[4,l(e)];case 1:o=n.sent(),n.label=2;case 2:t=o,e.parentNode.removeChild(e),r=a.compile(t,"ys"),(i=document.createElement("script")).innerHTML=r,document.body.appendChild(i),n.label=3;case 3:return[2]}var r,i}))}))}function l(e){return n(this,void 0,void 0,(function(){var t,o;return r(this,(function(n){switch(n.label){case 0:return t=e.getAttribute("src"),o="",null!==t&&t.length?[4,fetch(t,{method:"GET"})]:[3,3];case 1:return[4,n.sent().text()];case 2:o=n.sent(),n.label=3;case 3:return[2,o]}}))}))}Object.defineProperty(t,"yopta",{enumerable:!0,get:function(){return a.compile}}),document.querySelectorAll('[language="YoptaScript"]').forEach(i),document.querySelectorAll('[type="text/x-yoptascript"]').forEach(i)},326:e=>{e.exports=JSON.parse('[["includes","лучшеНетВлагалищаЧемОчкоТоварища"],["createRadialGradient","намутитьПоКругуМазнюПодливой"],["createLinearGradient","намутитьЧоткуюМазнюПодливой"],["resizeTo","распидораситьОтносительно"],["fromCodePoint","хуйняИзЭтоТуданахНутыпоэл"],["createTextNode","намутитьМалявуГовнодскую"],["enableStyleSheetsForSet","намутитьСтруйкуДляХабара"],["ondragenter","покаДёргалкаНарисовалась"],["ondragenter","покаДергалкаНарисовалась"],["imul","петухПетухаВидитИздалека"],["getElementsByClassName","вычислитьТерпилПоКлассу"],["vlinkColor","когдаОткинулсяПослеЗоны"],["onpointermove","покаХожуТырколйПоРайону"],["getElementsByName","вычислитьТерпилПоИмени"],["onpointerenter","покаСрелкаНарисовалась"],["oninstall","покаХуйСтоитКакКолонна"],["isPointInStroke","естьЛиКуполаНаНаколках"],["getElementsByTagName","вычислитьТерпилПоТегу"],["getElementById","вычислитьЛохаПоНомеру"],["querySelectorAll","хулиТутВсеВыёбываются"],["querySelectorAll","хулиТутВсеВыебываются"],["pointerLockElement","тырколкуНаАнусТерпилы"],["getComputedStyle","нассыМнеВалиоСтруйкой"],["imageSmoothingEnabled","включитьРазмытиеЕбала"],["scrollPathIntoView","колеситьПоДорогеНахуй"],["setLineDash","заебенитьПятнистыйХуй"],["onreadystatechange","опаГотовЙоптЧозанахуй"],["resolve","щащаНамутитьКактоНадо"],["createNodeIterator","намутитьГовнодыратор"],["lastElementChild","последнийПездюкШняги"],["onafterscriptexecute","послеВыполненияЙопты"],["scrollbars","колеситьПоПивларькам"],["resizeBy","распидораситьПоХуйне"],["sizeToContent","ухтыжёптыжбляПодгони"],["sizeToContent","ухтыжептыжбляПодгони"],["fontcolor","говномПоСтенеКрасиво"],["removeHitRegion","избавитьсяОтПроблемы"],["getResponseHeader","дайКепарикПолосатого"],["acosh","агопосинусКупчинский"],["atanh","агопангенсКупчинский"],["createDocumentFragment","намутитьКусокМалявы"],["onselectionchange","покаДваСтулаМахнуть"],["onfullscreenchange","покаЕбальникПоказал"],["ondblclick","какПырнуДваждыНахуй"],["ondragend","покаХарэОчкоДёргать"],["ondragend","покаХарэОчкоДергать"],["oninvalid","гыйбатьИнвалидНахуй"],["onmouseout","покаТырколкаСъебала"],["onmouseover","покаТырколкаПодошла"],["onpointercancel","покаСтрелаТруханула"],["onpopstate","покаИсторияМаляется"],["isDefaultNamespace","деткаТыПростоКосмос"],["codePointAt","хуйняНутыпоэлОткуда"],["isPointInPath","естьЛиКуполаНаГруди"],["XMLHttpRequestEventTarget","запросСоШнягойПоЩам"],["cosh","гопосиносКолпинский"],["tanh","гопангенсКолпинский"],["getOwnPropertyNames","вычислиПогонялаКрыс"],["setPrototypeOf","замутитьПроточелика"],["ondrop","опаМабилкаЁбнулась"],["ondrop","опаМабилкаЕбнулась"],["oninput","покаЭйтыэтоПишибля"],["ontouchmove","опаДвигайОтСюдаЛещ"],["scrollMaxX","колеситьПоГлавЭксу"],["scrollMaxY","колеситьПоГлавУгам"],["compareDocumentPosition","сравниСтатусМалявы"],["substring","спиздитьМеждуСтрок"],["trimRight","вырезатьОчкоСправа"],["fontsize","говномПоСтенеСочно"],["createImageData","намутитьМазнюЙопта"],["setTransform","перекоситьЕбальник"],["parseFloat","шнырятьПоПлавникам"],["dirxml","йбатьБуратиноНахуй"],["readystatechange","готовЙоптЧозанахуй"],["LOG10E","СЛОЖНЫЙ_ГОПОРИФМ10"],["SQRT1_2","сквиртНаПолшишечки"],["asinh","агопинусКупчинский"],["queryCommandEnabled","хулиЧикаДоступная"],["queryCommandSupported","хулиЧикаБезАйфона"],["firstElementChild","первыйПездюкШняги"],["childElementCount","моиШняжныеПездюки"],["onbeforescriptexecute","доВыполненияЙопты"],["ondragover","покаДёрнулПодошла"],["ondragover","покаДернулПодошла"],["onpointerover","покаСтрелаПодошла"],["onpointerout","покаСтрелаСъебала"],["onpointerleave","покаСтрелаСлиняла"],["ontouchstart","опаЩаЛещаПоЩамДам"],["dispatchEvent","послатьНахуйШнягу"],["scrollByPages","колеситьНаМалявах"],["updateCommands","новыйАйфонДляЧики"],["onbeforeunload","покаСемкиКрутятся"],["onhashchange","покаШнягаИзменяет"],["onpagehide","покаКсиваНаМалине"],["hasChildNodes","батяИмеетПездюков"],["insertBefore","вставитьПездюкаДо"],["substr","спиздитьМеждуБукв"],["trimLeft","вырезатьОчкоСлева"],["quadraticCurveTo","криваяЗавелаНахуй"],["resetTransform","поправитьЕбальник"],["parseInt","шнырятьПоКарманам"],["timeout","длительностьСрока"],["loadstart","началТаскатьСемки"],["progress","сколькоСемокДонёс"],["progress","сколькоСемокДонес"],["LOG2E","СЛОЖНЫЙ_ГОПОРИФМ2"],["clz32","поводырь32петухов"],["log1p","чистыйГопорифмПо1"],["sinh","гопинусКолпинский"],["getOwnPropertyDescriptors","вычислиСходкуКрыс"],["getOwnPropertySymbols","выучиАлфавитМразь"],["createTreeWalker","намутитьБуратино"],["getAnimations","вычислитьДвижуху"],["releaseCapture","зафотатьХуякХуяк"],["querySelector","хулиВыёбываешься"],["querySelector","хулиВыебываешься"],["queryCommandState","хулиЧикаОтдыхает"],["contentType","ухтыжёптыжТипчик"],["contentType","ухтыжептыжТипчик"],["alinkColor","петухЗоныКрасиво"],["lastModified","когдаПетухомСтал"],["ondragexit","анусСебеДёрниПёс"],["ondragexit","анусСебеДерниПес"],["ondragleave","покаДергунСлинял"],["onmouseleave","съебалсяИзРайона"],["onpointerdown","покаТыркнулДауна"],["onprogress","покаМатаетсяСрок"],["ontimeupdate","опаНуЭтоКогдаЭто"],["addEventListener","добавитьВертухай"],["setResizable","датьПопидорасить"],["onunload","опаСемкиКрутятся"],["baseURIObject","мразотыНаХатеКрч"],["ownerDocument","главныйАвторитет"],["textContent","ухтыжёптыжМалява"],["textContent","ухтыжептыжМалява"],["contains","яТвойОтецЕбуОвец"],["lastIndexOf","последняяОтсидка"],["toLocaleLowerCase","поРайонуНеКапсом"],["shadowBlur","наняРазмытьЕбало"],["isSafeInteger","этоОхуеннаяХуйня"],["toLocaleString","кПацанамНаРайоне"],["groupEnd","съебатьсяИзБанды"],["reverse","шухильмеМухильме"],["resolveAfter2Seconds","паруСекНеГомосек"],["defineProperties","ващеЧоткиеЧелики"],["getOwnPropertyDescriptor","вычислиЕблоКрысы"],["isSealed","теЧоЕбалоРазбить"],["elementFromPoint","терпилаИзПараши"],["elementsFromPoint","терпилыИзПараши"],["getSelection","сестьНаДваСтула"],["onabort","когдаУронилМыло"],["onkeypress","гыйбатьВмялЛеща"],["onpointerup","покаТыркнулАута"],["ontouchcancel","покаЛещТруханул"],["returnValue","ответитьЗаВалио"],["scrollByLines","колеситьНаЛинии"],["scrollTo","колеситьНахуйНа"],["onpageshow","опаКсивуПоказал"],["lastChild","последнийПездюк"],["nextSibling","следующийПездюк"],["nodeName","погонялоПездюка"],["parentElement","братишкаЭлемент"],["appendChild","заделатьПездюка"],["fillStyle","кончитьСтруйкой"],["miterLimit","скрестимСтруйки"],["addHitRegion","создатьПроблемы"],["createPattern","намутитьТипчика"],["getImageData","чоТутНамалёвано"],["getImageData","чоТутНамалевано"],["profileEnd","вЛичкуПрописали"],["constructor","стрельнутьБычки"],["onwheel","какНаХуюВертел"],["ondragstart","покаДёрнулКмон"],["ondragstart","покаДернулКмон"],["onkeydown","гыйбатьЛещДаун"],["onmousedown","всунулНаРайоне"],["onmousewheel","вертелНаРайоне"],["onseeking","когдаОбоссался"],["onstalled","опаНефартануло"],["screenX","всёЕбалоПоЭксу"],["screenX","всеЕбалоПоЭксу"],["screenY","всёЕбалоПоУгам"],["screenY","всеЕбалоПоУгам"],["scrollX","колеситьПоЭксу"],["scrollY","колеситьПоУгам"],["ondevicelight","покаХуйДлинный"],["onpaint","опаНарисовался"],["nodeType","типичныйПездюк"],["padStart","начальныйПадик"],["toLocaleUpperCase","поРайонуКапсом"],["shadowOffsetX","наняХатаПоЭксу"],["shadowOffsetY","наняХатаПоУгам"],["textAlign","выровнитьБазар"],["textBaseline","поставитьБазар"],["fillRect","обкончатьДоску"],["fillText","обкончатьБуквы"],["MAX_VALUE","ОХУЕННОЕ_ВАЛИО"],["toExponential","наХуекспоненту"],["trace","складЧмошников"],["readyState","готовностьЙопт"],["entries","вычислитьЛохов"],["expm1","топГопспонента"],["fround","мелочьТожеГони"],["ignoreCase","игнорщикЕбаный"],["sticky","петухОпущенный"],["lastIndex","доКонцаОтсидки"],["test","ответыБудутЭээ"],["getPrototypeOf","чоЗаПроточелик"],["captureEvents","зафотатьШняги"],["createEvent","намутитьШнягу"],["createRange","намутитьОпапа"],["createElement","намутитьЛошка"],["createExpression","намутитьБазар"],["execCommand","идиРаботайБля"],["hasFocus","имеетЧёткость"],["hasFocus","имеетЧеткость"],["hasFocus","имеетЧоткость"],["queryCommandIndeterm","хулиЧикаОйВсё"],["queryCommandIndeterm","хулиЧикаОйВсе"],["queryCommandValue","хулиЧикаВалио"],["inputEncoding","эйтыэтоПиздиш"],["scrollingElement","намазиТерпила"],["activeElement","активнаяШняга"],["defaultView","моргалаВыколю"],["ondrag","опаОчкоДёрнул"],["ondrag","опаОчкоДернул"],["onkeyup","гыйбатьЛещАут"],["onloadstart","покаНесуСемки"],["onmouseup","вынулНаРайоне"],["onsuspend","опаПодфартило"],["ontouchend","покаЛещКончил"],["onwaiting","покаМотаюСрок"],["frameElement","кадрОпущенный"],["innerHeight","внутриДлинный"],["outerHeight","вокругДлинные"],["sessionStorage","хабрИзОтсидки"],["postMessage","намутитьКсиву"],["prompt","поясниЗаБазар"],["removeEventListener","урытьВертухая"],["getRootNode","дайБатеГовнод"],["isEqualNode","эквалиоГовнод"],["removeChild","уебатьПездюка"],["localeCompare","сравнитьГовор"],["padEnd","залупныйПадик"],["repeat","непоэлПовтори"],["slice","поделитьСемки"],["startsWith","начатьЗалупку"],["font","говномПоСтене"],["globalAlpha","главныйАльфач"],["clearHitRegions","убитьПроблему"],["measureText","вместитьБазар"],["restore","выздоравливай"],["MAX_SAFE_INTEGER","ЛУЧШИЙ_ГАНДОН"],["MIN_SAFE_INTEGER","ХУЁВЫЙ_ГАНДОН"],["MIN_SAFE_INTEGER","ХУЕВЫЙ_ГАНДОН"],["groupCollapsed","свернутьБанду"],["EventTarget","очкоНаПрицеле"],["reduceRight","редискаПравая"],["SQRT2","двойнойСквирт"],["atan2","агопангенсПо2"],["hypot","вКореньЗыришь"],["RegExp","фильтруйБазар"],["global","глобалкаЙопта"],["assign","тащиВсёНаХату"],["assign","тащиВсеНаХату"],["defineProperty","вотЭтоЗаебись"],["isPrototypeOf","чейПроточелик"],["createAttribute","намутитьЯжку"],["createTouch","намутитьЛеща"],["documentElement","ксиваТерпилы"],["bgColor","охуеннаяЖопа"],["oncancel","покаТруханул"],["onchange","опаЧозанахуй"],["oncontextmenu","какПоЛбуЁбну"],["oncontextmenu","какПоЛбуЕбну"],["onmouseenter","вошёлНаРайон"],["onmouseenter","вошелНаРайон"],["onmousemove","хожуПоРайону"],["onseeked","когдаОбоссал"],["onsubmit","опаХуйВГовне"],["onvolumechange","покаТишеБудь"],["console","красноглазое"],["dialogArguments","тыэтаТавоэта"],["innerWidth","внутриЖирный"],["outerWidth","вокругЖирные"],["pageXOffset","статьяПоЭксу"],["pageYOffset","статьяПоУгам"],["blur","размытьЕбало"],["clearInterval","отсидетьСизо"],["clearTimeout","отсидетьСрок"],["moveTo","нахуйЭтоТуда"],["setInterval","посетитьСизо"],["setTimeout","получитьСрок"],["onload","опаСемкиНесу"],["childNodes","пездюкГовнод"],["firstChild","первыйПездюк"],["nodeValue","валиоПездюка"],["previousSibling","старыйПездюк"],["replaceChild","сделатьАборт"],["replace","пивасПодмени"],["trim","вырезатьОчко"],["currentTransform","этотЕбальник"],["lineCap","выбратьКонец"],["lineDashOffset","пятнистыйХуй"],["lineJoin","формаШишкана"],["strokeStyle","стильНаколок"],["putImageData","намалюйЧоТут"],["rotate","вертетьНаХую"],["strokeText","текстНаколки"],["translate","дисюдаПиксел"],["MIN_VALUE","ХУЁВОЕ_ВАЛИО"],["MIN_VALUE","ХУЕВОЕ_ВАЛИО"],["POSITIVE_INFINITY","ОХУЕТЬ_ДОХУЯ"],["assert","найтиСтукача"],["copyWithin","вынестиГовно"],["forEach","пероПодРебро"],["splice","въебатьГовна"],["log10","гопорифмПо10"],["input","тыЭтоПишибля"],["flags","флагМнеВанус"],["exec","работайМразь"],["hasOwnProperty","соСвоейТемой"],["else","иливжопураз"],["if","вилкойвглаз"],["characterSet","слышТыЧоЁба"],["characterSet","слышТыЧоЕба"],["documentURI","ксиваНаХате"],["domConfig","чёткоДерзко"],["domConfig","четкоДерзко"],["domConfig","чоткоДерзко"],["visibilityState","мутныйСюжет"],["designMode","хуйРисуйМод"],["linkColor","зонаКрасиво"],["referrer","корешСтарый"],["onscroll","покаКолесим"],["onselect","опаДваСтула"],["location","белыйЛебедь"],["sidebar","стенкаЙбать"],["cancelIdleCallback","харэПиздеть"],["maximize","распидорась"],["moveBy","щаТяПодвину"],["Promise","СловоПацана"],["onoffline","покаОффнусь"],["charCodeAt","обаЁбаХуйня"],["charCodeAt","обаЕбаХуйня"],["split","поделитьЯгу"],["italics","понаехавший"],["shadowColor","наняКрасиво"],["getContext","снятьСкальп"],["NEGATIVE_INFINITY","НИХУЯ_ДОХУЯ"],["isFinite","оноКонченое"],["count","которыйСрок"],["timeStamp","началоСрока"],["XMLHttpRequest","запросПоЩам"],["shift","первыйБачок"],["some","нарываешься"],["E","ГОПСПАНЕНТА"],["exp","гопспанента"],["log2","гопорифмПо2"],["await","сидетьНахуй"],["all","пацанСделал"],["race","пацанСказал"],["isExtensible","жратьБудешь"],["seal","сдохниНахуй"],["exports","предъявляет"],["case","аеслинайду"],["let","участковый"],["Abstract","Говнойбать"],["abstract","говнойбать"],["===","чёткоровно"],["===","четкоровно"],["===","чоткоровно"],["importNode","влабазУзел"],["registerElement","зашитьДело"],["domain","домойБлядь"],["oncut","какВысунул"],["onpaste","какВставил"],["onblur","опаНичотка"],["onerror","наПапандос"],["onreset","покаПравим"],["fullScreen","воВсёЕбало"],["fullScreen","воВсеЕбало"],["opener","открывашка"],["performance","сестьНахуй"],["top","КрышаЙбать"],["getAttention","посвистеть"],["matchMedia","феняНаШару"],["openDialog","побазарить"],["scrollBy","колеситьНа"],["ononline","опаТутачки"],["cloneNode","клонГовнод"],["prototype","проточелик"],["fromCharCode","хуйняИзЁба"],["fromCharCode","хуйняИзЕба"],["concat","заебеньВсе"],["toString","поПацански"],["big","большойЁпт"],["big","большойЕпт"],["lineWidth","толщинаХуя"],["bezierCurveTo","кривоНахуй"],["closePath","тупикНахуй"],["getLineDash","сококПятен"],["lineTo","прямоНахуй"],["transform","перекосить"],["timeEnd","конецСрока"],["warn","тыЭтоНуЭто"],["withCredentials","зашкварить"],["abort","уронилМыло"],["load","нестиСемки"],["loadend","семкиДонёс"],["loadend","семкиДонес"],["from","спиздитьИз"],["isArray","этоПомойка"],["findIndex","найдиБомжа"],["map","засратьВсё"],["map","засратьВсе"],["unshift","верниБачок"],["LN10","ГОПОРИФМ10"],["acos","агопосинус"],["atan","агопангенс"],["cbrt","кубоСквирт"],["trunc","верниЧирик"],["multiline","стулБезПик"],["unicode","хуйняНахуй"],["reject","пацанЗабыл"],["watch","смотрюСюда"],["in","чоунастут"],["default","наотыбись"],["new","захуярить"],["yield*","поебалуна"],["try","побратски"],["try","пабратски"],["typeof","чезажижан"],["static","попонятия"],["==","однахуйня"],["===","конкретно"],["writeln","малявагоп"],["readyState","газуемБля"],["oncopy","какВсунул"],["onpause","покаСтопэ"],["onplaying","покаЖивой"],["crypto","пиздишбля"],["devicePixelRatio","типАйфона"],["length","писькомер"],["navigator","главпетух"],["minimize","спидорась"],["baseURI","наХатеТип"],["endsWith","отЗалупки"],["search","семкиЕсть"],["toUpperCase","капсомБля"],["bold","жирныйЁпт"],["bold","жирныйЕпт"],["strike","въебиОчко"],["clearRect","урытьШкаф"],["fill","обкончать"],["save","схоронить"],["EPSILON","ХУЕПСИЛОН"],["toPrecision","кЧёткости"],["toPrecision","кЧеткости"],["toPrecision","кЧоткости"],["upload","заебенить"],["send","всёПиздуй"],["send","всеПиздуй"],["every","пошерстим"],["join","вписаться"],["LN2","ГОПОРИФМ2"],["abs","абсолютли"],["ceil","чирикГони"],["cos","гопосинос"],["floor","бабкиГони"],["round","подрезать"],["tan","гопангенс"],["AsyncFunction","АссоЙопта"],["propertyIsEnumerable","лютаяТема"],["catch","аченетак"],["catch","аченитак"],["catch","ачёнетак"],["this","тырыпыры"],["try","пабрацки"],["while","потрещим"],["import","спиздить"],["protected","подкрыша"],["null","порожняк"],["false","нетрулио"],["++","плюсуюНа"],["--","слилсяНа"],["evaluate","заценить"],["doctype","типКсивы"],["anchors","якоряЁпт"],["anchors","якоряЕпт"],["dir","буратино"],["location","райончик"],["onfocus","опаЧотка"],["onclick","какПырну"],["onclose","ебалоОфф"],["onplay","покаЖиви"],["onsort","опаСидор"],["closed","завалено"],["name","погоняло"],["screen","всёЕбало"],["screen","всеЕбало"],["self","пельмень"],["find","сигиЕсть"],["print","наПечать"],["scroll","колесить"],["onstorage","опаХабар"],["parentNode","братишка"],["normalize","нормандэ"],["indexOf","поТюряге"],["toLowerCase","неКапсом"],["anchor","якорьЁпт"],["anchor","якорьЕпт"],["filter","фильтруй"],["arcTo","прогибНа"],["clip","запретка"],["moveTo","щемитьНа"],["isInteger","этоХуйня"],["isNaN","этоНихуя"],["error","папандос"],["of","сашаГрей"],["Math","Очканавт"],["Math","Очконавт"],["asin","агопинус"],["create","намутить"],["freeze","датьЛеща"],["export","предъявa"],["debugger","логопед"],["finally","тюряжка"],["function*","пиздюли"],["new","гыйбать"],["return","отвечаю"],["yield","поебалу"],["try","хапнуть"],["Const","ЯсенХуй"],["const","ясенХуй"],["Double","Двойные"],["double","двойные"],["Float","Плавник"],["float","плавник"],["implements","силикон"],["Long","Колонна"],["long","колонна"],["package","клеёнка"],["package","клеенка"],["public","ебанное"],["throws","плюнуть"],["false","пиздишь"],["false","нечётко"],["false","нечетко"],["false","нечотко"],["==","эквалио"],["==","блясука"],["===","блябуду"],["=","внатуре"],["charset","слышЁба"],["charset","слышЕба"],["timeline","всяЖиза"],["children","пездюки"],["embeds","мразоты"],["head","залупка"],["height","длинный"],["plugins","выебоны"],["scripts","гыебаты"],["onshow","опаТуса"],["dump","мусорка"],["valueOf","валиоОф"],["small","малорик"],["scale","чётчеНа"],["scale","четчеНа"],["scale","чотчеНа"],["stroke","наколка"],["Array","Помойка"],["keys","отмычки"],["reduce","редиска"],["values","валиоси"],["sin","гопинус"],["source","обоснуй"],["isFrozen","далЛеща"],["unwatch","съебись"],["continue","двигай"],["delete","ёбнуть"],["delete","ебнуть"],["default","пахану"],["default","апохуй"],["switch","естьчо"],["with","хзйопт"],["goto","пиздуй"],["synchronized","вписон"],["volatile","вписос"],["null","нуллио"],["true","трулио"],["<","хуёвей"],["<","хуевей"],[";"," нахуй"],["close","завали"],["open","отрыть"],["write","малява"],["hidden","кроить"],["forms","еблища"],["width","жирный"],["controllers","мусора"],["parent","родаки"],["confirm","канает"],["focus","хуёкус"],["focus","хуекус"],["stop","стопээ"],["raw","полоса"],["charAt","обаЁба"],["charAt","обаЕба"],["match","футбик"],["direction","лесТам"],["arc","прогиб"],["table","таблом"],["PI","ПИЗДЕЦ"],["min","хуйчик"],["pow","гопень"],["sign","сиськи"],["sqrt","сквирт"],["then","атоэто"],["module","братва"],["function","йопта"],["instanceof","шкура"],["Boolean","Пацан"],["boolean","пацан"],["Byte","Семка"],["byte","семка"],["class","клёво"],["class","клево"],["final","бачок"],["Int","Хуйня"],["int","хуйня"],["interface","хуёво"],["interface","хуево"],["Short","Пипин"],["short","пипин"],["NaN","нихуя"],["undefined","неибу"],["true","чётко"],["true","четко"],["true","чотко"],["==","ровно"],[">=","поцик"],["||","иличо"],[">","пизже"],["!","чобля"],["document","ксива"],["clear","урыть"],["body","висяк"],["cookie","семки"],["images","мазни"],["value","валио"],["window","ебало"],["frames","кадры"],["alert","шухер"],["rect","доска"],["toFixed","наПМС"],["group","банда"],["profile","личка"],["pop","попка"],["push","пупок"],["sort","сидор"],["Math","Гопец"],["Math","Ботан"],["Math","Батан"],["max","хуйло"],["Object","Петух"],["global","общак"],["break","харэ"],["void","куку"],["extends","батя"],["native","чорт"],["eval","ебал"],["}","есть"],["==","типа"],["=","сука"],[";"," нах"],[";"," бля"],["links","зоны"],["title","вася"],["URL","хата"],["link","зона"],["ellipse","очко"],["info","инфо"],["time","срок"],["random","шара"],["async","ассо"],["Object","Кент"],["case","лещ"],["catch","гоп"],["do","крч"],["throw","пнх"],["var","гыы"],["Char","Эээ"],["char","эээ"],["Enum","Еээ"],["enum","еээ"],["private","мой"],["super","яга"],["transient","ахз"],["<=","поц"],["&&","ичо"],["history","фон"],["fixed","ПМС"],["log","чмо"],["for","го"],["{","жЫ"]]')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();o(607)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3B0YS8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovL3lvcHRhLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3lvcHRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3lvcHRhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veW9wdGEvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIml0ZXJhdGVUZXh0IiwidGV4dCIsInRvIiwibGFuZ0NvbCIsInNvcnQiLCJhIiwiYiIsImFsIiwibGVuZ3RoIiwiZm9yRWFjaCIsInBhaXIiLCJzdHIiLCJzZWFyY2giLCJyZXBsYWNlbWVudCIsInJlIiwiUmVnRXhwIiwicmVwbGFjZSIsInRlc3QiLCJlc2NhcGVSZWdFeHAiLCJjb21waWxlIiwibGFuZyIsImNvbW1lbnRSZWdFeHAiLCJ0bXBUb2tlbiIsIkRhdGUiLCJnZXRUaW1lIiwiclN0cmluZ0xpdGVyYWxzIiwiY29tbWVudHNBcnJheSIsInZhbCIsInBvcyIsIm5lZWRLZXkiLCJtYXRjaCIsImtleSIsInNoaWZ0Iiwid2luZG93IiwiZyIsInlvcHRhIiwieW9wdGFUb0pzIiwic2NyaXB0Tm9kZSIsInBhcmVudE5vZGUiLCJ0ZXh0Q29udGVudCIsImdldFR4dEZyb21TcmMiLCJ5b3B0YVRleHQiLCJyZW1vdmVDaGlsZCIsImNvbXBpbGVkIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwibm9kZSIsInNyYyIsImdldEF0dHJpYnV0ZSIsInJlc3AiLCJmZXRjaCIsIm1ldGhvZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIs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cUIsT0FBT0EsUUFMakIsR0NHRXlCLEVBQW9CLE0iLCJmaWxlIjoieW9wdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnkvc29ydGVkWW9wdGEuanNvbic7XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuICAgIGlmICgvXlxcdyskLy50ZXN0KHN0cikpIHtcbiAgICAgICAgc3RyID0gJ1xcXFxiJyArIHN0ciArICdcXFxcYic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24geW9wdFJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCByZXBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChzZWFyY2gpLCAnZycpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShyZSwgcmVwbGFjZW1lbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB0ZXh0INGC0LXQutGB0YIsINC/0L4g0LrQvtGC0L7RgNC+0LzRgyDRgdC70LXQtNGD0LXRgiDQv9GA0L7QudGC0LjRgdGMXG4gKiBAcGFyYW0gdG8g0Y/Qt9GL0Log0YLQtdC60YHRgtCwICgneXMnIG9yICdqcycpXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdGVUZXh0KHRleHQ6IHN0cmluZywgdG86ICdqcycgfCAneXMnID0gJ3lzJykge1xuICAgIGNvbnN0IGxhbmdDb2wgPSB0byA9PT0gJ3lzJyA/IDEgOiAwO1xuICAgIGNvbnN0IGRpY2sgPSBkaWN0aW9uYXJ5O1xuICAgIGRpY2suc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhbCA9IGFbbGFuZ0NvbF0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBibCA9IGJbbGFuZ0NvbF0ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gYmwgLSBhbDtcbiAgICB9KS5mb3JFYWNoKFxuICAgICAgICAocGFpcikgPT4gKHRleHQgPSB5b3B0UmVwbGFjZUFsbCh0ZXh0LCBwYWlyW2xhbmdDb2xdLCBwYWlyWyshbGFuZ0NvbF0pKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGV4dDtcbn1cblxuLyoqXG4gKiDQn9C10YDQtdCy0L7QtNC40YIgWW9wdGFTY3JpcHQg0LIgSmF2YVNjcmlwdCDQuCDQvtCx0YDQsNGC0L3QvlxuICogQHBhcmFtIHRleHQg0KHRgtGA0L7QutCwINC00LvRjyDQv9C10YDQtdCy0L7QtNCwXG4gKiBAcGFyYW0gbGFuZyDQr9C30YvQuiDRgdGC0YDQvtC60LggKHlzL2pzKVxuICogQHJldHVybnMge3N0cmluZ30g0J/QtdGA0LXQstC10LTRkdC90L3Ri9C5INGC0LXQutGB0YJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUodGV4dDogc3RyaW5nLCBsYW5nOiAnanMnIHwgJ3lzJyA9ICd5cycpOiBzdHJpbmcge1xuICAgIC8qIHRleHQgLSDRgtC10LrRgdGCINC00LvRjyDRgNC10L/Qu9C10LnRgdCwXG4gICAgICogbGFuZyAtINGP0LfRi9C6INGC0LXQutGB0YLQsCAoJ3lzJyBvciAnanMnKVxuICAgICAqL1xuICAgIGludGVyZmFjZSBMaXRlcmFscyB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9XG4gICAgY29uc3QgY29tbWVudFJlZ0V4cCA9IC8oKD86XFwvXFwqKD86W14qXXwoPzpcXCorW14qXFwvXSkpKlxcKitcXC8pfCg/OlxcL1xcLy4qKSkvZztcbiAgICBjb25zdCB0bXBUb2tlbiA9ICd5c18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXyc7XG4gICAgY29uc3QgclN0cmluZ0xpdGVyYWxzOiBMaXRlcmFscyA9IHt9O1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoXG4gICAgICAgIC9cXFwiKD86XFxcXC58W15cXFwiXFxcXF0pKlxcXCJ8XFwnKD86XFxcXC58W15cXCdcXFxcXSkqXFwnL2csXG4gICAgICAgIGZ1bmN0aW9uICh2YWwsIHBvcykge1xuICAgICAgICAgICAgY29uc3QgbmVlZEtleSA9IHRtcFRva2VuICsgcG9zO1xuICAgICAgICAgICAgclN0cmluZ0xpdGVyYWxzW25lZWRLZXldID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIG5lZWRLZXk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGNvbW1lbnRzQXJyYXkgPSB0ZXh0Lm1hdGNoKGNvbW1lbnRSZWdFeHApIHx8IFtdO1xuICAgIHRleHQgPSBpdGVyYXRlVGV4dCh0ZXh0LCBsYW5nKTtcbiAgICAvLyBjb21lYmFjayBjb21tZW50c1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoY29tbWVudFJlZ0V4cCwgKCkgPT4gY29tbWVudHNBcnJheS5zaGlmdCgpIHx8ICcnKTtcbiAgICAvLyBjb21lYmFjayBzdHJpbmdzXG4gICAgZm9yIChjb25zdCBrZXkgaW4gclN0cmluZ0xpdGVyYWxzKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2Uoa2V5LCByU3RyaW5nTGl0ZXJhbHNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xufVxuXG4vLyBZb3B0YVNjcmlwdCB0byBnbG9iYWxzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuY29uc3QgX2dsb2JhbCA9ICh3aW5kb3cgfHwgZ2xvYmFsKSBhcyBhbnk7XG5fZ2xvYmFsLnlvcHRhID0gY29tcGlsZTtcbiIsImltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICcuL2NvcmUnO1xuZXhwb3J0IHsgY29tcGlsZSBhcyB5b3B0YSB9O1xuXG4vL9Cf0L7Qu9GD0YfQsNC10Lwg0LnQvtC/0YLRgyDQuNC3INGB0LrRgNC40L/RgtCwXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbGFuZ3VhZ2U9XCJZb3B0YVNjcmlwdFwiXScpLmZvckVhY2goeW9wdGFUb0pzKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwidGV4dC94LXlvcHRhc2NyaXB0XCJdJykuZm9yRWFjaCh5b3B0YVRvSnMpO1xuXG5hc3luYyBmdW5jdGlvbiB5b3B0YVRvSnMoc2NyaXB0Tm9kZTogRWxlbWVudCkge1xuICAgIGlmIChzY3JpcHROb2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgLy/Qn9C+0LvRg9GH0LDQtdC8INC50L7Qv9GC0YMg0LjQtyDRgdC60YDQuNC/0YLQsFxuICAgICAgICBjb25zdCB5b3B0YVRleHQ6IHN0cmluZyA9XG4gICAgICAgICAgICBzY3JpcHROb2RlLnRleHRDb250ZW50IHx8IChhd2FpdCBnZXRUeHRGcm9tU3JjKHNjcmlwdE5vZGUpKTtcbiAgICAgICAgLy/Rg9C00LDQu9GP0LXQvCDRgdGC0LDRgNGL0Lkg0YHQutGA0LjQv9GCXG4gICAgICAgIHNjcmlwdE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHROb2RlKTtcbiAgICAgICAgLy/RgdC+0LfQtNCw0ZHQvCDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0Lkg0YHQutGA0LjQv9GCINGBINCx0LvQtdC60LTQttC10LrQvtC8INC4INGI0LvRjtGF0LDQvNC4XG4gICAgICAgIGFkZFNjcmlwdE5vZGUoY29tcGlsZSh5b3B0YVRleHQsICd5cycpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFR4dEZyb21TcmMobm9kZTogRWxlbWVudCkge1xuICAgIC8v0J/QvtGI0LvQuCDQuNGB0LrQsNGC0Ywg0YHQvtGA0YbRi1xuICAgIGNvbnN0IHNyYyA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICBsZXQgcmVzcCA9ICcnO1xuICAgIGlmIChzcmMgIT09IG51bGwgJiYgc3JjLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmZSA9IGF3YWl0IGZldGNoKHNyYywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3AgPSBhd2FpdCBmZS50ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwO1xufVxuXG5mdW5jdGlvbiBhZGRTY3JpcHROb2RlKGNvbXBpbGVkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuaW5uZXJIVE1MID0gY29tcGlsZWQ7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwic291cmNlUm9vdCI6IiJ9