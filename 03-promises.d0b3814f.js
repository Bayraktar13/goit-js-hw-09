!function(){function e(e,n){var o=Math.random()>.3;return new Promise((function(t,a){setTimeout((function(){o?t({position:e,delay:n}):a({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.target.elements,t=o.delay,a=o.step,c=o.amount,u=1;u<=Number(c.value);u++)e(u,Number(t.value)+(u-1)*Number(a.value)).then((function(e){var n=e.position,o=e.delay;console.log("✅ Обещание ".concat(n," выполнено за ").concat(o,"мс"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Обещание ".concat(n," отклонено за ").concat(o,"мс"))}))}))}();
//# sourceMappingURL=03-promises.d0b3814f.js.map
