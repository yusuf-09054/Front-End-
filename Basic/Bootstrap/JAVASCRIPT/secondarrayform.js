let studentdata=["Annamalai","Nandhagopal","Manoj","Raja","kumar"]

var inserting=()=>
{
    let temp=document.getElementById('users')
    studentdata.push(temp.value);
    alert("your value is added successfully"+temp.value)
}

let viewpoint=()=>
{
    let hi="";
    studentdata.map((data)=>
    {
        hi+="<tr><td>"+data+"</td></tr>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding: 10px 10px 5px 10px; box-shadow:5px 6px 4px pink;'><thead><tr><th> Student Names</th></tr></thead><tbody>"+hi+"</tbody></table>"
  }