// ==================================================
// SECTION 1 — GET PAGE ELEMENTS
// Add references to new HTML controls/elements here.
// ==================================================
const cards=document.getElementById("cards");
const search=document.getElementById("search");
const typeFilter=document.getElementById("typeFilter");
const groupFilter=document.getElementById("groupFilter");
const sort=document.getElementById("sort");
const count=document.getElementById("count");
const clear=document.getElementById("clear");

// ==================================================
// SECTION 1A — HAMBURGER MENU
// Opens and closes the hamburger menu.
// ==================================================
const menuButton=document.getElementById("menuButton");
const mainMenu=document.getElementById("mainMenu");

menuButton.addEventListener("click",function(){
 mainMenu.classList.toggle("menu-open");
 const menuIsOpen=mainMenu.classList.contains("menu-open");
 menuButton.setAttribute("aria-expanded",menuIsOpen);
});

const menuLinks=mainMenu.querySelectorAll("a");
menuLinks.forEach(function(link){
 link.addEventListener("click",function(){
  mainMenu.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded","false");
 });
});

// ==================================================
// SECTION 2 — HELPER FUNCTIONS
// Put small reusable helper functions here.
// ==================================================
const esc=v=>String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
const values=key=>[...new Set(sites.map(s=>s[key]).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
const fill=(el,arr)=>arr.forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=v;el.appendChild(o)});

// ==================================================
// SECTION 3 — FILL FILTER DROP-DOWN LISTS
// Put code that prepares filter choices here.
// ==================================================
fill(typeFilter,values("type"));
fill(groupFilter,values("group"));

// ==================================================
// SECTION 4 — RENDER / FILTER / SORT RESOURCE CARDS
// Put code that changes what cards are displayed here.
// ==================================================
function render(){
 const q=search.value.trim().toLowerCase(), t=typeFilter.value, g=groupFilter.value;
 let filtered=sites.filter(s=>{
  const hay=[s.name,s.description,s.type,s.group,...(s.tags||[])].join(" ").toLowerCase();
  return (!q||hay.includes(q))&&(!t||s.type===t)&&(!g||s.group===g);
 });
 filtered.sort((a,b)=>(a[sort.value]||"").localeCompare(b[sort.value]||"")||a.name.localeCompare(b.name));
 count.textContent=`${filtered.length} ${filtered.length===1?"resource":"resources"}`;
 cards.innerHTML="";
 if(!filtered.length){cards.innerHTML='<div class="empty">No resources match those filters.</div>';return}
 filtered.forEach(s=>{
  const el=document.createElement("article"); el.className="card";
  const tags=[`<span class="tag">${esc(s.type)}</span>`,`<span class="tag group">${esc(s.group)}</span>`,...(s.tags||[]).map(x=>`<span class="tag">${esc(x)}</span>`)].join("");
  el.innerHTML=`<h2>${esc(s.name)}</h2><p>${esc(s.description)}</p><div class="meta">${tags}</div><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Visit resource ↗</a>`;
  cards.appendChild(el);
 });
}

// ==================================================
// SECTION 5 — EVENT LISTENERS
// Put code that reacts to clicks, typing or selections here.
// ==================================================
[search,typeFilter,groupFilter,sort].forEach(el=>el.addEventListener("input",render));
clear.addEventListener("click",()=>{search.value="";typeFilter.value="";groupFilter.value="";sort.value="name";render()});

// ==================================================
// SECTION 6 — INITIAL PAGE DISPLAY
// Code here runs when the page first loads.
// ==================================================
render();
