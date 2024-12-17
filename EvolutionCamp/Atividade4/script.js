var text = "   Hello, JavaScript World!";

var text_nospace = text.trim();
alert(text_nospace);

var text_size = text.length;
alert(text_size);

var text_eigthchar = text.charAt(7);
alert(text_eigthchar);

var text_wordextract = text_nospace.slice(7, 17);
alert(text_wordextract);

var text_javatoservicenow = text_nospace.replace("JavaScript", "ServiceNow");
alert(text_javatoservicenow);

var text_splitted = text_nospace.split("");
alert(text_splitted.slice(18, -1));


