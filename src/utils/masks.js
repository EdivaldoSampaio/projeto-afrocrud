
export function phoneNumberMask(event) {

const { value } = event.currentTarget;

const newValue = String(value)
.replace(/\D/g, '')
.replace(/^([0-9]{2})([0-9])/g, '($1) $2')
.replace(/([0-9]{5})([0-9])/, '$1-$2');

event.currentTarget.value = newValue;

return event;
}

export function cpfMask(event) {

    const { value } = event.currentTarget;

    const newValue = String(value)
        .replace(/\D/g,'')
        .replace(/([0-9]{3})([0-9])/, '$1.$2')
        .replace(/([0-9]{3})([0-9])/, '$1.$2')
        .replace(/([0-9]{3})([0-9])/, '$1-$2');

     event.currentTarget.value = newValue;   

     return event;   

}


export function currencyMask(event) {

    const { value } = event.currentTarget;

    const valueWithoutLetters = value.replace(/\D/g,'');


    const newValue = Number(valueWithoutLetters)
    .toString()
    .padStart(3, '0')
    .replace(/([0-9])([0-9]{2})$/, '$1,$2');


    event.currentTarget.value = `R$ ${newValue}`;   

    return event;  

}
