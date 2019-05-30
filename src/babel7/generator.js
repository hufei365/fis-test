export default function *name(params) {
    yield 1;
    yield 2;
}

let n = name();

n.next();
console.log(n.next());