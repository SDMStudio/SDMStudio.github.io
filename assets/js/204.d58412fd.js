(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{613:function(e,a,r){"use strict";r.r(a);var s=r(34),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"debugging"}},[e._v("Debugging")]),e._v(" "),r("p",[e._v("This section describe how we can debug our code.")]),e._v(" "),r("h2",{attrs:{id:"_1-track-memory-leaks"}},[e._v("1) Track memory leaks")]),e._v(" "),r("p",[e._v("We can use "),r("a",{attrs:{href:"https://www.valgrind.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Valgrind"),r("OutboundLink")],1),e._v(" tools to manage a possible memory leak.")]),e._v(" "),r("p",[e._v("If you normally run your program like this:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("myprog arg1 arg2\n")])])]),r("p",[e._v("Use this command line:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("valgrind --leak-check"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes myprog arg1 arg2\n")])])]),r("p",[e._v("This should display whether some parts of the memory was lost or not.")]),e._v(" "),r("h2",{attrs:{id:"_2-track-large-cpu-usage"}},[e._v("2) Track large CPU usage")]),e._v(" "),r("p",[e._v("To better optimize CPU usage, we can use a profiler. In my case, I use "),r("a",{attrs:{href:"https://www.valgrind.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Valgrind"),r("OutboundLink")],1),e._v(" to build profile data and "),r("a",{attrs:{href:"https://kcachegrind.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("KCachegrind"),r("OutboundLink")],1),e._v(" to visualize them.")]),e._v(" "),r("p",[e._v("If you normally run your program like this:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("myprog arg1 arg2\n")])])]),r("p",[e._v("Use this command line:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("valgrind --tool"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("callgrind --dump-instr"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes --simulate-cache"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes --collect-jumps"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes myprog arg1 arg2\n")])])]),r("p",[e._v("This should save a file called "),r("code",[e._v("callgrind.out.xxxxx")]),e._v(" where "),r("code",[e._v("xxxxx")]),e._v(" is the profile data identifier. Earlier profile data are represented by a bigger identifier. To visualize profile data, simply run :")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("kcachegrind callgrind.out.xxxxx\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);