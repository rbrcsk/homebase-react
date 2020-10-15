goog.provide('homebase.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
homebase.react.keywordize = (function homebase$react$keywordize(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return s;
}
});
homebase.react.keywordize_coll = (function homebase$react$keywordize_coll(coll){
return clojure.walk.postwalk(homebase.react.keywordize,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coll));
});
homebase.react.transact_BANG_ = (function homebase$react$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,homebase.react.keywordize_coll(txs));
});
homebase.react.q = (function homebase$react$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23619 = arguments.length;
var i__4737__auto___23620 = (0);
while(true){
if((i__4737__auto___23620 < len__4736__auto___23619)){
args__4742__auto__.push((arguments[i__4737__auto___23620]));

var G__23621 = (i__4737__auto___23620 + (1));
i__4737__auto___23620 = G__23621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,vars){
var query__$1 = homebase.react.keywordize_coll(query);
if(typeof query__$1 === 'number'){
var G__23613 = cljs.core.deref(conn);
var G__23614 = query__$1;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23613,G__23614) : datascript.core.entity.call(null,G__23613,G__23614));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query__$1,cljs.core.deref(conn),vars);

}
}));

(homebase.react.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q.cljs$lang$applyTo = (function (seq23608){
var G__23609 = cljs.core.first(seq23608);
var seq23608__$1 = cljs.core.next(seq23608);
var G__23610 = cljs.core.first(seq23608__$1);
var seq23608__$2 = cljs.core.next(seq23608__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23609,G__23610,seq23608__$2);
}));

(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__23622__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
if(cljs.core.truth_(acc)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,homebase.react.keywordize_coll(key));
} else {
return null;
}
}),this$,keys);
};
var G__23622 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__23623__i = 0, G__23623__a = new Array(arguments.length -  0);
while (G__23623__i < G__23623__a.length) {G__23623__a[G__23623__i] = arguments[G__23623__i + 0]; ++G__23623__i;}
  keys = new cljs.core.IndexedSeq(G__23623__a,0,null);
} 
return G__23622__delegate.call(this,keys);};
G__23622.cljs$lang$maxFixedArity = 0;
G__23622.cljs$lang$applyTo = (function (arglist__23624){
var keys = cljs.core.seq(arglist__23624);
return G__23622__delegate(keys);
});
G__23622.cljs$core$IFn$_invoke$arity$variadic = G__23622__delegate;
return G__23622;
})()
);
if((typeof homebase !== 'undefined') && (typeof homebase.react !== 'undefined') && (typeof homebase.react.homebase_context !== 'undefined')){
} else {
homebase.react.homebase_context = module$node_modules$react$index.createContext();
}
homebase.react.HomebaseProvider = (function homebase$react$HomebaseProvider(props){
var config = props.config;
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(homebase.react.keywordize_coll(config.schema));
if(cljs.core.truth_(config.initialData)){
homebase.react.transact_BANG_(conn,config.initialData);
} else {
}

return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3(homebase.react.homebase_context.Provider,({"value": conn}),props.children);
});
goog.exportSymbol('homebase.react.HomebaseProvider', homebase.react.HomebaseProvider);
homebase.react.useQuery = (function homebase$react$useQuery(query){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var vec__23615 = module$node_modules$react$index.useState(homebase.react.q(query,conn));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var listener = (function (){
var G__23618 = homebase.react.q(query,conn);
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23618) : setResult.call(null,G__23618));
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,listener);

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
});
goog.exportSymbol('homebase.react.useQuery', homebase.react.useQuery);
homebase.react.useTransact = (function homebase$react$useTransact(){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var transact = (function (txs){
return homebase.react.transact_BANG_(conn,txs);
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transact], null);
});
goog.exportSymbol('homebase.react.useTransact', homebase.react.useTransact);

//# sourceMappingURL=homebase.react.js.map