const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
document.querySelectorAll('.faq-item button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item'); const answer=item.querySelector('.faq-answer'); const symbol=item.querySelector('.faq-symbol');
    const open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!open)); answer.hidden=open; if(symbol) symbol.textContent=open?'+':'−';
  });
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

/* Add the confirmed contact numbers here later, digits only for WhatsApp. */
const CONTACT={phone:'',whatsapp:''};
document.querySelectorAll('[data-call]').forEach(link=>{
  if(CONTACT.phone){link.href='tel:'+CONTACT.phone;}else{link.href='/contact#contact-details';link.title='Telephone number to be confirmed';}
});
document.querySelectorAll('[data-whatsapp]').forEach(link=>{
  if(CONTACT.whatsapp){link.href='https://wa.me/'+CONTACT.whatsapp;link.target='_blank';link.rel='noopener';}
  else{link.href='/contact#contact-details';link.title='WhatsApp number to be confirmed';}
});
