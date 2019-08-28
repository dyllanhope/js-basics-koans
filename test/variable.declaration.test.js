describe("When declaring variables in JavaScript", function() {
	
	// Object Literal in JavaScript is basic objects
	it("you can use var - which has function scope", function(){
		
		function declareUsingVar() {
			var vegetable = "carrot";
			// what is the value of vegetable
			assert.equal("", vegetable);
		}

		declareUsingVar();

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(null, "vegetable doesn't exist")
		}
		// assert.isUndefined(vegetable);

		var age = 23;
		if (age > 21) {
			var username = "mawandi";
			assert.equal("", username)
		}
		
		// username is visible here - as it has function scope
		assert.equal("", username)
	});

	it("you can use var - which has function scope even when defined in a block", function(){
		
		function checkVegetable(count) {
			if (count > 10) { // this is a block
				var vegetable = "carrot";
			} // block ends here 
			else {
				var vegetable = "potato";
			}
			
			// if count is bigger than 10 vegetable will be defined 
			if (count > 10) {
				assert.equal("", vegetable);
			}

			if (count < 10) {
				assert.equal("", vegetable);
			}
		}

		checkVegetable(9);
		checkVegetable(10);

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(null, "vegetable doesn't exist")
		}
		// assert.isUndefined(vegetable);

		var age = 23;
		if (age > 21) {
			var username = "mawandi";
			assert.equal("", username)
		}
		
		// username is visible here - as it has function scope
		assert.equal("", username)
	});

	it("you can use let - which has block scope", function(){
		
		function checkVegetable(count) {
			if (count > 10) { // this is a block
				let vegetable = "carrot";
				assert.equal("", vegetable);
			} // block ends here 
			else { // this is a block
				let vegetable = "potato";
				assert.equal("", vegetable);
			} // this is a block
			
			// change code below this line

			// vegetable is not in scope it only 
			try {
				assert.equal("", vegetable);
			} catch(err) {
				assert.ok(null, "vegetable doesn't exist in the function")
			}

			// change code above this line
		}

		checkVegetable(9);
		checkVegetable(10);

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(null, "vegetable doesn't exist")
		}

		var age = 23;
		if (age > 21) { // block scope start
			let username = "mawandi";
			assert.equal("", username)
		} //block scope end
		
		// username is not visible here - as it has block scope
		try {
			assert.equal("", username)
		} catch {
			assert.ok(null, "username doesn't exist")
		}
	});

	it("you can use const - which can't change once set.", function(){
		
		function declareUsingConst() {
			const vegetable = "carrot";
			// const variables can be used as normal
			assert.equal("carrot", vegetable);
			try {
				vegetable = "beetroot";
			} catch (err) {
				// assert.ok just need true or ""
				assert.ok(null, "vegetable is a const and can't be changed")
			}
		}

		declareUsingConst();

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(null, "vegetable doesn't exist")
		}

		const age = 23;
		// username is not visible here - as it has block scope
		try {
			age = 24;
		} catch {
			// assert.ok just need true or ""
			assert.ok(null, "age is a const and can't be changed")
		}
		// age can't be changed so it's value is still the same
		assert.equal(0, age);
	});
});