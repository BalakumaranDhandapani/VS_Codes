//step1: Create an XHR object
var request=new XMLHttpRequest();
//step2: Inititate a Request
request.open("GET","https://restcountries.com/v2/all");
//step3: sending the request
request.send();
//step4: 
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);  
    //b.Countries with population <2Lakhs
    var popu=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
    console.log(popu);    
    //a.countries from the Asia continent
    var conti=result.filter((ele)=>ele.region==="Asia").map((ele=>ele.name));
    console.log(conti);
    // //d.to print the total of the population.
    var totalpop=result.reduce((x,y) => x+y.population,0);
    console.log("Total Population:",totalpop);
    //c.Print the following details name, capital, flag using forEach function
    var out=[];
    result.forEach(function(ele)
    {
        out=result.map((ele)=>`${ele.name} : ${ele.capital} : ${ele.flag}`);
    });
    console.log(out);
    // e. Print the country which uses US Dollars as currency
    var currency=result.filter((element)=>(element.currencies));
    var usd=currency.filter((ele) => (ele.currencies[0].code==="USD")).map((country) => (country.name));
    console.log(usd);

}