var Pl=["\u05D9\u05E0\u05D5\u05D0\u05E8","\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8","\u05DE\u05E8\u05E5","\u05D0\u05E4\u05E8\u05D9\u05DC","\u05DE\u05D0\u05D9","\u05D9\u05D5\u05E0\u05D9","\u05D9\u05D5\u05DC\u05D9","\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8","\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8","\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8","\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8","\u05D3\u05E6\u05DE\u05D1\u05E8"];var le={x:24,z:47},Ll=400,ed=15e3,nd=1e4,Ja=4e4,Ar=1e3,id=.01,Is=12,Dl=.5,Rr=12,rs={cost:800,months:1,boost:1.7},Nn={guests:250,rating:600,months:24},Fi={carousel:{he:"\u05E7\u05E8\u05D5\u05E1\u05DC\u05D4",icon:"\u{1F3A0}",w:3,d:3,h:7,cost:1400,upkeep:35,exc:2.4,int:1.1,nau:.7,cap:20,cycle:18,price:3,desc:"\u05E1\u05D5\u05E1\u05D9\u05DD \u05DE\u05E1\u05EA\u05D5\u05D1\u05D1\u05D9\u05DD. \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05DB\u05DC \u05D0\u05D7\u05D3"},ferris:{he:"\u05D2\u05DC\u05D2\u05DC \u05E2\u05E0\u05E7",icon:"\u{1F3A1}",w:4,d:2,h:14,cost:2200,upkeep:45,exc:3.1,int:.9,nau:.4,cap:24,cycle:26,price:4,desc:"\u05E0\u05D5\u05E3 \u05DE\u05DC\u05DE\u05E2\u05DC\u05D4, \u05D1\u05DC\u05D9 \u05E4\u05D7\u05D3"},teacups:{he:"\u05E1\u05E4\u05DC\u05D9\u05DD \u05DE\u05E1\u05EA\u05D5\u05D1\u05D1\u05D9\u05DD",icon:"\u2615",w:3,d:3,h:4,cost:1700,upkeep:40,exc:3.3,int:3,nau:4.4,cap:16,cycle:16,price:4,desc:"\u05DE\u05E1\u05EA\u05D5\u05D1\u05D1 \u05DE\u05D4\u05E8. \u05DC\u05D0 \u05D0\u05D7\u05E8\u05D9 \u05D0\u05E8\u05D5\u05D7\u05D4"},bumper:{he:"\u05DE\u05DB\u05D5\u05E0\u05D9\u05D5\u05EA \u05DE\u05EA\u05E0\u05D2\u05E9\u05D5\u05EA",icon:"\u{1F697}",w:4,d:3,h:5,cost:2400,upkeep:50,exc:4,int:2.4,nau:.9,cap:10,cycle:18,price:5,desc:"\u05DB\u05D5\u05DC\u05DD \u05D0\u05D5\u05D4\u05D1\u05D9\u05DD \u05DC\u05D4\u05EA\u05E0\u05D2\u05E9"},ship:{he:"\u05E1\u05E4\u05D9\u05E0\u05EA \u05E4\u05D9\u05E8\u05D0\u05D8\u05D9\u05DD",icon:"\u26F5",w:4,d:3,h:9,cost:2900,upkeep:60,exc:4.7,int:5.2,nau:4.6,cap:28,cycle:20,price:6,desc:"\u05E0\u05D3\u05E0\u05D3\u05D4 \u05E2\u05E0\u05E7\u05D9\u05EA. \u05D4\u05D1\u05D8\u05DF \u05DE\u05EA\u05D4\u05E4\u05DB\u05EA"},tower:{he:"\u05DE\u05D2\u05D3\u05DC \u05E0\u05E4\u05D9\u05DC\u05D4",icon:"\u{1F5FC}",w:2,d:2,h:30,cost:3400,upkeep:70,exc:5.4,int:7.3,nau:2.4,cap:12,cycle:20,price:7,desc:"\u05E2\u05D5\u05DC\u05D9\u05DD \u05DC\u05D0\u05D8, \u05E0\u05D5\u05E4\u05DC\u05D9\u05DD \u05DE\u05D4\u05E8"}},sd=["carousel","ferris","teacups","bumper","ship","tower"],as={he:"\u05E7\u05D5\u05E4\u05D4",icon:"\u{1F39F}\uFE0F",w:2,d:1,h:5,cost:300,upkeep:20,desc:"\u05DB\u05D0\u05DF \u05E7\u05D5\u05E0\u05D9\u05DD \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05D5\u05E7\u05D5\u05D1\u05E2\u05D9\u05DD \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD. \u05D1\u05DC\u05D9 \u05E7\u05D5\u05E4\u05D4 \u05D4\u05E4\u05D0\u05E8\u05E7 \u05E1\u05D2\u05D5\u05E8"},yn={burger:{he:"\u05D4\u05DE\u05D1\u05D5\u05E8\u05D2\u05E8",icon:"\u{1F354}",cost:450,upkeep:15,unit:1.4,price:4,worth:6,hunger:-55,thirst:8,litter:!0,kind:"food"},pizza:{he:"\u05E4\u05D9\u05E6\u05D4",icon:"\u{1F355}",cost:500,upkeep:15,unit:1.3,price:4,worth:6,hunger:-50,thirst:6,litter:!0,kind:"food"},drinks:{he:"\u05E9\u05EA\u05D9\u05D9\u05D4 \u05E7\u05E8\u05D4",icon:"\u{1F964}",cost:350,upkeep:12,unit:.6,price:2.5,worth:4,thirst:-60,toilet:22,litter:!0,kind:"drink"},icecream:{he:"\u05D2\u05DC\u05D9\u05D3\u05D4",icon:"\u{1F366}",cost:400,upkeep:12,unit:.8,price:3,worth:4.5,hunger:-18,thirst:-12,happy:6,litter:!1,kind:"food"},balloons:{he:"\u05D1\u05DC\u05D5\u05E0\u05D9\u05DD",icon:"\u{1F388}",cost:400,upkeep:10,unit:.7,price:3,worth:5,happy:10,kind:"gift"},toilets:{he:"\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",icon:"\u{1F6BB}",cost:350,upkeep:20,unit:0,price:0,worth:1.5,toilet:-100,kind:"toilet"}},rd=["burger","pizza","drinks","icecream","balloons","toilets"],Oi={oak:{he:"\u05E2\u05E5",icon:"\u{1F333}",cost:25,beauty:3,h:5},pine:{he:"\u05D0\u05D5\u05E8\u05DF",icon:"\u{1F332}",cost:20,beauty:3,h:6},palm:{he:"\u05D3\u05E7\u05DC",icon:"\u{1F334}",cost:35,beauty:4,h:7},bush:{he:"\u05E9\u05D9\u05D7",icon:"\u{1F33F}",cost:10,beauty:2,h:2},flowers:{he:"\u05E2\u05E8\u05D5\u05D2\u05EA \u05E4\u05E8\u05D7\u05D9\u05DD",icon:"\u{1F337}",cost:15,beauty:4,h:1},statue:{he:"\u05E4\u05E1\u05DC",icon:"\u{1F5FF}",cost:180,beauty:9,h:4},fountain:{he:"\u05DE\u05D6\u05E8\u05E7\u05D4",icon:"\u26F2",cost:320,beauty:15,h:3,w:2,d:2}},ad=["oak","pine","palm","bush","flowers","statue","fountain"],pn={bench:{id:1,he:"\u05E1\u05E4\u05E1\u05DC",icon:"\u{1FA91}",cost:40,desc:"\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E2\u05D9\u05D9\u05E4\u05D9\u05DD \u05D9\u05D5\u05E9\u05D1\u05D9\u05DD \u05DC\u05E0\u05D5\u05D7"},bin:{id:2,he:"\u05E4\u05D7 \u05D0\u05E9\u05E4\u05D4",icon:"\u{1F5D1}\uFE0F",cost:30,desc:"\u05E4\u05D7\u05D5\u05EA \u05DC\u05DB\u05DC\u05D5\u05DA \u05E2\u05DC \u05D4\u05E9\u05D1\u05D9\u05DC\u05D9\u05DD"},lamp:{id:3,he:"\u05E4\u05E0\u05E1",icon:"\u{1F4A1}",cost:35,beauty:2,desc:"\u05E7\u05E6\u05EA \u05D9\u05D5\u05E4\u05D9 \u05DC\u05E9\u05D1\u05D9\u05DC"}},Ka=[null,"bench","bin","lamp"],os={cleaner:{he:"\u05DE\u05E0\u05E7\u05D4",icon:"\u{1F9F9}",wage:280,desc:"\u05DE\u05E0\u05E7\u05D4 \u05DC\u05DB\u05DC\u05D5\u05DA \u05D5\u05D4\u05E7\u05D0\u05D5\u05EA \u05DE\u05D4\u05E9\u05D1\u05D9\u05DC\u05D9\u05DD"},mechanic:{he:"\u05DE\u05DB\u05D5\u05E0\u05D0\u05D9",icon:"\u{1F527}",wage:400,desc:"\u05D1\u05D5\u05D3\u05E7 \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05DF \u05EA\u05E7\u05DC\u05D5\u05EA"},entertainer:{he:"\u05D1\u05D3\u05E8\u05DF",icon:"\u{1F921}",wage:320,desc:"\u05DE\u05E9\u05DE\u05D7 \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D5\u05DE\u05E7\u05E6\u05E8 \u05D0\u05EA \u05D4\u05D4\u05DE\u05EA\u05E0\u05D4 \u05D1\u05EA\u05D5\u05E8"}},od=["cleaner","mechanic","entertainer"],Ee={stationLen:4,cars:6,seats:2,carLen:.62,upkeepBase:30,upkeepPerPiece:.8,price:7,maxPieces:400,colors:[15087942,2792948,16758531,8599788,448160,16739226]},wn={station:{he:"\u05EA\u05D7\u05E0\u05D4",cost:150,dh:0},straight:{he:"\u05D9\u05E9\u05E8",icon:"\u2B06",cost:40,dh:0},left:{he:"\u05E9\u05DE\u05D0\u05DC\u05D4",icon:"\u21B0",cost:55,dh:0,turn:3},right:{he:"\u05D9\u05DE\u05D9\u05E0\u05D4",icon:"\u21B1",cost:55,dh:0,turn:1},up:{he:"\u05E2\u05DC\u05D9\u05D9\u05D4",icon:"\u2197",cost:60,dh:1},down:{he:"\u05D9\u05E8\u05D9\u05D3\u05D4",icon:"\u2198",cost:60,dh:-1},steepUp:{he:"\u05E2\u05DC\u05D9\u05D9\u05D4 \u05D7\u05D3\u05D4",icon:"\u23EB",cost:80,dh:2},steepDown:{he:"\u05E6\u05DC\u05D9\u05DC\u05D4",icon:"\u23EC",cost:80,dh:-2},lift:{he:"\u05E9\u05E8\u05E9\u05E8\u05EA",icon:"\u26D3",cost:130,dh:2,chain:!0},loop:{he:"\u05DC\u05D5\u05E4",icon:"\u27B0",cost:700,dh:0,len:2},brake:{he:"\u05D1\u05DC\u05DE\u05D9\u05DD",icon:"\u{1F6D1}",cost:90,dh:0,brake:!0}},cd=["straight","left","right","up","down","lift","steepUp","steepDown","loop","brake"],ja=4,Nl=3,ld=["\u05E0\u05D5\u05E2\u05D4","\u05D3\u05E0\u05D9\u05D0\u05DC","\u05DE\u05D0\u05D9\u05D4","\u05D0\u05D9\u05EA\u05D9","\u05EA\u05DE\u05E8","\u05D9\u05D5\u05E0\u05EA\u05DF","\u05E9\u05D9\u05E8\u05D4","\u05E2\u05D5\u05DE\u05E8","\u05D9\u05E2\u05DC","\u05D0\u05D5\u05E8\u05D9","\u05E8\u05D5\u05E0\u05D9","\u05D0\u05D1\u05D9\u05D2\u05D9\u05DC","\u05D0\u05DC\u05D5\u05DF","\u05D4\u05D3\u05E8","\u05E0\u05D3\u05D1","\u05DC\u05D9\u05D4","\u05E2\u05D9\u05D3\u05D5","\u05DE\u05D9\u05DB\u05DC","\u05D2\u05D9\u05DC","\u05D0\u05D3\u05DC","\u05E8\u05D5\u05DF","\u05D8\u05DC\u05D9\u05D4","\u05D0\u05E8\u05D9\u05D0\u05DC","\u05E9\u05D7\u05E8","\u05D1\u05DF","\u05D4\u05D9\u05DC\u05D4","\u05D9\u05D5\u05D0\u05D1","\u05E2\u05E0\u05D1\u05E8","\u05E2\u05DE\u05D9\u05EA","\u05D0\u05DC\u05D4","\u05D3\u05D5\u05E8","\u05E8\u05D5\u05EA\u05DD","\u05DE\u05E9\u05D4","\u05E9\u05E8\u05D4","\u05D9\u05D5\u05E1\u05D9","\u05E8\u05D7\u05DC","\u05D0\u05D1\u05D9","\u05DC\u05D0\u05D4","\u05D3\u05D5\u05D3","\u05D0\u05E1\u05EA\u05E8"],hd="\u05D0\u05D1\u05D2\u05D3\u05D4\u05D6\u05D7\u05D8\u05D9\u05DB\u05DC\u05DE\u05E0\u05E1\u05E2\u05E4\u05E6\u05E7\u05E8\u05E9\u05EA";var je=[0,1,0,-1],Qe=[-1,0,1,0],Ps=9.81/3,ud=10.8,Ir=3,xm=.1,cs=.1,Ls=1,kl=2,Ds=4,ls=8,_m=16;function pi(s,t){let e=wn[s];if(e.turn){let i=(t.d+e.turn)%4;return{occ:[{x:t.x,z:t.z,lo:t.h,hi:t.h+1}],next:{x:t.x+je[i],z:t.z+Qe[i],h:t.h,d:i}}}if(s==="loop"){let i=t.x+je[t.d],r=t.z+Qe[t.d];return{occ:[{x:t.x,z:t.z,lo:t.h,hi:t.h+7},{x:i,z:r,lo:t.h,hi:t.h+7}],next:{x:i+je[t.d],z:r+Qe[t.d],h:t.h,d:t.d}}}let n=t.h+e.dh;return{occ:[{x:t.x,z:t.z,lo:Math.min(t.h,n),hi:Math.max(t.h,n)+1}],next:{x:t.x+je[t.d],z:t.z+Qe[t.d],h:n,d:t.d}}}var dd=(s,t)=>s.x===t.x&&s.z===t.z&&s.h===t.h&&s.d===t.d,Bl=(s,t)=>s>=0&&t>=0&&s<48&&t<48;function Ns(s,t,e){let n=[],i={x:s,z:t,h:0,d:e};for(let r=0;r<Ee.stationLen;r++)n.push({t:"station",...i}),i=pi("station",i).next;return n}function En(s){let t=s[s.length-1];return pi(t.t,t).next}var ti=s=>s.length>Ee.stationLen&&dd(En(s),s[0]);function ym(s,t,e){let n=s.d,i=je[n],r=Qe[n],a=je[(n+1)%4],o=Qe[(n+1)%4],c=s.x+.5-i*.5,l=s.z+.5-r*.5,h=s.h*.5,u=wn[s.t],d=(v,g,p,w)=>{e.x.push(v),e.y.push(g),e.z.push(p),e.f.push(w),e.p.push(t)};if(u.turn){let v=u.turn===1?1:-1,g=10,p=c+a*v*.5,w=l+o*v*.5;for(let M=0;M<g;M++){let x=M/g*Math.PI/2,S=Math.cos(x)*.5,b=Math.sin(x)*.5;d(p-a*v*S+i*b,h,w-o*v*S+r*b,_m)}return}if(s.t==="loop"){for(let p=0;p<64;p++){let w=p/64,M=2*w+1.45*Math.sin(2*Math.PI*w),x=1.45*(1-Math.cos(2*Math.PI*w)),S=.5*(w-.5)*Math.sin(Math.PI*w);d(c+i*M+a*S,h+x,l+r*M+o*S,ls)}return}let f=(u.chain?Ls:0)|(u.brake?kl:0)|(s.t==="station"?Ds:0),m=8;for(let v=0;v<m;v++){let g=v/m;d(c+i*g,h+u.dh*.5*g,l+r*g,f)}}function Cr(s,t,e,n){let i=s.length,r=Math.ceil(e*3),a=[];for(let c=-r;c<=r;c++)a.push(Math.exp(-(c*c)/(2*e*e)));let o=new Float32Array(i);for(let c=0;c<i;c++){if(t[c]){o[c]=s[c];continue}let l=0,h=0;for(let u=-r;u<=r;u++){let d=c+u;if(n)d=(d%i+i)%i;else if(d<0||d>=i)continue;l+=s[d]*a[u+r],h+=a[u+r]}o[c]=l/h}return o}function zl(s,t=ti(s)){let e={x:[],y:[],z:[],f:[],p:[]};if(s.forEach((A,_)=>ym(A,_,e)),!t){let A=En(s),_=je[A.d],E=Qe[A.d];e.x.push(A.x+.5-_*.5),e.y.push(A.h*.5),e.z.push(A.z+.5-E*.5),e.f.push(0),e.p.push(s.length-1)}let n=e.x.length,i=[0],r=t?n:n-1;for(let A=0;A<r;A++){let _=(A+1)%n;i.push(i[A]+Math.hypot(e.x[_]-e.x[A],e.y[_]-e.y[A],e.z[_]-e.z[A]))}let a=i[r],o=Math.max(2,Math.round(a/xm)),c=a/(t?o:o-1),l=new Float32Array(o),h=new Float32Array(o),u=new Float32Array(o),d=new Uint8Array(o),f=new Int16Array(o),m=0;for(let A=0;A<o;A++){let _=A*c;for(;m<r-1&&i[m+1]<_;)m++;let E=(m+1)%n,I=Math.min(1,Math.max(0,(_-i[m])/(i[m+1]-i[m]||1)));l[A]=e.x[m]+(e.x[E]-e.x[m])*I,h[A]=e.y[m]+(e.y[E]-e.y[m])*I,u[A]=e.z[m]+(e.z[E]-e.z[m])*I,d[A]=e.f[I<.5?m:E],f[A]=e.p[I<.5?m:E]}let v=new Uint8Array(o),g=new Uint8Array(o);for(let A=0;A<o;A++)v[A]=d[A]&(ls|Ds)?1:0,g[A]=d[A]&ls?1:0;t||(v[0]=v[o-1]=g[0]=g[o-1]=1);let p=Cr(h,v,9,t);p=Cr(p,v,5,t);let w=Cr(l,g,1.6,t),M=Cr(u,g,1.6,t),x=new Float32Array(o*3),S=new Float32Array(o*3),b=A=>t?(A%o+o)%o:Math.min(o-1,Math.max(0,A));for(let A=0;A<o;A++){let _=b(A-2),E=b(A+2),I=w[E]-w[_],L=p[E]-p[_],N=M[E]-M[_],V=Math.hypot(I,L,N)||1;x[A*3]=I/V,x[A*3+1]=L/V,x[A*3+2]=N/V}for(let A=0;A<o;A++){let _=b(A-3),E=b(A+3),I=t?6*c:Math.max(c,(E-_)*c);S[A*3]=(x[E*3]-x[_*3])/I,S[A*3+1]=(x[E*3+1]-x[_*3+1])/I,S[A*3+2]=(x[E*3+2]-x[_*3+2])/I}return{n:o,ds:c,L:t?o*c:(o-1)*c,closed:t,X:w,Y:p,Z:M,T:x,K:S,FL:d,P:f,pieces:s,bank:null}}var Ul=.2,Fl=.33;function Hl(s,t,e,n=[0,1,0]){let i=s.T[t*3],r=s.T[t*3+1],a=s.T[t*3+2];if(s.FL[t]&ls){let u=s.P[t],d=s.pieces?s.pieces[u].d:0,f=je[(d+1)%4],m=Qe[(d+1)%4],v=0*a-m*r,g=m*i-f*a,p=f*r-0*i,w=Math.hypot(v,g,p)||1;return n[0]=v/w,n[1]=g/w,n[2]=p/w,n}let o=-r*i,c=1-r*r,l=-r*a,h=Math.hypot(o,c,l)||1;if(o/=h,c/=h,l/=h,e){let u=r*l-a*c,d=a*o-i*l,f=i*c-r*o,m=Math.cos(e),v=Math.sin(e);o=o*m+u*v,c=c*m+d*v,l=l*m+f*v}return n[0]=o,n[1]=c,n[2]=l,n}function Vl(s){if(!ti(s))return{ok:!1,reason:"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05DC\u05D0 \u05E1\u05D2\u05D5\u05E8. \u05E6\u05E8\u05D9\u05DA \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05EA\u05D7\u05E0\u05D4"};let t=zl(s,!0),e=t.n,n=t.ds,i=t.L,r=Ee.stationLen,a=Ee.cars*Ee.carLen,o=r-a/2-.15,c=i+o,l=[],h=o,u=0,d=0,f=0,m=1/120,v=1.7,g=2.4,p=1.3,w=0,M=0,x=0,S=0,b=0,A=1,_=1,E=0,I=0,L=0,N=0,V=!1,q=0,O=new Float32Array(e),X=null;for(l.push(h);d<400;){let Ut=(h/n%e+e)%e,Y=Math.floor(Ut),at=t.FL[Y],nt=t.T[Y*3+1],Et=h>=i||h<r+.2,Ft=-Ps*nt-.012*Ps-.0045*u*u;if(h>=i){let wt=c-h,jt=wt>0?Math.sqrt(2*2.2*wt):0;if(Ft=0,u=Math.min(u,jt),wt<=.01||u<.02)break}else Et?Ft=u<p?2.2:-1.5:at&Ls?u<v&&(u=v,Ft=Math.max(0,Ft)):at&kl&&u>g&&(Ft=-7);if(u+=Ft*m,!Et&&!(at&Ls)&&u<=.03){X={reason:"\u05D4\u05E8\u05DB\u05D1\u05EA \u05E0\u05E2\u05E6\u05E8\u05D4 \u05D5\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D9\u05D7\u05D4 \u05DC\u05E2\u05DC\u05D5\u05EA. \u05E6\u05E8\u05D9\u05DA \u05DE\u05E2\u05DC\u05D9\u05EA \u05E9\u05E8\u05E9\u05E8\u05EA \u05D0\u05D5 \u05D2\u05D1\u05E2\u05D4 \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8",piece:t.P[Y]};break}if(h+=u*m,d+=m,f+=m,f>=cs-1e-9&&(l.push(h),f-=cs),O[Y]=Math.max(O[Y],u),!Et){w=Math.max(w,u),M+=u,x++;let wt=t.Y[Y];if(S=Math.max(S,wt),wt<q-1e-4)V||(V=!0,N=q);else if(wt>q+1e-4&&V){V=!1;let jt=N-q;jt>1&&(I++,L=Math.max(L,jt))}q=wt}}if(!X&&d>=400&&(X={reason:"\u05D4\u05E8\u05DB\u05D1\u05EA \u05DC\u05D0 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05D7\u05E0\u05D4",piece:0}),X)return{ok:!1,...X};l.push(c);let G=new Float32Array(e);for(let Ut=0;Ut<e;Ut++){if(t.FL[Ut]&(ls|Ds))continue;let Y=t.T[Ut*3],at=t.T[Ut*3+1],nt=t.T[Ut*3+2],Et=t.K[Ut*3],Ft=t.K[Ut*3+2],wt=-nt,jt=Y,qt=Math.hypot(wt,jt)||1,Q=(Et*wt+Ft*jt)/qt;G[Ut]=.75*Math.atan(O[Ut]*O[Ut]*Q*Ul/Ps)}let j=Cr(G,new Uint8Array(e),4,!0);t.bank=j;let tt=[0,1,0];for(let Ut=0;Ut<l.length;Ut++){let Y=l[Ut];if(Y<r+.3||Y>=i)continue;let at=Math.floor((Y/n%e+e)%e);if(t.FL[at]&(Ds|kl))continue;let nt=Ut?(l[Ut]-l[Ut-1])/cs:0,Et=t.T[at*3],Ft=t.T[at*3+1],wt=t.T[at*3+2],jt=t.K[at*3],qt=t.K[at*3+1],Q=t.K[at*3+2],st=jt-(jt*Et+Q*wt)*Et,it=Q-(jt*Et+Q*wt)*wt,dt=t.FL[at]&ls?0:1,pt=(st*Ul*dt+(jt-st*dt)*Fl)*nt*nt,Ht=qt*Fl*nt*nt+Ps,Dt=(it*Ul*dt+(Q-it*dt)*Fl)*nt*nt;Hl(t,at,j[at],tt);let Xt=(pt*tt[0]+Ht*tt[1]+Dt*tt[2])/Ps,Jt=Ft*tt[2]-wt*tt[1],D=wt*tt[0]-Et*tt[2],ge=Et*tt[1]-Ft*tt[0],oe=Math.abs(pt*Jt+Ht*D+Dt*ge)/Ps;A=Math.max(A,Xt),_=Math.min(_,Xt),E=Math.max(E,oe),Xt<.25&&(b+=cs)}let ht=0,lt=0,St=0;for(let Ut of s)Ut.t==="loop"&&ht++,wn[Ut.t].turn&&lt++,Ut.t==="lift"&&St++;let ie=(l.length-1)*cs,me={ok:!0,traj:Float32Array.from(l),duration:ie,maxSpeed:w*ud,avgSpeed:(x?M/x:0)*ud,maxHeight:S*Ir,maxDrop:L*Ir,drops:I,airtime:b,maxG:A,minG:_,maxLat:E,inversions:ht,turns:lt,length:i*Ir};return Object.assign(me,vm(me)),me}function vm(s){let t=1.6+Math.min(3.2,s.maxSpeed/22)+Math.min(1.2,s.drops*.2)+Math.min(1.4,s.maxDrop/22)+Math.min(1.4,s.airtime*.35)+Math.min(1.8,s.inversions*.6)+Math.min(1,s.duration/40)+Math.min(.6,s.turns*.03),e=Math.min(2.4,s.maxSpeed/38)+Math.max(0,s.maxG-1)*1.15+Math.max(0,.4-s.minG)*1.6+s.maxLat*1.4+s.inversions*.4,n=.3+s.maxLat*1.7+s.inversions*.8+Math.max(0,s.maxG-2.5)*.9+Math.max(0,-s.minG)*1.2;e>10&&(t*=.55);let i=r=>Math.round(Math.max(0,r)*100)/100;return{exc:i(t),int:i(e),nau:i(n)}}function fd(s,t,e=16e4){let n=En(s),i=s[0],r=["straight","left","right","down","steepDown","up"],a={straight:0,left:.15,right:.15,down:.05,steepDown:.1,up:.6},o=M=>((M.x*48+M.z)*64+M.h)*4+M.d,c=M=>Math.max(Math.abs(M.x-i.x)+Math.abs(M.z-i.z),Math.ceil(M.h/2))+(M.d!==i.d?.15:0),l=[],h=new Map,u=new Map,d=M=>{l.push(M);let x=l.length-1;for(;x;){let S=x-1>>1;if(l[S].f<=l[x].f)break;[l[S],l[x]]=[l[x],l[S]],x=S}},f=()=>{let M=l[0],x=l.pop();if(l.length){l[0]=x;let S=0;for(;;){let b=2*S+1,A=b+1,_=S;if(b<l.length&&l[b].f<l[_].f&&(_=b),A<l.length&&l[A].f<l[_].f&&(_=A),_===S)break;[l[_],l[S]]=[l[S],l[_]],S=_}}return M},m=o(n);u.set(m,0),d({s:n,g:0,f:c(n),k:m});let v=null,g=0;for(;l.length&&g<e;){let M=f();if(g++,!(M.g>(u.get(M.k)??1/0))){if(dd(M.s,i)){v=M.k;break}for(let x of r){let{occ:S,next:b}=pi(x,M.s);if(b.h<0||b.h>44||!S.every(E=>Bl(E.x,E.z))||!Bl(b.x,b.z)||!t(S))continue;let A=M.g+1+a[x],_=o(b);A>=(u.get(_)??1/0)||(u.set(_,A),h.set(_,{prev:M.k,m:x,s:M.s}),d({s:b,g:A,f:A+c(b),k:_}))}}}if(v===null)return null;let p=[];for(let M=v;M!==m;){let x=h.get(M);p.push({t:x.m,...x.s}),M=x.prev}p.reverse();let w=[];for(let M of p){let{occ:x}=pi(M.t,M);for(let S of x)for(let b of w)if(b.x===S.x&&b.z===S.z&&S.lo<b.hi+3&&b.lo<S.hi+3)return null;w.push(...x)}return p}function pd(s,t,e){if(ti(s))return"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05DB\u05D1\u05E8 \u05E1\u05D2\u05D5\u05E8";if(s.length>=Ee.maxPieces)return"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05D0\u05E8\u05D5\u05DA \u05DE\u05D3\u05D9";let n=En(s),i=s[s.length-1];if(t==="loop"&&wn[i.t].dh!==0)return"\u05DC\u05D5\u05E4 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DE\u05DE\u05E1\u05D9\u05DC\u05D4 \u05D9\u05E9\u05E8\u05D4 \u05D5\u05E9\u05D8\u05D5\u05D7\u05D4";if(t==="loop"&&n.h+8>44)return"\u05D2\u05D1\u05D5\u05D4 \u05DE\u05D3\u05D9 \u05DC\u05DC\u05D5\u05E4";let{occ:r,next:a}=pi(t,n);return a.h<0?"\u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E8\u05D3\u05EA \u05DE\u05EA\u05D7\u05EA \u05DC\u05E7\u05E8\u05E7\u05E2":a.h>44?"\u05D2\u05D1\u05D5\u05D4 \u05DE\u05D3\u05D9":r.every(o=>Bl(o.x,o.z))?e(r)?null:"\u05DE\u05E9\u05D4\u05D5 \u05D7\u05D5\u05E1\u05DD \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA":"\u05DE\u05D7\u05D5\u05E5 \u05DC\u05E4\u05D0\u05E8\u05E7"}var We=48*48,re=(s,t)=>t*48+s,Ie=s=>s%48,Pe=s=>s/48|0,Xe=(s,t)=>s>=0&&t>=0&&s<48&&t<48,Un=[[0,-1],[1,0],[0,1],[-1,0]],qe=(s,t=0,e=100)=>s<t?t:s>e?e:s;function Bi(s,t,e=[]){e.length=0;let n=Ie(t),i=Pe(t);for(let[r,a]of Un){let o=n+r,c=i+a;Xe(o,c)&&s.path[re(o,c)]&&e.push(re(o,c))}return e}function hs(s){let t=Ie(s.cur)+.5,e=Pe(s.cur)+.5;if(s.nxt<0){s.x=t+s.off*.3,s.z=e+s.off*.3;return}let n=Ie(s.nxt)+.5,i=Pe(s.nxt)+.5,r=n-t,a=i-e;s.x=t+r*s.p-a*s.off,s.z=e+a*s.p+r*s.off,s.dir=Math.atan2(r,a)}var Us=re(le.x,le.z),to={x:le.x+.5,z:51},Wl=[];function xd(s){let t=()=>s.rand(),e={id:s.nextId++,name:`${s.pick(ld)} ${s.pick([...hd])}.`,state:"in",cur:-1,nxt:-1,p:0,from:-1,x:to.x+(t()-.5)*.8,z:to.z+t()*1.5,dir:Math.PI,goal:null,happy:62+t()*20,hunger:8+t()*30,thirst:8+t()*30,toilet:t()*20,energy:82+t()*18,nausea:0,money:Math.round(35+t()*85),spent:0,maxInt:3+t()*3.6+t()*3.6,nauTol:2+t()*7,gen:.8+t()*.5,ridden:{},rides:0,timeIn:0,visit:300+t()*320,lastRide:s.t,thoughts:[],eat:0,trash:0,timer:0,think:0,qt:0,item:0,shirt:Math.floor(t()*12),skin:Math.floor(t()*4),off:(t()-.5)*.46,speed:.95+t()*.35};return s.guests.push(e),s.totals.guestsIn++,e}var Qa=(s,t,e)=>{e&&s.thought(t,e),t.goal={k:"exit"},t.leaving=!0};function _d(s,t,e){switch(t.cur>=0&&(t.timeIn+=e),t.state){case"in":{if(md(t,le.x+.5,le.z+.5,e)){if(s.entryFee>0){let i=s.entryWorth()*t.gen*1.5;if(s.entryFee>t.money*.6||s.entryFee>i){t.state="out",s.totals.turnedAway++,s.turnedRecent=(s.turnedRecent||0)+1;return}t.money-=s.entryFee,t.spent+=s.entryFee,s.earn(s.entryFee,"entry")}let n=s.booth();n&&(n.sold=(n.sold||0)+1),t.state="walk",t.cur=Us,t.nxt=-1,t.p=0}return}case"out":md(t,to.x,to.z+2,e)&&(t.state="gone",s.totals.guestsOut++,s.totals.happyOut+=t.happy,s.totals.spentOut=(s.totals.spentOut||0)+t.spent,s.totals.moneyLeft=(s.totals.moneyLeft||0)+t.money);return;case"ride":return;case"queue":if(Gl(s,t,e*.6),t.qt+=e,t.qt>75+t.gen*40){let n=s.objects.get(t.at);if(n){let i=n.queue.indexOf(t.id);i>=0&&n.queue.splice(i,1),s.layoutQueue(n)}t.state="walk",t.nxt=-1,t.goal=null,t.happy=qe(t.happy-7),s.thought(t,"queue-long",t.at)}return;case"shop":case"sit":Gl(s,t,e),t.state==="sit"&&(t.energy=qe(t.energy+2.6*e)),t.timer-=e,t.timer<=0&&(t.state="walk",t.nxt=-1);return;case"walk":Gl(s,t,e),bm(s,t,e)}}function md(s,t,e,n){let i=t-s.x,r=e-s.z,a=Math.hypot(i,r),o=s.speed*n;return a<=o?(s.x=t,s.z=e,!0):(s.x+=i/a*o,s.z+=r/a*o,s.dir=Math.atan2(i,r),!1)}function Gl(s,t,e){t.hunger=qe(t.hunger+.22*e),t.thirst=qe(t.thirst+.28*e),t.toilet=qe(t.toilet+.05*e),t.energy=qe(t.energy-.055*e),t.nausea=qe(t.nausea-.35*e);let n=0;t.hunger>80&&(n-=.12),t.thirst>80&&(n-=.12),t.toilet>85&&(n-=.22),t.energy<15&&(n-=.1),t.nausea>50&&(n-=.1),s.t-t.lastRide>120&&(n-=.06),n-=.02,t.happy=qe(t.happy+n*e),t.eat>0&&(t.eat-=e)<=0&&(t.trash=14),t.trash>0&&(t.trash-=e)<=0&&t.state==="walk"&&s.path[t.cur]&&yd(s,t.cur),t.nausea>72&&t.state==="walk"&&s.rand()<e*.08&&s.path[t.cur]&&(s.vomit[t.cur]=Math.min(9,s.vomit[t.cur]+1),s.rev.dirt++,t.nausea-=35,t.happy=qe(t.happy-8),s.thought(t,"sick"))}function yd(s,t){s.dirt[t]=Math.min(9,s.dirt[t]+1),s.rev.dirt++}function Mm(s,t){if(s.addon[t]===pn.bin.id)return!0;for(let e of Bi(s,t,Wl))if(s.addon[e]===pn.bin.id)return!0;return!1}function bm(s,t,e){if(t.nxt<0&&(gd(s,t),t.state!=="walk"||t.nxt<0)){hs(t);return}t.p+=t.speed*e,t.p>=1&&(t.from=t.cur,t.cur=t.nxt,t.nxt=-1,t.p=0,Sm(s,t),t.state==="walk"&&t.nxt<0&&gd(s,t)),t.state==="walk"&&hs(t)}function Sm(s,t){let e=t.cur;if(!s.path[e])return;if(s.dirt[e]+s.vomit[e]*3>=3&&(t.happy=qe(t.happy-1.1),s.rand()<.25&&s.thought(t,"dirty")),s.beauty[e]>7&&(t.happy=qe(t.happy+.5),s.rand()<.02&&s.thought(t,"beautiful")),t.trash>0&&Mm(s,e)?t.trash=0:t.state==="walk"&&s.rand()<.0015&&yd(s,e),t.goal&&t.goal.k!=="exit"){let r=vd(s,t.goal);if(r&&r[e]===0){bd(s,t);return}}let i=s.accessAt.get(e);i&&!t.leaving&&(!t.goal||t.goal.k==="wander")&&Tm(s,t,i)}function vd(s,t){return t?t.k==="exit"?s.exitField:t.k==="bench"?s.benchField:s.fields.get(t.id)||null:null}function gd(s,t){if(!s.path[t.cur]){let o=Bi(s,t.cur,Wl);if(o.length){t.nxt=o[0];return}if(t.cur=Us,t.from=-1,!s.path[Us])return}if(t.goal&&t.goal.k==="exit"&&t.cur===Us){t.state="out",t.x=Ie(Us)+.5,t.z=Pe(Us)+.5;return}if((!t.goal||t.goal.k==="wander"&&s.t>=t.think)&&Em(s,t),t.state!=="walk")return;let e=vd(s,t.goal);if(t.goal&&t.goal.k!=="wander"){if(!e||e[t.cur]<0){if(t.goal.k==="exit"){t.state="out";return}s.thought(t,"lost"),t.goal=null,e=null}else if(e[t.cur]===0){bd(s,t);return}}let n=Bi(s,t.cur,Wl);if(!n.length)return;if(e&&t.goal&&t.goal.k!=="wander"){let o=e[t.cur]-1,c=n.filter(l=>e[l]===o);t.nxt=c.length?c[Math.floor(s.rand()*c.length)]:n[0];return}let i=n.filter(o=>o!==t.from),r=i.length?i:n,a=t.from>=0?t.cur*2-t.from:-1;t.nxt=r.includes(a)&&s.rand()<.55?a:r[Math.floor(s.rand()*r.length)]}function wm(s,t,e){let n=null,i=1e9,r=null;for(let a of s.shops()){let o=yn[a.kind];if(o.kind!==e||!a.open)continue;let c=s.fields.get(a.id);if(!(!c||c[t.cur]<0)){if(a.price>o.worth*t.gen){r=a;continue}a.price>t.money||c[t.cur]<i&&(i=c[t.cur],n=a)}}return!n&&r&&s.rand()<.5&&s.thought(t,"expensive",r.id),n}var Md=s=>s.type==="coaster"?40:28;function Em(s,t){if(t.think=s.t+4+s.rand()*5,t.leaving){t.goal={k:"exit"};return}if(t.happy<12)return Qa(s,t,"leave-unhappy");if(t.energy<6)return Qa(s,t,"tired");if(t.timeIn>t.visit)return Qa(s,t,t.happy>70?"leave-happy":null);let e=s.rides(),n=Math.min(99,...e.filter(c=>c.open&&!c.broken).map(c=>c.price));if(t.money<1||t.money<n&&t.rides>0)return Qa(s,t,"poor");let i=(c,l,h)=>{let u=wm(s,t,c);return u?(t.goal={k:"shop",id:u.id},!0):(s.rand()<.4&&s.thought(t,h),!1)};if(t.toilet>65&&i("toilet",t.toilet,"no-toilet")||t.thirst>60&&i("drink",t.thirst,"no-drink")||t.hunger>60&&i("food",t.hunger,"no-food"))return;if(t.energy<30){if(s.benchField&&s.benchField[t.cur]>=0){t.goal={k:"bench"};return}s.rand()<.4&&s.thought(t,"no-bench")}if(t.nausea>55){t.goal={k:"wander"};return}let r=null,a=-3;for(let c of e){if(!c.open||c.broken||c.type==="coaster"&&!c.tested)continue;let l=s.fields.get(c.id);if(!l||l[t.cur]<0)continue;if(c.int>t.maxInt+.8){s.rand()<.1&&s.thought(t,"scary",c.id);continue}if(c.nau>5&&t.nausea>35)continue;if(c.price>s.rideValue(c)*t.gen){s.rand()<.3&&s.thought(t,"expensive",c.id);continue}if(c.price>t.money||c.queue.length>=Md(c))continue;let h=c.exc*1.6+s.rand()*3-c.queue.length*.12-l[t.cur]*.04-(t.ridden[c.id]||0)*2.2+(c.int>t.maxInt-2.5?.8:0)+(c.type==="coaster"?1:0);h>a&&(a=h,r=c)}if(r){t.goal={k:"ride",id:r.id};return}e.filter(c=>c.open).length<3&&s.rand()<.25&&s.thought(t,"nothing"),t.goal={k:"wander"}}function bd(s,t){let e=t.goal;if(t.goal=null,!e)return;if(e.k==="bench"){if(s.addon[t.cur]!==pn.bench.id)return;t.state="sit",t.timer=10+s.rand()*8,t.nxt=-1,t.x=Ie(t.cur)+.5+t.off*.6,t.z=Pe(t.cur)+.5+.28;return}let n=s.objects.get(e.id);if(n){if(n.type==="shop"){wd(s,t,n);return}Sd(s,t,n)}}function Sd(s,t,e){if(!e.open||e.broken){s.thought(t,"broken",e.id);return}if(e.queue.length>=Md(e)){s.thought(t,"queue-long",e.id);return}e.queue.push(t.id),t.state="queue",t.qt=0,t.at=e.id,t.nxt=-1,s.layoutQueue(e),e.price<s.rideValue(e)*.45&&e.price>0&&(t.happy=qe(t.happy+3),s.thought(t,"bargain",e.id))}function wd(s,t,e){let n=yn[e.kind];if(e.open){if(e.price>n.worth*t.gen){s.thought(t,"expensive",e.id);return}if(e.price>t.money){s.thought(t,"poor");return}t.money=Math.round((t.money-e.price)*100)/100,t.spent+=e.price,s.earn(e.price,n.kind==="food"||n.kind==="drink"?"food":"shops"),n.unit&&s.spend(n.unit,"stock"),e.sales++,e.monthIncome+=e.price,e.totalIncome+=e.price,n.hunger&&(t.hunger=qe(t.hunger+n.hunger)),n.thirst&&(t.thirst=qe(t.thirst+n.thirst)),n.toilet&&(t.toilet=qe(t.toilet+n.toilet)),n.happy&&(t.happy=qe(t.happy+n.happy)),n.litter&&(t.eat=14+s.rand()*10),n.kind==="gift"&&(t.item=1),t.state="shop",t.timer=n.kind==="toilet"?5:2,t.nxt=-1}}function Tm(s,t,e){for(let n of e){let i=s.objects.get(n);if(!(!i||!i.open||i.type==="booth")){if(i.type==="shop"){let r=yn[i.kind].kind;if((r==="drink"&&t.thirst>32||r==="food"&&t.hunger>38||r==="toilet"&&t.toilet>40||i.kind==="icecream"&&t.hunger>20&&s.rand()<.25||r==="gift"&&!t.item&&s.rand()<.1)&&i.price<=yn[i.kind].worth*t.gen&&i.price<=t.money){wd(s,t,i);return}}else if(!i.broken&&(i.type!=="coaster"||i.tested)&&!t.ridden[i.id]&&i.int<=t.maxInt&&t.nausea<40&&i.price<=s.rideValue(i)*t.gen&&i.price<=t.money&&i.queue.length<12&&s.rand()<.3){Sd(s,t,i);return}}}}function Ed(s){let t=new Map;for(let e of s.guests)for(let n of e.thoughts){if(s.t-n.t>60)continue;let i=n.k+":"+(n.id||"");t.set(i,(t.get(i)||0)+1)}return s.turnedRecent>=1&&t.set("entry-expensive:",Math.round(s.turnedRecent)),[...t.entries()].map(([e,n])=>{let[i,r]=e.split(":");return{k:i,id:r?+r:0,n}}).sort((e,n)=>n.n-e.n).slice(0,8)}var Xl=new Set(["ride-great","ride-good","beautiful","bargain","leave-happy"]);function ql(s,t){let e=t.id?s.objects.get(t.id):null,n=e?e.name:"";switch(t.k){case"ride-great":return`${n} \u05D4\u05D9\u05D4 \u05DE\u05D3\u05D4\u05D9\u05DD!`;case"ride-good":return`${n} \u05D4\u05D9\u05D4 \u05DB\u05D9\u05E3`;case"ride-meh":return`${n} \u05D4\u05D9\u05D4 \u05E7\u05E6\u05EA \u05DE\u05E9\u05E2\u05DE\u05DD`;case"too-intense":return`${n} \u05D4\u05D9\u05D4 \u05D7\u05D6\u05E7 \u05DE\u05D3\u05D9 \u05D1\u05E9\u05D1\u05D9\u05DC\u05D9`;case"expensive":return`${n||"\u05D6\u05D4"} \u05D9\u05E7\u05E8 \u05DE\u05D3\u05D9`;case"bargain":return`${n} \u05D1\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E6\u05D9\u05D0\u05D4!`;case"scary":return`${n} \u05E0\u05E8\u05D0\u05D4 \u05DE\u05E4\u05D7\u05D9\u05D3 \u05DE\u05D3\u05D9`;case"queue-long":return`\u05D4\u05EA\u05D5\u05E8 \u05DC${n||"\u05DE\u05EA\u05E7\u05DF"} \u05D0\u05E8\u05D5\u05DA \u05DE\u05D3\u05D9`;case"broken":return`${n||"\u05D4\u05DE\u05EA\u05E7\u05DF"} \u05DE\u05E7\u05D5\u05DC\u05E7\u05DC`;case"no-food":return"\u05D0\u05E0\u05D9 \u05E8\u05E2\u05D1 \u05D5\u05D0\u05D9\u05DF \u05D0\u05D9\u05E4\u05D4 \u05DC\u05D0\u05DB\u05D5\u05DC";case"no-drink":return"\u05D0\u05E0\u05D9 \u05E6\u05DE\u05D0 \u05D5\u05D0\u05D9\u05DF \u05E9\u05EA\u05D9\u05D9\u05D4";case"no-toilet":return"\u05D0\u05E0\u05D9 \u05D7\u05D9\u05D9\u05D1 \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05D5\u05D0\u05D9\u05DF!";case"no-bench":return"\u05D0\u05E0\u05D9 \u05E2\u05D9\u05D9\u05E3 \u05D5\u05D0\u05D9\u05DF \u05D0\u05D9\u05E4\u05D4 \u05DC\u05E9\u05D1\u05EA";case"tired":return"\u05D0\u05E0\u05D9 \u05E2\u05D9\u05D9\u05E3 \u05DE\u05D3\u05D9, \u05D4\u05D5\u05DC\u05DA \u05D4\u05D1\u05D9\u05EA\u05D4";case"sick":return"\u05DC\u05D0 \u05DE\u05E8\u05D2\u05D9\u05E9 \u05D8\u05D5\u05D1...";case"dirty":return"\u05D4\u05E9\u05D1\u05D9\u05DC\u05D9\u05DD \u05DE\u05DC\u05D5\u05DB\u05DC\u05DB\u05D9\u05DD";case"beautiful":return"\u05D0\u05D9\u05D6\u05D4 \u05E4\u05D0\u05E8\u05E7 \u05D9\u05E4\u05D4";case"nothing":return"\u05D0\u05D9\u05DF \u05E4\u05D4 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD";case"lost":return"\u05DC\u05D0 \u05DE\u05D5\u05E6\u05D0 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA";case"poor":return"\u05E0\u05D2\u05DE\u05E8 \u05DC\u05D9 \u05D4\u05DB\u05E1\u05E3";case"leave-unhappy":return"\u05E0\u05DE\u05D0\u05E1 \u05DC\u05D9, \u05D4\u05D5\u05DC\u05DA \u05D4\u05D1\u05D9\u05EA\u05D4";case"leave-happy":return"\u05D4\u05D9\u05D4 \u05D9\u05D5\u05DD \u05DE\u05D5\u05E9\u05DC\u05DD!";case"entry-expensive":return"\u05D4\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05E4\u05D0\u05E8\u05E7 \u05D9\u05E7\u05E8\u05D4 \u05DE\u05D3\u05D9";default:return""}}var Td=re(le.x,le.z),Am=1.3,Zl=[],$l=new Int32Array(We),Yl=new Int32Array(We),eo=new Int32Array(We),no=0;function Rd(s,t,e){if(t.off===void 0&&(t.off=0),t.role==="entertainer"&&Lm(s,t,e),t.state==="work"){t.timer-=e,t.timer<=0&&Rm(s,t);return}if(t.nxt<0&&Ad(s,t),t.nxt<0){hs(t);return}if(t.p+=Am*e,t.p>=1){if(t.from=t.cur,t.cur=t.nxt,t.nxt=-1,t.p=0,Cd(s,t)){hs(t);return}Ad(s,t)}hs(t)}function Cd(s,t){let e=t.cur;if(t.role==="cleaner"&&(s.dirt[e]||s.vomit[e]))return t.state="work",t.timer=1.4+s.vomit[e]*.4,t.task={k:"clean",tile:e},!0;if(t.role==="mechanic"&&t.task&&t.task.id){let n=s.fields.get(t.task.id);if(n&&n[e]===0)return s.objects.get(t.task.id)?(t.state="work",t.timer=t.task.k==="fix"?6:3,!0):(t.task=null,!1)}return!1}function Rm(s,t){t.state="walk",t.nxt=-1;let e=t.task;if(t.task=null,!e)return;if(e.k==="clean"){s.dirt[e.tile]=0,s.vomit[e.tile]=0,s.rev.dirt++,t.done++;return}let n=s.objects.get(e.id);if(!n)return;let i=.96-Math.min(.25,n.age*.006);e.k==="fix"?(n.broken=!1,n.rel=i,s.emit("fixed",`${n.name} \u05EA\u05D5\u05E7\u05DF`,{id:n.id})):n.rel=Math.max(n.rel,i),n.lastInspect=s.t,n.mech=0,t.done++,s.rev.objects++}function Ad(s,t){if(!s.path[t.cur]){let e=Bi(s,t.cur,Zl);if(e.length){t.nxt=e[0];return}if(t.cur=Td,t.from=-1,!s.path[Td])return}if(t.role==="cleaner"){let e=Im(s,t.cur);if(e>=0){t.nxt=e;return}}if(t.role==="mechanic"&&((!t.task||!s.objects.get(t.task.id))&&Pm(s,t),t.task)){let e=s.fields.get(t.task.id);if(e&&e[t.cur]>0){let n=Bi(s,t.cur,Zl).filter(i=>e[i]===e[t.cur]-1);if(n.length){t.nxt=n[Math.floor(s.rand()*n.length)];return}}else if(e&&e[t.cur]===0){if(Cd(s,t))return}else{let n=s.objects.get(t.task.id);n&&(n.mech=0),t.task=null}}Cm(s,t)}function Cm(s,t){let e=Bi(s,t.cur,Zl);if(!e.length)return;let n=e.filter(r=>r!==t.from),i=n.length?n:e;t.nxt=i[Math.floor(s.rand()*i.length)]}function Im(s,t){no++;let e=0,n=0;for($l[n++]=t,Yl[t]=no,eo[t]=-1;e<n;){let i=$l[e++];if(i!==t&&(s.dirt[i]||s.vomit[i])){let o=i;for(;eo[o]!==t;)o=eo[o];return o}if(e>500)break;let r=Ie(i),a=Pe(i);for(let[o,c]of Un){let l=r+o,h=a+c;if(!Xe(l,h))continue;let u=re(l,h);s.path[u]&&Yl[u]!==no&&(Yl[u]=no,eo[u]=i,$l[n++]=u)}}return-1}function Pm(s,t){let e=null,n=1e9,i=null;for(let r of s.rides()){if(r.mech&&s.staff.some(l=>l.id===r.mech&&l.task&&l.task.id===r.id))continue;let a=s.fields.get(r.id);if(!a||a[t.cur]<0)continue;let o=!r.broken&&r.runs>0&&s.t-r.lastInspect>120*1.2;if(!r.broken&&!o)continue;let c=a[t.cur]-(r.broken?1e3:0);c<n&&(n=c,e=r,i=r.broken?"fix":"inspect")}e&&(t.task={k:i,id:e.id},e.mech=t.id)}function Lm(s,t,e){if(t.cheer=(t.cheer||0)+e,!(t.cheer<1)){t.cheer-=1;for(let n of s.guests)n.state!=="walk"&&n.state!=="queue"&&n.state!=="sit"||Math.abs(n.x-t.x)+Math.abs(n.z-t.z)>3||(n.happy=qe(n.happy+1.2),n.state==="queue"&&(n.qt=Math.max(0,n.qt-2.5)))}}function gi(s,t){let e=s.w||1,n=s.d||1;return t%2?{w:n,d:e}:{w:e,d:n}}var mi=s=>Math.round(s*100)/100,Fs=class s{constructor(t=Math.random()*2**31|0){this.reset(t)}reset(t){this.seed=t>>>0||1,this.t=0,this.name="\u05E9\u05D5\u05E1\u05D8\u05E8 \u05E4\u05D0\u05E8\u05E7",this.cash=ed,this.loan=nd,this.entryFee=0,this.marketingUntil=-1,this.rating=500,this.path=new Uint8Array(We),this.addon=new Uint8Array(We),this.dirt=new Uint8Array(We),this.vomit=new Uint8Array(We),this.owner=new Int32Array(We),this.objects=new Map,this.guests=[],this.staff=[],this.nextId=1,this.ledger=this.newLedger(),this.history=[],this.totals={guestsIn:0,guestsOut:0,turnedAway:0,happyOut:0},this.won=!1,this.goalMissed=!1,this.events=[],this.spawnAcc=0,this.slow=0,this.rev={land:1,objects:1,dirt:1,staff:1},this.trackOcc=new Map,this.builtAt=new Map;for(let e=le.z;e>=le.z-6;e--)this.path[re(le.x,e)]=1;this.derive()}rand(){let t=this.seed=this.seed+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}pick(t){return t[Math.floor(this.rand()*t.length)]}newLedger(){return{in:{entry:0,rides:0,food:0,shops:0},out:{build:0,upkeep:0,wages:0,interest:0,marketing:0,stock:0}}}emit(t,e,n){this.events.push({kind:t,text:e,t:this.t,...n})}get month(){return Math.floor(this.t/120)}date(){let t=this.month,e=2+t;return{day:1+Math.floor(this.t%120/120*30),month:e%12,monthName:Pl[e%12],year:1+Math.floor(e/12),index:t}}goalDate(){let t=2+Nn.months;return{monthName:Pl[t%12],year:1+Math.floor(t/12)}}canAfford(t){return this.cash>=t}spend(t,e="build"){this.cash=mi(this.cash-t),this.ledger.out[e]+=t}earn(t,e){this.cash=mi(this.cash+t),this.ledger.in[e]+=t}takeLoan(){return this.loan+Ar>Ja?"\u05D4\u05D2\u05E2\u05EA \u05DC\u05EA\u05E7\u05E8\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4":(this.loan+=Ar,this.cash=mi(this.cash+Ar),null)}repayLoan(){if(this.loan<=0)return"\u05D0\u05D9\u05DF \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4";let t=Math.min(Ar,this.loan);return this.cash<t?"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3":(this.loan-=t,this.cash=mi(this.cash-t),null)}setEntryFee(t){this.entryFee=Math.max(0,Math.min(80,Math.round(t)))}startMarketing(){return this.t<this.marketingUntil?"\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05E7\u05DE\u05E4\u05D9\u05D9\u05DF":this.canAfford(rs.cost)?(this.spend(rs.cost,"marketing"),this.marketingUntil=this.t+rs.months*120,null):"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3"}objAt(t,e){return Xe(t,e)&&this.objects.get(this.owner[re(t,e)])||null}trackAt(t,e){return this.trackOcc.get(re(t,e))||[]}tilesOf(t,e,n,i){let r=[];for(let a=0;a<i;a++)for(let o=0;o<n;o++){if(!Xe(t+o,e+a))return null;r.push(re(t+o,e+a))}return r}groundFree(t,e){for(let n of t){if(this.path[n]||this.owner[n])return!1;for(let i of this.trackOcc.get(n)||[])if(i.lo<e+1)return!1}return!0}pathReason(t,e){if(!Xe(t,e))return"\u05DE\u05D7\u05D5\u05E5 \u05DC\u05E4\u05D0\u05E8\u05E7";let n=re(t,e);if(this.path[n])return"\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05E9\u05D1\u05D9\u05DC";if(this.owner[n])return"\u05EA\u05E4\u05D5\u05E1";for(let i of this.trackOcc.get(n)||[])if(i.lo<ja)return"\u05D4\u05DE\u05E1\u05D9\u05DC\u05D4 \u05E0\u05DE\u05D5\u05DB\u05D4 \u05DE\u05D3\u05D9";return this.canAfford(Is)?null:"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3"}placePath(t,e){let n=this.pathReason(t,e);return n||(this.path[re(t,e)]=1,this.spend(Is),this.builtAt.set("p"+re(t,e),this.t),this.changed(),null)}removePath(t,e){let n=re(t,e);if(!this.path[n])return"\u05D0\u05D9\u05DF \u05DB\u05D0\u05DF \u05E9\u05D1\u05D9\u05DC";if(t===le.x&&e===le.z)return"\u05D6\u05D4 \u05D4\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC \u05D4\u05DB\u05E0\u05D9\u05E1\u05D4";let i=this.t-(this.builtAt.get("p"+n)??-99)<Rr?Is:0;return this.addon[n]&&this.removeAddon(t,e),this.path[n]=0,this.dirt[n]=0,this.vomit[n]=0,i&&this.refund(i),this.changed(),null}refund(t){this.cash=mi(this.cash+t),this.ledger.out.build-=t}placeAddon(t,e,n){if(!Xe(e,n))return"\u05DE\u05D7\u05D5\u05E5 \u05DC\u05E4\u05D0\u05E8\u05E7";let i=re(e,n),r=pn[t];return this.path[i]?this.addon[i]===r.id?"\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05DB\u05D0\u05DF":this.canAfford(r.cost)?(this.spend(r.cost),this.addon[i]=r.id,this.builtAt.set("a"+i,this.t),this.changed(),null):"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3":"\u05E8\u05E7 \u05E2\u05DC \u05E9\u05D1\u05D9\u05DC"}removeAddon(t,e){let n=re(t,e),i=Ka[this.addon[n]];if(!i)return"\u05D0\u05D9\u05DF \u05DB\u05D0\u05DF \u05DB\u05DC\u05D5\u05DD";let r=this.t-(this.builtAt.get("a"+n)??-99)<Rr?pn[i].cost:0;return this.addon[n]=0,r&&this.refund(r),this.changed(),null}defOf(t,e){return t==="ride"?Fi[e]:t==="shop"?yn[e]:t==="booth"?as:Oi[e]}placeReason(t,e,n,i,r=0){let a=this.defOf(t,e);if(!a)return"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD";if(t==="booth"&&this.booth())return"\u05D9\u05E9 \u05DB\u05D1\u05E8 \u05E7\u05D5\u05E4\u05D4";let{w:o,d:c}=gi(a,r),l=this.tilesOf(n,i,o,c);return l?this.groundFree(l,a.h||4)?this.canAfford(a.cost)?null:"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3":"\u05D4\u05DE\u05E7\u05D5\u05DD \u05EA\u05E4\u05D5\u05E1":"\u05DE\u05D7\u05D5\u05E5 \u05DC\u05E4\u05D0\u05E8\u05E7"}place(t,e,n,i,r=0){let a=this.placeReason(t,e,n,i,r);if(a)return{error:a};let o=this.defOf(t,e),{w:c,d:l}=gi(o,r),h=this.nextId++,u={id:h,type:t,kind:e,x:n,z:i,rot:r,w:c,d:l,built:this.t,spent:o.cost};t==="ride"&&Object.assign(u,this.rideState(),{name:this.nameFor(o.he),price:o.price,exc:o.exc,int:o.int,nau:o.nau,open:!0}),t==="shop"&&Object.assign(u,{name:this.nameFor(o.he),price:o.price,sales:0,monthIncome:0,totalIncome:0,open:!0}),t==="booth"&&Object.assign(u,{name:"\u05E7\u05D5\u05E4\u05D4",sold:0}),this.objects.set(h,u);for(let d of this.tilesOf(n,i,c,l))this.owner[d]=h;return this.spend(o.cost),this.changed(),{id:h}}booth(){for(let t of this.objects.values())if(t.type==="booth")return t;return null}isOpen(){if(this.legacyOpen)return!0;let t=this.booth();return!!t&&(this.access.get(t.id)||[]).length>0}boothSpot(){let t=null,e=1e9;for(let n=le.z;n>=Math.max(0,le.z-12);n--)for(let i=le.x-6;i<=le.x+6;i++)for(let r of[1,0]){let{w:a,d:o}=gi(as,r),c=this.tilesOf(i,n,a,o);if(!c||!this.groundFree(c,as.h))continue;let l=!1;for(let u of c)for(let[d,f]of Un){let m=Ie(u)+d,v=Pe(u)+f;Xe(m,v)&&this.path[re(m,v)]&&(l=!0)}if(!l)continue;let h=Math.abs(i+a/2-le.x-.5)*1.3+Math.abs(n+o/2-le.z)+(i+a/2>le.x+.5?0:.3);h<e&&(e=h,t={x:i,z:n,rot:r})}return t}rideState(){return{queue:[],riders:[],phase:"idle",timer:0,rel:.98,broken:!1,lastInspect:this.t,age:0,runs:0,monthIncome:0,totalIncome:0,totalRiders:0}}nameFor(t){let e=1,n=new Set([...this.objects.values()].map(i=>i.name));for(;n.has(`${t} ${e}`);)e++;return`${t} ${e}`}demolish(t){let e=this.objects.get(t);if(!e)return"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD";e.queue&&this.emptyRide(e,!0);let n=this.t-e.built<Rr,i=Math.round(e.spent*(n?1:Dl));e.type==="coaster"&&this.untrack(e);for(let r=0;r<We;r++)this.owner[r]===t&&(this.owner[r]=0);this.objects.delete(t),this.refund(i);for(let r of this.staff)r.task&&r.task.id===t&&(r.task=null);return this.changed(),null}demolishValue(t){let e=this.objects.get(t);return e?Math.round(e.spent*(this.t-e.built<Rr?1:Dl)):0}emptyRide(t,e){let n=this.access.get(t.id)||[];for(let i of[...t.queue,...t.riders]){let r=this.guestById(i);r&&(r.state="walk",r.goal=null,r.nxt=-1,r.p=0,this.path[r.cur]||(r.cur=n.length?this.pick(n):re(le.x,le.z)),e||(r.happy=Math.max(0,r.happy-4)))}t.queue=[],t.riders=[],t.phase="idle",t.timer=0}setOpen(t,e){let n=this.objects.get(t);return!n||!("open"in n)?"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD":n.type==="coaster"&&e&&!n.tested?"\u05E7\u05D5\u05D3\u05DD \u05E6\u05E8\u05D9\u05DA \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05DE\u05E1\u05DC\u05D5\u05DC":(n.open=!!e,!e&&n.queue&&this.emptyRide(n,!1),this.rev.objects++,null)}setPrice(t,e){let n=this.objects.get(t);n&&(n.price=Math.max(0,Math.min(50,Math.round(e*2)/2)))}trackFree(t,e){for(let n of t){if(!Xe(n.x,n.z))return!1;let i=re(n.x,n.z);if(this.path[i]&&n.lo<ja)return!1;let r=this.objects.get(this.owner[i]);if(r&&r.type!=="coaster"&&n.lo<(this.defOf(r.type,r.kind).h||4)+1||i===re(le.x,le.z))return!1;for(let a of this.trackOcc.get(i)||[])if(n.lo<a.hi+Nl&&a.lo<n.hi+Nl)return!1}return!0}coasterReason(t,e,n){let i=Ns(t,e,n),r=i.flatMap(c=>pi(c.t,c).occ),a=En(i);if(!Xe(a.x,a.z))return"\u05D0\u05D9\u05DF \u05DE\u05E7\u05D5\u05DD \u05DC\u05DE\u05E1\u05D9\u05DC\u05D4 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05EA\u05D7\u05E0\u05D4";let o=r.map(c=>Xe(c.x,c.z)?re(c.x,c.z):-1);return o.includes(-1)?"\u05DE\u05D7\u05D5\u05E5 \u05DC\u05E4\u05D0\u05E8\u05E7":!this.groundFree(o,0)||!this.trackFree(r,0)?"\u05D4\u05DE\u05E7\u05D5\u05DD \u05EA\u05E4\u05D5\u05E1":this.canAfford(this.coasterBaseCost())?null:"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3"}coasterBaseCost(){return 500+wn.station.cost*Ee.stationLen}startCoaster(t,e,n){let i=this.coasterReason(t,e,n);if(i)return{error:i};let r=this.nextId++,a=[...this.objects.values()].filter(c=>c.type==="coaster").length,o={id:r,type:"coaster",kind:"coaster",x:t,z:e,rot:n,built:this.t,spent:this.coasterBaseCost(),name:this.nameFor("\u05E8\u05DB\u05D1\u05EA \u05D4\u05E8\u05D9\u05DD"),color:Ee.colors[a%Ee.colors.length],pieces:Ns(t,e,n),tested:!1,editing:!0,price:Ee.price,open:!1,stats:null,exc:0,int:0,nau:0,fail:null,...this.rideState()};return this.objects.set(r,o),this.spend(o.spent),this.retrack(o),this.changed(),{id:r}}pieceReason(t,e){let n=this.objects.get(t);if(!n||n.type!=="coaster")return"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD";let i=pd(n.pieces,e,a=>this.trackFree(a,t));if(i)return i;let r=En(n.pieces);return this.canAfford(wn[e].cost+r.h*4)?null:"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3"}addPiece(t,e){let n=this.pieceReason(t,e);if(n)return n;let i=this.objects.get(t),r=En(i.pieces),a=wn[e].cost+Math.max(0,r.h)*4;return i.pieces.push({t:e,...r}),i.spent+=a,this.spend(a),this.trackChanged(i),null}removePiece(t){let e=this.objects.get(t);if(!e||e.pieces.length<=Ee.stationLen)return"\u05D0\u05D9\u05DF \u05DE\u05D4 \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3";let n=e.pieces.pop(),i=wn[n.t].cost+Math.max(0,n.h)*4;return e.spent-=i,this.refund(i),this.trackChanged(e),null}finishTrack(t){let e=this.objects.get(t);if(!e)return"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD";if(ti(e.pieces))return"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05DB\u05D1\u05E8 \u05E1\u05D2\u05D5\u05E8";let n=fd(e.pieces,r=>this.trackFree(r,t));if(!n)return"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA\u05D9 \u05D3\u05E8\u05DA \u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05D7\u05E0\u05D4. \u05E0\u05E1\u05D4 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05EA\u05D7\u05E0\u05D4";let i=n.reduce((r,a)=>r+wn[a.t].cost+Math.max(0,a.h)*4,0);if(!this.canAfford(i))return`\u05E6\u05E8\u05D9\u05DA \u20AA${Math.round(i)} \u05DB\u05D3\u05D9 \u05DC\u05E1\u05D2\u05D5\u05E8`;for(let r of n)e.pieces.push(r);return e.spent+=i,this.spend(i),this.trackChanged(e),null}trackChanged(t){t.tested=!1,t.stats=null,t.fail=null,t.run=null,t.open=!1,this.emptyRide(t,!0),this.retrack(t),this.changed()}testCoaster(t){let e=this.objects.get(t);if(!e)return{ok:!1,reason:"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD"};let n=Vl(e.pieces);if(!n.ok)return e.fail=n,e.tested=!1,this.rev.objects++,n;e.run=n,e.tested=!0,e.fail=null;let{traj:i,...r}=n;return e.stats=r,e.exc=n.exc,e.int=n.int,e.nau=n.nau,e.curve.bank=n.bank,this.rev.objects++,n}editCoaster(t,e){let n=this.objects.get(t);n&&(n.editing=e,e&&(n.open=!1,this.emptyRide(n,!1)),this.rev.objects++)}untrack(t){for(let[e,n]of this.trackOcc){let i=n.filter(r=>r.id!==t.id);i.length?this.trackOcc.set(e,i):this.trackOcc.delete(e)}}retrack(t){this.untrack(t);for(let e=0;e<We;e++)this.owner[e]===t.id&&(this.owner[e]=0);if(t.pieces.forEach((e,n)=>{for(let i of pi(e.t,e).occ){let r=re(i.x,i.z);this.trackOcc.has(r)||this.trackOcc.set(r,[]),this.trackOcc.get(r).push({id:t.id,lo:i.lo,hi:i.hi,k:n}),i.lo<ja&&(this.owner[r]=t.id)}}),t.curve=zl(t.pieces),t.tested){let e=Vl(t.pieces);e.ok?(t.run=e,t.curve.bank=e.bank):(t.tested=!1,t.open=!1)}}stationTiles(t){return t.pieces.slice(0,Ee.stationLen).map(e=>re(e.x,e.z))}hire(t){let e=os[t];if(!e)return"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD";if(this.staff.length>=60)return"\u05D9\u05E9 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD";let n=this.staff.filter(r=>r.role===t).length+1,i=re(le.x,le.z);return this.staff.push({id:this.nextId++,role:t,name:`${e.he} ${n}`,cur:i,nxt:-1,p:0,x:le.x+.5,z:le.z+.5,dir:0,state:"walk",timer:0,task:null,done:0,from:-1,off:0,hired:this.t}),this.rev.staff++,null}fire(t){let e=this.staff.findIndex(n=>n.id===t);return e<0?"\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD":(this.staff.splice(e,1),this.rev.staff++,null)}wages(){return this.staff.reduce((t,e)=>t+os[e.role].wage,0)}changed(){this.needDerive=!0,this.rev.land++,this.rev.objects++}derive(){this.needDerive=!1,this.access=new Map,this.accessAt=new Map;for(let n of this.objects.values()){if(n.type==="scenery")continue;let i;n.type==="coaster"?i=this.stationTiles(n):i=this.tilesOf(n.x,n.z,n.w,n.d)||[];let r=new Set;for(let o of i)for(let[c,l]of Un){let h=Ie(o)+c,u=Pe(o)+l;Xe(h,u)&&this.path[re(h,u)]&&r.add(re(h,u))}let a=[...r];this.access.set(n.id,a);for(let o of a)this.accessAt.has(o)||this.accessAt.set(o,[]),this.accessAt.get(o).push(n.id)}this.fields=new Map;for(let[n,i]of this.access)this.fields.set(n,i.length?this.bfs(i):null);this.exitField=this.bfs([re(le.x,le.z)]);let t=[];for(let n=0;n<We;n++)this.addon[n]===pn.bench.id&&this.path[n]&&t.push(n);this.benchField=t.length?this.bfs(t):null,this.beauty=new Float32Array(We);let e=(n,i,r,a,o)=>{for(let c=i-3;c<i+a+3;c++)for(let l=n-3;l<n+r+3;l++){if(!Xe(l,c))continue;let h=Math.max(n-l,0,l-(n+r-1)),u=Math.max(i-c,0,c-(i+a-1)),d=Math.max(h,u);d<=3&&(this.beauty[re(l,c)]+=o*(1-d/4))}};for(let n of this.objects.values())n.type==="scenery"&&e(n.x,n.z,n.w,n.d,Oi[n.kind].beauty);for(let n=0;n<We;n++)this.addon[n]===pn.lamp.id&&e(Ie(n),Pe(n),1,1,pn.lamp.beauty);this.rev.land++}bfs(t,e=9999){let n=new Int16Array(We).fill(-1),i=new Int32Array(We),r=0,a=0;for(let o of t)this.path[o]&&n[o]<0&&(n[o]=0,i[a++]=o);for(;r<a;){let o=i[r++],c=Ie(o),l=Pe(o);if(!(n[o]>=e))for(let[h,u]of Un){let d=c+h,f=l+u;if(!Xe(d,f))continue;let m=re(d,f);this.path[m]&&n[m]<0&&(n[m]=n[o]+1,i[a++]=m)}}return n}rideValue(t){let e=1+t.exc*1.3;return t.type==="coaster"&&(e*=1.15),e*=Math.max(.7,1-(t.age||0)*.005),this.entryFee>0&&(e*=.65),Math.round(e*2)/2}shopValue(t){return yn[t.kind].worth}rides(){return[...this.objects.values()].filter(t=>t.type==="ride"||t.type==="coaster")}shops(){return[...this.objects.values()].filter(t=>t.type==="shop")}guestById(t){return(!this.guestIndex||this.guestIndexRev!==this.guests.length)&&(this.guestIndex=new Map(this.guests.map(e=>[e.id,e])),this.guestIndexRev=this.guests.length),this.guestIndex.get(t)}capacity(){let t=20;for(let e of this.objects.values())e.type==="ride"&&e.open&&(t+=14+e.exc*4),e.type==="coaster"&&e.open&&e.tested&&(t+=28+e.exc*9),e.type==="shop"&&(t+=4);return this.t<this.marketingUntil&&(t*=1.2),Math.min(Ll,Math.round(t))}entryWorth(){let t=3;for(let e of this.rides())e.open&&(t+=e.exc*(e.type==="coaster"?2:1));return t}arrivalRate(){if(!this.isOpen())return 0;let t=this.rides().filter(a=>a.open&&(a.type!=="coaster"||a.tested)).length,e=this.capacity(),n=this.guests.length;if(n>=e)return 0;let i=t?.08+1.1*Math.max(.15,this.rating/1e3)**1.4:.015;i*=Math.sqrt(1-n/e),this.t<this.marketingUntil&&(i*=rs.boost);let r=this.entryWorth();return this.entryFee>r&&(i*=Math.max(.05,1-(this.entryFee-r)/r*1.5)),i}tick(t){this.needDerive&&this.derive();let e=this.month;for(this.t+=t,this.spawnAcc+=this.arrivalRate()*t;this.spawnAcc>=1;)this.spawnAcc-=1,this.guests.length<Ll&&xd(this);for(let i of this.objects.values())i.queue&&this.stepRide(i,t);for(let i of this.guests)_d(this,i,t);this.guests.some(i=>i.state==="gone")&&(this.guests=this.guests.filter(i=>i.state!=="gone"),this.guestIndex=null);for(let i of this.staff)Rd(this,i,t);let n=0;for(let i of this.objects.values())(i.type==="ride"||i.type==="shop"||i.type==="booth")&&(n+=this.defOf(i.type,i.kind).upkeep),i.type==="coaster"&&(n+=Ee.upkeepBase+i.pieces.length*Ee.upkeepPerPiece);this.spend(n*t/120,"upkeep"),this.spend(this.wages()*t/120,"wages"),this.spend(this.loan*id*t/120,"interest"),this.slow+=t,this.slow>=1&&(this.slow-=1,this.rate()),this.month!==e&&this.newMonth()}stepRide(t,e){let n=t.type==="ride"?Fi[t.kind]:null,i=n?n.cap:Ee.cars*Ee.seats;switch(t.phase){case"idle":if(!t.open||t.broken||t.type==="coaster"&&!t.tested)break;t.queue.length&&(t.phase="load",t.timer=3);break;case"load":if(t.timer-=e,t.timer>0)break;for(t.riders=[];t.riders.length<i&&t.queue.length;){let r=this.guestById(t.queue.shift());if(r){if(r.money<t.price){r.state="walk",r.goal=null,r.nxt=-1,this.thought(r,"poor");continue}r.money=mi(r.money-t.price),r.spent+=t.price,this.earn(t.price,"rides"),t.monthIncome+=t.price,t.totalIncome+=t.price,r.state="ride",t.riders.push(r.id)}}if(this.layoutQueue(t),!t.riders.length){t.phase="idle";break}t.phase="run",t.timer=t.type==="coaster"?t.run.duration:n.cycle,t.runs++,t.totalRiders+=t.riders.length,t.rel=Math.max(.3,t.rel-.006-t.age*4e-4);break;case"run":if(t.timer-=e,t.timer>0)break;this.unload(t),this.rand()<Math.max(0,.9-t.rel)*.6+.003&&(t.broken=!0,t.brokeAt=this.t,this.emit("broken",`${t.name} \u05D4\u05EA\u05E7\u05DC\u05E7\u05DC. \u05E6\u05E8\u05D9\u05DA \u05DE\u05DB\u05D5\u05E0\u05D0\u05D9`,{id:t.id})),t.phase="idle";break}if((t.broken||!t.open)&&t.queue.length&&this.rand()<e*.5){let r=this.guestById(t.queue.shift());r&&(r.state="walk",r.goal=null,r.nxt=-1,r.happy=Math.max(0,r.happy-3),this.thought(r,"broken",t.id)),this.layoutQueue(t)}}layoutQueue(t){let e=t.type==="coaster"?new Set(this.stationTiles(t)):new Set(this.tilesOf(t.x,t.z,t.w,t.d)||[]),n=new Map;for(let i of t.queue){let r=this.guestById(i);if(!r)continue;let a=n.get(r.cur)||0;n.set(r.cur,a+1);let o=0,c=-1;for(let[v,g]of Un)if(e.has(re(Ie(r.cur)+v,Pe(r.cur)+g))){o=v,c=g;break}let l=Math.floor(a/4),h=a%4,u=Ie(r.cur)+.5,d=Pe(r.cur)+.5,f=.34-Math.min(l,3)*.22-(l>3?.05:0),m=(h-1.5)*.19+(l>3?l%2*.09:0);r.x=u+o*f-c*m,r.z=d+c*f+o*m,r.dir=Math.atan2(o,c)}}unload(t){let e=this.access.get(t.id)||[];for(let n of t.riders){let i=this.guestById(n);if(!i)continue;i.state="walk",i.goal=null,i.nxt=-1,i.p=0,e.length&&(i.cur=this.pick(e));let r=Math.max(0,t.int-i.maxInt);i.happy=Math.min(100,Math.max(0,i.happy+2+t.exc*1.5-r*6)),i.nausea=Math.min(100,i.nausea+t.nau*7*(1.3-i.nauTol/10)),i.energy=Math.max(0,i.energy-3-t.int*.4),i.ridden[t.id]=(i.ridden[t.id]||0)+1,i.rides++,i.lastRide=this.t,r>1.5?this.thought(i,"too-intense",t.id):t.exc>=5.5?this.thought(i,"ride-great",t.id):t.exc>=3?this.thought(i,"ride-good",t.id):this.thought(i,"ride-meh",t.id)}t.riders=[]}thought(t,e,n){let i=t.thoughts[0];i&&i.k===e&&i.id===n&&this.t-i.t<40||(t.thoughts.unshift({k:e,id:n,t:this.t}),t.thoughts.length>6&&t.thoughts.pop())}rate(){let t=this.guests.length,e=0;for(let u of this.guests)e+=u.happy;let n=t?e/t:60,i=0,r=0;for(let u=0;u<We;u++)this.path[u]&&(this.dirt[u]>=2&&i++,this.vomit[u]&&r++);let a=0,o=0,c=0,l=0;for(let u of this.objects.values())u.type==="ride"&&u.open&&a++,u.type==="coaster"&&u.open&&u.tested&&o++,u.broken&&c++,u.type==="scenery"&&(l+=Oi[u.kind].beauty);let h=200+n*4+Math.min(200,a*25+o*45)+Math.min(100,t*.4)+Math.min(80,l*.25)-Math.min(220,i*5+r*9)-c*35;h=Math.max(0,Math.min(999,h)),this.ratingTarget=h,this.rating+=(h-this.rating)*.04,this.avgHappy=n,this.turnedRecent=(this.turnedRecent||0)*.98,this.dirtyTiles=i+r,Math.floor(this.t)%3===0&&(this.thoughtSummary=Ed(this))}newMonth(){let t=this.date(),e=0,n=0;for(let i of Object.values(this.ledger.in))e+=i;for(let i of Object.values(this.ledger.out))n+=i;this.history.push({m:this.month-1,in:{...this.ledger.in},out:{...this.ledger.out},income:mi(e),expense:mi(n),net:mi(e-n),guests:this.guests.length,rating:Math.round(this.rating)}),this.history.length>24&&this.history.shift(),this.ledger=this.newLedger();for(let i of this.objects.values())i.queue&&(i.age++,i.monthIncome=0);for(let i of this.objects.values())i.type==="shop"&&(i.monthIncome=0);this.emit("month",`${t.monthName}, \u05E9\u05E0\u05D4 ${t.year}. \u05D4\u05D7\u05D5\u05D3\u05E9 \u05E9\u05E2\u05D1\u05E8: ${e-n>=0?"\u05E8\u05D5\u05D5\u05D7":"\u05D4\u05E4\u05E1\u05D3"} \u05E9\u05DC \u20AA${Math.abs(Math.round(e-n)).toLocaleString("he-IL")}`),!this.won&&this.guests.length>=Nn.guests&&this.rating>=Nn.rating?(this.won=!0,this.emit("won",`\u05E0\u05D9\u05E6\u05D7\u05EA! ${this.guests.length} \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D5\u05D3\u05D9\u05E8\u05D5\u05D2 ${Math.round(this.rating)}. \u05D4\u05E4\u05D0\u05E8\u05E7 \u05E9\u05DC\u05DA \u05D4\u05E6\u05DC\u05D9\u05D7`)):!this.won&&!this.goalMissed&&this.month>=Nn.months&&(this.goalMissed=!0,this.emit("missed","\u05D4\u05D6\u05DE\u05DF \u05DC\u05D9\u05E2\u05D3 \u05E2\u05D1\u05E8. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05DC\u05D1\u05E0\u05D5\u05EA \u05DB\u05DE\u05D4 \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD")),this.t>=this.marketingUntil&&this.marketingUntil>0&&this.marketingUntil>this.t-120&&this.emit("info","\u05D4\u05E7\u05DE\u05E4\u05D9\u05D9\u05DF \u05D4\u05E1\u05EA\u05D9\u05D9\u05DD")}toJSON(){let t=[...this.objects.values()].map(n=>{let{curve:i,run:r,...a}=n;return a}),e=n=>btoa(String.fromCharCode(...n));return{v:2,legacyOpen:!!this.legacyOpen,seed:this.seed,t:this.t,name:this.name,cash:this.cash,loan:this.loan,entryFee:this.entryFee,marketingUntil:this.marketingUntil,rating:this.rating,nextId:this.nextId,ledger:this.ledger,history:this.history,totals:this.totals,won:this.won,goalMissed:this.goalMissed,spawnAcc:this.spawnAcc,path:e(this.path),addon:e(this.addon),dirt:e(this.dirt),vomit:e(this.vomit),objects:t,guests:this.guests,staff:this.staff}}static fromJSON(t){let e=new s(t.seed),n=(i,r)=>{let a=atob(i),o=new Uint8Array(a.length);for(let c=0;c<a.length;c++)o[c]=a.charCodeAt(c);return new r(o.buffer)};Object.assign(e,{seed:t.seed,t:t.t,name:t.name,cash:t.cash,loan:t.loan,entryFee:t.entryFee,marketingUntil:t.marketingUntil,rating:t.rating,nextId:t.nextId,ledger:t.ledger,history:t.history,totals:t.totals,won:t.won,goalMissed:t.goalMissed,spawnAcc:t.spawnAcc||0,guests:t.guests,staff:t.staff}),e.path=n(t.path,Uint8Array),e.addon=n(t.addon,Uint8Array),e.dirt=n(t.dirt,Uint8Array),e.vomit=n(t.vomit,Uint8Array),e.objects=new Map,e.owner=new Int32Array(We),e.trackOcc=new Map;for(let i of t.objects)if(e.objects.set(i.id,i),i.type==="coaster")e.retrack(i);else for(let r of e.tilesOf(i.x,i.z,i.w,i.d)||[])e.owner[r]=i.id;if(e.legacyOpen=!!t.legacyOpen,e.derive(),(t.v||1)<2&&!e.booth()){let i=e.boothSpot();if(i){let{w:r,d:a}=gi(as,i.rot),o=e.nextId++;e.objects.set(o,{id:o,type:"booth",kind:"booth",x:i.x,z:i.z,rot:i.rot,w:r,d:a,built:-999,spent:0,name:"\u05E7\u05D5\u05E4\u05D4",sold:0});for(let c of e.tilesOf(i.x,i.z,r,a))e.owner[c]=o;e.derive()}else e.legacyOpen=!0}for(let i of e.objects.values())i.queue&&i.queue.length&&e.layoutQueue(i);return e}};var bc="185";var pf=0,Bh=1,mf=2;var wa=1,Sc=2,xr=3,Ei=0,_n=1,ci=2,li=0,_s=1,zh=2,Hh=3,Vh=4,gf=5;var qi=100,xf=101,_f=102,yf=103,vf=104,Mf=200,bf=201,Sf=202,wf=203,Do=204,No=205,Ef=206,Tf=207,Af=208,Rf=209,Cf=210,If=211,Pf=212,Lf=213,Df=214,Uo=0,Fo=1,Oo=2,ys=3,ko=4,Bo=5,zo=6,Ho=7,Ea=0,Nf=1,Uf=2,Yn=0,Gh=1,Wh=2,Xh=3,qh=4,$h=5,Yh=6,Zh=7;var Jh=300,Ji=301,bs=302,wc=303,Ec=304,Ta=306,er=1e3,ii=1001,Vo=1002,en=1003,Ff=1004;var Aa=1005;var rn=1006,Tc=1007;var Ki=1008;var bn=1009,Kh=1010,jh=1011,_r=1012,Ac=1013,Zn=1014,Hn=1015,hi=1016,Rc=1017,Cc=1018,yr=1020,Qh=35902,tu=35899,eu=1021,nu=1022,Vn=1023,si=1026,ji=1027,Ic=1028,Pc=1029,Qi=1030,Lc=1031;var Dc=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,Nc=35840,Uc=35841,Fc=35842,Oc=35843,kc=36196,Bc=37492,zc=37496,Hc=37488,Vc=37489,La=37490,Gc=37491,Wc=37808,Xc=37809,qc=37810,$c=37811,Yc=37812,Zc=37813,Jc=37814,Kc=37815,jc=37816,Qc=37817,tl=37818,el=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,cl=36284,Da=36285,ll=36286;var Wr=2300,Go=2301,Lo=2302,Eh=2303,Th=2400,Ah=2401,Rh=2402;var Of=3200;var Na=0,kf=1,Ii="",$e="srgb",Xr="srgb-linear",qr="linear",xe="srgb";var ms=7680;var Ch=519,Bf=512,zf=513,Hf=514,hl=515,Vf=516,Gf=517,ul=518,Wf=519,Wo=35044,iu=35048;var su="300 es",qn=2e3,nr=2001;function Nm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Um(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xf(){let s=$r("canvas");return s.style.display="block",s}var Pd={},ir=null;function Yr(...s){let t="THREE."+s.shift();ir?ir("log",t,...s):console.log(t,...s)}function qf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=qf(s);let t="THREE."+s.shift();if(ir)ir("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=qf(s);let t="THREE."+s.shift();if(ir)ir("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function xs(...s){let t=s.join(" ");t in Pd||(Pd[t]=!0,Gt(...s))}function $f(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yf={[Uo]:Fo,[Oo]:zo,[ko]:Ho,[ys]:Bo,[Fo]:Uo,[zo]:Oo,[Ho]:ko,[Bo]:ys},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jl=Math.PI/180,Xo=180/Math.PI;function Si(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ue(s,t,e){return Math.max(t,Math.min(e,s))}function Fm(s,t){return(s%t+t)%t}function Kl(s,t,e){return(1-e)*s+e*t}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hu=class hu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hu.prototype.isVector2=!0;var ot=hu,Be=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let w=Math.acos(g),M=Math.sin(w);p=Math.sin(p*w)/M,o=Math.sin(o*w)/M,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o;let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uu=class uu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ld.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uu.prototype.isVector3=!0;var P=uu,jl=new P,Ld=new Be,du=class du{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],w=i[1],M=i[4],x=i[7],S=i[2],b=i[5],A=i[8];return r[0]=a*v+o*w+c*S,r[3]=a*g+o*M+c*b,r[6]=a*p+o*x+c*A,r[1]=l*v+h*w+u*S,r[4]=l*g+h*M+u*b,r[7]=l*p+h*x+u*A,r[2]=d*v+f*w+m*S,r[5]=d*g+f*M+m*b,r[8]=d*p+f*x+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(t,e)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-t)),this}translate(t,e){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};du.prototype.isMatrix3=!0;var Kt=du,Ql=new Kt,Dd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Om(){let s={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),s}var fe=Om();function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Os,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=$r("canvas")),Os.width=t.width,Os.height=t.height;let i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},km=0,sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(th(i[a].image)):r.push(th(i[a]))}else r=th(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Bm=0,eh=new P,gn=class s extends ri{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ii,i=ii,r=rn,a=Ki,o=Vn,c=bn,l=s.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Si(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Jh;gn.DEFAULT_ANISOTROPY=1;var fu=class fu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,x=(f+1)/2,S=(p+1)/2,b=(h+d)/4,A=(u+v)/4,_=(m+g)/4;return M>x&&M>S?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=A/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=_/r),this.set(n,i,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fu.prototype.isVector4=!0;var Le=fu,$o=class extends ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new gn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new sr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends $o{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mc=class Mc{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,m,v,g)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),a=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zm,t,Hm)}lookAt(t,e,n){let i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),zi.crossVectors(n,Tn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),zi.crossVectors(n,Tn)),zi.normalize(),io.crossVectors(Tn,zi),i[0]=zi.x,i[4]=io.x,i[8]=Tn.x,i[1]=zi.y,i[5]=io.y,i[9]=Tn.y,i[2]=zi.z,i[6]=io.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],w=n[3],M=n[7],x=n[11],S=n[15],b=i[0],A=i[4],_=i[8],E=i[12],I=i[1],L=i[5],N=i[9],V=i[13],q=i[2],O=i[6],X=i[10],G=i[14],j=i[3],tt=i[7],ht=i[11],lt=i[15];return r[0]=a*b+o*I+c*q+l*j,r[4]=a*A+o*L+c*O+l*tt,r[8]=a*_+o*N+c*X+l*ht,r[12]=a*E+o*V+c*G+l*lt,r[1]=h*b+u*I+d*q+f*j,r[5]=h*A+u*L+d*O+f*tt,r[9]=h*_+u*N+d*X+f*ht,r[13]=h*E+u*V+d*G+f*lt,r[2]=m*b+v*I+g*q+p*j,r[6]=m*A+v*L+g*O+p*tt,r[10]=m*_+v*N+g*X+p*ht,r[14]=m*E+v*V+g*G+p*lt,r[3]=w*b+M*I+x*q+S*j,r[7]=w*A+M*L+x*O+S*tt,r[11]=w*_+M*N+x*X+S*ht,r[15]=w*E+M*V+x*G+S*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],w=c*f-l*d,M=o*f-l*u,x=o*d-c*u,S=a*f-l*h,b=a*d-c*h,A=a*u-o*h;return e*(v*w-g*M+p*x)-n*(m*w-g*S+p*b)+i*(m*M-v*S+p*A)-r*(m*x-v*b+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],w=e*o-n*a,M=e*c-i*a,x=e*l-r*a,S=n*c-i*o,b=n*l-r*o,A=i*l-r*c,_=h*v-u*m,E=h*g-d*m,I=h*p-f*m,L=u*g-d*v,N=u*p-f*v,V=d*p-f*g,q=w*V-M*N+x*L+S*I-b*E+A*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return t[0]=(o*V-c*N+l*L)*O,t[1]=(i*N-n*V-r*L)*O,t[2]=(v*A-g*b+p*S)*O,t[3]=(d*b-u*A-f*S)*O,t[4]=(c*I-a*V-l*E)*O,t[5]=(e*V-i*I+r*E)*O,t[6]=(g*x-m*A-p*M)*O,t[7]=(h*A-d*x+f*M)*O,t[8]=(a*N-o*I+l*_)*O,t[9]=(n*I-e*N-r*_)*O,t[10]=(m*b-v*x+p*w)*O,t[11]=(u*x-h*b-f*w)*O,t[12]=(o*E-a*L-c*_)*O,t[13]=(e*L-n*E+i*_)*O,t[14]=(v*M-m*S-g*w)*O,t[15]=(h*S-u*M+d*w)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,v=a*h,g=a*u,p=o*u,w=c*l,M=c*h,x=c*u,S=n.x,b=n.y,A=n.z;return i[0]=(1-(v+p))*S,i[1]=(f+x)*S,i[2]=(m-M)*S,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(g+w)*b,i[7]=0,i[8]=(m+M)*A,i[9]=(g-w)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ks.set(i[0],i[1],i[2]).length(),o=ks.set(i[4],i[5],i[6]).length(),c=ks.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Gn.copy(this);let l=1/a,h=1/o,u=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=qn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===qn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===nr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=qn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===qn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===nr)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Mc.prototype.isMatrix4=!0;var Yt=Mc,ks=new P,Gn=new Yt,zm=new P(0,0,0),Hm=new P(1,1,1),zi=new P,io=new P,Tn=new P,Ud=new Yt,Fd=new Be,Bn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ud.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ud,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vm=0,Od=new P,Bs=new Be,xi=new Yt,so=new P,Pr=new P,Gm=new P,Wm=new Be,kd=new P(1,0,0),Bd=new P(0,1,0),zd=new P(0,0,1),Hd={type:"added"},Xm={type:"removed"},zs={type:"childadded",child:null},nh={type:"childremoved",child:null},Fe=class s extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Bn,n=new Be,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Kt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(kd,t)}rotateY(t){return this.rotateOnAxis(Bd,t)}rotateZ(t){return this.rotateOnAxis(zd,t)}translateOnAxis(t,e){return Od.copy(t).applyQuaternion(this.quaternion),this.position.add(Od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kd,t)}translateY(t){return this.translateOnAxis(Bd,t)}translateZ(t){return this.translateOnAxis(zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Pr,so,this.up):xi.lookAt(so,Pr,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(xi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),zs.child=t,this.dispatchEvent(zs),zs.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xm),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Fe.DEFAULT_UP=new P(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var he=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},qm={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function ih(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=Fm(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ih(a,r,t+1/3),this.g=ih(a,r,t),this.b=ih(a,r,t-1/3)}return fe.colorSpaceToWorking(this,i),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Zf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return fe.workingToColorSpace(ln.copy(this),t),Math.round(ue(ln.r*255,0,255))*65536+Math.round(ue(ln.g*255,0,255))*256+Math.round(ue(ln.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,r=ln.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=$e){fe.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(ro);let n=Kl(Hi.h,ro.h,e),i=Kl(Hi.s,ro.s,e),r=Kl(Hi.l,ro.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Pt;Pt.NAMES=Zf;var Jr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new P,_i=new P,sh=new P,yi=new P,Hs=new P,Vs=new P,Vd=new P,rh=new P,ah=new P,oh=new P,ch=new Le,lh=new Le,hh=new Le,bi=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Wn.subVectors(t,e),i.cross(Wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Wn.subVectors(i,e),_i.subVectors(n,e),sh.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(_i),c=Wn.dot(sh),l=_i.dot(_i),h=_i.dot(sh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return ch.setScalar(0),lh.setScalar(0),hh.setScalar(0),ch.fromBufferAttribute(t,e),lh.fromBufferAttribute(t,n),hh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ch,r.x),a.addScaledVector(lh,r.y),a.addScaledVector(hh,r.z),a}static isFrontFacing(t,e,n,i){return Wn.subVectors(n,e),_i.subVectors(t,e),Wn.cross(_i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Hs.subVectors(i,n),Vs.subVectors(r,n),rh.subVectors(t,n);let c=Hs.dot(rh),l=Vs.dot(rh);if(c<=0&&l<=0)return e.copy(n);ah.subVectors(t,i);let h=Hs.dot(ah),u=Vs.dot(ah);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Hs,a);oh.subVectors(t,r);let f=Hs.dot(oh),m=Vs.dot(oh);if(m>=0&&f<=m)return e.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Vs,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Vd.subVectors(r,i),o=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Vd,o);let p=1/(g+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ai=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),oo.subVectors(this.max,Lr),Gs.subVectors(t.a,Lr),Ws.subVectors(t.b,Lr),Xs.subVectors(t.c,Lr),Vi.subVectors(Ws,Gs),Gi.subVectors(Xs,Ws),us.subVectors(Gs,Xs);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-us.z,us.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-us.y,us.x,0];return!uh(e,Gs,Ws,Xs,oo)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,Gs,Ws,Xs,oo))?!1:(co.crossVectors(Vi,Gi),e=[co.x,co.y,co.z],uh(e,Gs,Ws,Xs,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new P,new P,new P,new P,new P,new P,new P,new P],Xn=new P,ao=new ai,Gs=new P,Ws=new P,Xs=new P,Vi=new P,Gi=new P,us=new P,Lr=new P,oo=new P,co=new P,ds=new P;function uh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ds.fromArray(s,r);let o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ze=new P,lo=new ot,$m=0,Ye=class extends ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ym=new ai,Dr=new P,dh=new P,Ti=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ym.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(dh)),this.expandByPoint(Dr.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zm=0,On=new Yt,fh=new Fe,qs=new P,An=new ai,Nr=new ai,tn=new P,Ce=class s extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nm(t)?Qr:jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(An.min,Nr.min),An.expandByPoint(tn),tn.addVectors(An.max,Nr.max),An.expandByPoint(tn)):(An.expandByPoint(Nr.min),An.expandByPoint(Nr.max))}An.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tn.fromBufferAttribute(o,l),c&&(qs.fromBufferAttribute(t,l),tn.add(qs)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new P,c[_]=new P;let l=new P,h=new P,u=new P,d=new ot,f=new ot,m=new ot,v=new P,g=new P;function p(_,E,I){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,I),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[_].add(v),o[E].add(v),o[I].add(v),c[_].add(g),c[E].add(g),c[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,E=w.length;_<E;++_){let I=w[_],L=I.start,N=I.count;for(let V=L,q=L+N;V<q;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let M=new P,x=new P,S=new P,b=new P;function A(_){S.fromBufferAttribute(i,_),b.copy(S);let E=o[_];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(b,E);let L=x.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,L)}for(let _=0,E=w.length;_<E;++_){let I=w[_],L=I.start,N=I.count;for(let V=L,q=L+N;V<q;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ye(d,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ta=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new P,or=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jm=0,$n=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=_s,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cr=class extends $n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,Ur=new P,Ys=new P,Zs=new P,Js=new ot,Fr=new ot,Jf=new Yt,ho=new P,Or=new P,uo=new P,Gd=new ot,ph=new ot,Wd=new ot,ea=class extends Fe{constructor(t=new cr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ta(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new or(n,3,0,!1)),$s.setAttribute("uv",new or(n,2,3,!1))}this.geometry=$s,this.material=t,this.center=new ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Zs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;fo(ho.set(-.5,-.5,0),Zs,a,Ys,i,r),fo(Or.set(.5,-.5,0),Zs,a,Ys,i,r),fo(uo.set(.5,.5,0),Zs,a,Ys,i,r),Gd.set(0,0),ph.set(1,0),Wd.set(1,1);let o=t.ray.intersectTriangle(ho,Or,uo,!1,Ur);if(o===null&&(fo(Or.set(-.5,.5,0),Zs,a,Ys,i,r),ph.set(0,1),o=t.ray.intersectTriangle(ho,uo,Or,!1,Ur),o===null))return;let c=t.ray.origin.distanceTo(Ur);c<t.near||c>t.far||e.push({distance:c,point:Ur.clone(),uv:bi.getInterpolation(Ur,ho,Or,uo,Gd,ph,Wd,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fo(s,t,e,n,i,r){Js.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Fr.x=r*Js.x-i*Js.y,Fr.y=i*Js.x+r*Js.y):Fr.copy(Js),s.copy(t),s.x+=Fr.x,s.y+=Fr.y,s.applyMatrix4(Jf)}var Mi=new P,mh=new P,po=new P,Wi=new P,gh=new P,mo=new P,xh=new P,lr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mh.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(mh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(po),o=Wi.dot(this.direction),c=-Wi.dot(po),l=Wi.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(mh).addScaledVector(po,d),f}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,i,r){gh.subVectors(e,t),mo.subVectors(n,t),xh.crossVectors(gh,mo);let a=this.direction.dot(xh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,t);let c=o*this.direction.dot(mo.crossVectors(Wi,mo));if(c<0)return null;let l=o*this.direction.dot(gh.cross(Wi));if(l<0||c+l>a)return null;let h=-o*Wi.dot(xh);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xd=new Yt,fs=new lr,go=new Ti,qd=new P,xo=new P,_o=new P,yo=new P,_h=new P,vo=new P,$d=new P,Mo=new P,_e=class extends Fe{constructor(t=new Ce,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(_h.fromBufferAttribute(u,t),a?vo.addScaledVector(_h,h):vo.addScaledVector(_h.sub(e),h))}e.add(vo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(go.containsPoint(fs.origin)===!1&&(fs.intersectSphere(go,qd)===null||fs.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,S=M;x<S;x+=3){let b=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);i=bo(this,p,t,n,l,h,u,b,A,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let w=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);i=bo(this,a,t,n,l,h,u,w,M,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,S=M;x<S;x+=3){let b=x,A=x+1,_=x+2;i=bo(this,p,t,n,l,h,u,b,A,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let w=g,M=g+1,x=g+2;i=bo(this,a,t,n,l,h,u,w,M,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Km(s,t,e,n,i,r,a,o){let c;if(t.side===_n?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ei,o),c===null)return null;Mo.copy(o),Mo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Mo);return l<e.near||l>e.far?null:{distance:l,point:Mo.clone(),object:s}}function bo(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,xo),s.getVertexPosition(c,_o),s.getVertexPosition(l,yo);let h=Km(s,t,e,n,xo,_o,yo,$d);if(h){let u=new P;bi.getBarycoord($d,xo,_o,yo,u),i&&(h.uv=bi.getInterpolatedAttribute(i,o,c,l,u,new ot)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,c,l,u,new ot)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};bi.getNormal(xo,_o,yo,d.normal),h.face=d,h.barycoord=u}return h}var na=class extends gn{constructor(t=null,e=1,n=1,i,r,a,o,c,l=en,h=en,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends Ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new Yt,Yd=new Yt,So=[],Zd=new ai,jm=new Yt,kr=new _e,Br=new Ti,vn=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Zd.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Zd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Br.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),Yd.multiplyMatrices(n,Ks),kr.matrixWorld=Yd,kr.raycast(t,So);for(let a=0,o=So.length;a<o;a++){let c=So[a];c.instanceId=r,c.object=this,e.push(c)}So.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(i*this.count),i,this.count,Ic,Hn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yh=new P,Qm=new P,t0=new Kt,kn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=yh.subVectors(n,e).cross(Qm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(yh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t0.getNormalMatrix(t),i=this.coplanarPoint(yh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new Ti,e0=new ot(.5,.5),wo=new P,ur=class{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],w=r[12],M=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-a,f-h,p-m,S-w).normalize(),i[1].setComponents(l+a,f+h,p+m,S+w).normalize(),i[2].setComponents(l+o,f+u,p+v,S+M).normalize(),i[3].setComponents(l-o,f-u,p-v,S-M).normalize(),n)i[4].setComponents(c,d,g,x).normalize(),i[5].setComponents(l-c,f-d,p-g,S-x).normalize();else if(i[4].setComponents(l-c,f-d,p-g,S-x).normalize(),e===qn)i[5].setComponents(l+c,f+d,p+g,S+x).normalize();else if(e===nr)i[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=e0.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(wo.x=i.normal.x>0?t.max.x:t.min.x,wo.y=i.normal.y>0?t.max.y:t.min.y,wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends $n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zo=new P,Jo=new P,Jd=new Yt,zr=new lr,Eo=new Ti,vh=new P,Kd=new P,Ko=class extends Fe{constructor(t=new Ce,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zo.fromBufferAttribute(e,i-1),Jo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new se(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;Jd.copy(i).invert(),zr.copy(t.ray).applyMatrix4(Jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){let p=h.getX(v),w=h.getX(v+1),M=To(this,t,zr,c,p,w,v);M&&e.push(M)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=To(this,t,zr,c,v,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){let p=To(this,t,zr,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=To(this,t,zr,c,m-1,f,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function To(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Zo.fromBufferAttribute(o,i),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment(Zo,Jo,vh,Kd)>n)return;vh.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(vh);if(!(l<t.near||l>t.far))return{distance:l,point:Kd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var jd=new P,Qd=new P,ia=class extends Ko{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)jd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jd.distanceTo(Qd);t.setAttribute("lineDistance",new se(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sa=class extends gn{constructor(t=[],e=Ji,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ai=class extends gn{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends gn{constructor(t,e,n=Zn,i,r,a,o=en,c=en,l,h=si,u=1){if(h!==si&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jo=class extends Ri{constructor(t,e=Zn,n=Ji,i,r,a=en,o=en,c,l=si){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ra=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xn=class s extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function m(v,g,p,w,M,x,S,b,A,_,E){let I=x/A,L=S/_,N=x/2,V=S/2,q=b/2,O=A+1,X=_+1,G=0,j=0,tt=new P;for(let ht=0;ht<X;ht++){let lt=ht*L-V;for(let St=0;St<O;St++){let ie=St*I-N;tt[v]=ie*w,tt[g]=lt*M,tt[p]=q,l.push(tt.x,tt.y,tt.z),tt[v]=0,tt[g]=0,tt[p]=b>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(St/A),u.push(1-ht/_),G+=1}}for(let ht=0;ht<_;ht++)for(let lt=0;lt<A;lt++){let St=d+lt+O*ht,ie=d+lt+O*(ht+1),me=d+(lt+1)+O*(ht+1),Ut=d+(lt+1)+O*ht;c.push(St,ie,Ut),c.push(ie,me,Ut),j+=6}o.addGroup(f,j,E),f+=j,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},aa=class s extends Ce{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,v=i+1,g=new P,p=new P;for(let w=0;w<=m;w++){let M=0,x=0,S=0,b=0;if(w<=n){let E=w/n,I=E*Math.PI/2;x=-h-t*Math.cos(I),S=t*Math.sin(I),b=-t*Math.cos(I),M=E*u}else if(w<=n+r){let E=(w-n)/r;x=-h+E*e,S=t,b=0,M=u+E*d}else{let E=(w-n-r)/n,I=E*Math.PI/2;x=h+t*Math.sin(I),S=t*Math.cos(I),b=t*Math.sin(I),M=u+d+E*u}let A=Math.max(0,Math.min(1,M/f)),_=0;w===0?_=.5/i:w===m&&(_=-.5/i);for(let E=0;E<=i;E++){let I=E/i,L=I*Math.PI*2,N=Math.sin(L),V=Math.cos(L);p.x=-S*V,p.y=x,p.z=S*N,o.push(p.x,p.y,p.z),g.set(-S*V,b,S*N),g.normalize(),c.push(g.x,g.y,g.z),l.push(I+_,A)}if(w>0){let E=(w-1)*v;for(let I=0;I<i;I++){let L=E+I,N=E+I+1,V=w*v+I,q=w*v+I+1;a.push(L,N,V),a.push(N,q,V)}}}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var He=class s extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;w(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function w(){let x=new P,S=new P,b=0,A=(e-t)/n;for(let _=0;_<=r;_++){let E=[],I=_/r,L=I*(e-t)+t;for(let N=0;N<=i;N++){let V=N/i,q=V*c+o,O=Math.sin(q),X=Math.cos(q);S.x=L*O,S.y=-I*n+g,S.z=L*X,u.push(S.x,S.y,S.z),x.set(O,A,X).normalize(),d.push(x.x,x.y,x.z),f.push(V,1-I),E.push(m++)}v.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let I=v[E][_],L=v[E+1][_],N=v[E+1][_+1],V=v[E][_+1];(t>0||E!==0)&&(h.push(I,L,V),b+=3),(e>0||E!==r-1)&&(h.push(L,N,V),b+=3)}l.addGroup(p,b,0),p+=b}function M(x){let S=m,b=new ot,A=new P,_=0,E=x===!0?t:e,I=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),m++;let L=m;for(let N=0;N<=i;N++){let q=N/i*c+o,O=Math.cos(q),X=Math.sin(q);A.x=E*X,A.y=g*I,A.z=E*O,u.push(A.x,A.y,A.z),d.push(0,I,0),b.x=O*.5+.5,b.y=X*.5*I+.5,f.push(b.x,b.y),m++}for(let N=0;N<i;N++){let V=S+N,q=L+N;x===!0?h.push(q,q+1,V):h.push(q+1,q,V),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class s extends He{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qo=class s extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let M=new P,x=new P,S=new P;for(let b=0;b<e.length;b+=3)f(e[b+0],M),f(e[b+1],x),f(e[b+2],S),c(M,x,S,w)}function c(w,M,x,S){let b=S+1,A=[];for(let _=0;_<=b;_++){A[_]=[];let E=w.clone().lerp(x,_/b),I=M.clone().lerp(x,_/b),L=b-_;for(let N=0;N<=L;N++)N===0&&_===b?A[_][N]=E:A[_][N]=E.clone().lerp(I,N/L)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let I=Math.floor(E/2);E%2===0?(d(A[_][I+1]),d(A[_+1][I]),d(A[_][I])):(d(A[_][I+1]),d(A[_+1][I+1]),d(A[_+1][I]))}}function l(w){let M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(w),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let w=new P;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];let x=g(w)/2/Math.PI+.5,S=p(w)/Math.PI+.5;a.push(x,1-S)}m(),u()}function u(){for(let w=0;w<a.length;w+=6){let M=a[w+0],x=a[w+2],S=a[w+4],b=Math.max(M,x,S),A=Math.min(M,x,S);b>.9&&A<.1&&(M<.2&&(a[w+0]+=1),x<.2&&(a[w+2]+=1),S<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,M){let x=w*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){let w=new P,M=new P,x=new P,S=new P,b=new ot,A=new ot,_=new ot;for(let E=0,I=0;E<r.length;E+=9,I+=6){w.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(a[I+0],a[I+1]),A.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),S.copy(w).add(M).add(x).divideScalar(3);let L=g(S);v(b,I+0,w,L),v(A,I+2,M,L),v(_,I+4,x,L)}}function v(w,M,x,S){S<0&&w.x===1&&(a[M]=w.x-1),x.x===0&&x.z===0&&(a[M]=S/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ot:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],r=[],a=[],o=new P,c=new Yt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ue(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ue(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends Cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tc=class extends fr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ru(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var tf=new P,ef=new P,Mh=new ru,bh=new ru,Sh=new ru,ec=class extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ef.subVectors(i[0],i[1]).add(i[0]),l=ef);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(tf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=tf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Mh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),bh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Sh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),bh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Sh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Mh.calc(c),bh.calc(c),Sh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nf(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function n0(s,t){let e=1-s;return e*e*t}function i0(s,t){return 2*(1-s)*s*t}function s0(s,t){return s*s*t}function Vr(s,t,e,n){return n0(s,t)+i0(s,e)+s0(s,n)}function r0(s,t){let e=1-s;return e*e*e*t}function a0(s,t){let e=1-s;return 3*e*e*s*t}function o0(s,t){return 3*(1-s)*s*s*t}function c0(s,t){return s*s*s*t}function Gr(s,t,e,n,i){return r0(s,t)+a0(s,e)+o0(s,n)+c0(s,i)}var oa=class extends Cn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,i.x,r.x,a.x,o.x),Gr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nc=class extends Cn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,i.x,r.x,a.x,o.x),Gr(t,i.y,r.y,a.y,o.y),Gr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends Cn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ic=class extends Cn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Cn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,i.x,r.x,a.x),Vr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends Cn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,i.x,r.x,a.x),Vr(t,i.y,r.y,a.y),Vr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(nf(o,c.x,l.x,h.x,u.x),nf(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ot().fromArray(i))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:ec,CubicBezierCurve:oa,CubicBezierCurve3:nc,EllipseCurve:fr,LineCurve:ca,LineCurve3:ic,QuadraticBezierCurve:la,QuadraticBezierCurve3:sc,SplineCurve:ha}),rc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ih[i.type]().fromJSON(i))}return this}},ua=class extends rc{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ca(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new la(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new oa(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ha(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){let l=new fr(t,e,n,i,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class extends ua{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ua().fromJSON(i))}return this}};function l0(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Kf(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=p0(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,u=c;for(let d=e;d<i;d+=e){let f=s[d],m=s[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return da(r,a,e,o,c,l,0),a}function Kf(s,t,e,n,i){let r;if(i===E0(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=sf(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=sf(a/n|0,s[a],s[a+1],r);return r&&pr(r,r.next)&&(pa(r),r=r.next),r}function Ms(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||De(e.prev,e,e.next)===0)){if(pa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function da(s,t,e,n,i,r,a){if(!s)return;!a&&r&&y0(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?u0(s,n,i,r):h0(s)){t.push(c.i,s.i,l.i),pa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=d0(Ms(s),t),da(s,t,e,n,i,r,2)):a===2&&f0(s,t,e,n,i,r):da(Ms(s),t,e,n,i,r,1);break}}}function h0(s){let t=s.prev,e=s,n=s.next;if(De(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Hr(i,o,r,c,a,l,m.x,m.y)&&De(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function u0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(De(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),v=Math.max(o,c,l),g=Math.max(h,u,d),p=Ph(f,m,t,e,n),w=Ph(v,g,t,e,n),M=s.prevZ,x=s.nextZ;for(;M&&M.z>=p&&x&&x.z<=w;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==a&&Hr(o,h,c,u,l,d,M.x,M.y)&&De(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Hr(o,h,c,u,l,d,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==a&&Hr(o,h,c,u,l,d,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Hr(o,h,c,u,l,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function d0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!pr(n,i)&&Qf(n,e,e.next,i)&&fa(n,i)&&fa(i,n)&&(t.push(n.i,e.i,i.i),pa(e),pa(e.next),e=s=i),e=e.next}while(e!==s);return Ms(e)}function f0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b0(a,o)){let c=tp(a,o);a=Ms(a,a.next),c=Ms(c,c.next),da(a,t,e,n,i,r,0),da(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function p0(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Kf(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(M0(l))}i.sort(m0);for(let r=0;r<i.length;r++)e=g0(i[r],e);return e}function m0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function g0(s,t){let e=x0(s,t);if(!e)return t;let n=tp(e,s);return Ms(n,n.next),Ms(e,e.next)}function x0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(pr(s,e))return e;do{if(pr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&jf(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);fa(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&_0(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function _0(s,t){return De(s.prev,s,t.prev)<0&&De(t.next,s,s.next)<0}function y0(s,t,e,n){let i=s;do i.z===0&&(i.z=Ph(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,v0(i)}function v0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Ph(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function M0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function jf(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Hr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&jf(s,t,e,n,i,r,a,o)}function b0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!S0(s,t)&&(fa(s,t)&&fa(t,s)&&w0(s,t)&&(De(s.prev,s,t.prev)||De(s,t.prev,t))||pr(s,t)&&De(s.prev,s,s.next)>0&&De(t.prev,t,t.next)>0)}function De(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pr(s,t){return s.x===t.x&&s.y===t.y}function Qf(s,t,e,n){let i=Ro(De(s,t,e)),r=Ro(De(s,t,n)),a=Ro(De(e,n,s)),o=Ro(De(e,n,t));return!!(i!==r&&a!==o||i===0&&Ao(s,e,t)||r===0&&Ao(s,n,t)||a===0&&Ao(e,s,n)||o===0&&Ao(e,t,n))}function Ao(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ro(s){return s>0?1:s<0?-1:0}function S0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Qf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function fa(s,t){return De(s.prev,s,s.next)<0?De(s,t,s.next)>=0&&De(s,s.prev,t)>=0:De(s,t,s.prev)<0||De(s,s.next,t)<0}function w0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function tp(s,t){let e=Lh(s.i,s.x,s.y),n=Lh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sf(s,t,e,n){let i=Lh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Dh=class{static triangulate(t,e,n=2){return l0(t,e,n)}},gs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];rf(t),af(n,t);let a=t.length;e.forEach(rf);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,af(n,e[c]);let o=Dh.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function rf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function af(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var mr=class s extends Ce{constructor(t=new vs([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new se(i,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:T0,M,x=!1,S,b,A,_;if(p){M=p.getSpacedPoints(h),x=!0,d=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,Q),b=new P,A=new P,_=new P}d||(g=0,f=0,m=0,v=0);let E=o.extractPoints(l),I=E.shape,L=E.holes;if(!gs.isClockWise(I)){I=I.reverse();for(let Q=0,st=L.length;Q<st;Q++){let it=L[Q];gs.isClockWise(it)&&(L[Q]=it.reverse())}}function V(Q){let it=10000000000000001e-36,dt=Q[0];for(let pt=1;pt<=Q.length;pt++){let Ht=pt%Q.length,Dt=Q[Ht],Xt=Dt.x-dt.x,Jt=Dt.y-dt.y,D=Xt*Xt+Jt*Jt,ge=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(dt.x),Math.abs(dt.y)),oe=it*ge*ge;if(D<=oe){Q.splice(Ht,1),pt--;continue}dt=Dt}}V(I),L.forEach(V);let q=L.length,O=I;for(let Q=0;Q<q;Q++){let st=L[Q];I=I.concat(st)}function X(Q,st,it){return st||Wt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(st,it)}let G=I.length;function j(Q,st,it){let dt,pt,Ht,Dt=Q.x-st.x,Xt=Q.y-st.y,Jt=it.x-Q.x,D=it.y-Q.y,ge=Dt*Dt+Xt*Xt,oe=Dt*D-Xt*Jt;if(Math.abs(oe)>Number.EPSILON){let C=Math.sqrt(ge),y=Math.sqrt(Jt*Jt+D*D),k=st.x-Xt/C,H=st.y+Dt/C,$=it.x-D/y,ct=it.y+Jt/y,ut=(($-k)*D-(ct-H)*Jt)/(Dt*D-Xt*Jt);dt=k+Dt*ut-Q.x,pt=H+Xt*ut-Q.y;let Z=dt*dt+pt*pt;if(Z<=2)return new ot(dt,pt);Ht=Math.sqrt(Z/2)}else{let C=!1;Dt>Number.EPSILON?Jt>Number.EPSILON&&(C=!0):Dt<-Number.EPSILON?Jt<-Number.EPSILON&&(C=!0):Math.sign(Xt)===Math.sign(D)&&(C=!0),C?(dt=-Xt,pt=Dt,Ht=Math.sqrt(ge)):(dt=Dt,pt=Xt,Ht=Math.sqrt(ge/2))}return new ot(dt/Ht,pt/Ht)}let tt=[];for(let Q=0,st=O.length,it=st-1,dt=Q+1;Q<st;Q++,it++,dt++)it===st&&(it=0),dt===st&&(dt=0),tt[Q]=j(O[Q],O[it],O[dt]);let ht=[],lt,St=tt.concat();for(let Q=0,st=q;Q<st;Q++){let it=L[Q];lt=[];for(let dt=0,pt=it.length,Ht=pt-1,Dt=dt+1;dt<pt;dt++,Ht++,Dt++)Ht===pt&&(Ht=0),Dt===pt&&(Dt=0),lt[dt]=j(it[dt],it[Ht],it[Dt]);ht.push(lt),St=St.concat(lt)}let ie;if(g===0)ie=gs.triangulateShape(O,L);else{let Q=[],st=[];for(let it=0;it<g;it++){let dt=it/g,pt=f*Math.cos(dt*Math.PI/2),Ht=m*Math.sin(dt*Math.PI/2)+v;for(let Dt=0,Xt=O.length;Dt<Xt;Dt++){let Jt=X(O[Dt],tt[Dt],Ht);Et(Jt.x,Jt.y,-pt),dt===0&&Q.push(Jt)}for(let Dt=0,Xt=q;Dt<Xt;Dt++){let Jt=L[Dt];lt=ht[Dt];let D=[];for(let ge=0,oe=Jt.length;ge<oe;ge++){let C=X(Jt[ge],lt[ge],Ht);Et(C.x,C.y,-pt),dt===0&&D.push(C)}dt===0&&st.push(D)}}ie=gs.triangulateShape(Q,st)}let me=ie.length,Ut=m+v;for(let Q=0;Q<G;Q++){let st=d?X(I[Q],St[Q],Ut):I[Q];x?(A.copy(S.normals[0]).multiplyScalar(st.x),b.copy(S.binormals[0]).multiplyScalar(st.y),_.copy(M[0]).add(A).add(b),Et(_.x,_.y,_.z)):Et(st.x,st.y,0)}for(let Q=1;Q<=h;Q++)for(let st=0;st<G;st++){let it=d?X(I[st],St[st],Ut):I[st];x?(A.copy(S.normals[Q]).multiplyScalar(it.x),b.copy(S.binormals[Q]).multiplyScalar(it.y),_.copy(M[Q]).add(A).add(b),Et(_.x,_.y,_.z)):Et(it.x,it.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let st=Q/g,it=f*Math.cos(st*Math.PI/2),dt=m*Math.sin(st*Math.PI/2)+v;for(let pt=0,Ht=O.length;pt<Ht;pt++){let Dt=X(O[pt],tt[pt],dt);Et(Dt.x,Dt.y,u+it)}for(let pt=0,Ht=L.length;pt<Ht;pt++){let Dt=L[pt];lt=ht[pt];for(let Xt=0,Jt=Dt.length;Xt<Jt;Xt++){let D=X(Dt[Xt],lt[Xt],dt);x?Et(D.x,D.y+M[h-1].y,M[h-1].x+it):Et(D.x,D.y,u+it)}}}Y(),at();function Y(){let Q=i.length/3;if(d){let st=0,it=G*st;for(let dt=0;dt<me;dt++){let pt=ie[dt];Ft(pt[2]+it,pt[1]+it,pt[0]+it)}st=h+g*2,it=G*st;for(let dt=0;dt<me;dt++){let pt=ie[dt];Ft(pt[0]+it,pt[1]+it,pt[2]+it)}}else{for(let st=0;st<me;st++){let it=ie[st];Ft(it[2],it[1],it[0])}for(let st=0;st<me;st++){let it=ie[st];Ft(it[0]+G*h,it[1]+G*h,it[2]+G*h)}}n.addGroup(Q,i.length/3-Q,0)}function at(){let Q=i.length/3,st=0;nt(O,st),st+=O.length;for(let it=0,dt=L.length;it<dt;it++){let pt=L[it];nt(pt,st),st+=pt.length}n.addGroup(Q,i.length/3-Q,1)}function nt(Q,st){let it=Q.length;for(;--it>=0;){let dt=it,pt=it-1;pt<0&&(pt=Q.length-1);for(let Ht=0,Dt=h+g*2;Ht<Dt;Ht++){let Xt=G*Ht,Jt=G*(Ht+1),D=st+dt+Xt,ge=st+pt+Xt,oe=st+pt+Jt,C=st+dt+Jt;wt(D,ge,oe,C)}}}function Et(Q,st,it){c.push(Q),c.push(st),c.push(it)}function Ft(Q,st,it){jt(Q),jt(st),jt(it);let dt=i.length/3,pt=w.generateTopUV(n,i,dt-3,dt-2,dt-1);qt(pt[0]),qt(pt[1]),qt(pt[2])}function wt(Q,st,it,dt){jt(Q),jt(st),jt(dt),jt(st),jt(it),jt(dt);let pt=i.length/3,Ht=w.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);qt(Ht[0]),qt(Ht[1]),qt(Ht[3]),qt(Ht[1]),qt(Ht[2]),qt(Ht[3])}function jt(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function qt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return A0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ih[i.type]().fromJSON(i)),new s(n,t.options)}},T0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ot(r,a),new ot(o,c),new ot(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-u),new ot(d,1-m),new ot(v,1-p)]:[new ot(o,1-c),new ot(h,1-u),new ot(f,1-m),new ot(g,1-p)]}};function A0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ma=class s extends Qo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ga=class s extends Ce{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ue(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new P,d=new ot,f=new P,m=new P,v=new P,g=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let w=0;w<=e;w++){let M=n+w*h*i,x=Math.sin(M),S=Math.cos(M);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*S,a.push(u.x,u.y,u.z),d.x=w/e,d.y=b/(t.length-1),o.push(d.x,d.y);let A=c[3*b+0]*x,_=c[3*b+1],E=c[3*b+0]*S;l.push(A,_,E)}}for(let w=0;w<e;w++)for(let M=0;M<t.length-1;M++){let x=M+w*t.length,S=x,b=x+t.length,A=x+t.length+1,_=x+1;r.push(S,b,_),r.push(A,_,b)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var zn=class s extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let w=p*d-a;for(let M=0;M<l;M++){let x=M*u-r;m.push(x,-w,0),v.push(0,0,1),g.push(M/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){let M=w+l*p,x=w+l*(p+1),S=w+1+l*(p+1),b=w+1+l*p;f.push(M,x,b),f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ci=class s extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let w=[],M=p/n,x=a+M*o,S=t*Math.cos(x),b=Math.sqrt(t*t-S*S),A=0;p===0&&a===0?A=.5/e:p===n&&c===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let E=_/e,I=i+E*r;u.x=-b*Math.cos(I),u.y=S,u.z=b*Math.sin(I),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+A,1-M),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let M=h[p][w+1],x=h[p][w],S=h[p+1][w],b=h[p+1][w+1];(p!==0||a>0)&&f.push(M,x,b),(p!==n-1||c<Math.PI)&&f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oi=class s extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new P,f=new P,m=new P;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=i;p++){let w=p/i*r;f.x=(t+e*Math.cos(g))*Math.cos(w),f.y=(t+e*Math.cos(g))*Math.sin(w),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),d.x=t*Math.cos(w),d.y=t*Math.sin(w),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let p=(i+1)*v+g-1,w=(i+1)*(v-1)+g-1,M=(i+1)*(v-1)+g,x=(i+1)*v+g;c.push(p,w,x),c.push(w,M,x)}this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Ss(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(of(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(of(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function dn(s){let t={};for(let e=0;e<s.length;e++){let n=Ss(s[e]);for(let i in n)t[i]=n[i]}return t}function of(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function R0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function au(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var ep={clone:Ss,merge:dn},C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=R0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ac=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xa=class extends $n{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mn=class extends $n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oc=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cc=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Co(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var $i=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lc=class extends $i{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ah:r=t,o=2*e-n;break;case Rh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ah:a=t,c=2*n-e;break;case Rh:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,w=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+w*a[l+S]+M*a[c+S]+x*a[u+S];return r}},hc=class extends $i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},uc=class extends $i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},dc=class extends $i{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(i-e),v=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let v=a[l+m],g=a[c+m],p=f*d+m*2,w=u[p],M=u[p+1],x=t*d+m*2,S=h[x],b=h[x+1],A=(n-e)/(i-e),_,E,I,L,N;for(let V=0;V<8;V++){_=A*A,E=_*A,I=1-A,L=I*I,N=L*I;let O=N*e+3*L*A*w+3*I*_*S+E*i-n;if(Math.abs(O)<1e-10)break;let X=3*L*(w-e)+6*I*A*(S-w)+3*_*(i-S);if(Math.abs(X)<1e-10)break;A=A-O/X,A=Math.max(0,Math.min(1,A))}r[m]=N*v+3*L*A*M+3*I*_*b+E*g}return r}},Pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new dc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case Eh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Wt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Wt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Um(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Wt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Go;var Yi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Wr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};fc.prototype.ValueTypeName="color";var pc=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};pc.prototype.ValueTypeName="number";var mc=class extends $i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Be.slerpFlat(r,0,a,l-o,a,l,c);return r}},_a=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Wr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};gc.prototype.ValueTypeName="vector";var xc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},np=new xc,_c=class{constructor(t){this.manager=t!==void 0?t:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_c.DEFAULT_MATERIAL_NAME="__DEFAULT";var ya=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},va=class extends ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wh=new Yt,cf=new P,lf=new P,Nh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lf),e.updateMatrixWorld(),wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===nr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Io=new P,Po=new Be,ei=new P,Ma=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Io,Po,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Po,ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Io,Po,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Po,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new P,hf=new ot,uf=new ot,hn=class extends Ma{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,hf,uf),e.subVectors(uf,hf)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var gr=class extends Ma{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uh=class extends Nh{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Uh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var js=-90,Qs=1,yc=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new hn(js,Qs,t,e);i.layers=this.layers,this.add(i);let r=new hn(js,Qs,t,e);r.layers=this.layers,this.add(r);let a=new hn(js,Qs,t,e);a.layers=this.layers,this.add(a);let o=new hn(js,Qs,t,e);o.layers=this.layers,this.add(o);let c=new hn(js,Qs,t,e);c.layers=this.layers,this.add(c);let l=new hn(js,Qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},vc=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ou="\\[\\]\\.:\\/",P0=new RegExp("["+ou+"]","g"),cu="[^"+ou+"]",L0="[^"+ou.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",cu),N0=/(WCOD+)?/.source.replace("WCOD",L0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),O0=new RegExp("^"+D0+N0+U0+F0+"$"),k0=["material","materials","bones","map"],Fh=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(t){let e=O0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);k0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Fh;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RM=new Float32Array(1);var df=new Yt,Sa=class{constructor(t,e,n=0,i=1/0){this.ray=new lr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(df),this}intersectObject(t,e=!0,n=[]){return Oh(t,this,n,e),n.sort(ff),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Oh(t[i],this,n,e);return n.sort(ff),n}};function ff(s,t){return s.distance-t.distance}function Oh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Oh(r[a],t,e,!0)}}var pu=class pu{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};pu.prototype.isMatrix2=!0;var kh=pu;function lu(s,t,e,n){let i=B0(n);switch(e){case eu:return s*t;case Ic:return s*t/i.components*i.byteLength;case Pc:return s*t/i.components*i.byteLength;case Qi:return s*t*2/i.components*i.byteLength;case Lc:return s*t*2/i.components*i.byteLength;case nu:return s*t*3/i.components*i.byteLength;case Vn:return s*t*4/i.components*i.byteLength;case Dc:return s*t*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uc:case Oc:return Math.max(s,16)*Math.max(t,8)/4;case Nc:case Fc:return Math.max(s,8)*Math.max(t,8)/2;case kc:case Bc:case Hc:case Vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zc:case La:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case sl:case rl:case al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ol:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Da:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(s){switch(s){case bn:case Kh:return{byteLength:1,components:1};case _r:case jh:case hi:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case Zn:case Ac:case Hn:return{byteLength:4,components:1};case Qh:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);function Ep(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function G0(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:$0,alphatest_fragment:Y0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:K0,batching_pars_vertex:j0,batching_vertex:Q0,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:cg,color_fragment:lg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:dg,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:_g,emissivemap_pars_fragment:yg,colorspace_fragment:vg,colorspace_pars_fragment:Mg,envmap_fragment:bg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:wg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Fg,envmap_vertex:Tg,fog_vertex:Ag,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ng,lights_pars_begin:Ug,lights_toon_fragment:Og,lights_toon_pars_fragment:kg,lights_phong_fragment:Bg,lights_phong_pars_fragment:zg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,lightprobes_pars_fragment:qg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Kg,map_pars_fragment:jg,map_particle_fragment:Qg,map_particle_pars_fragment:tx,metalnessmap_fragment:ex,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:ox,normal_fragment_begin:cx,normal_fragment_maps:lx,normal_pars_fragment:hx,normal_pars_vertex:ux,normal_vertex:dx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:xx,opaque_fragment:_x,packing:yx,premultiplied_alpha_fragment:vx,project_vertex:Mx,dithering_fragment:bx,dithering_pars_fragment:Sx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ax,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Ix,skinning_pars_vertex:Px,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Nx,specularmap_pars_fragment:Ux,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ox,transmission_fragment:kx,transmission_pars_fragment:Bx,uv_pars_fragment:zx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:$x,cube_vert:Yx,cube_frag:Zx,depth_vert:Jx,depth_frag:Kx,distance_vert:jx,distance_frag:Qx,equirect_vert:t_,equirect_frag:e_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:s_,meshbasic_frag:r_,meshlambert_vert:a_,meshlambert_frag:o_,meshmatcap_vert:c_,meshmatcap_frag:l_,meshnormal_vert:h_,meshnormal_frag:u_,meshphong_vert:d_,meshphong_frag:f_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:x_,points_vert:__,points_frag:y_,shadow_vert:v_,shadow_frag:M_,sprite_vert:b_,sprite_frag:S_},yt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},di={basic:{uniforms:dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:dn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:dn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:dn([yt.points,yt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:dn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:dn([yt.common,yt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:dn([yt.sprite,yt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:dn([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:dn([yt.lights,yt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};di.physical={uniforms:dn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var dl={r:0,b:0,g:0},w_=new Yt,Tp=new Kt;Tp.set(-1,0,0,0,1,0,0,0,1);function E_(s,t,e,n,i,r){let a=new Pt(0),o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(w){let M=w.isScene===!0?w.background:null;if(M&&M.isTexture){let x=w.backgroundBlurriness>0;M=t.get(M,x)}return M}function m(w){let M=!1,x=f(w);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(w,M){let x=f(M);x&&(x.isCubeTexture||x.mapping===Ta)?(l===void 0&&(l=new _e(new xn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ss(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Tp),l.material.toneMapped=fe.getTransfer(x.colorSpace)!==xe,(h!==x||u!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _e(new zn(2,2),new In({name:"BackgroundMaterial",uniforms:Ss(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=fe.getTransfer(x.colorSpace)!==xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,M){w.getRGB(dl,au(s)),e.buffers.color.setClear(dl.r,dl.g,dl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:m,addToRenderList:v,dispose:p}}function T_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(L,N,V,q,O){let X=!1,G=u(L,q,V,N);r!==G&&(r=G,l(r.object)),X=f(L,q,V,O),X&&m(L,q,V,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(L,N,V,q),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,N,V,q){let O=q.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let G=L.isInstancedMesh===!0?L.id:0,j=X[G];j===void 0&&(j={},X[G]=j);let tt=j[V.id];tt===void 0&&(tt={},j[V.id]=tt);let ht=tt[O];return ht===void 0&&(ht=d(c()),tt[O]=ht),ht}function d(L){let N=[],V=[],q=[];for(let O=0;O<e;O++)N[O]=0,V[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function f(L,N,V,q){let O=r.attributes,X=N.attributes,G=0,j=V.getAttributes();for(let tt in j)if(j[tt].location>=0){let lt=O[tt],St=X[tt];if(St===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==q}function m(L,N,V,q){let O={},X=N.attributes,G=0,j=V.getAttributes();for(let tt in j)if(j[tt].location>=0){let lt=X[tt];lt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor));let St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),O[tt]=St,G++}r.attributes=O,r.attributesNum=G,r.index=q}function v(){let L=r.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function g(L){p(L,0)}function p(L,N){let V=r.newAttributes,q=r.enabledAttributes,O=r.attributeDivisors;V[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),O[L]!==N&&(s.vertexAttribDivisor(L,N),O[L]=N)}function w(){let L=r.newAttributes,N=r.enabledAttributes;for(let V=0,q=N.length;V<q;V++)N[V]!==L[V]&&(s.disableVertexAttribArray(V),N[V]=0)}function M(L,N,V,q,O,X,G){G===!0?s.vertexAttribIPointer(L,N,V,O,X):s.vertexAttribPointer(L,N,V,q,O,X)}function x(L,N,V,q){v();let O=q.attributes,X=V.getAttributes(),G=N.defaultAttributeValues;for(let j in X){let tt=X[j];if(tt.location>=0){let ht=O[j];if(ht===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),ht!==void 0){let lt=ht.normalized,St=ht.itemSize,ie=t.get(ht);if(ie===void 0)continue;let me=ie.buffer,Ut=ie.type,Y=ie.bytesPerElement,at=Ut===s.INT||Ut===s.UNSIGNED_INT||ht.gpuType===Ac;if(ht.isInterleavedBufferAttribute){let nt=ht.data,Et=nt.stride,Ft=ht.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<tt.locationSize;wt++)p(tt.location+wt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<tt.locationSize;wt++)g(tt.location+wt);s.bindBuffer(s.ARRAY_BUFFER,me);for(let wt=0;wt<tt.locationSize;wt++)M(tt.location+wt,St/tt.locationSize,Ut,lt,Et*Y,(Ft+St/tt.locationSize*wt)*Y,at)}else{if(ht.isInstancedBufferAttribute){for(let nt=0;nt<tt.locationSize;nt++)p(tt.location+nt,ht.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let nt=0;nt<tt.locationSize;nt++)g(tt.location+nt);s.bindBuffer(s.ARRAY_BUFFER,me);for(let nt=0;nt<tt.locationSize;nt++)M(tt.location+nt,St/tt.locationSize,Ut,lt,St*Y,St/tt.locationSize*nt*Y,at)}}else if(G!==void 0){let lt=G[j];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(tt.location,lt);break;case 3:s.vertexAttrib3fv(tt.location,lt);break;case 4:s.vertexAttrib4fv(tt.location,lt);break;default:s.vertexAttrib1fv(tt.location,lt)}}}}w()}function S(){E();for(let L in n){let N=n[L];for(let V in N){let q=N[V];for(let O in q){let X=q[O];for(let G in X)h(X[G].object),delete X[G];delete q[O]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let V in N){let q=N[V];for(let O in q){let X=q[O];for(let G in X)h(X[G].object),delete X[G];delete q[O]}}delete n[L.id]}function A(L){for(let N in n){let V=n[N];for(let q in V){let O=V[q];if(O[L.id]===void 0)continue;let X=O[L.id];for(let G in X)h(X[G].object),delete X[G];delete O[L.id]}}}function _(L){for(let N in n){let V=n[N],q=L.isInstancedMesh===!0?L.id:0,O=V[q];if(O!==void 0){for(let X in O){let G=O[X];for(let j in G)h(G[j].object),delete G[j];delete O[X]}delete V[q],Object.keys(V).length===0&&delete n[N]}}}function E(){I(),a=!0,r!==i&&(r=i,l(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function A_(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function R_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Vn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!_)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:b}}function C_(s){let t=this,e=null,n=0,i=!1,r=!1,a=new kn,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let w=r?0:n,M=w*4,x=p.clippingState||null;c.value=x,x=h(m,d,M,f);for(let S=0;S!==M;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)a.copy(u[M]).applyMatrix4(w,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var ts=4,ip=[.125,.215,.35,.446,.526,.582],ws=20,I_=256,Ua=new gr,sp=new Pt,mu=null,gu=0,xu=0,_u=!1,P_=new P,pl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=P_}=r;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mu,gu,xu),this._renderer.xr.enabled=_u,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:hi,format:Vn,colorSpace:Xr,depthBuffer:!1},i=rp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=L_(r)),this._blurMaterial=N_(r,t,e),this._ggxMaterial=D_(r,t,e)}return i}_compileMaterial(t){let e=new _e(new Ce,t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,i,r){let c=new hn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(sp),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new xn,new un({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(sp),p=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;vr(i,x*S,M>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(v,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ji||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-ts?n-m+ts:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,vr(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(o,Ua),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,vr(t,g,p,3*v,2*v),i.setRenderTarget(t),i.render(o,Ua)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ws-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):ws;g>ws&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);let p=[],w=0;for(let A=0;A<ws;++A){let _=A/v,E=Math.exp(-_*_/2);p.push(E),A===0?w+=E:A<g&&(w+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let x=this._sizeLods[i],S=3*x*(i>M-ts?i-M+ts:0),b=4*(this._cubeSize-x);vr(e,S,b,3*x,2*x),c.setRenderTarget(e),c.render(u,Ua)}};function L_(s){let t=[],e=[],n=[],i=s,r=s-ts+1+ip.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ts?c=ip[a-s+ts-1]:a===0&&(c=0),e.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*f),M=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let b=0;b<f;b++){let A=b%3*2/3-1,_=b>2?0:-1,E=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];w.set(E,v*m*b),M.set(d,g*m*b);let I=[b,b,b,b,b,b];x.set(I,p*m*b)}let S=new Ce;S.setAttribute("position",new Ye(w,v)),S.setAttribute("uv",new Ye(M,g)),S.setAttribute("faceIndex",new Ye(x,p)),n.push(new _e(S,null)),i>ts&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function rp(s,t,e){let n=new Rn(s,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function D_(s,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function N_(s,t,e){let n=new Float32Array(ws),i=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ap(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function op(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ml=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new sa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xn(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:li});r.uniforms.tEquirect.value=e;let a=new _e(i,r),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=rn),new yc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function U_(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wc||f===Ec)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new ml(m.height);return v.fromEquirectangularTexture(s,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===wc||f===Ec,v=f===Ji||f===bs;if(m||v){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new pl(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let w=d.image;return m&&w&&w.height>0||v&&w&&c(w)?(n===null&&(n=new pl(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===wc?d.mapping=Ji:f===Ec&&(d.mapping=bs),d}function c(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function F_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&xs("WebGLRenderer: "+n+" extension not supported."),i}}}function O_(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(m===void 0)return;if(f!==null){let w=f.array;v=f.version;for(let M=0,x=w.length;M<x;M+=3){let S=w[M+0],b=w[M+1],A=w[M+2];d.push(S,b,b,A,A,S)}}else{let w=m.array;v=m.version;for(let M=0,x=w.length/3-1;M<x;M+=3){let S=M+0,b=M+1,A=M+2;d.push(S,b,b,A,A,S)}}let g=new(m.count>=65535?Qr:jr)(d,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function k_(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function B_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function z_(s,t,e){let n=new WeakMap,i=new Le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*S*4*u),A=new Zr(b,x,S,u);A.type=Hn,A.needsUpdate=!0;let _=M*4;for(let I=0;I<u;I++){let L=g[I],N=p[I],V=w[I],q=x*S*4*I;for(let O=0;O<L.count;O++){let X=O*_;f===!0&&(i.fromBufferAttribute(L,O),b[q+X+0]=i.x,b[q+X+1]=i.y,b[q+X+2]=i.z,b[q+X+3]=0),m===!0&&(i.fromBufferAttribute(N,O),b[q+X+4]=i.x,b[q+X+5]=i.y,b[q+X+6]=i.z,b[q+X+7]=0),v===!0&&(i.fromBufferAttribute(V,O),b[q+X+8]=i.x,b[q+X+9]=i.y,b[q+X+10]=i.z,b[q+X+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new ot(x,S)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function H_(s,t,e,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var V_={[Gh]:"LINEAR_TONE_MAPPING",[Wh]:"REINHARD_TONE_MAPPING",[Xh]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function G_(s,t,e,n,i,r){let a=new Rn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new Ri(t,e):void 0}),o=new Rn(t,e,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new Ce;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let l=new ac({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new _e(c,l),u=new gr(-1,1,1,-1,0,1),d=null,f=null,m=!1,v,g=null,p=[],w=!1;this.setSize=function(M,x){a.setSize(M,x),o.setSize(M,x);for(let S=0;S<p.length;S++){let b=p[S];b.setSize&&b.setSize(M,x)}},this.setEffects=function(M){p=M,w=p.length>0&&p[0].isRenderPass===!0;let x=a.width,S=a.height;for(let b=0;b<p.length;b++){let A=p[b];A.setSize&&A.setSize(x,S)}},this.begin=function(M,x){if(m||M.toneMapping===Yn&&p.length===0)return!1;if(g=x,x!==null){let S=x.width,b=x.height;(a.width!==S||a.height!==b)&&this.setSize(S,b)}return w===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=Yn,!0},this.hasRenderPass=function(){return w},this.end=function(M,x){M.toneMapping=v,m=!0;let S=a,b=o;for(let A=0;A<p.length;A++){let _=p[A];if(_.enabled!==!1&&(_.render(M,b,S,x),_.needsSwap!==!1)){let E=S;S=b,b=E}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},fe.getTransfer(d)===xe&&(l.defines.SRGB_TRANSFER="");let A=V_[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(g),M.render(h,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Ap=new gn,Mu=new Ri(1,1),Rp=new Zr,Cp=new Yo,Ip=new sa,cp=[],lp=[],hp=new Float32Array(16),up=new Float32Array(9),dp=new Float32Array(4);function br(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=cp[i];if(r===void 0&&(r=new Float32Array(i),cp[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _l(s,t){let e=lp[t];e===void 0&&(e=new Int32Array(t),lp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function W_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function X_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function $_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function Y_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;dp.set(n),s.uniformMatrix2fv(this.addr,!1,dp),Je(e,n)}}function Z_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;up.set(n),s.uniformMatrix3fv(this.addr,!1,up),Je(e,n)}}function J_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;hp.set(n),s.uniformMatrix4fv(this.addr,!1,hp),Je(e,n)}}function K_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function Q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function ty(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function ey(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function iy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function ry(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mu.compareFunction=e.isReversedDepthBuffer()?ul:hl,r=Mu):r=Ap,e.setTexture2D(t||r,i)}function ay(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cp,i)}function oy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ip,i)}function cy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rp,i)}function ly(s){switch(s){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return $_;case 35674:return Y_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return K_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return cy}}function hy(s,t){s.uniform1fv(this.addr,t)}function uy(s,t){let e=br(t,this.size,2);s.uniform2fv(this.addr,e)}function dy(s,t){let e=br(t,this.size,3);s.uniform3fv(this.addr,e)}function fy(s,t){let e=br(t,this.size,4);s.uniform4fv(this.addr,e)}function py(s,t){let e=br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function my(s,t){let e=br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gy(s,t){let e=br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function xy(s,t){s.uniform1iv(this.addr,t)}function _y(s,t){s.uniform2iv(this.addr,t)}function yy(s,t){s.uniform3iv(this.addr,t)}function vy(s,t){s.uniform4iv(this.addr,t)}function My(s,t){s.uniform1uiv(this.addr,t)}function by(s,t){s.uniform2uiv(this.addr,t)}function Sy(s,t){s.uniform3uiv(this.addr,t)}function wy(s,t){s.uniform4uiv(this.addr,t)}function Ey(s,t,e){let n=this.cache,i=t.length,r=_l(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Mu:a=Ap;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Ty(s,t,e){let n=this.cache,i=t.length,r=_l(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Cp,r[a])}function Ay(s,t,e){let n=this.cache,i=t.length,r=_l(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ip,r[a])}function Ry(s,t,e){let n=this.cache,i=t.length,r=_l(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Rp,r[a])}function Cy(s){switch(s){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return yy;case 35669:case 35673:return vy;case 5125:return My;case 36294:return by;case 36295:return Sy;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}var bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ly(e.type)}},Su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}},wu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},yu=/(\w+)(\])?(\[|\.)?/g;function fp(s,t){s.seq.push(t),s.map[t.id]=t}function Iy(s,t,e){let n=s.name,i=n.length;for(yu.lastIndex=0;;){let r=yu.exec(n),a=yu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){fp(e,l===void 0?new bu(o,s,t):new Su(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new wu(o),fp(e,u)),e=u}}}var Mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Iy(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function pp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Py=37297,Ly=0;function Dy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mp=new Kt;function Ny(s){fe._getMatrix(mp,fe.workingColorSpace,s);let t=`mat3( ${mp.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(s)){case qr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dy(s.getShaderSource(t),o)}else return r}function Uy(s,t){let e=Ny(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Fy={[Gh]:"Linear",[Wh]:"Reinhard",[Xh]:"Cineon",[qh]:"ACESFilmic",[Yh]:"AgX",[Zh]:"Neutral",[$h]:"Custom"};function Oy(s,t){let e=Fy[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fl=new P;function ky(){fe.getLuminanceCoefficients(fl);let s=fl.x.toFixed(4),t=fl.y.toFixed(4),e=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function zy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Oa(s){return s!==""}function xp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _p(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(s){return s.replace(Vy,Wy)}var Gy=new Map;function Wy(s,t){let e=ae[t];if(e===void 0){let n=Gy.get(t);if(n!==void 0)e=ae[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eu(e)}var Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yp(s){return s.replace(Xy,qy)}function qy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vp(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var $y={[wa]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Yy(s){return $y[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zy={[Ji]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function Jy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Zy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ky={[bs]:"ENVMAP_MODE_REFRACTION"};function jy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ky[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qy={[Ea]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function tv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Qy[s.combine]||"ENVMAP_BLENDING_NONE"}function ev(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Yy(e),l=Jy(e),h=jy(e),u=tv(e),d=ev(e),f=By(e),m=zy(r),v=i.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Oa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Oa).join(`
`),p.length>0&&(p+=`
`)):(g=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),p=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Uy("linearToOutputTexel",e.outputColorSpace),ky(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oa).join(`
`)),a=Eu(a),a=xp(a,e),a=_p(a,e),o=Eu(o),o=xp(o,e),o=_p(o,e),a=yp(a),o=yp(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=w+g+a,x=w+p+o,S=pp(i,i.VERTEX_SHADER,M),b=pp(i,i.FRAGMENT_SHADER,x);i.attachShader(v,S),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(v)||"",V=i.getShaderInfoLog(S)||"",q=i.getShaderInfoLog(b)||"",O=N.trim(),X=V.trim(),G=q.trim(),j=!0,tt=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,S,b);else{let ht=gp(i,S,"vertex"),lt=gp(i,b,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ht+`
`+lt)}else O!==""?Gt("WebGLProgram: Program Info Log:",O):(X===""||G==="")&&(tt=!1);tt&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:X,prefix:g},fragmentShader:{log:G,prefix:p}})}i.deleteShader(S),i.deleteShader(b),_=new Mr(i,v),E=Hy(i,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(v,Py)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ly++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var iv=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Au(t),e.set(t,n)),n}},Au=class{constructor(t){this.id=iv++,this.code=t,this.usedTimes=0}};function sv(s){return s===Qi||s===La||s===Da}function rv(s,t,e,n,i,r){let a=new rr,o=new Tu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,E,I,L,N,V){let q=L.fog,O=N.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||X,G),tt=j&&j.mapping===Ta?j.image.height:null,ht=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,St=lt!==void 0?lt.length:0,ie=0;O.morphAttributes.position!==void 0&&(ie=1),O.morphAttributes.normal!==void 0&&(ie=2),O.morphAttributes.color!==void 0&&(ie=3);let me,Ut,Y,at;if(ht){let Lt=di[ht];me=Lt.vertexShader,Ut=Lt.fragmentShader}else{me=_.vertexShader,Ut=_.fragmentShader;let Lt=o.getVertexShaderStage(_),Ne=o.getFragmentShaderStage(_);o.update(_,Lt,Ne),Y=Lt.id,at=Ne.id}let nt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Ft=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,jt=!!_.map,qt=!!_.matcap,Q=!!j,st=!!_.aoMap,it=!!_.lightMap,dt=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,Ht=!!_.displacementMap,Dt=!!_.emissiveMap,Xt=!!_.metalnessMap,Jt=!!_.roughnessMap,D=_.anisotropy>0,ge=_.clearcoat>0,oe=_.dispersion>0,C=_.iridescence>0,y=_.sheen>0,k=_.transmission>0,H=D&&!!_.anisotropyMap,$=ge&&!!_.clearcoatMap,ct=ge&&!!_.clearcoatNormalMap,ut=ge&&!!_.clearcoatRoughnessMap,Z=C&&!!_.iridescenceMap,K=C&&!!_.iridescenceThicknessMap,mt=y&&!!_.sheenColorMap,kt=y&&!!_.sheenRoughnessMap,_t=!!_.specularMap,gt=!!_.specularColorMap,Vt=!!_.specularIntensityMap,$t=k&&!!_.transmissionMap,ee=k&&!!_.thicknessMap,U=!!_.gradientMap,ft=!!_.alphaMap,J=_.alphaTest>0,xt=!!_.alphaHash,bt=!!_.extensions,et=Yn;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(et=s.toneMapping);let Ot={shaderID:ht,shaderType:_.type,shaderName:_.name,vertexShader:me,fragmentShader:Ut,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&N.instanceColor!==null,instancingMorph:Ft&&N.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:qt,envMap:Q,envMapMode:Q&&j.mapping,envMapCubeUVHeight:tt,aoMap:st,lightMap:it,bumpMap:dt,normalMap:pt,displacementMap:Ht,emissiveMap:Dt,normalMapObjectSpace:pt&&_.normalMapType===kf,normalMapTangentSpace:pt&&_.normalMapType===Na,packedNormalMap:pt&&_.normalMapType===Na&&sv(_.normalMap.format),metalnessMap:Xt,roughnessMap:Jt,anisotropy:D,anisotropyMap:H,clearcoat:ge,clearcoatMap:$,clearcoatNormalMap:ct,clearcoatRoughnessMap:ut,dispersion:oe,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:K,sheen:y,sheenColorMap:mt,sheenRoughnessMap:kt,specularMap:_t,specularColorMap:gt,specularIntensityMap:Vt,transmission:k,transmissionMap:$t,thicknessMap:ee,gradientMap:U,opaque:_.transparent===!1&&_.blending===_s&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:xt,combine:_.combine,mapUv:jt&&m(_.map.channel),aoMapUv:st&&m(_.aoMap.channel),lightMapUv:it&&m(_.lightMap.channel),bumpMapUv:dt&&m(_.bumpMap.channel),normalMapUv:pt&&m(_.normalMap.channel),displacementMapUv:Ht&&m(_.displacementMap.channel),emissiveMapUv:Dt&&m(_.emissiveMap.channel),metalnessMapUv:Xt&&m(_.metalnessMap.channel),roughnessMapUv:Jt&&m(_.roughnessMap.channel),anisotropyMapUv:H&&m(_.anisotropyMap.channel),clearcoatMapUv:$&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(_.sheenRoughnessMap.channel),specularMapUv:_t&&m(_.specularMap.channel),specularColorMapUv:gt&&m(_.specularColorMap.channel),specularIntensityMapUv:Vt&&m(_.specularIntensityMap.channel),transmissionMapUv:$t&&m(_.transmissionMap.channel),thicknessMapUv:ee&&m(_.thicknessMap.channel),alphaMapUv:ft&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pt||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(jt||ft),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ci,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:bt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(E,_),w(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let E=f[_.type],I;if(E){let L=di[E];I=ep.clone(L.uniforms)}else I=_.uniforms;return I}function x(_,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new nv(s,E,_,i),l.push(I),h.set(E,I)),I}function S(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:A}}function av(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ov(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Mp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function bp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let w=s[t];return w===void 0?(w={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},s[t]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=m,w.materialVariant=a(d),w.groupOrder=v,w.renderOrder=d.renderOrder,w.z=g,w.group=p),t++,w}function c(d,f,m,v,g,p){let w=o(d,f,m,v,g,p);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function l(d,f,m,v,g,p){let w=o(d,f,m,v,g,p);m.transmission>0?n.unshift(w):m.transparent===!0?i.unshift(w):e.unshift(w)}function h(d,f,m){e.length>1&&e.sort(d||ov),n.length>1&&n.sort(f||Mp),i.length>1&&i.sort(f||Mp),m&&(e.reverse(),n.reverse(),i.reverse())}function u(){for(let d=t,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function cv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new bp,s.set(n,[a])):i>=r.length?(a=new bp,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function lv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Pt};break;case"SpotLight":e={position:new P,direction:new P,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function hv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var uv=0;function dv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fv(s){let t=new lv,e=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,r=new Yt,a=new Yt;function o(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,M=0,x=0,S=0,b=0,A=0;l.sort(dv);for(let E=0,I=l.length;E<I;E++){let L=l[E],N=L.color,V=L.intensity,q=L.distance,O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Qi?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=N.r*V,u+=N.g*V,d+=N.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],V);A++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,j=e.get(L);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=X,f++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(V),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;let G=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,G.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[v]=G.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=O,x++}v++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(N).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=X,g++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let G=L.shadow,j=e.get(L);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=L.shadow.matrix,M++}n.point[m]=X,m++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=X,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==m||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==w||_.numPointShadows!==M||_.numSpotShadows!==x||_.numSpotMaps!==S||_.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+S-b,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,_.directionalLength=f,_.pointLength=m,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=w,_.numPointShadows=M,_.numSpotShadows=x,_.numSpotMaps=S,_.numLightProbes=A,n.version=uv++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let M=l[p];if(M.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(M.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Sp(s){let t=new fv(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function pv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Sp(s),t.set(i,[o])):r>=a.length?(o=new Sp(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],_v=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],wp=new Yt,Fa=new P,vu=new P;function yv(s,t,e){let n=new ur,i=new ot,r=new ot,a=new Le,o=new oc,c=new cc,l={},h=e.maxTextureSize,u={[Ei]:_n,[_n]:Ei,[ci]:ci},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ce;m.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _e(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(b,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Sc&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wa);let E=s.getRenderTarget(),I=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(li),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=p!==this.type;V&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=b.length;q<O;q++){let X=b[q],G=X.shadow;if(G===void 0){Gt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let j=G.getFrameExtents();i.multiply(j),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,G.mapSize.y=r.y));let tt=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=tt,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===xr){if(X.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Rn(i.x,i.y,{format:Qi,type:hi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Ri(i.x,i.y,Hn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=si,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en}else X.isPointLight?(G.map=new ml(i.x),G.map.depthTexture=new jo(i.x,Zn)):(G.map=new Rn(i.x,i.y),G.map.depthTexture=new Ri(i.x,i.y,Zn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=si,this.type===wa?(G.map.depthTexture.compareFunction=tt?ul:hl,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en);G.camera.updateProjectionMatrix()}let ht=G.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ht;lt++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,lt),s.clear();else{lt===0&&(s.setRenderTarget(G.map),s.clear());let St=G.getViewport(lt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),N.viewport(a)}if(X.isPointLight){let St=G.camera,ie=G.matrix,me=X.distance||St.far;me!==St.far&&(St.far=me,St.updateProjectionMatrix()),Fa.setFromMatrixPosition(X.matrixWorld),St.position.copy(Fa),vu.copy(St.position),vu.add(xv[lt]),St.up.copy(_v[lt]),St.lookAt(vu),St.updateMatrixWorld(),ie.makeTranslation(-Fa.x,-Fa.y,-Fa.z),wp.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),G._frustum.setFromProjectionMatrix(wp,St.coordinateSystem,St.reversedDepth)}else G.updateMatrices(X);n=G.getFrustum(),x(A,_,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===xr&&w(G,_),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,I,L)};function w(b,A){let _=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(i.x,i.y,{format:Qi,type:hi})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,_,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,_,f,v,null)}function M(b,A,_,E){let I=null,L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)I=L;else if(I=_.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=I.uuid,V=A.uuid,q=l[N];q===void 0&&(q={},l[N]=q);let O=q[V];O===void 0&&(O=I.clone(),q[V]=O,A.addEventListener("dispose",S)),I=O}if(I.visible=A.visible,I.wireframe=A.wireframe,E===xr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:u[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=s.properties.get(I);N.light=_}return I}function x(b,A,_,E,I){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===xr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let V=t.update(b),q=b.material;if(Array.isArray(q)){let O=V.groups;for(let X=0,G=O.length;X<G;X++){let j=O[X],tt=q[j.materialIndex];if(tt&&tt.visible){let ht=M(b,tt,E,I);b.onBeforeShadow(s,b,A,_,V,ht,j),s.renderBufferDirect(_,null,V,ht,b,j),b.onAfterShadow(s,b,A,_,V,ht,j)}}}else if(q.visible){let O=M(b,q,E,I);b.onBeforeShadow(s,b,A,_,V,O,null),s.renderBufferDirect(_,null,V,O,b,null),b.onAfterShadow(s,b,A,_,V,O,null)}}let N=b.children;for(let V=0,q=N.length;V<q;V++)x(N[V],A,_,E,I)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in l){let E=l[_],I=b.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function vv(s,t){function e(){let U=!1,ft=new Le,J=null,xt=new Le(0,0,0,0);return{setMask:function(bt){J!==bt&&!U&&(s.colorMask(bt,bt,bt,bt),J=bt)},setLocked:function(bt){U=bt},setClear:function(bt,et,Ot,Lt,Ne){Ne===!0&&(bt*=Lt,et*=Lt,Ot*=Lt),ft.set(bt,et,Ot,Lt),xt.equals(ft)===!1&&(s.clearColor(bt,et,Ot,Lt),xt.copy(ft))},reset:function(){U=!1,J=null,xt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,J=null,xt=null,bt=null;return{setReversed:function(et){if(ft!==et){let Ot=t.get("EXT_clip_control");et?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),ft=et;let Lt=bt;bt=null,this.setClear(Lt)}},getReversed:function(){return ft},setTest:function(et){et?nt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(et){J!==et&&!U&&(s.depthMask(et),J=et)},setFunc:function(et){if(ft&&(et=Yf[et]),xt!==et){switch(et){case Uo:s.depthFunc(s.NEVER);break;case Fo:s.depthFunc(s.ALWAYS);break;case Oo:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case ko:s.depthFunc(s.EQUAL);break;case Bo:s.depthFunc(s.GEQUAL);break;case zo:s.depthFunc(s.GREATER);break;case Ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=et}},setLocked:function(et){U=et},setClear:function(et){bt!==et&&(bt=et,ft&&(et=1-et),s.clearDepth(et))},reset:function(){U=!1,J=null,xt=null,bt=null,ft=!1}}}function i(){let U=!1,ft=null,J=null,xt=null,bt=null,et=null,Ot=null,Lt=null,Ne=null;return{setTest:function(Te){U||(Te?nt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Te){ft!==Te&&!U&&(s.stencilMask(Te),ft=Te)},setFunc:function(Te,Kn,jn){(J!==Te||xt!==Kn||bt!==jn)&&(s.stencilFunc(Te,Kn,jn),J=Te,xt=Kn,bt=jn)},setOp:function(Te,Kn,jn){(et!==Te||Ot!==Kn||Lt!==jn)&&(s.stencilOp(Te,Kn,jn),et=Te,Ot=Kn,Lt=jn)},setLocked:function(Te){U=Te},setClear:function(Te){Ne!==Te&&(s.clearStencil(Te),Ne=Te)},reset:function(){U=!1,ft=null,J=null,xt=null,bt=null,et=null,Ot=null,Lt=null,Ne=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,M=null,x=null,S=null,b=null,A=null,_=new Pt(0,0,0),E=0,I=!1,L=null,N=null,V=null,q=null,O=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),G=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),G=j>=2);let ht=null,lt={},St=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),me=new Le().fromArray(St),Ut=new Le().fromArray(ie);function Y(U,ft,J,xt){let bt=new Uint8Array(4),et=s.createTexture();s.bindTexture(U,et),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<J;Ot++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(ft+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return et}let at={};at[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),a.setFunc(ys),dt(!1),pt(Bh),nt(s.CULL_FACE),st(li);function nt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Et(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ft(U,ft){return d[U]!==ft?(s.bindFramebuffer(U,ft),d[U]=ft,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ft),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function wt(U,ft){let J=m,xt=!1;if(U){J=f.get(ft),J===void 0&&(J=[],f.set(ft,J));let bt=U.textures;if(J.length!==bt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let et=0,Ot=bt.length;et<Ot;et++)J[et]=s.COLOR_ATTACHMENT0+et;J.length=bt.length,xt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,xt=!0);xt&&s.drawBuffers(J)}function jt(U){return v!==U?(s.useProgram(U),v=U,!0):!1}let qt={[qi]:s.FUNC_ADD,[xf]:s.FUNC_SUBTRACT,[_f]:s.FUNC_REVERSE_SUBTRACT};qt[yf]=s.MIN,qt[vf]=s.MAX;let Q={[Mf]:s.ZERO,[bf]:s.ONE,[Sf]:s.SRC_COLOR,[Do]:s.SRC_ALPHA,[Cf]:s.SRC_ALPHA_SATURATE,[Af]:s.DST_COLOR,[Ef]:s.DST_ALPHA,[wf]:s.ONE_MINUS_SRC_COLOR,[No]:s.ONE_MINUS_SRC_ALPHA,[Rf]:s.ONE_MINUS_DST_COLOR,[Tf]:s.ONE_MINUS_DST_ALPHA,[If]:s.CONSTANT_COLOR,[Pf]:s.ONE_MINUS_CONSTANT_COLOR,[Lf]:s.CONSTANT_ALPHA,[Df]:s.ONE_MINUS_CONSTANT_ALPHA};function st(U,ft,J,xt,bt,et,Ot,Lt,Ne,Te){if(U===li){g===!0&&(Et(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),U!==gf){if(U!==p||Te!==I){if((w!==qi||S!==qi)&&(s.blendEquation(s.FUNC_ADD),w=qi,S=qi),Te)switch(U){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zh:s.blendFunc(s.ONE,s.ONE);break;case Hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",U);break}else switch(U){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hh:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",U);break}M=null,x=null,b=null,A=null,_.set(0,0,0),E=0,p=U,I=Te}return}bt=bt||ft,et=et||J,Ot=Ot||xt,(ft!==w||bt!==S)&&(s.blendEquationSeparate(qt[ft],qt[bt]),w=ft,S=bt),(J!==M||xt!==x||et!==b||Ot!==A)&&(s.blendFuncSeparate(Q[J],Q[xt],Q[et],Q[Ot]),M=J,x=xt,b=et,A=Ot),(Lt.equals(_)===!1||Ne!==E)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Ne),_.copy(Lt),E=Ne),p=U,I=!1}function it(U,ft){U.side===ci?Et(s.CULL_FACE):nt(s.CULL_FACE);let J=U.side===_n;ft&&(J=!J),dt(J),U.blending===_s&&U.transparent===!1?st(li):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let xt=U.stencilWrite;o.setTest(xt),xt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function pt(U){U!==pf?(nt(s.CULL_FACE),U!==N&&(U===Bh?s.cullFace(s.BACK):U===mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),N=U}function Ht(U){U!==V&&(G&&s.lineWidth(U),V=U)}function Dt(U,ft,J){U?(nt(s.POLYGON_OFFSET_FILL),(q!==ft||O!==J)&&(q=ft,O=J,a.getReversed()&&(ft=-ft),s.polygonOffset(ft,J))):Et(s.POLYGON_OFFSET_FILL)}function Xt(U){U?nt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Jt(U){U===void 0&&(U=s.TEXTURE0+X-1),ht!==U&&(s.activeTexture(U),ht=U)}function D(U,ft,J){J===void 0&&(ht===null?J=s.TEXTURE0+X-1:J=ht);let xt=lt[J];xt===void 0&&(xt={type:void 0,texture:void 0},lt[J]=xt),(xt.type!==U||xt.texture!==ft)&&(ht!==J&&(s.activeTexture(J),ht=J),s.bindTexture(U,ft||at[U]),xt.type=U,xt.texture=ft)}function ge(){let U=lt[ht];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function y(){try{s.texSubImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function k(){try{s.texSubImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function ct(){try{s.texStorage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function ut(){try{s.texStorage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function Z(){try{s.texImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function K(){try{s.texImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function mt(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function kt(U,ft){u[U]!==ft&&(s.pixelStorei(U,ft),u[U]=ft)}function _t(U){me.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function gt(U){Ut.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ut.copy(U))}function Vt(U,ft){let J=l.get(ft);J===void 0&&(J=new WeakMap,l.set(ft,J));let xt=J.get(U);xt===void 0&&(xt=s.getUniformBlockIndex(ft,U.name),J.set(U,xt))}function $t(U,ft){let xt=l.get(ft).get(U);c.get(ft)!==xt&&(s.uniformBlockBinding(ft,xt,U.__bindingPointIndex),c.set(ft,xt))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},ht=null,lt={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,M=null,x=null,S=null,b=null,A=null,_=new Pt(0,0,0),E=0,I=!1,L=null,N=null,V=null,q=null,O=null,me.set(0,0,s.canvas.width,s.canvas.height),Ut.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Et,bindFramebuffer:Ft,drawBuffers:wt,useProgram:jt,setBlending:st,setMaterial:it,setFlipSided:dt,setCullFace:pt,setLineWidth:Ht,setPolygonOffset:Dt,setScissorTest:Xt,activeTexture:Jt,bindTexture:D,unbindTexture:ge,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:Z,texImage3D:K,pixelStorei:kt,getParameter:mt,updateUBOMapping:Vt,uniformBlockBinding:$t,texStorage2D:ct,texStorage3D:ut,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:_t,viewport:gt,reset:ee}}function Mv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return m?new OffscreenCanvas(C,y):$r("canvas")}function g(C,y,k){let H=1,$=oe(C);if(($.width>k||$.height>k)&&(H=k/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(H*$.width),ut=Math.floor(H*$.height);d===void 0&&(d=v(ct,ut));let Z=y?v(ct,ut):d;return Z.width=ct,Z.height=ut,Z.getContext("2d").drawImage(C,0,0,ct,ut),Gt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ut+")."),Z}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,y,k,H,$,ct=!1){if(C!==null){if(s[C]!==void 0)return s[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;H&&(ut=t.get("EXT_texture_norm16"),ut||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),k===s.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),y===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),k===s.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),k===s.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),y===s.RGBA){let K=ct?qr:fe.getTransfer($);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=K===xe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),k===s.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(C,y){let k;return C?y===null||y===Zn||y===yr?k=s.DEPTH24_STENCIL8:y===Hn?k=s.DEPTH32F_STENCIL8:y===_r&&(k=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zn||y===yr?k=s.DEPTH_COMPONENT24:y===Hn?k=s.DEPTH_COMPONENT32F:y===_r&&(k=s.DEPTH_COMPONENT16),k}function b(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),L(y)}function E(C){let y=n.get(C);if(y.__webglInit===void 0)return;let k=C.source,H=f.get(k);if(H){let $=H[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(C),Object.keys(H).length===0&&f.delete(k)}n.remove(C)}function I(C){let y=n.get(C);s.deleteTexture(y.__webglTexture);let k=C.source,H=f.get(k);delete H[y.__cacheKey],a.memory.textures--}function L(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let $=0;$<y.__webglFramebuffer[H].length;$++)s.deleteFramebuffer(y.__webglFramebuffer[H][$]);else s.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)s.deleteFramebuffer(y.__webglFramebuffer[H]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=C.textures;for(let H=0,$=k.length;H<$;H++){let ct=n.get(k[H]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(k[H])}n.remove(C)}let N=0;function V(){N=0}function q(){return N}function O(C){N=C}function X(){let C=N;return C>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function G(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function j(C,y){let k=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let H=C.image;if(H===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function tt(C,y){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Et(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function ht(C,y){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Et(k,C,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function lt(C,y){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ft(k,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}let St={[er]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[Vo]:s.MIRRORED_REPEAT},ie={[en]:s.NEAREST,[Ff]:s.NEAREST_MIPMAP_NEAREST,[Aa]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Tc]:s.LINEAR_MIPMAP_NEAREST,[Ki]:s.LINEAR_MIPMAP_LINEAR},me={[Bf]:s.NEVER,[Wf]:s.ALWAYS,[zf]:s.LESS,[hl]:s.LEQUAL,[Hf]:s.EQUAL,[ul]:s.GEQUAL,[Vf]:s.GREATER,[Gf]:s.NOTEQUAL};function Ut(C,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Tc||y.magFilter===Aa||y.magFilter===Ki||y.minFilter===rn||y.minFilter===Tc||y.minFilter===Aa||y.minFilter===Ki)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,St[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,St[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,St[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ie[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==Aa&&y.minFilter!==Ki||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Y(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let H=y.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let ct=G(y);if(ct!==C.__cacheKey){$[ct]===void 0&&($[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ct].usedTimes++;let ut=$[C.__cacheKey];ut!==void 0&&($[C.__cacheKey].usedTimes--,ut.usedTimes===0&&I(y)),C.__cacheKey=ct,C.__webglTexture=$[ct].texture}return k}function at(C,y,k){return Math.floor(Math.floor(C/k)/y)}function nt(C,y,k,H){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,H,y.data);else{ct.sort((kt,_t)=>kt.start-_t.start);let ut=0;for(let kt=1;kt<ct.length;kt++){let _t=ct[ut],gt=ct[kt],Vt=_t.start+_t.count,$t=at(gt.start,y.width,4),ee=at(_t.start,y.width,4);gt.start<=Vt+1&&$t===ee&&at(gt.start+gt.count-1,y.width,4)===$t?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++ut,ct[ut]=gt)}ct.length=ut+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let kt=0,_t=ct.length;kt<_t;kt++){let gt=ct[kt],Vt=Math.floor(gt.start/4),$t=Math.ceil(gt.count/4),ee=Vt%y.width,U=Math.floor(Vt/y.width),ft=$t,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,ee,U,ft,J,k,H,y.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function Et(C,y,k){let H=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=s.TEXTURE_3D);let $=Y(C,y),ct=y.source;e.bindTexture(H,C.__webglTexture,s.TEXTURE0+k);let ut=n.get(ct);if(ct.version!==ut.__version||$===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let J=fe.getPrimaries(fe.workingColorSpace),xt=y.colorSpace===Ii?null:fe.getPrimaries(y.colorSpace),bt=y.colorSpace===Ii||J===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let K=g(y.image,!1,i.maxTextureSize);K=ge(y,K);let mt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type),_t=x(y.internalFormat,mt,kt,y.normalized,y.colorSpace,y.isVideoTexture);Ut(H,y);let gt,Vt=y.mipmaps,$t=y.isVideoTexture!==!0,ee=ut.__version===void 0||$===!0,U=ct.dataReady,ft=b(y,K);if(y.isDepthTexture)_t=S(y.format===ji,y.type),ee&&($t?e.texStorage2D(s.TEXTURE_2D,1,_t,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,mt,kt,null));else if(y.isDataTexture)if(Vt.length>0){$t&&ee&&e.texStorage2D(s.TEXTURE_2D,ft,_t,Vt[0].width,Vt[0].height);for(let J=0,xt=Vt.length;J<xt;J++)gt=Vt[J],$t?U&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,gt.width,gt.height,mt,kt,gt.data):e.texImage2D(s.TEXTURE_2D,J,_t,gt.width,gt.height,0,mt,kt,gt.data);y.generateMipmaps=!1}else $t?(ee&&e.texStorage2D(s.TEXTURE_2D,ft,_t,K.width,K.height),U&&nt(y,K,mt,kt)):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,mt,kt,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$t&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,_t,Vt[0].width,Vt[0].height,K.depth);for(let J=0,xt=Vt.length;J<xt;J++)if(gt=Vt[J],y.format!==Vn)if(mt!==null)if($t){if(U)if(y.layerUpdates.size>0){let bt=lu(gt.width,gt.height,y.format,y.type);for(let et of y.layerUpdates){let Ot=gt.data.subarray(et*bt/gt.data.BYTES_PER_ELEMENT,(et+1)*bt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,et,gt.width,gt.height,1,mt,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,K.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,_t,gt.width,gt.height,K.depth,0,gt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,K.depth,mt,kt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,_t,gt.width,gt.height,K.depth,0,mt,kt,gt.data)}else{$t&&ee&&e.texStorage2D(s.TEXTURE_2D,ft,_t,Vt[0].width,Vt[0].height);for(let J=0,xt=Vt.length;J<xt;J++)gt=Vt[J],y.format!==Vn?mt!==null?$t?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,_t,gt.width,gt.height,0,gt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?U&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,gt.width,gt.height,mt,kt,gt.data):e.texImage2D(s.TEXTURE_2D,J,_t,gt.width,gt.height,0,mt,kt,gt.data)}else if(y.isDataArrayTexture)if($t){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,_t,K.width,K.height,K.depth),U)if(y.layerUpdates.size>0){let J=lu(K.width,K.height,y.format,y.type);for(let xt of y.layerUpdates){let bt=K.data.subarray(xt*J/K.data.BYTES_PER_ELEMENT,(xt+1)*J/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,K.width,K.height,1,mt,kt,bt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,mt,kt,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,mt,kt,K.data);else if(y.isData3DTexture)$t?(ee&&e.texStorage3D(s.TEXTURE_3D,ft,_t,K.width,K.height,K.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,mt,kt,K.data)):e.texImage3D(s.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,mt,kt,K.data);else if(y.isFramebufferTexture){if(ee)if($t)e.texStorage2D(s.TEXTURE_2D,ft,_t,K.width,K.height);else{let J=K.width,xt=K.height;for(let bt=0;bt<ft;bt++)e.texImage2D(s.TEXTURE_2D,bt,_t,J,xt,0,mt,kt,null),J>>=1,xt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),u.add(y),J.onpaint=xt=>{let bt=xt.changedElements;for(let et of u)bt.includes(et.image)&&(et.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{let bt=s.RGBA,et=s.RGBA,Ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,et,Ot,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Vt.length>0){if($t&&ee){let J=oe(Vt[0]);e.texStorage2D(s.TEXTURE_2D,ft,_t,J.width,J.height)}for(let J=0,xt=Vt.length;J<xt;J++)gt=Vt[J],$t?U&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,mt,kt,gt):e.texImage2D(s.TEXTURE_2D,J,_t,mt,kt,gt);y.generateMipmaps=!1}else if($t){if(ee){let J=oe(K);e.texStorage2D(s.TEXTURE_2D,ft,_t,J.width,J.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,kt,K)}else e.texImage2D(s.TEXTURE_2D,0,_t,mt,kt,K);p(y)&&w(H),ut.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ft(C,y,k){if(y.image.length!==6)return;let H=Y(C,y),$=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let ct=n.get($);if($.version!==ct.__version||H===!0){e.activeTexture(s.TEXTURE0+k);let ut=fe.getPrimaries(fe.workingColorSpace),Z=y.colorSpace===Ii?null:fe.getPrimaries(y.colorSpace),K=y.colorSpace===Ii||ut===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let mt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!mt&&!kt?_t[et]=g(y.image[et],!0,i.maxCubemapSize):_t[et]=kt?y.image[et].image:y.image[et],_t[et]=ge(y,_t[et]);let gt=_t[0],Vt=r.convert(y.format,y.colorSpace),$t=r.convert(y.type),ee=x(y.internalFormat,Vt,$t,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ft=ct.__version===void 0||H===!0,J=$.dataReady,xt=b(y,gt);Ut(s.TEXTURE_CUBE_MAP,y);let bt;if(mt){U&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,ee,gt.width,gt.height);for(let et=0;et<6;et++){bt=_t[et].mipmaps;for(let Ot=0;Ot<bt.length;Ot++){let Lt=bt[Ot];y.format!==Vn?Vt!==null?U?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,0,0,Lt.width,Lt.height,Vt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,ee,Lt.width,Lt.height,0,Lt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,0,0,Lt.width,Lt.height,Vt,$t,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,ee,Lt.width,Lt.height,0,Vt,$t,Lt.data)}}}else{if(bt=y.mipmaps,U&&ft){bt.length>0&&xt++;let et=oe(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,ee,et.width,et.height)}for(let et=0;et<6;et++)if(kt){U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Vt,$t,_t[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ee,_t[et].width,_t[et].height,0,Vt,$t,_t[et].data);for(let Ot=0;Ot<bt.length;Ot++){let Ne=bt[Ot].image[et].image;U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,0,0,Ne.width,Ne.height,Vt,$t,Ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,ee,Ne.width,Ne.height,0,Vt,$t,Ne.data)}}else{U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Vt,$t,_t[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ee,Vt,$t,_t[et]);for(let Ot=0;Ot<bt.length;Ot++){let Lt=bt[Ot];U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,0,0,Vt,$t,Lt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,ee,Vt,$t,Lt.image[et])}}}p(y)&&w(s.TEXTURE_CUBE_MAP),ct.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function wt(C,y,k,H,$,ct){let ut=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),K=x(k.internalFormat,ut,Z,k.normalized,k.colorSpace),mt=n.get(y),kt=n.get(k);if(kt.__renderTarget=y,!mt.__hasExternalTextures){let _t=Math.max(1,y.width>>ct),gt=Math.max(1,y.height>>ct);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ct,K,_t,gt,y.depth,0,ut,Z,null):e.texImage2D($,ct,K,_t,gt,0,ut,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Jt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,$,kt.__webglTexture,0,Xt(y)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,$,kt.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(C,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){let H=y.depthTexture,$=H&&H.isDepthTexture?H.type:null,ct=S(y.stencilBuffer,$),ut=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Jt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(y),ct,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(y),ct,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ct,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,C)}else{let H=y.textures;for(let $=0;$<H.length;$++){let ct=H[$],ut=r.convert(ct.format,ct.colorSpace),Z=r.convert(ct.type),K=x(ct.internalFormat,ut,Z,ct.normalized,ct.colorSpace);Jt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(y),K,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(y),K,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,K,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(C,y,k){let H=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,y.depthTexture);let mt=r.convert(y.depthTexture.format),kt=r.convert(y.depthTexture.type),_t;y.depthTexture.format===si?_t=s.DEPTH_COMPONENT24:y.depthTexture.format===ji&&(_t=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,y.width,y.height,0,mt,kt,null)}}else j(y.depthTexture,0);let ct=$.__webglTexture,ut=Xt(y),Z=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,K=y.depthTexture.format===ji?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===si)Jt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,ct,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,ct,0);else if(y.depthTexture.format===ji)Jt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,ct,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(C){let y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=H}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)qt(y.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?qt(y.__webglFramebuffer[0],C,0):qt(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=s.createRenderbuffer(),jt(y.__webglDepthbuffer[H],C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),jt(y.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(C,y,k){let H=n.get(C);y!==void 0&&wt(H.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Q(C)}function it(C){let y=C.texture,k=n.get(C),H=n.get(y);C.addEventListener("dispose",_);let $=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ut=$.length>1;if(ut||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=y.version,a.memory.textures++),ct){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let K=0;K<y.mipmaps.length;K++)k.__webglFramebuffer[Z][K]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let Z=0,K=$.length;Z<K;Z++){let mt=n.get($[Z]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Jt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){let K=$[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let mt=r.convert(K.format,K.colorSpace),kt=r.convert(K.type),_t=x(K.internalFormat,mt,kt,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),gt=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),jt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)wt(k.__webglFramebuffer[Z][K],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else wt(k.__webglFramebuffer[Z],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(y)&&w(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Z=0,K=$.length;Z<K;Z++){let mt=$[Z],kt=n.get(mt),_t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,kt.__webglTexture),Ut(_t,mt),wt(k.__webglFramebuffer,C,mt,s.COLOR_ATTACHMENT0+Z,_t,0),p(mt)&&w(_t)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),Ut(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)wt(k.__webglFramebuffer[K],C,y,s.COLOR_ATTACHMENT0,Z,K);else wt(k.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,Z,0);p(y)&&w(Z),e.unbindTexture()}C.depthBuffer&&Q(C)}function dt(C){let y=C.textures;for(let k=0,H=y.length;k<H;k++){let $=y[k];if(p($)){let ct=M(C),ut=n.get($).__webglTexture;e.bindTexture(ct,ut),w(ct),e.unbindTexture()}}}let pt=[],Ht=[];function Dt(C){if(C.samples>0){if(Jt(C)===!1){let y=C.textures,k=C.width,H=C.height,$=s.COLOR_BUFFER_BIT,ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(C),Z=y.length>1;if(Z)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let K=C.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let kt=n.get(y[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,k,H,0,0,k,H,$,s.NEAREST),c===!0&&(pt.length=0,Ht.length=0,pt.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pt.push(ct),Ht.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let kt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Xt(C){return Math.min(i.maxSamples,C.samples)}function Jt(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ge(C,y){let k=C.colorSpace,H=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Xr&&k!==Ii&&(fe.getTransfer(k)===xe?(H!==Vn||$!==bn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",k)),y}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=ht,this.setTextureCube=lt,this.rebindTextures=st,this.setupRenderTarget=it,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bv(s,t){function e(n,i=Ii){let r,a=fe.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===Rc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return s.BYTE;if(n===jh)return s.SHORT;if(n===_r)return s.UNSIGNED_SHORT;if(n===Ac)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===Hn)return s.FLOAT;if(n===hi)return s.HALF_FLOAT;if(n===eu)return s.ALPHA;if(n===nu)return s.RGB;if(n===Vn)return s.RGBA;if(n===si)return s.DEPTH_COMPONENT;if(n===ji)return s.DEPTH_STENCIL;if(n===Ic)return s.RED;if(n===Pc)return s.RED_INTEGER;if(n===Qi)return s.RG;if(n===Lc)return s.RG_INTEGER;if(n===Dc)return s.RGBA_INTEGER;if(n===Ra||n===Ca||n===Ia||n===Pa)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nc||n===Uc||n===Fc||n===Oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Bc||n===zc||n===Hc||n===Vc||n===La||n===Gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kc||n===Bc)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hc)return r.COMPRESSED_R11_EAC;if(n===Vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===La)return r.COMPRESSED_RG11_EAC;if(n===Gc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===Xc||n===qc||n===$c||n===Yc||n===Zc||n===Jc||n===Kc||n===jc||n===Qc||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===cl||n===Da||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:Sv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends ri{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new Ru,p={},w=e.getContextAttributes(),M=null,x=null,S=[],b=[],A=new ot,_=null,E=new hn;E.viewport=new Le;let I=new hn;I.viewport=new Le;let L=[E,I],N=new vc,V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=S[Y];return at===void 0&&(at=new ar,S[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=S[Y];return at===void 0&&(at=new ar,S[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=S[Y];return at===void 0&&(at=new ar,S[Y]=at),at.getHandSpace()};function O(Y){let at=b.indexOf(Y.inputSource);if(at===-1)return;let nt=S[at];nt!==void 0&&(nt.update(Y.inputSource,Y.frame,l||a),nt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",G);for(let Y=0;Y<S.length;Y++){let at=b[Y];at!==null&&(b[Y]=null,S[Y].disconnect(at))}V=null,q=null,g.reset();for(let Y in p)delete p[Y];t.setRenderTarget(M),f=null,d=null,u=null,i=null,x=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",X),i.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Et=null,Ft=null;w.depth&&(Ft=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=w.stencil?ji:si,Et=w.stencil?yr:Zn);let wt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(wt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Rn(d.textureWidth,d.textureHeight,{format:Vn,type:bn,depthTexture:new Ri(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let nt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Y){for(let at=0;at<Y.removed.length;at++){let nt=Y.removed[at],Et=b.indexOf(nt);Et>=0&&(b[Et]=null,S[Et].disconnect(nt))}for(let at=0;at<Y.added.length;at++){let nt=Y.added[at],Et=b.indexOf(nt);if(Et===-1){for(let wt=0;wt<S.length;wt++)if(wt>=b.length){b.push(nt),Et=wt;break}else if(b[wt]===null){b[wt]=nt,Et=wt;break}if(Et===-1)break}let Ft=S[Et];Ft&&Ft.connect(nt)}}let j=new P,tt=new P;function ht(Y,at,nt){j.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);let Et=j.distanceTo(tt),Ft=at.projectionMatrix.elements,wt=nt.projectionMatrix.elements,jt=Ft[14]/(Ft[10]-1),qt=Ft[14]/(Ft[10]+1),Q=(Ft[9]+1)/Ft[5],st=(Ft[9]-1)/Ft[5],it=(Ft[8]-1)/Ft[0],dt=(wt[8]+1)/wt[0],pt=jt*it,Ht=jt*dt,Dt=Et/(-it+dt),Xt=Dt*-it;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xt),Y.translateZ(Dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ft[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Jt=jt+Dt,D=qt+Dt,ge=pt-Xt,oe=Ht+(Et-Xt),C=Q*qt/D*Jt,y=st*qt/D*Jt;Y.projectionMatrix.makePerspective(ge,oe,C,y,Jt,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function lt(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let at=Y.near,nt=Y.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),N.near=I.near=E.near=at,N.far=I.far=E.far=nt,(V!==N.near||q!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,q=N.far),N.layers.mask=Y.layers.mask|6,E.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let Et=Y.parent,Ft=N.cameras;lt(N,Et);for(let wt=0;wt<Ft.length;wt++)lt(Ft[wt],Et);Ft.length===2?ht(N,E,I):N.projectionMatrix.copy(E.projectionMatrix),St(Y,N,Et)};function St(Y,at,nt){nt===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(nt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let ie=null;function me(Y,at){if(h=at.getViewerPose(l||a),m=at,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Et=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,Et=!0);for(let qt=0;qt<nt.length;qt++){let Q=nt[qt],st=null;if(f!==null)st=f.getViewport(Q);else{let dt=u.getViewSubImage(d,Q);st=dt.viewport,qt===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let it=L[qt];it===void 0&&(it=new hn,it.layers.enable(qt),it.viewport=new Le,L[qt]=it),it.matrix.fromArray(Q.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Q.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(st.x,st.y,st.width,st.height),qt===0&&(N.matrix.copy(it.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Et===!0&&N.cameras.push(it)}let Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let qt=u.getDepthInformation(nt[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,i.renderState)}if(Ft&&Ft.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let qt=0;qt<nt.length;qt++){let Q=nt[qt].camera;if(Q){let st=p[Q];st||(st=new ra,p[Q]=st);let it=u.getCameraImage(Q);st.sourceTexture=it}}}}for(let nt=0;nt<S.length;nt++){let Et=b[nt],Ft=S[nt];Et!==null&&Ft!==void 0&&Ft.update(Et,at,l||a)}ie&&ie(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let Ut=new Ep;Ut.setAnimationLoop(me),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}},Ev=new Yt,Pp=new Kt;Pp.set(-1,0,0,0,1,0,0,0,1);function Tv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,au(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,w,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,w,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),M=w.envMap,x=w.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function l(x,S){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",w));let A=S.program;n.updateUBOMapping(x,A);let _=t.render.frame;r[x.id]!==_&&(d(x),r[x.id]=_)}function h(x){let S=u();x.__bindingPointIndex=S;let b=s.createBuffer(),A=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let S=i[x.id],b=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,E=b.length;_<E;_++){let I=b[_];if(Array.isArray(I))for(let L=0,N=I.length;L<N;L++)f(I[L],_,L,A);else f(I,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,b,A){if(v(x,S,b,A)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let I=0;for(let L=0;L<E.length;L++){let N=E[L],V=p(N);m(N,x.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function m(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,A){let _=x.value,E=S+"_"+b;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let I=A[E];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(x){let S=x.uniforms,b=0,A=16;for(let E=0,I=S.length;E<I;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let N=0,V=L.length;N<V;N++){let q=L[N],O=Array.isArray(q.value)?q.value:[q.value];for(let X=0,G=O.length;X<G;X++){let j=O[X],tt=p(j),ht=b%A,lt=ht%tt.boundary,St=ht+lt;b+=lt,St!==0&&A-St<tt.storage&&(b+=A-St),q.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=tt.storage}}}let _=b%A;return _>0&&(b+=A-_),x.__size=b,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",x),S}function w(x){let S=x.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function M(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:M}}var Rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Cv(){return ui===null&&(ui=new na(Rv,16,16,Qi,hi),ui.name="DFG_LUT",ui.minFilter=rn,ui.magFilter=rn,ui.wrapS=ii,ui.wrapT=ii,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var gl=class{constructor(t={}){let{canvas:e=Xf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=f,g=new Set([Dc,Lc,Pc]),p=new Set([bn,Zn,_r,yr,Rc,Cc]),w=new Uint32Array(4),M=new Int32Array(4),x=new P,S=null,b=null,A=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,N=null,V=null,q=null,O=null;this._outputColorSpace=$e;let X=0,G=0,j=null,tt=-1,ht=null,lt=new Le,St=new Le,ie=null,me=new Pt(0),Ut=0,Y=e.width,at=e.height,nt=1,Et=null,Ft=null,wt=new Le(0,0,Y,at),jt=new Le(0,0,Y,at),qt=!1,Q=new ur,st=!1,it=!1,dt=new Yt,pt=new P,Ht=new Le,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Jt(){return j===null?nt:1}let D=n;function ge(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bc}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),D===null){let F="webgl2";if(D=ge(F,T),D===null)throw ge(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Wt("WebGLRenderer: "+T.message),T}let oe,C,y,k,H,$,ct,ut,Z,K,mt,kt,_t,gt,Vt,$t,ee,U,ft,J,xt,bt,et;function Ot(){oe=new F_(D),oe.init(),xt=new bv(D,oe),C=new R_(D,oe,t,xt),y=new vv(D,oe),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),V=D.createFramebuffer(),q=D.createFramebuffer(),O=D.createFramebuffer(),k=new B_(D),H=new av,$=new Mv(D,oe,y,H,C,xt,k),ct=new U_(I),ut=new G0(D),bt=new T_(D,ut),Z=new O_(D,ut,k,bt),K=new H_(D,Z,ut,bt,k),U=new z_(D,C,$),Vt=new C_(H),mt=new rv(I,ct,oe,C,bt,Vt),kt=new Tv(I,H),_t=new cv,gt=new pv(oe),ee=new E_(I,ct,y,K,m,c),$t=new yv(I,K,C),et=new Av(D,k,C,y),ft=new A_(D,oe,k),J=new k_(D,oe,k),k.programs=mt.programs,I.capabilities=C,I.extensions=oe,I.properties=H,I.renderLists=_t,I.shadowMap=$t,I.state=y,I.info=k}Ot(),v!==bn&&(E=new G_(v,e.width,e.height,o,i,r));let Lt=new Cu(I,D);this.xr=Lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(Y,at,!1))},this.getSize=function(T){return T.set(Y,at)},this.setSize=function(T,F,W=!0){if(Lt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,at=F,e.width=Math.floor(T*nt),e.height=Math.floor(F*nt),W===!0&&(e.style.width=T+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*nt,at*nt).floor()},this.setDrawingBufferSize=function(T,F,W){Y=T,at=F,nt=W,e.width=Math.floor(T*W),e.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(v===bn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(lt)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,F,W,B){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,F,W,B),y.viewport(lt.copy(wt).multiplyScalar(nt).round())},this.getScissor=function(T){return T.copy(jt)},this.setScissor=function(T,F,W,B){T.isVector4?jt.set(T.x,T.y,T.z,T.w):jt.set(T,F,W,B),y.scissor(St.copy(jt).multiplyScalar(nt).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(T){y.setScissorTest(qt=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){Ft=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,W=!0){let B=0;if(T){let z=!1;if(j!==null){let Mt=j.texture.format;z=g.has(Mt)}if(z){let Mt=j.texture.type,Rt=p.has(Mt),vt=ee.getClearColor(),Nt=ee.getClearAlpha(),Bt=vt.r,ne=vt.g,ce=vt.b;Rt?(w[0]=Bt,w[1]=ne,w[2]=ce,w[3]=Nt,D.clearBufferuiv(D.COLOR,0,w)):(M[0]=Bt,M[1]=ne,M[2]=ce,M[3]=Nt,D.clearBufferiv(D.COLOR,0,M))}else B|=D.COLOR_BUFFER_BIT}F&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),ee.dispose(),_t.dispose(),gt.dispose(),H.dispose(),ct.dispose(),K.dispose(),bt.dispose(),et.dispose(),mt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",$u),Lt.removeEventListener("sessionend",Yu),ss.stop()};function Ne(T){T.preventDefault(),Yr("WebGLRenderer: Context Lost."),L=!0}function Te(){Yr("WebGLRenderer: Context Restored."),L=!1;let T=k.autoReset,F=$t.enabled,W=$t.autoUpdate,B=$t.needsUpdate,z=$t.type;Ot(),k.autoReset=T,$t.enabled=F,$t.autoUpdate=W,$t.needsUpdate=B,$t.type=z}function Kn(T){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function jn(T){let F=T.target;F.removeEventListener("dispose",jn),hm(F)}function hm(T){um(T),H.remove(T)}function um(T){let F=H.get(T).programs;F!==void 0&&(F.forEach(function(W){mt.releaseProgram(W)}),T.isShaderMaterial&&mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,B,z,Mt){F===null&&(F=Dt);let Rt=z.isMesh&&z.matrixWorld.determinantAffine()<0,vt=pm(T,F,W,B,z);y.setMaterial(B,Rt);let Nt=W.index,Bt=1;if(B.wireframe===!0){if(Nt=Z.getWireframeAttribute(W),Nt===void 0)return;Bt=2}let ne=W.drawRange,ce=W.attributes.position,zt=ne.start*Bt,Me=(ne.start+ne.count)*Bt;Mt!==null&&(zt=Math.max(zt,Mt.start*Bt),Me=Math.min(Me,(Mt.start+Mt.count)*Bt)),Nt!==null?(zt=Math.max(zt,0),Me=Math.min(Me,Nt.count)):ce!=null&&(zt=Math.max(zt,0),Me=Math.min(Me,ce.count));let Oe=Me-zt;if(Oe<0||Oe===1/0)return;bt.setup(z,B,vt,W,Nt);let Ue,Se=ft;if(Nt!==null&&(Ue=ut.get(Nt),Se=J,Se.setIndex(Ue)),z.isMesh)B.wireframe===!0?(y.setLineWidth(B.wireframeLinewidth*Jt()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(z.isLine){let on=B.linewidth;on===void 0&&(on=1),y.setLineWidth(on*Jt()),z.isLineSegments?Se.setMode(D.LINES):z.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else z.isPoints?Se.setMode(D.POINTS):z.isSprite&&Se.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let on=z._multiDrawStarts,Tt=z._multiDrawCounts,Sn=z._multiDrawCount,pe=Nt?ut.get(Nt).bytesPerElement:1,Dn=H.get(B).currentProgram.getUniforms();for(let Qn=0;Qn<Sn;Qn++)Dn.setValue(D,"_gl_DrawID",Qn),Se.render(on[Qn]/pe,Tt[Qn])}else if(z.isInstancedMesh)Se.renderInstances(zt,Oe,z.count);else if(W.isInstancedBufferGeometry){let on=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,on);Se.renderInstances(zt,Oe,Tt)}else Se.render(zt,Oe)};function qu(T,F,W){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,Za(T,F,W),T.side=Ei,T.needsUpdate=!0,Za(T,F,W),T.side=ci):Za(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),b=gt.get(W),b.init(F),_.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();let B=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let Mt=z.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){let vt=Mt[Rt];qu(vt,W,z),B.add(vt)}else qu(Mt,W,z),B.add(Mt)}),b=_.pop(),B},this.compileAsync=function(T,F,W=null){let B=this.compile(T,F,W);return new Promise(z=>{function Mt(){if(B.forEach(function(Rt){H.get(Rt).currentProgram.isReady()&&B.delete(Rt)}),B.size===0){z(T);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Cl=null;function dm(T){Cl&&Cl(T)}function $u(){ss.stop()}function Yu(){ss.start()}let ss=new Ep;ss.setAnimationLoop(dm),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(T){Cl=T,Lt.setAnimationLoop(T),T===null?ss.stop():ss.start()},Lt.addEventListener("sessionstart",$u),Lt.addEventListener("sessionend",Yu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(T,F);let W=Lt.enabled===!0&&Lt.isPresenting===!0,B=E!==null&&(j===null||W)&&E.begin(I,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(F),F=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,F,j),b=gt.get(T,_.length),b.init(F),b.state.textureUnits=$.getTextureUnits(),_.push(b),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(dt,qn,F.reversedDepth),it=this.localClippingEnabled,st=Vt.init(this.clippingPlanes,it),S=_t.get(T,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Rt=I.xr.getDepthSensingMesh();Rt!==null&&Il(Rt,F,-1/0,I.sortObjects)}Il(T,F,0,I.sortObjects),S.finish(),I.sortObjects===!0&&S.sort(Et,Ft,F.reversedDepth),Xt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Xt&&ee.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Vt.beginShadows();let z=b.state.shadowsArray;if($t.render(z,T,F),st===!0&&Vt.endShadows(),(B&&E.hasRenderPass())===!1){let Rt=S.opaque,vt=S.transmissive;if(b.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(vt.length>0)for(let Bt=0,ne=Nt.length;Bt<ne;Bt++){let ce=Nt[Bt];Ju(Rt,vt,T,ce)}Xt&&ee.render(T);for(let Bt=0,ne=Nt.length;Bt<ne;Bt++){let ce=Nt[Bt];Zu(S,T,ce,ce.viewport)}}else vt.length>0&&Ju(Rt,vt,T,F),Xt&&ee.render(T),Zu(S,T,F)}j!==null&&G===0&&($.updateMultisampleRenderTarget(j),$.updateRenderTargetMipmap(j)),B&&E.end(I),T.isScene===!0&&T.onAfterRender(I,T,F),bt.resetDefaultState(),tt=-1,ht=null,_.pop(),_.length>0?(b=_[_.length-1],$.setTextureUnits(b.state.textureUnits),st===!0&&Vt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function Il(T,F,W,B){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){B&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);let Rt=K.update(T),vt=T.material;vt.visible&&S.push(T,Rt,vt,W,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){let Rt=K.update(T),vt=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ht.copy(Rt.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(vt)){let Nt=Rt.groups;for(let Bt=0,ne=Nt.length;Bt<ne;Bt++){let ce=Nt[Bt],zt=vt[ce.materialIndex];zt&&zt.visible&&S.push(T,Rt,zt,W,Ht.z,ce)}}else vt.visible&&S.push(T,Rt,vt,W,Ht.z,null)}}let Mt=T.children;for(let Rt=0,vt=Mt.length;Rt<vt;Rt++)Il(Mt[Rt],F,W,B)}function Zu(T,F,W,B){let{opaque:z,transmissive:Mt,transparent:Rt}=T;b.setupLightsView(W),st===!0&&Vt.setGlobalState(I.clippingPlanes,W),B&&y.viewport(lt.copy(B)),z.length>0&&Ya(z,F,W),Mt.length>0&&Ya(Mt,F,W),Rt.length>0&&Ya(Rt,F,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ju(T,F,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let zt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new Rn(1,1,{generateMipmaps:!0,type:zt?hi:bn,minFilter:Ki,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[B.id],Rt=B.viewport||lt;Mt.setSize(Rt.z*I.transmissionResolutionScale,Rt.w*I.transmissionResolutionScale);let vt=I.getRenderTarget(),Nt=I.getActiveCubeFace(),Bt=I.getActiveMipmapLevel();I.setRenderTarget(Mt),I.getClearColor(me),Ut=I.getClearAlpha(),Ut<1&&I.setClearColor(16777215,.5),I.clear(),Xt&&ee.render(W);let ne=I.toneMapping;I.toneMapping=Yn;let ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),st===!0&&Vt.setGlobalState(I.clippingPlanes,B),Ya(T,W,B),$.updateMultisampleRenderTarget(Mt),$.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Me=0,Oe=F.length;Me<Oe;Me++){let Ue=F[Me],{object:Se,geometry:on,material:Tt,group:Sn}=Ue;if(Tt.side===ci&&Se.layers.test(B.layers)){let pe=Tt.side;Tt.side=_n,Tt.needsUpdate=!0,Ku(Se,W,B,on,Tt,Sn),Tt.side=pe,Tt.needsUpdate=!0,zt=!0}}zt===!0&&($.updateMultisampleRenderTarget(Mt),$.updateRenderTargetMipmap(Mt))}I.setRenderTarget(vt,Nt,Bt),I.setClearColor(me,Ut),ce!==void 0&&(B.viewport=ce),I.toneMapping=ne}function Ya(T,F,W){let B=F.isScene===!0?F.overrideMaterial:null;for(let z=0,Mt=T.length;z<Mt;z++){let Rt=T[z],{object:vt,geometry:Nt,group:Bt}=Rt,ne=Rt.material;ne.allowOverride===!0&&B!==null&&(ne=B),vt.layers.test(W.layers)&&Ku(vt,F,W,Nt,ne,Bt)}}function Ku(T,F,W,B,z,Mt){T.onBeforeRender(I,F,W,B,z,Mt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(I,F,W,B,T,Mt),z.transparent===!0&&z.side===ci&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,I.renderBufferDirect(W,F,B,z,T,Mt),z.side=Ei,z.needsUpdate=!0,I.renderBufferDirect(W,F,B,z,T,Mt),z.side=ci):I.renderBufferDirect(W,F,B,z,T,Mt),T.onAfterRender(I,F,W,B,z,Mt)}function Za(T,F,W){F.isScene!==!0&&(F=Dt);let B=H.get(T),z=b.state.lights,Mt=b.state.shadowsArray,Rt=z.state.version,vt=mt.getParameters(T,z.state,Mt,F,W,b.state.lightProbeGridArray),Nt=mt.getProgramCacheKey(vt),Bt=B.programs;B.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;let ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;B.envMap=ct.get(T.envMap||B.environment,ne),B.envMapRotation=B.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",jn),Bt=new Map,B.programs=Bt);let ce=Bt.get(Nt);if(ce!==void 0){if(B.currentProgram===ce&&B.lightsStateVersion===Rt)return Qu(T,vt),ce}else vt.uniforms=mt.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,W,vt),T.onBeforeCompile(vt,I),ce=mt.acquireProgram(vt,Nt),Bt.set(Nt,ce),B.uniforms=vt.uniforms;let zt=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=Vt.uniform),Qu(T,vt),B.needsLights=gm(T),B.lightsStateVersion=Rt,B.needsLights&&(zt.ambientLightColor.value=z.state.ambient,zt.lightProbe.value=z.state.probe,zt.directionalLights.value=z.state.directional,zt.directionalLightShadows.value=z.state.directionalShadow,zt.spotLights.value=z.state.spot,zt.spotLightShadows.value=z.state.spotShadow,zt.rectAreaLights.value=z.state.rectArea,zt.ltc_1.value=z.state.rectAreaLTC1,zt.ltc_2.value=z.state.rectAreaLTC2,zt.pointLights.value=z.state.point,zt.pointLightShadows.value=z.state.pointShadow,zt.hemisphereLights.value=z.state.hemi,zt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,zt.spotLightMatrix.value=z.state.spotLightMatrix,zt.spotLightMap.value=z.state.spotLightMap,zt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=ce,B.uniformsList=null,ce}function ju(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Qu(T,F){let W=H.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function fm(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let W=0,B=T.length;W<B;W++){let z=T[W];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function pm(T,F,W,B,z){F.isScene!==!0&&(F=Dt),$.resetTextureUnits();let Mt=F.fog,Rt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,vt=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:fe.workingColorSpace,Nt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Bt=ct.get(B.envMap||Rt,Nt),ne=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ce=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),zt=!!W.morphAttributes.position,Me=!!W.morphAttributes.normal,Oe=!!W.morphAttributes.color,Ue=Yn;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=I.toneMapping);let Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,on=Se!==void 0?Se.length:0,Tt=H.get(B),Sn=b.state.lights;if(st===!0&&(it===!0||T!==ht)){let Ae=T===ht&&B.id===tt;Vt.setState(B,T,Ae)}let pe=!1;B.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Sn.state.version||Tt.outputColorSpace!==vt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==Bt||B.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Vt.numPlanes||Tt.numIntersection!==Vt.numIntersection)||Tt.vertexAlphas!==ne||Tt.vertexTangents!==ce||Tt.morphTargets!==zt||Tt.morphNormals!==Me||Tt.morphColors!==Oe||Tt.toneMapping!==Ue||Tt.morphTargetsCount!==on||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Tt.__version=B.version);let Dn=Tt.currentProgram;pe===!0&&(Dn=Za(B,F,z),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Dn,Tt));let Qn=!1,Di=!1,Rs=!1,we=Dn.getUniforms(),ke=Tt.uniforms;if(y.useProgram(Dn.program)&&(Qn=!0,Di=!0,Rs=!0),B.id!==tt&&(tt=B.id,Di=!0),Tt.needsLights){let Ae=fm(b.state.lightProbeGridArray,z);Tt.lightProbeGrid!==Ae&&(Tt.lightProbeGrid=Ae,Di=!0)}if(Qn||ht!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(D,"projectionMatrix",T.projectionMatrix),we.setValue(D,"viewMatrix",T.matrixWorldInverse);let Ui=we.map.cameraPosition;Ui!==void 0&&Ui.setValue(D,pt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&we.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),ht!==T&&(ht=T,Di=!0,Rs=!0)}if(Tt.needsLights&&(Sn.state.directionalShadowMap.length>0&&we.setValue(D,"directionalShadowMap",Sn.state.directionalShadowMap,$),Sn.state.spotShadowMap.length>0&&we.setValue(D,"spotShadowMap",Sn.state.spotShadowMap,$),Sn.state.pointShadowMap.length>0&&we.setValue(D,"pointShadowMap",Sn.state.pointShadowMap,$)),z.isSkinnedMesh){we.setOptional(D,z,"bindMatrix"),we.setOptional(D,z,"bindMatrixInverse");let Ae=z.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),we.setValue(D,"boneTexture",Ae.boneTexture,$))}z.isBatchedMesh&&(we.setOptional(D,z,"batchingTexture"),we.setValue(D,"batchingTexture",z._matricesTexture,$),we.setOptional(D,z,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",z._indirectTexture,$),we.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",z._colorsTexture,$));let Ni=W.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&U.update(z,W,Dn),(Di||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,we.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(ke.envMapIntensity.value=F.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Cv()),Di){if(we.setValue(D,"toneMappingExposure",I.toneMappingExposure),Tt.needsLights&&mm(ke,Rs),Mt&&B.fog===!0&&kt.refreshFogUniforms(ke,Mt),kt.refreshMaterialUniforms(ke,B,nt,at,b.state.transmissionRenderTarget[T.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ae=Tt.lightProbeGrid;ke.probesSH.value=Ae.texture,ke.probesMin.value.copy(Ae.boundingBox.min),ke.probesMax.value.copy(Ae.boundingBox.max),ke.probesResolution.value.copy(Ae.resolution)}Mr.upload(D,ju(Tt),ke,$)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mr.upload(D,ju(Tt),ke,$),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&we.setValue(D,"center",z.center),we.setValue(D,"modelViewMatrix",z.modelViewMatrix),we.setValue(D,"normalMatrix",z.normalMatrix),we.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Ae=B.uniformsGroups;for(let Ui=0,Cs=Ae.length;Ui<Cs;Ui++){let td=Ae[Ui];et.update(td,Dn),et.bind(td,Dn)}}return Dn}function mm(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function gm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,F,W){let B=H.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=F,H.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let W=H.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){j=T,X=F,G=W;let B=null,z=!1,Mt=!1;if(T){let vt=H.get(T);if(vt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,vt.__webglFramebuffer),lt.copy(T.viewport),St.copy(T.scissor),ie=T.scissorTest,y.viewport(lt),y.scissor(St),y.setScissorTest(ie),tt=-1;return}else if(vt.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(vt.__hasExternalTextures)$.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ne=T.depthTexture;if(vt.__boundDepthTexture!==ne){if(ne!==null&&H.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}let Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);let Bt=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?B=Bt[F][W]:B=Bt[F],z=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?B=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[W]:B=Bt,lt.copy(T.viewport),St.copy(T.scissor),ie=T.scissorTest}else lt.copy(wt).multiplyScalar(nt).floor(),St.copy(jt).multiplyScalar(nt).floor(),ie=qt;if(W!==0&&(B=V),y.bindFramebuffer(D.FRAMEBUFFER,B)&&y.drawBuffers(T,B),y.viewport(lt),y.scissor(St),y.setScissorTest(ie),z){let vt=H.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,W)}else if(Mt){let vt=F;for(let Nt=0;Nt<T.textures.length;Nt++){let Bt=H.get(T.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,W,vt)}}else if(T!==null&&W!==0){let vt=H.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vt.__webglTexture,W)}tt=-1},this.readRenderTargetPixels=function(T,F,W,B,z,Mt,Rt,vt=0){if(!(T&&T.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){y.bindFramebuffer(D.FRAMEBUFFER,Nt);try{let Bt=T.textures[vt],ne=Bt.format,ce=Bt.type;if(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),!C.textureFormatReadable(ne)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ce)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-B&&W>=0&&W<=T.height-z&&D.readPixels(F,W,B,z,xt.convert(ne),xt.convert(ce),Mt)}finally{let Bt=j!==null?H.get(j).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,B,z,Mt,Rt,vt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt)if(F>=0&&F<=T.width-B&&W>=0&&W<=T.height-z){y.bindFramebuffer(D.FRAMEBUFFER,Nt);let Bt=T.textures[vt],ne=Bt.format,ce=Bt.type;if(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),!C.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.bufferData(D.PIXEL_PACK_BUFFER,Mt.byteLength,D.STREAM_READ),D.readPixels(F,W,B,z,xt.convert(ne),xt.convert(ce),0);let Me=j!==null?H.get(j).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Me);let Oe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $f(D,Oe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Mt),D.deleteBuffer(zt),D.deleteSync(Oe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,W=0){let B=Math.pow(2,-W),z=Math.floor(T.image.width*B),Mt=Math.floor(T.image.height*B),Rt=F!==null?F.x:0,vt=F!==null?F.y:0;$.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Rt,vt,z,Mt),y.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,B=null,z=0,Mt=0){let Rt,vt,Nt,Bt,ne,ce,zt,Me,Oe,Ue=T.isCompressedTexture?T.mipmaps[Mt]:T.image;if(W!==null)Rt=W.max.x-W.min.x,vt=W.max.y-W.min.y,Nt=W.isBox3?W.max.z-W.min.z:1,Bt=W.min.x,ne=W.min.y,ce=W.isBox3?W.min.z:0;else{let ke=Math.pow(2,-z);Rt=Math.floor(Ue.width*ke),vt=Math.floor(Ue.height*ke),T.isDataArrayTexture?Nt=Ue.depth:T.isData3DTexture?Nt=Math.floor(Ue.depth*ke):Nt=1,Bt=0,ne=0,ce=0}B!==null?(zt=B.x,Me=B.y,Oe=B.z):(zt=0,Me=0,Oe=0);let Se=xt.convert(F.format),on=xt.convert(F.type),Tt;F.isData3DTexture?($.setTexture3D(F,0),Tt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Tt=D.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Tt=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Sn=y.getParameter(D.UNPACK_ROW_LENGTH),pe=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=y.getParameter(D.UNPACK_SKIP_PIXELS),Qn=y.getParameter(D.UNPACK_SKIP_ROWS),Di=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),y.pixelStorei(D.UNPACK_SKIP_ROWS,ne),y.pixelStorei(D.UNPACK_SKIP_IMAGES,ce);let Rs=T.isDataArrayTexture||T.isData3DTexture,we=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let ke=H.get(T),Ni=H.get(F),Ae=H.get(ke.__renderTarget),Ui=H.get(Ni.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,Ae.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Cs=0;Cs<Nt;Cs++)Rs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(T).__webglTexture,z,ce+Cs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Mt,Oe+Cs)),D.blitFramebuffer(Bt,ne,Rt,vt,zt,Me,Rt,vt,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||H.has(T)){let ke=H.get(T),Ni=H.get(F);y.bindFramebuffer(D.READ_FRAMEBUFFER,q),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let Ae=0;Ae<Nt;Ae++)Rs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,z,ce+Ae):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,z),we?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ni.__webglTexture,Mt,Oe+Ae):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ni.__webglTexture,Mt),z!==0?D.blitFramebuffer(Bt,ne,Rt,vt,zt,Me,Rt,vt,D.COLOR_BUFFER_BIT,D.NEAREST):we?D.copyTexSubImage3D(Tt,Mt,zt,Me,Oe+Ae,Bt,ne,Rt,vt):D.copyTexSubImage2D(Tt,Mt,zt,Me,Bt,ne,Rt,vt);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Tt,Mt,zt,Me,Oe,Rt,vt,Nt,Se,on,Ue.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,Mt,zt,Me,Oe,Rt,vt,Nt,Se,Ue.data):D.texSubImage3D(Tt,Mt,zt,Me,Oe,Rt,vt,Nt,Se,on,Ue):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Mt,zt,Me,Rt,vt,Se,on,Ue.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Mt,zt,Me,Ue.width,Ue.height,Se,Ue.data):D.texSubImage2D(D.TEXTURE_2D,Mt,zt,Me,Rt,vt,Se,on,Ue);y.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),y.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Di),Mt===0&&F.generateMipmaps&&D.generateMipmap(Tt),y.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){X=0,G=0,j=null,y.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function Dp(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ce,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Lp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let m=Lp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Lp(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ye(a,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let v=h.getComponent(d,m);o.setComponent(d+u,m,v)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var As=new xa({vertexColors:!0,shininess:28,specular:2500134}),Bp=new Mn({vertexColors:!0}),Pu=new Mn({vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1}),Lu=new un({color:16774850}),Du=new un({color:14263866}),R1=new un({color:16773544}),R={red:15087942,yellow:16763196,teal:1362336,blue:1542596,navy:1914199,pink:16735631,orange:16747069,purple:9396184,white:16513007,cream:16773590,wood:11565637,darkwood:7029795,metal:12108492,dark:3752526,gold:15909198,stone:13946303,leaf:5025616,leaf2:7128426,leaf3:4034882,pine:3046735,trunk:8016435,water:5227511,sky:10475519,black:2434341,mint:10217412,lilac:13019135,brass:14201434},Sr=[R.red,R.orange,R.yellow,R.teal,R.blue,R.purple,R.pink],Iv=new Yt,Np=new Be,Up=new Bn,Fp=new P,Op=new P;function kp(s){return Up.set(s.rx||0,s.ry||0,s.rz||0,s.order||"XYZ"),Np.setFromEuler(Up),Fp.set(s.sx??s.s??1,s.sy??s.s??1,s.sz??s.s??1),Op.set(s.x||0,s.y||0,s.z||0),Iv.compose(Op,Np,Fp)}function ye(s,t,e={}){let n=s;e.smooth&&n.index?(n.computeVertexNormals(),n.applyMatrix4(kp(e)),n=n.toNonIndexed()):(n.index&&(n=n.toNonIndexed()),n.applyMatrix4(kp(e)),n.computeVertexNormals());for(let o of["uv","uv1","uv2"])n.attributes[o]&&n.deleteAttribute(o);let i=n.attributes.position.count,r=new Float32Array(i*3),a=new Pt(t);for(let o=0;o<i;o++)r[o*3]=a.r,r[o*3+1]=a.g,r[o*3+2]=a.b;return n.setAttribute("color",new Ye(r,3)),n.clearGroups(),n}function Es(s,t,e,n={}){let i=ye(s,t[0],n),r=i.attributes.position,a=i.attributes.color,o=t.map(h=>new Pt(h)),c=n.x||0,l=n.z||0;for(let h=0;h<r.count;h+=3){let u=(r.getX(h)+r.getX(h+1)+r.getX(h+2))/3-c,d=(r.getZ(h)+r.getZ(h+1)+r.getZ(h+2))/3-l,f=Math.floor((Math.atan2(d,u)+Math.PI)/(2*Math.PI)*e)%o.length;for(let m=0;m<3;m++)a.setXYZ(h+m,o[f].r,o[f].g,o[f].b)}return i}function It(s){return Dp(s.filter(Boolean))}var rt=(s,t,e,n,i)=>ye(new xn(s,t,e),n,i),es=(s,t,e,n,i,r=10)=>ye(new He(s,t,e,r),n,i),Qt=(s,t,e,n,i={},r=20)=>ye(new He(s,t,e,r),n,{...i,smooth:!0}),zp=(s,t,e,n,i={},r=20)=>ye(new He(s,t,e,r,1,!0),n,{...i,smooth:!0});var At=(s,t,e={},n=14,i=10)=>ye(new Ci(s,n,i),t,{...e,smooth:!0}),Pi=(s,t,e={},n=16)=>ye(new Ci(s,n,8,0,Math.PI*2,0,Math.PI/2),t,{...e,smooth:!0}),ns=(s,t,e,n,i=10)=>ye(new nn(s,t,i),e,n),Jn=(s,t,e,n={},i=10,r=4)=>ye(new aa(s,t,r,i),e,{...n,smooth:!0}),Ke=(s,t,e,n={},i=32,r=6)=>ye(new oi(s,t,r,i),e,{...n,smooth:!0}),Ba=(s,t,e={},n=20)=>ye(new ga(s.map(([i,r])=>new ot(i,r)),n),t,{...e,smooth:!0});function an(s,t,e,n,i=0){let r=t[0]-s[0],a=t[1]-s[1],o=t[2]-s[2],c=Math.hypot(r,a,o),l=i?new He(e/2,e/2,c,i):new xn(e,c,e);i&&l.computeVertexNormals();let h=new Be().setFromUnitVectors(new P(0,1,0),new P(r,a,o).normalize());return l.applyMatrix4(new Yt().compose(new P((s[0]+t[0])/2,(s[1]+t[1])/2,(s[2]+t[2])/2),h,new P(1,1,1))),ye(l,n,i?{smooth:!0}:{})}var Ve=(s,t,e,n)=>an(s,t,e,n,6),ve=(s,t=As)=>{let e=new _e(s,t);return e.castShadow=!0,e.receiveShadow=!0,e};function is(s,t=.03){let e=[],n=[];s.forEach(([r,a,o],c)=>(c%2?n:e).push(ye(new ma(t,0),16777215,{x:r,y:a,z:o})));let i=new he;if(e.length){let r=new _e(It(e),Lu);i.add(r)}if(n.length){let r=new _e(It(n),Du);i.add(r)}return i}var yl=(s,t,e,n=0)=>Array.from({length:s},(i,r)=>{let a=n+r/s*Math.PI*2;return[Math.cos(a)*t,e,Math.sin(a)*t]});function Ts(s,t,e,n,i=0){let r=new Fe;return r.position.set(t,e,n),r.rotation.y=i,s.add(r),r}function za(s){let t=s.length,e=[],n=new Set;for(let i=t;e.length<t;i=Math.max(1,Math.floor(i/2)))for(let r=0;r<t;r+=i)n.has(r)||(n.add(r),e.push(s[r]));return e}function wr(s,t,e,n=R.wood){let i=[],r=Math.max(1,Math.round(e/.05));for(let a=0;a<r;a++)i.push(rt(t,.05,.12,n,{y:.025+a*.05,z:s-a*.1}));return i}function Pv(s,t){let e=[Jn(.055,.15,s,{rx:Math.PI/2}),Jn(.032,.08,s,{y:.06,z:.1,rx:-.55}),Jn(.03,.06,s,{y:.12,z:.16,rx:1.1}),ns(.012,.035,s,{x:.018,y:.16,z:.135},4),ns(.012,.035,s,{x:-.018,y:.16,z:.135},4),rt(.012,.09,.05,R.darkwood,{y:.095,z:.085,rx:-.55}),Ve([0,.02,-.11],[0,-.07,-.19],.025,R.darkwood),rt(.1,.025,.1,t,{y:.055})];for(let[n,i,r]of[[.032,.08,-.6],[-.032,.08,-.3],[.032,-.08,.5],[-.032,-.08,.3]])e.push(Ve([n,-.02,i],[n,-.14,i+Math.sin(r)*.08],.022,s));return It(e)}function Lv(){let s=new he,t=1.42;s.add(ve(It([Qt(t,t+.05,.16,R.white,{y:.08},36),Qt(t+.06,t+.06,.05,R.red,{y:.15},36),...wr(t+.2,.6,.15)]))),s.add(is(yl(28,t+.07,.15),.022));let e=new he;s.add(e);let n=[Es(new He(1.33,1.33,.05,32),[R.gold,R.cream],16,{y:.2}),Qt(.27,.32,1.3,R.white,{y:.87},24),Qt(.36,.36,.12,R.red,{y:.26},24),Es(new nn(1.6,.62,32,1),[R.red,R.white],16,{y:1.85}),Es(new He(1.6,1.6,.16,32,1,!0),[R.white,R.red],16,{y:1.47}),Pi(.24,R.gold,{y:2.12}),At(.06,R.gold,{y:2.42}),es(.012,.012,.35,R.dark,{y:2.55}),rt(.2,.1,.01,R.red,{y:2.66,x:.1})];for(let f=0;f<8;f++){let m=f/8*Math.PI*2;n.push(rt(.16,.5,.02,f%2?R.sky:R.lilac,{x:Math.cos(m)*.3,z:Math.sin(m)*.3,y:.9,ry:-m+Math.PI/2}))}for(let f=0;f<32;f++){let m=f/32*Math.PI*2;n.push(ns(.06,.11,f%2?R.yellow:R.red,{x:Math.cos(m)*1.6,z:Math.sin(m)*1.6,y:1.33,rx:Math.PI},6))}e.add(ve(It(n))),e.add(is(yl(32,1.62,1.47),.026));let i=[new he,new he],r=[[],[]],a=[],o=[];i.forEach(f=>e.add(f));let c=[R.white,R.wood,R.black,R.cream,10185539],l=[R.red,R.blue,R.purple,R.teal,R.pink],h=0;for(let[f,m]of[[12,1.08],[8,.7]])for(let v=0;v<f;v++,h++){let g=v/f*Math.PI*2+(m<1?.2:0),p=Math.cos(g)*m,w=Math.sin(g)*m,M=Math.atan2(Math.sin(g),-Math.cos(g)),x=Pv(c[h%c.length],l[h%l.length]);x.applyMatrix4(new Yt().compose(new P(p,.62,w),new Be().setFromAxisAngle(new P(0,1,0),M),new P(1,1,1))),r[h%2].push(x),a.push(Qt(.012,.012,1.18,R.brass,{x:p,z:w,y:.84},6)),o.push(Ts(i[h%2],p,.69,w,M))}i.forEach((f,m)=>f.add(ve(It(r[m])))),e.add(ve(It(a)));let u=0,d=0;return{group:s,seats:za(o),animate(f,m,v){let g=f.phase==="run"?1:0;d+=(g-d)*Math.min(1,v*1.2),u+=d*v,e.rotation.y=u;let p=d>.05?Math.sin(m*3)*.08*(d/1):0;i[0].position.y=p,i[1].position.y=-p}}}function Dv(){let s=new he,t=2.45,e=1.8,n=[rt(3.9,.1,1.9,R.white,{y:.05}),rt(3.95,.04,1.95,R.red,{y:.1}),...wr(1.1,.7,.1)];for(let h of[-.66,.66])n.push(an([-1.35,.1,h],[0,t,h*.52],.11,R.blue),an([1.35,.1,h],[0,t,h*.52],.11,R.blue)),n.push(an([-.85,1,h*.85],[.85,1,h*.85],.06,R.blue));n.push(Qt(.08,.08,1,R.metal,{y:t,rx:Math.PI/2},12)),s.add(ve(It(n)));let i=new he;i.position.y=t,s.add(i);let r=[];for(let h of[-.3,.3]){r.push(Ke(e,.04,R.white,{z:h},64),Ke(.75,.03,R.white,{z:h},32));for(let u=0;u<16;u++){let d=u/16*Math.PI*2;r.push(Ve([Math.cos(d)*.12,Math.sin(d)*.12,h],[Math.cos(d)*e,Math.sin(d)*e,h],.025,R.white))}}for(let h=0;h<12;h++){let u=h/12*Math.PI*2;r.push(Ve([Math.cos(u)*e,Math.sin(u)*e,-.3],[Math.cos(u)*e,Math.sin(u)*e,.3],.03,R.metal))}r.push(Qt(.16,.16,.7,R.red,{rx:Math.PI/2},16),Qt(.22,.22,.05,R.gold,{rx:Math.PI/2,z:.33},16),Qt(.22,.22,.05,R.gold,{rx:Math.PI/2,z:-.33},16)),i.add(ve(It(r)));for(let h of[-.33,.33])i.add(is(Array.from({length:36},(u,d)=>{let f=d/36*Math.PI*2;return[Math.cos(f)*e,Math.sin(f)*e,h]}),.028));let a=[],o=[];for(let h=0;h<12;h++){let u=new he,d=h/12*Math.PI*2,f=Sr[h%Sr.length];u.position.set(Math.cos(d)*e,Math.sin(d)*e,0),u.add(ve(It([Ve([0,0,0],[0,-.16,0],.025,R.dark),Ba([[0,-.42],[.17,-.42],[.2,-.36],[.2,-.28],[.18,-.28],[.17,-.38],[0,-.38]],f,{},18),rt(.3,.03,.12,R.wood,{y:-.34}),Ve([.15,-.3,0],[.12,-.14,0],.016,R.white),Ve([-.15,-.3,0],[-.12,-.14,0],.016,R.white),ns(.22,.1,f,{y:-.1},16),At(.025,R.gold,{y:-.04})]))),i.add(u),a.push(u),o.push(Ts(u,-.07,-.33,0),Ts(u,.07,-.33,0))}let c=0,l=0;return{group:s,seats:za(o),animate(h,u,d){let f=h.phase==="run"?.33:0;l+=(f-l)*Math.min(1,d*.8),c+=l*d,i.rotation.z=c;for(let m of a)m.rotation.z=-c+Math.sin(u*1.3+m.position.x)*.04*(l/.33)}}}function Nv(s){return It([Qt(.37,.39,.03,R.white,{y:.015},24),Ba([[0,.05],[.18,.04],[.26,.09],[.31,.2],[.33,.33],[.305,.33],[.285,.21],[.23,.12],[0,.11]],s,{},28),Ke(.33,.012,R.white,{y:.33,rx:Math.PI/2},28,4),Ke(.08,.022,s,{x:.36,y:.2},14),Qt(.04,.05,.14,R.white,{y:.17},10),Ke(.08,.014,R.dark,{y:.25,rx:Math.PI/2},16,4)])}function Uv(){let s=new he;s.add(ve(It([Qt(1.42,1.47,.12,R.white,{y:.06},36),Qt(1.48,1.48,.04,R.pink,{y:.12},36),...wr(1.6,.6,.1)]))),s.add(is(yl(30,1.49,.12),.02));let t=new he;s.add(t),t.add(ve(It([Es(new He(1.32,1.32,.05,32),[R.purple,R.lilac],12,{y:.15}),Ba([[0,.17],[.22,.18],[.3,.3],[.28,.45],[.16,.54],[0,.55]],R.white,{},24),Ve([.25,.32,0],[.45,.48,0],.06,R.white),Ke(.1,.025,R.white,{x:-.3,y:.38},14),At(.07,R.pink,{y:.6})])));let e=[],n=[];for(let a=0;a<4;a++){let o=a/4*Math.PI*2,c=new he;c.position.set(Math.cos(o)*.8,.18,Math.sin(o)*.8),c.add(ve(Nv([R.pink,R.teal,R.yellow,R.blue][a]))),t.add(c),e.push(c);for(let l=0;l<4;l++){let h=l/4*Math.PI*2+.4;n.push(Ts(c,Math.cos(h)*.2,.11,Math.sin(h)*.2,Math.atan2(-Math.cos(h),-Math.sin(h))))}}let i=0,r=0;return{group:s,seats:za(n),animate(a,o,c){let l=a.phase==="run"?.8:0;r+=(l-r)*Math.min(1,c*1.5),i+=r*c,t.rotation.y=i,e.forEach((h,u)=>{h.rotation.y=-i*(2.5+u*.6)})}}}function Fv(s){return It([Jn(.12,.16,s,{y:.15,rx:Math.PI/2,sx:1.25,sy:1,sz:.55}),Ke(.2,.035,R.black,{y:.1,rx:Math.PI/2,sx:1.05,sy:1.35},24,6),rt(.22,.12,.05,R.dark,{y:.24,z:-.12}),Ke(.03,.008,R.dark,{y:.24,z:.08,rx:-.6},10,3),es(.008,.008,1,R.metal,{y:.72,z:-.15},4),At(.025,R.yellow,{y:1.22,z:-.15},8,6)])}function Ov(){let s=new he,t=[rt(3.9,.06,2.9,R.dark,{y:.03})];for(let c=0;c<8;c++)for(let l=0;l<6;l++)t.push(rt(.46,.012,.44,(c+l)%2?5002594:3949390,{x:-1.73+c*.47,z:-1.15+l*.46,y:.066}));for(let[c,l,h,u]of[[0,1.4,3.9,.1],[0,-1.4,3.9,.1],[1.9,0,.1,2.9],[-1.9,0,.1,2.9]]){let d=Math.round(Math.max(h,u)/.25);for(let f=0;f<d;f++){let m=-Math.max(h,u)/2+(f+.5)*(Math.max(h,u)/d);t.push(rt(h>u?Math.max(h,u)/d:h,.16,h>u?u:Math.max(h,u)/d,f%2?R.yellow:R.black,{x:h>u?m:c,z:h>u?l:m,y:.12}))}}for(let c of[-1.9,0,1.9])for(let l of[-1.4,1.4])t.push(Qt(.05,.06,1.35,R.white,{x:c,z:l,y:.72},10));let e=[];for(let c=0;c<10;c++)e.push(rt(.4,.1,3,c%2?R.white:R.red,{x:-1.8+c*.4,y:1.42}));for(let c=0;c<40;c++){let l=-1.95+c%20*.205,h=c<20?1.5:-1.5;e.push(ns(.05,.1,c%2?R.yellow:R.red,{x:l,z:h,y:1.32,rx:Math.PI},4))}for(let c=0;c<9;c++)e.push(rt(.015,.015,2.8,R.metal,{x:-1.8+c*.45,y:1.3}));for(let c=0;c<7;c++)e.push(rt(3.8,.015,.015,R.metal,{z:-1.35+c*.45,y:1.3}));t.push(...e,...wr(1.62,.6,.1)),s.add(ve(It(t)));let n=[];for(let c=0;c<20;c++){let l=-1.95+c*.205;n.push([l,1.48,1.51],[l,1.48,-1.51])}s.add(is(n,.025));let i=[],r=[];for(let c=0;c<10;c++){let l=new he;l.add(ve(Fv(Sr[c%Sr.length]))),s.add(l),i.push(l),r.push(Ts(l,0,.17,-.02))}let a=0,o=0;return{group:s,seats:r,animate(c,l,h){let u=c.phase==="run"?1:0;o+=(u-o)*Math.min(1,h*2),a+=o*h,i.forEach((d,f)=>{let m=a*(.7+f*.07)+f*1.7,v=a*(.53+f*.06)+f*2.1,g=Math.sin(m)*1.5,p=Math.sin(v*1.3)*1,w=Math.sin(m+.05)*1.5,M=Math.sin((v+.05)*1.3)*1;d.position.set(g,0,p),o>.05&&(d.rotation.y=Math.atan2(w-g,M-p))})}}}function kv(){let s=new he,t=2.8,e=[rt(3.7,.08,2.7,R.stone,{y:.04}),...wr(1.5,.6,.08)];for(let h of[-1.05,1.05])e.push(an([-1.4,0,h],[0,t,h],.13,8072486),an([1.4,0,h],[0,t,h],.13,8072486)),e.push(an([-.7,1.4,h],[.7,1.4,h],.07,8072486),At(.09,R.gold,{y:t,z:h}));e.push(Qt(.07,.07,2.2,R.metal,{y:t,rx:Math.PI/2},12)),s.add(ve(It(e)));let n=new he;n.position.y=t,s.add(n);let i=new vs;i.moveTo(-1.62,.5),i.quadraticCurveTo(-1.35,.02,-.9,0),i.lineTo(.9,0),i.quadraticCurveTo(1.35,.02,1.62,.5),i.lineTo(1.7,.66),i.lineTo(-1.7,.66),i.closePath();let r=new mr(i,{depth:.84,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:2,curveSegments:10}),a=[ye(r,9067059,{y:-2.5,z:-.42}),rt(3.2,.05,.94,R.gold,{y:-2.14}),rt(3,.05,.94,R.red,{y:-2.32}),rt(3.1,.04,.82,R.wood,{y:-1.85}),Qt(.04,.05,1.5,R.darkwood,{y:-1.1},8),Qt(.1,.08,.08,R.darkwood,{y:-.5},10),ye(new He(.5,.5,.6,12,1,!0,-.5,1),R.white,{y:-1.15,x:-.42,ry:Math.PI/2,smooth:!0}),rt(.02,.18,.28,R.black,{y:-.3,z:.14}),At(.035,R.white,{y:-.28,z:.15,x:.012},8,6),Ve([1.65,-1.95,0],[2,-1.75,0],.04,R.darkwood),At(.08,R.gold,{x:1.68,y:-2}),an([-.9,-1.85,.44],[0,0,.44],.07,R.metal),an([.9,-1.85,.44],[0,0,.44],.07,R.metal),an([-.9,-1.85,-.44],[0,0,-.44],.07,R.metal),an([.9,-1.85,-.44],[0,0,-.44],.07,R.metal)];for(let h=0;h<6;h++)a.push(At(.03,R.gold,{x:-1.2+h*.48,y:-2,z:.47},8,6),At(.03,R.gold,{x:-1.2+h*.48,y:-2,z:-.47},8,6));let o=[];for(let h=-3;h<=3;h++){let u=h*.42,d=h<0?Math.PI/2:-Math.PI/2;a.push(rt(.1,.07,.74,R.red,{x:u,y:-1.8}),rt(.03,.12,.74,R.red,{x:u+(h<0?-.06:.06),y:-1.72}));for(let f of[-.27,-.09,.09,.27])o.push(Ts(n,u,-1.76,f,h===0?Math.PI/2:d))}n.add(ve(It(a)));let c=0,l=0;return{group:s,seats:za(o),animate(h,u,d){let m=h.phase==="run"?h.timer>4?1.05:.12:0;l+=(m-l)*Math.min(1,d*.35),c+=d*1.25,n.rotation.z=Math.sin(c)*l}}}function Bv(){let s=new he,t=9.2,e=[rt(1.9,.18,1.9,R.stone,{y:.09}),rt(1.95,.04,1.95,R.red,{y:.19}),...wr(1.12,.5,.15)],n=.17;for(let[o,c]of[[n,n],[-n,n],[n,-n],[-n,-n]])e.push(rt(.06,t,.06,R.white,{x:o,z:c,y:t/2+.2}));for(let o=.2,c=0;o<t;o+=.6,c++){let l=c%2?R.red:R.yellow;e.push(an([-n,o,n],[n,o+.6,n],.03,l),an([n,o,-n],[-n,o+.6,-n],.03,l),an([n,o,n],[n,o+.6,-n],.03,l),an([-n,o,-n],[-n,o+.6,n],.03,l))}e.push(Qt(.42,.3,.3,R.red,{y:t+.35},16),Pi(.3,R.white,{y:t+.5}),es(.015,.015,.5,R.dark,{y:t+1})),s.add(ve(It(e))),s.add(is([...yl(12,.43,t+.42),[0,t+1.28,0]],.04));let i=new he;s.add(i);let r=[zp(.62,.62,.24,R.yellow,{},28),Qt(.62,.62,.03,R.dark,{y:-.12},28),Ke(.62,.025,R.white,{y:.12,rx:Math.PI/2},32,4)],a=[];for(let o=0;o<12;o++){let c=o/12*Math.PI*2,l=Math.cos(c)*.7,h=Math.sin(c)*.7,u=Math.atan2(Math.cos(c),Math.sin(c));r.push(rt(.15,.04,.12,R.blue,{x:l,z:h,y:-.11,ry:u}),rt(.15,.26,.03,R.blue,{x:Math.cos(c)*.64,z:Math.sin(c)*.64,y:.02,ry:u})),r.push(Ke(.06,.012,R.dark,{x:Math.cos(c)*.72,z:Math.sin(c)*.72,y:.04,ry:u,rx:.3},10,4)),a.push(Ts(i,l,-.09,h,u))}return i.add(ve(It(r))),{group:s,seats:za(a),animate(o){let c=.62;if(o.phase==="run"){let h=20-o.timer;h<10?c=.62+h/10*7.9:h<13?c=8.52:h<14?c=8.52-(h-13)**2*7.9:c=.62}i.position.y=Math.max(.62,c)}}}var zv={carousel:Lv,ferris:Dv,teacups:Uv,bumper:Ov,ship:kv,tower:Bv};function Nu(s){return zv[s]()}var Iu=new Map;function Hv(s){if(Iu.has(s))return Iu.get(s);let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(64,64,60,0,Math.PI*2),e.fill(),e.lineWidth=6,e.strokeStyle="#e63946",e.stroke(),e.font='76px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(s,64,70);let n=new Ai(t);return n.colorSpace=$e,n.anisotropy=4,Iu.set(s,n),n}function Hp(s,t=.62){let e=new ea(new cr({map:Hv(s),depthWrite:!1}));return e.scale.set(t,t,t),e}function Vv(s,t=1024,e=256,n="#1d3557",i="#ffc93c",r="Fredoka"){let a=document.createElement("canvas");a.width=t,a.height=e;let o=a.getContext("2d"),c=()=>{o.fillStyle=n,o.fillRect(0,0,t,e),o.strokeStyle=i,o.lineWidth=10,o.strokeRect(12,12,t-24,e-24);for(let h=0;h<18;h++)o.fillStyle=h%2?"#fff6c2":"#ff5d8f",o.beginPath(),o.arc(30+h*((t-60)/17),30,7,0,Math.PI*2),o.arc(30+h*((t-60)/17),e-30,7,0,Math.PI*2),o.fill();o.fillStyle=i,o.font=`700 ${Math.round(e*.5)}px ${r}, Rubik, "Arial Hebrew", Arial, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.direction="rtl",o.fillText(s,t/2,e/2+6)};c();let l=new Ai(a);return l.colorSpace=$e,l.anisotropy=4,document.fonts&&document.fonts.ready.then(()=>{c(),l.needsUpdate=!0}),l}function Vp(s,t,e,n,i){let r=new un({map:Vv(s,512,Math.round(512*e/t),n,i)}),a=new he,o=new _e(new zn(t,e),r);o.position.z=.011;let c=new _e(new zn(t,e),r);return c.rotation.y=Math.PI,c.position.z=-.011,a.add(o,c),a}var Gv={burger:R.red,pizza:R.orange,drinks:R.blue,icecream:R.pink,balloons:R.purple};function Wv(s){switch(s){case"burger":{let t=[Qt(.2,.18,.06,14260814,{y:.03}),Qt(.2,.2,.04,7027231,{y:.08}),rt(.3,.012,.3,R.yellow,{y:.106,ry:.78}),Qt(.23,.23,.014,R.leaf2,{y:.115},16),Qt(.17,.17,.02,R.red,{y:.13}),Pi(.2,14722390,{y:.14,sy:.75})];for(let e=0;e<9;e++){let n=e*2.4,i=.06+e%3*.04;t.push(At(.012,R.cream,{x:Math.cos(n)*i,y:.14+.15*Math.cos(i*6)*.75,z:Math.sin(n)*i,sy:.6},6,4))}return It(t)}case"pizza":{let t=new vs;t.moveTo(0,-.22),t.lineTo(.2,.18),t.quadraticCurveTo(0,.24,-.2,.18),t.closePath();let e=[ye(new mr(t,{depth:.04,bevelEnabled:!1}),R.yellow,{y:.16,rx:-.35}),Ke(.2,.03,13141821,{y:.24,z:.07,rx:Math.PI/2-.35,sy:.25},16,6)];for(let[n,i]of[[0,.02],[-.07,.1],[.08,.1],[0,-.1]])e.push(Qt(.035,.035,.012,R.red,{x:n,y:.16+i*Math.cos(.35),z:.045-i*Math.sin(.35),rx:Math.PI/2-.35},10));return It(e)}case"drinks":return It([Qt(.13,.1,.32,R.red,{y:.16},16),zp(.135,.12,.08,R.white,{y:.18},16),Qt(.14,.14,.03,R.white,{y:.33},16),Ve([.03,.3,0],[.07,.5,.02],.02,R.teal)]);case"icecream":return It([ye(new nn(.1,.28,12),14262878,{y:.14,rx:Math.PI}),At(.11,R.pink,{y:.3}),At(.09,R.cream,{y:.42}),At(.03,R.red,{y:.52},8,6)]);case"balloons":{let t=[];return[[0,.5,0,R.red],[.14,.42,.04,R.yellow],[-.13,.44,.02,R.blue],[.05,.38,-.12,R.teal],[-.04,.4,.13,R.pink]].forEach(([e,n,i,r])=>{t.push(At(.08,r,{x:e,y:n,z:i,sy:1.15},10,8),Ve([0,0,0],[e,n-.09,i],.006,R.white))}),It(t)}default:return null}}function Uu(s){let t=new he;if(s==="toilets")return t.add(ve(It([rt(.86,.04,.72,R.stone,{y:.02}),rt(.8,.6,.62,R.white,{y:.32}),rt(.82,.08,.64,R.mint,{y:.06}),ye(new nn(.62,.26,4),R.blue,{y:.75,ry:Math.PI/4,sz:.85}),rt(.2,.4,.02,R.blue,{x:-.19,y:.26,z:.32}),rt(.2,.4,.02,R.pink,{x:.19,y:.26,z:.32}),At(.03,R.white,{x:-.19,y:.42,z:.335},8,6),At(.03,R.white,{x:.19,y:.42,z:.335},8,6),At(.12,R.leaf,{x:.38,y:.1,z:.3}),At(.1,R.leaf2,{x:-.4,y:.09,z:.3})]))),{group:t,animate(){}};let e=Gv[s]||R.red,n=[rt(.86,.04,.74,R.stone,{y:.02}),rt(.72,.5,.56,e,{y:.29}),rt(.74,.08,.58,R.white,{y:.08}),rt(.6,.2,.02,2830134,{y:.48,z:.285}),rt(.8,.05,.18,R.white,{y:.4,z:.36}),rt(.78,.3,.04,e,{y:.24,z:.3}),rt(.8,.05,.64,R.white,{y:.565})];for(let r=0;r<8;r++)n.push(rt(.105,.02,.34,r%2?R.white:e,{x:-.367+r*.105,y:.65,z:.4,rx:.42}));for(let r=0;r<8;r++)n.push(ye(new He(.052,.052,.02,8,1,!1,0,Math.PI),r%2?R.white:e,{x:-.367+r*.105,y:.58,z:.56,rx:Math.PI/2,rz:Math.PI/2}));n.push(rt(.04,.2,.04,R.white,{x:-.37,y:.68,z:-.25}),rt(.04,.2,.04,R.white,{x:.37,y:.68,z:-.25}));let i=Wv(s);return i&&(i.applyMatrix4(new Yt().makeTranslation(0,.6,-.06)),n.push(i)),(s==="burger"||s==="pizza"||s==="icecream")&&(n.push(Qt(.11,.11,.02,R.white,{x:.36,y:.2,z:.62},12),es(.012,.012,.2,R.dark,{x:.36,y:.1,z:.62},4)),n.push(Es(new nn(.2,.08,12),[e,R.white],12,{x:.36,y:.46,z:.62}),es(.008,.008,.28,R.white,{x:.36,y:.32,z:.62},4))),t.add(ve(It(n))),{group:t,animate(){}}}function Fu(){let s=new he,t=[rt(1.9,.05,.9,R.stone,{y:.025})];for(let n of[-.45,.45]){t.push(rt(.72,.56,.6,R.white,{x:n,y:.33}),rt(.74,.1,.62,R.red,{x:n,y:.1}));for(let i=0;i<6;i++)t.push(rt(.12,.44,.012,i%2?R.red:R.white,{x:n-.3+i*.12,y:.37,z:.305}));t.push(rt(.36,.22,.03,2830134,{x:n,y:.47,z:.31}),rt(.46,.04,.12,R.gold,{x:n,y:.36,z:.36})),t.push(Es(new Ci(.4,16,8,0,Math.PI*2,0,Math.PI/2),[R.red,R.white],16,{x:n,y:.6,sy:.7})),t.push(At(.05,R.gold,{x:n,y:.92}),es(.01,.01,.25,R.dark,{x:n,y:1.05},4),rt(.12,.07,.008,Xv(n),{x:n+.06,y:1.14})),t.push(At(.06,15251594,{x:n,y:.5,z:.18}),Jn(.06,.06,R.blue,{x:n,y:.36,z:.18}))}for(let n of[-.75,-.15,.15,.75]){t.push(Qt(.05,.06,.22,R.metal,{x:n,y:.13,z:.62},10));for(let i=0;i<3;i++){let r=i/3*Math.PI*2;t.push(Ve([n,.2,.62],[n+Math.cos(r)*.14,.2,.62+Math.sin(r)*.14],.012,R.metal))}}t.push(Ve([-.06,.6,-.1],[-.06,1,-.1],.03,R.dark),Ve([.06,.6,-.1],[.06,1,-.1],.03,R.dark)),s.add(ve(It(t)));let e=Vp("\u{1F39F}\uFE0F \u05E7\u05D5\u05E4\u05D4",.9,.32,"#e63946","#fff6c2");return e.position.set(0,1.1,-.1),s.add(e),s.add(is([[-.47,1.1,-.08],[.47,1.1,-.08],...Array.from({length:8},(n,i)=>[-.42+i*.12,1.28,-.08])],.022)),{group:s,animate(){}}}function Xv(s){return s<0?R.yellow:R.teal}function Ou(s){switch(s){case"oak":return It([Qt(.05,.085,.45,R.trunk,{y:.22},8),Ve([0,.35,0],[.12,.5,.05],.04,R.trunk),At(.34,R.leaf,{y:.7},12,9),At(.26,R.leaf2,{x:.17,y:.86,z:.08},12,9),At(.24,R.leaf3,{x:-.16,y:.8,z:-.06},12,9),At(.2,R.leaf2,{x:.02,y:.98,z:-.12},10,8)]);case"pine":return It([Qt(.05,.07,.3,R.trunk,{y:.15},8),ye(new nn(.4,.5,12),R.pine,{y:.5,smooth:!0}),ye(new nn(.32,.45,12),3508825,{y:.78,smooth:!0}),ye(new nn(.22,.4,12),4037220,{y:1.04,smooth:!0}),ye(new nn(.12,.25,10),4565357,{y:1.25,smooth:!0})]);case"palm":{let t=[],e=0,n=0;for(let i=0;i<6;i++){let r=e+.03*i,a=n+.2;t.push(ye(new He(.06-i*.006,.07-i*.006,.21,8),i%2?R.trunk:9135168,{x:(e+r)/2,y:(n+a)/2,rz:-.15*(i/6),smooth:!0})),e=r,n=a}for(let i=0;i<7;i++){let r=i/7*Math.PI*2,a=[e+Math.cos(r)*.28,n+.06,Math.sin(r)*.28],o=[e+Math.cos(r)*.52,n-.16,Math.sin(r)*.52];t.push(an([e,n,0],a,.07,R.leaf2),an(a,o,.06,R.leaf))}return t.push(At(.045,R.darkwood,{x:e,y:n-.05,z:.05},8,6),At(.045,R.darkwood,{x:e-.05,y:n-.06},8,6),At(.045,R.darkwood,{x:e+.03,y:n-.06,z:-.04},8,6)),It(t)}case"bush":return It([At(.22,R.leaf,{y:.16,sy:.8},12,8),At(.16,R.leaf2,{x:.15,y:.14,z:.06},10,8),At(.14,R.leaf3,{x:-.13,y:.12,z:-.04},10,8),At(.025,R.pink,{x:.08,y:.31,z:.08},6,4),At(.025,R.pink,{x:-.1,y:.26,z:.1},6,4)]);case"flowers":{let t=[rt(.86,.1,.86,R.wood,{y:.05}),rt(.78,.04,.78,R.darkwood,{y:.09})],e=[R.red,R.yellow,R.pink,R.purple,R.white,R.orange];for(let n=0;n<25;n++){let i=(n%5-2)*.15,r=(Math.floor(n/5)-2)*.15,a=.12+n*7%5*.015;t.push(es(.008,.008,a,R.leaf,{x:i,z:r,y:.11+a/2},4),At(.035,e[n%e.length],{x:i,z:r,y:.12+a,sy:.7},8,5),At(.012,R.yellow,{x:i,z:r,y:.14+a},5,4))}return It(t)}case"statue":return It([rt(.48,.36,.48,R.stone,{y:.18}),rt(.54,.05,.54,12432805,{y:.38}),rt(.54,.05,.54,12432805,{y:.02}),Jn(.07,.22,11570519,{y:.62}),At(.08,11570519,{y:.86}),Ve([.05,.72,0],[.22,.95,.03],.045,11570519),Ve([-.05,.7,0],[-.2,.6,.08],.045,11570519),At(.05,R.gold,{x:.24,y:.99,z:.03},10,8)]);case"fountain":return It([Ba([[0,.02],[.95,.02],[.98,.26],[.86,.26],[.84,.12],[0,.12]],R.stone,{},32),Qt(.84,.84,.02,R.water,{y:.21},32),Qt(.12,.16,.55,R.stone,{y:.45},12),Ba([[0,.66],[.38,.66],[.4,.76],[.34,.76],[0,.72]],R.stone,{},24),Qt(.33,.33,.015,R.water,{y:.745},24),Qt(.05,.07,.25,R.stone,{y:.88},10),At(.07,R.gold,{y:1.04})]);default:return rt(.3,.3,.3,R.red)}}var Gp=new Mn({color:13103103,transparent:!0,opacity:.65});function Wp(s){switch(s){case"bench":{let t=[];for(let e=0;e<3;e++)t.push(rt(.52,.02,.045,R.wood,{y:.17,z:-.05+e*.05}));for(let e=0;e<2;e++)t.push(rt(.52,.04,.02,R.wood,{y:.24+e*.06,z:-.085,rx:-.15}));for(let e of[-.22,.22])t.push(rt(.025,.17,.13,R.dark,{x:e,y:.085}),rt(.025,.16,.02,R.dark,{x:e,y:.26,z:-.08}));return It(t)}case"bin":return It([Qt(.075,.065,.22,3116878,{y:.11},12),Ke(.074,.008,2390592,{y:.16,rx:Math.PI/2},16,4),Pi(.085,R.dark,{y:.22,sy:.4},12)]);case"lamp":return It([Qt(.045,.06,.06,R.dark,{y:.03},8),Qt(.018,.025,.85,R.dark,{y:.45},8),Ke(.06,.01,R.dark,{y:.8,rx:Math.PI/2},12,4),At(.075,16774080,{y:.9},12,8),ns(.07,.07,R.dark,{y:.99},8),At(.015,R.dark,{y:1.04},6,4)]);default:return rt(.1,.1,.1,R.red)}}function Xp(s){return It([rt(.5,.12,.24,s,{y:.1}),rt(.28,.1,.22,s,{y:.21,x:-.03}),rt(.27,.08,.225,2831424,{y:.21,x:-.03}),...[[-.16,.12],[.16,.12],[-.16,-.12],[.16,-.12]].map(([t,e])=>Qt(.05,.05,.04,R.black,{x:t,z:e,y:.05,rx:Math.PI/2},10)),rt(.02,.03,.05,16773808,{x:.25,y:.12,z:.07}),rt(.02,.03,.05,16773808,{x:.25,y:.12,z:-.07})])}function qp(s){let t=new he,e=[];for(let r of[-1.55,1.55])e.push(Qt(.3,.34,2.3,R.red,{x:r,y:1.15},16),Ke(.31,.04,R.gold,{x:r,y:.4,rx:Math.PI/2},20,4),Ke(.31,.04,R.gold,{x:r,y:2.2,rx:Math.PI/2},20,4)),e.push(Es(new nn(.42,.7,16),[R.yellow,R.red],16,{x:r,y:2.65}),At(.06,R.gold,{x:r,y:3.05}),es(.012,.012,.4,R.dark,{x:r,y:3.25},4),rt(.22,.12,.01,R.teal,{x:r+.11,y:3.38}));e.push(ye(new oi(1.55,.13,8,32,Math.PI),R.navy,{y:2,smooth:!0})),t.add(ve(It(e)));let n=[];for(let r=0;r<=20;r++){let a=r/20*Math.PI;n.push([Math.cos(a)*1.55,2+Math.sin(a)*1.55,.14],[Math.cos(a)*1.55,2+Math.sin(a)*1.55,-.14])}t.add(is(n,.04));let i=Vp(s,2.6,.62,"#1d3557","#ffc93c");return i.position.set(0,2.05,0),t.add(i),t}var $p=[15087942,1542596,16763196,1362336,16735631,9396184,16747069,16513007,3835647,9095462,2830134,6966419,16777215,10212580],Yp=[16175796,15251594,13208414,9263675,6175270],Zp=[2902650,3817291,2040361,8022613,14208960,5008266,5979950],Jp=[1775122,3876118,7029795,13147997,14729850,10107677,12105912],Kp={cleaner:2784737,mechanic:15895069,entertainer:11620312};var zu=.22,ku=.14;function Hu(s,t,e){let n=s.bank?s.bank[t]:0,i=Hl(s,t,n,e.U),r=s.T[t*3],a=s.T[t*3+1],o=s.T[t*3+2];e.S[0]=i[1]*o-i[2]*a,e.S[1]=i[2]*r-i[0]*o,e.S[2]=i[0]*a-i[1]*r;let c=Math.hypot(e.S[0],e.S[1],e.S[2])||1;return e.S[0]/=c,e.S[1]/=c,e.S[2]/=c,e.T[0]=r,e.T[1]=a,e.T[2]=o,e.P[0]=s.X[t],e.P[1]=s.Y[t]+zu,e.P[2]=s.Z[t],e}var Vu=()=>({P:[0,0,0],T:[0,0,1],U:[0,1,0],S:[1,0,0]});function Bu(s,t,e,n,i,r,a,o,c,l,h){let u=Vu(),d=new Pt(o),f=[];for(let g of t){Hu(s,g,u);let p=u.P[0]+u.S[0]*n+u.U[0]*i,w=u.P[1]+u.S[1]*n+u.U[1]*i,M=u.P[2]+u.S[2]*n+u.U[2]*i,x=[];for(let S=0;S<a;S++){let b=S/a*Math.PI*2,A=Math.cos(b),_=Math.sin(b),E=u.S[0]*A+u.U[0]*_,I=u.S[1]*A+u.U[1]*_,L=u.S[2]*A+u.U[2]*_;x.push([p+E*r,w+I*r,M+L*r,E,I,L])}f.push(x)}let m=f.length,v=e?m:m-1;for(let g=0;g<v;g++){let p=f[g],w=f[(g+1)%m];for(let M=0;M<a;M++){let x=(M+1)%a;for(let S of[p[M],w[M],w[x],p[M],w[x],p[x]])c.push(S[0],S[1],S[2]),l.push(S[3],S[4],S[5]),h.push(d.r,d.g,d.b)}}}function jp(s,t,e,n,i,r=0){let a=ye(new xn(s,t,e),n),o=new Yt().makeBasis(new P(...i.S),new P(...i.U),new P(...i.T));return o.setPosition(i.P[0]+i.U[0]*r,i.P[1]+i.U[1]*r,i.P[2]+i.U[2]*r),a.applyMatrix4(o),a.computeVertexNormals(),a}function Qp(s,t){let e=s.curve,n=new he,i=2,r=[];for(let g=0;g<e.n;g+=i)r.push(g);!e.closed&&r[r.length-1]!==e.n-1&&r.push(e.n-1);let a=[],o=[],c=[],l=s.color,h=14278114;Bu(e,r,e.closed,ku,.035,.026,6,l,a,o,c),Bu(e,r,e.closed,-ku,.035,.026,6,l,a,o,c),Bu(e,r,e.closed,0,-.07,.045,6,h,a,o,c);let u=new Ce;u.setAttribute("position",new se(a,3)),u.setAttribute("normal",new se(o,3)),u.setAttribute("color",new se(c,3)),n.add(ve(u));let d=[],f=Vu(),m=-9,v=0;for(let g=0;g<e.n;g+=3){Hu(e,g,f);let p=e.FL[g];if(d.push(jp(ku*2+.06,.03,.05,p&Ls?R.dark:10134702,f,0)),p&Ls&&d.push(jp(.05,.02,e.ds*3.05,2829099,f,.05)),v=g*e.ds,v-m>=1.15&&f.U[1]>.55&&!(p&Ds)){let w=f.P[0],M=f.P[2],x=f.P[1]-.1;x>.2&&!t(Math.floor(w),Math.floor(M))&&(d.push(ye(new He(.035,.045,x,6),14278114,{x:w,y:x/2,z:M})),d.push(rt(.16,.05,.16,R.stone,{x:w,y:.025,z:M})),m=v)}}for(let g=0;g<Ee.stationLen;g++){let p=s.pieces[g],w=je[p.d],M=Qe[p.d],x=je[(p.d+1)%4],S=Qe[(p.d+1)%4],b=p.x+.5,A=p.z+.5,_=p.d%2===0;for(let E of[-1,1])d.push(rt(_?.3:1,.16,_?1:.3,R.stone,{x:b+x*E*.36,y:.08,z:A+S*E*.36})),d.push(rt(.05,1.1,.05,R.white,{x:b+x*E*.45-w*.4,y:.6,z:A+S*E*.45-M*.4}));d.push(rt(_?1.05:1.02,.06,_?1.02:1.05,s.color,{x:b,y:1.17,z:A}))}return n.add(ve(It(d))),n}var vl=class{constructor(t){this.group=new he,this.cars=[],this.seats=[];let e=t.color,i=It([Jn(.13,.26,e,{y:.1,rx:Math.PI/2,sx:1.35,sy:.75,sz:1},12),rt(.32,.03,.42,2830134,{y:.17}),rt(.3,.16,.05,1914199,{y:.24,z:-.13,rx:-.15}),Jn(.022,.26,13686492,{y:.27,z:.09,rz:Math.PI/2},6),rt(.36,.03,.06,3355443,{y:0,z:.17}),rt(.36,.03,.06,3355443,{y:0,z:-.17}),rt(.37,.025,.46,R.yellow,{y:.135})]),r=It([ye(new Ci(.17,14,10,0,Math.PI*2,0,Math.PI/2),e,{y:.1,z:.3,rx:Math.PI/2,sx:1.05,sy:1.3,sz:.75,smooth:!0}),At(.03,16773808,{x:.09,y:.12,z:.42},8,6),At(.03,16773808,{x:-.09,y:.12,z:.42},8,6)]);for(let a=0;a<Ee.cars;a++){let o=new he;o.matrixAutoUpdate=!1,o.add(ve(i)),a===0&&o.add(ve(r));for(let c of[.075,-.075]){let l=new Fe;l.position.set(c,.16,-.03),o.add(l),this.seats.push(l)}this.group.add(o),this.cars.push(o)}this.F=Vu(),this.m=new Yt,this.v=[new P,new P,new P],this.preview=null}trainS(t,e){let n=t.run,i=Ee.stationLen-Ee.cars*Ee.carLen/2-.15;if(!n)return i;let r=-1;if(t.phase==="run"?r=n.duration-t.timer:this.preview!==null&&(r=e-this.preview,r>n.duration&&(this.preview=null,r=-1)),r<0)return n.traj[0];let a=r/cs,o=Math.min(n.traj.length-2,Math.floor(a)),c=Math.min(1,a-o);return n.traj[o]+(n.traj[o+1]-n.traj[o])*c}update(t,e){let n=t.curve;if(!n||!n.n)return;let i=this.trainS(t,e),r=(Ee.cars-1)*Ee.carLen/2,a=t.phase==="run"?t.riders.length:0;this.cars.forEach((o,c)=>{let h=(i+r-c*Ee.carLen)/n.ds;n.closed?h=(h%n.n+n.n)%n.n:h=Math.max(0,Math.min(n.n-1,h));let u=Math.min(n.n-1,Math.round(h)%n.n);Hu(n,u,this.F);let[d,f,m]=this.v;d.set(...this.F.S),f.set(...this.F.U),m.set(...this.F.T),this.m.makeBasis(d,f,m),this.m.setPosition(this.F.P[0]+this.F.U[0]*.06,this.F.P[1]+this.F.U[1]*.06,this.F.P[2]+this.F.U[2]*.06),o.matrix.copy(this.m),o.matrixWorldNeedsUpdate=!0}),this.riders=a}};function tm(){let s=new he,t=new un({color:16765286}),e=new _e(new nn(.22,.45,12),t);e.rotation.x=Math.PI/2,e.position.y=.3,s.add(e);let n=new _e(new oi(.35,.04,6,24),t);n.rotation.x=Math.PI/2,n.position.y=.3,s.add(n);let i=new _e(new He(.015,.015,1,4),new un({color:16777215,transparent:!0,opacity:.5}));return s.add(i),s.userData={arrow:e,pole:i},s}var Ml=640,Ha=420,em=.06,Sl=.29,Ga=.49,Wa=.093,sn=16777215,qv=3815994,Xa=2500134,fn=(s,t,e,n=6)=>Jn(s,t,sn,e,n,2),Va={leg:It([fn(.034,.19,{y:-.13}),rt(.068,.04,.11,qv,{y:-.272,z:.022})]),hips:It([fn(.068,.05,{y:Sl+.01,rz:Math.PI/2,sz:.72},8)]),torso:It([fn(.074,.12,{y:.405,sz:.68},9),fn(.034,.03,{x:Wa-.005,y:Ga-.02,rz:.35},5),fn(.034,.03,{x:-Wa+.005,y:Ga-.02,rz:-.35},5)]),head:It([Qt(.026,.03,.06,sn,{y:.545},6),At(.068,sn,{y:.605},11,8),At(.014,sn,{y:.597,z:.066},4,3),At(.016,sn,{x:.066,y:.6},4,3),At(.016,sn,{x:-.066,y:.6},4,3),At(.009,Xa,{x:.024,y:.615,z:.061},4,3),At(.009,Xa,{x:-.024,y:.615,z:.061},4,3)]),arm:It([fn(.025,.15,{y:-.1},5),At(.028,sn,{y:-.2},5,4)])},Gu=()=>[Pi(.075,sn,{y:.607,sy:.92},11),At(.071,sn,{y:.592,z:-.013,sy:.92},11,7)],$v=[It(Gu()),It([...Gu(),fn(.058,.11,{y:.53,z:-.042,sz:.55},8)]),It([...Gu(),At(.036,sn,{y:.64,z:-.085},7,5),fn(.02,.07,{y:.575,z:-.098},5)]),It([Pi(.077,sn,{y:.615},11),rt(.11,.012,.085,sn,{y:.623,z:.075})])],Yv=It([Pi(.082,R.yellow,{y:.625},12),Ke(.083,.01,R.yellow,{y:.627,rx:Math.PI/2},14,3),rt(.014,.03,.15,14725152,{y:.69})]),Zv=It([At(.13,10185539,{y:.66},14,10),At(.045,10185539,{x:.1,y:.77},8,6),At(.045,10185539,{x:-.1,y:.77},8,6),At(.025,R.pink,{x:.1,y:.775,z:.02},6,4),At(.025,R.pink,{x:-.1,y:.775,z:.02},6,4),At(.055,R.cream,{y:.62,z:.1,sz:.7},10,6),At(.018,Xa,{y:.64,z:.145},5,4),At(.016,Xa,{x:.045,y:.7,z:.11},5,4),At(.016,Xa,{x:-.045,y:.7,z:.11},5,4),Ke(.06,.015,R.red,{y:.53,rx:Math.PI/2},12,3)]),Jv=It([Ve([0,0,0],[0,-.22,.17],.016,R.wood),rt(.12,.05,.03,R.yellow,{y:-.24,z:.19,rx:.8})]),Kv=It([rt(.1,.06,.05,R.red,{y:-.05}),Ke(.025,.006,R.dark,{y:-.015},8,3)]),jv=It([At(.075,sn,{y:.42,sy:1.15},9,7),ns(.012,.02,sn,{y:.335,rx:Math.PI},5),Ve([0,0,0],[0,.33,0],.004,15658734)]),bl={pants:It([fn(.034,.12,{x:.04,y:.03,z:.07,rx:Math.PI/2}),fn(.034,.12,{x:-.04,y:.03,z:.07,rx:Math.PI/2}),fn(.03,.1,{x:.04,y:-.06,z:.16}),fn(.03,.1,{x:-.04,y:-.06,z:.16}),fn(.066,.04,{y:.03,rz:Math.PI/2,sz:.72},8)]),torso:It([fn(.072,.11,{y:.15,sz:.68},9)]),skin:It([Qt(.026,.03,.05,sn,{y:.255},6),At(.066,sn,{y:.32},11,8),fn(.024,.13,{x:.09,y:.17,z:.07,rx:-1},5),fn(.024,.13,{x:-.09,y:.17,z:.07,rx:-1},5)]),hair:It([Pi(.072,sn,{y:.322,sy:.92},11),At(.068,sn,{y:.308,z:-.013,sy:.92},11,6)])},Qv={cleaner:3,mechanic:-1,entertainer:-2},wl=class{constructor(t){let e=(i,r=Ml)=>{let a=new vn(i,As,r);return a.instanceMatrix.setUsage(iu),a.count=0,a.castShadow=!0,a.frustumCulled=!1,a.setColorAt(0,new Pt(1,1,1)),t.add(a),a};this.legs=e(Va.leg,Ml*2),this.arms=e(Va.arm,Ml*2),this.hips=e(Va.hips),this.torso=e(Va.torso),this.head=e(Va.head),this.hair=$v.map(i=>e(i)),this.hardhat=e(Yv,80),this.mascot=e(Zv,80),this.broom=e(Jv,80),this.toolbox=e(Kv,80),this.balloon=e(jv),this.seat={pants:e(bl.pants,Ha),torso:e(bl.torso,Ha),skin:e(bl.skin,Ha),hair:e(bl.hair,Ha)},this.all=[this.legs,this.arms,this.hips,this.torso,this.head,...this.hair,this.hardhat,this.mascot,this.broom,this.toolbox,this.balloon],this.M=new Yt,this.L=new Yt,this.R=new Yt,this.out=new Yt,this.q=new Be,this.p=new P,this.s=new P,this.up=new P(0,1,0);let n=i=>i.map(r=>new Pt(r));this.shirt=n($p),this.skin=n(Yp),this.pants=n(Zp),this.hairC=n(Jp),this.staffC=Object.fromEntries(Object.entries(Kp).map(([i,r])=>[i,new Pt(r)])),this.capC=n([R.red,R.blue,R.yellow,R.teal,R.purple,R.white]),this.balloonC=n([R.red,R.yellow,R.teal,R.blue,R.pink,R.purple,R.orange]),this.white=new Pt(1,1,1),this.navy=new Pt(1989552),this.walk=new Map,this.n={}}look(t){let e=t.id,n=!t.role&&e%5===0,i=t.role?Qv[t.role]:[0,1,2,3,0,1,-1,2][e%8];return{s:n?.72:.96+e*7%9/100,shirt:t.role?this.staffC[t.role]:this.shirt[(t.shirt??e)%this.shirt.length],pants:t.role==="cleaner"||t.role==="entertainer"?this.staffC[t.role]:t.role==="mechanic"?this.navy:this.pants[e%this.pants.length],skin:this.skin[(t.skin??e)%this.skin.length],style:i,hair:i===3?t.role==="cleaner"?this.navy:this.capC[e%this.capC.length]:this.hairC[e*3%this.hairC.length]}}push(t,e,n,i){let r=this.n[e]++;return t.setMatrixAt(r,n),i&&t.setColorAt(r,i),r}limb(t,e,n,i,r,a){return this.L.makeRotationX(r),this.L.setPosition(n,i,0),this.out.multiplyMatrices(this.M,this.L),this.push(t,e,this.out,a),this.out}person(t,e,n,i,r,a,o){if(this.n.legs>=Ml*2)return;let c=this.look(t),l=this.walk.get(t.id);l||(l={x:e,z:i,ph:t.id*1.7%6.28,amt:0},this.walk.set(t.id,l));let h=Math.hypot(e-l.x,i-l.z);l.x=e,l.z=i,l.seen=o;let u=h>5e-4&&h<.5&&a==="walk";u&&(l.ph+=h/c.s*21),l.amt+=((u?1:0)-l.amt)*.2;let d=Math.sin(l.ph)*.62*l.amt,f=d,m=d*.75,v=Math.abs(Math.sin(l.ph))*.012*l.amt,g=f,p=-f,w=-m,M=m;if(a==="sit"&&(g=p=-1.45,w=M=-.35,n+=.17-Sl*c.s*.92),a==="idle"){let S=Math.sin(o*1.3+t.id)*.06;w=S,M=-S}t.role==="cleaner"&&a!=="sit"&&(M=-.25+Math.sin(o*6+t.id)*(t.state==="work"?.35:.05)),t.role==="mechanic"&&a!=="sit"&&(w=.05),t.item&&a!=="sit"&&(M=-.15),this.q.setFromAxisAngle(this.up,r),this.p.set(e,n+v,i),this.s.setScalar(c.s),this.M.compose(this.p,this.q,this.s),this.limb(this.legs,"legs",.04,Sl,g,c.pants),this.limb(this.legs,"legs",-.04,Sl,p,c.pants),this.push(this.hips,"hips",this.M,c.pants),this.push(this.torso,"torso",this.M,c.shirt),this.limb(this.arms,"arms",-Wa,Ga,w,c.skin),t.role==="mechanic"&&(this.L.makeRotationX(w),this.L.setPosition(-Wa,Ga-.2,0),this.out.multiplyMatrices(this.M,this.L),this.push(this.toolbox,"toolbox",this.out,this.white));let x=this.limb(this.arms,"arms",Wa,Ga,M,c.skin);if(t.role==="cleaner"||t.item){this.L.makeTranslation(0,-.2,0);let S=new Yt().multiplyMatrices(x,this.L);if(t.role==="cleaner")this.push(this.broom,"broom",S,this.white);else{let b=S.elements;this.p.set(b[12],b[13],b[14]),this.q.setFromAxisAngle(this.up,Math.sin(o*1.5+t.id)*.3),this.out.compose(this.p,this.q,this.s.setScalar(c.s)),this.push(this.balloon,"balloon",this.out,this.balloonC[t.id%this.balloonC.length])}}if(c.style===-2){this.push(this.mascot,"mascot",this.M,this.white);return}this.push(this.head,"head",this.M,c.skin),c.style===-1?this.push(this.hardhat,"hardhat",this.M,this.white):c.style>=0&&this.push(this.hair[c.style],"hair"+c.style,this.M,c.hair)}update(t,e){for(let i of["legs","arms","hips","torso","head","hair0","hair1","hair2","hair3","hardhat","mascot","broom","toolbox","balloon"])this.n[i]=0;for(let i of t.guests){if(i.state==="ride"||i.state==="gone")continue;let r=i.state==="in"||i.state==="out"?0:em,a=i.state==="sit"?"sit":i.state==="queue"||i.state==="shop"?"idle":"walk";this.person(i,i.x,r,i.z,i.dir||0,a,e)}for(let i of t.staff)this.person(i,i.x,em,i.z,i.dir||0,i.state==="work"?"idle":"walk",e);if(Math.floor(e)%5===0&&this.walk.size>t.guests.length+t.staff.length+50)for(let[i,r]of this.walk)e-r.seen>2&&this.walk.delete(i);let n={legs:this.legs,arms:this.arms,hips:this.hips,torso:this.torso,head:this.head,hardhat:this.hardhat,mascot:this.mascot,broom:this.broom,toolbox:this.toolbox,balloon:this.balloon};this.hair.forEach((i,r)=>n["hair"+r]=i);for(let[i,r]of Object.entries(n))r.count=this.n[i],r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}seated(t){let e=this.seat,n=0;for(let{m:i,g:r}of t){if(n>=Ha)break;let a=this.look(r);this.s.setScalar(a.s),this.L.makeScale(a.s,a.s,a.s),this.out.multiplyMatrices(i,this.L),e.pants.setMatrixAt(n,this.out),e.pants.setColorAt(n,a.pants),e.torso.setMatrixAt(n,this.out),e.torso.setColorAt(n,a.shirt),e.skin.setMatrixAt(n,this.out),e.skin.setColorAt(n,a.skin),e.hair.setMatrixAt(n,this.out),e.hair.setColorAt(n,(a.style===3||a.style===-1,a.hair)),n++}for(let i of Object.values(e))i.count=n,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}nearest(t,e,n,i=.6){let r=null,a=i*i;for(let o of[...t.staff,...t.guests]){if(o.state==="ride"||o.state==="gone")continue;let c=(o.x-e)**2+(o.z-n)**2;c<a&&(a=c,r=o)}return r}};var Er=.06;function nm(s,t){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,256,256);let i=3,r=()=>(i=i*16807%2147483647)/2147483647;for(let o=0;o<2600;o++){let c=r()<.5?255:0;n.fillStyle=`rgba(${c},${c},${c},${.03+r()*.05})`,n.fillRect(r()*256,r()*256,1+r()*3,1+r()*5)}let a=new Ai(e);return a.wrapS=a.wrapT=er,a.repeat.set(t,t),a.colorSpace=$e,a.anisotropy=4,a}function tM(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d");t.fillStyle="#c9ad84",t.fillRect(0,0,128,128);let e=["#ead3ad","#e2c79c","#f0dcba","#dcc093"];for(let i=0;i<4;i++)for(let r=-1;r<3;r++){let a=i%2?21:0;t.fillStyle=e[(i*3+r+4)%e.length],t.fillRect(r*43+a+2,i*32+2,39,28)}let n=new Ai(s);return n.colorSpace=$e,n.anisotropy=4,n}var El=class{constructor(t,e="auto"){this.canvas=t,this.renderer=new gl({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.type=Sc,this.scene=new Kr,this.scene.background=new Pt(10475519),this.scene.fog=new Jr(10475519,70,150),this.camera=new hn(40,1,.3,400),this.target=new P(le.x+.5,0,le.z-8),this.yaw=0,this.pitch=.92,this.dist=26;let n=new va(14676479,6127429,1.15);this.scene.add(n),this.sun=new ba(16774368,1.9),this.sun.shadow.camera.left=-28,this.sun.shadow.camera.right=28,this.sun.shadow.camera.top=28,this.sun.shadow.camera.bottom=-28,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=120,this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02,this.scene.add(this.sun,this.sun.target),this.buildLand(),this.people=new wl(this.scene),this.views=new Map,this.layer=new he,this.scene.add(this.layer),this.dirtLayer=new he,this.scene.add(this.dirtLayer),this.ghost=new he,this.scene.add(this.ghost),this.marks=this.tileMarks(),this.scene.add(this.marks),this.end=tm(),this.end.visible=!1,this.scene.add(this.end),this.sel=new _e(new oi(.45,.04,6,32),new un({color:16765286})),this.sel.rotation.x=Math.PI/2,this.sel.visible=!1,this.scene.add(this.sel),this.grid=this.gridLines(),this.grid.visible=!1,this.scene.add(this.grid),this.ray=new Sa,this.plane=new kn(new P(0,1,0),0),this.seen={land:-1,objects:-1,dirt:-1},this.jets=[],this.setQuality(e),this.resize()}setQuality(t){this.quality=t;let e=matchMedia("(pointer: coarse)").matches,n=t==="auto"?e?"medium":"high":t;this.level=n;let i=window.devicePixelRatio||1;this.renderer.setPixelRatio(Math.min(i,n==="high"?2:n==="medium"?1.6:1));let r=n!=="low";if(this.renderer.shadowMap.enabled=r,this.sun.castShadow=r,this.sun.shadow.mapSize.set(n==="high"?2048:1024,n==="high"?2048:1024),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.people)for(let a of[...this.people.all,...Object.values(this.people.seat)])a.castShadow=n==="high";this.scene.traverse(a=>{a.material&&(a.material.needsUpdate=!0)}),this.resize()}resize(){let t=this.canvas.clientWidth||innerWidth,e=this.canvas.clientHeight||innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t<e?52:40,this.camera.updateProjectionMatrix()}buildLand(){let t=new _e(new zn(208,208),new Mn({map:nm("#6aa84f",52)}));t.rotation.x=-Math.PI/2,t.position.set(48/2,-.02,48/2),t.receiveShadow=!0,this.scene.add(t);let e=new _e(new zn(48,48),new Mn({map:nm("#86c45e",12)}));e.rotation.x=-Math.PI/2,e.position.set(48/2,0,48/2),e.receiveShadow=!0,this.scene.add(e);let n=le.x+.5,i=[rt(208,.02,3,5198937,{x:48/2,y:0,z:48+6.5})];for(let x=-70;x<118;x+=3)i.push(rt(1.4,.022,.12,16315628,{x,y:.001,z:48+6.5}));i.push(rt(6,.024,4.8,15258542,{x:n,y:.001,z:48+2.5}));for(let x=0;x<7;x++)i.push(rt(.12,.026,4.8,14047834,{x:n-2.7+x*.9,y:.002,z:48+2.5}));for(let x of[-1,1]){let S=n+x*9.5;i.push(rt(12,.02,4.4,6120040,{x:S,y:.001,z:48+2.6}));for(let b=0;b<=12;b++)i.push(rt(.05,.023,1.6,16315628,{x:S-6+b,y:.002,z:48+1.4}),rt(.05,.023,1.6,16315628,{x:S-6+b,y:.002,z:48+3.8}))}let r=ve(It(i),Bp);r.castShadow=!1,this.scene.add(r);let a=11,o=()=>(a=a*16807%2147483647)/2147483647,c=[],l=[...Sr,16777215,2830134,10134702];for(let x of[-1,1])for(let S of[48+1.4,48+3.8])for(let b=0;b<12;b++){if(o()<.3)continue;let A=Xp(l[Math.floor(o()*l.length)]);A.applyMatrix4(new Yt().compose(new P(n+x*9.5-5.5+b,0,S),new Be().setFromAxisAngle(new P(0,1,0),Math.PI/2+(o()-.5)*.1),new P(1,1,1))),c.push(A)}this.scene.add(ve(It(c)));let h=[],u=(x,S,b)=>h.push(b?Qt(.06,.06,.62,R.red,{x,y:.31,z:S},8):rt(.05,.42,.05,R.white,{x,y:.21,z:S}),...b?[At(.07,R.yellow,{x,y:.66,z:S},8,6)]:[]);for(let x=0;x<=48;x++){let S=x%4===0;u(x,0,S),u(0,x,S),u(48,x,S),Math.abs(x-n)>2.2&&u(x,48,S)}h.push(rt(48,.05,.035,R.white,{x:48/2,y:.34,z:0}),rt(48,.05,.035,R.white,{x:48/2,y:.16,z:0}));for(let x of[0,48])h.push(rt(.035,.05,48,R.white,{x,y:.34,z:48/2}),rt(.035,.05,48,R.white,{x,y:.16,z:48/2}));let d=n-2.2,f=n+2.2;for(let[x,S]of[[0,d],[f,48]])h.push(rt(S-x,.05,.035,R.white,{x:(x+S)/2,y:.34,z:48}),rt(S-x,.05,.035,R.white,{x:(x+S)/2,y:.16,z:48}));let m=ve(It(h));m.castShadow=!1,this.scene.add(m);let v=qp("\u05E9\u05D5\u05E1\u05D8\u05E8 \u05E4\u05D0\u05E8\u05E7");v.position.set(le.x+.5,0,48+.1),v.traverse(x=>{x.isMesh&&(x.castShadow=!0)}),this.scene.add(v),a=7;let g={oak:[],pine:[]};for(let x=0;x<420;x++){let S=o()*Math.PI*2,b=48/2+3+o()*38,A=48/2+Math.cos(S)*b*1.05,_=48/2+Math.sin(S)*b*1.05;A>-2&&A<50&&_>-2&&_<50||_>51&&_<58||g[o()<.5?"oak":"pine"].push([A,_,.9+o()*1.1,o()*6])}let p=new Yt,w=new Be,M=new P(0,1,0);for(let[x,S]of Object.entries(g)){let b=new vn(Ou(x),As,S.length);S.forEach(([A,_,E,I],L)=>{w.setFromAxisAngle(M,I),p.compose(new P(A,0,_),w,new P(E,E,E)),b.setMatrixAt(L,p)}),b.castShadow=!1,this.scene.add(b)}}gridLines(){let t=[];for(let n=0;n<=48;n++)t.push(n,.012,0,n,.012,48,0,.012,n,48,.012,n);let e=new Ce;return e.setAttribute("position",new se(t,3)),new ia(e,new dr({color:3104030,transparent:!0,opacity:.22}))}tileMarks(){let t=new zn(.94,.94);t.rotateX(-Math.PI/2);let e=new vn(t,new un({transparent:!0,opacity:.45,depthWrite:!1}),400);return e.count=0,e.frustumCulled=!1,e.renderOrder=2,e.setColorAt(0,new Pt(1,1,1)),e}sync(t){this.P!==t&&(this.clearViews(),this.P=t,this.seen={land:-1,objects:-1,dirt:-1}),(this.seen.land!==t.rev.land||this.seen.objects!==t.rev.objects)&&(this.buildLayer(t),this.seen.land=t.rev.land),this.seen.objects!==t.rev.objects&&(this.syncObjects(t),this.seen.objects=t.rev.objects),this.seen.dirt!==t.rev.dirt&&(this.buildDirt(t),this.seen.dirt=t.rev.dirt)}clearViews(){for(let t of this.views.values())this.scene.remove(t.group);this.views.clear()}buildLayer(t){var w;for(let M of[...this.layer.children])this.layer.remove(M),M.geometry&&M.userData.own&&M.geometry.dispose();this.jets=[];let e=new Yt,n=new Be,i=new P(0,1,0),r=new P(1,1,1),a=new P,o=[];for(let M=0;M<48*48;M++)t.path[M]&&o.push(M);let c=new xn(1,Er,1);c.translate(0,Er/2,0),this.paver||(this.paver=tM());let l=new vn(c,new Mn({color:16777215,map:this.paver}),Math.max(1,o.length)),h=new Pt(16777215),u=new Pt(16051423),d=new Pt;o.forEach((M,x)=>{e.makeTranslation(Ie(M)+.5,0,Pe(M)+.5),l.setMatrixAt(x,e),d.copy((Ie(M)+Pe(M))%2?h:u),l.setColorAt(x,d)}),l.count=o.length,l.receiveShadow=!0,l.userData.own=!0,this.layer.add(l);let f=[];for(let M of o){let x=Ie(M),S=Pe(M);Un.forEach(([b,A],_)=>{let E=x+b,I=S+A;Xe(E,I)&&t.path[re(E,I)]||x===le.x&&S===le.z&&_===2||f.push([x+.5+b*.47,S+.5+A*.47,_%2])})}let m=new xn(1,.1,.06);m.translate(0,.05,0);let v=new vn(m,new Mn({color:11901555}),Math.max(1,f.length));f.forEach(([M,x,S],b)=>{n.setFromAxisAngle(i,S?Math.PI/2:0),e.compose(a.set(M,0,x),n,r),v.setMatrixAt(b,e)}),v.count=f.length,v.receiveShadow=!0,v.userData.own=!0,this.layer.add(v);let g={bench:[],bin:[],lamp:[]};for(let M of o){let x=Ka[t.addon[M]];if(!x)continue;let S=Ie(M),b=Pe(M),A=1;for(let L=0;L<4;L++){let[N,V]=Un[L];if(!Xe(S+N,b+V)||!t.path[re(S+N,b+V)]){A=L;break}}let[_,E]=Un[A],I=x==="lamp"?.42:.36;g[x].push([S+.5+_*I+(x==="bin"?E*.3:0),b+.5+E*I+(x==="bin"?_*.3:0),Math.atan2(-_,-E)])}for(let[M,x]of Object.entries(g)){if(!x.length)continue;let S=new vn(Wp(M),As,x.length);x.forEach(([b,A,_],E)=>{n.setFromAxisAngle(i,_),e.compose(a.set(b,Er,A),n,r),S.setMatrixAt(E,e)}),S.castShadow=!0,S.receiveShadow=!0,this.layer.add(S)}let p={};for(let M of t.objects.values())M.type==="scenery"&&(p[w=M.kind]||(p[w]=[])).push(M);for(let[M,x]of Object.entries(p)){let S=new vn(this.sceneryGeo(M),As,x.length);x.forEach((b,A)=>{let _=.9+b.id*37%20/100;if(n.setFromAxisAngle(i,M==="fountain"||M==="flowers"?0:b.id*1.3%6.28),e.compose(a.set(b.x+b.w/2,0,b.z+b.d/2),n,M==="fountain"||M==="flowers"?r:new P(_,_,_)),S.setMatrixAt(A,e),M==="fountain"){let E=new _e(new nn(.12,1,8,1,!0),Gp);E.position.set(b.x+1,.7,b.z+1),E.userData.own=!0,this.layer.add(E),this.jets.push(E)}}),S.castShadow=!0,S.receiveShadow=!0,this.layer.add(S)}}sceneryGeo(t){var e;return this.sgeo||(this.sgeo={}),(e=this.sgeo)[t]||(e[t]=Ou(t))}buildDirt(t){for(let h of[...this.dirtLayer.children])this.dirtLayer.remove(h);let e=[],n=[];for(let h=0;h<48*48;h++)if(t.path[h]){for(let u=0;u<Math.min(4,t.dirt[h]);u++)e.push([h,u]);t.vomit[h]&&n.push(h)}let i=new Yt,r=new Be,a=new P(0,1,0),o=new P,c=new P(1,1,1),l=(h,u,d)=>(h*9301+u*49297+d*233)%233280/233280;if(e.length){let h=new xn(.1,.015,.07),u=new vn(h,new Mn({color:16777215}),e.length),d=[16777215,15087942,16765286,10134702].map(f=>new Pt(f));e.forEach(([f,m],v)=>{r.setFromAxisAngle(a,l(f,m,1)*6.28),i.compose(o.set(Ie(f)+.15+l(f,m,2)*.7,Er+.008,Pe(f)+.15+l(f,m,3)*.7),r,c),u.setMatrixAt(v,i),u.setColorAt(v,d[(f+m)%4])}),this.dirtLayer.add(u)}if(n.length){let h=new He(.16,.16,.012,7),u=new vn(h,new Mn({color:11056426}),n.length);n.forEach((d,f)=>{i.compose(o.set(Ie(d)+.3+l(d,0,4)*.4,Er+.008,Pe(d)+.3+l(d,0,5)*.4),r.identity(),new P(1,1,.7+l(d,1,6)*.5)),u.setMatrixAt(f,i)}),this.dirtLayer.add(u)}}syncObjects(t){for(let[e,n]of this.views)t.objects.has(e)||(this.scene.remove(n.group),this.views.delete(e));for(let e of t.objects.values()){if(e.type==="scenery")continue;let n=this.views.get(e.id);if(e.type==="coaster"){let i=e.pieces.length+":"+(e.tested?1:0)+":"+e.pieces.at(-1).t;if(n&&n.key!==i&&(this.scene.remove(n.group),n=null),!n){let r=new he;r.add(Qp(e,(o,c)=>Xe(o,c)&&t.path[re(o,c)]));let a=new vl(e);r.add(a.group),n={group:r,train:a,key:i,coaster:!0},this.views.set(e.id,n),this.scene.add(r)}continue}if(!n){let i=e.type==="ride"?Nu(e.kind):e.type==="booth"?Fu():Uu(e.kind);i.group.position.set(e.x+e.w/2,0,e.z+e.d/2),i.group.rotation.y=-e.rot*Math.PI/2,i.group.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),n={group:i.group,model:i},this.views.set(e.id,n),this.scene.add(i.group)}if(e.type==="shop"){let i=t.access.get(e.id)||[];if(i.length){let r=i[0],a=Ie(r)-e.x,o=Pe(r)-e.z;n.group.rotation.y=Math.atan2(a,o)}}if(e.type==="booth"){let i=t.access.get(e.id)||[],r=0,a=0;for(let o of i)r+=Ie(o)+.5-(e.x+e.w/2),a+=Pe(o)+.5-(e.z+e.d/2);n.group.rotation.y=e.rot%2?r>=0?Math.PI/2:-Math.PI/2:a>=0?0:Math.PI}e.queue&&(e.broken&&!n.warn&&(n.warn=Hp("\u26A0\uFE0F",.7),n.warn.position.y=(Fi[e.kind]?.h||6)*.25+1.4,n.group.add(n.warn)),!e.broken&&n.warn&&(n.group.remove(n.warn),n.warn=null))}}showTiles(t){let e=new Yt,n=new Pt,i=Math.min(400,t.length);for(let r=0;r<i;r++){let a=t[r];e.makeTranslation(a.x+.5,(a.y||0)+.075,a.z+.5),this.marks.setMatrixAt(r,e),this.marks.setColorAt(r,n.set(a.ok?4906624:16731486))}this.marks.count=i,this.marks.instanceMatrix.needsUpdate=!0,this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0)}clearGhost(){this.ghost.clear(),this.ghostKey=null,this.marks.count=0}ghostModel(t,e,n,i,r,a,o,c){let l=e+t+o;if(this.ghostKey!==l){this.ghost.clear(),this.ghostKey=l;let u;e==="ride"?u=Nu(t).group:e==="shop"?u=Uu(t).group:e==="booth"?u=Fu().group:u=new _e(this.sceneryGeo(t),Pu),u.traverse(d=>{d.isMesh&&(d.material=Pu,d.castShadow=!1)}),u.rotation.y=e==="booth"?o%2?Math.PI/2:0:-o*Math.PI/2,this.ghost.add(u)}this.ghost.position.set(n+r/2,0,i+a/2);let h=[];for(let u=0;u<a;u++)for(let d=0;d<r;d++)h.push({x:n+d,z:i+u,ok:c});this.showTiles(h)}showEnd(t){if(!t){this.end.visible=!1;return}let e=En(t.pieces),n=e.h*.5+zu;this.end.visible=!0,this.end.position.set(e.x+.5-je[e.d]*.5,0,e.z+.5-Qe[e.d]*.5),this.end.rotation.y=Math.atan2(je[e.d],Qe[e.d]),this.end.userData.arrow.position.y=n+.25,this.end.userData.arrow.parent.children[1].position.y=n+.25,this.end.userData.pole.scale.y=Math.max(.01,n),this.end.userData.pole.position.y=n/2}previewTrain(t,e){let n=this.views.get(t);n&&n.train&&(n.train.preview=e)}select(t){this.selected=t}updateCamera(){let t=this.target,e=Math.cos(this.pitch);this.camera.position.set(t.x+Math.sin(this.yaw)*e*this.dist,t.y+Math.sin(this.pitch)*this.dist,t.z+Math.cos(this.yaw)*e*this.dist),this.camera.lookAt(t),this.sun.position.set(t.x-18,34,t.z+12),this.sun.target.position.copy(t);let n=Math.min(40,12+this.dist*.8),i=this.sun.shadow.camera;i.right!==n&&(i.left=-n,i.right=n,i.top=n,i.bottom=-n,i.updateProjectionMatrix())}clampTarget(){this.target.x=Math.max(-6,Math.min(54,this.target.x)),this.target.z=Math.max(-6,Math.min(56,this.target.z)),this.dist=Math.max(6,Math.min(70,this.dist)),this.pitch=Math.max(.45,Math.min(1.35,this.pitch))}groundAt(t,e,n=0){let i=this.canvas.getBoundingClientRect(),r=new ot((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1);this.ray.setFromCamera(r,this.camera),this.plane.constant=-n;let a=new P;return this.ray.ray.intersectPlane(this.plane,a)?a:null}pickCoaster(t,e){let n=this.canvas.getBoundingClientRect(),i=new ot((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.ray.setFromCamera(i,this.camera);let r=[];for(let[o,c]of this.views)c.coaster&&c.group.traverse(l=>{l.isMesh&&(l.userData.cid=o,r.push(l))});let a=this.ray.intersectObjects(r,!1)[0];return a?a.object.userData.cid:0}frame(t,e,n){this.sync(t);for(let[o,c]of this.views){let l=t.objects.get(o);l&&(c.train?c.train.update(l,n):c.model.animate(l,n,e),c.warn&&(c.warn.position.y+=Math.sin(n*4)*.002))}for(let o of this.jets){let c=.85+Math.sin(n*5+o.position.x)*.15;o.scale.set(1,c,1),o.position.y=.85+c*.4}this.people.update(t,n);let i=[];for(let[o,c]of this.views){let l=t.objects.get(o);if(!l||!l.riders||l.phase!=="run")continue;let h=c.train?c.train.seats:c.model.seats;if(!h)continue;let u=Math.min(h.length,l.riders.length);for(let d=0;d<u;d++){let f=t.guestById(l.riders[d]);f&&(h[d].updateWorldMatrix(!0,!1),i.push({m:h[d].matrixWorld,g:f}))}}this.people.seated(i);let r=Math.floor(n*2.4)%2===0;Lu.color.setHex(r?16774850:14263866),Du.color.setHex(r?14263866:16774850);let a=this.selected;if(a&&a.kind==="person"){let o=t.guests.find(c=>c.id===a.id)||t.staff.find(c=>c.id===a.id);o&&o.state!=="ride"&&o.state!=="gone"?(this.sel.visible=!0,this.sel.scale.setScalar(.6),this.sel.position.set(o.x,Er+.02,o.z)):this.sel.visible=!1}else if(a&&a.kind==="object"){let o=t.objects.get(a.id);if(o&&o.type!=="coaster")this.sel.visible=!0,this.sel.scale.setScalar(Math.max(o.w,o.d)*1.25),this.sel.position.set(o.x+o.w/2,.05,o.z+o.d/2);else if(o){let c=o.pieces[1];this.sel.visible=!0,this.sel.scale.setScalar(2.4),this.sel.position.set(c.x+.5+je[c.d]*.5,.05,c.z+.5+Qe[c.d]*.5)}else this.sel.visible=!1}else this.sel.visible=!1;this.sel.visible&&(this.sel.rotation.z=n),this.updateCamera(),this.renderer.render(this.scene,this.camera)}};var Tl=class{constructor(t,e,n){this.c=t,this.w=e,this.h=n,this.pts=new Map,this.paint=!1,this.gesture=null,t.addEventListener("pointerdown",i=>this.down(i)),addEventListener("pointermove",i=>this.move(i)),addEventListener("pointerup",i=>this.up(i)),addEventListener("pointercancel",i=>this.up(i,!0)),t.addEventListener("wheel",i=>{i.preventDefault(),this.w.dist*=Math.exp(i.deltaY*.0012),this.w.clampTarget()},{passive:!1}),t.addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("keydown",i=>this.key(i)),addEventListener("keyup",i=>this.keys.delete(i.code)),this.keys=new Set}down(t){this.c.setPointerCapture?.(t.pointerId);let e={x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,t:performance.now(),type:t.pointerType,btn:t.button,moved:0};this.pts.set(t.pointerId,e),this.pts.size===1?(t.pointerType!=="mouse"||t.button===0)&&this.h.paints()&&(this.paint=!0,this.h.paintStart(t.clientX,t.clientY)):this.pts.size===2&&(this.paint&&(this.paint=!1,this.h.paintCancel()),this.gesture=this.twoState())}twoState(){let[t,e]=[...this.pts.values()];return{mx:(t.x+e.x)/2,my:(t.y+e.y)/2,d:Math.hypot(t.x-e.x,t.y-e.y),ang:Math.atan2(e.y-t.y,e.x-t.x)}}grab(t,e,n,i){this.h.moved?.();let r=this.w.groundAt(t,e),a=this.w.groundAt(n,i);!r||!a||(this.w.target.x+=r.x-a.x,this.w.target.z+=r.z-a.z,this.w.clampTarget(),this.w.updateCamera())}move(t){let e=this.pts.get(t.pointerId);if(!e){t.pointerType==="mouse"&&t.target===this.c&&this.h.hover(t.clientX,t.clientY);return}let n=e.x,i=e.y;if(e.x=t.clientX,e.y=t.clientY,e.moved=Math.max(e.moved,Math.hypot(e.x-e.sx,e.y-e.sy)),this.pts.size===2){let r=this.twoState(),a=this.gesture;if(a){r.d>10&&a.d>10&&(this.w.dist*=a.d/r.d);let o=r.ang-a.ang;o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),this.w.yaw+=o,this.w.clampTarget(),this.w.updateCamera(),this.grab(a.mx,a.my,r.mx,r.my)}this.gesture=r;return}if(this.paint){this.h.paintMove(t.clientX,t.clientY);return}if(e.type==="mouse"&&(e.btn===2||e.btn===1)){this.w.yaw-=(e.x-n)*.008,this.w.pitch+=(e.y-i)*.004,this.w.clampTarget();return}e.moved>6&&this.grab(n,i,e.x,e.y),e.type==="mouse"&&this.h.hover(t.clientX,t.clientY)}up(t,e){let n=this.pts.get(t.pointerId);if(n){if(this.pts.delete(t.pointerId),this.pts.size<2&&(this.gesture=null),this.paint&&this.pts.size===0){this.paint=!1,e?this.h.paintCancel():this.h.paintEnd(n.moved<8?{x:t.clientX,y:t.clientY}:null);return}!e&&n.moved<8&&performance.now()-n.t<600&&(n.type!=="mouse"||n.btn===0)&&this.pts.size===0&&this.h.tap(t.clientX,t.clientY,n.type)}}key(t){if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"))return;this.keys.add(t.code);let e=t.code;e==="KeyQ"?this.w.yaw+=Math.PI/4:e==="KeyE"?this.w.yaw-=Math.PI/4:e==="KeyR"?this.h.rotate():e==="Escape"?this.h.escape():e==="Space"?(t.preventDefault(),this.h.togglePause()):e==="Digit1"?this.h.speed(1):e==="Digit2"?this.h.speed(2):e==="Digit3"?this.h.speed(4):e==="Equal"||e==="NumpadAdd"?this.w.dist*=.85:(e==="Minus"||e==="NumpadSubtract")&&(this.w.dist*=1.18),this.w.clampTarget()}step(t){let e=0,n=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),!e&&!n)return;let i=this.w.dist*.9*t,r=this.w.yaw,a=new P(-Math.sin(r),0,-Math.cos(r)),o=new P(Math.cos(r),0,-Math.sin(r));this.w.target.addScaledVector(a,-n*i).addScaledVector(o,e*i),this.w.clampTarget()}};var te=s=>document.getElementById(s),de=s=>(s<0?"\u2212":"")+"\u20AA"+Math.abs(Math.round(s)).toLocaleString("he-IL"),eM=s=>Math.round(s)+"%",Ge=s=>`<span class="num">${s}</span>`,Ln=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),im=new Set(["expensive","scary","queue-long","broken","no-food","no-drink","no-toilet","no-bench","sick","dirty","nothing","lost","poor","leave-unhappy","too-intense","entry-expensive","tired"]),nM=[{k:"booth",ic:"\u{1F39F}\uFE0F",he:"\u05E7\u05D5\u05E4\u05D4",c:["#ffe08a","#ff8a3d"]},{k:"path",ic:"\u{1F6E4}\uFE0F",he:"\u05E9\u05D1\u05D9\u05DC",c:["#f6dcb0","#c9975a"]},{k:"coaster",ic:"\u{1F3A2}",he:"\u05E8\u05DB\u05D1\u05EA \u05D4\u05E8\u05D9\u05DD",c:["#ff8a96","#ef3b4a"]},{k:"rides",ic:"\u{1F3A0}",he:"\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD",c:["#ffa3c4","#ff4f8b"]},{k:"shops",ic:"\u{1F354}",he:"\u05D3\u05D5\u05DB\u05E0\u05D9\u05DD",c:["#ffbf8a","#ff8a3d"]},{k:"scenery",ic:"\u{1F333}",he:"\u05E0\u05D5\u05D9",c:["#86e8ad","#22b05e"]},{k:"addons",ic:"\u{1FA91}",he:"\u05DC\u05E9\u05D1\u05D9\u05DC",c:["#93ecd9","#19c3a3"]},{k:"staff",ic:"\u{1F477}",he:"\u05E6\u05D5\u05D5\u05EA",c:["#9cc9ff","#2b8cff"]},{k:"finance",ic:"\u{1F4B0}",he:"\u05DB\u05E1\u05E4\u05D9\u05DD",c:["#b0f3c4","#22b05e"]},{k:"park",ic:"\u{1F3DE}\uFE0F",he:"\u05D4\u05E4\u05D0\u05E8\u05E7",c:["#cdb3ff","#8f5fd8"]},{k:"demolish",ic:"\u{1F69C}",he:"\u05D4\u05E8\u05D9\u05E1\u05D4",c:["#ffe08a","#e0a100"]},{k:"menu",ic:"\u2630",he:"\u05EA\u05E4\u05E8\u05D9\u05D8",c:["#c9c4e4","#6a6585"]}],sm={rides:["#ffd1e1","#ff8fb4"],shops:["#ffe2c7","#ffb37a"],scenery:["#cdf5dc","#7ddca2"],addons:["#d1f7ef","#7fe0cc"],coaster:["#ffd0d4","#ff8a96"],staff:["#d6e8ff","#8fc0ff"]},Wu=s=>s?`style="--c1:${s[0]};--c2:${s[1]}"`:"",Tr=(s,t)=>t==="int"?s<2?"\u05E8\u05D2\u05D5\u05E2":s<4.5?"\u05E0\u05E2\u05D9\u05DD":s<7?"\u05D7\u05D6\u05E7":s<9?"\u05D7\u05D6\u05E7 \u05DE\u05D0\u05D5\u05D3":"\u05E7\u05D9\u05E6\u05D5\u05E0\u05D9":t==="nau"?s<2?"\u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05E8":s<4?"\u05E7\u05E6\u05EA \u05DE\u05E1\u05D7\u05E8\u05E8":s<6.5?"\u05DE\u05E1\u05D7\u05E8\u05E8":"\u05DE\u05D1\u05D7\u05D9\u05DC":s<2.5?"\u05DE\u05E9\u05E2\u05DE\u05DD":s<4?"\u05E0\u05D7\u05DE\u05D3":s<5.5?"\u05DE\u05D4\u05E0\u05D4":s<7?"\u05DE\u05E8\u05D2\u05E9":"\u05DE\u05D3\u05D4\u05D9\u05DD",fi=(s,t,e="")=>`<span class="meter ${e}"><i style="width:${Math.max(2,Math.min(100,s/t*100))}%"></i></span>`,Al=class{constructor(t){this.g=t,this.tool=null,this.panel=null,this.paint=null,this.toolbar(),te("sh-x").onclick=()=>this.closePanel(),te("sh-body").addEventListener("click",e=>this.act(e)),te("act").addEventListener("click",e=>this.act(e)),te("coaster").addEventListener("click",e=>this.act(e)),te("modal").addEventListener("click",e=>this.act(e)),te("tut").addEventListener("click",e=>this.act(e)),te("hint").addEventListener("click",()=>this.hintTap&&this.hintTap());for(let e of document.querySelectorAll("#speed button"))e.onclick=()=>this.g.setSpeed(+e.dataset.s);this.slow=0,this.panelT=0,this.hintT=0}get P(){return this.g.park}get W(){return this.g.world}hud(){let t=this.P,e=t.date();te("cash").textContent=de(t.cash),te("c-cash").classList.toggle("neg",t.cash<0),te("guests").textContent=t.guests.length,te("rating").textContent=Math.round(t.rating),te("date").textContent=`${e.day} \u05D1${e.monthName}, \u05E9\u05E0\u05D4 ${e.year}`;for(let n of document.querySelectorAll("#speed button"))n.classList.toggle("on",+n.dataset.s===this.g.speed)}toolbar(){te("tools").innerHTML=nM.map(t=>`<button class="tool" data-tool="${t.k}" ${Wu(t.c)}><span class="ic">${t.ic}</span>${t.he}</button>`).join(""),te("tools").onclick=t=>{let e=t.target.closest("[data-tool]");e&&this.toolButton(e.dataset.tool)}}markTool(t){for(let e of document.querySelectorAll(".tool"))e.classList.toggle("on",e.dataset.tool===t)}toolButton(t){if(this.openCat===t&&!te("sheet").classList.contains("hidden")){this.closePanel();return}if(this.setTool(null),this.openCat=t,t==="path"){this.setTool({k:"path"}),this.markTool("path");return}if(t==="booth"){if(this.P.booth()){this.markTool("booth"),this.openPanel({k:"booth"});return}this.startBooth();return}if(t==="demolish"){this.setTool({k:"demolish"}),this.markTool("demolish");return}this.markTool(t),this.openPanel({k:t==="rides"||t==="shops"||t==="scenery"||t==="addons"||t==="coaster"?"pick":t,cat:t})}startBooth(){let t=this.P.boothSpot();if(this.setTool({k:"place",type:"booth",kind:"booth",rot:t?t.rot:0}),this.markTool("booth"),t){let e=gi(as,t.rot);this.placeAt({x:t.x+Math.floor((e.w-1)/2),z:t.z+Math.floor((e.d-1)/2)}),this.camGoal={x:t.x+1,z:t.z+3,h:0}}}setTool(t){this.tool=t,this.paint=null,this.W.clearGhost(),this.W.grid.visible=!!t&&t.k!=="coaster",t||this.markTool(null),(!t||t.k!=="coaster")&&(this.W.showEnd(null),te("coaster").classList.add("hidden"),te("bar").classList.remove("hidden")),t&&t.k==="coaster"&&(this.closePanel(!0),te("bar").classList.add("hidden"),this.coasterBar()),this.actBar()}paints(){let t=this.tool;return!!t&&(t.k==="path"||t.k==="scenery"||t.k==="addon")}tileAt(t,e){let n=this.W.groundAt(t,e);return n?{x:Math.floor(n.x),z:Math.floor(n.z),px:n.x,pz:n.z}:null}actBar(){let t=this.tool,e=te("act");if(!t||t.k==="coaster"){e.classList.add("hidden");return}let n="",i="",r=matchMedia("(pointer: coarse)").matches;if(t.k==="path")n=`${r?"\u05D2\u05E8\u05D5\u05E8 \u05D1\u05D0\u05E6\u05D1\u05E2":"\u05D2\u05E8\u05D5\u05E8 \u05E2\u05DD \u05D4\u05E2\u05DB\u05D1\u05E8"} \u05DB\u05D3\u05D9 \u05DC\u05E1\u05DC\u05D5\u05DC \xB7 ${de(Is)} \u05DC\u05D0\u05E8\u05D9\u05D7${r?'<br><span style="font-weight:500;color:#5d6b82">\u05E9\u05EA\u05D9 \u05D0\u05E6\u05D1\u05E2\u05D5\u05EA \u05DC\u05D4\u05D6\u05D6\u05EA \u05D4\u05DE\u05E4\u05D4</span>':""}`;else if(t.k==="demolish")n="\u05D4\u05E7\u05E9 \u05E2\u05DC \u05DE\u05D4 \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05E8\u05D5\u05E1";else if(t.k==="scenery"||t.k==="addon"){let a=t.k==="scenery"?Oi[t.kind]:pn[t.kind];n=`${a.icon} ${a.he} \xB7 ${de(a.cost)} \xB7 ${t.k==="addon"?"\u05E2\u05DC \u05E9\u05D1\u05D9\u05DC":"\u05D4\u05E7\u05E9 \u05D0\u05D5 \u05D2\u05E8\u05D5\u05E8"}`}else if(t.k==="place"||t.k==="station"){let a=t.k==="station"?{icon:"\u{1F3A2}",he:"\u05EA\u05D7\u05E0\u05D4",cost:this.P.coasterBaseCost()}:this.P.defOf(t.type,t.kind);n=`${a.icon} ${a.he} \xB7 ${de(a.cost)}`,i+='<button class="btn" data-act="rotate">\u21BB \u05E1\u05D5\u05D1\u05D1</button>',t.at?i+=`<button class="btn go" data-act="build" ${t.ok?"":"disabled"}>\u2713 \u05D1\u05E0\u05D4</button>`:n+=`<br><span style="font-weight:500;color:#6a6585">${t.k==="station"?"\u05D4\u05E7\u05E9 \u05D0\u05D9\u05E4\u05D4 \u05DC\u05E9\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05D7\u05E0\u05D4":"\u05D4\u05E7\u05E9 \u05DC\u05D9\u05D3 \u05E9\u05D1\u05D9\u05DC"}</span>`,t.type==="booth"&&t.at&&t.ok&&(n+='<br><span style="font-weight:500;color:#6a6585">\u05DC\u05D9\u05D3 \u05D4\u05DB\u05E0\u05D9\u05E1\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E7\u05D9\u05E9 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05E8</span>')}e.innerHTML=`<div class="lbl">${n}</div>${i}<button class="btn x2" data-act="tool-off">\u2715</button>`,e.classList.remove("hidden")}footAt(t,e,n){return{x:t.x-Math.floor((e-1)/2),z:t.z-Math.floor((n-1)/2)}}placeAt(t){let e=this.tool;if(e.k==="station"){let n=e.rot,i=t.x-je[n],r=t.z-Qe[n];e.at={x:i,z:r};let a=this.P.coasterReason(i,r,n);e.ok=!a,e.why=a;let o=Ns(i,r,n).map(c=>({x:c.x,z:c.z,ok:e.ok}));this.W.clearGhost(),this.W.showTiles(o),this.W.showEnd({pieces:Ns(i,r,n)})}else{let n=this.P.defOf(e.type,e.kind),{w:i,d:r}=gi(n,e.rot),a=this.footAt(t,i,r);e.at=a;let o=this.P.placeReason(e.type,e.kind,a.x,a.z,e.rot);e.ok=!o,e.why=o,this.W.ghostModel(e.kind,e.type,a.x,a.z,i,r,e.rot,e.ok)}this.actBar()}build(){let t=this.tool;if(!t||!t.at)return;if(t.k==="station"){let i=this.P.startCoaster(t.at.x,t.at.z,t.rot);if(i.error)return this.toast(i.error,"bad");this.setTool({k:"coaster",id:i.id}),this.focusEnd();return}let e=this.P.place(t.type,t.kind,t.at.x,t.at.z,t.rot);if(e.error)return this.toast(e.error,"bad");let n=this.P.objects.get(e.id);if(t.type==="booth"){this.setTool(null),this.P.derive(),this.P.isOpen()||this.toast("\u05D4\u05E7\u05D5\u05E4\u05D4 \u05DC\u05D0 \u05E0\u05D5\u05D2\u05E2\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC. \u05D1\u05DC\u05D9 \u05D6\u05D4 \u05D4\u05E4\u05D0\u05E8\u05E7 \u05DC\u05D0 \u05E0\u05E4\u05EA\u05D7","warn"),this.openPanel({k:"booth",first:!0});return}t.type!=="scenery"&&!(this.P.access.get(e.id)||[]).length&&!this.P.needDerive?this.toast(`${n.name} \u05DC\u05D0 \u05E0\u05D5\u05D2\u05E2 \u05D1\u05E9\u05D1\u05D9\u05DC. \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DC\u05D0 \u05D9\u05D2\u05D9\u05E2\u05D5 \u05D0\u05DC\u05D9\u05D5`,"warn"):t.type!=="scenery"&&this.toast(`${n.name} \u05E0\u05D1\u05E0\u05D4`,"good"),t.at=null,this.W.clearGhost(),this.actBar()}rotate(){let t=this.tool;if(!(!t||t.k!=="place"&&t.k!=="station")&&(t.rot=(t.rot+1)%4,t.at))if(t.k==="station")this.placeAt({x:t.at.x+je[(t.rot+3)%4],z:t.at.z+Qe[(t.rot+3)%4]});else{let e=this.P.defOf(t.type,t.kind),n=gi(e,(t.rot+3)%4);this.placeAt({x:t.at.x+Math.floor((n.w-1)/2),z:t.at.z+Math.floor((n.d-1)/2)})}}hover(t,e){let n=this.tool;if(!n||n.k!=="place"&&n.k!=="station"){if(n&&(n.k==="path"||n.k==="scenery"||n.k==="addon")&&!this.paint){let r=this.tileAt(t,e);r&&this.W.showTiles([{...r,ok:this.canPaint(r)}])}return}let i=this.tileAt(t,e);i&&this.placeAt(i)}tap(t,e,n){let i=this.tool;if(i&&(i.k==="place"||i.k==="station")){let r=this.tileAt(t,e);if(!r)return;n==="mouse"?(this.placeAt(r),i.ok?this.build():i.why&&this.toast(i.why,"bad")):this.placeAt(r);return}if(i&&i.k==="demolish")return this.demolishAt(t,e);i&&i.k==="coaster"||this.select(t,e)}canPaint(t){let e=this.tool,n=this.P;return e.k==="path"?!n.pathReason(t.x,t.z):e.k==="scenery"?!n.placeReason("scenery",e.kind,t.x,t.z,0):e.k==="addon"?n.path[re(t.x,t.z)]===1&&n.addon[re(t.x,t.z)]!==pn[e.kind].id:!1}paintStart(t,e){let n=this.tileAt(t,e);n&&(this.paint={start:n,tiles:[n],seen:new Set([n.x+","+n.z])},this.paintShow())}paintMove(t,e){let n=this.paint,i=this.tileAt(t,e);if(!(!n||!i)){if(this.tool.k==="path"){let r=i.x-n.start.x,a=i.z-n.start.z,o=[];if(Math.abs(r)>=Math.abs(a))for(let c=0;c<=Math.abs(r);c++)o.push({x:n.start.x+Math.sign(r)*c,z:n.start.z});else for(let c=0;c<=Math.abs(a);c++)o.push({x:n.start.x,z:n.start.z+Math.sign(a)*c});n.tiles=o}else n.seen.has(i.x+","+i.z)||(n.seen.add(i.x+","+i.z),n.tiles.push(i));this.paintShow()}}paintShow(){this.W.showTiles(this.paint.tiles.map(t=>({...t,ok:this.canPaint(t)})))}paintCancel(){this.paint=null,this.W.clearGhost()}paintEnd(){let t=this.paint,e=this.tool;if(this.paint=null,this.W.clearGhost(),!t||!e)return;let n=0,i=null,r=0,a=this.P.cash;for(let o of t.tiles){let c;e.k==="path"?c=this.P.placePath(o.x,o.z):e.k==="scenery"?(c=this.P.place("scenery",e.kind,o.x,o.z,0),c=c.error||null):c=this.P.placeAddon(e.kind,o.x,o.z),c?i=i||c:n++}r=a-this.P.cash,i&&(!n||t.tiles.length===1)?this.toast(i,"bad"):n>1&&this.toast(`\u05E0\u05D1\u05E0\u05D5 ${n} \xB7 ${de(r)}`,"good")}demolishAt(t,e){let n=this.P,i=this.W.pickCoaster(t,e),r=this.tileAt(t,e),a=i?n.objects.get(i):r?n.objAt(r.x,r.z):null;if(a){if(a.type==="scenery"){n.demolish(a.id);return}return this.confirm(`\u05DC\u05D4\u05E8\u05D5\u05E1 \u05D0\u05EA ${Ln(a.name)}?`,`\u05D9\u05D7\u05D6\u05E8\u05D5 ${de(n.demolishValue(a.id))}${a.type==="booth"?". \u05D1\u05DC\u05D9 \u05E7\u05D5\u05E4\u05D4 \u05D4\u05E4\u05D0\u05E8\u05E7 \u05E0\u05E1\u05D2\u05E8 \u05DC\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD":""}`,"demolish-yes",a.id)}if(!r)return;let o=re(r.x,r.z);if(n.addon[o]){n.removeAddon(r.x,r.z);return}if(n.path[o]){let c=n.removePath(r.x,r.z);c&&this.toast(c,"bad")}}select(t,e){let n=this.P,i=this.tileAt(t,e);if(i){let o=this.W.people.nearest(n,i.px,i.pz,.5);if(o)return o.role?this.openPanel({k:"worker",id:o.id}):this.openPanel({k:"guest",id:o.id})}let r=this.W.pickCoaster(t,e);if(r)return this.openPanel({k:"obj",id:r});let a=i&&n.objAt(i.x,i.z);if(a&&a.type==="booth")return this.openPanel({k:"booth"});if(a&&a.type!=="scenery")return this.openPanel({k:"obj",id:a.id});this.closePanel()}escape(){if(this.tool&&this.tool.k==="coaster")return this.finishBuilder();if(this.tool)return this.setTool(null);this.closePanel()}openPanel(t){this.panel=t,te("tut").classList.add("hidden"),te("sheet").classList.remove("hidden"),te("sheet").classList.toggle("wide",t.k!=="pick"),this.W.select(t.k==="guest"||t.k==="worker"?{kind:"person",id:t.id}:t.k==="obj"?{kind:"object",id:t.id}:null),this.renderPanel(!0)}closePanel(t){this.panel=null,this.openCat=null,te("sheet").classList.add("hidden"),this.hintT=1,this.W.select(null),!t&&!this.tool&&this.markTool(null)}renderPanel(t){let e=this.panel;if(!e)return;let n=te("sh-body"),i=n.scrollTop,r="",a="",o=this.P;switch(e.k){case"pick":[r,a]=this.pickPanel(e.cat);break;case"obj":{let c=o.objects.get(e.id);if(!c)return this.closePanel();[r,a]=c.type==="shop"?this.shopPanel(c):this.ridePanel(c);break}case"guest":{let c=o.guests.find(l=>l.id===e.id);if(!c)return this.closePanel();[r,a]=this.guestPanel(c);break}case"worker":{let c=o.staff.find(l=>l.id===e.id);if(!c)return this.closePanel();[r,a]=this.workerPanel(c);break}case"staff":[r,a]=this.staffPanel();break;case"finance":[r,a]=this.financePanel();break;case"park":[r,a]=this.parkPanel();break;case"menu":[r,a]=this.menuPanel();break;case"test":[r,a]=this.testPanel(e.id);break;case"booth":[r,a]=this.boothPanel(e.first);break;default:return}te("sh-title").textContent=r,n.innerHTML=a,t?n.scrollTop=0:n.scrollTop=i}pickPanel(t){let e=this.P,n=Wu(sm[t]),i=(o,c,l,h,u,d,f,m=!0,v=!1)=>`<button class="card ${m?"":"off"} ${v?"on":""}" data-act="${o}" data-arg="${c}" ${n}><span class="ic">${l}</span><span class="nm">${h}</span>${u?`<span class="pr num">${u}</span>`:""}${d?`<span class="ds">${d}</span>`:""}${f?`<span class="st">${f}</span>`:""}</button>`,r='<div class="cards">',a="";if(t==="rides"){a="\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD";for(let o of sd){let c=Fi[o],l=gi(c,0);r+=i("pick-ride",o,c.icon,c.he,de(c.cost),c.desc,`\u05E8\u05D9\u05D2\u05D5\u05E9 ${c.exc} \xB7 \u05E2\u05D5\u05E6\u05DE\u05D4 ${c.int} \xB7 ${l.w}\xD7${l.d}`,e.cash>=c.cost)}}else if(t==="shops"){a="\u05D3\u05D5\u05DB\u05E0\u05D9\u05DD \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD";for(let o of rd){let c=yn[o];r+=i("pick-shop",o,c.icon,c.he,de(c.cost),c.price?`\u05DE\u05D7\u05D9\u05E8 \u05DE\u05D5\u05DE\u05DC\u05E5 ${de(c.price)}`:"\u05D7\u05D9\u05E0\u05DD \u05DC\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD","",e.cash>=c.cost)}}else if(t==="scenery"){a="\u05E0\u05D5\u05D9";for(let o of ad){let c=Oi[o];r+=i("pick-scenery",o,c.icon,c.he,de(c.cost),"\u05D9\u05D5\u05E4\u05D9 "+c.beauty,"",e.cash>=c.cost)}}else if(t==="addons"){a="\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05E9\u05D1\u05D9\u05DC";for(let o of Object.keys(pn)){let c=pn[o];r+=i("pick-addon",o,c.icon,c.he,de(c.cost),c.desc,"",e.cash>=c.cost)}}else if(t==="coaster"){a="\u05E8\u05DB\u05D1\u05D5\u05EA \u05D4\u05E8\u05D9\u05DD",r+=i("new-coaster","","\u{1F3A2}","\u05E8\u05DB\u05D1\u05EA \u05D4\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D4","\u05DE\u05BE"+de(e.coasterBaseCost()),"\u05DE\u05E6\u05D9\u05D1\u05D9\u05DD \u05EA\u05D7\u05E0\u05D4 \u05D5\u05DE\u05D7\u05D1\u05E8\u05D9\u05DD \u05D7\u05DC\u05E7\u05D9 \u05DE\u05E1\u05D9\u05DC\u05D4 \u05E2\u05D3 \u05E9\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05D0\u05DC\u05D9\u05D4","",e.cash>=e.coasterBaseCost());for(let o of e.objects.values())o.type==="coaster"&&(r+=i("open-obj",o.id,"\u{1F3A2}",Ln(o.name),"",o.tested?`\u05E8\u05D9\u05D2\u05D5\u05E9 ${o.exc.toFixed(1)} \xB7 \u05E2\u05D5\u05E6\u05DE\u05D4 ${o.int.toFixed(1)}`:"\u05E2\u05D5\u05D3 \u05D1\u05D1\u05E0\u05D9\u05D9\u05D4",o.open?"\u05E4\u05EA\u05D5\u05D7\u05D4":"\u05E1\u05D2\u05D5\u05E8\u05D4"))}return[a,r+"</div>"]}priceRow(t,e){return`<div class="row"><span class="k">\u05DE\u05D7\u05D9\u05E8 ${t.type==="shop"?"\u05DC\u05DE\u05D5\u05E6\u05E8":"\u05DC\u05DB\u05E8\u05D8\u05D9\u05E1"}<br><span style="font-size:12px">\u05E9\u05D5\u05D5\u05D4 \u05DC\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D1\u05E2\u05E8\u05DA ${de(e)}</span></span>
      <div class="stepper"><button data-act="price" data-arg="-0.5">\u2212</button><span class="val num">\u20AA${t.price%1?t.price.toFixed(2):t.price}</span><button data-act="price" data-arg="0.5">+</button></div></div>`}ridePanel(t){let e=this.P,n=t.type==="coaster",r=`<div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">${t.broken?'<span class="pill bad">\u05DE\u05E7\u05D5\u05DC\u05E7\u05DC</span>':n&&t.editing?'<span class="pill mid">\u05D1\u05D1\u05E0\u05D9\u05D9\u05D4</span>':t.open?'<span class="pill">\u05E4\u05EA\u05D5\u05D7</span>':'<span class="pill gray">\u05E1\u05D2\u05D5\u05E8</span>'}<span class="note">${t.queue.length} \u05D1\u05EA\u05D5\u05E8 \xB7 ${t.riders.length} \u05E2\u05DC \u05D4\u05DE\u05EA\u05E7\u05DF</span></div>`;if((!n||t.tested)&&(r+=this.priceRow(t,e.rideValue(t)*(e.entryFee,1)),r+=`<div class="row"><span class="k">\u05E8\u05D9\u05D2\u05D5\u05E9</span>${fi(t.exc,10)}<span class="v">${t.exc.toFixed(1)} \xB7 ${Tr(t.exc)}</span></div>`,r+=`<div class="row"><span class="k">\u05E2\u05D5\u05E6\u05DE\u05D4</span>${fi(t.int,10,t.int>8?"bad":t.int>6?"warn":"")}<span class="v">${t.int.toFixed(1)} \xB7 ${Tr(t.int,"int")}</span></div>`,r+=`<div class="row"><span class="k">\u05E1\u05D7\u05E8\u05D7\u05D5\u05E8\u05EA</span>${fi(t.nau,10,t.nau>6?"bad":t.nau>4?"warn":"")}<span class="v">${t.nau.toFixed(1)} \xB7 ${Tr(t.nau,"nau")}</span></div>`),n&&t.stats){let o=t.stats;r+='<div class="sec">\u05D4\u05E0\u05E1\u05D9\u05E2\u05D4</div>',r+=`<div class="row"><span class="k">\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05DE\u05E8\u05D1\u05D9\u05EA</span><span class="v">${Ge(Math.round(o.maxSpeed))} \u05E7\u05DE\u05F4\u05E9</span></div>`,r+=`<div class="row"><span class="k">\u05D2\u05D5\u05D1\u05D4 \xB7 \u05D4\u05E0\u05E4\u05D9\u05DC\u05D4 \u05D4\u05D2\u05D3\u05D5\u05DC\u05D4</span><span class="v">${Ge(Math.round(o.maxHeight))} \u05DE\u05F3 \xB7 ${Ge(Math.round(o.maxDrop))} \u05DE\u05F3</span></div>`,r+=`<div class="row"><span class="k">\u05DB\u05D5\u05D7\u05D5\u05EA G</span><span class="v">${Ge(o.maxG.toFixed(1)+" / "+o.minG.toFixed(1))} \xB7 \u05E6\u05D3 ${Ge(o.maxLat.toFixed(1))}</span></div>`,r+=`<div class="row"><span class="k">\u05E8\u05D9\u05D7\u05D5\u05E3 \xB7 \u05D4\u05D9\u05E4\u05D5\u05DB\u05D9\u05DD</span><span class="v">${Ge(o.airtime.toFixed(1))} \u05E9\u05F3 \xB7 ${Ge(o.inversions)}</span></div>`,r+=`<div class="row"><span class="k">\u05D0\u05D5\u05E8\u05DA \xB7 \u05DE\u05E9\u05DA</span><span class="v">${Ge(Math.round(o.length))} \u05DE\u05F3 \xB7 ${Ge(Math.round(o.duration))} \u05E9\u05F3</span></div>`}if(n&&!t.tested){let o=ti(t.pieces);r+=`<div class="note" style="margin:8px 0">${t.fail?"\u26A0\uFE0F "+Ln(t.fail.reason):o?"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05E1\u05D2\u05D5\u05E8. \u05E6\u05E8\u05D9\u05DA \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05D5\u05EA\u05D5 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05E4\u05D5\u05EA\u05D7\u05D9\u05DD.":"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05E2\u05D5\u05D3 \u05DC\u05D0 \u05D7\u05D5\u05D6\u05E8 \u05DC\u05EA\u05D7\u05E0\u05D4."}</div>`}return r+='<div class="sec">\u05D4\u05D7\u05D5\u05D3\u05E9</div>',r+=`<div class="row"><span class="k">\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9 \xB7 \u05E1\u05D4\u05F4\u05DB</span><span class="v">${Ge(de(t.monthIncome))} \xB7 ${Ge(de(t.totalIncome))}</span></div>`,r+=`<div class="row"><span class="k">\u05E8\u05D5\u05DB\u05D1\u05D9\u05DD \u05E2\u05D3 \u05D4\u05D9\u05D5\u05DD</span><span class="v num">${t.totalRiders.toLocaleString("he-IL")}</span></div>`,r+=`<div class="row"><span class="k">\u05D0\u05DE\u05D9\u05E0\u05D5\u05EA</span>${fi(t.rel*100,100,t.rel<.75?"bad":t.rel<.88?"warn":"")}<span class="v num">${eM(t.rel*100)}</span></div>`,(e.access.get(t.id)||[]).length||(r+=`<div class="note" style="color:#b91c1c;margin-top:6px">\u26A0\uFE0F ${n?"\u05D4\u05EA\u05D7\u05E0\u05D4":"\u05D4\u05DE\u05EA\u05E7\u05DF"} \u05DC\u05D0 \u05E0\u05D5\u05D2\u05E2 \u05D1\u05E9\u05D1\u05D9\u05DC. \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D4\u05D2\u05D9\u05E2.</div>`),r+='<div class="btns">',n&&(r+=`<button class="btn main" data-act="edit-coaster" data-arg="${t.id}">\u270F\uFE0F ${t.tested?"\u05E2\u05E8\u05D5\u05DA \u05DE\u05E1\u05DC\u05D5\u05DC":"\u05D4\u05DE\u05E9\u05DA \u05DC\u05D1\u05E0\u05D5\u05EA"}</button>`,t.tested&&(r+=`<button class="btn" data-act="ride-view" data-arg="${t.id}">\u{1F440} \u05E6\u05E4\u05D4 \u05D1\u05E0\u05E1\u05D9\u05E2\u05D4</button>`)),(!n||t.tested)&&(r+=`<button class="btn ${t.open?"":"go"}" data-act="toggle-open" data-arg="${t.id}">${t.open?"\u05E1\u05D2\u05D5\u05E8":"\u05E4\u05EA\u05D7 \u05DC\u05E7\u05D4\u05DC"}</button>`),r+=`<button class="btn danger" data-act="demolish" data-arg="${t.id}">\u{1F69C} \u05D4\u05E8\u05D5\u05E1 (${de(e.demolishValue(t.id))})</button></div>`,[t.name,r]}shopPanel(t){let e=this.P,n=yn[t.kind],i=`<div style="margin-bottom:4px">${t.open?'<span class="pill">\u05E4\u05EA\u05D5\u05D7</span>':'<span class="pill gray">\u05E1\u05D2\u05D5\u05E8</span>'}</div>`;return n.kind!=="toilet"&&(i+=this.priceRow(t,e.shopValue(t))),i+=`<div class="row"><span class="k">${n.kind==="toilet"?"\u05D1\u05D9\u05E7\u05D5\u05E8\u05D9\u05DD":"\u05DE\u05DB\u05D9\u05E8\u05D5\u05EA"} \u05E2\u05D3 \u05D4\u05D9\u05D5\u05DD</span><span class="v num">${t.sales.toLocaleString("he-IL")}</span></div>`,n.kind!=="toilet"&&(i+=`<div class="row"><span class="k">\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9 \xB7 \u05E1\u05D4\u05F4\u05DB</span><span class="v">${Ge(de(t.monthIncome))} \xB7 ${Ge(de(t.totalIncome))}</span></div>`,i+=`<div class="row"><span class="k">\u05E2\u05DC\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8</span><span class="v num">\u20AA${n.unit.toFixed(2)}</span></div>`),(e.access.get(t.id)||[]).length||(i+='<div class="note" style="color:#b91c1c;margin-top:6px">\u26A0\uFE0F \u05D4\u05D3\u05D5\u05DB\u05DF \u05DC\u05D0 \u05E0\u05D5\u05D2\u05E2 \u05D1\u05E9\u05D1\u05D9\u05DC.</div>'),i+=`<div class="btns"><button class="btn" data-act="toggle-open" data-arg="${t.id}">${t.open?"\u05E1\u05D2\u05D5\u05E8":"\u05E4\u05EA\u05D7"}</button><button class="btn danger" data-act="demolish" data-arg="${t.id}">\u{1F69C} \u05D4\u05E8\u05D5\u05E1 (${de(e.demolishValue(t.id))})</button></div>`,[t.name,i]}guestPanel(t){let e=this.P,n=(a,o,c)=>`<div class="row"><span class="k">${a}</span>${fi(o,100,c?o>80?"bad":o>60?"warn":"":o<20?"bad":o<40?"warn":"")}<span class="v num">${Math.round(o)}</span></div>`,r=`<div class="note" style="margin-bottom:6px">${t.state==="ride"?`\u05E2\u05DC ${Ln(e.objects.get(t.at)?.name||"\u05DE\u05EA\u05E7\u05DF")}`:t.state==="queue"?`\u05D1\u05EA\u05D5\u05E8 \u05DC${Ln(e.objects.get(t.at)?.name||"\u05DE\u05EA\u05E7\u05DF")}`:t.state==="sit"?"\u05D9\u05D5\u05E9\u05D1 \u05E2\u05DC \u05E1\u05E4\u05E1\u05DC":t.state==="shop"?"\u05E7\u05D5\u05E0\u05D4 \u05DE\u05E9\u05D4\u05D5":t.leaving?"\u05D1\u05D3\u05E8\u05DA \u05D4\u05D1\u05D9\u05EA\u05D4":"\u05DE\u05E1\u05EA\u05D5\u05D1\u05D1 \u05D1\u05E4\u05D0\u05E8\u05E7"} \xB7 ${Math.max(1,Math.round(t.timeIn/120*30))} \u05D9\u05DE\u05D9\u05DD \u05D1\u05E4\u05D0\u05E8\u05E7 \xB7 ${t.rides} \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD</div>`;r+=n("\u{1F60A} \u05E9\u05DE\u05D7\u05D4",t.happy)+n("\u{1F4B5} \u05DB\u05E1\u05E3",Math.min(100,t.money),!1).replace(/>\d+</,`>${de(t.money)}<`),r+=n("\u{1F354} \u05E8\u05E2\u05D1",t.hunger,!0)+n("\u{1F964} \u05E6\u05DE\u05D0",t.thirst,!0)+n("\u{1F6BB} \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",t.toilet,!0)+n("\u26A1 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4",t.energy)+n("\u{1F922} \u05D1\u05D7\u05D9\u05DC\u05D4",t.nausea,!0),r+=`<div class="row"><span class="k">\u05D0\u05D5\u05D4\u05D1 \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05D1\u05E2\u05D5\u05E6\u05DE\u05D4 \u05E2\u05D3</span><span class="v num">${t.maxInt.toFixed(1)}</span></div>`,r+='<div class="sec">\u05DE\u05D4 \u05E2\u05D5\u05D1\u05E8 \u05DC\u05D5 \u05D1\u05E8\u05D0\u05E9</div>',t.thoughts.length||(r+='<div class="note">\u05E9\u05D5\u05DD \u05D3\u05D1\u05E8 \u05DE\u05D9\u05D5\u05D7\u05D3</div>');for(let a of t.thoughts)r+=`<div class="thought ${Xl.has(a.k)?"good":im.has(a.k)?"bad":""}">\u{1F4AD} ${Ln(ql(e,a))}</div>`;return[t.name,r]}workerPanel(t){let e=os[t.role],n=t.role==="cleaner"?"\u05E0\u05D9\u05E7\u05D4":t.role==="mechanic"?"\u05EA\u05D9\u05E7\u05DF \u05D5\u05D1\u05D3\u05E7":"\u05E9\u05D9\u05DE\u05D7",i=`<div class="note">${e.desc}</div>`;return i+=`<div class="row"><span class="k">\u05DE\u05E9\u05DB\u05D5\u05E8\u05EA</span><span class="v">${Ge(de(e.wage))} \u05DC\u05D7\u05D5\u05D3\u05E9</span></div>`,t.role!=="entertainer"&&(i+=`<div class="row"><span class="k">${n}</span><span class="v num">${t.done}</span></div>`),i+=`<div class="row"><span class="k">\u05E2\u05DB\u05E9\u05D9\u05D5</span><span class="v">${t.state==="work"?t.task?.k==="clean"?"\u05DE\u05E0\u05E7\u05D4":t.task?.k==="fix"?"\u05DE\u05EA\u05E7\u05DF":"\u05D1\u05D5\u05D3\u05E7 \u05DE\u05EA\u05E7\u05DF":t.task?"\u05D1\u05D3\u05E8\u05DA \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4":"\u05DE\u05E1\u05D9\u05D9\u05E8"}</span></div>`,i+=`<div class="btns"><button class="btn danger" data-act="fire" data-arg="${t.id}">\u05E4\u05D8\u05E8</button></div>`,[`${e.icon} ${t.name}`,i]}staffPanel(){let t=this.P,e='<div class="cards">';for(let n of od){let i=os[n],r=t.staff.filter(a=>a.role===n).length;e+=`<button class="card" data-act="hire" data-arg="${n}" ${Wu(sm.staff)}><span class="ic">${i.icon}</span><span class="nm">\u05E9\u05DB\u05D5\u05E8 ${i.he}</span><span class="pr">${Ge(de(i.wage))} \u05DC\u05D7\u05D5\u05D3\u05E9</span><span class="ds">${i.desc}</span><span class="st">\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5: ${r}</span></button>`}e+="</div>",e+=`<div class="sec">\u05D4\u05E6\u05D5\u05D5\u05EA (${t.staff.length}) \xB7 ${de(t.wages())} \u05DC\u05D7\u05D5\u05D3\u05E9</div>`;for(let n of t.staff)e+=`<div class="row" data-act="open-worker" data-arg="${n.id}" style="cursor:pointer"><span>${os[n.role].icon}</span><span class="k">${Ln(n.name)}</span><span class="v num">${n.role==="entertainer"?"":n.done}</span></div>`;return t.staff.length||(e+='<div class="note">\u05E2\u05D5\u05D3 \u05D0\u05D9\u05DF \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD. \u05D1\u05DC\u05D9 \u05DE\u05E0\u05E7\u05D9\u05DD \u05D4\u05E9\u05D1\u05D9\u05DC\u05D9\u05DD \u05DE\u05EA\u05DC\u05DB\u05DC\u05DB\u05D9\u05DD, \u05D5\u05D1\u05DC\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D0\u05D9 \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05DC\u05E7\u05DC\u05D9\u05DD \u05D5\u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05DE\u05E7\u05D5\u05DC\u05E7\u05DC\u05D9\u05DD.</div>'),["\u05E6\u05D5\u05D5\u05EA",e]}financePanel(){let t=this.P,e=t.ledger,n=Object.values(e.in).reduce((l,h)=>l+h,0),i=Object.values(e.out).reduce((l,h)=>l+h,0),r=`<div class="row"><span class="k">\u05D1\u05E7\u05D5\u05E4\u05D4</span><span class="v num" style="color:${t.cash<0?"#dc2626":"#16a34a"}">${de(t.cash)}</span></div>`;r+=`<div class="row"><span class="k">\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 (\u05E8\u05D9\u05D1\u05D9\u05EA ${t.loan?"1%":"0%"} \u05DC\u05D7\u05D5\u05D3\u05E9)</span><div class="stepper"><button data-act="repay">\u2212</button><span class="val num">${de(t.loan)}</span><button data-act="borrow">+</button></div></div>`,r+=`<div class="note">\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DC\u05D5\u05D5\u05EA \u05E2\u05D3 ${de(Ja)}, \u05D1\u05D0\u05DC\u05E3 \u05E9\u05E7\u05DC \u05DB\u05DC \u05E4\u05E2\u05DD.</div>`,r+='<div class="sec">\u05D4\u05D7\u05D5\u05D3\u05E9 \u05E2\u05D3 \u05E2\u05DB\u05E9\u05D9\u05D5</div>';let a=(l,h,u=1)=>Math.round(h)?`<div class="row"><span class="k">${l}</span><span class="v num" style="color:${u>0?"#16a34a":"#b91c1c"}">${u>0?"+":"\u2212"}${de(h)}</span></div>`:"";r+=a("\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05E4\u05D0\u05E8\u05E7",e.in.entry)+a("\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05DC\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD",e.in.rides)+a("\u05D0\u05D5\u05DB\u05DC \u05D5\u05E9\u05EA\u05D9\u05D9\u05D4",e.in.food)+a("\u05DE\u05EA\u05E0\u05D5\u05EA",e.in.shops),r+=a("\u05D1\u05E0\u05D9\u05D9\u05D4",e.out.build,-1)+a("\u05EA\u05D7\u05D6\u05D5\u05E7\u05EA \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD",e.out.upkeep,-1)+a("\u05DE\u05E9\u05DB\u05D5\u05E8\u05D5\u05EA",e.out.wages,-1)+a("\u05E8\u05D9\u05D1\u05D9\u05EA",e.out.interest,-1)+a("\u05E4\u05E8\u05E1\u05D5\u05DD",e.out.marketing,-1)+a("\u05E1\u05D7\u05D5\u05E8\u05D4 \u05DC\u05D3\u05D5\u05DB\u05E0\u05D9\u05DD",e.out.stock,-1),r+=`<div class="row"><span class="k"><b>\u05E8\u05D5\u05D5\u05D7 \u05D4\u05D7\u05D5\u05D3\u05E9</b></span><span class="v num" style="color:${n-i>=0?"#16a34a":"#b91c1c"}">${de(n-i)}</span></div>`;let o=t.history.slice(-12);if(o.length){let l=Math.max(1,...o.map(h=>Math.abs(h.net)));r+=`<div class="sec">\u05E8\u05D5\u05D5\u05D7 \u05D1\u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD</div><div class="bars">${o.map(h=>`<div title="${de(h.net)}" style="height:${Math.abs(h.net)/l*100}%;background:${h.net>=0?"#16a34a":"#dc2626"}"></div>`).join("")}</div>`}let c=t.t<t.marketingUntil;return r+='<div class="sec">\u05E4\u05E8\u05E1\u05D5\u05DD</div><div class="note">\u05E7\u05DE\u05E4\u05D9\u05D9\u05DF \u05DE\u05D1\u05D9\u05D0 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DC\u05D7\u05D5\u05D3\u05E9 \u05E9\u05DC\u05DD.</div>',r+=`<div class="btns"><button class="btn ${c?"":"main"}" data-act="marketing" ${c?"disabled":""}>\u{1F4E3} ${c?"\u05E7\u05DE\u05E4\u05D9\u05D9\u05DF \u05E4\u05E2\u05D9\u05DC":"\u05E7\u05DE\u05E4\u05D9\u05D9\u05DF \u05E4\u05E8\u05E1\u05D5\u05DD \xB7 "+de(rs.cost)}</button></div>`,["\u05DB\u05E1\u05E4\u05D9\u05DD",r]}parkPanel(){let t=this.P,e=t.goalDate(),n=`<div class="row"><span class="k">\u05D3\u05D9\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D0\u05E8\u05E7</span>${fi(t.rating,1e3,t.rating<400?"bad":t.rating<600?"warn":"")}<span class="v num">${Math.round(t.rating)}</span></div>`;n+=`<div class="row"><span class="k">\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \xB7 \u05DB\u05DE\u05D4 \u05D4\u05E4\u05D0\u05E8\u05E7 \u05DE\u05D5\u05E9\u05DA</span><span class="v num">${t.guests.length} / ${t.capacity()}</span></div>`,n+=`<div class="row"><span class="k">\u05E9\u05DE\u05D7\u05D4 \u05DE\u05DE\u05D5\u05E6\u05E2\u05EA</span>${fi(t.avgHappy||0,100)}<span class="v num">${Math.round(t.avgHappy||0)}</span></div>`,n+=`<div class="row"><span class="k">\u05D0\u05E8\u05D9\u05D7\u05D9\u05DD \u05DE\u05DC\u05D5\u05DB\u05DC\u05DB\u05D9\u05DD</span><span class="v num">${t.dirtyTiles||0}</span></div>`,n+=`<div class="row"><span class="k">\u05D3\u05DE\u05D9 \u05DB\u05E0\u05D9\u05E1\u05D4<br><span style="font-size:12px">\u05D4\u05E4\u05D0\u05E8\u05E7 \u05E9\u05D5\u05D5\u05D4 \u05D1\u05E2\u05E8\u05DA ${de(t.entryWorth())}</span></span><div class="stepper"><button data-act="fee" data-arg="-1">\u2212</button><span class="val num">${de(t.entryFee)}</span><button data-act="fee" data-arg="1">+</button></div></div>`,n+='<div class="note">\u05DB\u05E9\u05D2\u05D5\u05D1\u05D9\u05DD \u05DB\u05E0\u05D9\u05E1\u05D4, \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E9\u05DC\u05DD \u05E4\u05D7\u05D5\u05EA \u05E2\u05DC \u05DB\u05DC \u05DE\u05EA\u05E7\u05DF.</div>',n+=`<div class="sec">\u05D4\u05D9\u05E2\u05D3</div><div class="note">${Nn.guests} \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D5\u05D3\u05D9\u05E8\u05D5\u05D2 ${Nn.rating} \u05E2\u05D3 ${e.monthName}, \u05E9\u05E0\u05D4 ${e.year}. ${t.won?'<b style="color:#16a34a">\u05D4\u05D5\u05E9\u05D2! \u{1F3C6}</b>':`\u05E2\u05DB\u05E9\u05D9\u05D5: ${t.guests.length} \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD, \u05D3\u05D9\u05E8\u05D5\u05D2 ${Math.round(t.rating)}.`}</div>`,n+='<div class="sec">\u05DE\u05D4 \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D7\u05D5\u05E9\u05D1\u05D9\u05DD</div>';let i=t.thoughtSummary||[];i.length||(n+='<div class="note">\u05E2\u05D5\u05D3 \u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD.</div>');for(let r of i)n+=`<div class="thought ${Xl.has(r.k)?"good":im.has(r.k)?"bad":""}"><span class="n num">${r.n}</span>${Ln(ql(t,r))}</div>`;return[t.name,n]}menuPanel(){let t=this.W.quality,e='<div class="btns"><button class="btn main" data-act="save">\u{1F4BE} \u05E9\u05DE\u05D5\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5</button><button class="btn danger" data-act="new-park">\u05E4\u05D0\u05E8\u05E7 \u05D7\u05D3\u05E9</button></div>';return e+=`<div class="sec">\u05D2\u05E8\u05E4\u05D9\u05E7\u05D4</div><div class="btns">${[["auto","\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9"],["high","\u05D2\u05D1\u05D5\u05D4\u05D4"],["medium","\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05EA"],["low","\u05E0\u05DE\u05D5\u05DB\u05D4"]].map(([n,i])=>`<button class="btn ${t===n?"main":""}" data-act="quality" data-arg="${n}">${i}</button>`).join("")}</div>`,e+=`<div class="sec">\u05D0\u05D9\u05DA \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD</div><div class="note">
      \u2022 \u05D0\u05E6\u05D1\u05E2 \u05D0\u05D7\u05EA \u05DE\u05D6\u05D9\u05D6\u05D4 \u05D0\u05EA \u05D4\u05DE\u05E4\u05D4, \u05E9\u05EA\u05D9 \u05D0\u05E6\u05D1\u05E2\u05D5\u05EA \u05DC\u05D6\u05D5\u05DD \u05D5\u05DC\u05E1\u05D9\u05D1\u05D5\u05D1. \u05D1\u05DE\u05D7\u05E9\u05D1: \u05D2\u05E8\u05D9\u05E8\u05D4, \u05D2\u05DC\u05D2\u05DC\u05EA, \u05D5\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D9\u05DE\u05E0\u05D9 \u05DC\u05E1\u05D9\u05D1\u05D5\u05D1.<br>
      \u2022 \u{1F6E4}\uFE0F \u05E9\u05D1\u05D9\u05DC\u05D9\u05DD: \u05D2\u05D5\u05E8\u05E8\u05D9\u05DD \u05DE\u05D4\u05DB\u05E0\u05D9\u05E1\u05D4. \u05DB\u05DC \u05DE\u05EA\u05E7\u05DF \u05D5\u05D3\u05D5\u05DB\u05DF \u05E6\u05E8\u05D9\u05DA \u05DC\u05D2\u05E2\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC.<br>
      \u2022 \u{1F3A2} \u05E8\u05DB\u05D1\u05EA \u05D4\u05E8\u05D9\u05DD: \u05DE\u05E6\u05D9\u05D1\u05D9\u05DD \u05EA\u05D7\u05E0\u05D4, \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05D7\u05DC\u05E7\u05D9\u05DD \u05E2\u05D3 \u05E9\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05D0\u05DC\u05D9\u05D4 (\u05D0\u05D5 "\u05D4\u05E9\u05DC\u05DD"), \u05D1\u05D5\u05D3\u05E7\u05D9\u05DD \u05D5\u05E4\u05D5\u05EA\u05D7\u05D9\u05DD \u05DC\u05E7\u05D4\u05DC. \u05E6\u05E8\u05D9\u05DA \u05DE\u05E2\u05DC\u05D9\u05EA \u05E9\u05E8\u05E9\u05E8\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E2\u05DC\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4.<br>
      \u2022 \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD: \u05D0\u05D5\u05E8\u05D7 \u05DC\u05D0 \u05D9\u05E9\u05DC\u05DD \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DE\u05D4 \u05E9\u05D4\u05DE\u05EA\u05E7\u05DF \u05E9\u05D5\u05D5\u05D4 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D5. \u05DE\u05EA\u05E7\u05DF \u05D9\u05E9\u05DF \u05E9\u05D5\u05D5\u05D4 \u05E4\u05D7\u05D5\u05EA.<br>
      \u2022 \u{1F9F9} \u05DE\u05E0\u05E7\u05D9\u05DD \u05E9\u05D5\u05DE\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05E9\u05D1\u05D9\u05DC\u05D9\u05DD, \u{1F527} \u05DE\u05DB\u05D5\u05E0\u05D0\u05D9\u05DD \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05EA\u05E7\u05DC\u05D5\u05EA, \u{1F921} \u05D1\u05D3\u05E8\u05E0\u05D9\u05DD \u05DE\u05E9\u05DE\u05D7\u05D9\u05DD.<br>
      \u2022 \u05D4\u05D3\u05D9\u05E8\u05D5\u05D2 \u05E2\u05D5\u05DC\u05D4 \u05DB\u05E9\u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E9\u05DE\u05D7\u05D9\u05DD, \u05D4\u05E4\u05D0\u05E8\u05E7 \u05E0\u05E7\u05D9 \u05D5\u05D9\u05E9 \u05DE\u05D4 \u05DC\u05E2\u05E9\u05D5\u05EA. \u05D3\u05D9\u05E8\u05D5\u05D2 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D1\u05D9\u05D0 \u05E2\u05D5\u05D3 \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD.<br>
      \u2022 \u05D4\u05E4\u05D0\u05E8\u05E7 \u05E0\u05E9\u05DE\u05E8 \u05DC\u05D1\u05D3 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D6\u05D4.</div>`,["\u05EA\u05E4\u05E8\u05D9\u05D8",e]}boothPanel(t){let e=this.P,n=e.booth();if(!n)return["\u05E7\u05D5\u05E4\u05D4",'<div class="note">\u05E2\u05D5\u05D3 \u05D0\u05D9\u05DF \u05E7\u05D5\u05E4\u05D4. \u05D1\u05DC\u05D9 \u05E7\u05D5\u05E4\u05D4 \u05D0\u05E3 \u05D0\u05D7\u05D3 \u05DC\u05D0 \u05E0\u05DB\u05E0\u05E1.</div><div class="btns"><button class="btn fun" data-act="booth-build">\u{1F39F}\uFE0F \u05D1\u05E0\u05D5 \u05E7\u05D5\u05E4\u05D4</button></div>'];let i="";t&&(i+='<div class="note" style="margin-bottom:8px">\u{1F389} \u05D4\u05E7\u05D5\u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7\u05D4! \u05DB\u05D0\u05DF \u05E7\u05D5\u05D1\u05E2\u05D9\u05DD \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05DB\u05D0\u05DF \u05D1\u05DB\u05DC \u05E8\u05D2\u05E2 \u05DE\u05DB\u05E4\u05EA\u05D5\u05E8 <b>\u{1F39F}\uFE0F \u05E7\u05D5\u05E4\u05D4</b>.</div>'),e.isOpen()||(i+='<div class="pill bad" style="margin-bottom:8px">\u05D4\u05E7\u05D5\u05E4\u05D4 \u05DC\u05D0 \u05E0\u05D5\u05D2\u05E2\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC, \u05D4\u05E4\u05D0\u05E8\u05E7 \u05E1\u05D2\u05D5\u05E8</div>'),i+=`<div class="ticket-hero"><span class="tk">\u{1F39F}\uFE0F</span><span class="k">\u05DB\u05E8\u05D8\u05D9\u05E1 \u05DB\u05E0\u05D9\u05E1\u05D4<small>\u05D4\u05E4\u05D0\u05E8\u05E7 \u05E9\u05D5\u05D5\u05D4 \u05D1\u05E2\u05E8\u05DA ${de(e.entryWorth())} \xB7 \u05E0\u05DE\u05DB\u05E8\u05D5 ${(n.sold||0).toLocaleString("he-IL")}</small></span>
      <div class="stepper"><button data-act="fee" data-arg="-1">\u2212</button><span class="val num">\u20AA${e.entryFee}</span><button data-act="fee" data-arg="1">+</button></div></div>`,i+=`<div class="note">${e.entryFee?"\u05E2\u05DD \u05DB\u05E0\u05D9\u05E1\u05D4 \u05D1\u05EA\u05E9\u05DC\u05D5\u05DD, \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E9\u05DC\u05DD \u05E4\u05D7\u05D5\u05EA \u05E2\u05DC \u05DB\u05DC \u05DE\u05EA\u05E7\u05DF.":"\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D7\u05D9\u05E0\u05DD: \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD \u05E8\u05E7 \u05E2\u05DC \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05D5\u05D0\u05D5\u05DB\u05DC."}</div>`;let r=(c,l,h)=>{let u=c.price>h;return`<div class="price-row"><span class="pi">${l}</span><span class="pn">${Ln(c.name)}<small class="${u?"hot":""}">${u?"\u05D9\u05E7\u05E8 \u05DE\u05D3\u05D9 \u05DC\u05E8\u05D5\u05D1 \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \xB7 ":""}\u05E9\u05D5\u05D5\u05D4 \u05D1\u05E2\u05E8\u05DA ${de(h)}</small></span>
        <div class="stepper"><button data-act="price-of" data-arg="${c.id}" data-d="-0.5">\u2212</button><span class="val num">\u20AA${c.price%1?c.price.toFixed(2):c.price}</span><button data-act="price-of" data-arg="${c.id}" data-d="0.5">+</button></div></div>`},a=e.rides().filter(c=>c.type==="ride"||c.tested);i+='<div class="sec">\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD</div>',i+=a.length?a.map(c=>r(c,c.type==="coaster"?"\u{1F3A2}":Fi[c.kind].icon,e.rideValue(c))).join(""):'<div class="note">\u05E2\u05D5\u05D3 \u05D0\u05D9\u05DF \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD.</div>';let o=e.shops().filter(c=>yn[c.kind].kind!=="toilet");return o.length&&(i+='<div class="sec">\u05D3\u05D5\u05DB\u05E0\u05D9\u05DD</div>'+o.map(c=>r(c,yn[c.kind].icon,e.shopValue(c))).join("")),i+=`<div class="btns"><button class="btn fun" data-act="auto-price">\u{1F4A1} \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05DE\u05D5\u05DE\u05DC\u05E6\u05D9\u05DD \u05DC\u05DB\u05DC \u05D4\u05E4\u05D0\u05E8\u05E7</button>${t?'<button class="btn main" data-act="close">\u05D4\u05DE\u05E9\u05DA</button>':""}</div>`,["\u{1F39F}\uFE0F \u05E7\u05D5\u05E4\u05D4",i]}testPanel(t){let e=this.P.objects.get(t);if(!e)return["",""];if(!e.tested)return["\u05D4\u05D1\u05D3\u05D9\u05E7\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4",`<div class="note" style="font-size:15px">\u26A0\uFE0F ${Ln(e.fail?.reason||"")}</div><div class="btns"><button class="btn main" data-act="close">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D1\u05E0\u05D9\u05D9\u05D4</button></div>`];let n=e.stats,i=`<div class="row"><span class="k">\u05E8\u05D9\u05D2\u05D5\u05E9</span>${fi(n.exc,10)}<span class="v">${n.exc.toFixed(1)} \xB7 ${Tr(n.exc)}</span></div>`;return i+=`<div class="row"><span class="k">\u05E2\u05D5\u05E6\u05DE\u05D4</span>${fi(n.int,10,n.int>8?"bad":n.int>6?"warn":"")}<span class="v">${n.int.toFixed(1)} \xB7 ${Tr(n.int,"int")}</span></div>`,i+=`<div class="row"><span class="k">\u05E1\u05D7\u05E8\u05D7\u05D5\u05E8\u05EA</span>${fi(n.nau,10,n.nau>6?"bad":n.nau>4?"warn":"")}<span class="v">${n.nau.toFixed(1)} \xB7 ${Tr(n.nau,"nau")}</span></div>`,i+=`<div class="row"><span class="k">\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05DE\u05E8\u05D1\u05D9\u05EA \xB7 \u05D2\u05D5\u05D1\u05D4</span><span class="v">${Ge(Math.round(n.maxSpeed))} \u05E7\u05DE\u05F4\u05E9 \xB7 ${Ge(Math.round(n.maxHeight))} \u05DE\u05F3</span></div>`,i+=`<div class="row"><span class="k">\u05DB\u05D5\u05D7\u05D5\u05EA G</span><span class="v">${Ge(n.maxG.toFixed(1)+" / "+n.minG.toFixed(1))} \xB7 \u05E6\u05D3 ${Ge(n.maxLat.toFixed(1))}</span></div>`,i+=`<div class="row"><span class="k">\u05DE\u05E9\u05DA \u05D4\u05E0\u05E1\u05D9\u05E2\u05D4</span><span class="v">${Ge(Math.round(n.duration))} \u05E9\u05F3</span></div>`,n.int>8.5?i+='<div class="note" style="color:#b91c1c">\u05D7\u05D6\u05E7 \u05DE\u05D3\u05D9 \u05DC\u05E8\u05D5\u05D1 \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D1\u05DC\u05DE\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E4\u05E0\u05D9\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05D0\u05EA \u05D4\u05E0\u05E4\u05D9\u05DC\u05D4.</div>':n.exc<4&&(i+='<div class="note">\u05E7\u05E6\u05EA \u05DE\u05E9\u05E2\u05DE\u05DD. \u05D2\u05D1\u05E2\u05D5\u05EA, \u05E0\u05E4\u05D9\u05DC\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA \u05D5\u05DC\u05D5\u05E4\u05D9\u05DD \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05E8\u05D9\u05D2\u05D5\u05E9.</div>'),i+=`<div class="btns"><button class="btn go" data-act="open-coaster" data-arg="${t}">\u2713 \u05E4\u05EA\u05D7 \u05DC\u05E7\u05D4\u05DC</button><button class="btn" data-act="close">\u05D4\u05DE\u05E9\u05DA \u05DC\u05E2\u05E8\u05D5\u05DA</button></div>`,[`${e.name}: \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D1\u05D3\u05D9\u05E7\u05D4`,i]}coasterBar(){let t=this.tool,e=this.P,n=e.objects.get(t.id);if(!n)return this.setTool(null);this.W.showEnd(ti(n.pieces)?null:n);let i=ti(n.pieces),r=En(n.pieces),a=`<div class="cb-info"><b>\u{1F3A2} ${Ln(n.name)}</b><span>${n.pieces.length} \u05D7\u05DC\u05E7\u05D9\u05DD</span><span>\u05D2\u05D5\u05D1\u05D4 <span class="num">${Math.round(r.h*.5*Ir)}</span> \u05DE\u05F3</span><span>\u05E2\u05DC\u05D5\u05EA <span class="num">${de(n.spent)}</span></span>${i?'<span class="pill">\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05E1\u05D2\u05D5\u05E8!</span>':""}</div>`;a+='<div class="cb-pieces">';for(let o of cd){let c=wn[o],l=i?"\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05E1\u05D2\u05D5\u05E8":e.pieceReason(n.id,o);a+=`<button class="pc ${l?"no":""}" data-act="piece" data-arg="${o}"><span class="ic">${c.icon}</span>${c.he}<span class="pr num">${de(c.cost+Math.max(0,r.h)*4)}</span></button>`}a+='</div><div class="cb-act">',a+='<button class="btn" data-act="unpiece">\u21A9 \u05D1\u05D8\u05DC</button>',a+=`<button class="btn" data-act="finish-track" ${i?"disabled":""}>\u{1F501} \u05D4\u05E9\u05DC\u05DD</button>`,a+=`<button class="btn ${i?"go":""}" data-act="test" ${i?"":"disabled"}>\u25B6 \u05D1\u05D3\u05D5\u05E7</button>`,a+='<button class="btn main" data-act="builder-done">\u2713 \u05E1\u05D9\u05D5\u05DD</button>',a+="</div>",te("coaster").innerHTML=a,te("coaster").classList.remove("hidden")}focusEnd(){let t=this.P.objects.get(this.tool?.id);if(!t)return;let e=En(t.pieces);this.camGoal={x:e.x+.5,z:e.z+.5+3,h:e.h*.5}}finishBuilder(){let t=this.tool?.id;this.P.editCoaster(t,!1),this.setTool(null),t&&this.openPanel({k:"obj",id:t})}act(t){let e=t.target.closest("[data-act]");if(!e||e.disabled)return;let n=e.dataset.act,i=e.dataset.arg,r=this.P,a=o=>{o&&this.toast(o,"bad")};switch(n){case"close":this.closePanel(!0);break;case"tool-off":this.setTool(null);break;case"rotate":this.rotate();break;case"build":this.build();break;case"pick-ride":this.closePanel(!0),this.setTool({k:"place",type:"ride",kind:i,rot:0}),this.markTool("rides");break;case"pick-shop":this.closePanel(!0),this.setTool({k:"place",type:"shop",kind:i,rot:0}),this.markTool("shops");break;case"pick-scenery":{let o=(Oi[i].w||1)>1;this.closePanel(!0),this.setTool(o?{k:"place",type:"scenery",kind:i,rot:0}:{k:"scenery",kind:i}),this.markTool("scenery");break}case"pick-addon":this.closePanel(!0),this.setTool({k:"addon",kind:i}),this.markTool("addons");break;case"new-coaster":this.closePanel(!0),this.setTool({k:"station",rot:0}),this.markTool("coaster");break;case"open-obj":this.openPanel({k:"obj",id:+i});break;case"open-worker":this.openPanel({k:"worker",id:+i});break;case"price":{let o=r.objects.get(this.panel.id);r.setPrice(o.id,o.price+ +i),this.renderPanel();break}case"toggle-open":{let o=r.objects.get(+i);a(r.setOpen(+i,!o.open)),this.renderPanel();break}case"demolish":{let o=r.objects.get(+i);this.confirm(`\u05DC\u05D4\u05E8\u05D5\u05E1 \u05D0\u05EA ${Ln(o.name)}?`,`\u05D9\u05D7\u05D6\u05E8\u05D5 ${de(r.demolishValue(o.id))}`,"demolish-yes",o.id);break}case"demolish-yes":a(r.demolish(+i)),this.modal(null),this.panel&&this.panel.id===+i&&this.closePanel();break;case"no":this.modal(null);break;case"edit-coaster":this.closePanel(!0),r.editCoaster(+i,!0),this.setTool({k:"coaster",id:+i}),this.focusEnd();break;case"ride-view":{this.W.previewTrain(+i,this.g.now),this.closePanel(!0);let c=r.objects.get(+i).pieces[0];this.camGoal={x:c.x+.5,z:c.z+4,h:0};break}case"piece":{let o=r.addPiece(this.tool.id,i);if(o)this.toast(o,"bad");else{this.focusEnd();let c=r.objects.get(this.tool.id);ti(c.pieces)&&this.toast("\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05E1\u05D2\u05D5\u05E8! \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D1\u05D5\u05D3\u05E7\u05D9\u05DD","good")}this.coasterBar();break}case"unpiece":a(r.removePiece(this.tool.id)),this.focusEnd(),this.coasterBar();break;case"finish-track":{let o=r.finishTrack(this.tool.id);o?this.toast(o,"bad"):this.toast("\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05D4\u05D5\u05E9\u05DC\u05DD \u05E2\u05D3 \u05D4\u05EA\u05D7\u05E0\u05D4","good"),this.coasterBar();break}case"test":{r.testCoaster(this.tool.id).ok&&this.W.previewTrain(this.tool.id,this.g.now),this.openPanel({k:"test",id:this.tool.id}),this.coasterBar();break}case"open-coaster":{r.editCoaster(+i,!1),a(r.setOpen(+i,!0)),this.setTool(null),this.toast("\u05D4\u05E8\u05DB\u05D1\u05EA \u05E4\u05EA\u05D5\u05D7\u05D4 \u05DC\u05E7\u05D4\u05DC! \u{1F3A2}","good"),this.openPanel({k:"obj",id:+i});break}case"builder-done":this.finishBuilder();break;case"hire":a(r.hire(i)),this.renderPanel();break;case"fire":a(r.fire(+i)),this.closePanel();break;case"borrow":a(r.takeLoan()),this.renderPanel();break;case"repay":a(r.repayLoan()),this.renderPanel();break;case"marketing":a(r.startMarketing()),this.renderPanel();break;case"fee":r.setEntryFee(r.entryFee+ +i),this.renderPanel();break;case"price-of":{let o=r.objects.get(+i);o&&r.setPrice(o.id,o.price+ +e.dataset.d),this.renderPanel();break}case"auto-price":{for(let o of r.rides())(o.type==="ride"||o.tested)&&r.setPrice(o.id,Math.max(1,Math.floor(r.rideValue(o)*.85*2)/2));for(let o of r.shops())yn[o.kind].kind!=="toilet"&&r.setPrice(o.id,Math.max(1,Math.floor(r.shopValue(o)*.8*2)/2));this.toast("\u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E2\u05D5\u05D3\u05DB\u05E0\u05D5","good"),this.renderPanel();break}case"booth-build":this.closePanel(!0),this.startBooth();break;case"tut-go":this.tutGo();break;case"tut-skip":this.g.settings.tutorial="done",this.g.saveSettings(),this.tutorial();break;case"save":this.g.save(),this.toast("\u05D4\u05E4\u05D0\u05E8\u05E7 \u05E0\u05E9\u05DE\u05E8","good");break;case"new-park":this.confirm("\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05E4\u05D0\u05E8\u05E7 \u05D7\u05D3\u05E9?","\u05D4\u05E4\u05D0\u05E8\u05E7 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D9\u05D9\u05DE\u05D7\u05E7","new-yes");break;case"new-yes":this.modal(null),this.closePanel(),this.setTool(null),this.g.newPark();break;case"start-new":this.modal(null),this.g.start(!0);break;case"quality":this.W.setQuality(i),this.g.saveSettings(),this.renderPanel();break;case"modal-ok":this.modal(null);break}this.hud()}toast(t,e="",n){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,n&&(i.onclick=()=>{n(),i.remove()}),te("toasts").prepend(i);te("toasts").children.length>3;)te("toasts").lastChild.remove();setTimeout(()=>i.remove(),e==="bad"?3200:4200)}modal(t){if(!t){te("modal").classList.add("hidden");return}te("modal-box").innerHTML=t,te("modal").classList.remove("hidden")}confirm(t,e,n,i=""){this.modal(`<h2>${t}</h2><div class="tag">${e}</div><button class="btn danger" data-act="${n}" data-arg="${i}">\u05DB\u05DF</button><button class="btn" data-act="no">\u05D1\u05D9\u05D8\u05D5\u05DC</button>`)}events(){let t=this.P;for(;t.events.length;){let e=t.events.shift();e.kind==="broken"?this.toast("\u26A0\uFE0F "+e.text,"bad",()=>this.openPanel({k:"obj",id:e.id})):e.kind==="fixed"?this.toast("\u{1F527} "+e.text,"good"):e.kind==="won"?this.modal(`<div class="big-ic">\u{1F3C6}</div><h2>\u05E0\u05D9\u05E6\u05D7\u05EA!</h2><div class="tag">${Ln(e.text)}</div><button class="btn main" data-act="modal-ok">\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05D1\u05E0\u05D5\u05EA</button>`):e.kind==="missed"?this.toast("\u23F0 "+e.text,"warn"):this.toast(e.text)}}tutSteps(){let t=this.P,e=0;for(let i=0;i<t.path.length;i++)e+=t.path[i];let n=t.rides().filter(i=>i.type==="ride"||i.tested).length;return[{done:!!t.booth(),ic:"\u{1F39F}\uFE0F",h:"\u05E7\u05D5\u05D3\u05DD \u05DB\u05DC \u05E7\u05D5\u05E4\u05D4",p:"\u05DE\u05E6\u05D9\u05D1\u05D9\u05DD \u05E7\u05D5\u05E4\u05D4 \u05DC\u05D9\u05D3 \u05D4\u05DB\u05E0\u05D9\u05E1\u05D4. \u05D1\u05D4 \u05E7\u05D5\u05D1\u05E2\u05D9\u05DD \u05D0\u05EA \u05DE\u05D7\u05D9\u05E8\u05D9 \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD.",btn:"\u05DC\u05D1\u05E0\u05D5\u05EA \u05E7\u05D5\u05E4\u05D4",tool:"booth"},{done:e>8,ic:"\u{1F6E4}\uFE0F",h:"\u05E1\u05D5\u05DC\u05DC\u05D9\u05DD \u05E9\u05D1\u05D9\u05DC\u05D9\u05DD",p:"\u05D2\u05D5\u05E8\u05E8\u05D9\u05DD \u05E9\u05D1\u05D9\u05DC \u05DE\u05D4\u05DB\u05E0\u05D9\u05E1\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D4. \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05D4\u05D5\u05DC\u05DB\u05D9\u05DD \u05E8\u05E7 \u05E2\u05DC \u05E9\u05D1\u05D9\u05DC\u05D9\u05DD.",btn:"\u05DC\u05E1\u05DC\u05D5\u05DC \u05E9\u05D1\u05D9\u05DC",tool:"path"},{done:n>0,ic:"\u{1F3A0}",h:"\u05DE\u05EA\u05E7\u05DF \u05E8\u05D0\u05E9\u05D5\u05DF",p:"\u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DE\u05EA\u05E7\u05DF \u05D5\u05DE\u05E6\u05D9\u05D1\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5 \u05E6\u05DE\u05D5\u05D3 \u05DC\u05E9\u05D1\u05D9\u05DC. \u05DE\u05DB\u05D0\u05DF \u05D4\u05DB\u05DC \u05DC\u05E4\u05D9 \u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD.",btn:"\u05DC\u05D1\u05D7\u05D5\u05E8 \u05DE\u05EA\u05E7\u05DF",tool:"rides"}]}tutGo(){let t=this.tutSteps().find(e=>!e.done);t&&this.toolButton(t.tool)}tutorial(){let t=this.g.settings,e=te("tut");for(let n of document.querySelectorAll(".tool.pulse"))n.classList.remove("pulse");if(t.tutorial!=="done"){let n=this.tutSteps(),i=n.findIndex(r=>!r.done);if(i<0)t.tutorial="done",this.g.saveSettings(),this.tutSeen&&this.toast("\u05D4\u05E4\u05D0\u05E8\u05E7 \u05E4\u05EA\u05D5\u05D7! \u05DE\u05DB\u05D0\u05DF \u05D4\u05DB\u05DC \u05D1\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u{1F389}","good");else{this.tutSeen=!0;let r=n[i],a=this.tool&&this.tool.k==="coaster"||!te("sheet").classList.contains("hidden")||!te("modal").classList.contains("hidden")||!te("start").classList.contains("hidden"),o=this.tool&&(r.tool==="path"&&this.tool.k==="path"||r.tool==="booth"&&this.tool.type==="booth"||r.tool==="rides"&&this.tool.type==="ride"),c=!!this.tool;o||document.querySelector(`.tool[data-tool="${r.tool}"]`)?.classList.add("pulse");let l=i+":"+(o?1:0)+(c?"s":"");a&&!o?e.classList.add("hidden"):((this.tutKey!==l||e.classList.contains("hidden"))&&(this.tutKey=l,e.innerHTML=`<div class="awn"></div><div class="in"><span class="big">${r.ic}</span><div class="tx"><div class="st">\u05E9\u05DC\u05D1 ${i+1} \u05DE\u05EA\u05D5\u05DA 3</div><h3>${r.h}</h3>${c?"":`<p>${r.p}</p>`}</div></div>
              <div class="row2">${o?"":`<button class="btn fun" data-act="tut-go" style="flex:0 0 auto">${r.btn}</button>`}<button class="skip" data-act="tut-skip">\u05D3\u05DC\u05D2</button>
              <span class="dots">${[0,1,2].map(h=>`<i class="${h===i?"on":""}"></i>`).join("")}</span></div>`),e.classList.remove("hidden")),te("hint").classList.add("hidden");return}}e.classList.add("hidden"),this.goalChip()}goalChip(){let t=this.P,e=te("hint");if(this.tool&&this.tool.k==="coaster"||!te("start").classList.contains("hidden")){e.classList.add("hidden");return}let n=t.goalDate(),i=Math.min(100,t.guests.length/Nn.guests*100),r=Math.min(100,t.rating/Nn.rating*100),a=t.won?'<span class="gl">\u{1F3C6}</span><span>\u05E0\u05D9\u05E6\u05D7\u05EA! \u05D4\u05E4\u05D0\u05E8\u05E7 \u05D4\u05D2\u05D9\u05E2 \u05DC\u05D9\u05E2\u05D3</span>':`<span class="gl">\u{1F3AF}</span><span><b class="num">${t.guests.length}/${Nn.guests}</b> \u05D0\u05D5\u05E8\u05D7\u05D9\u05DD <span class="bar"><i style="width:${i}%"></i></span> \xB7 \u05D3\u05D9\u05E8\u05D5\u05D2 <b class="num">${Math.round(t.rating)}/${Nn.rating}</b> <span class="bar"><i style="width:${r}%"></i></span><br><span style="opacity:.7">\u05E2\u05D3 ${n.monthName}, \u05E9\u05E0\u05D4 ${n.year}</span></span>`;e.innerHTML!==a&&(e.innerHTML=a),e.classList.remove("hidden"),this.hintTap=()=>this.toolButton("park")}advise(){let t=this.P;if(this.g.settings.tutorial!=="done"||t.guests.length<15||(this.adviceT=(this.adviceT||0)+.5,this.adviceT<40))return;this.adviceT=0,this.lastAdvice||(this.lastAdvice={});let e=r=>!this.lastAdvice[r]||this.g.now-this.lastAdvice[r]>300,n=(r,a,o)=>(this.lastAdvice[r]=this.g.now,this.toast(a,"warn",o),!0);if(t.rides().some(r=>r.broken)&&!t.staff.some(r=>r.role==="mechanic")&&e("mech"))return n("mech","\u05D9\u05E9 \u05DE\u05EA\u05E7\u05DF \u05DE\u05E7\u05D5\u05DC\u05E7\u05DC \u05D5\u05D0\u05D9\u05DF \u05DE\u05DB\u05D5\u05E0\u05D0\u05D9. \u05E9\u05DB\u05E8\u05D5 \u05DE\u05DB\u05D5\u05E0\u05D0\u05D9 \u{1F527}",()=>this.toolButton("staff"));let i={"no-food":["\u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E8\u05E2\u05D1\u05D9\u05DD \u05D5\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05D0\u05D5\u05DB\u05DC \u{1F354}","shops"],"no-drink":["\u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E6\u05DE\u05D0\u05D9\u05DD, \u05D7\u05E1\u05E8 \u05D3\u05D5\u05DB\u05DF \u05E9\u05EA\u05D9\u05D9\u05D4 \u{1F964}","shops"],"no-toilet":["\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u{1F6BB}","shops"],dirty:["\u05D4\u05E9\u05D1\u05D9\u05DC\u05D9\u05DD \u05DE\u05DC\u05D5\u05DB\u05DC\u05DB\u05D9\u05DD. \u05E2\u05D5\u05D3 \u05DE\u05E0\u05E7\u05D4 \u05D9\u05E2\u05D6\u05D5\u05E8 \u{1F9F9}","staff"],"no-bench":["\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E2\u05D9\u05D9\u05E4\u05D9\u05DD \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05E1\u05E4\u05E1\u05DC \u{1FA91}","addons"],nothing:["\u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DE\u05E9\u05EA\u05E2\u05DE\u05DE\u05D9\u05DD. \u05D4\u05D2\u05D9\u05E2 \u05D4\u05D6\u05DE\u05DF \u05DC\u05DE\u05EA\u05E7\u05DF \u05D7\u05D3\u05E9 \u{1F3A0}","rides"],"entry-expensive":["\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05DE\u05E1\u05EA\u05D5\u05D1\u05D1\u05D9\u05DD \u05D1\u05E9\u05E2\u05E8: \u05D4\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D9\u05E7\u05E8\u05D4 \u05DE\u05D3\u05D9 \u{1F39F}\uFE0F","booth"]};for(let r of t.thoughtSummary||[]){if(r.n<6)break;if(i[r.k]&&e(r.k))return n(r.k,i[r.k][0],()=>this.toolButton(i[r.k][1]));if(r.k==="expensive"&&e("exp"+r.id)){let a=t.objects.get(r.id);if(a)return n("exp"+r.id,`${a.name} \u05D9\u05E7\u05E8 \u05DE\u05D3\u05D9 \u05D1\u05E2\u05D9\u05E0\u05D9 \u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D5\u05D6\u05D9\u05DC \u05D1\u05E7\u05D5\u05E4\u05D4 \u{1F39F}\uFE0F`,()=>this.toolButton("booth"))}if(r.k==="queue-long"&&e("q"+r.id)){let a=t.objects.get(r.id);if(a)return n("q"+r.id,`\u05D4\u05EA\u05D5\u05E8 \u05DC${a.name} \u05D0\u05E8\u05D5\u05DA \u05DE\u05D3\u05D9. \u05D0\u05D5\u05DC\u05D9 \u05E2\u05D5\u05D3 \u05DE\u05EA\u05E7\u05DF?`,()=>this.toolButton("rides"))}}}frame(t){this.events(),this.slow+=t,this.panelT+=t,this.hintT+=t,this.slow>.25&&(this.slow=0,this.hud()),this.panelT>.6&&this.panel&&this.panel.k!=="pick"&&this.panel.k!=="test"&&this.panel.k!=="menu"&&(this.panelT=0,this.renderPanel()),this.hintT>.5&&(this.hintT=0,this.tutorial(),this.advise());let e=[te("tut"),te("hint")].find(i=>!i.classList.contains("hidden")),n=e?e.getBoundingClientRect().bottom+8:null;if(te("toasts").style.top=n?`${Math.round(n)}px`:"",this.camGoal){let i=this.W,r=Math.min(1,t*3);i.target.x+=(this.camGoal.x-i.target.x)*r,i.target.z+=(this.camGoal.z-i.target.z)*r,i.target.y+=(this.camGoal.h*.5-i.target.y)*r,Math.abs(this.camGoal.x-i.target.x)<.05&&Math.abs(this.camGoal.z-i.target.z)<.05&&(this.camGoal=null)}(!this.tool||this.tool.k!=="coaster")&&(this.W.target.y+=(0-this.W.target.y)*Math.min(1,t*2))}};var am="shusterpark-save-v1",om="shusterpark-settings",Li=s=>document.getElementById(s),Xu=(()=>{try{return JSON.parse(localStorage.getItem(om))||{}}catch{return{}}})(),Zt={park:null,world:null,ui:null,speed:1,now:0,lastSave:0,settings:Xu,setSpeed(s){this.speed=s,this.ui.hud()},save(){try{localStorage.setItem(am,JSON.stringify(this.park.toJSON())),this.lastSave=this.now}catch(s){console.warn("save failed",s)}},saveSettings(){try{localStorage.setItem(om,JSON.stringify({quality:this.world.quality,tutorial:Xu.tutorial}))}catch{}},newPark(){this.park=new Fs,this.world.target.set(24.5,0,39),this.world.yaw=0,this.world.dist=26,this.world.pitch=.92,this.speed=1,this.save()}};function iM(){try{let s=localStorage.getItem(am);return s?Fs.fromJSON(JSON.parse(s)):null}catch(s){return console.warn("bad save",s),null}}var cm=Li("game");Zt.world=new El(cm,Xu.quality||"auto");var $a=iM();Zt.park=$a||new Fs;Zt.ui=new Al(Zt);Zt.input=new Tl(cm,Zt.world,{paints:()=>Zt.ui.paints(),paintStart:(s,t)=>Zt.ui.paintStart(s,t),paintMove:(s,t)=>Zt.ui.paintMove(s,t),paintEnd:()=>Zt.ui.paintEnd(),paintCancel:()=>Zt.ui.paintCancel(),tap:(s,t,e)=>Zt.ui.tap(s,t,e),hover:(s,t)=>Zt.ui.hover(s,t),moved:()=>{Zt.ui.camGoal=null},rotate:()=>Zt.ui.rotate(),escape:()=>Zt.ui.escape(),togglePause:()=>Zt.setSpeed(Zt.speed?0:Zt.prevSpeed||1),speed:s=>Zt.setSpeed(s)});var sM=Zt.setSpeed.bind(Zt);Zt.setSpeed=s=>{Zt.speed&&(Zt.prevSpeed=Zt.speed),sM(s)};var Rl={on:!0};Li("btn-continue").classList.toggle("hidden",!$a);Li("btn-new").textContent=$a?"\u05E4\u05D0\u05E8\u05E7 \u05D7\u05D3\u05E9":"\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D1\u05E0\u05D4 \u05E4\u05D0\u05E8\u05E7!";Li("btn-new").classList.toggle("main",!$a);Li("start").classList.remove("hidden");Zt.start=s=>{s&&Zt.newPark(),Li("start").classList.add("hidden"),Rl.on=!1};Li("btn-continue").onclick=()=>Zt.start(!1);Li("btn-new").onclick=()=>$a?Zt.ui.confirm("\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05E4\u05D0\u05E8\u05E7 \u05D7\u05D3\u05E9?","\u05D4\u05E4\u05D0\u05E8\u05E7 \u05D4\u05E9\u05DE\u05D5\u05E8 \u05D9\u05D9\u05DE\u05D7\u05E7","start-new"):Zt.start(!0);new URLSearchParams(location.search).has("play")&&(Li("start").classList.add("hidden"),Rl.on=!1);addEventListener("resize",()=>Zt.world.resize());document.addEventListener("visibilitychange",()=>{document.hidden&&Zt.save()});addEventListener("pagehide",()=>Zt.save());var qa=0;function rM(s){let t=Zt.world;if(t.quality==="auto"&&(s>1/32?qa+=s:qa=Math.max(0,qa-s*.5),qa>4&&t.level!=="low")){qa=0;let e=t.level==="high"?"medium":"low";t.setQuality(e),t.quality="auto",t.level=e;let n=Math.min(window.devicePixelRatio||1,e==="medium"?1.6:1);t.renderer.setPixelRatio(n),t.renderer.shadowMap.enabled=e!=="low",t.sun.castShadow=e!=="low",t.resize()}}var rm=performance.now();function lm(s){let t=Math.min(.1,(s-rm)/1e3);rm=s,Zt.now+=t;let e=Zt.park;if(!Rl.on&&Zt.speed>0){let n=t*Zt.speed;for(;n>1e-6;){let i=Math.min(.1,n);e.tick(i),n-=i}}Zt.input.step(t),Zt.ui.frame(t),Zt.world.frame(e,t,Zt.now),!Rl.on&&Zt.now-Zt.lastSave>30&&Zt.save(),rM(t),requestAnimationFrame(lm)}Zt.ui.hud();requestAnimationFrame(lm);window.__game=Zt;
