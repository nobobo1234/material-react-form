export const formElementHelper = ({
    formType,
    validation = {},
    value = "",
    show = true,
    ...other
}) => {
    return {
        formType,
        value,
        validation,
        valid: false,
        touched: false,
        show,
        ...other
    };
};

export const getElementByName = (array, elName) => {
    return array.find(el => el.name === elName);
};

export const changeShow = (array, whatToShow, show) => {
    if (typeof whatToShow === "string") whatToShow = [whatToShow];
    return array.map(item => {
        if (whatToShow.includes(item.name)) {
            return {
                ...array.find(
                    item => item.name === whatToShow.find(arrayItem => item.name === arrayItem)
                ),
                show
            };
        }
        return item;
    });
};

export const replaceInArray = (array, name, newValues) => {
    return array.map(item => {
        if (item.name === name) {
            return {
                ...array.find(item => item.name === name),
                ...newValues
            };
        }
        return item;
    });
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = (typeof value === "string" ? value.trim() !== "" : !!value) && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
};
