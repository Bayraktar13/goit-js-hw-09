!function(){function e(e){const t=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{t?n({delay:e}):o({delay:e})}),e)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const{delay:n,step:o,amount:l}=t.target.elements;for(let t=1;t<=Number(l.value);t++){Number(n.value),Number(o.value);e(t).then((({delay:e})=>{console.log(`✅ Обещание выполнено за ${e}мс`)})).catch((({delay:e})=>{console.log(`❌ Обещание отклонено за ${e}мс`)}))}}))}();
//# sourceMappingURL=03-promises.97091b02.js.map