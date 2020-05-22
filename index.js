<script type="text/javascript" language="javascript">
<!--
var x="agil pamungkas"; //ganti nama kamu
var y=prompt("Eh,sopo niki?");
asking();

function asking()
{
if(y!="" && y!=null)
{return fitri(x,y);}

if(y=="" || y==null)
{
y=prompt("Loh,kok ra ono jenenge..sopo yo?");
return asking();
}
}

function fitri(x,y)
{
var ask=confirm(y+",kulo ape ngaturaken sugeng riyadi oleh po ora ?");

if(ask==true)
{
alert(x+"kulo lan sekeluargo ngaturaken sugeng dinten riyadi 1441h nyuwun pangapunten lahir lan batos "+y+"! ^O^V");
document.write("<marquee>selamat Idul Fitri!! ^O^V</marquee>");
}

else
{
ask=confirm("mboten wonten ngapuntenaken "+x+" niki?");
return fitri(x,y);