goog.provide('homebase.util');
homebase.util.paths = (function homebase$util$paths(m){
if((((!(cljs.core.map_QMARK_(m)))) || (cljs.core.empty_QMARK_(m)))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
var iter__4529__auto__ = (function homebase$util$paths_$_iter__23610(s__23611){
return (new cljs.core.LazySeq(null,(function (){
var s__23611__$1 = s__23611;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23611__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__23616 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(1),null);
var iterys__4525__auto__ = ((function (s__23611__$1,vec__23616,k,v,xs__6292__auto__,temp__5735__auto__){
return (function homebase$util$paths_$_iter__23610_$_iter__23612(s__23613){
return (new cljs.core.LazySeq(null,((function (s__23611__$1,vec__23616,k,v,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23613__$1 = s__23613;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23613__$1);
if(temp__5735__auto____$1){
var s__23613__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23613__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23613__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23615 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23614 = (0);
while(true){
if((i__23614 < size__4528__auto__)){
var subkey = cljs.core._nth(c__4527__auto__,i__23614);
cljs.core.chunk_append(b__23615,cljs.core.cons(k,subkey));

var G__23619 = (i__23614 + (1));
i__23614 = G__23619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23615),homebase$util$paths_$_iter__23610_$_iter__23612(cljs.core.chunk_rest(s__23613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23615),null);
}
} else {
var subkey = cljs.core.first(s__23613__$2);
return cljs.core.cons(cljs.core.cons(k,subkey),homebase$util$paths_$_iter__23610_$_iter__23612(cljs.core.rest(s__23613__$2)));
}
} else {
return null;
}
break;
}
});})(s__23611__$1,vec__23616,k,v,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23611__$1,vec__23616,k,v,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((homebase.util.paths.cljs$core$IFn$_invoke$arity$1 ? homebase.util.paths.cljs$core$IFn$_invoke$arity$1(v) : homebase.util.paths.call(null,v))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,homebase$util$paths_$_iter__23610(cljs.core.rest(s__23611__$1)));
} else {
var G__23620 = cljs.core.rest(s__23611__$1);
s__23611__$1 = G__23620;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
}
});

//# sourceMappingURL=homebase.util.js.map
