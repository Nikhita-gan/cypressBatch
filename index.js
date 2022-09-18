const num = [2,3,1,5,2,7]

let set = new Set(num)

let unquic = Array.from(set)

console.log(unquic)


let n = 5

let string = ""

for(let i= 1;i<=n;i++){

    for(j=1;j<=i;j++){

    string += "*";

    }
    string +="\n"
}
console.log(string)