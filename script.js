// complete the given function

function palindrome(str){
	let s= str.toLowerCase();
	let start=0;
	let end =str.length-1;
	while(i<j){
		if(s[i] !== s[j]){
			return false;
		}
	}
	return true;

}
module.exports = palindrome
