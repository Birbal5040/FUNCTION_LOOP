//passed as are argument to a function
function operator(a,b,pr)
{
    console.log(pr(a,b))
}
function product(a,b)
{
    return a*b;
}
operator(2,5,product)