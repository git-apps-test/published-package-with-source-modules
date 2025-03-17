export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		QueryModule1.run();
		return QueryModule1.data;
	},
	async myFun2 () {
		console.log("something is here");
	}
}