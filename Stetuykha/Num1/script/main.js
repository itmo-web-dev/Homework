'use strict';

var num1 = 4, 		//first task
	num2 = -2, 		//first task
	num3 = 7, 		//first task
	intNum = 123, 	//second task
	num0to9 = 1, 	//third task
	marks = 5,		//fourth task
	uno = 34,		//fifth task
	dos = 34,		//fifth task
	tres = 12;		//fifth task

/*---------------------------------FIRST TASK---------------------------------------*/
console.log('first task------------------------------------------------------');

(num1 < num2 && num1 < num3) ? console.log(num1) : 
	(num2 < num1 && num2 < num3) ? console.log(num2) : 
		(num3 < num1 && num3 < num2) ? console.log(num3) : console.log('error');
/*----------------------------------------------------------------------------------*/


/*---------------------------------SECOND TASK--------------------------------------*/
console.log('second task------------------------------------------------------');

(intNum >= 0) ? 
	(intNum < 10) ? 
		console.log('positive one-digit number') : 
	(intNum < 100) ? 
		console.log('positive two-digit number') :
	(intNum < 1000) ?
		console.log('positive three-digit number') :
		console.log('error over than three-digit')
: (intNum > -10) ? 
		console.log('negative one-digit number') : 
	(intNum > -100) ? 
		console.log('negative two-digit number') :
	(intNum > -1000) ?
		console.log('negative three-digit number') :
		console.log('error over than three-digit');
/*----------------------------------------------------------------------------------*/


/*----------------------------------THIRD TASK--------------------------------------*/
console.log('third task------------------------------------------------------');

switch(num0to9) {
	case 0:
	console.log('null');
	break;
		case 1:
		console.log('one');
		break;
	case 2:
	console.log('two');
	break;
		case 3:
		console.log('three');
		break;
	case 4:
	console.log('four');
	break;
		case 5:
		console.log('five');
		break;
	case 6:
	console.log('six');
	break;
		case 7:
		console.log('seven');
		break;
	case 8:
	console.log('eight');
	break;
		case 9:
		console.log('njne');
		break;
	default:
	console.log('error');
	break;
}
/*----------------------------------------------------------------------------------*/


/*----------------------------------FOURTH TASK-------------------------------------*/
console.log('fourth task------------------------------------------------------');

switch(marks) {
		case 1:
		console.log('so bad');
		break;
	case 2:
	console.log('bad');
	break;
		case 3:
		console.log('not bad');
		break;
	case 4:
	console.log('good');
	break;
		case 5:
		console.log('excelent');
		break;
}
/*----------------------------------------------------------------------------------*/


/*----------------------------------FIFTH TASK--------------------------------------*/
console.log('fifth task------------------------------------------------------');

(uno == dos || uno == tres || dos == tres) ? console.log('true') : console.log('false');
/*----------------------------------------------------------------------------------*/
