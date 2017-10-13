webpackJsonp([20,155],{631:function(n,s){n.exports={content:[["p","\u6807\u9898\u5217\u9501\u5b9a\uff0c\u53ef\u6a2a\u5411\u6eda\u52a8"]],meta:{order:0,title:{"zh-CN":"\u9501\u5b9a\u6807\u9898\u5217","en-US":"scroll on the x axis"},filename:"components/table/demo/basic.md",id:"components-table-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u6807\u9898\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'title\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'title\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span><span class="token punctuation">,</span> fixed<span class="token punctuation">:</span> <span class="token string">\'left\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u59d3\u540d\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5e74\u9f84\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u8eab\u9ad8\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'c\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'c\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u4f53\u91cd\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'d\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u7231\u597d\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'e\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u751f\u65e5\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'f\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u4f4f\u5740\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'g\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u7535\u8bdd\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'h\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u90ae\u7f16\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'i\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5176\u4ed6\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'j\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'1rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u4eba\u72691\'</span><span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token string">\'\u4e8c\u54c8\'</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token string">\'32\'</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u4eba\u72692\'</span><span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token string">\'\u5c0f\u660e\'</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token string">\'98\'</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'2\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u4eba\u72693\'</span><span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token string">\'\u732a\u5934\'</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token string">\'16\'</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'3\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'\u4eba\u72694\'</span><span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token string">\'\u5c0f\u4e8c\'</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token string">\'33\'</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'4\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n    <span class="token attr-name">titleFixed</span>\n    <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>\n    <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},710:function(n,s,a){n.exports={basic:a(631)}}});