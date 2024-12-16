var text = "   Hello, JavaScript World!";

var text_nospace = text.trim();
console.log(text_nospace);

var text_size = text.length;
console.log(text_size);

var text_eigthchar = text.charAt(8);
console.log(text_eigthchar);

var text_wordextract = text_nospace.slice(7, 17);
console.log(text_wordextract);

var text_javatoservicenow = text_nospace.replace("JavaScript", "ServiceNow");
console.log(text_javatoservicenow);

var text_splitted = text_nospace.split("")
console.log(text_splitted.slice(18, -1));