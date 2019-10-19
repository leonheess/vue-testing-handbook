(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{216:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue-cli-をインストールする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-をインストールする"}},[t._v("#")]),t._v(" vue-cli をインストールする")]),t._v(" "),a("p",[a("code",[t._v("vue-test-utils")]),t._v(" は、VueJS 公式のテスト用ライブラリで、本ガイド全体で使用していくツールです。このツールは、ブラウザ環境でも Node.js 環境でも動作しますし、どんなテストランナーとも組み合わせることができます。本ガイドでは Node.js 環境でテストを走らせていきます。")]),t._v(" "),a("p",[a("code",[t._v("vue-cli")]),t._v(" は "),a("code",[t._v("vue-test-utils")]),t._v(" を用いたテストを始めるにあたって一番簡単な方法です。これを用いることで、プロジェクトを作成する際に、Jest の設定も行ってくれます。Jest はよく使われているテストフレームワークです。次のコマンドを実行してインストールしましょう。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @vue/cli\n")])])]),a("p",[t._v("npm をお使いの場合には次のコマンドを実行してください。")]),t._v(" "),a("p",[t._v("or with npm:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n")])])]),a("p",[a("code",[t._v("vue create [project-name]")]),t._v(' を実行して新しいプロジェクトを作成しましょう。その際に "Manually select features" を選択し、さらに  "Unit Testing" を選んで、さらにテストランナーには Jest を選択します。')]),t._v(" "),a("p",[t._v("インストールが終わったら、"),a("code",[t._v("cd")]),t._v(" でプロジェクトのディレクトリに移動し、"),a("code",[t._v("yarn test:unit")]),t._v(" を実行します。今までの作業がうまくいっていれば、画面に次のようにメッセージが表示されます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" PASS  tests/unit/HelloWorld.spec.js\n  HelloWorld.vue\n    ✓ renders props.msg when passed (26ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        2.074s\n")])])]),a("p",[t._v("おめでとうございます。最初のテストを走らせて、無事テストをパスしました。")]),t._v(" "),a("h2",{attrs:{id:"最初のテストを書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最初のテストを書く"}},[t._v("#")]),t._v(" 最初のテストを書く")]),t._v(" "),a("p",[t._v("さて、先ほどはプロジェクト作成時に用意されていたテストを実行しました。次に自分の手を動かしてコンポーネント書き、そのためのテストを書いていきましょう。伝統的に TDD においては、まず失敗するテストを書いて、それからテストをパスするコードを書きます。ですがまずはコンポーネントを最初に書いていくことにしましょう。")]),t._v(" "),a("p",[t._v("プロジェクトを作成した時に作られた "),a("code",[t._v("src/components/HelloWorld.vue")]),t._v(" や "),a("code",[t._v("tests/unit/HelloWorld.spec.js")]),t._v(" は必要ありませんので、まずはこれを消してしまいましょう。")]),t._v(" "),a("h2",{attrs:{id:"greeting-component-を作成する。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#greeting-component-を作成する。"}},[t._v("#")]),t._v(" "),a("code",[t._v("Greeting")]),t._v(" component を作成する。")]),t._v(" "),a("p",[a("code",[t._v("Greeting.vue")]),t._v(" コンポーネントを作成していきます。このコンポーネント用のファイルは "),a("code",[t._v("src/components")]),t._v(" に配置します。"),a("code",[t._v("Greeting.vue")]),t._v(" には次のコードを書いてください。")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"テストを書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#テストを書く"}},[t._v("#")]),t._v(" テストを書く")]),t._v(" "),a("p",[a("code",[t._v("Greeting")]),t._v(" コンポーネントの役割はたった一つ。"),a("code",[t._v("greeting")]),t._v(" の値を render することだけです。ですからこのためのテストを書くには、次の方針でいきましょう。")]),t._v(" "),a("ol",[a("li",[t._v("コンポーネントを "),a("code",[t._v("mount")]),t._v(" を用いて render する。")]),t._v(" "),a("li",[t._v('コンポーネントのテキスト部分に "Vue and TDD" が含まれていることを assert する。(訳注: assert とはテストにおいて、ある値がどのような値になればテストを通ったことになるか、その定義を宣言すること。)')])]),t._v(" "),a("p",[t._v("では "),a("code",[t._v("Greeting.spec.js")]),t._v(" を "),a("code",[t._v("tests/unit")]),t._v(" ディレクトリの下に作成しましょう。そしてこのファイルの中で "),a("code",[t._v("Greeting.vue")]),t._v(" を import して、それから "),a("code",[t._v("mount")]),t._v(" をします。そうするとコードはだいたい次のようになります。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renders a greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("TDD に用いられるシンタックスは様々ですが、 Jest においては "),a("code",[t._v("describe")]),t._v(" と "),a("code",[t._v("it")]),t._v(" が比較的多く使われているようです。 "),a("code",[t._v("describe")]),t._v(" はテストがどのようなものなのか、概要を示すために記述します。今回のケースでは "),a("code",[t._v("Greeting.vue")]),t._v(" という部分ですね。"),a("code",[t._v("it")]),t._v(" は、それによって題名を与えられたテストが、どのような目的を果たすためにあるのか、ということを示します。コンポーネントの機能が増えた際には、"),a("code",[t._v("it")]),t._v(" ブロックを増やしていけばいいわけです。")]),t._v(" "),a("p",[t._v("さて、コンポーンネントを "),a("code",[t._v("mount")]),t._v(" を用いて render せねばなりません。この一般的な慣習として、これによって生じたコンポーネントを "),a("code",[t._v("wrapper")]),t._v(" という名前の変数に紐付けます。さらにその内容を画面に出力することにしましょう。これで正常に動作しているか確認できますね。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"テストを走らせる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#テストを走らせる"}},[t._v("#")]),t._v(" テストを走らせる")]),t._v(" "),a("p",[a("code",[t._v("yarn test:unit")]),t._v("　とターミナルに打ち込んで実行することでテストを走らせましょう。"),a("code",[t._v("tests")]),t._v(" ディレクトリ内にある "),a("code",[t._v(".spec.js")]),t._v(" でファイル名が終わるものが、自動的に実行されます。全てがうまくいっていれば、以下のように画面に表示されます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (27ms)\n\nconsole.log tests/unit/Greeting.spec.js:7\n  <div>\n    Vue and TDD\n  </div>\n")])])]),a("p",[t._v("先ほど書いたマークアップが正しく、テストが通ったということですね。ただし、このテストはいつでも通ります。なぜなら assertion をしていないので絶対に失敗しないからです。(それでももちろん有用ではあるのですが。) たとえ "),a("code",[t._v("Greeting.vue")]),t._v(" を書き換えて "),a("code",[t._v(t._s(t.greeting))]),t._v(" を削除してしまっても、このテストはパスしてしまいます。ではこれに変更を加えていきましょう。")]),t._v(" "),a("h2",{attrs:{id:"assertion-を作成する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assertion-を作成する"}},[t._v("#")]),t._v(" Assertion を作成する")]),t._v(" "),a("p",[t._v("コンポーネントが期待する挙動を正しくしているかどうかを判断するためには、assertion を作成する必要があります。そのためには Jest の "),a("code",[t._v("expect")]),t._v(" API を使用します。こんなふうにです。"),a("code",[t._v("expect(result).to [matcher] (actual)")])]),t._v(" "),a("p",[a("em",[t._v("matcher")]),t._v(" の部分には、値やオブジェクトと比較するためのメソッドが使用されます。例えば次のようにです。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("全ての matcher は "),a("a",{attrs:{href:"https://jestjs.io/docs/ja/expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest documentation"),a("OutboundLink")],1),t._v(" で見ることができます。"),a("code",[t._v("vue-test-utils")]),t._v(" ライブラリには一切 matcher は含まれていません。Jest が提供する matcher が十分なものであるからです。"),a("code",[t._v("Greeting")]),t._v(" の中のテキストを比較したいので次のように書いてみましょう。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("これでも機能しますが、"),a("code",[t._v("vue-test-utils")]),t._v(" はマークアップを取得するための、よりよい方法を提供しています。"),a("code",[t._v("wrapper.text")]),t._v(" です。ではこれを使ってテストを書く作業を終わりにしましょう。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renders a greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("console.log")]),t._v("　はもう必要ないので削除してしまってもかまいません。"),a("code",[t._v("yarn unit:test")]),t._v(" を実行してテストを走らせましょう。全てがうまくいっていれば、次のようになるはずです。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (15ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.477s, estimated 2s\n")])])]),a("p",[t._v("よさそうですね。ですが、TDD の伝統に則るのであれば、まずテストが失敗するところから初めて、次にそれが通るようにするという手順を踏んで、本当に機能していることを確認したほうがいいでしょう。テストをまず書いてから、そのあとに実装をします。そしてテストが失敗したら、そのエラー文を参考にコードを修正していきます。ではそうなるようにやってみましょう。すでに書いた "),a("code",[t._v("Greeting.vue")]),t._v(" コンポーネントを次のように変更します。")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue without TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("そして "),a("code",[t._v("yarn test:unit")]),t._v(" で実行します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('FAIL  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✕ renders a greeting (24ms)\n\n● Greeting.vue › renders a greeting\n\n  expect(received).toMatch(expected)\n\n  Expected value to match:\n    "Vue and TDD"\n  Received:\n    "Vue without TDD"\n\n     6 |     const wrapper = mount(Greeting)\n     7 |\n  >  8 |     expect(wrapper.text()).toMatch("Vue and TDD")\n       |                            ^\n     9 |   })\n    10 | })\n    11 |\n\n    at Object.<anonymous> (tests/unit/Greeting.spec.js:8:28)\n')])])]),a("p",[t._v("エラーに関するフィードバックを得ることができました。期待する値と、テスト実行時の実際の値がわかりますね。そしてどの行でエラーが出ているかも示されています。テストは失敗しました。これは私たちが予想していた通りです。"),a("code",[t._v("Greeting.vue")]),t._v(" を元に戻して、テストがもう一度通るようにしましょう。")]),t._v(" "),a("p",[t._v("次は "),a("code",[t._v("vue-test-utils")]),t._v(" が提供する、コンポーネントをレンダーするためのメソッドである "),a("code",[t._v("mount")]),t._v(" と "),a("code",[t._v("shallowMount")]),t._v(" についてみていきましょう。")])])}),[],!1,null,null,null);s.default=e.exports}}]);