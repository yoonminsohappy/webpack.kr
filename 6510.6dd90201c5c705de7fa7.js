(self.webpackChunk=self.webpackChunk||[]).push([[6510],{6510:function(n,s,a){"use strict";a.r(s),s.default='<aside class="tip"><h6 class="tip__prefix">tip</h6><p>이 가이드는 <a href="/guides/asset-management"><code>Asset Management</code></a> 가이드에 있는 코드 예제를 기준으로 합니다.</p></aside> <p>지금까지 모든 애셋을 <code>index.html</code> 파일에 수동으로 포함했습니다. 하지만 애플리케이션이 커지면서 <a href="/guides/caching">파일 이름에 해시를 사용</a>하거나 <a href="/guides/code-splitting">다중 번들</a>로 내보내기 시작하면 <code>index.html</code> 파일을 수동으로 관리하기 어렵습니다. 이 때 몇 가지 플러그인으로 이 프로세스를 훨씬 쉽게 관리할 수 있습니다.</p> <h2 id="preparation">Preparation<a href="#preparation" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>먼저 프로젝트를 조금 수정해보겠습니다.</p> <p><strong>project</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> webpack-demo\n</span><span class="token prefix unchanged"> </span><span class="token line"> |- package.json\n</span><span class="token prefix unchanged"> </span><span class="token line"> |- webpack.config.js\n</span><span class="token prefix unchanged"> </span><span class="token line"> |- /dist\n</span><span class="token prefix unchanged"> </span><span class="token line"> |- /src\n</span><span class="token prefix unchanged"> </span><span class="token line">   |- index.js\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   |- print.js\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> |- /node_modules</span></span></code></pre> <p><code>src/print.js</code> 파일에 로직을 추가합니다.</p> <p><strong>src/print.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">printMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'I get called from print.js!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre> <p>그리고 <code>src/index.js</code> 파일에서 이 함수를 사용합니다.</p> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">import _ from \'lodash\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import printMe from \'./print.js\';\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">function component() {\n</span><span class="token prefix unchanged"> </span><span class="token line">  const element = document.createElement(\'div\');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  const btn = document.createElement(\'button\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  btn.innerHTML = \'Click me and check the console!\';\n</span><span class="token prefix inserted">+</span><span class="token line">  btn.onclick = printMe;\n</span><span class="token prefix inserted">+</span><span class="token line">\n</span><span class="token prefix inserted">+</span><span class="token line">  element.appendChild(btn);\n</span><span class="token prefix inserted">+</span><span class="token line">\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  return element;\n</span><span class="token prefix unchanged"> </span><span class="token line">}\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">document.body.appendChild(component());</span></span></code></pre> <p>webpack이 엔트리를 분할할 수 있도록 <code>dist/index.html</code> 파일도 업데이트해 보겠습니다.</p> <p><strong>dist/index.html</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&#x3C;!DOCTYPE html>\n</span><span class="token prefix unchanged"> </span><span class="token line">&#x3C;html>\n</span><span class="token prefix unchanged"> </span><span class="token line">  &#x3C;head>\n</span><span class="token prefix unchanged"> </span><span class="token line">    &#x3C;meta charset="utf-8" />\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    &#x3C;title>Asset Management&#x3C;/title>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &#x3C;title>Output Management&#x3C;/title>\n</span><span class="token prefix inserted">+</span><span class="token line">    &#x3C;script src="./print.bundle.js">&#x3C;/script>\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  &#x3C;/head>\n</span><span class="token prefix unchanged"> </span><span class="token line">  &#x3C;body>\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    &#x3C;script src="bundle.js">&#x3C;/script>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &#x3C;script src="./index.bundle.js">&#x3C;/script>\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  &#x3C;/body>\n</span><span class="token prefix unchanged"> </span><span class="token line">&#x3C;/html></span></span></code></pre> <p>이제 설정을 수정합니다. <code>src/print.js</code>를 새 엔트리 포인트(<code>print</code>)로 추가합니다. 그리고 출력 번들 이름이 엔트리 포인트 이름을 기반으로 동적으로 생성되도록 변경합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  entry: \'./src/index.js\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  entry: {\n</span><span class="token prefix inserted">+</span><span class="token line">    index: \'./src/index.js\',\n</span><span class="token prefix inserted">+</span><span class="token line">    print: \'./src/print.js\',\n</span><span class="token prefix inserted">+</span><span class="token line">  },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    filename: \'bundle.js\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    filename: \'[name].bundle.js\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p><code>npm run build</code>를 실행하고 무엇이 생성되는지 살펴보겠습니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>webpack-cli<span class="token punctuation">]</span> Compilation finished\nasset index.bundle.js <span class="token number">69.5</span> KiB <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span> <span class="token punctuation">[</span>minimized<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: index<span class="token punctuation">)</span> <span class="token number">1</span> related asset\nasset print.bundle.js <span class="token number">316</span> bytes <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span> <span class="token punctuation">[</span>minimized<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: print<span class="token punctuation">)</span>\nruntime modules <span class="token number">1.36</span> KiB <span class="token number">7</span> modules\ncacheable modules <span class="token number">530</span> KiB\n  ./src/index.js <span class="token number">406</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./src/print.js <span class="token number">83</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./node_modules/lodash/lodash.js <span class="token number">530</span> KiB <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.4</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">1996</span> ms</code></pre> <p>webpack이 <code>print.bundle.js</code> 과 <code>index.bundle.js</code> 파일을 생성하는 것을 볼 수 있습니다. 이 파일은 <code>index.html</code> 파일에도 명시되어 있습니다. 브라우저에서 <code>index.html</code>을 열고 버튼을 클릭하면 어떻게 되는지 확인할 수 있습니다.</p> <p>그러나 엔트리 포인트 중 하나의 이름을 변경하거나 새 엔트리 포인트를 추가하면 어떻게 될까요? 생성된 번들은 빌드에서 이름이 변경되지만 <code>index.html</code> 파일은 여전히 예전 이름을 참조합니다. <a href="/plugins/html-webpack-plugin"><code>HtmlWebpackPlugin</code></a>을 사용하여 이 문제를 해결해보겠습니다.</p> <h2 id="setting-up-htmlwebpackplugin">Setting up HtmlWebpackPlugin<a href="#setting-up-htmlwebpackplugin" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>먼저 플러그인을 설치하고 <code>webpack.config.js</code> 파일을 수정합니다.</p> <pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin</code></pre> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">  entry: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    index: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    print: \'./src/print.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  plugins: [\n</span><span class="token prefix inserted">+</span><span class="token line">    new HtmlWebpackPlugin({\n</span><span class="token prefix inserted">+</span><span class="token line">      title: \'Output Management\',\n</span><span class="token prefix inserted">+</span><span class="token line">    }),\n</span><span class="token prefix inserted">+</span><span class="token line">  ],\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    filename: \'[name].bundle.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p>빌드하기 전에 <code>dist/</code> 폴더에 이미 <code>index.html</code>이 있더라도 기본적으로 <code>HtmlWebpackPlugin</code>이 자체 <code>index.html</code> 파일을 생성하는 것을 알아두세요. 이는 <code>index.html</code> 파일이 새로 생성된 파일로 대체된다는 의미입니다. <code>npm run build</code>를 실행할 때 어떤 일이 발생하는지 살펴보겠습니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>webpack-cli<span class="token punctuation">]</span> Compilation finished\nasset index.bundle.js <span class="token number">69.5</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">[</span>minimized<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: index<span class="token punctuation">)</span> <span class="token number">1</span> related asset\nasset print.bundle.js <span class="token number">316</span> bytes <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">[</span>minimized<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: print<span class="token punctuation">)</span>\nasset index.html <span class="token number">253</span> bytes <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\nruntime modules <span class="token number">1.36</span> KiB <span class="token number">7</span> modules\ncacheable modules <span class="token number">530</span> KiB\n  ./src/index.js <span class="token number">406</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./src/print.js <span class="token number">83</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./node_modules/lodash/lodash.js <span class="token number">530</span> KiB <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.4</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">2189</span> ms</code></pre> <p>코드 편집기에서 <code>index.html</code>을 열면 <code>HtmlWebpackPlugin</code>이 완전히 새로운 파일을 생성했으며 모든 번들이 자동으로 추가된 것을 알 수 있습니다.</p> <p><code>HtmlWebpackPlugin</code>이 제공하는 모든 기능과 옵션에 대해 더 자세히 알아보려면 <a href="https://github.com/jantimonhtml-webpack-plugin"><code>HtmlWebpackPlugin</code></a> 저장소를 확인해 보세요.</p> <h2 id="cleaning-up-the-dist-folder">Cleaning up the <code>/dist</code> folder<a href="#cleaning-up-the-dist-folder" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>이전 가이드와 코드 예제에서 눈치챘겠지만 <code>/dist</code> 폴더가 상당히 복잡해졌습니다. webpack은 파일을 생성하여 <code>/dist</code> 폴더에 저장하지만, 프로젝트에서 실제로 사용하는 파일이 어떤 건지는 알지 못합니다.</p> <p>일반적으로 사용하는 파일만 생성되도록 각 빌드 전에 <code>/dist</code> 폴더를 정리하는 것이 좋습니다. <a href="/configuration/output/#outputclean"><code>output.clean</code></a> 옵션을 사용하여 처리해보겠습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span><span class="token prefix unchanged"> </span><span class="token line">const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">  entry: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    index: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    print: \'./src/print.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">  plugins: [\n</span><span class="token prefix unchanged"> </span><span class="token line">    new HtmlWebpackPlugin({\n</span><span class="token prefix unchanged"> </span><span class="token line">      title: \'Output Management\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    }),\n</span><span class="token prefix unchanged"> </span><span class="token line">  ],\n</span><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    filename: \'[name].bundle.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    clean: true,\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p>이제 <code>npm run build</code>를 실행하고 <code>/dist</code> 폴더를 확인해보세요. 모든 것이 잘 되었다면 이제 오래된 파일 없이 빌드에서 생성된 파일만 볼 수 있습니다!</p> <h2 id="the-manifest">The Manifest<a href="#the-manifest" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>webpack과 플러그인은 어떤 파일이 생성되는 것을 어떻게 "알고 있는지" 궁금할 것입니다. 답은 매니페스트에 있습니다. webpack은 모든 모듈이 출력 번들에 어떻게 매핑되는지 추적합니다. 만약 webpack의 <a href="/configuration/output"><code>output</code></a>을 다른 방식으로 관리하는데 관심이 있다면 매니페스트부터 시작하는 것이 좋습니다.</p> <p>매니페스트 데이터는 <a href="https://github.com/shellscape/webpack-manifest-plugin"><code>WebpackManifestPlugin</code></a>을 사용하여 쉽게 적용 가능한 json 파일로 추출할 수 있습니다.</p> <p>프로젝트에서 이 플러그인을 사용하는 방법에 대한 모든 예제를 다루지는 않겠지만 <a href="/concepts/manifest">콘셉 페이지</a> 및 <a href="/guides/caching">캐싱 가이드</a>를 읽어 보면 이것이 장기 캐싱과 어떻게 연결되는지 확인할 수 있습니다.</p> <h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>HTML에 번들을 동적으로 추가하는 방법을 배웠으므로 이제 <a href="/guides/development">개발 가이드</a>를 살펴보세요. 또는 심화 항목을 자세히 알아보고 싶다면 <a href="/guides/code-splitting">코드 스플리팅 가이드</a>를 추천합니다.</p> '}}]);