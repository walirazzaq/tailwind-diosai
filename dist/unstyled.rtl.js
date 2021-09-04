module.exports = {".alert":{"display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"space-between"},".alert>:not([hidden])~:not([hidden])":{"-TwSpaceYReverse":"0","marginTop":"calc(0.5rem*(1 - var(--tw-space-y-reverse)))","marginBottom":"calc(0.5rem*var(--tw-space-y-reverse))"},"@media (min-width:768px)":{".alert":{"flexDirection":"row"},".alert>:not([hidden])~:not([hidden])":{"-TwSpaceYReverse":"0","marginTop":"calc(0px*(1 - var(--tw-space-y-reverse)))","marginBottom":"calc(0px*var(--tw-space-y-reverse))"}},".alert>*":{"display":"flex"},".artboard":{"width":"100%"},".avatar":{"position":"relative","display":"inline-flex","alignItems":"center","justifyContent":"center"},":where(.avatar) img":{"height":"100%","width":"100%","OObjectFit":"cover","objectFit":"cover","borderRadius":"inherit"},".badge":{"display":"inline-flex","alignItems":"center","justifyContent":"center","fontWeight":"500","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionDuration":[".15s",".2s"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)"},":where(.indicator) .indicator__item":{"display":"inline-flex","alignItems":"center","justifyContent":"center","fontWeight":"500","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionDuration":[".15s",".2s"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","zIndex":"1","position":"absolute","-TwTranslateX":["0","50%"],"-TwTranslateY":["0","-50%"],"-TwRotate":"0","-TwSkewX":"0","-TwSkewY":"0","-TwScaleX":"1","-TwScaleY":"1","transform":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))","top":"0","left":"0","bottom":"auto","right":"auto"},".indicator":{"position":"relative","isolation":"isolate","display":"inline-flex","width":["-webkit-fit-content","-moz-fit-content","fit-content"]},":where(.indicator) .indicator__item.indicator__item--start":{"left":"auto","right":"0","-TwTranslateX":"-50%"},":where(.indicator) .indicator__item.indicator__item--center":{"left":"auto","right":"50%","-TwTranslateX":"-50%"},":where(.indicator) .indicator__item.indicator__item--end":{"left":"0","right":"auto","-TwTranslateX":"50%"},":where(.indicator) .indicator__item.indicator__item--bottom":{"top":"auto","bottom":"0","-TwTranslateY":"50%"},":where(.indicator) .indicator__item.indicator__item--middle":{"top":"50%","bottom":"auto","-TwTranslateY":"-50%"},":where(.indicator) .indicator__item.indicator__item--top":{"top":"0","bottom":"auto","-TwTranslateY":"-50%"},".breadcrumbs":{"maxWidth":"100%","overflowX":"auto"},".breadcrumbs>ul":{"display":"flex","alignItems":"center","whiteSpace":"nowrap","minHeight":["-webkit-min-content","-moz-min-content","min-content"]},".breadcrumbs>ul>li":{"display":"flex","alignItems":"center"},".breadcrumbs>ul>li>a":{"display":"flex","cursor":"pointer","alignItems":"center"},".breadcrumbs>ul>li>a:hover":{"textDecoration":"underline"},".btn":{"display":"inline-flex","flexShrink":"0","cursor":"pointer","WebkitUserSelect":"none","MozUserSelect":"none","msUserSelect":"none","userSelect":"none","flexWrap":"wrap","alignItems":"center","justifyContent":"center","borderColor":"transparent","textAlign":"center","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionDuration":[".15s",".2s"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","borderRadius":"var(--rounded-btn,.5rem)","fontSize":"var(--btn-font-size,1rem)","lineHeight":"1.25em","padding":".35em .75em"},".btn__append,.btn__prepend":{"display":"inline-flex","alignItems":"center"},".btn__prepend":{"paddingLeft":".5em"},".btn__append":{"paddingRight":".5em"},".btn:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".btn--disabled,.btn[disabled]":{"pointerEvents":"none"},".btn--icon":{"padding":".45em"},".btn--square":{"aspectRatio":"1"},".btn--circle":{"aspectRatio":"1","borderRadius":"9999px"},".btn-group":{"display":"flex","flexWrap":"wrap"},".btn-group>input[type=radio].btn":{"WebkitAppearance":"none","MozAppearance":"none","appearance":"none"},".btn-group>input[type=radio].btn:before":{"content":"attr(data-title)"},".card":{"position":"relative","display":"flex","flexDirection":"column","overflow":"hidden"},".card:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".card__content":{"display":"flex","height":"100%","flexDirection":"column"},".card__body":{"display":"flex","flexDirection":"column"},".card figure,.card figure>*":{"width":"100%"},".card__footer":{"display":"flex","flexWrap":"wrap","alignItems":"flex-start"},".card.card--scroll .card__body":{"overflow":"auto"},".card.card--image-full":{"display":"grid"},".card.card--image-full:before":{"position":"relative","content":"\"\""},".card.card--image-full:before,.card.card--image-full>*":{"gridColumnStart":"1","gridRowStart":"1"},".card.card--image-full>figure img":{"height":"100%","OObjectFit":"cover","objectFit":"cover"},".card.card--image-full>figure":{"height":"inherit"},".card.card--image-full>.card__content":{"position":"relative","justifyContent":"flex-end"},".carousel":{"display":"flex","overflowX":"scroll","msScrollSnapType":"x mandatory","scrollSnapType":"x mandatory"},".carousel-vertical":{"flexDirection":"column","overflowY":"scroll","msScrollSnapType":"y mandatory","scrollSnapType":"y mandatory"},".carousel-item":{"boxSizing":"content-box","display":"flex","flex":"none","scrollSnapAlign":"start"},".carousel-center .carousel-item":{"scrollSnapAlign":"center"},".carousel-end .carousel-item":{"scrollSnapAlign":"end"},".checkbox:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".chip":{"position":"relative","display":"inline-flex","alignItems":"center","overflow":"hidden"},".chip__append,.chip__prepend":{"display":"inline-flex","alignItems":"center"},".chip__prepend":{"paddingLeft":".5em"},".chip__append":{"paddingRight":".5em"},".collapse":{"position":"relative","display":"grid","overflow":"hidden"},".collapse>input[type=checkbox],.collapse__content,.collapse__title":{"gridColumnStart":"1","gridRowStart":"1"},".collapse>input[type=checkbox]":{"WebkitAppearance":"none","MozAppearance":"none","appearance":"none","opacity":"0"},".collapse__content":{"gridRowStart":"2","overflow":"hidden","maxHeight":"0"},".collapse--open .collapse__content,.collapse:focus:not(.collapse--close) .collapse__content,.collapse:not(.collapse--close) input[type=checkbox]:checked~.collapse__content":{"maxHeight":"9000px"},":root .countdown":{"lineHeight":"1em"},".countdown":{"display":"inline-flex"},".countdown>*":{"height":"1em","display":"inline-block","overflowY":"hidden"},".countdown>:before":{"position":"relative","content":"\"00\\A 01\\A 02\\A 03\\A 04\\A 05\\A 06\\A 07\\A 08\\A 09\\A 10\\A 11\\A 12\\A 13\\A 14\\A 15\\A 16\\A 17\\A 18\\A 19\\A 20\\A 21\\A 22\\A 23\\A 24\\A 25\\A 26\\A 27\\A 28\\A 29\\A 30\\A 31\\A 32\\A 33\\A 34\\A 35\\A 36\\A 37\\A 38\\A 39\\A 40\\A 41\\A 42\\A 43\\A 44\\A 45\\A 46\\A 47\\A 48\\A 49\\A 50\\A 51\\A 52\\A 53\\A 54\\A 55\\A 56\\A 57\\A 58\\A 59\\A 60\\A 61\\A 62\\A 63\\A 64\\A 65\\A 66\\A 67\\A 68\\A 69\\A 70\\A 71\\A 72\\A 73\\A 74\\A 75\\A 76\\A 77\\A 78\\A 79\\A 80\\A 81\\A 82\\A 83\\A 84\\A 85\\A 86\\A 87\\A 88\\A 89\\A 90\\A 91\\A 92\\A 93\\A 94\\A 95\\A 96\\A 97\\A 98\\A 99\\A\"","whiteSpace":"pre","top":"calc(var(--value)*-1em)"},".divider":{"display":"flex","flexGrow":"1","alignItems":"center"},".divider:after,.divider:before":{"content":"\"\"","width":"100%"},".divider--vertical":{"flexGrow":"0","flexDirection":"column","alignSelf":"stretch"},".divider--vertical:after,.divider--vertical:before":{"height":"100%"},".divider.divider--start:not(.divider--vertical):after":{"width":"auto","marginRight":"0"},".divider.divider--end:not(.divider--vertical):before":{"width":"auto","marginLeft":"0"},".divider.divider--start.divider--vertical:after":{"height":"auto","marginTop":"0"},".divider.divider--end.divider--vertical:before":{"height":"auto","marginBottom":"0"},".dropdown":{"position":"relative","display":"inline-block"},".dropdown>:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".dropdown .dropdown__content":{"visibility":"hidden","position":"absolute","zIndex":"50","opacity":"0"},".dropdown--end .dropdown__content":{"left":"0"},".dropdown--left .dropdown__content":{"top":"0","left":"100%","bottom":"auto"},".dropdown--right .dropdown__content":{"top":"0","bottom":"auto","right":"100%"},".dropdown--top .dropdown__content":{"top":"auto","bottom":"100%"},".dropdown--end.dropdown--right .dropdown__content":{"top":"auto","bottom":"0"},".dropdown--end.dropdown--left .dropdown__content":{"top":"auto","bottom":"0"},".dropdown.dropdown--hover:hover .dropdown__content,.dropdown.dropdown--open .dropdown__content,.dropdown:not(.dropdown--hover):focus-within .dropdown__content,.dropdown:not(.dropdown--hover):focus .dropdown__content":{"visibility":"visible","opacity":"1"},".form-control":{"display":"flex","flexDirection":"column"},".label":{"display":"flex","alignItems":"center","justifyContent":"space-between"},".hero":{"display":"grid","width":"100%","placeItems":"center","backgroundSize":"cover","backgroundPosition":"50%"},".hero>*":{"gridColumnStart":"1","gridRowStart":"1"},".hero__overlay":{"gridColumnStart":"1","gridRowStart":"1","height":"100%","width":"100%"},".hero__content":{"zIndex":"0","display":"flex","alignItems":"center","justifyContent":"center"},".icon":{"-Size":"1.35em","fill":"currentColor","color":"currentColor","alignTems":"center","justifyContent":"center","verticalAlign":"middle","display":"inline-flex","fontSize":"inherit","width":"var(--size,1.5em)","height":"var(--size,1.5em)","aspectRatio":"1"},".icon svg":{"height":"auto !important","width":"auto !important"},".input":{"flexShrink":"1","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionDuration":[".15s",".2s"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","height":"2.5rem","paddingRight":".5rem","paddingLeft":".5rem","fontSize":".875rem","lineHeight":["1.25rem","2"]},".input:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".input__append,.input__prepend":{"display":"inline-flex","alignItems":"center"},".input__append":{"paddingRight":"inherit"},".input__prepend":{"paddingLeft":"inherit"},":where(.input) input:focus":{"outline":"none"},".input.input__container":{"height":"auto","padding":".65em .5em","lineHeight":"normal","display":"flex","alignItems":"center","position":"relative"},".link":{"cursor":"pointer","textDecoration":"underline"},".link--hover":{"textDecoration":"none"},".link--hover:hover":{"textDecoration":"underline"},".list":{"display":"flex","flexDirection":"column"},".list__item":{"display":"flex","alignItems":"center","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","transitionDuration":[".15s",".2s"]},".list__item__content":{"display":"flex","flexGrow":"1","flexDirection":"column","alignItems":"flex-start"},".list__item__content *":{"width":"100%"},".list__item__subtitle,.list__item__support,.list__item__title":{"display":"-webkit-box","WebkitBoxOrient":"vertical","overflow":"hidden"},".list__item__support,.list__item__title":{"WebkitLineClamp":"1"},".list__item__subtitle":{"WebkitLineClamp":"2"},".list__item__append,.list__item__prepend":{"display":"inline-flex"},".mask":{"WebkitMaskSize":"contain","maskSize":"contain","WebkitMaskRepeat":"no-repeat","maskRepeat":"no-repeat","WebkitMaskPosition":"center","maskPosition":"center","borderRadius":"unset"},".menu":{"display":"flex","flexDirection":"column","overflow":"hidden"},".menu--horizontal":{"display":"inline-flex","flexDirection":"row"},".menu--horizontal .menu__item,.menu--horizontal .menu__title":{"flexDirection":"row","alignItems":"center"},".menu__item":{"display":"flex","cursor":"pointer","alignItems":"center","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionDuration":[".15s",".2s"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)"},".menu__item:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".menu__title":{"display":"flex","alignItems":"stretch"},".mockup-code":{"position":"relative","overflow":"hidden","overflowX":"auto"},".mockup-code pre[data-prefix]:before":{"content":"attr(data-prefix)","display":"inline-block","textAlign":"left"},".mockup-window":{"position":"relative","overflow":"hidden","overflowX":"auto"},".mockup-window pre[data-prefix]:before":{"content":"attr(data-prefix)","display":"inline-block","textAlign":"left"},".navs-container":{"WebkitBackfaceVisibility":"hidden","backfaceVisibility":"hidden","display":"flex","flexDirection":"column","maxWidth":"100%","position":"relative","isolation":"isolate","transitionProperty":"all","transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","transitionDuration":[".15s",".2s"]},".navbar":{"top":"0","display":"flex","alignItems":"center"},".navbar>*":{"display":"flex","alignItems":"center"},".navbar--absolute":{"position":"absolute"},".navbar--fixed":{"position":"fixed"},".navbar--absolute,.navbar--fixed":{"zIndex":"1","top":"0","left":"0","right":"0"},".navbar__start":{"width":"50%","justifyContent":"flex-start"},".navbar__center":{"flexShrink":"0"},".navbar__end":{"width":"50%","justifyContent":"flex-end"},".navdrawer":{"top":"0","bottom":"0","right":"0","display":"flex","maxWidth":"100%","flexDirection":"column","overflow":"hidden","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","transitionDuration":[".15s",".2s"],"-TwBgOpacity":"1","-TwTextOpacity":"1","backgroundColor":"hsla(var(--cc-bg)/var(--tw-bg-opacity))","color":"hsla(var(--cc-c)/var(--tw-text-opacity))"},".navdrawer--absolute":{"position":"absolute"},".navdrawer--fixed":{"position":"fixed"},".navdrawer--right":{"right":"auto","left":"0"},".navdrawer--right:after":{"right":"0","left":"auto"},".navdrawer--temporary":{"zIndex":"5"},".navdrawer__content":{"height":"100%","overflowY":"auto","overflowX":"hidden"},".overlay":{"position":"fixed","top":"0","left":"0","bottom":"0","right":"0","zIndex":"20","display":"flex","alignItems":"baseline","justifyContent":"center","padding":"2rem","margin":"0 !important"},".overlay--fullscreen":{"position":"fixed !important","padding":"0"},".overlay--start":{"justifyContent":"flex-start"},".overlay--center":{"justifyContent":"center"},".overlay--end":{"justifyContent":"flex-end"},".overlay--top":{"alignItems":"flex-start"},".overlay--middle":{"alignItems":"center"},".overlay--bottom":{"alignItems":"flex-end"},".overlay__content":{"display":"flex","maxHeight":"100%","width":"100%","maxWidth":"32rem","overflowY":"auto","overflowX":"hidden"},":where(.overlay.overlay--fullscreen) .overlay__content":{"position":"fixed","inset":"0","borderRadius":"0","maxWidth":"100%"},":where(.overlay.overlay--fullscreen) :where(.overlay__content)>:where(:only-child)":{"width":"100%"},".popover":{"position":"fixed","display":"flex","flexDirection":"column","overflow":"hidden","zIndex":"5","minWidth":["-webkit-fit-content","-moz-fit-content","fit-content"]},".popover__content":{"height":"100%","overflowX":"hidden","overscrollBehaviorY":"auto","backgroundAttachment":"scroll"},".popover__append,.popover__prepend":{"display":"flex","alignItems":"center"},".progress":{"position":"relative","width":"100%","WebkitAppearance":"none","MozAppearance":"none","appearance":"none","overflow":"hidden"},".radio:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".select":{"display":"inline-flex","flexShrink":"0","cursor":"pointer","WebkitUserSelect":"none","MozUserSelect":"none","msUserSelect":"none","userSelect":"none","WebkitAppearance":"none","MozAppearance":"none","appearance":"none","height":"3rem","paddingRight":"1rem","paddingLeft":"1rem","fontSize":".875rem","lineHeight":["1.25rem","2"],"minHeight":"3rem"},".select:focus":{"outline":"2px solid transparent","outlineOffset":"2px"},".select-disabled,.select[disabled]":{"pointerEvents":"none"},".stack":{"display":"inline-grid"},".stack>*":{"gridColumnStart":"1","gridRowStart":"1","transform":"translateY(1rem)scale(.9)","zIndex":"1"},".stack>:nth-child(2)":{"transform":"translateY(.5rem)scale(.95)","zIndex":"2"},".stack>:first-child":{"transform":"translateY(0)scale(1)","zIndex":"3"},".stats":{"display":"inline-grid","gridAutoFlow":"column","overflow":"hidden","overflowX":"auto"},".stat":{"display":"inline-grid","width":"100%","MozColumnGap":"1.5rem","columnGap":"1.5rem","gridTemplateColumns":"1fr auto"},".stat__figure":{"gridColumnStart":"2","gridRow":"span 3/span 3","gridRowStart":"1","placeSelf":"center","justifySelf":"end"},".stat__title":{"gridColumnStart":"1","whiteSpace":"nowrap"},".stat__value":{"gridColumnStart":"1","whiteSpace":"nowrap"},".stat__description":{"gridColumnStart":"1","whiteSpace":"nowrap"},".stat__actions":{"gridColumnStart":"1","gridColumnEnd":"3","whiteSpace":"nowrap"},".stats.grid-flow-row":{"gridAutoRows":"minmax(0,1fr)"},".steps":{"counterReset":"step","gridAutoColumns":"1fr","display":"inline-grid","gridAutoFlow":"column","overflow":"hidden","overflowX":"auto"},".steps .step":{"display":"grid","gridTemplateColumns":"repeat(1,minmax(0,1fr))","gridTemplateRows":"repeat(2,minmax(0,1fr))","placeItems":"center","textAlign":"center"},".tabs":{"display":"flex","flexWrap":"wrap","alignItems":"flex-end"},".tab":{"position":"relative","display":"inline-flex","cursor":"pointer","WebkitUserSelect":"none","MozUserSelect":"none","msUserSelect":"none","userSelect":"none","flexWrap":"wrap","alignItems":"center","justifyContent":"center","textAlign":"center","height":"2rem","fontSize":".875rem","lineHeight":["1.25rem","2"],"-TabPadding":"1rem"},".table":{"position":"relative","width":"100%"},".textarea":{"flexShrink":"1","transitionProperty":["background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter","background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"],"transitionDuration":[".15s",".2s"],"transitionTimingFunction":"cubic-bezier(.4,0,.2,1)","minHeight":"2.25rem","padding":".5rem","fontSize":".875rem","lineHeight":"1.25rem"},".textarea:focus,.textarea:focus-within":{"outline":"2px solid transparent","outlineOffset":"2px"},".tooltip--js":{"position":"relative"},".tooltip":{"position":"relative","display":"inline-block","-TooltipOffset":"calc(100% + 1px + var(--tooltip-tail, 0px))"},".tooltip:before":{"position":"absolute","content":"attr(data-tip)","transform":"translateX(50%)","top":"auto","right":"50%","left":"auto","bottom":"var(--tooltip-offset)"},".tooltip--bottom:before":{"transform":"translateX(50%)","top":"var(--tooltip-offset)","right":"50%","left":"auto","bottom":"auto"},".tooltip--left:before":{"transform":"translateY(-50%)","top":"50%","right":"auto","left":"var(--tooltip-offset)","bottom":"auto"},".tooltip--right:before":{"transform":"translateY(-50%)","top":"50%","right":"var(--tooltip-offset)","left":"auto","bottom":"auto"}};