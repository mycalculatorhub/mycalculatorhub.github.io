document.addEventListener("DOMContentLoaded",()=>{
const SOCSO_TABLE=[[30,0.4,0.1,0.2,0.3,0.2],[50,0.7,0.2,0.3,0.5,0.3],[70,1.1,0.3,0.5,0.8,0.5],[100,1.5,0.4,0.65,1.1,0.65],[140,2.1,0.6,0.9,1.5,0.9],[200,2.95,0.85,1.25,2.1,1.25],[300,4.35,1.25,1.85,3.1,1.85],[400,6.15,1.75,2.65,4.4,2.65],[500,7.85,2.25,3.35,5.6,3.35],[600,9.65,2.75,4.15,6.9,4.15],[700,11.35,3.25,4.85,8.1,4.85],[800,13.15,3.75,5.65,9.4,5.65],[900,14.85,4.25,6.35,10.6,6.35],[1000,16.65,4.75,7.15,11.9,7.15],[1100,18.35,5.25,7.85,13.1,7.85],[1200,20.15,5.75,8.65,14.4,8.65],[1300,21.85,6.25,9.35,15.6,9.35],[1400,23.65,6.75,10.15,16.9,10.15],[1500,25.35,7.25,10.85,18.1,10.85],[1600,27.15,7.75,11.65,19.4,11.65],[1700,28.85,8.25,12.35,20.6,12.35],[1800,30.65,8.75,13.15,21.9,13.15],[1900,32.35,9.25,13.85,23.1,13.85],[2000,34.15,9.75,14.65,24.4,14.65],[2100,35.85,10.25,15.35,25.6,15.35],[2200,37.65,10.75,16.15,26.9,16.15],[2300,39.35,11.25,16.85,28.1,16.85],[2400,41.15,11.75,17.65,29.4,17.65],[2500,42.85,12.25,18.35,30.6,18.35],[2600,44.65,12.75,19.15,31.9,19.15],[2700,46.35,13.25,19.85,33.1,19.85],[2800,48.15,13.75,20.65,34.4,20.65],[2900,49.85,14.25,21.35,35.6,21.35],[3000,51.65,14.75,22.15,36.9,22.15],[3100,53.35,15.25,22.85,38.1,22.85],[3200,55.15,15.75,23.65,39.4,23.65],[3300,56.85,16.25,24.35,40.6,24.35],[3400,58.65,16.75,25.15,41.9,25.15],[3500,60.35,17.25,25.85,43.1,25.85],[3600,62.15,17.75,26.65,44.4,26.65],[3700,63.85,18.25,27.35,45.6,27.35],[3800,65.65,18.75,28.15,46.9,28.15],[3900,67.35,19.25,28.85,48.1,28.85],[4000,69.15,19.75,29.65,49.4,29.65],[4100,70.85,20.25,30.35,50.6,30.35],[4200,72.65,20.75,31.15,51.9,31.15],[4300,74.35,21.25,31.85,53.1,31.85],[4400,76.15,21.75,32.65,54.4,32.65],[4500,77.85,22.25,33.35,55.6,33.35],[4600,79.65,22.75,34.15,56.9,34.15],[4700,81.35,23.25,34.85,58.1,34.85],[4800,83.15,23.75,35.65,59.4,35.65],[4900,84.85,24.25,36.35,60.6,36.35],[5000,86.65,24.75,37.15,61.9,37.15],[5100,88.35,25.25,37.85,63.1,37.85],[5200,90.15,25.75,38.65,64.4,38.65],[5300,91.85,26.25,39.35,65.6,39.35],[5400,93.65,26.75,40.15,66.9,40.15],[5500,95.35,27.25,40.85,68.1,40.85],[5600,97.15,27.75,41.65,69.4,41.65],[5700,98.85,28.25,42.35,70.6,42.35],[5800,100.65,28.75,43.15,71.9,43.15],[5900,102.35,29.25,43.85,73.1,43.85],[6000,104.15,29.75,44.65,74.4,44.65]];
const EIS_TABLE=[[30,0.05],[50,0.1],[70,0.15],[100,0.2],[140,0.25],[200,0.35],[300,0.5],[400,0.7],[500,0.9],[600,1.1],[700,1.3],[800,1.5],[900,1.7],[1000,1.9],[1100,2.1],[1200,2.3],[1300,2.5],[1400,2.7],[1500,2.9],[1600,3.1],[1700,3.3],[1800,3.5],[1900,3.7],[2000,3.9],[2100,4.1],[2200,4.3],[2300,4.5],[2400,4.7],[2500,4.9],[2600,5.1],[2700,5.3],[2800,5.5],[2900,5.7],[3000,5.9],[3100,6.1],[3200,6.3],[3300,6.5],[3400,6.7],[3500,6.9],[3600,7.1],[3700,7.3],[3800,7.5],[3900,7.7],[4000,7.9],[4100,8.1],[4200,8.3],[4300,8.5],[4400,8.7],[4500,8.9],[4600,9.1],[4700,9.3],[4800,9.5],[4900,9.7],[5000,9.9],[5100,10.1],[5200,10.3],[5300,10.5],[5400,10.7],[5500,10.9],[5600,11.1],[5700,11.3],[5800,11.5],[5900,11.7],[6000,11.9]];
const $=id=>document.getElementById(id);
const money=n=>"RM "+Number(n||0).toLocaleString("en-MY",{minimumFractionDigits:2,maximumFractionDigits:2});
const ceilRinggit=n=>Math.ceil(Math.max(0,n)-1e-9);
const val=id=>Number($(id)?.value||0);

function getSocso(wage,age){
 const w=Math.min(Math.max(0,wage),6000), r=SOCSO_TABLE.find(x=>w<=x[0])||SOCSO_TABLE.at(-1);
 return {employer:age<60?r[1]:r[3],employee:age<60?r[2]:0};
}
function getLindung(wage,participate){
 if(!participate)return {employee:0,employer:0};
 const w=Math.min(Math.max(0,wage),6000), r=SOCSO_TABLE.find(x=>w<=x[0])||SOCSO_TABLE.at(-1);
 return {employee:r[3],employer:r[5]};
}
function getEis(wage,age){
 if(age>=60)return 0;
 const w=Math.min(Math.max(0,wage),6000), r=EIS_TABLE.find(x=>w<=x[0])||EIS_TABLE.at(-1);
 return r[1];
}
/* Current KWSP Third Schedule wage-range approach for Part A/C/E. */
function epfSchedule(wage,empRate,erRate){
 if(wage<=10)return {employee:0,employer:0};
 if(wage>20000){
  const employee=wage*empRate, employer=wage*erRate;
  return {employee,employer,total:ceilRinggit(employee+employer)};
 }
 let upper=wage<=5000?Math.ceil((wage-1e-9)/20)*20:Math.ceil((wage-1e-9)/100)*100;
 upper=Math.min(upper,20000);
 return {employee:ceilRinggit(upper*empRate),employer:ceilRinggit(upper*erRate)};
}
function getEpf(wage,age,type){
 if(type==="foreign"){const x=wage*.02;return {employee:x,employer:x,note:"2% employee + 2% employer"}}
 if(type==="malaysian"){
  if(age>=60)return {...epfSchedule(wage,0,.04),note:"0% employee + 4% employer"};
  return {...epfSchedule(wage,.11,wage<=5000?.13:.12),note:"11% employee"};
 }
 if(age>=60)return {...epfSchedule(wage,.055,wage<=5000?.065:.06),note:"5.5% employee"};
 return {...epfSchedule(wage,.11,wage<=5000?.13:.12),note:"11% employee"};
}
const tax=[
 [5000,0],[20000,.01],[35000,.03],[50000,.06],[70000,.11],
 [100000,.19],[400000,.25],[600000,.26],[2000000,.28],[Infinity,.30]
];
function annualTax(x){
 let prev=0,t=0;
 for(const [top,rate] of tax){if(x<=prev)break;t+=(Math.min(x,top)-prev)*rate;if(x<=top)break;prev=top}
 return Math.max(0,t);
}
function pcbEstimate(gross,age,type,status,spouse,children,zakat,bonus,residency){
 const current=gross+bonus;
 if(residency==="nonresident")return {pcb:Math.round(current*.30*100)/100,note:"Non-resident estimate. Actual tax treatment depends on tax residency and remuneration details."};
 const epf=getEpf(gross,age,type).employee;
 const soc=getSocso(gross,age).employee;
 const spouseRelief=status==="married"&&spouse==="yes"?4000:0;
 const chargeable=Math.max(0,current*12-9000-spouseRelief-Math.max(0,children)*2000-Math.min(4000,epf*12)-Math.min(350,soc*12));
 let taxDue=annualTax(chargeable);
 if(chargeable<=35000)taxDue=Math.max(0,taxDue-400-(spouseRelief?400:0));
 taxDue=Math.max(0,taxDue-Math.max(0,zakat)*12);
 return {pcb:Math.round(taxDue/12*100)/100,note:"Estimated PCB using current resident tax rates and common relief assumptions. Actual computerized PCB can differ because HASiL payroll calculations use additional payroll information."};
}
let lastTake=0;
function calculate(grossOverride=null, render=true){
 const gross=grossOverride===null?val("grossSalary"):grossOverride, age=Math.min(75,Math.max(14,val("employeeAge")));
 const type=$("employeeType").value, lindung=document.querySelector('input[name="lindung"]:checked')?.value==="yes";
 const status=document.querySelector('input[name="taxStatus"]:checked')?.value||"single";
 const spouse=$("spouseNoIncome").value, children=Math.max(0,Math.floor(val("childrenCount"))),zakat=Math.max(0,val("zakatAmount")),bonus=Math.max(0,val("bonusAmount")),residency=$("taxResidency").value;
 if(!Number.isFinite(gross)||gross<0){alert("Please enter a valid salary.");return null}
 const epf=getEpf(gross,age,type), soc=getSocso(gross,age), mandatory=type==="foreign";
 const lind=getLindung(gross,lindung||mandatory), eis=getEis(gross,age), pcb=pcbEstimate(gross,age,type,status,spouse,children,zakat,bonus,residency);
 const deductions=epf.employee+soc.employee+lind.employee+eis+pcb.pcb, take=Math.max(0,gross-deductions);
 const employerTotal=epf.employer+soc.employer+lind.employer+eis;
 if(render){
   $("grossResult").textContent=money(gross);
   $("takeHome").textContent=money(take);
   $("epfAmount").textContent=money(epf.employee);
   $("epfRateLabel").textContent=epf.note;
   $("socsoAmount").textContent=money(soc.employee);
   $("lindungAmount").textContent=money(lind.employee);
   $("lindungLabel").textContent=mandatory?"mandatory":(lindung?"participating":"opted out");
   $("eisAmount").textContent=money(eis);
   $("pcbAmount").textContent=money(pcb.pcb);
   $("totalDeductions").textContent=money(deductions);
   $("annualGross").textContent=money(gross*12);
   $("annualTakeHome").textContent=money(take*12);
   $("pcbNote").textContent=pcb.note;
   $("employerEpf").textContent=money(epf.employer);
   $("employerSocso").textContent=money(soc.employer);
   $("employerEis").textContent=money(eis);
   $("employerTotal").textContent=money(employerTotal);
   if(grossOverride===null){
     const higher=calculate(gross+500,false);
     const after=higher?higher.take:take;
     $("raiseTakeHome").textContent="+"+money(Math.max(0,after-take));
     lastTake=take;
   }
 }
 return {take};
}
function run(){const r=calculate();if(r)lastTake=r.take}
$("calculateBtn").addEventListener("click",run);
["grossSalary","employeeAge","employeeType","childrenCount","zakatAmount","bonusAmount","spouseNoIncome","taxResidency"].forEach(id=>$(id).addEventListener("change",run));
document.querySelectorAll('input[name="lindung"],input[name="taxStatus"]').forEach(x=>x.addEventListener("change",()=>{
 $("spouseBox").classList.toggle("hidden",document.querySelector('input[name="taxStatus"]:checked')?.value!=="married");run();
}));
$("employeeType").addEventListener("change",()=>{
 $("foreignNotice").classList.toggle("hidden",$("employeeType").value!=="foreign");
 if($("employeeType").value==="foreign")document.querySelector('input[name="lindung"][value="yes"]').checked=true;
});
$("themeToggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("mch-theme",document.body.classList.contains("dark")?"dark":"light");$("themeToggle").textContent=document.body.classList.contains("dark")?"☀":"☾"});
if(localStorage.getItem("mch-theme")==="dark"){document.body.classList.add("dark");$("themeToggle").textContent="☀"}
$("shareBtn").addEventListener("click",async()=>{
 const text=`Malaysia Salary Calculator 2026\nGross: ${money(val("grossSalary"))}\nEstimated take-home: ${$("takeHome").textContent}\n${location.href.split("#")[0]}`;
 try{await navigator.clipboard.writeText(text);$("shareBtn").textContent="✓ Calculation copied";setTimeout(()=>$("shareBtn").textContent="↗ Share this calculation",1800)}catch(e){prompt("Copy this calculation:",text)}
});
$("foreignNotice").classList.add("hidden");run();
});