let name=prompt("İsminizi giriniz:");


document.getElementById('ad').innerHTML= name+",";

function tarihsaat(){
var tarih=new Date();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();
var yıl=tarih.getFullYear();
var ay=tarih.getMonth();
var gün=tarih.getDate();

const ayism = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos"
,"Eylül","Ekim","Kasım","Aralık"];


document.getElementById('saat').innerHTML=saat+":";
document.getElementById('dakika').innerHTML=dakika+":";
document.getElementById('saniye').innerHTML=saniye;
document.getElementById('gün').innerHTML=gün;
document.getElementById('ay').innerHTML=ayism[ay];
document.getElementById('yıl').innerHTML=yıl;

};

setInterval(tarihsaat,1000);
