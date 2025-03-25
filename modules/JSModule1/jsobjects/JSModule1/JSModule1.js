export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		QueryModule1.run();
		return QueryModule1.data;
	},
	async myFun2 () {
		// some newer comments before commit to another branch;
		// added comments for feature-3 and what not;
		// comment 2 for feature-3
		return "version 1.2.3";
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}