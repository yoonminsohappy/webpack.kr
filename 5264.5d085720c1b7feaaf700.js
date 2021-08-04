"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5264],{5264:function(n,s,a){a.r(s),s.default='<p>애셋 모듈은 로더를 추가로 구성하지 않아도 애셋 파일(폰트, 아이콘 등)을 사용할 수 있도록 해주는 모듈입니다.</p> <p>webpack 5 이전에는 아래의 로더를 사용하는 것이 일반적이었습니다.</p> <ul> <li><a href="/loaders/raw-loader/"><code>raw-loader</code></a> 파일을 문자열로 가져올 때</li> <li><a href="/loaders/url-loader/"><code>url-loader</code></a> 파일을 data URI 형식으로 번들에 인라인 추가 할 때</li> <li><a href="/loaders/file-loader/"><code>file-loader</code></a> 파일을 출력 디렉터리로 내보낼 때</li> </ul> <p>이러한 로더를 대체하기 위해서 애셋 모듈에는 4개의 새로운 모듈 유형이 추가되었습니다.</p> <ul> <li><code>asset/resource</code>는 별도의 파일을 내보내고 URL을 추출합니다. 이전에는 <code>file-loader</code>를 사용하여 처리할 수 있었습니다.</li> <li><code>asset/inline</code>은 애셋의 data URI를 내보냅니다. 이전에는 <code>url-loader</code>를 사용하여 처리할 수 있었습니다.</li> <li><code>asset/source</code>는 애셋의 소스 코드를 내보냅니다. 이전에는<code>raw-loader</code>를 사용하여 처리할 수 있었습니다.</li> <li><code>asset</code>은 data URI와 별도의 파일 내보내기 중에서 자동으로 선택합니다. 이전에는 애셋 크기 제한이 있는 <code>url-loader</code>를 사용했습니다.</li> </ul> <p>webpack 5의 애셋 모듈과 함께 이전 애셋 로더(예 :<code>file-loader</code>/<code>url-loader</code>/<code>raw-loader</code>)를 사용할 때 애셋 모듈이 애셋을 중복으로 처리하지 않도록 할 수 있습니다. 이는 애셋의 모듈 유형을 <code>\'javascript/auto\'</code>로 설정하여 적용 가능합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">module.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">  rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.(png|jpg|gif)$/i,\n</span><span class="token prefix unchanged"> </span><span class="token line">       use: [\n</span><span class="token prefix unchanged"> </span><span class="token line">         {\n</span><span class="token prefix unchanged"> </span><span class="token line">           loader: \'url-loader\',\n</span><span class="token prefix unchanged"> </span><span class="token line">           options: {\n</span><span class="token prefix unchanged"> </span><span class="token line">             limit: 8192,\n</span><span class="token prefix unchanged"> </span><span class="token line">           }\n</span><span class="token prefix unchanged"> </span><span class="token line">         },\n</span><span class="token prefix unchanged"> </span><span class="token line">       ],\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       type: \'javascript/auto\'\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     },\n</span><span class="token prefix unchanged"> </span><span class="token line">  ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>}</code></pre> <p>애셋 로더의 새로운 URL 호출에서 발생한 애셋을 제외하려면 로더 설정에 <code>dependency : {not: [\'url\']}</code>을 추가합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">module.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.(png|jpg|gif)$/i,\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       dependency: { not: [\'url\'] },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">       use: [\n</span><span class="token prefix unchanged"> </span><span class="token line">         {\n</span><span class="token prefix unchanged"> </span><span class="token line">           loader: \'url-loader\',\n</span><span class="token prefix unchanged"> </span><span class="token line">           options: {\n</span><span class="token prefix unchanged"> </span><span class="token line">             limit: 8192,\n</span><span class="token prefix unchanged"> </span><span class="token line">           },\n</span><span class="token prefix unchanged"> </span><span class="token line">         },\n</span><span class="token prefix unchanged"> </span><span class="token line">       ],\n</span><span class="token prefix unchanged"> </span><span class="token line">     },\n</span><span class="token prefix unchanged"> </span><span class="token line">   ],\n</span><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span>}</code></pre> <h2 id="resource-assets">Resource assets<a href="#resource-assets" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\')\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> module: {\n</span><span class="token prefix inserted">+</span><span class="token line">   rules: [\n</span><span class="token prefix inserted">+</span><span class="token line">     {\n</span><span class="token prefix inserted">+</span><span class="token line">       test: /\\.png/,\n</span><span class="token prefix inserted">+</span><span class="token line">       type: \'asset/resource\'\n</span><span class="token prefix inserted">+</span><span class="token line">     }\n</span><span class="token prefix inserted">+</span><span class="token line">   ]\n</span><span class="token prefix inserted">+</span><span class="token line"> },\n</span></span>};</code></pre> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> mainImage <span class="token keyword">from</span> <span class="token string">\'./images/main.png\'</span><span class="token punctuation">;</span>\n\nimg<span class="token punctuation">.</span>src <span class="token operator">=</span> mainImage<span class="token punctuation">;</span> <span class="token comment">// \'/dist/151cfcfa1bd74779aadb.png\'</span></code></pre> <p>모든 <code>.png</code> 파일을 출력 디렉터리로 내보내고 해당 경로를 번들에 삽입합니다.</p> <h3 id="custom-output-filename">Custom output filename<a href="#custom-output-filename" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>파일을 출력 디렉터리로 내보낼 때 <code>asset/resource</code> 모듈은 기본적으로 <code>[hash][ext][query]</code> 파일명을 사용합니다.</p> <p>webpack 설정에서 <a href="/configuration/output/#outputassetmodulefilename"><code>output.assetModuleFilename</code></a>을 설정하여 이 템플릿을 수정할 수 있습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\'),\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   assetModuleFilename: \'images/[hash][ext][query]\'\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.png/,\n</span><span class="token prefix unchanged"> </span><span class="token line">       type: \'asset/resource\'\n</span><span class="token prefix unchanged"> </span><span class="token line">     }\n</span><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>};</code></pre> <p>특정 디렉터리에 애셋을 내보낼때 출력 파일명을 사용자 정의하는 경우도 있습니다.</p> <pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\'),\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   assetModuleFilename: \'images/[hash][ext][query]\'\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.png/,\n</span><span class="token prefix unchanged"> </span><span class="token line">       type: \'asset/resource\'\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">     }\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     },\n</span><span class="token prefix inserted">+</span><span class="token line">     {\n</span><span class="token prefix inserted">+</span><span class="token line">       test: /\\.html/,\n</span><span class="token prefix inserted">+</span><span class="token line">       type: \'asset/resource\',\n</span><span class="token prefix inserted">+</span><span class="token line">       generator: {\n</span><span class="token prefix inserted">+</span><span class="token line">         filename: \'static/[hash][ext][query]\'\n</span><span class="token prefix inserted">+</span><span class="token line">       }\n</span><span class="token prefix inserted">+</span><span class="token line">     }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>};</code></pre> <p>이 설정을 통해 모든 <code>html</code> 파일을 출력 디렉터리 내의 <code>static</code> 디렉터리로 내보내게 됩니다.</p> <p><code>Rule.generator.filename</code>은 <a href="/configuration/output/#outputassetmodulefilename"><code>output.assetModuleFilename</code></a>과 같으며 <code>asset</code> 및 <code>asset/resource</code> 모듈에서만 동작합니다.</p> <h2 id="inlining-assets">Inlining assets<a href="#inlining-assets" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\'),\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   assetModuleFilename: \'images/[hash][ext][query]\'\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">       test: /\\.png/,\n</span><span class="token prefix deleted">-</span><span class="token line">       type: \'asset/resource\'\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       test: /\\.svg/,\n</span><span class="token prefix inserted">+</span><span class="token line">       type: \'asset/inline\'\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">     },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     }\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">     {\n</span><span class="token prefix deleted">-</span><span class="token line">       test: /\\.html/,\n</span><span class="token prefix deleted">-</span><span class="token line">       type: \'asset/resource\',\n</span><span class="token prefix deleted">-</span><span class="token line">       generator: {\n</span><span class="token prefix deleted">-</span><span class="token line">         filename: \'static/[hash][ext][query]\'\n</span><span class="token prefix deleted">-</span><span class="token line">       }\n</span><span class="token prefix deleted">-</span><span class="token line">     }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span>};</code></pre> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import mainImage from \'./images/main.png\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import metroMap from \'./images/metro.svg\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> img.src = mainImage; // \'/dist/151cfcfa1bd74779aadb.png\'\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> block.style.background = `url(${metroMap})`; // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)</span></span></code></pre> <p>모든 <code>.svg</code> 파일은 data URI로 번들에 삽입됩니다.</p> <h3 id="custom-data-uri-generator">Custom data URI generator<a href="#custom-data-uri-generator" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>기본적으로 webpack에서 내보낸 data URI는 Base64 알고리즘을 사용하여 인코딩된 파일 콘텐츠를 의미합니다.</p> <p>커스텀 인코딩 알고리즘을 사용하려면, 파일 콘텐츠 인코딩을 위한 커스텀 함수를 지정해야 합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const svgToMiniDataURI = require(\'mini-svg-data-uri\');\n</span></span>\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\')\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.svg/,\n</span><span class="token prefix unchanged"> </span><span class="token line">       type: \'asset/inline\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       generator: {\n</span><span class="token prefix inserted">+</span><span class="token line">         dataUrl: content => {\n</span><span class="token prefix inserted">+</span><span class="token line">           content = content.toString();\n</span><span class="token prefix inserted">+</span><span class="token line">           return svgToMiniDataURI(content);\n</span><span class="token prefix inserted">+</span><span class="token line">         }\n</span><span class="token prefix inserted">+</span><span class="token line">       }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     }\n</span><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>};</code></pre> <p>이제 모든 <code>.svg</code> 파일이 <code>mini-svg-data-uri</code> 패키지를 통해 인코딩됩니다.</p> <h2 id="source-assets">Source assets<a href="#source-assets" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> const svgToMiniDataURI = require(\'mini-svg-data-uri\');\n</span></span>\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\')\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">       test: /\\.svg/,\n</span><span class="token prefix deleted">-</span><span class="token line">       type: \'asset/inline\',\n</span><span class="token prefix deleted">-</span><span class="token line">       generator: {\n</span><span class="token prefix deleted">-</span><span class="token line">         dataUrl: content => {\n</span><span class="token prefix deleted">-</span><span class="token line">           content = content.toString();\n</span><span class="token prefix deleted">-</span><span class="token line">           return svgToMiniDataURI(content);\n</span><span class="token prefix deleted">-</span><span class="token line">         }\n</span><span class="token prefix deleted">-</span><span class="token line">       }\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       test: /\\.txt/,\n</span><span class="token prefix inserted">+</span><span class="token line">       type: \'asset/source\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     }\n</span><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>};</code></pre> <p><strong>src/example.txt</strong></p> <pre><code class="hljs language-text">Hello world\n</code></pre> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import metroMap from \'./images/metro.svg\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import exampleText from \'./example.txt\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> block.style.background = `url(${metroMap}); // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> block.textContent = exampleText; // \'Hello world\'</span></span></code></pre> <p>모든 <code>.txt</code> 파일은 있는 그대로 번들에 삽입됩니다.</p> <h2 id="url-assets">URL assets<a href="#url-assets" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><code>new URL(\'./path/to/asset\', import.meta.url)</code>을 사용할 때 webpack은 애셋 모듈도 함께 생성합니다.</p> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">const</span> logo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">\'./logo.svg\'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>설정의 <a href="/configuration/target/"><code>target</code></a>에 따라 webpack은 위 코드를 다른 결과로 컴파일합니다.</p> <pre><code class="hljs language-js"><span class="token comment">// target: web</span>\n<span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>\n  __webpack_public_path__ <span class="token operator">+</span> <span class="token string">\'logo.svg\'</span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span>baseURI <span class="token operator">||</span> self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// target: webworker</span>\n<span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>__webpack_public_path__ <span class="token operator">+</span> <span class="token string">\'logo.svg\'</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// target: node, node-webkit, nwjs, electron-main, electron-renderer, electron-preload, async-node</span>\n<span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>\n  __webpack_public_path__ <span class="token operator">+</span> <span class="token string">\'logo.svg\'</span><span class="token punctuation">,</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'url\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pathToFileUrl</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h2 id="general-asset-type">General asset type<a href="#general-asset-type" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\')\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       test: /\\.txt/,\n</span><span class="token prefix inserted">+</span><span class="token line">       type: \'asset\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     }\n</span><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>};</code></pre> <p>이제 webpack은 기본 조건에 따라서 <code>resource</code>와 <code>inline</code> 중에서 자동으로 선택합니다. 크기가 8kb 미만인 파일은 <code>inline</code> 모듈로 처리되고 그렇지 않으면 <code>resource</code> 모듈로 처리됩니다.</p> <p>webpack 설정의 module rule 단계에서 <a href="/configuration/module/#ruleparserdataurlcondition"><code>Rule.parser.dataUrlCondition.maxSize</code></a> 옵션을 설정하여 이 조건을 변경할 수 있습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line"> output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   filename: \'main.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, \'dist\')\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span><span class="token prefix unchanged"> </span><span class="token line"> module: {\n</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.txt/,\n</span><span class="token prefix unchanged"> </span><span class="token line">       type: \'asset\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       parser: {\n</span><span class="token prefix inserted">+</span><span class="token line">         dataUrlCondition: {\n</span><span class="token prefix inserted">+</span><span class="token line">           maxSize: 4 * 1024 // 4kb\n</span><span class="token prefix inserted">+</span><span class="token line">         }\n</span><span class="token prefix inserted">+</span><span class="token line">       }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     }\n</span><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>};</code></pre> <p>또한 <a href="/configuration/module/#ruleparserdataurlcondition">함수를 지정</a>하여 모듈의 인라인 여부를 결정할 수 있습니다.</p> <h2 id="replacing-inline-loader-syntax">Replacing Inline Loader Syntax<a href="#replacing-inline-loader-syntax" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Asset Modules 및 Webpack 5 이전에는, 위에 언급한 레거시 로더와 함께 <a href="https://webpack.js.org/concepts/loaders/#inline">inline syntax</a>를 사용할 수 있었습니다.</p> <p>현재는 모든 인라인 로더 구문을 제거하고 resourceQuery 조건을 사용하여 인라인 구문의 기능을 모방하는 것이 좋습니다.</p> <p>예를 들어, <code>raw-loader</code>를 <code>asset/source</code> 유형으로 바꾸는 경우입니다.</p> <pre><code class="hljs language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import myModule from \'raw-loader!my-module\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import myModule from \'my-module?raw\';</span></span></code></pre> <p>webpack 설정입니다.</p> <pre><code class="hljs language-diff">module: {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">   // ...\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     {\n</span><span class="token prefix inserted">+</span><span class="token line">       resourceQuery: /raw/,\n</span><span class="token prefix inserted">+</span><span class="token line">       type: \'asset/source\',\n</span><span class="token prefix inserted">+</span><span class="token line">     }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },</span></span></code></pre> <p>원시 애샛을 다른 로더에서 처리하지 못하도록 제외하려면, 부정적 조건을 사용하십시오.</p> <pre><code class="hljs language-diff">module: {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">   // ...\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     {\n</span><span class="token prefix inserted">+</span><span class="token line">       test: /\\.m?js$/,\n</span><span class="token prefix inserted">+</span><span class="token line">       resourceQuery: { not: [/raw/] },\n</span><span class="token prefix inserted">+</span><span class="token line">       use: [ ... ]\n</span><span class="token prefix inserted">+</span><span class="token line">     },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     {\n</span><span class="token prefix unchanged"> </span><span class="token line">       resourceQuery: /raw/,\n</span><span class="token prefix unchanged"> </span><span class="token line">       type: \'asset/source\',\n</span><span class="token prefix unchanged"> </span><span class="token line">     }\n</span><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },</span></span></code></pre> <p>또는 <code>oneOf</code> 규칙 목록입니다. 여기에서는 첫 번째로 일치하는 규칙만 적용됩니다.</p> <pre><code class="hljs language-diff">module: {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   rules: [\n</span><span class="token prefix unchanged"> </span><span class="token line">   // ...\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     { oneOf: [\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">       {\n</span><span class="token prefix unchanged"> </span><span class="token line">         resourceQuery: /raw/,\n</span><span class="token prefix unchanged"> </span><span class="token line">         type: \'asset/source\',\n</span><span class="token prefix unchanged"> </span><span class="token line">       },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       {\n</span><span class="token prefix inserted">+</span><span class="token line">         test: /\\.m?js$/,\n</span><span class="token prefix inserted">+</span><span class="token line">         use: [ ... ]\n</span><span class="token prefix inserted">+</span><span class="token line">       },\n</span><span class="token prefix inserted">+</span><span class="token line">     ] }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]\n</span><span class="token prefix unchanged"> </span><span class="token line"> },</span></span></code></pre> '}}]);