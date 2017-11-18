const main = require('./main/main');

main();
main()
{
    let grade = 0;
}

function gapfilling(){
    var temp=0;
    var gapfill=new Array();
    gapfill[0]=document.getElementById("gap1").value;
    gapfill[1]=document.getElementsById("gap2").value;
    gapfill[2]=document.getElementsById("gap3").value;
    gapfill[3]=document.getElementsById("gap4").value;
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
    var radio=new Array();
    for (var i = 1; i <= 2; i++) {
        var radio_name = new String("radio_" + i);
        radio.push(document.getElementsByName("radio_name").id);
    }
    if(radio[0][1].checked)
        temp++;
    if(radio[1][0].checked)
        temp++;
    var sum2=temp*10;
    return sum2;
}

function collect_more(){
    var temp=0;
    var checkbox=new Array();
    for (var i = 1; i <= 2; i++) {
        var check_name = new String("checkbox_" +i);
        radio.push(document.getElementsByName("check_name").value);
    }
    if(checkbox[0][0].checked&&checkbox[0][1].checked&&checkbox[0][3].checked)
        temp++;
    if(checkbox[1][0].checked&&checkbox[1][1].checked&&checkbox[1][2].checked)
        temp++;
    var sum3=temp*10;
    return sum3;

}

function judge(){
    var temp=0;
    var judge_wrong=new Array();
    for (var i=0; i <= 2; i++) {
        var judge_name = new String("inlineradio_" + i);
        radio.push(document.getElementById("judge_name").value);
    }
    if(radio[0][1].checked)
        temp++;
    if(radio[1][0].checked)
        temp++;
    var sum4=temp*10;
    return sum4;
}

function text_judge(){
    var text=document.getElementById('txt').value;
    if(text==="模型是对现实世界的简化和抽象,模型是对所研究的系统,事物或概念的一种表达形式,可以是物理实体;可以是某种图形;或是物理表达式")
        var sum5=20;
    return sum5;
}

function getmarks(){
    var result1="填空题得分:"+gapfilling();
    var result2="单选题得分:"+collect_only();
    var result3="多选题得分:"+collect_more();
    var result4="判断题得分:"+judge();
    var result5="简答题得分:"+text_judge();
    return result1+result2+result3+result4+result5;
}

function calculate_output()
{
    document.getElementById("demo").innerHTML=getmarks();
}