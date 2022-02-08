import { button }from '../elements'

export const showDisabledButton = (paramDisabled, paramStyle) => {
	Object.assign(button, {
		disabled: paramDisabled,
		style: paramStyle
	})
}