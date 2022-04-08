let year = 2022;

if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log("Given year is a leap year");
}
else
{
    console.log("it's not a leap year");
}