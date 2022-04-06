(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{549:function(t,a,e){"use strict";e.r(a);var s=e(34),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"class-sdm-rewardinterface"}},[t._v("Class sdm::RewardInterface")]),t._v(" "),e("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}}),t._v(" "),e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}}),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/doc/api/annotated.html"}},[e("strong",[t._v("Class List")])]),t._v(" "),e("strong",[t._v(">")]),t._v(" "),e("RouterLink",{attrs:{to:"/doc/api/namespacesdm.html"}},[e("strong",[t._v("sdm")])]),t._v(" "),e("strong",[t._v(">")]),t._v(" "),e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1RewardInterface.html"}},[e("strong",[t._v("RewardInterface")])])],1),t._v(" "),e("p",[e("em",[t._v("This class provides a common interface for every models of reward.")]),t._v(" "),e("a",{attrs:{href:"#detailed-description"}},[t._v("More...")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("#include <reward_interface.hpp>")])])]),t._v(" "),e("p",[t._v("Inherited by the following classes: "),e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1FunctionReward.html"}},[t._v("sdm::FunctionReward")]),t._v(",  "),e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1TabularReward.html"}},[t._v("sdm::TabularReward")])],1),t._v(" "),e("h2",{attrs:{id:"public-functions"}},[t._v("Public Functions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("virtual double")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1RewardInterface.html#function-getmaxreward"}},[e("strong",[t._v("getMaxReward")])]),t._v(" ("),e("RouterLink",{attrs:{to:"/doc/api/namespacesdm.html#typedef-number"}},[e("strong",[t._v("number")])]),t._v(" t) const = 0"),e("br")],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("virtual double")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1RewardInterface.html#function-getminreward"}},[e("strong",[t._v("getMinReward")])]),t._v(" ("),e("RouterLink",{attrs:{to:"/doc/api/namespacesdm.html#typedef-number"}},[e("strong",[t._v("number")])]),t._v(" t) const = 0"),e("br")],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("virtual double")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1RewardInterface.html#function-getreward"}},[e("strong",[t._v("getReward")])]),t._v(" (const std::shared_ptr< "),e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1State.html"}},[e("strong",[t._v("State")])]),t._v(" > & state, const std::shared_ptr< Action > & action, "),e("RouterLink",{attrs:{to:"/doc/api/namespacesdm.html#typedef-number"}},[e("strong",[t._v("number")])]),t._v(" t) const = 0"),e("br")],1)])])]),t._v(" "),e("h1",{attrs:{id:"detailed-description"}},[t._v("Detailed Description")]),t._v(" "),e("p",[t._v("A model of reward is well defined if it implements this interface. A reward model is required to define a "),e("RouterLink",{attrs:{to:"/doc/api/classsdm_1_1MDP.html"}},[e("strong",[t._v("MDP")])]),t._v(" (see file MDP.hpp) and related problems. Basically, there is two types of reward models : the tabular model ("),e("RouterLink",{attrs:{to:"/doc/api/tabular__reward_8hpp.html"}},[e("strong",[t._v("tabular_reward.hpp")])]),t._v(") and the function based model ("),e("RouterLink",{attrs:{to:"/doc/api/function__reward_8hpp.html"}},[e("strong",[t._v("function_reward.hpp")])]),t._v(").")],1),t._v(" "),e("h2",{attrs:{id:"public-functions-documentation"}},[t._v("Public Functions Documentation")]),t._v(" "),e("h3",{attrs:{id:"function-getmaxreward"}},[t._v("function getMaxReward")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" sdm"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RewardInterface")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMaxReward")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    number t\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"function-getminreward"}},[t._v("function getMinReward")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" sdm"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RewardInterface")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMinReward")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    number t\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("h3",{attrs:{id:"function-getreward"}},[t._v("function getReward")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" sdm"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RewardInterface")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReward")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" State "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Action "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    number t\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("hr"),t._v(" "),e("p",[t._v("The documentation for this class was generated from the following file "),e("code",[t._v("src/sdm/core/reward/reward_interface.hpp")])])])}),[],!1,null,null,null);a.default=r.exports}}]);