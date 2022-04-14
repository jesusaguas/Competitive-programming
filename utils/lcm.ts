// GCD - Greater common divisor - MCD
function gcd(a: number, b: number){
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
 
// Function to return LCM(least common multiple) of two numbers - MCM
function lcm(a: number, b: number): number{
    return (a / gcd(a, b)) * b;
}