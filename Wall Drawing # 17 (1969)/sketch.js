//vertical line
var a = {
    a:10,
    b:150,
    c:10,
    d:250}
    
//horizontal line
var b = {
    e:110,
    f:0,
    g:200,
    h:0
}

//diagonal line 1
var c = {
    i:212,
    j:0,
    k:210,
    l:2
}

//diagonal line 2
var e = {
    q:300,
    r:2,
    s:210,
    t:92,
}

//diagonal line 3
var d = {
    m:312,
    n:400,
    o:310,
    p:398,
}

function setup() {
  createCanvas(410,400);
}

function draw() {
//rectangles

  rect(0,0,410,150);
  rect(0,250,410,150);
  rect(400,150,10,100);
  rect(0,150,10,100);
  rect(100,150,10,100);
  rect(200,150,10,100);
  rect(300,150,10,100);
  fill(0);
  
//vertical line  
  if(a.a<=100 && a.c<=100){
    line(a.a,a.b,a.c,a.d);
    
    a.a+=2;
    a.c+=2;
  }
  
//horizontal line
  if(b.f>=150 && b.h<=250){
    line(b.e,b.f,b.g,b.h);
  }
  
    b.f+=2;
    b.h+=2;
  
//diagonal line 1
  
  if(c.i<=300){
   line(c.i,c.j,c.k,c.l); 
  }
    
    c.i+=2;
    c.l+=2;
    
//diagonal line 2
  
  if(e.q<=300){
   line(e.q,e.r,e.s,e.t); 
  }
  
  e.r+=2;
  e.t+=2;
  
//diagonal line 3
  line(d.m,d.n,d.o,d.p);
    
  d.m+=2;
  d.p-=2;
}