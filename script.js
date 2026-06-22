const d=document.getElementById('display');
function append(v){d.value+=v}
function clearDisplay(){d.value=''}
function deleteLast(){d.value=d.value.slice(0,-1)}
function calculate(){try{d.value=eval(d.value)}catch{d.value='Error'}}
document.addEventListener('keydown',e=>{if((e.key>='0'&&e.key<='9')||['+','-','*','/','.','%'].includes(e.key))d.value+=e.key;if(e.key==='Enter')calculate();if(e.key==='Backspace')deleteLast();if(e.key==='Escape')clearDisplay();});