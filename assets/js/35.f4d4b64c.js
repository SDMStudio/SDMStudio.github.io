(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{447:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"class-sdm-algorithm"}},[t._v("Class sdm::Algorithm")]),t._v(" "),a("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}}),t._v(" "),a("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}}),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/doc/api/annotated.html"}},[a("strong",[t._v("Class List")])]),t._v(" "),a("strong",[t._v(">")]),t._v(" "),a("RouterLink",{attrs:{to:"/doc/api/namespacesdm.html"}},[a("strong",[t._v("sdm")])]),t._v(" "),a("strong",[t._v(">")]),t._v(" "),a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html"}},[a("strong",[t._v("Algorithm")])])],1),t._v(" "),a("p",[a("em",[t._v("The public interface common to all algorithms in")]),t._v(" "),a("strong",[t._v("SDM'Studio")]),t._v(" "),a("em",[t._v(".")]),a("a",{attrs:{href:"#detailed-description"}},[t._v("More...")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("#include <algorithm.hpp>")])])]),t._v(" "),a("p",[t._v("Inherited by the following classes: "),a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1AlphaStar.html"}},[t._v("sdm::AlphaStar")]),t._v(",  "),a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1BackwardInduction.html"}},[t._v("sdm::BackwardInduction")]),t._v(",  "),a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1HSVI.html"}},[t._v("sdm::HSVI")]),t._v(",  "),a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1QLearning.html"}},[t._v("sdm::QLearning")]),t._v(",  "),a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1ValueIteration.html"}},[t._v("sdm::ValueIteration")])],1),t._v(" "),a("h2",{attrs:{id:"public-functions"}},[t._v("Public Functions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual void")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-do-initialize"}},[a("strong",[t._v("do_initialize")])]),t._v(" () = 0"),a("br"),a("em",[t._v("Initialize the algorithm.")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual void")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-do-save"}},[a("strong",[t._v("do_save")])]),t._v(" () = 0"),a("br"),a("em",[t._v("Save the policy in a file.")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual void")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-do-solve"}},[a("strong",[t._v("do_solve")])]),t._v(" () = 0"),a("br"),a("em",[t._v("Solve the problem.")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual void")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-do-test"}},[a("strong",[t._v("do_test")])]),t._v(" () = 0"),a("br"),a("em",[t._v("Test the result of the algorithm.")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual double")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-getresult"}},[a("strong",[t._v("getResult")])]),t._v(" () = 0"),a("br")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual int")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-gettrial"}},[a("strong",[t._v("getTrial")])]),t._v(" () = 0"),a("br")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("virtual")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1Algorithm.html#function-algorithm"}},[a("strong",[t._v("~Algorithm")])]),t._v(" () "),a("br")],1)])])]),t._v(" "),a("h1",{attrs:{id:"detailed-description"}},[t._v("Detailed Description")]),t._v(" "),a("p",[t._v("Basic usage:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Algorithm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" algo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_shared")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("AlgoName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nalgo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nalgo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_solve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"public-functions-documentation"}},[t._v("Public Functions Documentation")]),t._v(" "),a("h3",{attrs:{id:"function-do-initialize"}},[t._v("function do_initialize")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_initialize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"function-do-save"}},[t._v("function do_save")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_save")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"function-do-solve"}},[t._v("function do_solve")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_solve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"function-do-test"}},[t._v("function do_test")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"function-getresult"}},[t._v("function getResult")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"function-gettrial"}},[t._v("function getTrial")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTrial")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"function-algorithm"}},[t._v("function ~Algorithm")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" sdm"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Algorithm")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Algorithm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("hr"),t._v(" "),a("p",[t._v("The documentation for this class was generated from the following file "),a("code",[t._v("src/sdm/public/algorithm.hpp")])])])}),[],!1,null,null,null);s.default=e.exports}}]);