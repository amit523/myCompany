document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const mobile=document.querySelector('.mobile');
if(mobile){mobile.addEventListener('click',()=>{const nav=document.querySelector('.navlinks'); if(nav){nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='#fff';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #dfe7f1'}})}
