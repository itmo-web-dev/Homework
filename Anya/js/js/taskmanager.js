;(function(){
	window.TaskManager = function(el){
		this.el = el;
		this.id = 0;
	}
	TaskManager.prototype.getId = function () {
		return this.id++;
	}
	
	TaskManager.prototype.addTask = function (str) {
		var newTask = new Task(str, this.getId());
		var html = newTask.render();
		this.el.appendChild(html);
	}

	function Task(str, id) {
		this.str = str;
		this.id = id;
	}

	Task.prototype.render = function () {
		var div = document.createElement('div');
		div.classList.add('task');
		var span = document.createElement('span');
		span.innerText = this.str;
		span.setAttribute('data-id', this.id);
		var checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.setAttribute('count-id', this.id);
		checkbox.addEventListener('click', function() {
			if(this.hasAttribute('checked')) {
				var span2 = document.querySelector('[data-id = "'+
					this.getAttribute('count-id')+'"]');
				span.classList.add('complete');
			} else {
				var span2 = document.querySelector('[data-id = "'+
					this.getAttribute('count-id')+'"]');
				span.classList.remove('complete');
			}
		});


		div.appendChild(span);
		div.appendChild(checkbox);

		return div;
	} 





}())

/* 1. TaskManager:
- создавать Task add("Название Task")
- getId()
2. Task: 
- template();
- complete();
*/