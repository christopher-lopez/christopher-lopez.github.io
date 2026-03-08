// Kickass Webcomics Exchange - kwexchange.php
// A modified version of the very excellent
/****
* Banner Ad Rotater v3.02
* Anarchos > anarchos3@hotmail.com
* http://anarchos.xs.mw/bannerad.phtml
**/

function goto_URL(object) {
    open(object.options[object.selectedIndex].value)
};

function Banner(refreshTime, width, height, altText, start, random){
	this.objName = "bannerAd" + (Banner.count++);
	eval(this.objName + "=this");
	if (!refreshTime) this.refreshTime = 60000; else this.refreshTime = refreshTime*1000;
	if (!width) this.width = 200; else this.width = width;
	if (!height) this.height = 40; else this.height = height;
	if (random == null) this.random = 1; else this.random = random;
	this.altText = altText;
	this.ads = [];
	if (start) this.currentAd = start-1; else start = null;
	this.mySize = 0;

	this.Ad = function(src, href, target, mouseover) {
		var tempImage = new Image();
		tempImage.src = src;
		this.ads[this.mySize] = new Object();
		var ad = this.ads[this.mySize];
		ad.src = src;
		if (typeof(target) == "undefined" || target == null) ad.target = "_blank"; else ad.target = target;
		ad.href = href;
		ad.mouseover = mouseover;
		this.mySize++;
	}

	this.link = function(){
		var	ad = this.ads[this.currentAd];
		if (ad.target == "_self"){
			location.href = ad.href;
		}
		else if (ad.target == "_blank" || ad.target == "_blank"){
			open(ad.href,this.objName + "Win");
		}
		else top.frames[ad.target].location.href = ad.href;
	}

	this.showStatus = function(){
		var ad = this.ads[this.currentAd];
		if (ad.mouseover) status = ad.mouseover;
		else status = ad.href;
	}

	this.randomAd = function(){
		var n;
		do { n = Math.floor(Math.random() * (this.mySize)); } 
		while(n == this.currentAd);
		this.currentAd = n;
	}

	this.output = function(){
		var tempCode = "";
		if (this.mySize > 1){
			if (this.currentAd == null) this.randomAd();
			if (this.currentAd >= this.mySize) this.currentAd = this.mySize - 1;
			tempCode = '<a href="javascript:'+this.objName+'.link();"';
			tempCode += ' onMouseOver="' + this.objName + '.showStatus(); return true"';
			tempCode += ' onMouseOut="status=\'\';return true">';
			tempCode += '<img src="' + this.ads[this.currentAd].src + '" width="' + this.width;
			tempCode += '" name="' + this.objName + 'Img" height="' + this.height + '" ';
			if (this.altText) tempCode += 'alt="'+this.altText + '" ';
			tempCode += 'border="0" /></a>';
			document.write(tempCode);
			this.nextAd();
		} else document.write("Error: two banners must be defined for the script to work.");
	}

	this.newAd = function(){
		if (!this.random){	
			this.currentAd++;
			if (this.currentAd >= this.mySize)
			   this.currentAd = 0;
		}
		else {
			this.randomAd();
		}
		this.nextAd();
	}

	this.nextAd = function(){
		document.images[this.objName+ 'Img'].src = this.ads[this.currentAd].src;
		setTimeout(this.objName+'.newAd()',this.refreshTime)
	}
}
Banner.count = 0;
document.writeln('<TABLE width=200 bgcolor="#666699" BORDER="0" CELLSPACING="0" CELLPADDING="0"><FORM><TR><TD colspan=2>');

myAd = new Banner(15,200,40,"",0,0);
// As If
myAd.Ad("kwexchange/kwasif.gif","http://www.asifcomic.com","_blank","As If!");
// Cascadia
myAd.Ad("kwexchange/kwcascadia.gif","http://cascadia.verunne.net","_blank","Cascadia");
// Ceph
myAd.Ad("kwexchange/kwceph.gif","http://www.roadhunter.com/~ceph/","_blank","Ceph: Project Squidship");
// Dedos
myAd.Ad("kwexchange/kwdedos.gif","http://chriton.org/dedos","_blank","Dedos:  An Elfin Tale");
// Demonology 101
myAd.Ad("kwexchange/kwd101.gif","http://faith.rydia.net","_blank","Demonology 101");
// Eat the Roses
myAd.Ad("kwexchange/kweattheroses.gif","http://www.eattheroses.com","_blank","Eat the Roses");
// Elf Life
myAd.Ad("kwexchange/kwelflife.gif","http://www.elflife.com","_blank","Elf Life");
// Eversummer Eve
myAd.Ad("kwexchange/kweversummereve.gif","http://www.eversummereve.com","_blank","Eversummer Eve");
// Fate Martyr Sapheire
myAd.Ad("kwexchange/kwfmsapheire.gif","http://fatemartyrsapheire.keenspace.com","_blank","Fate Martyr Sapheire");
// Flipside
myAd.Ad("kwexchange/kwflipside.gif","http://www.flipsidecomics.com/home.html","_blank","Flipside");
// Ghost Hunters
myAd.Ad("kwexchange/kweunice.gif","http://www.xepher.net/~ghosthunters","_blank","Ghost Hunters - by Eunice Phan");
// Lang Lang
myAd.Ad("kwexchange/kwlanglang.gif","http://langlang.keenspace.com","_blank","Lang Lang:  Where the East Meets the West!");
// Lovarian Adventures
myAd.Ad("kwexchange/kwlovaria.gif","http://www.lovaria.com",null,"Lovarian Adventures:  A Tale of High Fantasy");
// Not Gonna Take It
myAd.Ad("kwexchange/kwngti.gif","http://kiwi.keenspace.com",null,"Not Gonna Take It");
// pOnju
myAd.Ad("kwexchange/kwponju.gif","http://www.ponju.com",null,"pOnju - Webcomics: PiggyHunter!, Chiga and Kaput");
// Strings of Fate
myAd.Ad("kwexchange/kwsof.gif","http://zodiac.mine.nu",null,"Strings of Fate:  Urban fairy tale");
// Stubble
myAd.Ad("kwexchange/kwstubble.gif","http://www.stubblecomics.com",null,"Stubble");
// There Be Elves
myAd.Ad("kwexchange/kwelves.gif","http://www.elfcomic.com",null,"There Be Elves");
// Tsunami Channel
myAd.Ad("kwexchange/kwtsunami.gif","http://tsunamichan.keenspace.com",null,"Tsunami Channel");
// Wish3
myAd.Ad("kwexchange/kwwish3.gif","http://www.wish3.net/main.html",null,"Wish3");

myAd.output();

document.writeln('<\/td><\/tr>');
document.writeln('<TR><TD align="left"><SELECT NAME="selectName" onChange="goto_URL(this.form.selectName)">');
// Web Exchange Home
document.write('<OPTION VALUE="kwexchange.php">--Kickass-Webcomics--<\/OPTION>');
// As If!
document.write('<OPTION VALUE="http://www.asifcomic.com">As If!<\/OPTION>');
// Cascadia
document.write('<OPTION VALUE="http://cascadia.verunne.net">Cascadia<\/OPTION>');
// Ceph
document.write('<OPTION VALUE="http://www.roadhunter.com/~ceph/">Ceph<\/OPTION>');
// Dedos
document.write('<OPTION VALUE="http://chriton.org/dedos">Dedos<\/OPTION>');
// Demonology 101
document.write('<OPTION VALUE="http://faith.rydia.net">Demonology 101<\/OPTION>');
// Eat the Roses
document.write('<OPTION VALUE="http://www.eattheroses.com">Eat the Roses<\/OPTION>');
// Elf Life
document.write('<OPTION VALUE="http://www.elflife.com">Elf Life<\/OPTION>');
// Eversummer Eve
document.write('<OPTION VALUE="http://www.eversummereve.com">Eversummer Eve<\/OPTION>');
// Fate Martyr Sapheire
document.write('<OPTION VALUE="http://fatemartyrsapheire.keenspace.com">Fate Martyr Sapheire<\/OPTION>');
// Flipside
document.write('<OPTION VALUE="http://www.flipsidecomics.com/home.html">Flipside<\/OPTION>');
// Ghost Hunters
document.write('<OPTION VALUE="http://www.xepher.net/~ghosthunters">Ghost Hunters<\/OPTION>');
// Lang Lang
document.write('<OPTION VALUE="http://langlang.keenspace.com">Lang Lang<\/OPTION>');
// Lovarian Adventures
document.write('<OPTION VALUE="http://www.lovaria.com">Lovarian Adventures<\/OPTION>');
// Not Gonna Take It
document.write('<OPTION VALUE="http://kiwi.keenspace.com">Not Gonna Take It<\/OPTION>');
// pOnju
document.write('<OPTION VALUE="http://www.pOnju.com">pOnju<\/OPTION>');
// Strings of Fate
document.write('<OPTION VALUE="http://zodiac.mine.nu">Strings of Fate<\/OPTION>');
// Stubble
document.write('<OPTION VALUE="http://www.stubblecomics.com">Stubble<\/OPTION>');
// There Be Elves
document.write('<OPTION VALUE="http://www.elfcomic.com">There Be Elves<\/OPTION>');
// Tsunami Channel
document.write('<OPTION VALUE="http://tsunamichan.keenspace.com">Tsunami Channel<\/OPTION>');
// Wish 3
document.write('<OPTION VALUE="http://www.wish3.net/main.html">Wish<sup>3</sup><\/OPTION>');
document.writeln('<\/SELECT><\/TD>');
document.writeln('<TD align="left"><a href="http://kwe.ponju.com"><img src="kwexchange/pbeicon.gif" border=0 alt="Kickass Webcomics Exchange"><\/A><\/TD>');
document.writeln('<\/TR><\/TD><\/TR><\/FORM><\/TABLE>');