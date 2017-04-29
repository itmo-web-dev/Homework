(function () {
    'use strict';

    console.log('Задачки');

/*3. Задача повышенной сложности: 
Изобразить клавиатуру и расположенные на ней клавиши 
в виде html документа. При нажатии клавиши пользователем 
на клавиатуре, подсвечивать нажатую клавишу на клавиатуре 
изображенной в html.*/
    
document.addEventListener('keydown', function(event) {
			 if (event.keyCode === 192) {
				var smb = document.getElementsByClassName('symbol')[0];
                 if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } else if (event.keyCode === 49) {
				var smb = document.getElementsByClassName('symbol')[1];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } else if (event.keyCode === 50) {
				var smb = document.getElementsByClassName('symbol')[2];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 51) {
				var smb = document.getElementsByClassName('symbol')[3];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 52) {
				var smb = document.getElementsByClassName('symbol')[4];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 53) {
				var smb = document.getElementsByClassName('symbol')[5];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 54) {
				var smb = document.getElementsByClassName('symbol')[6];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 55) {
				var smb = document.getElementsByClassName('symbol')[7];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 56) {
				var smb = document.getElementsByClassName('symbol')[8];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 57) {
				var smb = document.getElementsByClassName('symbol')[9];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 48) {
				var smb = document.getElementsByClassName('symbol')[10];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 173) {
				var smb = document.getElementsByClassName('symbol')[11];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 61) {
				var smb = document.getElementsByClassName('symbol')[12];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 8) {
				var smb = document.getElementsByClassName('delete lastitem')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 9) {
				var smb = document.getElementsByClassName('tab')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 81) {
				var smb = document.getElementsByClassName('letter')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 87) {
				var smb = document.getElementsByClassName('letter')[1];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 69) {
				var smb = document.getElementsByClassName('letter')[2];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 82) {
				var smb = document.getElementsByClassName('letter')[3];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 84) {
				var smb = document.getElementsByClassName('letter')[4];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 89) {
				var smb = document.getElementsByClassName('letter')[5];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 85) {
				var smb = document.getElementsByClassName('letter')[6];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 73) {
				var smb = document.getElementsByClassName('letter')[7];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 79) {
				var smb = document.getElementsByClassName('letter')[8];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 80) {
				var smb = document.getElementsByClassName('letter')[9];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 219) {
				var smb = document.getElementsByClassName('symbol')[13];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 221) {
				var smb = document.getElementsByClassName('symbol')[14];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 220) {
				var smb = document.getElementsByClassName('symbol lastitem')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 20) {
				var smb = document.getElementsByClassName('capslock')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 65) {
				var smb = document.getElementsByClassName('letter')[10];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 83) {
				var smb = document.getElementsByClassName('letter')[11];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 68) {
				var smb = document.getElementsByClassName('letter')[12];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 70) {
				var smb = document.getElementsByClassName('letter')[13];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 71) {
				var smb = document.getElementsByClassName('letter')[14];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 72) {
				var smb = document.getElementsByClassName('letter')[15];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 74) {
				var smb = document.getElementsByClassName('letter')[16];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 75) {
				var smb = document.getElementsByClassName('letter')[17];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 76) {
				var smb = document.getElementsByClassName('letter')[18];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } else if (event.keyCode === 59) {
				var smb = document.getElementsByClassName('symbol')[15];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 222) {
				var smb = document.getElementsByClassName('symbol')[16];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 13) {
				var smb = document.getElementsByClassName('return lastitem')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 16) {
				var smb = document.getElementsByClassName('left-shift')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 90) {
				var smb = document.getElementsByClassName('letter')[19];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 88) {
				var smb = document.getElementsByClassName('letter')[20];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 67) {
				var smb = document.getElementsByClassName('letter')[21];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 86) {
				var smb = document.getElementsByClassName('letter')[22];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 66) {
				var smb = document.getElementsByClassName('letter')[23];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 78) {
				var smb = document.getElementsByClassName('letter')[24];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 77) {
				var smb = document.getElementsByClassName('letter')[25];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 188) {
				var smb = document.getElementsByClassName('symbol')[17];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 190) {
				var smb = document.getElementsByClassName('symbol')[18];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 191) {
				var smb = document.getElementsByClassName('symbol')[19];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 16) {
				var smb = document.getElementsByClassName('right-shift lastitem')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 } 	else if (event.keyCode === 32) {
				var smb = document.getElementsByClassName('space lastitem')[0];
                if (smb.style.background == "") { 
                    smb.style.background = 'rgba(255, 0, 0, 0.42)'
                 } else {
                    smb.style.background = "" 
                 }
			 }      
		 }
		 );    
}());