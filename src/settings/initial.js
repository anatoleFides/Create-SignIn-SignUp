Object. assign(Object, {
	compare (target, source) {
		return Object.keys(target)
			.filter(key => target[key] === source[key])
			.length === Object.keys(target).length
	}
})

Object.assign(Object.prototype, {
	compareWith (object) {
		return Object.compare(this, object)
	}
})