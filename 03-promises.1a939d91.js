!function(){function e(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const{delay:o,step:n,amount:l}=t.target.elements;for(let t=1;t<=Number(l.value);t++){e(t,Number(o.value)+(t-1)*Number(n.value)).then((({position:e,delay:t})=>{console.log(`✅ Обещание ${e} выполнено за ${t}мс`)})).catch((({position:e,delay:t})=>{console.log(`❌ Обещание ${e} отклонено за ${t}мс`)}))}}))}();
//# sourceMappingURL=03-promises.1a939d91.js.map
