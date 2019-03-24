/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let counterTriangles = 0;
	for (let i = 0; i < preferences.length; i++) {
		let firstLovers = i + 1;
		let secondLovers = preferences[i];
		let thirdLovers = preferences[secondLovers - 1];
		console.log(i, firstLovers, preferences[thirdLovers - 1]);
		if (firstLovers === secondLovers) continue;
		if ((preferences[thirdLovers - 1]) === firstLovers) {
			counterTriangles++;
		};
	};
	return counterTriangles / 3;
};
