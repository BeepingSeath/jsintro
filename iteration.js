function CL (val) {
    console.log(val)
}

let name = 'Seth';
let chars = [];
for(i = 0; i < name.length; i++){
    chars.push(name[i]);
}

chars.forEach(c=>{
    CL(c)
})
chars = [];
let name2 = '';

for(i = name.length-1; i != -1; i--){
    chars.push(name[i]);
}
chars.forEach(c=>{
    name2+=c;
})
CL(name2)

let bw = chars.map(c=>{
    return c+c;
})
CL(bw);
CL(chars);

let q = [1,5,12,22];
let sum = q.reduce((accumulator,currentValue) =>accumulator+currentValue,0);
let filtered = q.filter (n =>{
    return n !== 5;
})
CL(sum);
CL(filtered);