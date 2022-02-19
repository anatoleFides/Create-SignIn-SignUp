export const showDisabledButton = (object, paramDisabled, paramStyle) => {
	Object.assign(object, {
		disabled: paramDisabled,
		style: paramStyle
	})
}