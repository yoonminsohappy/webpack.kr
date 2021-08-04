"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8789],{8789:function(n,s,a){a.r(s),s.default='<p>webpack은 다양한 환경과 <em>target을</em> 컴파일합니다. <code>target</code>이 무엇인지 자세히 이해하고 싶다면 <a href="/concepts/targets/">target의 개념에 대한 페이지</a>를 읽어보세요.</p> <h2 id="target"><code>target</code><a href="#target" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><code>string</code> <code>[string]</code> <code>false</code></p> <p>특정 환경을 대상으로 하도록 webpack에 지정합니다. browserslist 설정이 없으면 <code>\'browserslist\'</code> 혹은 <code>\'web\'</code>으로 설정됩니다.</p> <h3 id="string"><code>string</code><a href="#string" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>다음의 문자열은 <a href="https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js"><code>WebpackOptionsApply</code></a>를 통해서 지원됩니다.</p> <table> <thead> <tr> <th>Option</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td data-th="Option"><span><code>async-node[[X].Y]</code></span></td> <td data-th="Description"><span>Node.js와 유사한 환경에서 사용할 수 있도록 컴파일합니다 (<code>fs</code>와 <code>vm</code>을 사용하여 청크를 비동기식으로 로드합니다.)</span></td> </tr> <tr> <td data-th="Option"><span><code>electron[[X].Y]-main</code></span></td> <td data-th="Description"><span>메인 프로세스를 위해 <a href="https://electronjs.org/">Electron</a>으로 컴파일합니다.</span></td> </tr> <tr> <td data-th="Option"><span><code>electron[[X].Y]-renderer</code></span></td> <td data-th="Description"><span>렌더러 프로세스를 위해 <a href="https://electronjs.org/">Electron</a>으로 컴파일하여 <code>JsonpTemplatePlugin</code>, 브라우저 환경을 위한 <code>FunctionModulePlugin</code>, CommonJS와 Electron의 내장 모듈을 위한 <code>NodeTargetPlugin</code> 및 <code>ExternalsPlugin</code>을 사용하여 대상을 제공합니다.</span></td> </tr> <tr> <td data-th="Option"><span><code>electron[[X].Y]-preload</code></span></td> <td data-th="Description"><span>렌더러 프로세스를 위해 <a href="https://electronjs.org/">Electron</a>으로 컴파일하여 <code>asyncChunkLoading</code>을 <code>true</code>로 설정한 <code>NodeTemplatePlugin</code>, 브라우저 환경을 위한<code>FunctionModulePlugin</code>, <code>NodeTargetPlugin</code>, CommonJS 및 Electron의 내장 모듈을 위한 <code>ExternalsPlugin</code>을 사용하여 대상을 제공합니다.</span></td> </tr> <tr> <td data-th="Option"><span><code>node[[X].Y]</code></span></td> <td data-th="Description"><span>Node.js와 유사한 환경에서 사용할 수 있도록 컴파일 합니다. (Node.js <code>require</code>를 사용하여 청크를 로드합니다.)</span></td> </tr> <tr> <td data-th="Option"><span><code>node-webkit[[X].Y]</code></span></td> <td data-th="Description"><span>WebKit에서 사용하기 위해 컴파일하고 청크를 로드하기 위해 JSONP를 사용합니다. 내장된 Node.js 모듈 및 (실험적으로) <a href="http://docs.nwjs.io/en/latest/"><code>nw.gui</code></a>를 가져올 수 있습니다.</span></td> </tr> <tr> <td data-th="Option"><span><code>nwjs[[X].Y]</code></span></td> <td data-th="Description"><span><code>node-webkit</code>과 동일합니다.</span></td> </tr> <tr> <td data-th="Option"><span><code>web</code></span></td> <td data-th="Description"><span>브라우저와 동일한 환경에서 사용하기 위하여 컴파일합니다. <strong>(기본값)</strong></span></td> </tr> <tr> <td data-th="Option"><span><code>webworker</code></span></td> <td data-th="Description"><span>웹 워커로 컴파일합니다.</span></td> </tr> <tr> <td data-th="Option"><span><code>esX</code></span></td> <td data-th="Description"><span>지정된 ECMAScript 버전으로 컴파일합니다. 예: es5, es2020</span></td> </tr> <tr> <td data-th="Option"><span><code>browserslist</code></span></td> <td data-th="Description"><span>browserslist-config에서 <strong>(browserslist config를 사용할 수 있는 경우 기본값)</strong> 플랫폼과 ES 기능을 추론합니다.</span></td> </tr> </tbody> </table> <p>예를 들어, <code>target</code>을 <code>"electron-main"</code>으로 설정하면, webpack은 electron의 여러 변수를 추가합니다.</p> <p><code>node</code>와 <code>electron</code>의 버전은 선택할 수 있습니다. 위 표에서 <code>[[X].Y]</code>로 표시됩니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  target<span class="token operator">:</span> <span class="token string">\'node12.18\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>런타임 코드를 생성하는데 사용할 수 있는 ES 기능의 결정에 도움을 줍니다. (모든 청크와 모듈은 런타임 코드로 래핑 됩니다)</p> <h4 id="browserslist"><code>browserslist</code><a href="#browserslist" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h4> <p>프로젝트에 browserslist 설정이 있으면, webpack은 이 설정을 사용합니다.</p> <ul> <li>런타임 코드를 생성하는데 사용할 수 있는 ES 기능을 결정합니다.</li> <li>환경을 추론합니다. (예를 들어 일부 <a href="/configuration/output/#outputenvironment"><code>output.environment</code></a> 설정이 있는 <code>target: "node"</code>와 동일한 <code>마지막 2개의 Node 버전</code>).</li> </ul> <p>지원되는 browserslist</p> <ul> <li><code>browserslist</code> - 자동으로 browserslist 설정과 환경을 사용 (가장 근접한 <code>package.json</code>이나 <code>BROWSERSLIST</code> 환경 변수, 자세한 사항은 <a href="https://github.com/browserslist/browserslist#queries">browserslist documentation</a>을 참고)</li> <li><code>browserslist:modern</code> - 자동으로 해석된 browserslist 설정에서 <code>modern</code>사용</li> <li><code>browserslist:last 2 versions</code> - 명시적으로 browserslist 쿼리 사용(설정은 무시됨)</li> <li><code>browserslist:/path/to/config</code> - browserslist 설정을 지정할 수 있음</li> <li><code>browserslist:/path/to/config:modern</code> - browserslist 설정 및 환경을 명시적으로 지정</li> </ul> <h3 id="string-1"><code>[string]</code><a href="#string-1" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>복수의 target을 작성하면 기능의 공통적인 하위 집합이 사용됩니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  target<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'web\'</span><span class="token punctuation">,</span> <span class="token string">\'es5\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>webpack은 웹 플랫폼을 위해 런타임 코드를 생성하고 ES5 기능만 사용합니다.</p> <p>현재로서는 모든 target을 같이 혼용하여 사용하지 못합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  target<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'web\'</span><span class="token punctuation">,</span> <span class="token string">\'node\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>에러의 원인이 됩니다. 현재 webpack은 범용적인 target을 지원하지 않습니다.</p> <h3 id="false"><code>false</code><a href="#false" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>target</code>을 <code>false</code>로 설정하면, 위 목록에서 미리 정의된 target 중에 원하는 target이 없으면 플러그인이 적용되지 않습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  target<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>혹은 원하는 특정한 플러그인을 적용할 수 있습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  target<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>web<span class="token punctuation">.</span>JsonpTemplatePlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>output<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>LoaderTargetPlugin</span><span class="token punctuation">(</span><span class="token string">\'web\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>target 또는 <a href="/configuration/output/#outputenvironment">환경</a>에 대한 정보가 없으면, ES2015를 사용합니다.</p> '}}]);