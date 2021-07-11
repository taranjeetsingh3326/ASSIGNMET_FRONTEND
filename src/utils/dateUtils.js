import moment from 'moment';

const DATE_FORMAT_ACC_DB = 'MM-DD-YYYY';

export const asDbDateFormat = (date = undefined, format = DATE_FORMAT_ACC_DB) =>
	moment(date).format(format);

export const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(isNaN(age)){
        return "";
    }
    return age;
}