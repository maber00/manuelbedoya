import{g as l}from"./index.Brfk6Bdo.js";import{S as y}from"./ScrollTrigger.6qCihK2t.js";l.registerPlugin(y);document.addEventListener("DOMContentLoaded",()=>{l.set(["#portfolio-section h2",".tag-filter",".project-item"],{opacity:0,y:100}),l.to("#portfolio-section h2",{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:"#portfolio-section",start:"top center",toggleActions:"play none none reset"}}),l.fromTo("#underline",{scaleX:0},{scaleX:1,duration:1,delay:.5,ease:"power3.out",scrollTrigger:{trigger:"#portfolio-section",start:"top center",toggleActions:"play none none reset"}}),l.to(".tag-filter",{opacity:1,y:0,duration:.8,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:"#portfolio-section",start:"top center",toggleActions:"play none none reset"}}),l.to(".project-item",{opacity:1,visibility:"visible",y:0,duration:.8,stagger:{amount:1,from:"start"},ease:"power3.out",scrollTrigger:{trigger:".project-item",start:"top bottom-=100",toggleActions:"play none none reset"}});const r=document.getElementById("portfolioModal"),g=document.getElementById("closeModalBtn"),u=document.querySelectorAll(".tag-filter"),m=document.querySelectorAll(".project-item"),a=document.getElementById("modalTitle"),d=document.getElementById("modalTags"),i=document.getElementById("carouselContainer");function f(o){const e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,t=o.match(e);return t&&t[2].length===11?t[2]:null}if(u.forEach(o=>{o.addEventListener("click",()=>{const e=o.getAttribute("data-filter")||"Todo";u.forEach(t=>t.classList.remove("bg-[#B1293E]")),o.classList.add("bg-[#B1293E]"),m.forEach(t=>{const c=t.getAttribute("data-category")?.split(",")||[],n=e==="Todo"||c.includes(e);t.classList.toggle("hidden",!n)})})}),r&&g&&i&&a&&d){m.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-title"),c=e.getAttribute("data-video-url"),n=e.getAttribute("data-images")?.split("|").filter(Boolean)||[],p=e.getAttribute("data-category");if(r.classList.remove("hidden"),document.body.style.overflow="hidden",i.innerHTML="",c){const s=f(c);s&&(i.innerHTML=`
                                <div class="video-wrapper w-full h-full">
                                    <iframe 
                                        class="w-full h-full" 
                                        src="https://www.youtube.com/embed/${s}" 
                                        frameborder="0" 
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            `)}else n.length>0&&(i.innerHTML=`
                            <div class="flex flex-col gap-8 w-full max-h-full p-4">
                                <div id="mainImage" class="w-full h-[60vh]">
                                    <img 
                                        src="${n[0]}" 
                                        alt="${t}"
                                        class="w-full h-full object-contain"
                                    />
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    ${n.map(s=>`
                                        <div class="w-full aspect-[4/3] cursor-pointer">
                                            <img 
                                                src="${s}" 
                                                alt="${t}"
                                                class="w-full h-full object-cover thumbnail-img"
                                                onclick="document.querySelector('#mainImage img').src = '${s}'"
                                            />
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        `);a&&(a.textContent=t),d&&(d.textContent=p)})});const o=()=>{r.classList.add("hidden"),document.body.style.overflow="",i.innerHTML=""};g.addEventListener("click",o),r.addEventListener("click",e=>{e.target===r&&o()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&o()})}});
