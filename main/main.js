window.onload=function()
{
  document.getElementById("abutton").onclick=function()
  {
	main();
  };
};

function main(){
  let sum;
  sum=getmarks();
  let res=document.getElementById("name1").value+'本次测验的得分是'+sum.toString()+'分';
  alert(res);
}

function gapfilling(){
    var temp=0;
    var gapfill=new Array();
    gapfill[0]=document.getElementById("gap1").value;
    gapfill[1]=document.getElementById("gap2").value;
    gapfill[2]=document.getElementById("gap3").value;
    gapfill[3]=document.getElementById("gap4").value;
    if(gapfill[0]==="统一建模语言")
        temp++;
    for(var i=1;i<gapfill.length;i++)
        if(gapfill[i]==="封装性"||gapfill[i]==="继承性"||gapfill[i]==="多态性")
            temp++;
    var sum1=temp*5;
    return sum1;
}

function collect_only(){
    var temp=0;
    if(document.getElementsByName("radio_1")[1].checked===true){
        temp++;
    }
    if(document.getElementsByName("radio_2")[0].checked===true){
        temp++;
    }
    var sum2=temp*10;
    return sum2;
}

function collect_more(){
    var temp=0;
    var checkbox1=document.getElementsByName("checkbox_1");
    var checkbox2=document.getElementsByName("checkbox_2");
    if(checkbox1[0].checked===true&&checkbox1[1].checked===true&&checkbox1[2].checked===false&&checkbox1[3].checked===true)
        temp++;
    if(checkbox2[0].checked===true&&checkbox2[1].checked===true&&checkbox2[2].checked===true&&checkbox2[3].checked===false)
        temp++;
    var sum3=temp*10;
    return sum3;

}

function judge(){
    var temp=0;
    if(document.getElementsByName("radio_1")[1].checked===true){
        temp++;
    }
    if(document.getElementsByName("radio_2")[0].checked===true){
        temp++;
    }
    var sum4=temp*10;
    return sum4;
}

function text_judge(){
    var sum5=0;
    var text=document.getElementById('txt').value;
    if(text==="模型是对现实世界的简化和抽象,模型是对所研究的系统,事物或概念的一种表达形式,可以是物理实体;可以是某种图形;或是物理表达式")
        sum5=20;
    return sum5;
}

function getmarks(){
    var result1=gapfilling();
    var result2=collect_only();
    var result3=collect_more();
    var result4=judge();
    var result5=text_judge();
    return result1+result2+result3+result4+result5;
}
