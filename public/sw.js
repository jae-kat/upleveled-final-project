if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let r={};const t=e=>s(e,a),o={module:{uri:a},exports:r,require:t};n[a]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-3c48a342"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ERe-2knJOqxFyqghMRISG/_buildManifest.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/ERe-2knJOqxFyqghMRISG/_middlewareManifest.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/ERe-2knJOqxFyqghMRISG/_ssgManifest.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/161f6d26.63dc88d7f243229b.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/223.5944aace2802344e.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/479-b64976ac4b0c4042.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/598-d23a33c449251bdb.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/61-a59ef73b35c33559.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/90.616d237912c0441d.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/959-78678504e788cde4.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/main-01157a903e3a8de8.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/_app-0f27d1af98d6a643.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/about-f054a3d8aa62036b.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/chats/%5BchatId%5D-b9e87cbc90260066.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/goodbye-2dadc1ae7a80f3e7.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/index-ed0f3937cee548a5.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/login-3546ab301e10472b.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/logout-fec1d78c2706915b.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/matches-303977848f5f67bd.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/profile-dc205dec0b74439a.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/register-220ccdebe8f2bb1d.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/pages/users/%5BuserId%5D-30b99a5e2ed37241.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/chunks/webpack-01492a68417e9b9c.js",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/_next/static/css/6501692398b38fda.css",revision:"ERe-2knJOqxFyqghMRISG"},{url:"/bowlingIcon.png",revision:"dccdbb8ecbd6dbcdbf2c45a4274d674c"},{url:"/chatIcon.png",revision:"6d5b6cbd989377ef010ac2988b509540"},{url:"/closeMenuIcon.png",revision:"b39dbdad2769729131edbd5662cb95a6"},{url:"/coffeeIcon.png",revision:"4e72e4412a9cb5f22d88cd8049b0451d"},{url:"/duck.jpg",revision:"de365ba9df917aedb102dbe78ab08a16"},{url:"/editIcon.png",revision:"aef9fc6e472a20607ea6ca4ce13c3529"},{url:"/favicon.ico",revision:"db773969f9a967b1b1c3aefa7ea6a3a7"},{url:"/favicon.svg",revision:"09e1a3e0aea710aa410c37a44fce5a43"},{url:"/homeIcon.png",revision:"5ace84a322a054aa0a33127e15d0c35c"},{url:"/icon-192.png",revision:"ddbe41ef46d05b13aa5dcfda92fd2534"},{url:"/icon-512.png",revision:"847fddd8c9232c352baf400ab5ba4b19"},{url:"/icon-apple-touch.png",revision:"b18099bbe3ab9e960ade249f8fea31b6"},{url:"/kitten.jpg",revision:"7ff1647e9d7ab4524c50852e38527beb"},{url:"/logoutIcon.png",revision:"962d94d341d8f0cd488e1a23c9172c07"},{url:"/manifest.json",revision:"b20263a5ef837a89f6ffa6cf0488d2ef"},{url:"/menuIcon.png",revision:"5727acf41e0265cd8643e75e81d1b20b"},{url:"/musicIcon.png",revision:"29a433ca639b80382f3f9f3c9325713d"},{url:"/paperIcon.png",revision:"5379636df1ed1f63255a91dc4c9c3d0b"},{url:"/peopleIcon.png",revision:"dd83f393dd267a00dbffd8a376ed3028"},{url:"/picknick.jpg",revision:"858d97ae9d4f44f02c3b0f9328f61b29"},{url:"/picknickL.jpg",revision:"e607c2058bae7cfed70a7b5d41f264fa"},{url:"/picknickM.jpg",revision:"75bb7a7a1930d2fad058334b5156ab76"},{url:"/puppy.jpg",revision:"b2d19418ee59556802fb5f1d30496138"},{url:"/sunsetL.jpg",revision:"8a2edc89e1245a65010dda5109cd11a7"},{url:"/sunsetM.jpg",revision:"6d306a79a6104318b8274959b93ec646"},{url:"/sunsetS.jpg",revision:"305f44c110430c59dd49aeb7025b7df5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute("https://final-project-upleveled.herokuapp.com",new e.StaleWhileRevalidate({cacheName:"users",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:60})]}),"GET")}));
