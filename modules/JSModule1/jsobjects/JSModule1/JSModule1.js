export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		QueryModule1.run();
		return QueryModule1.data;
	},
	async myFun2 () {
		// some newer comments before commit to another branch;
		return "version 1.2.3";
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}