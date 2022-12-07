let i = 10;
let s = 1;
while (i <= 30) {
    if (i % 2 != 0) {
        s *= i;
        
    }
    i++
}
document.write(s);