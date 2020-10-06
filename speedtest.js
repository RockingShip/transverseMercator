"use strict";

const nodeTM = require("./transverseMercator.js");
const tm = new nodeTM.TransverseMercator();
const now = Date.now;
let kMax = 1000;

for (let iRound = 0; iRound < 16; iRound++) {
	const stime = now();
	for (let k = 0; k < kMax; k++) {
		tm.toXY(42, 42);
	}
	const etime = now();

	console.log(etime-stime, kMax);

	// scale kMax for a better match
	kMax = Math.round(kMax * 1000 / (etime - stime));
}
