import{_ as s,c as a,a as n,b as p,o as l,r as i}from"./app.6338dc7e.js";const u=JSON.parse('{"title":"A more complex example","description":"","frontmatter":{"mermaidTheme":"forest","title":"A more complex example"},"headers":[],"relativePath":"guide/more-examples.md","lastUpdated":1663198397000}'),t={name:"guide/more-examples.md"},r=p(`<h1 id="frontmatter-setup" tabindex="-1">Frontmatter Setup <a class="header-anchor" href="#frontmatter-setup" aria-hidden="true">#</a></h1><p>\u{1F4A1} The theme for each page can be set in the frontmatter mermaidTheme parameter! But is only valid is light mode...</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">mermaidTheme: forest</span></span>
<span class="line"><span style="color:#A6ACCD;">title: A more complex example</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h1><p>Images and links can be used as well..</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should place your image files in the public folder!</p></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#A6ACCD;">graph LR;</span></span>
<span class="line"><span style="color:#A6ACCD;">    K([&lt;img src=&#39;/vitepress-plugin-mermaid/K.png&#39; width=&#39;60&#39; &gt;])-.-&gt;G((&lt;img id=&#39;git&#39; src=&#39;/vitepress-plugin-mermaid/Octocat.png&#39; width=&#39;50&#39; &gt;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    H([&lt;img id=&#39;helm&#39; src=&#39;/vitepress-plugin-mermaid/helm.png&#39; width=&#39;60&#39; &gt;])-.-&gt;G</span></span>
<span class="line"><span style="color:#A6ACCD;">    G--&gt;A;</span></span>
<span class="line"><span style="color:#A6ACCD;">    A(&lt;img src=&#39;/vitepress-plugin-mermaid/argo-cd.png&#39; width=&#39;60&#39; &gt;)--&gt;D(&lt;img src=&#39;/vitepress-plugin-mermaid/ocp.png&#39; width=&#39;60&#39; &gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef img fill:none,color:none,stroke:none,border-radius:50px</span></span>
<span class="line"><span style="color:#A6ACCD;">class G,D,A,K,H img</span></span>
<span class="line"><span style="color:#A6ACCD;">click G &quot;http://www.github.com&quot; &quot;This is a link&quot; _blank</span></span>
<span class="line"><span style="color:#A6ACCD;">click K &quot;https://kustomize.io/&quot; _blank</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="render" tabindex="-1">Render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h1><p>In lith mode the arrows are green since we are using forest here<br> Kustomize and github are links in here!</p>`,9);function o(c,m,d,g,A,h){const e=i("Mermaid");return l(),a("div",null,[r,n(e,{id:"mermaid_382ee169",graph:"graph%20LR%3B%0A%20%20%20%20K(%5B%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2FK.png'%20width%3D'60'%20%3E%5D)-.-%3EG((%3Cimg%20id%3D'git'%20src%3D'%2Fvitepress-plugin-mermaid%2FOctocat.png'%20width%3D'50'%20%3E))%3B%0A%20%20%20%20H(%5B%3Cimg%20id%3D'helm'%20src%3D'%2Fvitepress-plugin-mermaid%2Fhelm.png'%20width%3D'60'%20%3E%5D)-.-%3EG%0A%20%20%20%20G--%3EA%3B%0A%20%20%20%20A(%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2Fargo-cd.png'%20width%3D'60'%20%3E)--%3ED(%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2Focp.png'%20width%3D'60'%20%3E)%3B%0AclassDef%20img%20fill%3Anone%2Ccolor%3Anone%2Cstroke%3Anone%2Cborder-radius%3A50px%0Aclass%20G%2CD%2CA%2CK%2CH%20img%0Aclick%20G%20%22http%3A%2F%2Fwww.github.com%22%20%22This%20is%20a%20link%22%20_blank%0Aclick%20K%20%22https%3A%2F%2Fkustomize.io%2F%22%20_blank"})])}var D=s(t,[["render",o]]);export{u as __pageData,D as default};