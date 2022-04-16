var x=5;

var y=15;
var flag =0;
for(var i=x; i<=y; i++)
{

    flag=0;
    for(var j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            flag=1;
        }
    }
    if(flag==0)
    {
        console.log("Prime",i);
    }    
}