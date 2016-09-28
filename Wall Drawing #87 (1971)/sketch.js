//diagonal line 1
var l = {
  a: 10,
  b: 200,
  c: 0,
  d: 210
}

//diagonal line 2
var m = {
  e: 390,
  f: 200,
  g: 400,
  h: 210
}

//diagonal line 3
var q = {
  q: 200,
  r: 390,
  s: 210,
  t: 400
}

//vertical line
var n = {
  x: 0,
  y: 0,
  z: 0,
  v: 400
}

//horizontal line 1
var o = {
  i: 200,
  j: 0,
  k: 400,
  l: 0
}

//horizontal line 2
var p = {
  m: 0,
  n: 200,
  o: 200,
  p: 200
}

function setup() {
  createCanvas(400,400);
  background(255);
}

function draw() {

//vertical line
  stroke(255,100,100);
  
  line(n.x,n.y,n.z,n.v);
  
  n.x+=10;
  n.z+=10;
  
//horizontal line 1
  stroke(255,200,125);
  
  line(o.i,o.j,o.k,o.l);
  
  o.j+=10;
  o.l+=10;
  
//horizontal line 2
  stroke(255,200,125);
  
  line(p.m,p.n,p.o,p.p);
  
  p.n+=10;
  p.p+=10;

//diagonal line 1
  stroke(50,255,200);
  
  line(l.a,l.b,l.c,l.d);
  
  l.a+=10;
  l.d+=10;
  
//diagonal line 2
  stroke(200,50,255);
  
  if(m.e>=200){
  line(m.e,m.f,m.g,m.h);
  }
  m.e-=10;
  m.h+=10;
  
  if(q.r>=200){
  line(q.q,q.r,q.s,q.t);
  }
  q.r-=10;
  q.s+=10;
  
}