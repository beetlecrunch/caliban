(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"query-optimization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-optimization"}},[t._v("#")]),t._v(" Query optimization")]),t._v(" "),s("p",[t._v("A GraphQL query may request multiple fields that are using the same resolver. It's not a problem if the resolver is a simple value, but it can be less than optimal when the resolver runs an effect (such as reading from a database).")]),t._v(" "),s("p",[t._v("We might want to:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("cache")]),t._v(" identical queries (deduplication)")]),t._v(" "),s("li",[s("strong",[t._v("batch")]),t._v(" queries to the same source")])]),t._v(" "),s("p",[t._v("This is possible in Caliban using the "),s("code",[t._v("ZQuery")]),t._v(" data type.")]),t._v(" "),s("h2",{attrs:{id:"introducing-zquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introducing-zquery"}},[t._v("#")]),t._v(" Introducing ZQuery")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("ZQuery[R, E, A]")]),t._v(" is a purely functional description of an effectual query that may contain requests to one or more data sources. Similarly to "),s("code",[t._v("ZIO[R, E, A]")]),t._v(", it requires an environment "),s("code",[t._v("R")]),t._v(", may fail with an "),s("code",[t._v("E")]),t._v(" or succeed with an "),s("code",[t._v("A")]),t._v(". All requests that do not need to be performed sequentially will automatically be batched, allowing for aggressive data source specific optimizations. Requests will also automatically be deduplicated and cached.")]),t._v(" "),s("p",[t._v("This allows for writing queries in a high level, compositional style, with confidence that they will automatically be optimized. For example, consider the following query from a user service.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" getAllUserIds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Nothing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" getUserNameById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Nothing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userIds   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" getAllUserIds\n  userNames "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreachPar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getUserNameById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" userNames\n")])])]),s("p",[t._v("This would normally require N + 1 queries, one for "),s("code",[t._v("getAllUserIds")]),t._v(" and one for each call to "),s("code",[t._v("getUserNameById")]),t._v(". In contrast, "),s("code",[t._v("ZQuery")]),t._v(" will automatically optimize this to two queries, one for "),s("code",[t._v("userIds")]),t._v(" and one for "),s("code",[t._v("userNames")]),t._v(", assuming an implementation of the user service that supports batching.")]),t._v(" "),s("h2",{attrs:{id:"building-a-datasource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-a-datasource"}},[t._v("#")]),t._v(" Building a DataSource")]),t._v(" "),s("p",[t._v("To build a "),s("code",[t._v("ZQuery")]),t._v(" that executes a request, you first need to build a "),s("code",[t._v("DataSource")]),t._v(". A "),s("code",[t._v("DataSource[R, E, A]")]),t._v(" defines how to execute requests of type "),s("code",[t._v("A")]),t._v(" and it requires 2 things:")]),t._v(" "),s("ul",[s("li",[t._v("an "),s("code",[t._v("identifier")]),t._v(" that uniquely identifies the data source (requests from "),s("em",[t._v("different")]),t._v(" data sources will "),s("em",[t._v("not")]),t._v(" be batched together)")]),t._v(" "),s("li",[t._v("a effectful function "),s("code",[t._v("run")]),t._v(" from an "),s("code",[t._v("Iterable")]),t._v(" of requests to a "),s("code",[t._v("Map")]),t._v(" of requests and results")])]),t._v(" "),s("p",[t._v("Let's consider "),s("code",[t._v("getUserNameById")]),t._v(" from the previous example. We need to define a corresponding request type that extends "),s("code",[t._v("zquery.Request")]),t._v(" for a given response type:")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" GetUserName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Throwable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Now let's build the corresponding "),s("code",[t._v("DataSource")]),t._v(". We need to implement the following functions:")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" UserDataSource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" DataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GetUserName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requests"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Iterable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GetUserName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZIO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Throwable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CompletedRequestMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('We will use "UserDataSource" as our identifier. This name should not be reused for other data sources.')]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UserDataSource"')]),t._v("\n")])])]),s("p",[t._v("We will define two different behaviors depending on whether we receive a single request or multiple requests at once.\nFor each request, we need to insert into the result map a value of type "),s("code",[t._v("Either")]),t._v(" ("),s("code",[t._v("Left")]),t._v(" for an error and "),s("code",[t._v("Right")]),t._v(" for a success).")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requests"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Iterable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GetUserName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZIO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Nothing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CompletedRequestMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" resultMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompletedRequestMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("empty\n  requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toList "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" Nil "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get user by ID e.g. SELECT name FROM users WHERE id = $id")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n      result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("either"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" batch "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get multiple users at once e.g. SELECT id, name FROM users WHERE id IN ($ids)")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n      result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        err "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GetUserName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Now to build a "),s("code",[t._v("ZQuery")]),t._v(" from it, we can use "),s("code",[t._v("ZQuery.fromRequest")]),t._v(" and just pass the request and the data source:")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" getUserNameById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Throwable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GetUserName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserDataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("To run a "),s("code",[t._v("ZQuery")]),t._v(", simply use "),s("code",[t._v("ZQuery#run")]),t._v(" which will return a "),s("code",[t._v("ZIO[R, E, A]")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"zquery-constructors-and-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zquery-constructors-and-operators"}},[t._v("#")]),t._v(" ZQuery constructors and operators")]),t._v(" "),s("p",[t._v("There are several ways to create a "),s("code",[t._v("ZQuery")]),t._v(". We've seen "),s("code",[t._v("ZQuery.fromRequest")]),t._v(", but you can also:")]),t._v(" "),s("ul",[s("li",[t._v("create from a pure value with "),s("code",[t._v("ZQuery.succeed")])]),t._v(" "),s("li",[t._v("create from an effect value with "),s("code",[t._v("ZQuery.fromEffect")])]),t._v(" "),s("li",[t._v("create from multiple queries with "),s("code",[t._v("ZQuery.collectAllPar")]),t._v(" and "),s("code",[t._v("ZQuery.foreachPar")]),t._v(" and their sequential equivalents "),s("code",[t._v("ZQuery.collectAll")]),t._v(" and "),s("code",[t._v("ZQuery.foreach")])])]),t._v(" "),s("p",[t._v("If you have a "),s("code",[t._v("ZQuery")]),t._v(" object, you can use:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("map")]),t._v(" and "),s("code",[t._v("mapError")]),t._v(" to modify the returned result or error")]),t._v(" "),s("li",[s("code",[t._v("flatMap")]),t._v(" or "),s("code",[t._v("zip")]),t._v(" to combine it with other "),s("code",[t._v("ZQuery")]),t._v(" objects")]),t._v(" "),s("li",[s("code",[t._v("provide")]),t._v(" and "),s("code",[t._v("provideSome")]),t._v(" to eliminate some of the "),s("code",[t._v("R")]),t._v(" requirements")])]),t._v(" "),s("p",[t._v("There are several ways to run a "),s("code",[t._v("ZQuery")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("runCache")]),t._v(' runs the query using a given pre-populated cache. This can be useful for deterministically "replaying" a query without executing any new requests.')]),t._v(" "),s("li",[s("code",[t._v("runLog")]),t._v(" runs the query and returns its result along with the cache containing a complete log of all requests executed and their results. This can be useful for logging or analysis of query execution.")]),t._v(" "),s("li",[s("code",[t._v("run")]),t._v(" runs the query and returns its result.")])]),t._v(" "),s("h2",{attrs:{id:"using-zquery-with-caliban"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-zquery-with-caliban"}},[t._v("#")]),t._v(" Using ZQuery with Caliban")]),t._v(" "),s("p",[t._v("To use "),s("code",[t._v("ZQuery")]),t._v(" with Caliban, you can simply include fields of type "),s("code",[t._v("ZQuery")]),t._v(" in your API definition.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Nothing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserArgs "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" ZQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Nothing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("During the query execution, Caliban will merge all the requested fields that return a "),s("code",[t._v("ZQuery")]),t._v(" into a single "),s("code",[t._v("ZQuery")]),t._v(" and run it, so that all the possible optimizations are applied.")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),s("OutboundLink")],1),t._v(" project provides 2 versions of the problem described in "),s("a",{attrs:{href:"https://blog.apollographql.com/optimizing-your-graphql-request-waterfalls-7c3f3360b051",target:"_blank",rel:"noopener noreferrer"}},[t._v("this article about GraphQL query optimization"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("a "),s("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/tree/master/examples/src/main/scala/caliban/optimizations/NaiveTest.scala",target:"_blank",rel:"noopener noreferrer"}},[t._v("naive"),s("OutboundLink")],1),t._v(" version where fields are just returning "),s("code",[t._v("IO")]),t._v(", resulting in 47 requests")]),t._v(" "),s("li",[t._v("an "),s("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/tree/master/examples/src/main/scala/caliban/optimizations/OptimizedTest.scala",target:"_blank",rel:"noopener noreferrer"}},[t._v("optimized"),s("OutboundLink")],1),t._v(" version where fields are returning "),s("code",[t._v("ZQuery")]),t._v(", resulting in 8 requests only")])])])}),[],!1,null,null,null);a.default=n.exports}}]);