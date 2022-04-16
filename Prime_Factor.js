let x=10;
let flag=0;
for(i=2; i<=x; i++)
{
  if(x%i==0)
    {
        flag=0;
        for(j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                flag=1
            }
        }

        if (flag==0)

          {
    console.log("prime",i);
       }
    }
}