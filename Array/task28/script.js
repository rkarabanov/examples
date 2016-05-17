console.log(longestCommonStartingSubstring(['go', 'google']));
function longestCommonStartingSubstring(array) {
	return array.reduce(function (res,cur) {
		return res.length>cur.length? cur:res;
	},array[0]);
}